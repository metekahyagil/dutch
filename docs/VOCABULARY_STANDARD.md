# Vocabulary Standard

Every vocabulary item in the master database must follow this format.

All vocabulary is stored in `shared/vocabulary/`, split into four CSV files by part of speech:

- `shared/vocabulary/nouns.csv` -- all nouns (article, plural, diminutive)
- `shared/vocabulary/verbs.csv` -- all verbs (present tense, simple past, perfect tense)
- `shared/vocabulary/adjectives.csv` -- all adjectives (comparative, superlative, inflected form)
- `shared/vocabulary/other.csv` -- everything else: adverbs, prepositions, conjunctions,
  pronouns, articles, determiners, interjections, numerals

Lessons reference these files; they never duplicate definitions.

**Why split by part of speech?** Nouns, verbs, and adjectives each inflect differently in Dutch
(article + plural vs. full conjugation vs. comparison forms). A single flat table forces every
row to carry columns that are meaningless for most other rows (e.g. "Plural" is blank for every
verb). Separate files let each part of speech carry exactly the grammatical detail it needs.

---

## Shared Fields (present in every file)

These columns appear, in this position, in all four files:

- `Dutch` -- the word (lemma) in Dutch
- `English` -- the English translation
- `Pronunciation` -- English approximation (not IPA)
- `CEFR Level` -- A0 / A1 / A2 / B1 / B2+
- `Lesson Introduced` -- e.g. `A0-01`, `Review-A0-02`
- `Frequency Rank` -- 1-3000+, lower = more common
- `Topic` -- semantic category
- `Example Sentence` -- Dutch, using only already-known vocabulary/grammar
- `Example Translation` -- English translation of the example
- `Notes` -- irregularities, cultural notes, confusions, related words

Rules for these shared fields are unchanged from before (see "Shared Field Rules" below).
Each file also has its own part-of-speech-specific columns, inserted after `English` and
before `Pronunciation`. These are documented per-file below.

---

## Shared Field Rules

### Dutch
**Rules:**
- Use lowercase unless it's a proper noun
- Use the infinitive form for verbs (stored as the `Dutch` value in `verbs.csv`)
- Use the singular form for nouns

### English
**Rules:**
- Use simple English
- Use the first/most common meaning
- Use one primary translation (additional meanings go in Notes)
- For verbs, use the infinitive form: "to go," "to eat"

### Pronunciation
**Rules:**
- Use English approximations
- Include stress if not on the first syllable
- Be practical; learners don't need IPA

**Examples:** "mahn" for "man", "VRO-wuh" for "vrouw", "KHINT" for "kind"

### CEFR Level
**Options:** A0 (Pre-beginner), A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2+ (Advanced)

**Rules:**
- Use the level where it's commonly taught
- Core vocabulary goes in A0-A1
- Specialized vocabulary goes in B1+

### Lesson Introduced
**Format:** `A0-01`, `A1-05`, `B1-10`, etc.

**Rules:**
- Use the exact lesson number where it first appears
- Use only for words explicitly taught in the lesson
- Review lessons use "Review-X" format

### Frequency Rank
**Format:** A number 1-3000 (approximate ranking of top words)

**Rules:**
- Higher numbers = less common
- 1-1000 = very common, 1000-2000 = common, 2000-3000 = less common, 3000+ = rare

### Topic
**Common Topics:** Family, Food, Transportation, Housing, Clothing, Work, Time, Numbers, Colors,
Emotions, Body Parts, Animals, Nature, Greetings, Verbs (core), Adjectives (core),
Prepositions (core)

**Rules:**
- Use one primary topic; be specific ("Food" not "Nouns"); create topics as needed

### Example Sentence / Example Translation
**Rules:**
- Use only words from earlier lessons (or the current one)
- Keep it short (1 sentence)
- Provide a direct, natural translation that includes the word being defined

### Notes
**What goes here:** alternative meanings, irregular forms not covered by a dedicated column,
regional variations, related words, common confusions, cultural notes

---

## `nouns.csv` Format

