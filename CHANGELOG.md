# CHANGELOG

All notable changes to the Dutch B1 Curriculum project are documented here.

This file is updated with every significant change to the curriculum, documentation, or structure.

---

## Format

Each entry includes:

- **Date** -- When the change was made
- **Version** -- Version number (if applicable)
- **Changed** -- What was modified or added
- **Author** -- Who made the change
- **Reason** -- Why this change was made

---

## [Unreleased]

### Added

- **2026-07-25** -- `A1/Competency-1-Basic-Sentences-and-Word-Order/A1-01.md` created with complete lesson file (all 20 sections from LESSON_STANDARD.md). Lesson covers present-tense verb conjugation (three main shapes: stem for ik, stem + -t for jij/u/hij/zij/het, infinitive for wij/jullie/zij), subject-verb agreement with singular nouns and pronouns, SVO main-clause word order and the V2 (verb-second) rule, yes/no question formation via verb inversion with the jij -t drop, question-word questions (wie, wat, waar, wanneer, waarom, hoe, hoeveel), and negation with "niet" (near end, before adjectives, before places, after definite objects, before infinitives) and "geen" (for indefinite nouns). Includes 32 new vocabulary words (7 question words, 12 verbs, 7 adverbs/adverbial phrases, 3 connectors, negation), 4 realistic dialogues showing natural Dutch communication patterns, pronunciation guidance for question words and verbs, reading comprehension with biographical/workplace text, listening comprehension with interview scenario, speaking exercises (conjugation drill, question formation, free response), writing exercises (verb conjugation, statement-to-question conversion, negation, paragraph writing), common mistakes with explanations (wrong verb forms, forgetting -t, keeping -t with jij in questions, English-style fronting, misplacing "niet"), cultural insights on V2 word order, Dutch directness in questions, formal vs informal address, memory tricks (Three Shapes Rule, Verb Inversion = Question, jij -t Drop, "Niet" at End, "Geen" for Indefinites), active recall with 10 generation-based questions, 15-question quiz with full answer key and explanations, 30-40 minute homework with 5 tasks (conjugation tables, statement-to-question conversion, question-word Q&A, negation, paragraph writing). Emphasizes the foundational shift from memorized A0 chunks to productive sentence building and introduces the V2 word-order principle central to Dutch. Full lesson formatted per LESSON_STANDARD.md quality checklist with all 20 sections. **Author:** OpenCode Agent (research output from external research). **Reason:** Complete first A1 lesson. Builds on A0 pronouns and basic present-tense patterns to introduce productive verb conjugation, question formation, and negation rules.
- **2026-07-25** -- `shared/prompts/A1-01-research-response.md` archived with full research output for A1-01 including 6 grammar concepts with detailed explanations, examples, and common mistakes, 32-word vocabulary table with pronunciation and examples, 4 dialogues covering realistic contexts (meeting someone, at home, daily routine, plans), cultural notes on V2 word order, Dutch directness, and formal vs informal address, 8 exercise types with skill targets and quantities, and assessment criteria with 3 sample assessment tasks. **Author:** External research. **Reason:** Audit trail for A1-01 lesson research.
- **2026-07-25** -- `docs/CURRICULUM.md` updated: A1-01 marked Complete ✅ (was Pending). A1 level progress now shows 1/11 complete. Overall curriculum progress updated to 8/34 Complete (A0 level + A0-R1 + A1-01), 26 Pending. **Author:** OpenCode Agent. **Reason:** Track lesson completion status in master curriculum roadmap.
- **2026-07-26** -- `A1/Competency-2-Describing-Daily-Routines/A1-02.md` created with complete lesson file (all 20 sections from LESSON_STANDARD.md). Lesson covers review of present-tense conjugation with routine verbs (opstaan, wakker worden, ontbijten, lunchen, koken, douchen, tanden poetsen, wandelen, fietsen, sporten, slapen, rusten), adverbs of frequency (altijd, meestal, vaak, soms, zelden, nooit) with proper placement after the finite verb, time expressions with correct prepositions (om for clock time, op for days, in for months/seasons/parts of day, per for rates, elke for "every"), sequencing and narrative adverbs (eerst, daarna, later, vervolgens, tot slot) triggering V2 word order, and the principle that Dutch present tense covers both immediate and habitual actions. Includes 30 new vocabulary words (10 routine verbs, 6 nouns, 4 time-related nouns, 10 adverbs/prepositions), 5 realistic dialogues (morning routine, afternoon routine, evening routine, frequency habits, weekday variation), reading passage (~500 words) with 6 comprehension questions, listening passage with transcript and 5 questions, speaking exercises (conjugation drill, Q&A, free routine description), writing exercises (conjugation, adverb placement, preposition correction, sequencing, extended routine paragraph), 7 common mistakes with explanations, cultural insights on Dutch routines and directness, 5 memory tricks, active recall with 10 generation-based questions, 15-question quiz with full answer key, 30-40 minute homework with 5 tasks. Emphasizes transition from single sentences to extended discourse via sequencing words and time markers. Full lesson formatted per LESSON_STANDARD.md quality checklist. **Author:** OpenCode Agent (research output from external research). **Reason:** Complete second lesson of A1 curriculum. Enables learners to describe complete daily routines and prepares foundation for food/eating context in A1-03.
- **2026-07-26** -- `shared/prompts/A1-02-research-response.md` archived with full research output for A1-02 including 6 grammar concepts (present-tense review, frequency adverbs, time prepositions, sequencing adverbs, routine verb forms, regular verb variation), 30-word vocabulary table with pronunciation and examples, 5 dialogues covering realistic contexts (morning/afternoon/evening routines, frequency habits, weekday variation), exercises with 8 exercise types and quantities, and assessment criteria with learner mastery definition. **Author:** External research. **Reason:** Audit trail for A1-02 lesson research.
- **2026-07-26** -- `docs/CURRICULUM.md` updated: A1-02 marked Complete ✅ (was Pending). A1 level progress now shows 2/11 complete. Overall curriculum progress updated to 9/34 Complete (A0 level + A0-R1 + A1-01 + A1-02), 25 Pending. **Author:** OpenCode Agent. **Reason:** Track lesson completion status in master curriculum roadmap.
  into four part-of-speech-specific files: `shared/vocabulary/nouns.csv` (adds Article, Plural,
  Diminutive columns), `verbs.csv` (adds Verb Type, full present tense across the three distinct
  forms, Simple Past singular/plural, Auxiliary, Past Participle), `adjectives.csv` (adds
  Comparative, Superlative, Inflected Form), and `other.csv` (adverbs, prepositions, conjunctions,
  pronouns, articles, determiners, interjections, numerals; adds a Part of Speech column). The
  existing 25-word A0-01 vocabulary set was re-categorized and migrated into the new files (21
  nouns, 3 adjectives, 1 interjection; `verbs.csv` created with header only, no verbs taught yet).
  `docs/VOCABULARY_STANDARD.md` fully rewritten to document the new schema, shared fields, and
  per-file field rules. Updated every cross-reference to the old `master.csv` path across
  `AGENTS.md`, `docs/AI_GUIDELINES.md`, `docs/ARCHITECTURE.md`, `docs/LESSON_STANDARD.md`,
  `docs/QUALITY_CHECKLIST.md`, `docs/REVIEW_STRATEGY.md`, `docs/STYLE_GUIDE.md`,
  `docs/VOCABULARY_ROADMAP.md`, `docs/CURRICULUM_PRINCIPLES.md`, `docs/GRAMMAR_MAP.md`,
  `README.md`, `ROADMAP.md`, `PROJECT.md`, `opencode.json`, `shared/prompts/lesson-creation.md`,
  `shared/prompts/vocabulary-progression-research.md`, and all six A0 lesson files (both `A0/` and
  `docs/A0/` copies). **Author:** OpenCode Agent (user request). **Reason:** A single flat CSV
  couldn't cleanly hold verb conjugations and noun articles/plurals in the same row without a lot
  of blank/irrelevant columns; splitting by part of speech lets each word carry exactly the
  grammatical detail its category needs (conjugations for verbs, article/plural/diminutive for
  nouns, comparison forms for adjectives).

