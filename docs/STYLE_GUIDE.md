# Style Guide

This document defines formatting and style standards for all content in the Dutch B1 Curriculum.

Every piece of content must follow this guide.

---

## Markdown Formatting

### Headings

- **Lesson titles:** Use `# ` (H1)
- **Major sections:** Use `## ` (H2)
- **Subsections:** Use `### ` (H3)
- **Sub-subsections:** Use `#### ` (H4)

Do NOT use H5 or H6.

**Example:**

```markdown
# Lesson A0-01: Personal Pronouns

## Grammar

### Pronoun Forms

#### First Person
```

---

### Emphasis

- **Bold:** Use `**text**` for important terms
- **Italics:** Use `*text*` for emphasis or non-English words
- **Code:** Use `` `text` `` for Dutch words or technical references

**Examples:**

```markdown
**Important:** This is critical.
*Emphasis* makes sense.
The word `ben` means "am."
```

---

### Lists

#### Unordered Lists

Use `-` for bullet points. Indent with 2 spaces for sublists.

```markdown
- Main point
  - Subpoint 1
  - Subpoint 2
- Another main point
```

#### Ordered Lists

Use `1. 2. 3.` for numbered lists.

```markdown
1. First step
2. Second step
   - Substep A
   - Substep B
3. Third step
```

#### Definition Lists

Use a format like this for term-definition pairs:

```markdown
**Term 1**
Definition of term 1.

**Term 2**
Definition of term 2.
```

---

### Tables

Use pipe tables with consistent formatting.

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1-1 | Cell 1-2 | Cell 1-3 |
| Cell 2-1 | Cell 2-2 | Cell 2-3 |
```

**Rules:**
- Always include a header row
- Use `|` before and after each row
- Separate cells with `|`
- Use `---` for the separator row (minimum 3 dashes)
- Left-align most content
- Center-align numeric columns

---

### Code Blocks

Use triple backticks with language specification.

```markdown
\`\`\`markdown
# This is a code block
\`\`\`

\`\`\`csv
Dutch,English,Article
man,man,de
\`\`\`
```

---

### Blockquotes

Use `>` for blockquotes (rarely used).

```markdown
> This is a blockquote.
> It can span multiple lines.
```

---

### Links

#### Internal Links

Link to files in the same repository:

```markdown
[Text](path/to/file.md)
[Text](#section-heading)
```

**Examples:**

```markdown
[See the Grammar Standard](../docs/GRAMMAR_STANDARD.md)
[See section above](#why-this-matters)
[Personal Pronouns](../shared/grammar/personal-pronouns.md)
```

#### External Links

Use full URLs:

```markdown
[OpenSource Initiative](https://opensource.org)
```

---

## Dutch Text Formatting

### Capitalization

- **Nouns:** Capitalize (de Man, de Vrouw) in examples
- **Verbs:** Lowercase unless starting a sentence (gaan, eten)
- **Adjectives:** Lowercase (groot, klein)
- **First word of sentence:** Capitalize
- **Proper nouns:** Capitalize (Amsterdam, Jan, Maria)

**Example:**

```markdown
Jan gaat naar Amsterdam. De man is groot. Zij eet een appel.
```

### Pronunciation

- Use English approximations
- Mark stress with capital letters: `AHM-ster-dahm`
- Use hyphens to separate syllables: `KHINT`
- Be practical, not technical

**Example:** `vrouw` → `VRO-wuh`

### Translations

- Place translations directly after Dutch text in parentheses, OR
- Place on the next line after a line break, OR
- In a separate "Translation" section

**Example 1 (inline):**
```markdown
Ik ben voorzichtig. (I am careful.)
```

**Example 2 (separate):**
```markdown
Ik ben voorzichtig.

Translation: I am careful.
```

**Example 3 (section):**
```markdown
Ik ben voorzichtig. Zij is snel.

**English Translation:**
I am careful. She is quick.
```

---

## Examples and Dialogues

### Dialogue Format

```markdown
**Person A:** First line of dialogue.
**Person B:** Response.
**Person A:** Next line.

---

**English Translation:**

**Person A:** English translation of first line.
**Person B:** English translation of response.
**Person A:** English translation of next line.
```

### Example Sentences

Format: `Dutch text (English translation)`

**Example:**

```markdown
1. Ik ben Jan. (I am Jan.)
2. Zij gaat naar school. (She goes to school.)
```

---

## Numbers and Quantities

- Use numerals for numbers (1, 2, 100) in examples
- Use words for counts in narrative ("five lessons," not "5 lessons")
- Use percentage symbol: 90%
- Use bullet points for lists of numbers

---

## Terminology

### Consistent Terms

Use these terms consistently throughout:

| Term | Not | Usage |
|------|-----|-------|
| Lesson | Unit, Chapter | Formal instruction segment |
| Review Lesson | Consolidation, Review Unit | Non-new-material review |
| Grammar | Syntax, Structure | Grammar explanations |
| Vocabulary | Words, Lexicon | Word lists |
| CEFR Level | Proficiency Level, Stage | European framework levels |
| Pronoun | Personal Pronoun, Subject Pronoun | Pronouns (specific type noted) |
| Conjugation | Declension, Agreement | Verb/adjective forms |
| Plural | Plurals | Multiple form |
| Article | Determiner | de/het |
| Preposition | Prep | Words like in, on, at, to |

