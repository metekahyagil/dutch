# AI Guidelines

You are contributing to the Dutch B1 Curriculum.

Your task is to generate or validate high-quality educational content while maintaining strict consistency across the entire project.

Read these rules before creating any content.

---

## Core Rules

### 1. Never Introduce Unknown Grammar

Every piece of grammar in a lesson must be in one of these places:

1. Taught in a previous lesson in the same level or earlier
2. Taught in the current lesson
3. Explicitly marked as review from an earlier lesson

**Check:** Before writing a lesson, read `docs/GRAMMAR_MAP.md` and verify that all grammar is available.

### 2. Never Introduce Unknown Vocabulary

Every vocabulary word in a lesson must be in one of these places:

1. Taught in a previous lesson in the same level or earlier
2. Taught in the current lesson (up to 35 new words)
3. Listed in the lesson's vocabulary section
4. In `shared/vocabulary/master.csv` with the current lesson as its introduction

**Check:** Before writing a lesson, verify every word exists in `shared/vocabulary/master.csv`.

### 3. Vocabulary Exists Only Once

Vocabulary definitions are in `shared/vocabulary/master.csv` only.

A lesson never contains vocabulary definitions.

A lesson may reference the master vocabulary:

```
**See:** `/shared/vocabulary/master.csv` (Filter by Lesson A0-01)
```

**Exception:** Vocabulary tables in a lesson may reference the word and translation for clarity, but the authoritative definition is always in the master.

### 4. Grammar Explanations Exist Only Once

Grammar explanations are in `shared/grammar/` only.

A lesson may reference a grammar explanation:

```
**See:** `/shared/grammar/personal-pronouns.md`
```

Do not duplicate grammar explanations.

**Exception:** A brief refresher ("Remember from the last lesson...") is okay, but the full explanation must be in the shared grammar file.

### 5. Follow the Lesson Standard

Every lesson must follow `docs/LESSON_STANDARD.md` exactly.

Every section must be present. No sections may be omitted.

If a section is not applicable, it must still exist with content like:

```
## Listening

(This lesson focuses on grammar. Listening practice is in Review Lesson 2.)
```

### 6. Progressive Complexity

Each lesson should be more complex than the previous one, but only slightly.

- Lesson 1: Simplest concepts
- Lesson 2: Add one new concept
- Lesson 3: Add one new concept + combine previous concepts
- Lesson 4: Add one new concept + combine previous concepts

Do not jump from "personal pronouns" to "complex subjunctive mood."

### 7. Use Simple English

Explanations should use simple English words:

- Use short sentences
- Use common words (not "utilize," use "use")
- Avoid jargon (or explain it first)
- Use examples generously

**Example:**

Not: "The auxiliary verb conjugates according to transitivity and subject agreement."

But: "The helping verb changes depending on the subject and whether the main verb is transitive."

### 8. Maintain Consistent Formatting

Follow `docs/STYLE_GUIDE.md` for:

- Markdown formatting
- Heading levels
- Table formatting
- Code formatting
- Example formatting
- Link formatting

### 9. Think Like a Textbook Author

You're writing a professional language textbook, not a chatbot response.

- Lessons should be polished and complete
- Explanations should be thorough but concise
- Examples should be practical and real
- Dialogue should sound natural
- Exercises should be progressively challenging

---

## Before You Start

1. **Read the Lesson Standard** -- `docs/LESSON_STANDARD.md`
2. **Read the Teaching Philosophy** -- `docs/TEACHING_PHILOSOPHY.md`
3. **Check the Curriculum** -- `docs/CURRICULUM.md`
4. **Check the Grammar Map** -- `docs/GRAMMAR_MAP.md`
5. **Check the Vocabulary Roadmap** -- `docs/VOCABULARY_ROADMAP.md`
6. **Check previous lessons** -- Understand what's already been taught
7. **Check the quality checklist** -- `docs/QUALITY_CHECKLIST.md`

---

## Creating a Lesson

### Step 1: Verify Prerequisites

Read `docs/CURRICULUM.md` for the lesson you're creating.

Check:
- [ ] What's the lesson number?
- [ ] What's the main grammar concept?
- [ ] What are the prerequisites?
- [ ] How many vocabulary words should it introduce?
- [ ] What review lesson comes after?

Example from CURRICULUM.md:
```
| A0-01 | Personal Pronouns | None | Present tense of "to be" | 0 new words | Review A0-02 |
| A0-02 | Present Tense (to be) | Personal pronouns | Articles | 5 new words | Review A0-02 |
```

### Step 2: Check Grammar Availability

Read `docs/GRAMMAR_MAP.md` to verify:

- [ ] Has the grammar for this lesson been taught yet?
- [ ] What previous grammar concepts will you reference?
- [ ] Are there dependencies you're missing?