- **2026-07-15** -- `A0/Competency-6-Telling-Time-and-Dates/A0-06.md` created with complete lesson file (all 20 sections from LESSON_STANDARD.md). Lesson covers telling time in Dutch (hoe laat is het), explaining the key difference that Dutch "half" names the next hour (half vier = 3:30), days of the week (7 words), months (12 words), seasons (4 words), date expressions (day-month order), time prepositions (om for clock time, op for days/dates, in for months/seasons), and frequency expressions (elke dag, elke week, elke [day]). Includes 43 new vocabulary words (days, months, seasons, time-related nouns, prepositions, adverbial phrases), 5 realistic dialogues showing practical scheduling contexts, pronunciation guidance with stress marks, listening comprehension with transcript, speaking/writing exercises progressing from guided to open-ended, common mistakes (half direction confusion, preposition confusion, capitalization errors), cultural notes on Dutch punctuality, 12/24-hour time conventions, and capitalization rules, memory tricks, active recall, quiz with 12 questions and answer key, and homework with 5 tasks. Emphasizes the foundational shift of Dutch "half" logic and correct preposition usage. Full lesson formatted per LESSON_STANDARD.md quality checklist. **Author:** OpenCode Agent (research output from external research). **Reason:** Complete sixth lesson of A0 curriculum. Applies A0-05 number knowledge to practical time/date/schedule contexts and prepares for A0-R1 review.
- **2026-07-15** -- `shared/prompts/A0-06-research-response.md` archived with full research output for A0-06 including 6 grammar concepts with detailed explanations and examples, 43-word vocabulary table (exceeding 35+ target) with all required fields, 5 dialogues covering practical contexts (asking time, scheduling, routines, seasons, appointments), cultural notes on 12/24-hour time, Dutch punctuality, public holidays, work/school schedules, seasons/weather, and capitalization conventions, 10 exercise types with skill targets and quantities, and assessment criteria with 5 sample tasks. **Author:** External research. **Reason:** Audit trail for A0-06 lesson research.
- **2026-07-15** -- `docs/CURRICULUM.md` updated: A0-06 marked Complete ✅ (was Pending). Next lesson A0-R1 (Review Lesson 1) ready for research planning. **Author:** OpenCode Agent. **Reason:** Track lesson completion status in master curriculum roadmap.
- **2026-07-15** -- `docs/RESEARCH_GUIDELINES.md` created with standing answers to common clarifying questions during external research. Provides consistent, reproducible guidance for: (1) Dutch variant (Netherlands Dutch only, with brief note on Flemish in cultural notes), (2) Pronunciation (English approximations with UPPERCASE stress marks + 1-2 teaching tips for hard sounds), (3) Content scope (concise but complete—2-3 paragraphs per topic, all required fields), (4) Curriculum constraints (one grammar concept per lesson, 20-35 new vocab, vocabulary/grammar from taught + current lesson only, Dutch capitalization rules, natural dialogue, realistic context). Includes quick reference table, example dialogue showing how to give answers, and full instruction template for research requests. **Author:** OpenCode Agent. **Reason:** Eliminate repetitive clarifying questions during research, ensure consistent output quality, reduce back-and-forth corrections, and accelerate lesson integration workflow.

