# Vocabulary Standard

Every vocabulary item in the master database must follow this format.

All vocabulary is stored in `shared/vocabulary/master.csv`.

Lessons reference this master; they never duplicate definitions.

---

## Master Vocabulary CSV Format

The master vocabulary database contains one entry per line:

```csv
Dutch,English,Article,Plural,Pronunciation,Part of Speech,CEFR Level,Lesson Introduced,Frequency Rank,Topic,Example Sentence,Example Translation,Notes
```

---

## Field Definitions

### Dutch
The word in Dutch.

**Rules:**
- Use lowercase unless it's a proper noun
- Use the infinitive form for verbs
- Use the singular form for nouns

**Examples:**
- man (man)
- vrouw (woman)
- gaan (to go) -- verb infinitive
- Amsterdam (Amsterdam) -- proper noun, capitalized

---

### English
The English translation or definition.

**Rules:**
- Use simple English
- Use the first/most common meaning
- Use one primary translation (additional meanings go in Notes)
- For verbs, use the infinitive form: "to go," "to eat"

**Examples:**
- man
- woman
- to go
- Amsterdam (proper noun)

---

### Article
The grammatical article (de/het/--).

**Rules:**
- Use "de" for de-words
- Use "het" for het-words
- Use "--" for words without articles (verbs, adjectives, proper nouns)

**Examples:**
- de (for "man")
- het (for "boek" / book)
- -- (for "Amsterdam" or "gaan")

---

### Plural
The plural form of the word.

**Rules:**
- For nouns, provide the plural form
- For other parts of speech, use "--"
- Include any article changes if applicable

**Examples:**
- mannen (plural of man)
- vrouwen (plural of woman)
- kinderen (plural of kind)
- -- (for verbs, adjectives, etc.)

---

### Pronunciation
How the word is pronounced.

**Rules:**
- Use English approximations
- Include stress if not on the first syllable
- Be practical; learners don't need IPA

**Examples:**
- "mahn" for "man"
- "VRO-wuh" for "vrouw"
- "KHINT" for "kind"
- "AHN-stir-dahm" for "Amsterdam"

---

### Part of Speech
What type of word is it?

**Options:**
- Noun
- Verb
- Adjective
- Adverb
- Preposition
- Conjunction
- Pronoun
- Article
- Determiner
- Interjection

**Examples:**
- Noun (man, vrouw, kind)
- Verb (gaan, zijn, hebben)
- Adjective (groot, klein, aardig)

---

### CEFR Level
What CEFR level is this word typically taught at?

**Options:**
- A0 (Pre-beginner)
- A1 (Beginner)
- A2 (Elementary)
- B1 (Intermediate)
- B2+ (Advanced)

**Rules:**
- Use the level where it's commonly taught
- Core vocabulary goes in A0-A1
- Specialized vocabulary goes in B1+

**Examples:**
- A0 (man, vrouw, kind, gaan)
- A1 (Familie, werk, eten)
- B2 (Samenleving, gecompliceerd)

---

### Lesson Introduced
Which lesson this word is first introduced in.

**Format:** `A0-01`, `A1-05`, `B1-10`, etc.

**Rules:**
- Use the exact lesson number where it first appears
- Use only for words explicitly taught in the lesson
- Review lessons use "Review-X" format

**Examples:**
- A0-01 (introduced in A0, Lesson 1)
- A1-05 (introduced in A1, Lesson 5)
- Review-A0-02 (introduced in A0 Review Lesson 2)

---

### Frequency Rank
How common is this word in everyday Dutch?

**Format:** A number 1-3000 (approximate ranking of top words)

**Rules:**
- Use frequency databases if available
- Higher numbers = less common
- 1-1000 = very common
- 1000-2000 = common
- 2000-3000 = less common
- 3000+ = rare (still included but marked as less frequent)

**Examples:**
- 5 (extremely common: "de")
- 47 (very common: "man")
- 125 (common: "vrouw")
- 892 (moderately common: "geduld" / patience)
- 2341 (less common: "samenwerken" / to cooperate)

---

### Topic
What semantic category does this word belong to?

**Common Topics:**
- Family
- Food
- Transportation
- Housing
- Clothing
- Work
- Time
- Numbers
- Colors
- Emotions
- Body Parts
- Animals
- Nature
- Greetings
- Verbs (core)
- Adjectives (core)
- Prepositions (core)

**Rules:**
- Use one primary topic
- Be specific ("Food" not "Nouns")
- Create topics as needed

**Examples:**
- Family (man, vrouw, kind, moeder)
- Food (brood, kaas, melk, appel)
- Transportation (auto, trein, fiets)

---

### Example Sentence
A short sentence using the word in context.

**Rules:**
- Use only words from earlier lessons
- Make the sentence practical and memorable
- Use common grammar structures
- Keep it short (1 sentence, not a paragraph)

**Examples:**
- "Ik ben een man." (I am a man.)
- "Zij eet een appel." (She eats an apple.)
- "Het kind is klein." (The child is small.)

---

### Example Translation
English translation of the example sentence.

**Rules:**
- Provide a direct, natural translation
- Include the word being defined (helps learners see the connection)

**Examples:**
- "I am a man."
- "She eats an apple."
- "The child is small."

---

### Notes
Any additional information about the word.

