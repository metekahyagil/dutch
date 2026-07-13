# Prompt Template: Competency Map Research and Authoring

This is a reusable prompt for Phase 2's first deliverable: `docs/COMPETENCY_MAP.md`. Copy the
"Prompt to Use" block below into a new agent/task, replace every `{{VARIABLE}}` with real values,
delete the "How to Use This Template" section, and run it.

Run this **once per CEFR level** (A0, then A1, then A2, then B1), in that order. Do not try to
produce all four levels in one pass -- each level's competencies should be checked against the
previous level's finished competency list so nothing is duplicated and no dependency points
backward across a level boundary.

---

## How to Use This Template

1. Set `{{LEVEL}}` to the CEFR level you are researching (A0 / A1 / A2 / B1).
2. Run this for A0 first. Do not start A1 until A0's competencies in `docs/COMPETENCY_MAP.md` are
   complete, because A1 competencies must build on the finished A0 list without re-teaching it.
3. Paste the filled-in prompt as the task for the agent.

| Variable | Example | Notes |
|---|---|---|
| `{{LEVEL}}` | A0 | The CEFR level to research and author competencies for |

---

## Prompt to Use

```
You are researching and authoring the competency scope for one CEFR level of the Dutch B1
Curriculum content-authoring repository. This is content planning, not software engineering: there
is no build/lint/test, and "correctness" means strict adherence to this repo's written standards
plus an accurate, well-justified breakdown of what a real learner at this level needs.

LEVEL TO RESEARCH: {{LEVEL}}

STEP 1 - READ THE STANDARDS (do this before researching or writing anything)
Read, in this order:
1. AGENTS.md (repo root) -- current project state and invariants
2. docs/CURRICULUM_PRINCIPLES.md -- highest-precedence educational principles, especially the
   "Curriculum Structure" section describing the competency-driven model
3. docs/CEFR_GUIDE.md -- the exact grammar scope, vocabulary scope, exit profile, and
   communication/reading/listening/speaking/writing scope defined for {{LEVEL}} (and confirm you
   understand the scope of the level(s) before it, since {{LEVEL}} may only build on those)
4. docs/COMPETENCY_MAP.md -- the required format for a competency entry, the two worked examples,
   and any levels already completed before {{LEVEL}}

STEP 2 - EXTERNAL RESEARCH (do this before drafting competencies)
Ground the competency list in real second-language-acquisition and CEFR sources, not intuition
alone. For each source you use, verify it is a reputable authority on CEFR / Dutch as a second
language (for example: the Council of Europe's CEFR documentation, the Dutch NT2 civic integration
exam framework, or a well-established Dutch-as-a-second-language course provider's published
syllabus) before citing it, and record what you checked in your final report. Do not fabricate or
guess at a source's content -- fetch it and read it, or skip citing it.

Specifically research:
1. What CEFR "can-do" statements exist for {{LEVEL}} in the official CEFR descriptors, and how they
   map onto the grammar/vocabulary/skills scope already fixed in docs/CEFR_GUIDE.md.
2. What real-world situations/tasks a Dutch NT2 (Nederlands als tweede taal) learner at {{LEVEL}} is
   expected to handle, particularly if {{LEVEL}} is A2 or B1 (relevant to the Staatsexamen NT2 /
   civic integration exam, since docs/CEFR_GUIDE.md requires exam readiness from A0 onward).
3. How comparable Dutch courses/textbooks at this level group their material into thematic units, to
   sanity-check that your competency list is neither too coarse (a single competency trying to cover
   unrelated abilities) nor too fine (competencies that are really just one lesson).

STEP 3 - DRAFT THE COMPETENCY LIST
1. List every grammar concept and every vocabulary topic that docs/CEFR_GUIDE.md assigns to
   {{LEVEL}}. This is your coverage checklist -- every item must end up required by at least one
   competency by the end of this task.
2. Group real-world can-do abilities into competencies. Each competency must be a genuine
   real-world ability (e.g. "Shopping," "Making a Doctor's Appointment"), not a grammar topic
   relabeled (e.g. not "Modal Verbs" as a competency name).
3. For each competency, name the units that will contain its lessons (a unit is a smaller slice of
   the competency, e.g. the "Shopping" competency might have "Numbers and Prices" and "Sizes and
   Colours" units).
4. Write each competency using the exact format in docs/COMPETENCY_MAP.md's "Competency Format"
   section: The learner can / Requires Grammar / Requires Vocabulary / Requires Pronunciation /
   Requires Cultural Knowledge / Assessment.
5. Assessment must describe a realistic, observable task (a role play, a short conversation, a
   piece of writing), not "pass a multiple-choice quiz" alone.

STEP 4 - VALIDATE COVERAGE AND DEPENDENCIES
1. Confirm every grammar concept and vocabulary topic from docs/CEFR_GUIDE.md's {{LEVEL}} scope is
   required by at least one competency. List any gaps and fix them before continuing.
2. Confirm no competency at {{LEVEL}} requires a grammar concept or vocabulary topic that
   docs/CEFR_GUIDE.md assigns to a later level. If you find one, either move the competency to the
   later level or remove the advanced requirement.
3. Confirm no competency depends on a competency from a later CEFR level (the dependency graph
   must stay a DAG, consistent with AGENTS.md's invariants).
4. Run through docs/COMPETENCY_MAP.md's "Verification Checklist" item by item for every competency
   you drafted.

STEP 5 - WRITE THE RESULTS
1. Add a new `## {{LEVEL}} Competencies` section to docs/COMPETENCY_MAP.md (replacing the
   "To be completed" placeholder for this level), containing every competency in the required
   format.
2. Do not touch the sections for other levels.
3. Update CHANGELOG.md with an entry: date, "Completed {{LEVEL}} competencies in
   docs/COMPETENCY_MAP.md," author ("AI agent" is fine), and reason.

STEP 6 - REPORT BACK
In your final message, report:
1. The full list of competency names added for {{LEVEL}}, with their units.
2. Confirmation that every grammar/vocabulary item in docs/CEFR_GUIDE.md's {{LEVEL}} scope is
   covered by at least one competency (or a list of any gaps you could not resolve).
3. Every external source you actually checked, and what you confirmed from each.
4. Any judgment calls or ambiguities that need human review before this level's competencies are
   considered final (for example, a can-do statement that could reasonably belong to two different
   competencies).
```