### Fixed

- **2026-07-13** -- GitHub Pages navbar not rendering. Root cause was twofold: (1) GitHub Pages
  was serving from the repo root, where no `.nojekyll` file exists, so GitHub auto-ran Jekyll and
  rendered the plain `README.md` with GitHub's default theme instead of the VitePress site at all
  (confirmed via the `Jekyll v3.10.0` generator tag and default Jekyll footer on the live page);
  (2) `docs/.vitepress/config.mjs` nav links hardcoded the `/dutch/` base path on top of VitePress's
  own automatic `base` prefix, producing broken double-base hrefs like `/dutch/dutch/`. Fixed the
  nav links in `docs/.vitepress/config.mjs`. Removed `.github/workflows/deploy.yml` (project uses
  GitHub Pages "Deploy from a branch," not Actions/CI). Added `scripts/publish-docs.js` and the
  `npm run docs:publish` script, which builds the site and syncs `docs/.vitepress/dist` into `docs/`
  (cleaning previously generated files first, so stale hashed asset files from repeated manual
  copies stop accumulating) so `docs/` always mirrors the latest build for GitHub Pages to serve
  from Branch: `master`, Folder: `/docs`. Removed the unused `public/` folder -- a stale duplicate
  of the built site left over from an earlier, incorrect assumption that GitHub Pages branch-deploy
  can serve from `/public` (it can only serve from `/` or `/docs`). Updated `.gitignore` to drop the
  stale comment referencing that assumption. Documented the deploy/publish workflow in `README.md`
  ("Website (GitHub Pages)" section). **Author:** OpenCode Agent. **Reason:** Restore GitHub Pages
  functionality (including the navbar) using the project's existing branch-deploy approach, without
  introducing GitHub Actions/CI.

