# Lesson Integration Workflow

This document describes how to use the automated lesson integration workflow to add new lessons to the Dutch B1 Curriculum.

## Overview

The lesson integration workflow is a **single-command automation** that handles everything that
must happen after a lesson's content has been written:

1. Locate the lesson file and validate all 20 LESSON_STANDARD.md sections are present
2. Archive the research response (if provided)
3. Update `docs/CURRICULUM.md` (mark lesson Complete)
4. Update `CHANGELOG.md` with a detailed entry
5. Copy the lesson into `docs/[Level]/...` (VitePress source root)
6. Add the lesson to `docs/.vitepress/config.mjs` sidebar (skipped if already present)
7. Add the lesson to `docs/[Level]/index.md` landing page (skipped if already present)
8. Publish the site (`npm run docs:publish` -- build + sync into `docs/`)
9. **Verify** the resulting HTML file actually exists in `docs/` before committing anything
10. Commit and push to `master`
11. Display the next pending lesson

**No manual git commands. No manual VitePress config edits. No manual copying. No forgotten
publish step.**

## Division of Responsibility

- **You/the AI author** write the lesson's 20-section content file at its canonical location:
  `[CEFR Level]/Competency-[N]-[Name]/[Lesson ID].md` (per `docs/LESSON_STANDARD.md`). This is a
  content-authoring task that requires judgment and cannot be scripted.
- **The script** (`scripts/integrate-lesson.js`) handles every mechanical step after that: syncing
  to `docs/`, updating the sidebar and landing page, publishing, verifying, and committing/pushing.
  These steps are deterministic, so they are never done by hand and never skipped.

## Usage

### Command Syntax

```bash
npm run lesson:integrate <lesson-id> [research-response-file]
```

The research response file is optional -- pass it only if you have not already archived the
research output for this lesson under `shared/prompts/`.

### Example

```bash
npm run lesson:integrate A0-06 ./research-output.md
```

Or without a research file, if it's already archived:

```bash
npm run lesson:integrate A0-06
```

### Prerequisites

Before running the script, only one thing must exist:

- **The lesson file**, at `[CEFR Level]/Competency-[N]-[Name]/[Lesson ID].md`, with all 20
  sections from `docs/LESSON_STANDARD.md` in order (`## 1. Lesson Goal` through
  `## 20. Quality Checklist`).

Everything else (copying to `docs/`, sidebar, landing page, publish, commit, push) is handled by
the script.

### What Happens, Step by Step

1. **Locate + validate.** Searches `A0/`, `A1/`, `A2/`, `B1/` for `[Lesson ID].md` and checks every
   required `## N. Title` heading is present. Aborts with a clear error if the file is missing or
   incomplete -- nothing else runs.
2. **Archive research response** (only if a file was passed) to
   `shared/prompts/[Lesson ID]-research-response.md`.
3. **Update `docs/CURRICULUM.md`** -- marks the lesson row Complete. Skipped if already Complete.
4. **Update `CHANGELOG.md`** -- adds an entry under `### Added`. Skipped if an entry already
   mentions this lesson file.
5. **Copy into `docs/`** -- mirrors `[Level]/Competency-.../[Lesson ID].md` into
   `docs/[Level]/Competency-.../[Lesson ID].md` (VitePress's source root).
6. **Sidebar** -- checks `docs/.vitepress/config.mjs` for a link to this lesson; inserts a new
   competency block if missing.
7. **Landing page** -- checks `docs/[Level]/index.md` for a link to this lesson; inserts a new
   `### Competency N: Name` section if missing.
8. **Publish** -- runs `npm run docs:publish` (`vitepress build docs` then
   `scripts/publish-docs.js`, which syncs the build into `docs/`). This is the folder GitHub Pages
   serves (Branch: `master`, Folder: `/docs`). `docs:build` alone is never used here because it
   only writes to `docs/.vitepress/dist/`, which is not served.
9. **Verify** -- confirms `docs/[Level]/Competency-.../[Lesson ID].html` actually exists on disk.
   If the build didn't produce it, the script stops here with an error and does **not** commit,
   so a broken/incomplete state never gets pushed.
10. **Commit and push** -- `git add -A`, commit as `Add [Lesson ID]: [Competency Name]`, push to
    `master`.
11. **Next lesson** -- reads the first `Pending` row from `docs/CURRICULUM.md` and prints it.

---

## Troubleshooting

### "Could not find [Lesson ID].md"

The lesson content file hasn't been written yet, or isn't at the expected path
(`[Level]/Competency-[N]-[Name]/[Lesson ID].md`). Write it first per `docs/LESSON_STANDARD.md`.

### "is missing required sections (or out of order)"

One or more of the 20 `## N. Title` headings is missing, misnumbered, or misspelled. Compare
against `docs/LESSON_STANDARD.md` and the list in the script's `REQUIRED_SECTIONS`.

### "docs:publish failed"

The VitePress build itself failed. Common causes:
- Unclosed markdown tables
- Heading levels other than `##` used for section titles
- Broken links to `/shared/` files that don't exist

Fix the lesson file and rerun the script.

### "Expected ... was not created by the build"

The build succeeded but didn't produce the expected HTML file -- usually means the lesson wasn't
placed in the folder the script expected, or the sidebar link path doesn't match the file location.
Nothing was committed; safe to fix and rerun.

### Git push failed

Resolve the underlying git issue (auth, conflicts, network) and push manually:

```bash
git push origin master
```

Everything else (lesson file, docs/ copy, CURRICULUM.md, CHANGELOG.md) is already correct locally
even if the push itself failed.

---

## What NOT to Do

- Don't run `npm run docs:build` alone expecting the site to update -- it only writes to
  `docs/.vitepress/dist/`, which is not served. Use `npm run docs:publish` or, better, let
  `npm run lesson:integrate` handle it.
- Don't manually edit generated HTML under `docs/*.html` or `docs/assets/` -- it is overwritten
  every publish.
- Don't hand-edit `docs/.vitepress/dist/` -- it's a build cache, not committed, not served.
- Don't create multiple lessons in parallel -- process one lesson at a time, in strict curricular
  order, per `docs/CURRICULUM.md`.

---

## Support

For issues or questions:
1. Check this document (you're reading it!)
2. Check `docs/RESEARCH_GUIDELINES.md` (research standards)
3. Check `docs/LESSON_STANDARD.md` (lesson structure requirements)
4. Check `AGENTS.md` (workflow overview)
5. Check the `dutch-lesson-integration` skill definition for the full end-to-end process

---

*Last updated: 2026-07-15*
