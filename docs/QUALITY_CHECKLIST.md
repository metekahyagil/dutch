# Quality Checklist

Every lesson must pass this checklist before submission.

Use this to validate your work.

---

## Pre-Submission Checklist

### Grammar Validation

- [ ] **No unknown grammar introduced**
  - Check `docs/GRAMMAR_MAP.md`
  - All grammar in this lesson is either:
    - Taught in this lesson, OR
    - Taught in a previous lesson, OR
    - Explicitly marked as review

- [ ] **All grammar concepts are explicit**
  - No unexplained terminology
  - Every grammatical term is defined or referenced
  - Examples clarify concepts

- [ ] **Grammar is referenced correctly**
  - Links to `/shared/grammar/` files exist
  - References are accurate and current
  - No duplicated grammar explanations

### Vocabulary Validation

- [ ] **No unknown vocabulary introduced**
  - Check `docs/VOCABULARY_ROADMAP.md`
  - Check `shared/vocabulary/master.csv`
  - All vocabulary is either:
    - Taught in this lesson, OR
    - Taught in a previous lesson, OR
    - In the master vocabulary database

- [ ] **New vocabulary count is correct**
  - Between 20-35 new vocabulary items (or as specified)
  - Vocabulary is essential for the level
  - No rare or irrelevant words

- [ ] **All vocabulary exists in master database**
  - Each word appears in `shared/vocabulary/master.csv`
  - CSV entry includes all required fields
  - Pronunciation is provided
  - Example sentence is provided

- [ ] **Vocabulary references are correct**
  - Links to master database are accurate
  - CSV exports exist (or will be generated)
  - Tables match master database

### Reading Validation

- [ ] **Reading uses only known grammar**
  - No grammar concepts not yet taught
  - No complex structures without explanation
  - No future/past tense unless explicitly taught

- [ ] **Reading uses only known vocabulary**
  - Every word is from current or previous lessons
  - No unexplained words
  - No advanced vocabulary without context

- [ ] **Reading is meaningful**
  - Not just random sentences
  - Text tells a coherent story or conveys useful information
  - Practical and relevant to learner interests

### Listening Validation

- [ ] **Listening uses only known grammar**
- [ ] **Listening uses only known vocabulary**
- [ ] **Listening is clear**
  - Pronunciation is natural
  - Speech is at appropriate speed
  - Audio quality is good (if audio provided)
- [ ] **Comprehension questions are provided**
- [ ] **Answer key is provided**

### Speaking Validation

- [ ] **Speaking prompts are clear**
  - Learner understands what's expected
  - Prompts use known vocabulary
- [ ] **Model answers are provided**
  - Natural and realistic
  - Use only known grammar and vocabulary
  - Appropriate length and complexity

### Writing Validation

- [ ] **Writing exercises progress in difficulty**
  - Start with structured (fill-in-blanks)
  - Move to semi-structured (sentence building)
  - End with open-ended (original writing)

- [ ] **All writing exercises have examples or models**
  - Sample answers provided
  - Model responses are clear

### Lesson Structure Validation

- [ ] **All 20 sections are present**
  - Lesson Header (1)
  - Lesson Goal (2)
  - Previous Knowledge (3)
  - Why This Matters (4)
  - Grammar (5)
  - Grammar Reasoning (6)
  - Vocabulary (7)
  - Pronunciation (8)
  - Dialogue (9)
  - Reading (10)
  - Listening (11)
  - Speaking (12)
  - Writing (13)
  - Common Mistakes (14)
  - Dutch Insight (15)
  - Memory Tricks (16)
  - Active Recall (17)
  - Quiz (18)
  - Homework (19)
  - Summary (20)

- [ ] **No sections are empty**
  - Even if not directly applicable, sections have content
  - Gaps are explained (e.g., "Listening practice for this concept is in Review Lesson 2")

- [ ] **All sections follow standards**
  - Lesson section format matches `docs/LESSON_STANDARD.md`
  - Grammar section format matches `docs/GRAMMAR_STANDARD.md`
  - Vocabulary section format matches `docs/VOCABULARY_STANDARD.md`

### Content Quality Validation

- [ ] **Language is clear and simple**
  - Short sentences
  - Common words
  - No unexplained jargon
  - Accessible to learners at this level

- [ ] **Examples are practical**
  - Real-world usage
  - Relevant to learners
  - Interesting and memorable

- [ ] **Dialogue is natural**
  - Sounds like actual conversation
  - Realistic context
  - Appropriate formality level

- [ ] **Explanations are thorough but concise**
  - Complete enough to understand
  - Not overwhelming with detail
  - Every concept is explained

### Technical Validation

- [ ] **All links work**
  - Internal links point to existing files
  - External links are valid
  - No broken references

- [ ] **Markdown is valid**
  - No syntax errors
  - Tables render correctly
  - Code blocks format properly
  - Headings are consistent