### Added

- **2026-07-13** -- `docs/COMPETENCY_MAP.md` updated with new A0-05 competency "Counting and Basic Quantities" (previously missing). Competency includes can-do statements for counting 0-100, understanding quantities, basic money, and asking about amounts. Defines required grammar (cardinal/ordinal numbers, "hoeveel?" questions, plural forms), vocabulary (numbers, quantity words, money), pronunciation guidance, cultural notes on Dutch currency and number formatting, and assessment tasks. Inserted between "Describing Weather and Seasons" (A0 competency 8) and "A1 Competencies" section. **Author:** OpenCode Agent. **Reason:** Complete missing A0 competency definition required for A0-05 lesson planning; ensures COMPETENCY_MAP.md maintains all 28 competencies (7 A0, 11 A1, 7 A2, 9 B1) as specified in project scope.
- **2026-07-13** -- `A0/Competency-4-Greeting-and-Politeness/A0-04.md` created with complete lesson file (all 20 sections from LESSON_STANDARD.md). Lesson covers time-of-day-specific greetings (goedemorgen, goedemiddag, goedenavond, hallo), politeness formulas (alstublieft, dank je/dank u, sorry, pardon), asking "Hoe gaat het?" (How are you?), basic leave-taking phrases (tot ziens, tot straks, doei), and imperatives. Distinguishes formal ("u") vs informal ("jij") contexts with cultural notes. Includes 40 vocabulary words (greetings, politeness, time references, farewell expressions), 5 realistic dialogues showing greeting exchanges, pronunciation guidance with friendly intonation, listening/speaking/writing exercises, common mistakes, memory tricks, active recall, quiz with answer key, and homework. Demonstrates formal vs informal greeting variants. Full lesson formatted per LESSON_STANDARD.md quality checklist. **Author:** OpenCode Agent (research output from external research agent). **Reason:** Complete fourth lesson of A0 curriculum. Builds on A0-01, A0-02, and A0-03 to introduce social protocols, politeness, and time-aware greetings.
- **2026-07-13** -- `docs/CURRICULUM.md` updated: A0-04 marked Complete ✅ (was Pending). Next lesson A0-05 ready for research. **Author:** OpenCode Agent. **Reason:** Track lesson completion status in master curriculum roadmap.
- **2026-07-13** -- `A0/Competency-3-Describing-People-and-Family/A0-03.md` created with complete lesson file (all 20 sections from LESSON_STANDARD.md). Lesson covers demonstratives (deze, dit, die, dat) by article and distance, basic adjectives in predicative vs attributive position, adjective agreement (-e rule with een + het-word exception), possessive structures using "van," and present tense of "hebben" in descriptive context. Includes 45 new vocabulary words (extended family, adjectives, colors, physical descriptors), 4 realistic dialogues about family and appearance, pronunciation guidance, listening comprehension, speaking/writing exercises, common mistakes, memory tricks, active recall, quiz with answer key, and homework. Full lesson formatted per LESSON_STANDARD.md quality checklist. **Author:** OpenCode Agent (research output from external research agent). **Reason:** Complete third lesson of A0 curriculum. Builds on A0-01 & A0-02 to introduce descriptive language and attribute-focused conversation.
- **2026-07-13** -- `shared/prompts/A0-03-research-response.md` archived with full research output for A0-03 including 6 grammar concepts, 45-word vocabulary table (exceeding 35+ target) with pronunciation and examples, 4 dialogues, cultural notes on Dutch family structures and directness, 9 exercise types with quantities, and 5 assessment criteria with 4 sample tasks. **Author:** External research agent. **Reason:** Audit trail for A0-03 lesson research.
- **2026-07-13** -- `docs/CURRICULUM.md` updated: A0-03 marked Complete ✅ (was Pending). Next lesson A0-04 ready for research. **Author:** OpenCode Agent. **Reason:** Track lesson completion status in master curriculum roadmap.
- **2026-07-13** -- `A0/Competency-2-Introducing-Yourself/A0-02.md` created with complete lesson file (all 20 sections from LESSON_STANDARD.md). Lesson covers present tense of "zijn" (to be) and "hebben" (to have), personal pronouns in context, yes/no question formation via verb inversion, possessive pronouns, and negation with "niet." Includes 32 new vocabulary words (names, countries/nationalities, languages, family words, numbers 0-20), 4 realistic dialogues, pronunciation guidance, listening comprehension, speaking/writing exercises, common mistakes, memory tricks, active recall, quiz with answer key, and homework. Full lesson formatted per LESSON_STANDARD.md quality checklist. **Author:** OpenCode Agent (research output from external research agent). **Reason:** Complete second lesson of A0 curriculum.
- **2026-07-13** -- `shared/prompts/A0-02-research-response.md` archived with full research output for A0-02 including 6 grammar concepts, 32-word vocabulary table with pronunciation and examples, 4 dialogues, cultural notes on Dutch formality norms and multilingualism, 7 exercise types with quantities, and 6 assessment criteria with sample tasks. **Author:** External research agent. **Reason:** Audit trail for A0-02 lesson research.
- **2026-07-13** -- `docs/CURRICULUM.md` updated: A0-02 marked Complete ✅ (was Pending). Next lesson A0-03 ready for research. **Author:** OpenCode Agent. **Reason:** Track lesson completion status in master curriculum roadmap.
- **2026-07-13** -- `A0/Competency-1-Understanding-Sounds/A0-01.md` created with complete lesson file (all 20 sections from LESSON_STANDARD.md). Lesson covers Dutch alphabet pronunciation, vowel sounds (short vs long), diphthongs (ui, ou, au, ei, ij), word stress patterns with 32 vocabulary examples, dialogues, reading passages, listening comprehension, speaking exercises, writing activities, common mistakes, memory tricks, active recall, quiz with answer key, and homework. Full lesson formatted per LESSON_STANDARD.md quality checklist. **Author:** OpenCode Agent (research output from external agent). **Reason:** Complete first lesson of A0 curriculum.
- **2026-07-13** -- `shared/prompts/A0-01-research-response.md` archived with full research output for A0-01 including grammar concepts, vocabulary table, example sentences, cultural notes, exercise types, and assessment criteria. **Author:** External research agent. **Reason:** Audit trail for lesson research.
- **2026-07-13** -- `docs/CURRICULUM.md` created with high-level overview of all 34 lessons (28 content lessons + 4 review lessons) organized by CEFR level. Shows lesson IDs, competency names, topics, status tracking, and research request file locations. **Author:** OpenCode Agent. **Reason:** Master curriculum roadmap for Phase 2+ lesson creation.
- **2026-07-13** -- `shared/vocabulary/master.csv` created with A0-01 vocabulary (25 words: alphabet
  letters, short vowels, long vowels, diphthongs, consonants, stress patterns). All words include
  pronunciation guidance, example sentences using only A0 grammar, articles, plurals, CEFR levels,
  and frequency rankings. This is the first entry in the master vocabulary database. **Author:**
  OpenCode Agent (integrated from external research). **Reason:** Phase 2 vocabulary integration begins
  with A0-01 phonetic vocabulary.
