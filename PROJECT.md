# Project Philosophy

This repository is intended to become a complete, maintainable Dutch curriculum rather than a collection of lessons.

Every decision should improve one of the following:

- Clarity
- Consistency
- Maintainability
- Educational quality
- Reusability

This document covers engineering/repository conventions. For the educational principles that govern
*what* and *why* we teach, see `docs/CURRICULUM_PRINCIPLES.md` -- that document takes precedence if
anything here ever conflicts with it.

---

## Educational Philosophy

We teach understanding before memorization.

Every concept should answer:

- **What?** -- What is this?
- **Why?** -- Why does it work this way?
- **How?** -- How do you use it?
- **When?** -- When do you use it?
- **Common mistakes?** -- What do learners get wrong?
- **Relation to English?** -- How does it compare to what I already know?

Students should understand the language rather than memorize isolated rules.

---

## Design Principles

### Competency-Driven

Curriculum size is never decided in advance. `docs/COMPETENCY_MAP.md` defines the real-world
competencies each level requires; units and lessons are then generated to satisfy that scope. A
competency that needs 3 lessons gets 3; one that needs 8 gets 8.

### Progressive

Every lesson depends only on previous lessons.

No grammar is used before it is explicitly taught.

No vocabulary is used before it is explicitly introduced.

### Modular

Lessons should be independent modules.

A learner can return to any lesson and understand it in context.

Each lesson has a clear, specific goal.

### Reusable

Grammar explanations exist only once.

Vocabulary exists only once.

Everything references shared resources.

This prevents inconsistency and makes updates easier.

### Maintainable

The repository should be easy to update years from now.

Decisions should be documented.

The curriculum should be versioned and tracked.

Dependencies should be explicit.

### AI-First

Every document should be structured so AI agents can safely generate or validate new content.

Standards must be precise enough for automated checking.

The architecture should support automated generation (vocabulary, quizzes, etc.).

---

## Definition of Done

A lesson is complete only when:

- [ ] Lesson belongs to a competency and unit defined in `docs/COMPETENCY_MAP.md`
- [ ] Lesson written and follows `docs/LESSON_STANDARD.md`
- [ ] Grammar prerequisites verified in `docs/GRAMMAR_MAP.md`
- [ ] Vocabulary exists in `shared/vocabulary/`
- [ ] Vocabulary CSV entry created in `shared/csv/`
- [ ] Reading material contains only known grammar
- [ ] Reading material contains only known vocabulary
- [ ] Review updated in level folder
- [ ] Quiz generated
- [ ] All sections pass `docs/QUALITY_CHECKLIST.md`
- [ ] Links validated
- [ ] Markdown formatting validated

---

## Project Rules

### Vocabulary

- Vocabulary exists in ONE master database in `shared/vocabulary/`
- Lessons reference vocabulary; they never define it
- Every vocabulary entry has a single source of truth
- CSV exports are generated from the master, not maintained separately

### Grammar

- Grammar explanations exist in `shared/grammar/`
- Lessons reference grammar; they never duplicate explanations
- Every grammar concept has a single authoritative explanation
- Grammar is indexed in `docs/GRAMMAR_MAP.md`

### Lessons

- Lessons follow `docs/LESSON_STANDARD.md` exactly
- Lessons reference grammar and vocabulary; they never duplicate them
- A lesson introduces ONE new grammar concept
- A lesson introduces 20-35 new vocabulary items max
- No lesson contains unexplained terminology

### Reviews

- Review lessons introduce NO new grammar
- Review lessons introduce NO new vocabulary
- Reviews consolidate what was learned in previous lessons
- A review lesson appears after every 5 lessons

### Dependencies

- Every lesson explicitly lists its prerequisites
- The `docs/CURRICULUM.md` tracks all dependencies
- The dependency graph must be a DAG (no circular dependencies)

---

## Version Control

Every change is tracked. Decisions are documented in `CHANGELOG.md`.

Curriculum changes are not made arbitrarily; they are discussed and recorded.

---

## Quality Over Speed

A lesson that follows all standards and takes a week to write is better than five lessons written quickly that don't follow standards.

Consistency is more important than volume.

A small, perfect curriculum is better than a large, inconsistent one.
