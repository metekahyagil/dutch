# Project Roadmap

## Phase 1 -- Architecture

Complete. This phase established:

- Repository structure
- Documentation framework
- Standards and specifications
- AI agent guidelines
- Templates and prompts
- `docs/CURRICULUM_PRINCIPLES.md` -- the highest-precedence educational principles document
- `docs/CEFR_GUIDE.md` -- detailed grammar/vocabulary/skills scope per CEFR level
- The competency-driven content model (`docs/COMPETENCY_MAP.md`), replacing a fixed lesson-count model

---

## Phase 2 -- Curriculum Planning

Create the master curriculum plans that guide all content creation. Complete these **in order** --
each later document is generated from the one(s) before it:

- [ ] `docs/COMPETENCY_MAP.md` -- Every competency per CEFR level (real-world can-do abilities, with
      required grammar, vocabulary, pronunciation, cultural knowledge, and assessment). Use
      `shared/prompts/competency-map-research.md`.
- [ ] `docs/GRAMMAR_MAP.md` -- Every grammar concept, where it's first taught, where it's reviewed,
      driven by the competencies above. Use `shared/prompts/grammar-progression-research.md`.
- [ ] `docs/VOCABULARY_ROADMAP.md` -- Vocabulary topics, target word counts, lesson placement, driven
      by the competencies above. Use `shared/prompts/vocabulary-progression-research.md`.
- [ ] `shared/vocabulary/{nouns,verbs,adjectives,other}.csv` -- Vocabulary database, split by part of speech
- [ ] `docs/CURRICULUM.md` -- Complete unit/lesson roadmap with dependencies, generated from the
      Competency Map, Grammar Map, and Vocabulary Roadmap

---

## Phase 3 -- Content Standards

Establish all content templates and validation rules:

- [ ] `docs/LESSON_STANDARD.md` -- Mandatory structure for all lessons
- [ ] `docs/GRAMMAR_STANDARD.md` -- Format for grammar explanations
- [ ] `docs/VOCABULARY_STANDARD.md` -- Vocabulary entry format
- [ ] `docs/REVIEW_STRATEGY.md` -- How reviews are structured
- [ ] `docs/STYLE_GUIDE.md` -- Markdown, formatting, terminology
- [ ] `docs/QUALITY_CHECKLIST.md` -- Validation checklist
- [ ] `docs/AI_GUIDELINES.md` -- Rules for AI content generation
- [ ] `shared/templates/` -- Templates for lessons, reviews, quizzes

---

## Phase 4 -- A0 (Foundations)

Complete the foundational level:

- [ ] A0 competencies fully defined in `docs/COMPETENCY_MAP.md`
- [ ] A0 curriculum outline (units/lessons generated from A0 competencies)
- [ ] A0 grammar reference materials
- [ ] A0 vocabulary set
- [ ] A0 units and lessons for each A0 competency
- [ ] A0 Review Lesson 1
- [ ] A0 Assessment
- [ ] A0 quality validation

---

## Phase 5 -- A1 (Beginner)

Complete the beginner level:

- [ ] A1 competencies fully defined in `docs/COMPETENCY_MAP.md`
- [ ] A1 curriculum outline (units/lessons generated from A1 competencies)
- [ ] A1 grammar reference materials
- [ ] A1 vocabulary set
- [ ] A1 units and lessons for each A1 competency
- [ ] A1 Review lessons
- [ ] A1 Assessment
- [ ] A1 quality validation

---

## Phase 6 -- A2 (Elementary)

Complete the elementary level:

- [ ] A2 competencies fully defined in `docs/COMPETENCY_MAP.md`
- [ ] A2 curriculum outline (units/lessons generated from A2 competencies)
- [ ] A2 grammar reference materials
- [ ] A2 vocabulary set
- [ ] A2 units and lessons for each A2 competency
- [ ] A2 Review lessons
- [ ] A2 Assessment
- [ ] A2 quality validation

---

## Phase 7 -- B1 (Independent User)

Complete the independent user level:

- [ ] B1 competencies fully defined in `docs/COMPETENCY_MAP.md`
- [ ] B1 curriculum outline (units/lessons generated from B1 competencies)
- [ ] B1 grammar reference materials
- [ ] B1 vocabulary set
- [ ] B1 units and lessons for each B1 competency
- [ ] B1 Review lessons
- [ ] B1 Assessment
- [ ] B1 quality validation

---

## Phase 8 -- Exam Preparation

Create exam-focused materials:

- [ ] Practice exams
- [ ] Exam strategies
- [ ] Common mistakes guide
- [ ] Final review materials

---

## Phase 9 -- Quality & Polish

Final comprehensive review:

- [ ] Consistency check across all levels
- [ ] Vocabulary duplication check
- [ ] Grammar reference validation
- [ ] Link validation
- [ ] Markdown formatting validation
- [ ] CEFR alignment verification
- [ ] Changelog and versioning

---

## Next Step

The immediate next step is **Phase 2**: Complete the master curriculum plans, starting with
`docs/COMPETENCY_MAP.md`.

`docs/COMPETENCY_MAP.md` now comes first because it defines what a level must contain (real-world
competencies) before `docs/CURRICULUM.md` decides how many units and lessons deliver that content.
Use `shared/prompts/competency-map-research.md` to run this phase.