- **2026-07-13** -- `docs/VOCABULARY_ROADMAP.md` updated with A0-01 lesson section (complete
  vocabulary table, phonetic categories, quality verification). A0 topics table updated to mark
  A0-01 Phonetics as Complete. **Author:** OpenCode Agent. **Reason:** Document first completed
  vocabulary research and integrate into curriculum tracking.
- **2026-07-13** -- `docs/GRAMMAR_MAP.md` fully completed with all A0, A1, A2, and B1 grammar concepts
  (57 grammar concepts total, organized into 12 categories: verb system, noun system, pronoun system,
  adjective system, adverbs & word order, prepositions, complex structures, register & style). Each
  concept includes CEFR level, where first introduced, where reinforced, and dependencies. Includes
  lesson sequencing rules for all four levels, dependency visualization, and a comprehensive
  verification checklist. All grammar from COMPETENCY_MAP.md and CEFR_GUIDE.md is mapped with no
  circular dependencies. **Author:** OpenCode Agent. **Reason:** Enable grammar-accurate lesson
  sequencing in Phase 2.
- **2026-07-13** -- `docs/COMPETENCY_MAP.md` fully completed with all A0, A1, A2, and B1 competencies
  (28 competencies total: 7 A0, 11 A1, 7 A2, 9 B1). All CEFR_GUIDE.md grammar, vocabulary, and
  communication scope has been mapped to real-world learner competencies. Each competency includes
  can-do statements, required grammar/vocabulary/pronunciation/cultural knowledge, units, and
  assessments. DAG validation confirms no backwards dependencies. **Author:** OpenCode Agent.
  **Reason:** Complete Phase 2 curriculum planning foundation.
