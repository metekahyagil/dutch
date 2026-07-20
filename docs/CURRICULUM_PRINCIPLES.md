# Curriculum Principles

**Status:** Living Document
**Precedence:** Highest. If any other document in this project conflicts with this one, this document wins.

---

## Purpose

This document defines the educational principles governing the Dutch B1 Curriculum project.

Every lesson, grammar explanation, vocabulary list, exercise, review, assessment, and AI-generated
contribution must comply with these principles.

If you only read one document before contributing to this project, read this one.

---

## Vision

Create the highest-quality AI-assisted Dutch curriculum available for self-study learners, guiding
complete beginners (A0) to an independent B1 level while emphasizing understanding, confidence, and
long-term retention.

The curriculum must be:

- Progressive
- Consistent
- Accurate
- Maintainable
- AI-friendly
- Human-friendly
- Exam-ready

---

## Educational Philosophy

Language is a system. Students should understand the system rather than memorize isolated rules.

Every lesson should answer four questions: **What? Why? How? When?**

Grammar is always explained through reasoning. Vocabulary always appears in meaningful context.
Learning should feel cumulative rather than repetitive.

**See:** `docs/TEACHING_PHILOSOPHY.md` for the full pedagogical rationale, worked examples, and
per-level learning goals.

---

## Learning Principles

### Principle 1 -- Build Before Expand

Students first build a strong foundation. Only then should complexity increase.

### Principle 2 -- One Major Concept

Each lesson introduces one major grammar concept. Additional material reinforces previous concepts
rather than competing for attention.

### Principle 3 -- Explain Before Memorize

Grammar is explained before practice. Students understand patterns before attempting repetition.

### Principle 4 -- Learn Through Context

Vocabulary is never presented as isolated word lists. Every word appears in example sentences,
dialogues, reading, speaking, and writing.

### Principle 5 -- Active Production

Every lesson requires the learner to produce Dutch: speaking, writing, translation, or sentence
creation. Passive recognition alone is insufficient.

### Principle 6 -- Continuous Review

Knowledge decays. Every lesson reinforces previous learning. Review lessons introduce no new
material.

### Principle 7 -- Authentic Dutch

Whenever possible, use authentic Dutch. Avoid artificial textbook conversations. Natural language is
preferred over perfectly simplified language, provided it remains appropriate for the learner's
level.

### Principle 8 -- English as a Bridge

The learner's native language is English. Grammar explanations compare Dutch with English whenever
helpful. Do not assume knowledge of linguistic terminology.

### Principle 9 -- Communication First

The goal is communication. Grammar exists to improve communication, not to become an end in itself.

### Principle 10 -- Exam Readiness

Every lesson contributes toward passing a Dutch B1 examination. Exam preparation begins from A0
rather than being postponed until B1.

---

## Curriculum Structure

The curriculum consists of four CEFR levels: **A0 (Foundations), A1 (Beginner), A2 (Elementary),
B1 (Independent User)**. Each level prepares the learner for the next.

**See:** `docs/CEFR_GUIDE.md` for the detailed scope of each level (exit profile, grammar scope,
vocabulary scope, communication, reading, listening, speaking, writing).

### Curriculum is competency-driven, not lesson-count-driven

The curriculum is not designed by deciding how many lessons a level should have. It is designed by
deciding what a learner must be able to do to leave that level. The number of lessons is a byproduct
of that scope, never the starting point.

The content hierarchy is:

```
CEFR Level
    ↓
Competency
    ↓
Unit
    ↓
Lesson
    ↓
Exercises
```

- A **Competency** is a real-world ability the learner must gain (for example: "Introducing Yourself,"
  "Shopping," "Understanding Dutch Sounds"). Every competency defines why it exists, what grammar it
  requires, what vocabulary it requires, what pronunciation it requires, what communication skills it
  requires, what cultural knowledge it requires, and how mastery is assessed.
- A **Unit** groups the lessons that build one competency (for example, the "Basic Sentences"
  competency may contain the "Personal Pronouns," "Present Tense," and "Word Order" units).
- A **Lesson** is the smallest instructional unit and always follows `docs/LESSON_STANDARD.md`.

**See:** `docs/COMPETENCY_MAP.md` for the authoritative list of competencies per level and the format
each competency must follow.

Each level also contains Unit Reviews, a Mid-Level Review, a Final Review, and a Level Assessment.
No review introduces new content. **See:** `docs/REVIEW_STRATEGY.md`.

---

## Lesson Structure

Every lesson follows the Lesson Standard's mandatory 20 sections, in order, none omitted.