### Avoid

- "Simply" -- Condescending
- "Just" -- Minimizing
- "Obviously" -- Presumptuous
- Jargon without explanation
- Technical terminology without context

---

## Metadata Headers

Every lesson and grammar file should start with metadata:

```markdown
# Lesson A0-01: Personal Pronouns

**Level:** A0 (Foundations)
**CEFR Level:** A0
**Duration:** 60 minutes
**New Vocabulary:** 0 words
**Grammar Focus:** Personal pronouns
```

---

## Common Abbreviations

Use these consistently:

- **CEFR** = Common European Framework of Reference
- **CSV** = Comma-Separated Values
- **N/A** = Not Applicable
- **e.g.** = for example
- **i.e.** = that is
- **etc.** = and so on

Note: In parenthetical uses, include periods: (e.g., this example). In mid-sentence, use without periods if it flows: "For example, this works."

---

## Formatting Checklist

Before submitting any content:

- [ ] All headings are H1-H4 (no H5 or H6)
- [ ] Lists are properly formatted with `-` or `1.`
- [ ] Tables have headers and consistent alignment
- [ ] Code blocks have language specified
- [ ] Links are formatted correctly
- [ ] Dutch text is properly capitalized
- [ ] Translations are provided where needed
- [ ] Dialogues follow the format
- [ ] Terminology is consistent
- [ ] No typos or grammatical errors
- [ ] Line breaks are consistent (blank line between sections)
- [ ] Metadata header is present (for lessons/grammar)
- [ ] No em-dashes (use two hyphens: --)
- [ ] No smart quotes (use straight quotes: ")
- [ ] No tabs (use spaces for indentation)

---

## Files and Directories

### Naming Conventions

- **Lesson files:** `A0-01.md`, `A1-05.md`, `B1-10.md`
- **Review lessons:** `A0-R1.md`, `A1-R2.md`
- **Grammar files:** `personal-pronouns.md`, `present-tense.md` (lowercase, hyphens)
- **Directories:** `A0/`, `A1/`, `A2/`, `B1/` (UPPERCASE level, number in filenames)
- **Competency folders:** `Competency-1-Introducing-Yourself/` (numbered, Title-Case, hyphenated)
- **Unit folders:** `Unit-1-Personal-Pronouns/` (numbered, Title-Case, hyphenated, nested inside a
  competency folder)

### File Organization

```
Dutch-B1-Curriculum/
├── README.md
├── PROJECT.md
├── ROADMAP.md
├── LICENSE.md
├── CHANGELOG.md
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── CURRICULUM_PRINCIPLES.md
│   ├── TEACHING_PHILOSOPHY.md
│   ├── CEFR_GUIDE.md
│   ├── COMPETENCY_MAP.md
│   ├── CURRICULUM.md
│   ├── GRAMMAR_MAP.md
│   ├── VOCABULARY_ROADMAP.md
│   ├── LESSON_STANDARD.md
│   ├── GRAMMAR_STANDARD.md
│   ├── VOCABULARY_STANDARD.md
│   ├── REVIEW_STRATEGY.md
│   ├── STYLE_GUIDE.md (this file)
│   ├── QUALITY_CHECKLIST.md
│   └── AI_GUIDELINES.md
│
├── shared/
│   ├── grammar/
│   │   ├── personal-pronouns.md
│   │   ├── present-tense-to-be.md
│   │   └── [more grammar files]
│   └── vocabulary/
│       ├── nouns.csv
│       ├── verbs.csv
│       ├── adjectives.csv
│       └── other.csv
│
└── A0/
    ├── README.md
    ├── Competency-1-Introducing-Yourself/
    │   ├── Unit-1-Personal-Pronouns/
    │   │   ├── A0-01.md
    │   │   ├── A0-02.md
    │   │   └── A0-03.md
    │   └── Unit-2-Present-Tense/
    └── Reviews/
        └── A0-R1.md
```

---

## Line Length and Formatting

- Aim for lines under 100 characters (for readability)
- Use blank lines to separate sections
- Use consistent indentation (2 spaces for nested lists)
- No trailing whitespace
- One blank line between major sections
- Two blank lines between top-level sections

---

## Emoji Policy

**Do not use emojis** in educational content.

This keeps the curriculum professional and ensures compatibility across all devices and rendering systems.

---

## Headers in Content

All main content files should include:

1. **File title** (H1)
2. **Metadata** (if applicable)
3. **Table of contents** (for very long documents)
4. **Introduction** or first section (H2)

Example:

```markdown
# Personal Pronouns Grammar Reference

**CEFR Level:** A0
**First Introduced:** Lesson A0-01
**Related Topics:** Articles, Verb conjugation

## What Is It?

[Content...]
```

---

## Final Review Checklist

Every content creator should ask:

- [ ] Does this follow the standard for its type (lesson/grammar)?
- [ ] Are all links working?
- [ ] Is all Dutch text grammatically correct?
- [ ] Are all translations accurate?
- [ ] Is the tone professional and clear?
- [ ] Are there typos or formatting errors?
- [ ] Is the style consistent with other files?
- [ ] Does it follow this style guide?
- [ ] Would a learner find this easy to follow?
- [ ] Would an AI find this easy to reference?

If you answer "no" to any of these, revise before submitting.