- `docs/CURRICULUM_PRINCIPLES.md` -- new highest-precedence document consolidating the project's
  educational principles (10 learning principles, structure, review strategy, AI generation
  principles, quality standards, success criteria, guiding principle)
- Previous `docs/COMPETENCY_MAP.md` -- new document defining the competency-driven content model
  (`CEFR Level -> Competency -> Unit -> Lesson -> Exercises`), with the competency entry format and
  two worked examples ("Introducing Yourself," "Shopping")
- `shared/prompts/competency-map-research.md` -- research/authoring prompt for Phase 2's first
  deliverable, `docs/COMPETENCY_MAP.md`
- `shared/prompts/grammar-progression-research.md` -- research/authoring prompt for
  `docs/GRAMMAR_MAP.md`
- `shared/prompts/vocabulary-progression-research.md` -- research/authoring prompt for
  `docs/VOCABULARY_ROADMAP.md` and `shared/vocabulary/master.csv`
- Initial project scaffold
- Core documentation framework
  - ARCHITECTURE.md
  - TEACHING_PHILOSOPHY.md
  - CEFR_GUIDE.md
  - LESSON_STANDARD.md
  - GRAMMAR_STANDARD.md
  - VOCABULARY_STANDARD.md
  - REVIEW_STRATEGY.md
  - STYLE_GUIDE.md
  - QUALITY_CHECKLIST.md
  - AI_GUIDELINES.md
- Project management files
  - README.md
  - PROJECT.md
  - ROADMAP.md
  - LICENSE.md
  - CHANGELOG.md
- Directory structure
  - docs/ -- Documentation and standards
  - agents/ -- AI agent definitions
  - shared/grammar/ -- Grammar reference files
  - shared/vocabulary/ -- Vocabulary database
  - shared/templates/ -- Content templates
  - shared/prompts/ -- AI prompts
  - shared/assets/ -- Images and media
  - shared/csv/ -- Generated CSVs
  - A0/, A1/, A2/, B1/ -- Level folders

### Changed

- `docs/CEFR_GUIDE.md` -- rewritten with the detailed per-level breakdown (exit profile, full grammar
  scope, full vocabulary scope by topic, communication/reading/listening/speaking/writing) that an AI
  agent can use without guessing whether a topic belongs in one level or another
