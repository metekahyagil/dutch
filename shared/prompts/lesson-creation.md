# Prompt Template: Lesson Research & Creation

This is a reusable prompt. Copy the "Prompt to Use" block below into a new
agent/task, replace every `{{VARIABLE}}` with real values, delete the
"How to Use This Template" section, and run it.

Designed for one lesson at a time. Do not batch multiple lessons into one run
of this prompt -- each lesson must be checked against the latest state of the
shared files, which changes after every lesson is submitted.

---

## How to Use This Template

1. Fill in the variables below based on what you're creating.
2. If `docs/CURRICULUM.md` already has a row for this lesson, copy its exact
   values for Prerequisites / New Grammar / New Vocabulary Count / Review
   Lesson. If this lesson has not been planned yet (e.g. you are bootstrapping
   the very first lesson), set `{{IS_FIRST_LESSON}}` to `true` and leave
   Prerequisites as "None" -- the prompt tells the agent to propose the
   remaining values itself and record them.
3. The competency and unit should already exist in `docs/COMPETENCY_MAP.md` and
   `docs/CURRICULUM.md`. If they don't yet, stop and run
   `shared/prompts/competency-map-research.md` first -- do not invent a
   competency or unit while writing a single lesson.
4. Paste the filled-in prompt as the task for the agent.

| Variable | Example | Notes |
|---|---|---|
| `{{LESSON_ID}}` | A0-01 | Exact filename-safe lesson code |
| `{{LEVEL}}` | A0 | A0 / A1 / A2 / B1 |
| `{{COMPETENCY_NUMBER}}` | 1 | Competency folder number within the level |
| `{{COMPETENCY_NAME}}` | Introducing Yourself | Human-readable competency name, from `docs/COMPETENCY_MAP.md` |
| `{{UNIT_NUMBER}}` | 1 | Unit folder number within the competency |
| `{{UNIT_NAME}}` | Personal Pronouns | Human-readable unit name |
| `{{LESSON_TITLE}}` | Personal Pronouns | Short lesson title |
| `{{PREREQUISITES}}` | None | Lesson IDs/concepts required first, or "None" |
| `{{GRAMMAR_FOCUS}}` | Personal pronouns | The ONE new grammar concept |
| `{{NEW_VOCAB_COUNT}}` | 0 | 0-35; review lessons must be 0 |
| `{{NEW_VOCAB_TOPIC}}` | N/A | Semantic topic for new words, if any |
| `{{REVIEW_LESSON}}` | A0-R1 | Which review lesson consolidates this |
| `{{IS_FIRST_LESSON}}` | true | true only for the very first lesson in the whole curriculum |

---

## Prompt to Use