Example from GRAMMAR_MAP.md:
```
| Personal Pronouns | Lesson A0-01 | Review A0-02 | A0 | None | Complete |
| Present Tense (to be) | Lesson A0-02 | Review A0-02 | A0 | Personal Pronouns | Complete |
```

### Step 3: Check Vocabulary

Read `docs/VOCABULARY_ROADMAP.md` and `shared/vocabulary/master.csv` to:

- [ ] Identify vocabulary needed for this lesson
- [ ] Verify it's in the master database
- [ ] Note how many new words this lesson introduces

### Step 4: Review Previous Lessons

Read the 2-3 lessons immediately before this one:

- [ ] What concepts are they using?
- [ ] What vocabulary is available?
- [ ] What's the tone and style?
- [ ] What complexity level are they at?

Build naturally on what came before.

### Step 5: Create the Lesson

Follow `docs/LESSON_STANDARD.md` section by section.

For each section:

- [ ] Read the standard
- [ ] Follow the template
- [ ] Check that no unknown grammar is used
- [ ] Check that no unknown vocabulary is used
- [ ] Ensure the section adds value (don't skip sections)

### Step 6: Validate Against Quality Checklist

Run through `docs/QUALITY_CHECKLIST.md`:

- [ ] Grammar already introduced?
- [ ] Vocabulary exists in master database?
- [ ] Lesson follows template?
- [ ] Reading contains only known grammar?
- [ ] Reading contains only known vocabulary?
- [ ] CSV generated?
- [ ] Quiz generated?
- [ ] Homework included?
- [ ] Review updated?
- [ ] Grammar map updated?
- [ ] Vocabulary roadmap updated?
- [ ] Links validated?
- [ ] Markdown validated?

### Step 7: Submit

Submit the lesson with:

- [ ] The lesson file
- [ ] Any updates to vocabulary CSV
- [ ] Any updates to grammar files
- [ ] Any updates to GRAMMAR_MAP.md
- [ ] Any updates to VOCABULARY_ROADMAP.md

---

## Examples

### Example: Reference Grammar

```markdown
## Grammar

We've already learned personal pronouns (I, you, he, she, it, we, they) in Lesson A0-01.

Now we'll learn what they do when we're describing people and things.

**See:** `/shared/grammar/personal-pronouns.md` for a full explanation.

### New Pattern: Present Tense of "to be"

In Dutch, we use **zijn** (to be) to describe people and things.

**See:** `/shared/grammar/present-tense-to-be.md`
```

### Example: Reference Vocabulary

```markdown
## Vocabulary

We'll introduce 25 new words in this lesson.

All vocabulary is stored in the master database:

**See:** `/shared/vocabulary/master.csv` (Filter by Lesson A1-05)

| Dutch | English | Article | Plural |
|-------|---------|---------|---------|
| man | man | de | mannen |
| vrouw | woman | de | vrouwen |
| kind | child | het | kinderen |
| [more entries] |
```

### Example: Only Known Vocabulary

A reading exercise:

```markdown
## Reading

Ik ben Jan. Ik ben een man. Dit is mijn vrouw, Anna. 
Dit zijn onze kinderen, Tom en Lisa.

(Only uses vocabulary from previous lessons or this lesson)
```

### Example: Checking Grammar

Before writing an example, check:

- **Personal pronouns?** Yes, A0-01
- **Present tense (to be)?** Yes, A0-02 (this lesson)
- **Articles?** Yes, A0-03
- **Regular verbs?** Yes, A0-04
- **Past tense?** No -- don't use it!

---

## Common Mistakes to Avoid

1. **Using grammar before it's taught** -- Always check GRAMMAR_MAP.md first
2. **Using vocabulary before it's introduced** -- Always check VOCABULARY_ROADMAP.md first
3. **Duplicating grammar explanations** -- Always reference shared files
4. **Duplicating vocabulary definitions** -- Always reference master.csv
5. **Not following the lesson standard** -- Every section is required
6. **Overly complex language** -- Simplify your explanations
7. **Too many new concepts in one lesson** -- One concept per lesson
8. **Not validating links** -- All references should work
9. **Inconsistent formatting** -- Follow STYLE_GUIDE.md
10. **Skipping quality checklist** -- It exists for a reason

---

## When in Doubt

If you're unsure about something, clarify:

1. **Unknown grammar?** Ask or check GRAMMAR_MAP.md
2. **Unknown vocabulary?** Ask or check VOCABULARY_ROADMAP.md
3. **Lesson structure?** Read LESSON_STANDARD.md again
4. **Tone or style?** Read recent lessons in the same level
5. **Formatting?** Check STYLE_GUIDE.md

Clarity over completeness. A clear, simple lesson is better than a complex, confusing one.

---

## You Are a Quality Guardian

Your job isn't just to create content. It's to maintain the integrity of the curriculum.

If something doesn't fit the standards, flag it.

If a lesson could be clearer, improve it.

If there's a dependency problem, fix it.

The curriculum is only as good as its weakest lesson. Make every lesson great.
