# Prompt Template: Grammar Progression Research and Authoring

This is a reusable prompt for populating `docs/GRAMMAR_MAP.md` from `docs/COMPETENCY_MAP.md`. Copy
the "Prompt to Use" block below into a new agent/task, replace every `{{VARIABLE}}` with real
values, delete the "How to Use This Template" section, and run it.

Run this **once per CEFR level**, and only after that level's competencies in
`docs/COMPETENCY_MAP.md` are complete. Do not run this for a level until its competencies exist,
since the grammar list for a level is derived from what its competencies require.

---

## How to Use This Template

1. Set `{{LEVEL}}` to the CEFR level you are sequencing grammar for (A0 / A1 / A2 / B1).
2. Run this for A0 first, then A1, A2, B1 in order, since each level's grammar sequence builds on
   the previous level's finished dependency chain.
3. Paste the filled-in prompt as the task for the agent.

| Variable | Example | Notes |
|---|---|---|
| `{{LEVEL}}` | A0 | The CEFR level to sequence grammar for |

---

## Prompt to Use

```
You are researching and authoring the grammar progression for one CEFR level of the Dutch B1
Curriculum content-authoring repository. This is content planning grounded in real Dutch grammar,
not software engineering: there is no build/lint/test, and "correctness" means linguistic accuracy
plus strict adherence to this repo's written standards.

LEVEL TO SEQUENCE: {{LEVEL}}

STEP 1 - READ THE STANDARDS (do this before researching or writing anything)
Read, in this order:
1. AGENTS.md (repo root) -- current project state and invariants, especially "no grammar before
   it's taught" and "dependencies must form a DAG"
2. docs/CURRICULUM_PRINCIPLES.md -- especially "Grammar Principles"
3. docs/CEFR_GUIDE.md -- the exact Grammar Scope list for {{LEVEL}}
4. docs/COMPETENCY_MAP.md -- every competency for {{LEVEL}} and its "Requires Grammar" list
5. docs/GRAMMAR_STANDARD.md -- the format for a full grammar reference file
6. docs/GRAMMAR_MAP.md -- the exact table format, and whatever earlier levels have already been
   completed (their dependency chain is fixed and cannot be changed by this task)

STEP 2 - COLLECT THE REQUIRED GRAMMAR CONCEPTS
1. From docs/CEFR_GUIDE.md, list every grammar item in {{LEVEL}}'s Grammar Scope.
2. From docs/COMPETENCY_MAP.md, list every grammar item every {{LEVEL}} competency's "Requires
   Grammar" section names.
3. These two lists must match. If docs/CEFR_GUIDE.md lists something no competency requires, or a
   competency requires something outside docs/CEFR_GUIDE.md's scope, stop and flag the mismatch
   before continuing (do not silently resolve it by inventing scope).

STEP 3 - EXTERNAL LINGUISTIC RESEARCH
For every grammar concept in the list, verify its actual forms, conjugations, and exceptions against
a reputable Dutch grammar reference before sequencing it (for example: a recognized Dutch grammar
reference site, a published NT2 grammar reference, or a university-level Dutch linguistics
resource). Do not rely on memory alone for irregular verb forms, gendered article rules, or word
order rules -- fetch and read a real source, and record what you checked. If sources disagree on a
minor point (e.g. a regional variant), note the disagreement in your final report instead of picking
one silently.

STEP 4 - SEQUENCE THE GRAMMAR
1. Order the concepts so that every concept's prerequisites appear earlier in the sequence. Use
   linguistic dependency, not alphabetical or topical convenience (for example: personal pronouns
   before verb conjugation, verb conjugation before negation of verbs, singular before plural,
   regular forms before their irregular exceptions).
2. Assign each concept to the competency and unit (from docs/COMPETENCY_MAP.md) where it will first
   be taught. A concept may be reinforced in later competencies/units, but it has exactly one first
   teaching point.
3. Confirm progressive complexity: {{LEVEL}}'s sequence should start with the simplest carryover
   from the previous level and end with {{LEVEL}}'s most complex new concept, per
   docs/AI_GUIDELINES.md's "Progressive Complexity" rule.
4. Confirm the full dependency graph (this level plus all previous levels) is a DAG: no concept may
   depend, directly or indirectly, on a concept introduced later.

STEP 5 - WRITE THE RESULTS
1. Add or update the `## {{LEVEL}}` table in docs/GRAMMAR_MAP.md using its documented columns
   (Concept, Level, First, Also In, Reviewed, Depends On, Status). Leave "First" and "Also In" as
   placeholders referencing the competency/unit (e.g. "Competency: Shopping / Unit: Numbers and
   Prices") until docs/CURRICULUM.md assigns exact lesson IDs -- do not invent lesson IDs in this
   task.
2. Set Status to "Pending" (not "Complete") for every row -- Status only becomes "Complete" once the
   actual lesson is written and cross-checked, per shared/prompts/lesson-creation.md.
3. Do not create shared/grammar/ explanation files in this task -- those are written per-lesson by
   shared/prompts/lesson-creation.md, to avoid drafting an explanation before its examples are
   constrained by the actual lesson's known vocabulary.
4. Update CHANGELOG.md with an entry: date, "Sequenced {{LEVEL}} grammar in docs/GRAMMAR_MAP.md,"
   author ("AI agent" is fine), and reason.

STEP 6 - REPORT BACK
In your final message, report:
1. The full ordered list of grammar concepts added for {{LEVEL}}, each with its dependency.
2. Confirmation that every item in docs/CEFR_GUIDE.md's {{LEVEL}} Grammar Scope and every grammar
   requirement in docs/COMPETENCY_MAP.md's {{LEVEL}} competencies is present (or a list of any
   mismatches found in Step 2, resolved or still open).
3. Confirmation the combined dependency graph (this level plus earlier levels) is a DAG.
4. Every external source you actually checked, and what you confirmed from each.
5. Any linguistic uncertainties (irregular exceptions, regional variants, disagreements between
   sources) flagged for human review.
```