```
You are creating one lesson for the Dutch B1 Curriculum content-authoring
repository. This is content authoring, not software engineering: there is no
build/lint/test, and "correctness" means strict adherence to this repo's
written standards plus linguistically accurate Dutch.

LESSON TO CREATE
- Lesson ID: {{LESSON_ID}}
- Level: {{LEVEL}}
- Competency: {{COMPETENCY_NUMBER}} - {{COMPETENCY_NAME}}
- Unit: {{UNIT_NUMBER}} - {{UNIT_NAME}}
- Title: {{LESSON_TITLE}}
- Prerequisites: {{PREREQUISITES}}
- New grammar concept (exactly one): {{GRAMMAR_FOCUS}}
- New vocabulary count: {{NEW_VOCAB_COUNT}} (topic: {{NEW_VOCAB_TOPIC}})
- Review lesson this feeds into: {{REVIEW_LESSON}}
- Is this the first lesson in the whole curriculum: {{IS_FIRST_LESSON}}

STEP 1 - READ THE STANDARDS (do this before writing anything)
Read, in this order:
1. AGENTS.md (repo root) -- current project state, invariants, style gotchas
2. docs/CURRICULUM_PRINCIPLES.md -- highest-precedence educational principles
3. docs/AI_GUIDELINES.md -- full workflow and rules for AI-generated content
4. docs/LESSON_STANDARD.md -- the mandatory 20-section lesson template
5. docs/GRAMMAR_STANDARD.md -- format for the shared grammar reference file
6. docs/VOCABULARY_STANDARD.md -- exact CSV schema and field rules
7. docs/STYLE_GUIDE.md -- markdown/formatting/terminology rules
8. docs/TEACHING_PHILOSOPHY.md -- what/why/how/when/mistakes/English-comparison approach
9. docs/CEFR_GUIDE.md -- confirm what this lesson's CEFR level can and cannot do
10. docs/COMPETENCY_MAP.md -- confirm {{COMPETENCY_NAME}} exists and this lesson's unit
    ({{UNIT_NAME}}) genuinely belongs to it
11. docs/QUALITY_CHECKLIST.md -- what you will be validated against at the end

STEP 2 - CHECK EXISTING STATE (do not assume, verify by reading the files)
1. Open docs/CURRICULUM.md. If a row already exists for {{LESSON_ID}}, its
   values are authoritative and override anything in this prompt if they
   conflict. If no row exists and {{IS_FIRST_LESSON}} is true, you will
   propose and add the row yourself in Step 5.
2. Open docs/GRAMMAR_MAP.md. Confirm {{GRAMMAR_FOCUS}} is not already taught
   in an earlier lesson (if it is, stop and flag this -- do not duplicate).
   List every grammar concept this lesson is allowed to use (this lesson's
   own concept plus anything already marked "Complete" in an earlier lesson).
3. Open docs/VOCABULARY_ROADMAP.md and shared/vocabulary/{nouns,verbs,adjectives,other}.csv.
   Build the exact list of vocabulary this lesson is allowed to use: anything already
   present with an earlier "Lesson Introduced" value, plus up to
   {{NEW_VOCAB_COUNT}} new words you will introduce in this lesson.
4. List the files in the unit folder (e.g.
   {{LEVEL}}/Competency-{{COMPETENCY_NUMBER}}-.../Unit-{{UNIT_NUMBER}}-.../) to
   find the 2-3 lessons immediately before this one (if any exist yet). Read
   them for tone, complexity, and to double check no vocabulary/grammar
   continuity is broken.
5. Check whether shared/grammar/ already has a file for {{GRAMMAR_FOCUS}}. If
   yes, reference it; do not create a duplicate.

STEP 3 - RESEARCH THE DUTCH CONTENT ITSELF
This is real language content, not filler text. Before writing:
1. Verify the grammar explanation for {{GRAMMAR_FOCUS}} is linguistically
   correct (forms, conjugations, exceptions, gendered/formal variants where
   relevant). If uncertain, use web search/fetch against a reputable
   grammar reference and cite what you checked in your final report.
2. If new vocabulary is required, select words appropriate for
   {{NEW_VOCAB_TOPIC}} and {{LEVEL}}, prioritizing high frequency, everyday
   usefulness, and easy pronunciation (per docs/VOCABULARY_ROADMAP.md's
   "High-Frequency Words Strategy"). Verify article (de/het), plural form,
   and pronunciation approximation for each word.
3. Every Dutch example sentence, dialogue line, and reading passage must use
   ONLY grammar and vocabulary from the allowed lists you built in Step 2 --
   do not use anything more advanced, even if it would sound more natural to
   a fluent speaker.

STEP 4 - WRITE THE LESSON
Create `{{LEVEL}}/Competency-{{COMPETENCY_NUMBER}}-{{COMPETENCY_NAME in Title-Case-hyphenated form}}/Unit-{{UNIT_NUMBER}}-{{UNIT_NAME in Title-Case-hyphenated form}}/{{LESSON_ID}}.md`
containing ALL 20 sections from docs/LESSON_STANDARD.md, in order, none omitted
(if a section truly does not apply, keep the heading with a short explanatory
note instead of deleting it). Follow docs/STYLE_GUIDE.md exactly: H1-H4 only,
no em-dashes (use --), no smart quotes, no emojis, no tabs, metadata header at
the top.

If {{GRAMMAR_FOCUS}} has no existing file in shared/grammar/, also create
`shared/grammar/{{GRAMMAR_FOCUS in lowercase-hyphenated form}}.md` following
docs/GRAMMAR_STANDARD.md's full structure (all 13 sections), and reference it
from the lesson's Grammar section instead of duplicating the explanation.

If {{NEW_VOCAB_COUNT}} > 0, add each new word as a row to the correct
shared/vocabulary/*.csv file for its part of speech, following the exact
schema in docs/VOCABULARY_STANDARD.md:
- Nouns -> nouns.csv: Dutch,English,Article,Plural,Diminutive,Pronunciation,CEFR Level,Lesson Introduced,Frequency Rank,Topic,Example Sentence,Example Translation,Notes
- Verbs -> verbs.csv: Dutch,English,Verb Type,Present (ik),Present (jij/u/hij/zij/het),Present (wij/jullie/zij),Simple Past (singular),Simple Past (plural),Auxiliary,Past Participle,Pronunciation,CEFR Level,Lesson Introduced,Frequency Rank,Topic,Example Sentence,Example Translation,Notes
- Adjectives -> adjectives.csv: Dutch,English,Comparative,Superlative,Inflected Form,Pronunciation,CEFR Level,Lesson Introduced,Frequency Rank,Topic,Example Sentence,Example Translation,Notes
- Everything else (adverbs, prepositions, conjunctions, pronouns, articles,
  determiners, interjections, numerals) -> other.csv: Dutch,English,Part of Speech,Pronunciation,CEFR Level,Lesson Introduced,Frequency Rank,Topic,Example Sentence,Example Translation,Notes
(create a file with its header row if it does not exist yet). The
lesson's own Vocabulary section references these CSV files; it does not
redefine entries.

STEP 5 - UPDATE THE SHARED TRACKING FILES
1. docs/CURRICULUM.md -- add or confirm the row for {{LESSON_ID}} (competency,
   unit, prerequisites, new grammar, new vocabulary, review lesson), and update
   the dependency map. Confirm the dependency graph stays a DAG (no lesson
   depends on a later one).
2. docs/GRAMMAR_MAP.md -- add or update the row for {{GRAMMAR_FOCUS}}: First
   Introduced = {{LESSON_ID}}, Reviewed In = {{REVIEW_LESSON}}, Dependencies,
   Status = Complete.
3. docs/VOCABULARY_ROADMAP.md -- add or update the relevant topic row(s) with
   the lessons and word counts actually used, Status = Complete (or partial,
   if the topic spans multiple lessons and this isn't the last one).
4. docs/COMPETENCY_MAP.md -- if this lesson completes everything a competency
   requires, note that the competency's units/lessons are fully authored (this
   file's own "Status" is about scope definition, not authoring progress, so
   only touch it if the competency's defined scope itself needs correcting).
5. CHANGELOG.md -- add an entry under [Unreleased] with date, what changed
   (lesson + any new grammar/vocab files), author ("AI agent" is fine), and
   reason.

STEP 6 - SELF-VALIDATE
Go through docs/QUALITY_CHECKLIST.md item by item and confirm every box is
genuinely true, not just present. Pay special attention to:
- No grammar used beyond what Step 2 allowed
- No vocabulary used beyond what Step 2 allowed
- All 20 lesson sections present and non-empty
- Grammar/vocabulary references link to real files/rows, not placeholders
- Formatting matches docs/STYLE_GUIDE.md (headings, no em-dashes, no smart quotes)

If anything fails, fix it before reporting done. If you are genuinely unsure
about a linguistic point (rare exception, regional variant, etc.), flag it
explicitly in your final report instead of guessing silently.

STEP 7 - REPORT BACK
In your final message, report:
1. Every file created or modified (full paths)
2. The final row you added to docs/CURRICULUM.md for this lesson
3. Any new grammar concept(s) and vocabulary word count added
4. Any flagged uncertainties that need human review
5. Confirmation that docs/QUALITY_CHECKLIST.md passes, or a list of what
   doesn't yet
```
