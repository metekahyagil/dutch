// Syncs the VitePress build output (docs/.vitepress/dist) into docs/ itself,
// so GitHub Pages can serve the site directly via "Deploy from a branch"
// (Branch: master, Folder: /docs) without needing GitHub Actions.
//
// Run via: npm run docs:publish
//
// This deletes previously generated artifacts in docs/ (old *.html pages,
// assets/, hashmap.json, vp-icons.css, 404.html) before copying the fresh
// build in, so stale hashed asset files don't accumulate over time. It never
// touches docs/*.md sources, docs/.vitepress/, or docs/.nojekyll.

import { existsSync, rmSync, readdirSync, statSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const docsDir = join(root, 'docs');
const distDir = join(docsDir, '.vitepress', 'dist');

if (!existsSync(distDir)) {
  console.error('No build found at docs/.vitepress/dist. Run "npm run docs:build" first.');
  process.exit(1);
}

// Directories/files inside docs/ that must never be touched by this script.
const protectedTopLevel = new Set(['.vitepress', '.nojekyll']);

function isMarkdownSource(fullPath) {
  return fullPath.endsWith('.md');
}

// Remove previously generated output from docs/, keeping .md sources and
// protected paths intact.
function cleanGenerated(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const rel = fullPath.substring(docsDir.length + 1);
    const topLevel = rel.split(/[\\/]/)[0];

    if (protectedTopLevel.has(topLevel)) continue;

    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      cleanGenerated(fullPath);
      // Remove the directory if it's now empty (all generated files removed).
      if (readdirSync(fullPath).length === 0) rmSync(fullPath, { recursive: true, force: true });
    } else if (!isMarkdownSource(fullPath)) {
      rmSync(fullPath, { force: true });
    }
  }
}

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

console.log('Cleaning previously generated files from docs/...');
cleanGenerated(docsDir);

console.log('Copying fresh build from docs/.vitepress/dist into docs/...');
copyDir(distDir, docsDir);

console.log('Done. docs/ now mirrors the latest build for GitHub Pages (Branch: master, Folder: /docs).');