**What goes here:**
- Alternative meanings or translations
- Irregular plurals or conjugations
- Regional variations
- Related words
- Common confusions with similar words
- Cultural notes

**Examples:**
- "Plural is irregular: kinderen (not kinds)"
- "Also means 'any' or 'some' in certain contexts"
- "Informal spelling: 'je' is sometimes used instead of 'jij'"
- "Related to: arbeiten (German), travailler (French)"
- "Not to be confused with 'been' (bone)"

---

## Example CSV Entries

```csv
Dutch,English,Article,Plural,Pronunciation,Part of Speech,CEFR Level,Lesson Introduced,Frequency Rank,Topic,Example Sentence,Example Translation,Notes
man,man,de,mannen,mahn,Noun,A0,A0-01,47,Family,Ik ben een man.,I am a man.,
vrouw,woman,de,vrouwen,VRO-wuh,Noun,A0,A0-01,55,Family,Dit is een vrouw.,This is a woman.,
kind,child,het,kinderen,KHINT,Noun,A0,A0-01,89,Family,Het kind is klein.,The child is small.,Plural is irregular.
gaan,to go,--,--,HAHN,Verb,A0,A0-02,3,Verbs (Core),Ik ga naar huis.,I go home.,Highly irregular; essential verb.
zijn,to be,--,--,ZAYN,Verb,A0,A0-02,2,Verbs (Core),Ik ben Nederlands.,I am Dutch.,Most important verb; highly irregular.
groot,big,--,--,HROWT,Adjective,A0,A0-03,142,Adjectives (Core),Het huis is groot.,The house is big.,
klein,small,--,--,KLYNE,Adjective,A0,A0-03,167,Adjectives (Core),De auto is klein.,The car is small.,Opposite of 'groot'
eten,to eat,--,--,AY-tuh,Verb,A1,A1-01,76,Food,Ik eet een appel.,I eat an apple.,Regular verb; present tense: eet/eten/eten
appel,apple,de,appels,AHH-pul,Noun,A1,A1-02,234,Food,Ik eet een appel.,I eat an apple.,Common fruit; feminine noun
```

---

## Generation and Export

The master CSV is the source of truth.

Lessons reference or export this data:

### CSV Exports for Each Lesson

Generate filtered CSVs for each lesson:

- `A0-01.csv` -- All vocabulary introduced in A0-01
- `A0-02.csv` -- All vocabulary introduced in A0-02
- Combined by level: `A0.csv`, `A1.csv`, etc.

**Command (pseudocode):**
```
Filter master.csv where "Lesson Introduced" == "A0-01"
Export to shared/csv/lessons/A0-01.csv
```

### Vocabulary by Topic

Generate CSVs grouped by topic:

- `Family.csv` -- All family vocabulary
- `Food.csv` -- All food vocabulary
- `Transportation.csv` -- All transportation vocabulary

**Command (pseudocode):**
```
Filter master.csv where "Topic" == "Family"
Export to shared/csv/topics/Family.csv
Sort by CEFR Level, then by Frequency Rank
```

### Anki Deck Generation

Export vocabulary for Anki (spaced repetition app):

**Anki format:**
```
Front (Dutch word) | Back (English + article + example)
```

Generate by:
- Level (A0.apkg, A1.apkg, etc.)
- Topic (Family.apkg, Food.apkg, etc.)
- Review lesson sets

---

## Quality Rules

Every vocabulary entry must:

- [ ] Have a Dutch word (no blanks)
- [ ] Have an English translation (no blanks)
- [ ] Have the correct article (de/het/--)
- [ ] Have the correct plural (or -- if not applicable)
- [ ] Have pronunciation guidance
- [ ] Have a part of speech
- [ ] Have a CEFR level
- [ ] Have a lesson introduction number
- [ ] Have a frequency rank (or reasonable estimate)
- [ ] Have a topic
- [ ] Have an example sentence using ONLY known vocabulary and grammar
- [ ] Have an example translation
- [ ] Have useful notes (or blank if not needed)
- [ ] Not be a duplicate of an existing entry
- [ ] Not contain unknown grammar in the example

---

## Common Entry Patterns

### Simple Noun

```csv
boek,book,het,boeken,BOOK,Noun,A0,A0-02,128,Objects,Het boek is groot.,The book is big.,Common neuter noun.
```

### Regular Verb

```csv
lopen,to walk,--,--,LOH-puh,Verb,A1,A1-03,156,Verbs (Core),Ik loop naar school.,I walk to school.,Regular verb.
```

### Adjective

```csv
mooi,beautiful,--,--,MOY,Adjective,A1,A1-04,89,Adjectives (Core),Het is mooi.,It is beautiful.,
```

### Preposition

```csv
in,in,--,--,IN,Preposition,A0,A0-04,1,Prepositions (Core),Het boek is in het huis.,The book is in the house.,Core preposition; very frequent.
```

---

## When to Add a New Entry

Add a new vocabulary entry when:

- A lesson introduces it
- It's not already in the master
- It's been verified by a native speaker or reference
- It's useful for the level and topic
- It has a clear pronunciation guide
- It has a meaningful example

Do not add:
- Duplicate entries
- Words used in examples that aren't actually taught
- Extremely rare words (unless specifically needed)
- Words with no practical use for the level
