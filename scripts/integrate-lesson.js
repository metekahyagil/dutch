#!/usr/bin/env node

/**
 * Lesson Integration Workflow
 *
 * Mechanically completes everything that must happen AFTER a lesson's 20-section
 * content file has already been written to its canonical location
 * (`[Level]/Competency-[N]-[Name]/[Lesson ID].md`) by following
 * docs/LESSON_STANDARD.md. This script never writes lesson prose itself -- that
 * part requires judgment and is done by the AI/author first.
 *
 * What this script guarantees, every time, with no steps skipped:
 *   1. Locate + validate the lesson source file (all 20 "## N. Title" sections present)
 *   2. Archive the research response (if provided)
 *   3. Mark the lesson Complete in docs/CURRICULUM.md
 *   4. Add an entry to CHANGELOG.md
 *   5. Copy the lesson file into docs/[Level]/... (VitePress source root)
 *   6. Ensure docs/.vitepress/config.mjs sidebar has an entry for this lesson
 *   7. Ensure docs/[Level]/index.md landing page lists this competency/lesson
 *   8. Run `npm run docs:publish` (build + sync docs/.vitepress/dist -> docs/)
 *      -- NEVER `docs:build` alone, since GitHub Pages serves docs/ directly
 *   9. VERIFY the resulting HTML file actually exists in docs/ before committing
 *      (fails loudly instead of silently deploying nothing, which is what
 *      caused A0-06 to 404 previously)
 *  10. git add -A, commit, push to master
 *  11. Report the next pending lesson from docs/CURRICULUM.md
 *
 * Usage:
 *   node scripts/integrate-lesson.js <lesson-id> [research-response-file]
 *
 * Example:
 *   node scripts/integrate-lesson.js A0-06 ./research-output.md
 *   node scripts/integrate-lesson.js A0-06        (research already archived)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync, readdirSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

const colors = {
  reset: '\x1b[0m', green: '\x1b[32m', red: '\x1b[31m',
  yellow: '\x1b[33m', blue: '\x1b[34m', cyan: '\x1b[36m',
};

function log(level, message) {
  const prefix = {
    info: `${colors.cyan}[INFO]${colors.reset}`,
    success: `${colors.green}[OK]${colors.reset}`,
    error: `${colors.red}[FAIL]${colors.reset}`,
    warning: `${colors.yellow}[WARN]${colors.reset}`,
    step: `${colors.blue}[STEP]${colors.reset}`,
  }[level] || `[${level}]`;
  console.log(`${prefix} ${message}`);
}

function fail(message) {
  log('error', message);
  process.exit(1);
}

const REQUIRED_SECTIONS = [
  'Lesson Goal', 'Previous Knowledge', 'Why This Matters', 'Grammar', 'Grammar Reasoning',
  'Vocabulary', 'Pronunciation', 'Dialogue', 'Reading', 'Listening', 'Speaking', 'Writing',
  'Common Mistakes', 'Dutch Insight', 'Memory Tricks', 'Active Recall', 'Quiz', 'Homework',
  'Summary', 'Quality Checklist',
];

/** Step 1: Find the canonical lesson source file and validate its structure */
function findAndValidateLessonFile(lessonId) {
  log('step', `Locating source file for ${lessonId}...`);

  const matches = simpleGlob(projectRoot, `${lessonId}.md`, ['A0', 'A1', 'A2', 'B1']);
  if (matches.length === 0) {
    fail(`Could not find ${lessonId}.md under A0/, A1/, A2/, or B1/. ` +
      `Write the full 20-section lesson file first, then run this script.`);
  }
  if (matches.length > 1) {
    fail(`Found multiple files named ${lessonId}.md: ${matches.join(', ')}`);
  }

  const sourcePath = matches[0];
  const content = readFileSync(sourcePath, 'utf8');

  const missing = REQUIRED_SECTIONS.filter((title, i) => {
    const pattern = new RegExp(`^##\\s*${i + 1}\\.\\s*${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'm');
    return !pattern.test(content);
  });

  if (missing.length > 0) {
    fail(`${lessonId}.md is missing required sections (or out of order): ${missing.join(', ')}`);
  }

  log('success', `Found and validated: ${relative(projectRoot, sourcePath)} (all 20 sections present)`);
  return { sourcePath, content };
}

/** Minimal recursive glob for an exact filename under a set of top-level dirs */
function simpleGlob(root, filename, topDirs) {
  const results = [];
  function walk(dir) {
    if (!existsSync(dir)) return;
    for (const entry of readdirSyncSafe(dir)) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name === filename) results.push(full);
    }
  }
  for (const top of topDirs) walk(join(root, top));
  return results;
}

function readdirSyncSafe(dir) {
  try {
    return readdirSync(dir, { withFileTypes: true });
  } catch {
    return [];
  }
}

/** Step 2: Archive research response */
function archiveResearchResponse(lessonId, researchFile) {
  if (!researchFile) {
    log('info', 'No research response file given, skipping archive step');
    return;
  }
  log('step', `Archiving research response for ${lessonId}...`);
  const content = readFileSync(researchFile, 'utf8');
  const responsePath = join(projectRoot, 'shared', 'prompts', `${lessonId}-research-response.md`);
  mkdirSync(dirname(responsePath), { recursive: true });
  writeFileSync(responsePath, content, 'utf8');
  log('success', `Archived: ${relative(projectRoot, responsePath)}`);
}

/** Step 3: Mark lesson Complete in CURRICULUM.md (idempotent) */
function updateCurriculumStatus(lessonId) {
  log('step', 'Updating docs/CURRICULUM.md...');
  const curriculumPath = join(projectRoot, 'docs', 'CURRICULUM.md');
  let curriculum = readFileSync(curriculumPath, 'utf8');

  if (new RegExp(`\\| ${lessonId} \\|[^\\n]*\\| Complete`).test(curriculum)) {
    log('info', `${lessonId} already marked Complete, skipping`);
    return true;
  }

  const pattern = new RegExp(`(\\| \\d+ \\| ${lessonId} \\|[^|]*\\|[^|]*\\|)\\s*Pending\\s*(\\|)`);
  if (!pattern.test(curriculum)) {
    fail(`Could not find a Pending row for ${lessonId} in docs/CURRICULUM.md`);
  }
  curriculum = curriculum.replace(pattern, `$1 Complete \u2705 $2`);
  writeFileSync(curriculumPath, curriculum, 'utf8');
  log('success', `${lessonId} marked Complete`);
  return true;
}

/** Step 4: Add CHANGELOG.md entry (idempotent) */
function updateChangelog(lessonId, competencyName) {
  log('step', 'Updating CHANGELOG.md...');
  const changelogPath = join(projectRoot, 'CHANGELOG.md');
  let changelog = readFileSync(changelogPath, 'utf8');

  if (changelog.includes(`${lessonId}.md\``)) {
    log('info', `CHANGELOG.md already has an entry mentioning ${lessonId}.md, skipping`);
    return;
  }

  const date = new Date().toISOString().split('T')[0];
  const level = lessonId.slice(0, 2);
  const entry = `- **${date}** -- \`${level}/.../${lessonId}.md\` created with complete lesson file ` +
    `(all 20 sections, ${competencyName}). **Author:** External research + OpenCode integration. ` +
    `**Reason:** Complete ${lessonId} lesson.`;

  const addedIndex = changelog.indexOf('### Added');
  if (addedIndex === -1) fail('Could not find "### Added" section in CHANGELOG.md');
  const insertIndex = changelog.indexOf('\n', addedIndex) + 1;
  changelog = changelog.slice(0, insertIndex) + '\n' + entry + '\n' + changelog.slice(insertIndex);
  writeFileSync(changelogPath, changelog, 'utf8');
  log('success', 'CHANGELOG.md updated');
}

/** Step 5: Copy lesson source into docs/ (VitePress source root) */
function copyIntoDocs(sourcePath) {
  log('step', 'Copying lesson into docs/ (VitePress source root)...');
  const relPath = relative(projectRoot, sourcePath); // e.g. A0/Competency-6-.../A0-06.md
  const destPath = join(projectRoot, 'docs', relPath);
  mkdirSync(dirname(destPath), { recursive: true });
  copyFileSync(sourcePath, destPath);
  log('success', `Copied to docs/${relPath.replace(/\\/g, '/')}`);
  return { relPath: relPath.replace(/\\/g, '/'), destPath };
}

/** Step 6: Ensure the VitePress sidebar has an entry for this lesson (idempotent) */
function ensureSidebarEntry(lessonId, level, competencyFolder, competencyName) {
  log('step', 'Checking docs/.vitepress/config.mjs sidebar...');
  const configPath = join(projectRoot, 'docs', '.vitepress', 'config.mjs');
  let config = readFileSync(configPath, 'utf8');

  const linkPath = `/${level}/${competencyFolder}/${lessonId}`;
  if (config.includes(linkPath)) {
    log('info', 'Sidebar already has this lesson, skipping');
    return;
  }

  const numMatch = competencyFolder.match(/^Competency-(\d+)-/);
  const compNum = numMatch ? numMatch[1] : '?';
  const newBlock =
`            {
              text: 'Competency ${compNum}: ${competencyName}',
              collapsed: false,
              items: [
                { text: 'Lesson ${lessonId}', link: '${linkPath}' }
              ]
            }`;

  const sidebarKey = `'/${level}/'`;
  const sidebarIdx = config.indexOf(sidebarKey);
  if (sidebarIdx === -1) {
    fail(`No sidebar section for '/${level}/' in config.mjs -- add the level section manually first.`);
  }

  // Find the closing "]" of this level's items array (the one right before the
  // matching "}\n        }" that closes the sidebar entry) and insert before it.
  const itemsArrayEnd = config.indexOf('\n           ]', sidebarIdx);
  if (itemsArrayEnd === -1) {
    fail('Could not locate sidebar items array end to insert new entry -- update config.mjs manually.');
  }

  config = config.slice(0, itemsArrayEnd) + ',\n' + newBlock + config.slice(itemsArrayEnd);
  writeFileSync(configPath, config, 'utf8');
  log('success', `Sidebar entry added for ${lessonId}`);
}

/** Step 7: Ensure the level's landing page (docs/[Level]/index.md) lists this competency (idempotent) */
function ensureLevelIndexEntry(level, lessonId, competencyFolder, competencyName) {
  log('step', `Checking docs/${level}/index.md landing page...`);
  const indexPath = join(projectRoot, 'docs', level, 'index.md');
  const linkPath = `/${level}/${competencyFolder}/${lessonId}`;

  if (!existsSync(indexPath)) {
    fail(`docs/${level}/index.md does not exist -- create the level landing page manually first.`);
  }

  let content = readFileSync(indexPath, 'utf8');
  if (content.includes(linkPath)) {
    log('info', `${level}/index.md already lists ${lessonId}, skipping`);
    return;
  }

  const numMatch = competencyFolder.match(/^Competency-(\d+)-/);
  const compNum = numMatch ? numMatch[1] : '?';
  const section = `\n### Competency ${compNum}: ${competencyName}\n\n- **[Lesson ${lessonId}](${linkPath})**\n`;

  const dividerIdx = content.indexOf('\n---\n');
  if (dividerIdx !== -1) {
    content = content.slice(0, dividerIdx) + section + content.slice(dividerIdx);
  } else {
    content += section;
  }
  writeFileSync(indexPath, content, 'utf8');
  log('success', `${level}/index.md updated with Competency ${compNum}`);
}

/** Step 8: Build + sync (never build alone) */
function publishSite() {
  log('step', 'Running npm run docs:publish (build + sync into docs/)...');
  try {
    const output = execSync('npm run docs:publish', { cwd: projectRoot, encoding: 'utf8' });
    log('success', 'Site built and synced');
    return true;
  } catch (error) {
    log('error', `docs:publish failed:\n${error.stdout || error.message}`);
    return false;
  }
}

/** Step 9: Verify the expected HTML actually exists before committing */
function verifyDeployed(level, competencyFolder, lessonId) {
  log('step', 'Verifying published HTML exists in docs/...');
  const htmlPath = join(projectRoot, 'docs', level, competencyFolder, `${lessonId}.html`);
  if (!existsSync(htmlPath)) {
    fail(`Expected docs/${level}/${competencyFolder}/${lessonId}.html was not created by the build. ` +
      `Aborting before commit -- nothing was deployed.`);
  }
  log('success', `Verified: docs/${level}/${competencyFolder}/${lessonId}.html exists`);
}

/** Step 10: Commit and push everything */
function commitAndPush(lessonId, competencyName) {
  log('step', 'Committing and pushing to git...');
  const status = execSync('git status --porcelain', { cwd: projectRoot, encoding: 'utf8' }).trim();
  if (!status) {
    log('info', 'No changes to commit');
    return;
  }
  execSync('git add -A', { cwd: projectRoot });
  const commitMessage = `Add ${lessonId}: ${competencyName}`;
  execSync(`git commit -m "${commitMessage}"`, { cwd: projectRoot, encoding: 'utf8' });
  log('info', `Committed: ${commitMessage}`);
  execSync('git push origin master', { cwd: projectRoot, encoding: 'utf8' });
  log('success', 'Pushed to origin/master');
}

/** Step 11: Report next pending lesson */
function getNextPendingLesson() {
  const curriculumPath = join(projectRoot, 'docs', 'CURRICULUM.md');
  const curriculum = readFileSync(curriculumPath, 'utf8');
  const match = curriculum.match(/\|\s*\d+\s*\|\s*(\w+-\w+\d*)\s*\|\s*([^|]+)\s*\|[^|]*\|\s*Pending\s*\|/);
  return match ? { id: match[1].trim(), name: match[2].trim() } : null;
}

/** Look up the competency display name for a lesson from CURRICULUM.md */
function getCompetencyName(lessonId) {
  const curriculumPath = join(projectRoot, 'docs', 'CURRICULUM.md');
  const curriculum = readFileSync(curriculumPath, 'utf8');
  const match = curriculum.match(new RegExp(`\\| ${lessonId} \\|\\s*([^|]+)\\|`));
  return match ? match[1].trim() : lessonId;
}

async function main() {
  log('info', 'Dutch B1 Curriculum Lesson Integration Workflow');
  log('info', '='.repeat(60));

  const lessonId = process.argv[2];
  const researchFile = process.argv[3];

  if (!lessonId) {
    log('error', 'Usage: node scripts/integrate-lesson.js <lesson-id> [research-response-file]');
    process.exit(1);
  }

  const { sourcePath } = findAndValidateLessonFile(lessonId);
  const relPath = relative(projectRoot, sourcePath).replace(/\\/g, '/'); // A0/Competency-6-.../A0-06.md
  const [level, competencyFolder] = relPath.split('/');
  const competencyName = getCompetencyName(lessonId);

  archiveResearchResponse(lessonId, researchFile);
  updateCurriculumStatus(lessonId);
  updateChangelog(lessonId, competencyName);
  copyIntoDocs(sourcePath);
  ensureSidebarEntry(lessonId, level, competencyFolder, competencyName);
  ensureLevelIndexEntry(level, lessonId, competencyFolder, competencyName);

  if (!publishSite()) process.exit(1);
  verifyDeployed(level, competencyFolder, lessonId);
  commitAndPush(lessonId, competencyName);

  const next = getNextPendingLesson();
  log('info', '');
  log('success', `${lessonId} complete and LIVE.`);
  if (next) {
    log('info', `Next pending lesson: ${next.id} -- ${next.name}`);
  } else {
    log('success', 'All 34 lessons complete!');
  }
  log('info', '='.repeat(60));
}

main().catch((error) => {
  log('error', error.stack || error.message);
  process.exit(1);
});
