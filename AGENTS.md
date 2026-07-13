# AGENTS.md

This is a **content-authoring repository**, not a software project. There is no code, no build, no
lint, no test suite, and no CI. All "verification" is manual/documentary: following the standards
in `docs/` and checking things off the checklists they contain.

## Current state (check before assuming content exists)

- **Phase 1 (architecture/docs) is done. Phase 2 (curriculum planning) has NOT started.**
- The project has adopted a **competency-driven content model**: `docs/CURRICULUM_PRINCIPLES.md` is
  now the single highest-precedence document, `docs/CEFR_GUIDE.md` has the detailed grammar/
  vocabulary/skills scope per level, and `docs/COMPETENCY_MAP.md` defines the competencies each level
  is built from. Content is organized `CEFR Level -> Competency -> Unit -> Lesson -> Exercises`, not a
  flat `Level -> Module -> Lesson` list sized in advance.
- `docs/COMPETENCY_MAP.md`, `docs/CURRICULUM.md`, `docs/GRAMMAR_MAP.md`, `docs/VOCABULARY_ROADMAP.md`
  are stubs ("To be completed in Phase 2"). Only a partial A0 grammar table exists as an example.
  Complete `docs/COMPETENCY_MAP.md` first -- `docs/CURRICULUM.md`, `docs/GRAMMAR_MAP.md`, and
  `docs/VOCABULARY_ROADMAP.md` are meant to be generated from it.
- `shared/grammar/`, `shared/vocabulary/`, `shared/templates/`, `shared/assets/`,
  `shared/csv/`, `agents/`, and all of `A0/ A1/ A2/ B1/` are **empty**. `shared/prompts/` contains
  reusable prompt templates for lesson creation and for the Phase 2 research tasks below.
- `shared/vocabulary/master.csv` -- the single source of truth referenced everywhere -- **does not
  exist yet.** Don't assume you can "look up" a word there; you may need to create it.
- See `ROADMAP.md` for phase order and `CHANGELOG.md` for what's actually been added so far.
- The file `../Chat.md` (one level up, outside this repo) was the original planning transcript that
  proposed the Curriculum Principles document, the detailed CEFR breakdown, and the competency-driven
  model. Its content has now been formally applied into `docs/CURRICULUM_PRINCIPLES.md`,
  `docs/CEFR_GUIDE.md`, and `docs/COMPETENCY_MAP.md` -- treat those `docs/` files as authoritative
  going forward, not the transcript itself.

## Required reading order before creating any content

1. `docs/CURRICULUM_PRINCIPLES.md` -- highest-precedence educational principles, read this first.
2. `docs/AI_GUIDELINES.md` -- full agent workflow, this is the real spec.
3. `docs/LESSON_STANDARD.md` -- mandatory 20-section lesson template.
4. `docs/GRAMMAR_STANDARD.md`, `docs/VOCABULARY_STANDARD.md` -- formats for shared reference files.
5. `docs/STYLE_GUIDE.md` -- formatting rules (see below for the non-obvious ones).
6. `docs/CEFR_GUIDE.md` -- what belongs in each CEFR level.
7. `docs/COMPETENCY_MAP.md`, `docs/CURRICULUM.md`, `docs/GRAMMAR_MAP.md`,
   `docs/VOCABULARY_ROADMAP.md` -- what's planned/taught and when (currently mostly empty stubs, see
   above).
8. `docs/QUALITY_CHECKLIST.md` -- pre-submission validation.

## Non-negotiable invariants

- **Competencies before lesson count.** `docs/COMPETENCY_MAP.md` defines what a level must contain
  (real-world can-do abilities); `docs/CURRICULUM.md` (units/lessons) is generated from it, never the
  other way around. Do not invent a target lesson count for a level.
- **Single source of truth, no duplication.** Vocabulary definitions live only in
  `shared/vocabulary/master.csv`; grammar explanations live only in `shared/grammar/*.md`. Lessons
  **reference** these (`**See:** /shared/grammar/...` or `/shared/vocabulary/master.csv`), they never
  redefine them.
- **No grammar or vocabulary before it's taught.** Before writing any lesson content, cross-check
  `docs/GRAMMAR_MAP.md` and `docs/VOCABULARY_ROADMAP.md`/`master.csv` for what's already available.
  Reading/dialogue/exercise text may only use previously-taught or current-lesson items.
- **One new grammar concept per lesson**, **20–35 new vocabulary words max** per lesson.
- **Review lessons** occur after every 5 lessons, introduce **zero** new grammar/vocabulary, and only
  consolidate prior material.
- **Lesson files must have all 20 sections from `docs/LESSON_STANDARD.md`, in order, none omitted.**
  If a section doesn't apply, keep the heading with a short explanatory note instead of deleting it.
- **Dependencies must form a DAG** -- no lesson (or unit, or competency) may depend, directly or
  indirectly, on one from a later CEFR level.
- Every content-affecting change should get an entry in `CHANGELOG.md` (date, changed, author, reason),
  and if it changes curriculum/grammar/vocab, update `COMPETENCY_MAP.md`/`CURRICULUM.md`/
  `GRAMMAR_MAP.md`/`VOCABULARY_ROADMAP.md` accordingly.

## Style gotchas that differ from generic Markdown defaults (`docs/STYLE_GUIDE.md`)

- Headings: only `#`–`####` (H1–H4). Never H5/H6.
- **No em-dashes** -- use two hyphens (`--`) instead.
- **No smart quotes** -- straight quotes only.
- **No emojis** anywhere in educational content.
- No tabs -- spaces only.
- Filenames: lessons `A0-01.md`; reviews `A0-R1.md`; grammar files lowercase-hyphenated
  (`personal-pronouns.md`); level directories uppercase (`A0/`, `A1/`, `A2/`, `B1/`); competency
  folders `Competency-1-Introducing-Yourself/`; unit folders `Unit-1-Personal-Pronouns/` nested inside
  a competency folder.
- Every lesson/grammar file starts with a metadata block (`**Level:**`, `**CEFR Level:**`, etc.) -- see
  `docs/STYLE_GUIDE.md` "Metadata Headers".

## Vocabulary CSV schema (`shared/vocabulary/master.csv`, one row per word)

```
Dutch,English,Article,Plural,Pronunciation,Part of Speech,CEFR Level,Lesson Introduced,Frequency Rank,Topic,Example Sentence,Example Translation,Notes
```

Field order matters and is exact -- see `docs/VOCABULARY_STANDARD.md` for rules per column (e.g.
`Article` is `de`/`het`/`--`, pronunciation is an English approximation not IPA, example sentences may
only use already-known vocabulary/grammar). Per-lesson and per-topic CSVs in `shared/csv/` are
generated *from* the master, never hand-maintained separately.

## Publishing the website

The public site (`https://metekahyagil.github.io/dutch/`) is a VitePress build served by GitHub
Pages via "Deploy from a branch" (Branch: `master`, Folder: `/docs`) -- there is no CI/Actions step.
After any change to `docs/*.md` content or `docs/.vitepress/config.mjs`, run `npm run docs:publish`
to rebuild and sync the output into `docs/`, then commit and push. See the "Website (GitHub Pages)"
section in `README.md` for details. Never hand-edit the generated `docs/*.html` files or `docs/assets/`
directly -- they are overwritten by `npm run docs:publish`.