**See:** `docs/LESSON_STANDARD.md` for the full template.

---

## Grammar Principles

Grammar progresses from simple to complex. No grammar concept may appear before it has been
introduced. Every explanation must include an explanation, reasoning, examples, comparison with
English, common mistakes, and memory tips.

Grammar explanations live only in `shared/grammar/`. Lessons reference those files; they never
duplicate them.

**See:** `docs/GRAMMAR_STANDARD.md` (explanation format) and `docs/GRAMMAR_MAP.md` (progression and
dependencies).

---

## Vocabulary Principles

Vocabulary is introduced according to frequency and usefulness, in this priority order:

1. High-frequency words
2. Everyday communication
3. Exam usefulness
4. Cultural importance

Every noun is stored together with its article (`de tafel`, `het huis`). Never teach nouns without
articles. Every vocabulary item must exist in the master database before it is used in a lesson.

**See:** `docs/VOCABULARY_STANDARD.md` (entry format) and `docs/VOCABULARY_ROADMAP.md` (progression
and topic targets).

---

## Reading Principles

Reading passages must use only known grammar, introduce minimal unknown vocabulary, feel natural, and
reinforce lesson objectives. Reading length increases gradually across the curriculum.

## Listening Principles

Listening uses natural speech. Speech speed increases gradually. Different voices are introduced over
time.

## Speaking Principles

Speaking tasks simulate realistic situations. Avoid scripted conversations whenever possible.
Encourage learners to create original sentences.

## Writing Principles

Writing begins on Day One. Difficulty increases gradually. Learners produce meaningful communication
rather than isolated grammar drills.

## Pronunciation Principles

Pronunciation is taught explicitly. Never assume learners will acquire pronunciation naturally.
Common pronunciation mistakes are always documented.

---

## Review Strategy

- Every five lessons: a Review Lesson.
- Every unit: an Assessment.
- Every CEFR level: a Comprehensive Review.

Reviews introduce no new grammar and no new vocabulary. **See:** `docs/REVIEW_STRATEGY.md`.

---

## AI Generation Principles

AI must never invent curriculum, skip prerequisites, introduce future grammar or vocabulary, or
duplicate explanations.

AI must always follow project standards, reference existing documents, maintain consistency, and
prioritize clarity.

**See:** `docs/AI_GUIDELINES.md` for the full workflow.

---

## Quality Standards

Every lesson must pass quality review. Minimum requirements include grammar progression, vocabulary
progression, reading validation, lesson template compliance, CSV generation, quiz generation,
homework, review integration, grammar map update, and vocabulary database update.

**See:** `docs/QUALITY_CHECKLIST.md`.

---

## Success Criteria

A successful graduate of this curriculum should be able to:

- Hold everyday conversations.
- Understand common spoken Dutch.
- Read newspapers with assistance.
- Write emails and messages.
- Interact confidently in Dutch society.
- Pass a B1 Dutch examination.

---

## Guiding Principle

Every decision should answer one question:

**"Will this make the learner more confident using Dutch in real life?"**

If the answer is no, reconsider the decision.

---

## Relationship to Other Documents

This document states *why* and *what* at the highest level. It intentionally does not repeat detail
that already has a single authoritative home elsewhere:

| Question | Authoritative Document |
|---|---|
| Why do we teach this way? (rationale, worked examples) | `docs/TEACHING_PHILOSOPHY.md` |
| What exactly belongs in each CEFR level? | `docs/CEFR_GUIDE.md` |
| What competencies make up each level? | `docs/COMPETENCY_MAP.md` |
| What lessons/units exist and how do they depend on each other? | `docs/CURRICULUM.md` |
| What is the exact lesson template? | `docs/LESSON_STANDARD.md` |
| What grammar exists and when is it taught? | `docs/GRAMMAR_MAP.md`, `shared/grammar/` |
| What vocabulary exists and when is it taught? | `docs/VOCABULARY_ROADMAP.md`, `shared/vocabulary/{nouns,verbs,adjectives,other}.csv` |
| How are review lessons built? | `docs/REVIEW_STRATEGY.md` |
| How should content be formatted? | `docs/STYLE_GUIDE.md` |
| How should AI agents behave? | `docs/AI_GUIDELINES.md` |
| How is a lesson validated? | `docs/QUALITY_CHECKLIST.md` |
| What are the repository's engineering conventions? | `PROJECT.md` |

If any of those documents ever conflicts with the principles stated here, this document takes
precedence and the conflicting document must be corrected.