```csv
Dutch,English,Article,Plural,Diminutive,Pronunciation,CEFR Level,Lesson Introduced,Frequency Rank,Topic,Example Sentence,Example Translation,Notes
```

### Article
The grammatical article (de/het).

**Rules:**
- Use "de" for de-words, "het" for het-words
- Every noun row must have an article; nouns without one don't belong in this file

### Plural
The plural form of the word.

**Rules:**
- Provide the plural form
- Use "--" only for genuinely uncountable nouns (e.g. "water")
- Note irregular plurals here directly; if a fuller explanation is needed, add it to Notes

**Examples:** mannen (man), vrouwen (vrouw), kinderen (kind, irregular)

### Diminutive
The Dutch diminutive form (always a `het`-word regardless of the base noun's article).

**Rules:**
- Provide the diminutive (`-je`, `-tje`, `-pje`, `-etje`, `-kje` per spelling rules) where it is
  natural and commonly used
- Use "--" if the word doesn't take a natural diminutive (letter names, mass nouns rarely
  diminutivized, etc.)

**Examples:** huisje (huis), boompje (boom), tafeltje (tafel), mannetje (man)

### Example Entry

```csv
man,man,de,mannen,mannetje,mahn,A0,A0-01,47,Family,Ik ben een man.,I am a man.,
kind,child,het,kinderen,--,KHINT,A0,A0-01,89,Family,Het kind is klein.,The child is small.,Plural is irregular.
boek,book,het,boeken,boekje,BOOK,A0,A0-02,128,Objects,Het boek is groot.,The book is big.,Common neuter noun.
```

---

## `verbs.csv` Format

```csv
Dutch,English,Verb Type,Present (ik),Present (jij/u/hij/zij/het),Present (wij/jullie/zij),Simple Past (singular),Simple Past (plural),Auxiliary,Past Participle,Pronunciation,CEFR Level,Lesson Introduced,Frequency Rank,Topic,Example Sentence,Example Translation,Notes
```

### Dutch
The infinitive form (e.g. "gaan", "eten", "zijn").

### Verb Type
One or more of: `regular`, `irregular`, `separable`, `reflexive`. Combine with a comma if more
than one applies (e.g. "irregular, separable").

**Examples:** regular (werken), irregular (zijn, hebben, gaan), separable (opstaan),
reflexive (zich wassen)

### Present (ik)
The `ik`-form of the present tense (the bare stem for almost all verbs).

**Examples:** werk (werken), ga (gaan), ben (zijn)

### Present (jij/u/hij/zij/het)
The shared singular present-tense form used for `jij`, `u`, `hij`, `zij`, and `het` (normally
stem + t).

**Examples:** werkt (werken), gaat (gaan), is (zijn, irregular)

### Present (wij/jullie/zij)
The plural present-tense form, identical to the infinitive for all Dutch verbs.

**Examples:** werken, gaan, zijn

### Simple Past (singular)
The imperfectum form used for all singular subjects (`ik/jij/u/hij/zij/het`).

**Examples:** werkte (werken), ging (gaan), was (zijn)

### Simple Past (plural)
The imperfectum form used for all plural subjects (`wij/jullie/zij`).

**Examples:** werkten (werken), gingen (gaan), waren (zijn)

### Auxiliary
The auxiliary verb used to form the perfect tense: `hebben` or `zijn`.

**Rules:**
- Use "zijn" for verbs of motion/change of state that take zijn (gaan, worden, blijven, etc.)
- Use "hebben" for the majority of other verbs

### Past Participle
The voltooid deelwoord, used with the Auxiliary to form the perfect tense.

**Examples:** gewerkt (werken, hebben), gegaan (gaan, zijn), geweest (zijn, zijn)

### Example Entries