- `docs/ARCHITECTURE.md`, `docs/CURRICULUM.md`, `docs/STYLE_GUIDE.md`, `PROJECT.md`, `ROADMAP.md`,
  `README.md`, `AGENTS.md`, `shared/prompts/lesson-creation.md` -- updated to replace the flat
  `Level -> Module -> Lesson` model with `CEFR Level -> Competency -> Unit -> Lesson -> Exercises`,
  and to reference the new `docs/CURRICULUM_PRINCIPLES.md` and `docs/COMPETENCY_MAP.md`
- `ROADMAP.md` Phase 2 now sequences `docs/COMPETENCY_MAP.md` before `docs/CURRICULUM.md`,
  `docs/GRAMMAR_MAP.md`, and `docs/VOCABULARY_ROADMAP.md`, since those are generated from it
- Repo-wide style fix: replaced every literal em-dash character (U+2014, "--" via keyboard is not the
  same character) with the style guide's required `--` in `docs/AI_GUIDELINES.md`,
  `docs/ARCHITECTURE.md`, `docs/GRAMMAR_MAP.md`, `docs/GRAMMAR_STANDARD.md`,
  `docs/LESSON_STANDARD.md`, `docs/REVIEW_STRATEGY.md`, `docs/STYLE_GUIDE.md`,
  `docs/TEACHING_PHILOSOPHY.md`, `docs/VOCABULARY_ROADMAP.md`, `docs/VOCABULARY_STANDARD.md`,
  `AGENTS.md`, `CHANGELOG.md`, `PROJECT.md`, and `README.md`. This includes the "no article"/
  "not applicable" placeholder used in vocabulary schema examples (now `de/het/--` where it
  previously used the disallowed em-dash character), so future `master.csv` entries should use `--`
  as that sentinel value, not an em-dash.

### Reason

Applied the planning decisions from the `../Chat.md` transcript: (1) adopt a single, highest-precedence
principles document, (2) replace the thin CEFR guide with a precise scope definition per level, and
(3) organize the curriculum around real-world competencies instead of a fixed lesson count per level,
since level size should be a byproduct of required scope, not a target decided in advance. The
em-dash cleanup fixes a pre-existing violation of the project's own `docs/STYLE_GUIDE.md` ("No
em-dashes -- use two hyphens") that had been present since the Phase 1 scaffold.

### Status

Phase 1 (Architecture) is complete. Phase 2 (Curriculum Planning) is underway.

**Phase 2 Progress:**
- **2026-07-13** -- `docs/COMPETENCY_MAP.md` complete (all 28 competencies drafted, validated, DAG-checked)
- **2026-07-13** -- `docs/GRAMMAR_MAP.md` complete (all 57 grammar concepts mapped with dependencies, lesson sequencing rules, and verification checklist)
- **Next:** `docs/VOCABULARY_ROADMAP.md` (map vocabulary topics, target word counts, and lesson placement per competency)
- **Then:** `shared/vocabulary/master.csv` (master vocabulary database with all words needed across A0-B1)
- **Then:** `docs/CURRICULUM.md` (lesson-level detail, units, and sequence, derived from competency and grammar maps)

---

## Versioning

This project uses semantic versioning:

- **MAJOR.MINOR.PATCH**
- **0.1.0** -- Alpha: Basic structure (current)
- **0.2.0** -- Beta: Curriculum planned
- **0.3.0** -- Beta: Grammar reference complete
- **0.4.0** -- Beta: Vocabulary database complete
- **0.5.0** -- Beta: A0 lessons complete
- **0.6.0** -- Beta: A1 lessons complete
- **0.7.0** -- Beta: A2 lessons complete
- **0.8.0** -- Beta: B1 lessons complete
- **0.9.0** -- Beta: Quality review and polish
- **1.0.0** -- Stable: Ready for public use

---

## Contributing Changes

When making changes to the curriculum:

1. Document the change here
2. Include date, what changed, and why
3. Update affected files
4. Ensure quality checklist passes
5. Update CURRICULUM.md, GRAMMAR_MAP.md, or VOCABULARY_ROADMAP.md if content changes

---

## Archive

Previous versions and major milestones are documented here.

(This section will grow as the project develops.)
