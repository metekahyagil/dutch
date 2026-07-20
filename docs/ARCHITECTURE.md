# Architecture

This repository separates educational content from educational data.

---

## Three Layers

### Layer 1: Content

Learner-facing educational material.

- Lessons
- Dialogues
- Reading exercises
- Writing prompts
- Speaking exercises
- Listening comprehension
- Quizzes and exercises
- Reviews
- Assessments

**Location:** `A0/`, `A1/`, `A2/`, `B1/`

### Layer 2: Data

The authoritative sources for grammar and vocabulary.

- Grammar explanations (referenced by lessons)
- Vocabulary database (source of truth for all vocabulary)
- Lesson metadata (dependencies, prerequisites)
- Progression tracking (what comes before/after each concept)

**Location:** `shared/grammar/`, `shared/vocabulary/` (nouns.csv, verbs.csv, adjectives.csv, other.csv), `shared/csv/`

### Layer 3: Documentation

Standards, specifications, and guidelines.

- Curriculum principles (highest-precedence document)
- Teaching philosophy
- CEFR scope guide
- Competency map
- Curriculum roadmap
- Grammar progression map
- Vocabulary progression roadmap
- Lesson standards (template and requirements)
- Grammar explanation standards
- Vocabulary entry standards
- Quality assurance rules
- Style guide
- AI guidelines

**Location:** `docs/`

---

## Content Hierarchy: Competency-Driven, Not Lesson-Count-Driven

Content is not organized as a flat `Level -> Module -> Lesson` list sized in advance. It is organized
around competencies (real-world abilities), and the number of units/lessons is a byproduct of what
each competency requires:

```
CEFR Level (A0 / A1 / A2 / B1)
    ↓
Competency (a real-world ability, e.g. "Shopping")
    ↓
Unit (the lessons that build one competency, e.g. "Numbers and Prices")
    ↓
Lesson (the smallest instructional block, follows LESSON_STANDARD.md)
    ↓
Exercises
```

**See:** `docs/COMPETENCY_MAP.md` for the authoritative list of competencies per level and
`docs/CURRICULUM_PRINCIPLES.md` for why this model was chosen over a fixed lesson count.

---

## The Principle: Never Duplicate

### Grammar

Grammar explanations exist only once, in `shared/grammar/`.

When a lesson needs to explain grammar, it references the grammar file:

```
**See:** `/shared/grammar/personal-pronouns.md`
```

If you need to update a grammar explanation, you update it once in the shared file.

All lessons using that grammar automatically get the updated explanation.

### Vocabulary

Vocabulary exists only once, split across four files by part of speech in
`shared/vocabulary/`: `nouns.csv`, `verbs.csv`, `adjectives.csv`, `other.csv` (adverbs,
prepositions, conjunctions, pronouns, articles, determiners, interjections, numerals).

Every vocabulary item has, at minimum:
- Dutch word
- English translation
- Pronunciation
- CEFR level
- Lesson introduced
- Frequency
- Topic
- Example sentence
- Example translation
- Notes

Plus part-of-speech-specific fields:
- Nouns: article (de/het), plural, diminutive
- Verbs: verb type, full present tense, simple past, auxiliary, past participle
- Adjectives: comparative, superlative, inflected form
- Other: part of speech (adverb, preposition, conjunction, pronoun, article, determiner, interjection, numeral, phrase)

When a lesson needs vocabulary, it either:

1. References the vocabulary files: `**See:** `/shared/vocabulary/nouns.csv` (filter by lesson A0-01)`
2. Generates a CSV export for the lesson
3. Embeds references to specific vocabulary entries

Vocabulary CSVs are generated from the four source files, never maintained separately.

### Lessons

Lessons follow a standard template and reference external data.

```
## Grammar

**See:** `/shared/grammar/personal-pronouns.md`

## Vocabulary

| Dutch | English | Article |
|-------|---------|---------|
| ik | I | -- |
| jij | you (informal) | -- |

(Reference to master database)

## Dialogue

[Sample dialogue using only known grammar and vocabulary]

## Exercises

[Exercises using only known grammar and vocabulary]
```

Lessons never contain full grammar explanations or vocabulary definitions.

---

## Data Flow

```
Vocabulary CSVs (nouns.csv, verbs.csv, adjectives.csv, other.csv)
    ↓
    ├→ CSV exports for each lesson
    ├→ Anki deck generation
    └→ Vocabulary roadmap

Grammar Files
    ↓
    ├→ Lessons (reference)
    ├→ Grammar map
    └→ Review lessons

Competency Map
    ↓
    ├→ Curriculum Map (units and lessons generated from competencies)
    ├→ Grammar Map (grammar required per competency)
    └→ Vocabulary Roadmap (vocabulary required per competency)

Curriculum Map
    ↓
    ├→ Lesson files (A0/, A1/, A2/, B1/)
    ├→ Review schedules
    ├→ Dependencies
    └→ Assessment requirements
```

---

## Relationships

### Lessons Reference