```csv
werken,to work,regular,werk,werkt,werken,werkte,werkten,hebben,gewerkt,VER-kuh,A1,A1-03,156,Work,Ik werk in een winkel.,I work in a shop.,Regular weak verb.
gaan,to go,irregular,ga,gaat,gaan,ging,gingen,zijn,gegaan,HAHN,A0,A0-02,3,Verbs (Core),Ik ga naar huis.,I go home.,Highly irregular; essential verb.
zijn,to be,irregular,ben,is,zijn,was,waren,zijn,geweest,ZAYN,A0,A0-02,2,Verbs (Core),Ik ben Nederlands.,I am Dutch.,Most important verb; highly irregular. Note: "jij/u" present is "bent", not "is" -- add to Notes when a pronoun-specific exception exists.
opstaan,to get up,irregular, separable,sta op,staat op,staan op,stond op,stonden op,zijn,opgestaan,OP-stahn,A1,A1-05,540,Daily Routine,Ik sta om zeven uur op.,I get up at seven o'clock.,Separable; prefix splits off in main clauses.
```

**Note on exceptions:** if one of the pronouns within a merged column (e.g. `jij/u/hij/zij/het`)
takes a different form than the others (like "zijn" -> u/jij is "bent" but hij/zij/het is "is"),
record the majority form in the column and document the exception in Notes.

---

## `adjectives.csv` Format

```csv
Dutch,English,Comparative,Superlative,Inflected Form,Pronunciation,CEFR Level,Lesson Introduced,Frequency Rank,Topic,Example Sentence,Example Translation,Notes
```

### Dutch
The base (uninflected, predicative) form, e.g. "groot", "mooi", "goed".

### Comparative
The comparative form, normally base + `-er` (with Dutch open/closed syllable spelling rules
applied).

**Examples:** groter (groot), mooier (mooi), beter (goed, irregular)

### Superlative
The superlative form, normally base + `-st` (or `-st` after comparative for some).

**Examples:** grootst (groot), mooist (mooi), best (goed, irregular)

### Inflected Form
The attributive form used before a noun (usually base + `-e`), which is what learners will
encounter constantly in noun phrases (`het grote huis`, `een mooie dag`).

**Examples:** grote (groot), mooie (mooi), goede (goed)

### Example Entries

```csv
groot,big,groter,grootst,grote,HROWT,A0,A0-03,142,Adjectives (Core),Het huis is groot.,The house is big.,
klein,small,kleiner,kleinst,kleine,KLYNE,A0,A0-03,167,Adjectives (Core),De auto is klein.,The car is small.,Opposite of 'groot'.
goed,good,beter,best,goede,KHOOT,A0,A0-01,21,Adjectives (Core),Dit is goed.,This is good.,Irregular comparison, like English good/better/best.
mooi,beautiful,mooier,mooist,mooie,MOY,A1,A1-04,89,Adjectives (Core),Het is mooi.,It is beautiful.,
```

---

## `other.csv` Format

Covers adverbs, prepositions, conjunctions, pronouns, articles, determiners, interjections, and
numerals -- any word that isn't a noun, verb, or adjective.

```csv
Dutch,English,Part of Speech,Pronunciation,CEFR Level,Lesson Introduced,Frequency Rank,Topic,Example Sentence,Example Translation,Notes
```

### Part of Speech
**Options:** Adverb, Preposition, Conjunction, Pronoun, Article, Determiner, Interjection,
Numeral, Phrase (fixed multi-word expressions like "tot ziens" or "dank je wel" that don't
reduce to a single part of speech)

### Example Entries

```csv
in,in,Preposition,IN,A0,A0-04,1,Prepositions (Core),Het boek is in het huis.,The book is in the house.,Core preposition; very frequent.
hallo,hello,Interjection,HAH-loh,A0,A0-01,22,Greetings,"Hallo, hoe gaat het?","Hello, how are you?",Most common informal greeting.
en,and,Conjunction,EN,A0,A0-02,4,Conjunctions (Core),Ik ben moe en ik ga slapen.,I am tired and I go to sleep.,
ik,I,Pronoun,ICK,A0,A0-02,1,Pronouns (Core),Ik ben een man.,I am a man.,Personal pronoun, subject form.
```

---

## Quality Rules

Every vocabulary entry, in whichever file it belongs to, must:

- [ ] Be filed in the correct part-of-speech CSV (noun/verb/adjective/other)
- [ ] Have a Dutch word (no blanks)
- [ ] Have an English translation (no blanks)
- [ ] Have all part-of-speech-specific columns filled in (article+plural+diminutive for nouns;
      full conjugation set for verbs; comparative+superlative+inflected form for adjectives; part
      of speech for other.csv) or "--" where genuinely not applicable