- [ ] **Formatting follows style guide**
  - Check `docs/STYLE_GUIDE.md`
  - Consistent capitalization
  - Consistent punctuation
  - Consistent terminology

- [ ] **No typos or grammatical errors**
  - English is correct
  - Dutch text is correct (check with native speaker if needed)
  - Translations are accurate

- [ ] **Images and media work**
  - All image links resolve
  - Audio files are accessible
  - File paths are correct

- [ ] **File naming is correct**
  - Lesson files: `A0-01.md`, `A1-05.md`, etc.
  - Review files: `A0-R1.md`, `A1-R2.md`, etc.
  - Grammar files: lowercase with hyphens
  - Proper directory structure

### Cross-Curriculum Validation

- [ ] **Prerequisites are accurate**
  - Listed prerequisites match `docs/CURRICULUM.md`
  - Learner can complete prerequisites before this lesson
  - All prerequisites are satisfied in previous content

- [ ] **Dependencies are documented**
  - Future lessons that depend on this one are listed (if known)
  - Prerequisites are cross-referenced correctly

- [ ] **Vocabulary CSV is updated**
  - `shared/vocabulary/master.csv` includes all new words
  - CSV entries have all required fields
  - Duplicate entries are removed

- [ ] **Grammar Map is updated**
  - `docs/GRAMMAR_MAP.md` includes new grammar concepts
  - First introduction is listed correctly
  - Review lessons are listed

- [ ] **Vocabulary Roadmap is updated**
  - `docs/VOCABULARY_ROADMAP.md` includes new topics
  - Lesson placement is correct
  - Word counts are accurate

- [ ] **Curriculum is updated**
  - `docs/CURRICULUM.md` includes this lesson
  - Lesson number is correct
  - Prerequisites are listed
  - Dependencies are listed

### Review and Assessment Validation

- [ ] **Quiz has 15-20 questions**
- [ ] **Quiz covers all major concepts**
- [ ] **Quiz has answer key with explanations**
- [ ] **Active Recall section is challenging**
- [ ] **Homework is meaningful**
  - Reinforces key concepts
  - Takes 20-30 minutes
  - Is engaging and relevant

- [ ] **Summary is concise and clear**
  - Recap key takeaways
  - List what learner now knows
  - Point to next lesson

---

## Submission Checklist

Before submitting a lesson:

- [ ] All checkboxes above are checked
- [ ] No sections have red flags
- [ ] File is saved in correct location
- [ ] All linked files exist
- [ ] Metadata header is complete
- [ ] Changelog is updated (with lesson description)
- [ ] You've read through the lesson one more time
- [ ] You'd feel confident if a learner used this material

---

## Common Issues and Fixes

### "Unknown grammar used"

**Issue:** Your reading or examples use a grammar concept not yet taught.

**Fix:**
1. Check `docs/GRAMMAR_MAP.md`
2. Either move the grammar concept to an earlier lesson, OR
3. Teach it explicitly in this lesson

### "Unknown vocabulary used"

**Issue:** Your examples use words not in the vocabulary list.

**Fix:**
1. Check `shared/vocabulary/master.csv`
2. Either add the word to this lesson's vocabulary, OR
3. Remove it and use a known word instead

### "Too many new concepts"

**Issue:** This lesson introduces more than one major grammar concept.

**Fix:**
1. Split into two lessons, OR
2. Move secondary concepts to the next lesson

### "Too much new vocabulary"

**Issue:** More than 35 new words in one lesson.

**Fix:**
1. Remove less essential words, OR
2. Spread vocabulary across multiple lessons

### "Section is empty"

**Issue:** A section exists but has no meaningful content.

**Fix:**
1. Add brief content explaining why it's not applicable, OR
2. Add example if one exists

### "Examples are unclear"

**Issue:** Examples don't clearly illustrate the concept.

**Fix:**
1. Add an explanation before the example
2. Simplify the example
3. Add multiple examples showing variation

### "Dialogue doesn't sound natural"

**Issue:** The dialogue sounds artificial or robotic.

**Fix:**
1. Remove unnecessary words
2. Add natural connecting phrases
3. Use contractions where appropriate
4. Ask a Dutch speaker to review

### "Links don't work"

**Issue:** References to grammar or vocabulary files don't resolve.

**Fix:**
1. Verify file paths are correct
2. Ensure files exist
3. Use absolute paths from project root
4. Update links if files are renamed

---

## Final Sign-Off

A lesson is ready for submission when:

✅ All 20 sections present and complete
✅ No unknown grammar introduced
✅ No unknown vocabulary introduced
✅ All links work
✅ Markdown is valid
✅ Style guide is followed
✅ Curriculum/Grammar Map/Vocabulary Roadmap updated
✅ Vocabulary CSV updated
✅ No typos or errors
✅ You'd feel confident teaching this material

If any of these are not true, revise before submitting.
