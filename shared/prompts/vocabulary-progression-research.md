# Prompt Template: Vocabulary Progression Research and Authoring

This is a reusable prompt for populating `docs/VOCABULARY_ROADMAP.md` and
`shared/vocabulary/master.csv` from `docs/COMPETENCY_MAP.md`. Copy the "Prompt to Use" block below
into a new agent/task, replace every `{{VARIABLE}}` with real values, delete the "How to Use This
Template" section, and run it.

Run this **once per CEFR level**, and only after that level's competencies in
`docs/COMPETENCY_MAP.md` are complete. Each level's vocabulary must be checked against
`shared/vocabulary/master.csv` as it exists after the previous level was finished, so no word is
introduced twice.

---

## How to Use This Template

1. Set `{{LEVEL}}` to the CEFR level you are selecting vocabulary for (A0 / A1 / A2 / B1).
2. Run this for A0 first, then A1, A2, B1 in order.
3. Paste the filled-in prompt as the task for the agent.

| Variable | Example | Notes |
|---|---|---|
| `{{LEVEL}}` | A0 | The CEFR level to select vocabulary for |

---

## Prompt to Use

```
You are researching and authoring the vocabulary progression for one CEFR level of the Dutch B1
Curriculum content-authoring repository. This is content planning grounded in real word-frequency
data, not software engineering: there is no build/lint/test, and "correctness" means an accurate,
well-justified word list plus strict adherence to this repo's written standards.

LEVEL TO SELECT VOCABULARY FOR: {{LEVEL}}

STEP 1 - READ THE STANDARDS (do this before researching or writing anything)
Read, in this order:
1. AGENTS.md (repo root) -- current project state and invariants, especially "no vocabulary before
   it's taught" and the master.csv schema
2. docs/CURRICULUM_PRINCIPLES.md -- especially "Vocabulary Principles"
3. docs/CEFR_GUIDE.md -- the exact Vocabulary Scope (topic list and target word count) for
   {{LEVEL}}
4. docs/COMPETENCY_MAP.md -- every competency for {{LEVEL}} and its "Requires Vocabulary" list
5. docs/VOCABULARY_STANDARD.md -- the exact CSV schema and per-column rules
6. docs/VOCABULARY_ROADMAP.md -- the exact table format, the "High-Frequency Words Strategy"
   section, and whatever earlier levels have already been completed
7. shared/vocabulary/master.csv (if it exists yet) -- every word already introduced at an earlier
   level; {{LEVEL}}'s new words must not duplicate these

STEP 2 - COLLECT THE REQUIRED TOPICS
1. From docs/CEFR_GUIDE.md, list every vocabulary topic in {{LEVEL}}'s Vocabulary Scope and the
   overall target word count for the level.
2. From docs/COMPETENCY_MAP.md, list every vocabulary topic every {{LEVEL}} competency's "Requires
   Vocabulary" section names.
3. These two lists must be consistent. If docs/CEFR_GUIDE.md lists a topic no competency requires,
   or a competency requires a topic outside docs/CEFR_GUIDE.md's scope, stop and flag the mismatch
   before continuing.

STEP 3 - EXTERNAL FREQUENCY RESEARCH
Word selection must be driven by real frequency and usefulness data, not guesswork. For each topic,
research actual high-frequency Dutch words using a reputable source (for example: a published Dutch
word-frequency corpus/list, a recognized NT2 vocabulary list, or a well-established Dutch learner's
dictionary that marks frequency/CEFR level). Verify before citing that the source is a genuine
frequency or pedagogical authority, and record what you checked. For every word you select, verify:
1. The correct article (de/het) -- do not guess; check a dictionary.
2. The correct plural form and any irregularities.
3. A practical English-approximation pronunciation (not IPA), per docs/STYLE_GUIDE.md.
4. That the word is genuinely high-frequency/useful for {{LEVEL}}, not just topically related.

STEP 4 - SELECT AND ALLOCATE VOCABULARY
1. For each topic required at {{LEVEL}}, select words following docs/VOCABULARY_ROADMAP.md's
   "High-Frequency Words Strategy" (frequency first, then usefulness, then context, then
   pronunciation difficulty).
2. Allocate words to the competency/unit (from docs/COMPETENCY_MAP.md) where they will first be
   introduced. Respect the "20-35 new vocabulary items max per lesson" invariant when you later
   estimate how these will spread across lessons in docs/CURRICULUM.md (this task does not assign
   exact lesson IDs, only competency/unit).
3. Confirm the total new words for {{LEVEL}} fall within docs/CEFR_GUIDE.md's target range for the
   level (cumulative across all levels so far).
4. Confirm no word selected for {{LEVEL}} already exists in shared/vocabulary/master.csv from an
   earlier level (no duplicates) and no word needed by an earlier level's competency is missing from
   an earlier level (a gap that should have been caught earlier -- flag it if found, do not silently
   backfill into an earlier level's Status).

STEP 5 - WRITE THE RESULTS
1. Add or update the `## {{LEVEL}} Vocabulary Topics` table in docs/VOCABULARY_ROADMAP.md using its
   documented columns (Topic, Level, Target, Lessons, Status, Notes). Leave "Lessons" as a
   competency/unit reference until docs/CURRICULUM.md assigns exact lesson IDs. Set Status to
   "Pending" (not "Complete") -- Status only becomes "Complete" once the actual lesson is written.
2. Add every selected word as a new row in shared/vocabulary/master.csv following the exact schema:
   Dutch,English,Article,Plural,Pronunciation,Part of Speech,CEFR Level,Lesson Introduced,Frequency
   Rank,Topic,Example Sentence,Example Translation,Notes
   (create the file with this header row if it does not exist yet). Leave "Lesson Introduced" as the
   competency/unit reference until docs/CURRICULUM.md assigns exact lesson IDs. Example sentences at
   this stage may only use grammar/vocabulary already available at or before {{LEVEL}} per
   docs/GRAMMAR_MAP.md and this same master.csv.
3. Update the "Cumulative Vocabulary Targets" table in docs/VOCABULARY_ROADMAP.md with the running
   total through {{LEVEL}}.
4. Update CHANGELOG.md with an entry: date, "Selected {{LEVEL}} vocabulary in
   docs/VOCABULARY_ROADMAP.md and shared/vocabulary/master.csv," author ("AI agent" is fine), and
   reason.

STEP 6 - REPORT BACK
In your final message, report:
1. The full list of topics covered for {{LEVEL}} with word counts per topic and the level total.
2. Confirmation the level total is within docs/CEFR_GUIDE.md's target range for {{LEVEL}}.
3. Confirmation every vocabulary requirement in docs/COMPETENCY_MAP.md's {{LEVEL}} competencies is
   satisfied (or a list of any mismatches found in Step 2, resolved or still open).
4. Confirmation no duplicate words were introduced against the existing master.csv.
5. Every external source you actually checked, and what you confirmed from each.
6. Any uncertain words (disputed article, regional spelling variant, ambiguous frequency data)
   flagged for human review.
```
