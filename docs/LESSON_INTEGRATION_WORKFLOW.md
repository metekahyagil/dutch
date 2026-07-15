# Lesson Integration Workflow

This document describes how to use the automated lesson integration workflow to add new lessons to the Dutch B1 Curriculum.

## Overview

The lesson integration workflow is a **single-command automation** that handles the entire process of creating a lesson from research output:

1. ✅ Validate research output structure
2. ✅ Archive research files
3. ✅ Update CURRICULUM.md (mark lesson Complete)
4. ✅ Update CHANGELOG.md with detailed entry
5. ✅ Publish the site (`npm run docs:publish`)
6. ✅ Commit and push to git (master branch)
7. ✅ Display next pending lesson information

**No manual steps. No manual git commands. No forgotten steps.**

## Before You Start

### Prerequisites

1. **Research output completed externally** — You have gathered the research from external sources and have it ready as a markdown file
2. **Lesson file already created** — The lesson file exists at `[CEFR Level]/Competency-[N]-[Name]/[Lesson ID].md` with all 20 sections from LESSON_STANDARD.md
3. **VitePress config updated** — The lesson has already been added to `docs/.vitepress/config.mjs` sidebar
4. **Lesson copied to docs/** — The lesson file has been copied to `docs/[CEFR Level]/...`

### Research Output Format

Your research file should be a markdown file with these 6 sections:

```markdown
# [Lesson ID] Research Output — [Competency Name]

## Grammar Concepts
[Explanations with examples]

## Vocabulary
[Table with Dutch, English, Article, Plural, POS, Example, Translation]

## Example Sentences & Dialogues
[Realistic dialogues]

## Cultural Notes
[Key insights]

## Exercises
[Exercise types with quantities]

## Assessment Criteria
[Mastery criteria]
```

## Usage

### Command Syntax

```bash
npm run lesson:integrate <lesson-id> <research-file>
```

### Example

```bash
npm run lesson:integrate A0-06 ./research-output.md
```

Or manually:

```bash
node scripts/integrate-lesson.js A0-06 ./research-output.md
```

### What Gets Automated

#### 1. Validation

The script checks that your research output has all 6 required sections:
- Grammar Concepts
- Vocabulary (30+ words recommended)
- Example Sentences & Dialogues
- Cultural Notes
- Exercises
- Assessment Criteria

**If validation fails:** The script stops and reports which sections are missing.

#### 2. Archive Research Response

Your research output is saved to:

```
shared/prompts/[Lesson ID]-research-response.md
```

This creates a permanent audit trail of where the lesson content came from.

#### 3. Update CURRICULUM.md

The lesson is marked as **Complete ✅** in `docs/CURRICULUM.md`:

**Before:**
```markdown
| 6 | A0-06 | Telling Time and Dates | ... | Pending | ... |
```

**After:**
```markdown
| 6 | A0-06 | Telling Time and Dates | ... | Complete ✅ | ... |
```

#### 4. Update CHANGELOG.md

A detailed entry is added to the top of the "### Added" section:

```markdown
- **2026-07-15** -- `A0/Competency-6-Telling-Time-and-Dates/A0-06.md` created 
  with complete lesson file. Covers telling time, days, months, dates, scheduling. 
  Includes 43 vocabulary words. **Author:** External research + OpenCode integration. 
  **Reason:** Complete A0-06 lesson.
```

#### 5. Publish the Site

Runs `npm run docs:publish`, which:
- Builds VitePress (`vitepress build docs` → `docs/.vitepress/dist/`)
- Syncs the build output into `docs/` itself (where GitHub Pages serves from)
- Cleans up stale artifacts from previous builds

**Result:** Your website immediately reflects the new lesson.

#### 6. Commit and Push

All changes are automatically committed and pushed to `master`:

```bash
git add -A
git commit -m "Complete A0-06 lesson (Telling Time and Dates)..."
git push origin master
```

**Result:** GitHub Pages automatically deploys the update (no GitHub Actions needed).

#### 7. Show Next Pending Lesson

The script reads `docs/CURRICULUM.md` and displays:

```
✓ A0-06 complete!

Next lesson ready: A0-R1 — Review Lesson 1
Research request: shared/prompts/A0-R1-research-request.md
```

---

## Complete Workflow Example

### Step 1: Do External Research

You conduct research on a lesson (using your preferred research source or AI tool). You follow the structure in `docs/RESEARCH_GUIDELINES.md` and end up with a markdown file containing all 6 required sections.

Save this file as: `./A0-06-research.md`

### Step 2: Create Lesson File (Manual)

Using the research output, you (or the research agent) create the full 20-section lesson file:

```
A0/Competency-6-Telling-Time-and-Dates/A0-06.md
```

This file must have all 20 sections per LESSON_STANDARD.md:
1. Lesson Header
2. Lesson Goal
3. Previous Knowledge
4. Why This Matters
5. Grammar
6. Grammar Reasoning
7. Vocabulary
8. Pronunciation
9. Dialogue
10. Reading
11. Listening
12. Speaking
13. Writing
14. Common Mistakes
15. Dutch Insight
16. Memory Tricks
17. Active Recall
18. Quiz
19. Homework
20. Summary

(Note: Future versions will automate this step too, but for now it requires manual effort)

### Step 3: Copy to VitePress (Manual)

Copy the lesson to the VitePress docs folder:

```bash
cp A0/Competency-6-Telling-Time-and-Dates/A0-06.md \
   docs/A0/Competency-6-Telling-Time-and-Dates/A0-06.md
```

### Step 4: Update VitePress Config (Manual)

Add the lesson to `docs/.vitepress/config.mjs` sidebar:

```javascript
{
  text: 'Competency 6: Telling Time and Dates',
  collapsed: false,
  items: [
    { text: 'Lesson A0-06', link: '/A0/Competency-6-Telling-Time-and-Dates/A0-06' }
  ]
}
```

### Step 5: Run the Integration Script (Automated)

```bash
npm run lesson:integrate A0-06 ./A0-06-research.md
```

**The script now handles everything:**
- ✅ Validates research output
- ✅ Archives research response
- ✅ Updates CURRICULUM.md
- ✅ Updates CHANGELOG.md
- ✅ Publishes the site
- ✅ Commits and pushes to git
- ✅ Shows next lesson information

---

## Troubleshooting

### Build Failed

**Error message:**
```
[✗] Build failed: ...
```

**Solution:**
Check the lesson file for syntax errors. The most common issues are:
- Unclosed markdown tables
- Incorrect heading levels (must be `##` only, not `###` or `####`)
- Broken links to `/shared/` files that don't exist

Fix the errors and run the script again.

### Git Push Failed

**Error message:**
```
[!] Git push failed, but lesson is otherwise complete
```

**Solution:**
This usually means there are uncommitted changes or a network issue. The lesson files are still created and the site is still published locally. You can manually push:

```bash
cd /path/to/Dutch-B1-Curriculum
git push origin master
```

### Validation Failed

**Error message:**
```
[✗] Missing sections: Grammar Concepts, Vocabulary
```

**Solution:**
Your research file is missing required sections. Add them before running the script again. See "Research Output Format" above.

---

## What NOT to Do

❌ **Don't run manual git commands** after the lesson is created — the script handles this
❌ **Don't manually run `npm run docs:build`** — use `npm run docs:publish` instead
❌ **Don't manually copy files to `docs/.vitepress/dist/`** — the publish script handles this
❌ **Don't manually edit generated HTML** — it will be overwritten next publish

---

## For Future Enhancement

Once lesson file creation is also automated, the entire workflow will be:

```bash
npm run lesson:integrate A0-07 ./research-output.md
```

And **every single step** (validate → create lesson → archive → update docs → publish → commit → push) will be handled automatically.

---

## Support

For issues or questions:
1. Check this document (you're reading it!)
2. Check `docs/RESEARCH_GUIDELINES.md` (research standards)
3. Check `docs/LESSON_STANDARD.md` (lesson structure requirements)
4. Check `AGENTS.md` (workflow overview)

---

*Last updated: 2026-07-15*