- [ ] Have pronunciation guidance
- [ ] Have a CEFR level
- [ ] Have a lesson introduction number
- [ ] Have a frequency rank (or reasonable estimate)
- [ ] Have a topic
- [ ] Have an example sentence using ONLY known vocabulary and grammar
- [ ] Have an example translation
- [ ] Have useful notes (or blank if not needed)
- [ ] Not be a duplicate of an existing entry (check across all four files, e.g. don't add
      "werken" the verb to `other.csv` if it's already correctly in `verbs.csv`)
- [ ] Not contain unknown grammar in the example

---

## Generation and Export

The four vocabulary files together are the source of truth.

Lessons reference or export this data:

### CSV Exports for Each Lesson

Generate filtered CSVs for each lesson by combining matching rows from all four source files:

- `A0-01.csv` -- all vocabulary (nouns + verbs + adjectives + other) introduced in A0-01
- `A0-02.csv` -- all vocabulary introduced in A0-02
- Combined by level: `A0.csv`, `A1.csv`, etc.

**Command (pseudocode):**
```
Filter nouns.csv, verbs.csv, adjectives.csv, other.csv where "Lesson Introduced" == "A0-01"
Concatenate matching rows (align on the shared columns; part-of-speech-specific columns can
  be left blank or included as extra columns per source)
Export to shared/csv/lessons/A0-01.csv
```

### Vocabulary by Topic

Generate CSVs grouped by topic, drawing from all four files:

- `Family.csv` -- all family vocabulary (nouns like "moeder", verbs like "houden van", etc.)
- `Food.csv` -- all food vocabulary
- `Transportation.csv` -- all transportation vocabulary

**Command (pseudocode):**
```
Filter nouns.csv, verbs.csv, adjectives.csv, other.csv where "Topic" == "Family"
Concatenate matching rows
Export to shared/csv/topics/Family.csv
Sort by CEFR Level, then by Frequency Rank
```

### Anki Deck Generation

Export vocabulary for Anki (spaced repetition app):

**Anki format:**
```
Front (Dutch word) | Back (English + article/conjugation summary + example)
```

For nouns: back includes article and plural.
For verbs: back includes the ik/jij-hij present forms and past participle + auxiliary.
For adjectives: back includes comparative/superlative.

Generate by:
- Level (A0.apkg, A1.apkg, etc.)
- Topic (Family.apkg, Food.apkg, etc.)
- Part of speech (Verbs.apkg, Nouns.apkg, etc.) -- new option enabled by the split files
- Review lesson sets

---

## Common Entry Patterns

### Simple Noun

```csv
boek,book,het,boeken,boekje,BOOK,A0,A0-02,128,Objects,Het boek is groot.,The book is big.,Common neuter noun.
```

### Regular Verb

```csv
lopen,to walk,regular,loop,loopt,lopen,liep,liepen,hebben,gelopen,LOH-puh,A1,A1-03,156,Verbs (Core),Ik loop naar school.,I walk to school.,Irregular vowel change in past tense despite being a "regular" weak-conjugation verb in the present.
```

### Adjective

```csv
mooi,beautiful,mooier,mooist,mooie,MOY,A1,A1-04,89,Adjectives (Core),Het is mooi.,It is beautiful.,
```

### Preposition (in `other.csv`)

```csv
in,in,Preposition,IN,A0,A0-04,1,Prepositions (Core),Het boek is in het huis.,The book is in the house.,Core preposition; very frequent.
```

---

## When to Add a New Entry

Add a new vocabulary entry when:

- A lesson introduces it
- It's not already in any of the four files
- It's been verified by a native speaker or reference
- It's useful for the level and topic
- It has a clear pronunciation guide
- It has a meaningful example

Do not add:
- Duplicate entries (check the correct file for the word's part of speech first)
- Words used in examples that aren't actually taught
- Extremely rare words (unless specifically needed)
- Words with no practical use for the level
