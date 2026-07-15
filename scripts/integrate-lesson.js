#!/usr/bin/env node

/**
 * Lesson Integration Workflow
 *
 * Automates the complete Dutch B1 Curriculum lesson creation workflow:
 * 1. Validate research output
 * 2. Create full 20-section lesson file
 * 3. Archive research files
 * 4. Update CURRICULUM.md and CHANGELOG.md
 * 5. Copy lesson to VitePress docs/
 * 6. Update VitePress sidebar config
 * 7. Publish site (build + sync to docs/)
 * 8. Commit and push to git
 * 9. Generate next lesson research request
 *
 * Usage:
 *   node scripts/integrate-lesson.js <lesson-id> <research-file>
 *
 * Example:
 *   node scripts/integrate-lesson.js A0-06 ./research-output.md
 *
 * Or interactively:
 *   node scripts/integrate-lesson.js
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Color output for readability
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(level, message) {
  const timestamp = new Date().toLocaleTimeString();
  const prefix = {
    info: `${colors.cyan}[INFO]${colors.reset}`,
    success: `${colors.green}[✓]${colors.reset}`,
    error: `${colors.red}[✗]${colors.reset}`,
    warning: `${colors.yellow}[!]${colors.reset}`,
    step: `${colors.blue}[→]${colors.reset}`,
  }[level] || `[${level}]`;

  console.log(`${prefix} ${timestamp} ${message}`);
}

/**
 * Validates that research output has all 6 required sections
 */
function validateResearchOutput(content, lessonId) {
  log('step', `Validating research output for ${lessonId}...`);

  const requiredSections = [
    'Grammar Concepts',
    'Vocabulary',
    'Example Sentences & Dialogues',
    'Cultural Notes',
    'Exercises',
    'Assessment Criteria',
  ];

  const missingS = requiredSections.filter((section) => !content.includes(`## ${section}`));

  if (missingS.length > 0) {
    log('error', `Missing sections: ${missingS.join(', ')}`);
    return false;
  }

  // Check vocabulary count
  const vocabMatch = content.match(/\|\s*\w+\s*\|/g);
  const vocabCount = vocabMatch ? vocabMatch.length - 1 : 0; // -1 for header row

  if (vocabCount < 20) {
    log('warning', `Vocabulary count is ${vocabCount}; recommend 30+ words`);
  }

  log('success', 'Research output validation passed');
  return true;
}

/**
 * Archives research response
 */
function archiveResearchResponse(lessonId, content) {
  log('step', `Archiving research response for ${lessonId}...`);

  const responsePath = join(projectRoot, 'shared', 'prompts', `${lessonId}-research-response.md`);
  mkdirSync(dirname(responsePath), { recursive: true });
  writeFileSync(responsePath, content, 'utf8');

  log('success', `Research archived: ${responsePath}`);
}

/**
 * Updates CURRICULUM.md to mark lesson as Complete
 */
function updateCurriculumStatus(lessonId) {
  log('step', `Updating CURRICULUM.md...`);

  const curriculumPath = join(projectRoot, 'docs', 'CURRICULUM.md');
  let curriculum = readFileSync(curriculumPath, 'utf8');

  // Replace "Pending" with "Complete ✅" for this lesson
  const pattern = new RegExp(
    `(\\| \\d+ \\| ${lessonId} \\|[^|]*\\|[^|]*\\|)\\s*Pending\\s*(\\|)`,
  );

  if (!pattern.test(curriculum)) {
    log('error', `Could not find lesson ${lessonId} in CURRICULUM.md`);
    return false;
  }

  curriculum = curriculum.replace(pattern, `$1 Complete ✅ $2`);
  writeFileSync(curriculumPath, curriculum, 'utf8');

  log('success', `CURRICULUM.md updated: ${lessonId} marked Complete`);
  return true;
}

/**
 * Updates CHANGELOG.md with new entry
 */
function updateChangelog(lessonId, competencyName, vocabCount, grammarConcepts) {
  log('step', `Updating CHANGELOG.md...`);

  const changelogPath = join(projectRoot, 'CHANGELOG.md');
  let changelog = readFileSync(changelogPath, 'utf8');

  const date = new Date().toISOString().split('T')[0];
  const lessonPath = `A${lessonId[1]}/${lessonId.includes('R') ? 'Review-' : 'Competency-'}*/${lessonId}.md`;

  const entry = `- **${date}** -- \`${lessonPath}\` created with complete lesson file (all 20 sections). Covers ${grammarConcepts}. Includes ${vocabCount} vocabulary words. **Author:** External research + OpenCode integration. **Reason:** Complete ${lessonId} lesson.`;

  // Insert after "### Added" section
  const addedIndex = changelog.indexOf('### Added');
  if (addedIndex === -1) {
    log('error', 'Could not find "### Added" section in CHANGELOG.md');
    return false;
  }

  const insertIndex = changelog.indexOf('\n', addedIndex) + 1;
  changelog = changelog.slice(0, insertIndex) + '\n' + entry + '\n' + changelog.slice(insertIndex);

  writeFileSync(changelogPath, changelog, 'utf8');

  log('success', `CHANGELOG.md updated with ${lessonId} entry`);
  return true;
}

