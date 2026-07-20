# Dutch B1 Curriculum

A complete, AI-assisted Dutch language curriculum designed to take an absolute beginner (A0) to CEFR B1.

This repository is designed as a structured educational project rather than a traditional language course. Every lesson, grammar explanation, vocabulary list, exercise, and review follows a strict specification to ensure consistency and progressive learning.

---

## Goals

- Build a complete Dutch curriculum from A0 to B1.
- Produce professional-quality educational material.
- Explain grammar through reasoning rather than memorization.
- Teach high-frequency vocabulary in context.
- Support AI-assisted content generation.
- Maintain one single source of truth for every grammar concept and vocabulary item.

---

## Course Levels

**A0 -- Foundations**

- Pronunciation
- Basic sentence structure
- Core verbs
- Reading Dutch
- Building confidence

**A1 -- Beginner**

- Everyday communication
- Family
- Home
- Food
- Shopping
- Transportation

**A2 -- Elementary**

- Living in the Netherlands
- Healthcare
- Government
- Work
- Housing
- Daily conversations

**B1 -- Independent User**

- Opinions
- Formal communication
- Storytelling
- News
- Workplace communication
- Exam preparation

---

## Repository Structure

The repository is divided into two major parts.

### Course Content

The learner-facing material.

- `A0/` -- Foundations level
- `A1/` -- Beginner level
- `A2/` -- Elementary level
- `B1/` -- Independent user level

### Documentation

The authoring system.

- `docs/CURRICULUM_PRINCIPLES.md` -- Highest-precedence educational principles
- `docs/CEFR_GUIDE.md` -- CEFR scope per level (grammar, vocabulary, skills)
- `docs/COMPETENCY_MAP.md` -- Competencies per level (drives units and lessons)
- `docs/CURRICULUM.md` -- Complete unit/lesson roadmap
- `docs/GRAMMAR_MAP.md` -- Grammar progression
- `docs/VOCABULARY_ROADMAP.md` -- Vocabulary progression
- `docs/LESSON_STANDARD.md` -- Lesson template and requirements
- `docs/GRAMMAR_STANDARD.md` -- Grammar explanation format
- `docs/VOCABULARY_STANDARD.md` -- Vocabulary database format
- `docs/AI_GUIDELINES.md` -- Rules for AI content generation
- `docs/QUALITY_CHECKLIST.md` -- Validation requirements

### Shared Resources

The teaching infrastructure.

- `shared/grammar/` -- Referenced grammar explanations
- `shared/vocabulary/` -- Vocabulary database (`nouns.csv`, `verbs.csv`, `adjectives.csv`, `other.csv`)
- `shared/templates/` -- Content templates
- `shared/prompts/` -- AI prompts
- `shared/assets/` -- Images and media
- `shared/csv/` -- Vocabulary exports

### Agents

AI agent definitions and workflows.

- `agents/` -- Agent documentation

---

## Core Principles

- Competencies before lesson count -- scope is defined first, size is a byproduct.
- One major grammar concept per lesson.
- Progressive learning (nothing assumed before teaching).
- High-frequency vocabulary first.
- No unexplained grammar.
- Continuous review.
- Consistent lesson structure across all levels.
- AI-friendly architecture.
- Single source of truth for all data.

**See:** `docs/CURRICULUM_PRINCIPLES.md` for the full, authoritative set of principles.

---

## Development Workflow

1. Define competencies in `docs/COMPETENCY_MAP.md`
2. Define curriculum (units/lessons) in `docs/CURRICULUM.md`
3. Define grammar progression in `docs/GRAMMAR_MAP.md`
4. Define vocabulary progression in `docs/VOCABULARY_ROADMAP.md`
5. Write grammar references in `shared/grammar/`
6. Write lessons in level folders
7. Generate vocabulary CSV in `shared/csv/`
8. Generate quizzes and reviews
9. Run quality checklist

Nothing skips this workflow.

---

## Getting Started

1. Read `docs/CURRICULUM_PRINCIPLES.md` for the authoritative educational principles
2. Read `PROJECT.md` for the repository/engineering philosophy
3. Read `ROADMAP.md` for the development phases
4. Read `docs/ARCHITECTURE.md` for the technical structure
5. Read `docs/AI_GUIDELINES.md` before creating content
6. Follow templates in `shared/templates/`

---

## Before You Create Content

All content creators and AI agents should read:

1. `docs/CURRICULUM_PRINCIPLES.md` -- The authoritative educational principles
2. `docs/LESSON_STANDARD.md` -- Mandatory lesson structure
3. `docs/GRAMMAR_STANDARD.md` -- Grammar explanation rules
4. `docs/VOCABULARY_STANDARD.md` -- Vocabulary entry requirements
5. `docs/QUALITY_CHECKLIST.md` -- Quality requirements
6. `docs/STYLE_GUIDE.md` -- Formatting and consistency
7. `docs/CEFR_GUIDE.md` -- What belongs in each CEFR level
8. `docs/COMPETENCY_MAP.md` -- What competency and unit this content belongs to
9. `docs/CURRICULUM.md` -- What to teach and when
10. `docs/GRAMMAR_MAP.md` -- What grammar is already covered
11. `docs/VOCABULARY_ROADMAP.md` -- What vocabulary is planned

---

## Website (GitHub Pages)

The curriculum is published as a static site built with VitePress, served at
`https://metekahyagil.github.io/dutch/`.

### How it's deployed

- Source: `docs/` (VitePress project; config at `docs/.vitepress/config.mjs`).
- GitHub Pages is configured as **Deploy from a branch** -- Branch: `master`, Folder: `/docs`.
  Pushing to `master` is the only deploy step; GitHub Pages picks up whatever is committed in
  `docs/` directly.
- `docs/.nojekyll` disables GitHub's default Jekyll processing, so the VitePress build is served
  as static files instead of GitHub trying to render Markdown itself.

### Publishing changes

Whenever `docs/*.md` content changes (new lessons, edited docs, updated sidebar/nav in
`docs/.vitepress/config.mjs`), rebuild and sync before committing/pushing:

```
npm run docs:publish
```

This runs `vitepress build docs` (writes to `docs/.vitepress/dist/`, a build cache that is not
committed) and then `scripts/publish-docs.js`, which copies that fresh build into `docs/` itself --
the folder GitHub Pages actually serves. Running `npm run docs:build` alone is not enough; it never
touches `docs/` and the site will not update.

For full end-to-end lesson integration (content + docs + publish + commit + push in one step), use
`npm run lesson:integrate <lesson-id>` -- see `docs/LESSON_INTEGRATION_WORKFLOW.md`.

Commit and push the result yourself after publishing -- there is no automated step that does this
for plain `docs:publish` runs (only `lesson:integrate` commits and pushes automatically).

Other scripts:

- `npm run docs:dev` -- local dev server
- `npm run docs:build` -- build only, writes to `docs/.vitepress/dist` (does not update `docs/` itself)
- `npm run docs:preview` -- preview a production build locally

---

## License

See `LICENSE.md`

---

## Contributing

This is a structured project with strict standards. Before creating content:

1. Check what's already planned in `docs/CURRICULUM.md`
2. Verify grammar prerequisites in `docs/GRAMMAR_MAP.md`
3. Verify vocabulary in `docs/VOCABULARY_ROADMAP.md`
4. Follow the templates in `shared/templates/`
5. Run through `docs/QUALITY_CHECKLIST.md`

Questions? Read `docs/AI_GUIDELINES.md`