- `docs/CURRICULUM_PRINCIPLES.md` -- For the highest-level rationale (checked first in a conflict)
- `docs/COMPETENCY_MAP.md` -- For the competency and unit this lesson belongs to
- `docs/CURRICULUM.md` -- For dependencies and prerequisites
- `docs/GRAMMAR_MAP.md` -- For what grammar is available
- `docs/VOCABULARY_ROADMAP.md` -- For what vocabulary is planned
- `shared/grammar/` -- For grammar explanations
- `shared/vocabulary/nouns.csv`, `verbs.csv`, `adjectives.csv`, `other.csv` -- For vocabulary definitions

### Reviews Reference

- Previous lessons (what to review)
- `docs/REVIEW_STRATEGY.md` -- For review structure

### Grammar Map References

- `docs/COMPETENCY_MAP.md` -- For which competency requires this grammar
- `docs/CURRICULUM.md` -- For lesson numbers
- `shared/grammar/` -- For full explanations

### Vocabulary Roadmap References

- `docs/COMPETENCY_MAP.md` -- For which competency requires this vocabulary
- `docs/CURRICULUM.md` -- For lesson placement
- `shared/vocabulary/nouns.csv`, `verbs.csv`, `adjectives.csv`, `other.csv` -- For actual vocabulary

---

## File Organization

```
Dutch-B1-Curriculum/
│
├── README.md                    (Start here)
├── PROJECT.md                   (Philosophy)
├── ROADMAP.md                   (Development phases)
├── LICENSE.md                   (Legal)
│
├── docs/                        (Documentation & Standards)
│   ├── ARCHITECTURE.md          (This file)
│   ├── CURRICULUM_PRINCIPLES.md (Highest-precedence document)
│   ├── TEACHING_PHILOSOPHY.md   (Pedagogical approach)
│   ├── CEFR_GUIDE.md            (CEFR scope: grammar/vocab/skills per level)
│   ├── COMPETENCY_MAP.md        (Competencies per level -- drives everything below)
│   ├── CURRICULUM.md            (Unit/lesson roadmap, generated from Competency Map)
│   ├── GRAMMAR_MAP.md           (Grammar progression)
│   ├── VOCABULARY_ROADMAP.md    (Vocab progression)
│   ├── LESSON_STANDARD.md       (Template & rules)
│   ├── GRAMMAR_STANDARD.md      (Grammar format)
│   ├── VOCABULARY_STANDARD.md   (Vocab format)
│   ├── REVIEW_STRATEGY.md       (Review structure)
│   ├── STYLE_GUIDE.md           (Formatting rules)
│   ├── QUALITY_CHECKLIST.md     (QA checklist)
│   ├── AI_GUIDELINES.md         (AI rules)
│   └── CHANGELOG.md             (Version history)
│
├── agents/                      (AI agent definitions)
│
├── shared/                      (Shared data & templates)
│   ├── grammar/                 (Grammar reference files)
│   │   ├── personal-pronouns.md
│   │   ├── present-tense.md
│   │   └── [more grammar files]
│   ├── vocabulary/              (Vocabulary, split by part of speech)
│   │   ├── nouns.csv            (Single source of truth for nouns)
│   │   ├── verbs.csv            (Single source of truth for verbs)
│   │   ├── adjectives.csv       (Single source of truth for adjectives)
│   │   ├── other.csv            (Adverbs, prepositions, pronouns, etc.)
│   │   ├── A0.csv               (A0 filtered export)
│   │   ├── A1.csv               (A1 filtered export)
│   │   └── [more exports]
│   ├── templates/                (Content templates)
│   ├── prompts/                  (AI prompts, including research prompts)
│   ├── assets/                   (Images, audio, etc)
│   └── csv/                      (Generated CSVs)
│
├── A0/                          (Foundations level)
│   ├── README.md
│   ├── Competency-1-<Name>/
│   │   ├── Unit-1-<Name>/
│   │   │   ├── A0-01.md
│   │   │   └── A0-02.md
│   │   └── Unit-2-<Name>/
│   ├── Competency-2-<Name>/
│   ├── Reviews/
│   ├── Quizzes/
│   └── Assessment/
│
├── A1/                          (Beginner level)
│   └── [Same structure as A0]
│
├── A2/                          (Elementary level)
│   └── [Same structure as A0]
│
└── B1/                          (Independent User level)
    └── [Same structure as A0]
```

---

## Why This Structure?

1. **Single Source of Truth** -- Reduce inconsistency and make updates easier
2. **Scalability** -- Add new lessons without affecting existing ones
3. **AI-Friendly** -- Clear dependencies and reference patterns
4. **Maintainable** -- Standards make it easy to update years later
5. **Reusability** -- Grammar and vocabulary can be used by any lesson
6. **Trackability** -- Dependencies are explicit and documented
7. **Competency-Driven** -- Scope (Competency Map, CEFR Guide) is defined before size (units,
   lessons), so level size is always a byproduct of what learners need, never an arbitrary target