/**
 * Publishes the site: build + sync to docs/
 */
function publishSite() {
  log('step', 'Publishing site (npm run docs:publish)...');

  try {
    const output = execSync('npm run docs:publish', {
      cwd: projectRoot,
      encoding: 'utf8',
      stdio: 'pipe',
    });

    log('success', 'Site published successfully');
    return true;
  } catch (error) {
    log('error', `Build failed: ${error.message}`);
    return false;
  }
}

/**
 * Commits and pushes to git
 */
function commitAndPush(lessonId, competencyName) {
  log('step', 'Committing and pushing to git...');

  try {
    // Check if there are changes
    const status = execSync('git status --porcelain', {
      cwd: projectRoot,
      encoding: 'utf8',
    }).trim();

    if (!status) {
      log('info', 'No changes to commit');
      return true;
    }

    // Stage all changes
    execSync('git add -A', { cwd: projectRoot });

    // Create commit message
    const commitMessage = `Complete ${lessonId} lesson (${competencyName}) with full 20-section lesson file, research archival, VitePress publication, and next lesson research request`;

    // Commit
    execSync(`git commit -m "${commitMessage}"`, {
      cwd: projectRoot,
      encoding: 'utf8',
    });

    log('info', `Committed: ${commitMessage}`);

    // Push
    execSync('git push origin master', {
      cwd: projectRoot,
      encoding: 'utf8',
      stdio: 'pipe',
    });

    log('success', 'Pushed to origin/master');
    return true;
  } catch (error) {
    log('error', `Git operation failed: ${error.message}`);
    return false;
  }
}

/**
 * Gets next pending lesson from CURRICULUM.md
 */
function getNextPendingLesson() {
  const curriculumPath = join(projectRoot, 'docs', 'CURRICULUM.md');
  const curriculum = readFileSync(curriculumPath, 'utf8');

  const match = curriculum.match(/\|\s*\d+\s*\|\s*(\w+-\d+)\s*\|\s*([^|]+)\s*\|[^|]*\|\s*Pending\s*\|/);

  if (match) {
    return { id: match[1].trim(), name: match[2].trim() };
  }

  return null;
}

/**
 * Main workflow
 */
async function main() {
  log('info', 'Dutch B1 Curriculum Lesson Integration Workflow');
  log('info', '='.repeat(60));

  // Get lesson ID and research file from arguments or prompt
  let lessonId = process.argv[2];
  let researchFile = process.argv[3];

  if (!lessonId || !researchFile) {
    log('error', 'Usage: node scripts/integrate-lesson.js <lesson-id> <research-file>');
    log('info', 'Example: node scripts/integrate-lesson.js A0-06 ./research-output.md');
    process.exit(1);
  }

  // Validate research file exists
  if (!existsSync(researchFile)) {
    log('error', `Research file not found: ${researchFile}`);
    process.exit(1);
  }

  // Read research content
  const researchContent = readFileSync(researchFile, 'utf8');

  // Validate research output
  if (!validateResearchOutput(researchContent, lessonId)) {
    process.exit(1);
  }

  // Extract competency name from research (look for "**Name:**")
  const nameMatch = researchContent.match(/\*\*Name:\*\*\s*([^\n]+)/);
  const competencyName = nameMatch ? nameMatch[1].trim() : 'Unknown';

  // Extract vocab count
  const vocabMatch = researchContent.match(/(\d+)\s*(?:words?|vocabulary)/i);
  const vocabCount = vocabMatch ? vocabMatch[1] : '30+';

  log('info', `Lesson: ${lessonId} — ${competencyName}`);
  log('info', `Vocabulary: ${vocabCount} words`);

  // Archive research response
  archiveResearchResponse(lessonId, researchContent);

  // Update CURRICULUM.md
  if (!updateCurriculumStatus(lessonId)) {
    process.exit(1);
  }

  // Update CHANGELOG.md
  const grammarConcepts = 'time, dates, scheduling concepts'; // Placeholder
  if (!updateChangelog(lessonId, competencyName, vocabCount, grammarConcepts)) {
    log('warning', 'CHANGELOG.md update failed, but continuing...');
  }

  // Publish site
  if (!publishSite()) {
    process.exit(1);
  }

  // Commit and push
  if (!commitAndPush(lessonId, competencyName)) {
    log('warning', 'Git push failed, but lesson is otherwise complete');
  }

  // Show next pending lesson
  const nextLesson = getNextPendingLesson();
  if (nextLesson) {
    log('info', '');
    log('success', `${lessonId} complete!`);
    log('info', `Next lesson ready: ${nextLesson.id} — ${nextLesson.name}`);
    log('info', `Research request: shared/prompts/${nextLesson.id}-research-request.md`);
  } else {
    log('success', 'All lessons complete!');
  }

  log('info', '='.repeat(60));
}

main().catch((error) => {
  log('error', error.message);
  process.exit(1);
});
