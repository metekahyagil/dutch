# Competency Map

This document defines every competency a learner must gain at each CEFR level: the real-world
things they must become able to do, and the grammar, vocabulary, pronunciation, communication skill,
and cultural knowledge each competency requires.

This is the authoritative source for *what a level is made of*. `docs/CURRICULUM.md` (units and
lessons) is generated from this document, not the other way around.

**Status:** To be completed in Phase 2 (see `shared/prompts/competency-map-research.md` for the
research/authoring workflow).

---

## Why Competencies Instead of a Lesson Count

Earlier drafts of this project considered fixing the size of each level in advance (a target number
of units, lessons, reviews, and assessments per level). That approach was deliberately rejected.

The question is never "how many lessons does A1 have?" It is "what knowledge, skills, and vocabulary
must someone master before leaving A1?" The number of lessons is a byproduct of that scope.

This changes the content hierarchy from `Level -> Module -> Lesson` to:

```
CEFR Level
    ↓
Competency
    ↓
Unit
    ↓
Lesson
    ↓
Exercises
```

- A **Competency** is a real-world ability (for example, "Introducing Yourself" or "Shopping").
- A **Unit** groups the lessons that build one competency (for example, the "Personal Pronouns" unit
  inside the "Basic Sentences" competency).
- A **Lesson** is the smallest instructional block and always follows `docs/LESSON_STANDARD.md`.

If a competency needs 3 lessons and another needs 8, both are correct. Consistency of *scope
definition*, not lesson count, is what is enforced.

---

## Competency Format

Every competency in this document must use this exact structure:

```markdown
### Competency: {{Name}}

**CEFR Level:** A0 / A1 / A2 / B1
**Units:** [list of unit names that belong to this competency]

**The learner can:**
- [can-do statement]
- [can-do statement]

**Requires Grammar:**
- [grammar concept] (must already exist or be introduced in `docs/GRAMMAR_MAP.md`)

**Requires Vocabulary:**
- [topic] (must already exist or be introduced in `docs/VOCABULARY_ROADMAP.md`)

**Requires Pronunciation:**
- [pronunciation point, if any]

**Requires Cultural Knowledge:**
- [cultural note, if any]

**Assessment:**
- [the realistic task that proves mastery, e.g. "Maintain a 2-minute introduction conversation."]
```

---

## Worked Examples

These two examples (from initial project planning) illustrate the format. They are not yet verified
against `docs/GRAMMAR_MAP.md` / `docs/VOCABULARY_ROADMAP.md` and must be re-validated once those
documents are populated.

### Competency: Introducing Yourself

**CEFR Level:** A0
**Units:** Personal Pronouns, Present Tense ("to be"), Possessives, Basic Questions

**The learner can:**
- Say their name.
- Ask someone's name.
- Say where they are from.
- State their nationality.
- Say which languages they speak.
- Say where they live.
- Introduce family members.

**Requires Grammar:**
- Personal pronouns
- Present tense of "zijn" (to be) and "hebben" (to have)
- Simple questions
- Possessive pronouns

**Requires Vocabulary:**
- Countries, nationalities, family, greetings, languages, numbers

**Requires Pronunciation:**
- Long/short vowel distinction in names and country names

**Requires Cultural Knowledge:**
- Dutch norms around formal ("u") vs informal ("jij") address on first meeting

**Assessment:**
- The learner can maintain a 2-minute introduction conversation with another beginner.

### Competency: Shopping

**CEFR Level:** A1
**Units:** Numbers and Prices, Demonstratives, Modal Verbs, Adjectives

**The learner can:**
- Ask prices.
- Understand prices.
- Ask for sizes.
- Ask for colours.
- Pay.
- Understand discounts.
- Ask questions.

**Requires Grammar:**
- Numbers
- Questions
- Modal verbs
- Demonstratives
- Adjectives (agreement)

**Requires Vocabulary:**
- Clothes, money, shopping, colours

**Requires Pronunciation:**
- Numbers and currency amounts spoken aloud

**Requires Cultural Knowledge:**
- Dutch payment norms (pin/card culture, tipping expectations)

**Assessment:**
- The learner can successfully complete a shopping role play.

---

## A0 Competencies (Foundations)

### Competency: Understanding Dutch Sounds and Spelling

**CEFR Level:** A0
**Units:** Alphabet and Pronunciation, Vowel Sounds, Consonant Clusters, Stress and Intonation

**The learner can:**
- Read the Dutch alphabet aloud.
- Distinguish between long and short vowel sounds.
- Recognize and pronounce diphthongs (ui, ou, au, ei, ij, etc.).
- Identify word stress patterns.
- Read simple Dutch words with reasonable pronunciation.
- Understand basic spelling rules.

**Requires Grammar:**
- Alphabet
- Pronunciation (long/short vowels, diphthongs, stress)

**Requires Vocabulary:**
- Alphabet letters (as words)
- Common phonetic examples

**Requires Pronunciation:**
- Long/short vowel distinction
- Diphthong pronunciation
- Word stress patterns
- Dutch consonant sounds unique to English speakers (g, h, r, w)

**Requires Cultural Knowledge:**
- Understanding why Dutch spelling and pronunciation differ from English

**Assessment:**
- Read a short Dutch text aloud with intelligible pronunciation.
- Transcribe spoken Dutch words correctly.

---

### Competency: Introducing Yourself

**CEFR Level:** A0
**Units:** Personal Pronouns, Present Tense of "Zijn" and "Hebben", Simple Questions, Possessive Pronouns

**The learner can:**
- Say their name.
- Ask someone's name.
- State their age.
- Say where they are from.
- State their nationality.
- Say which languages they speak.
- Say where they live.
- Give basic personal information.

**Requires Grammar:**
- Personal pronouns (ik, jij, hij, zij, het, u, we, jullie, zij)
- Present tense of "zijn" (to be)
- Present tense of "hebben" (to have)
- Simple yes/no questions
- Negation with "niet"
- Possessive pronouns (mijn, jouw, zijn, haar, ons, jullie, hun)

**Requires Vocabulary:**
- Countries, nationalities, family relationships, numbers 0-20, greetings, languages, basic jobs

**Requires Pronunciation:**
- Clear pronunciation of personal names
- Correct stress on country and language names

**Requires Cultural Knowledge:**
- Dutch norms around formal ("u") vs informal ("jij") address on first meeting
- Typical Dutch self-introduction structure

**Assessment:**
- Maintain a 2-minute introduction conversation with another beginner, including name, age, origin, and language spoken.

---

### Competency: Describing People and Family

**CEFR Level:** A0
**Units:** Family Vocabulary, Basic Adjectives, Demonstratives, Simple Possession

**The learner can:**
- Identify family members and their relationships.
- Describe people using basic adjectives (tall, short, old, young, friendly).
- Point out people and objects using "this" and "that".
- State who belongs to whom using simple possessive structures.
- Count and name family members.

**Requires Grammar:**
- Family-related vocabulary
- Simple adjectives (groot, klein, oud, jong, aardig, vriendelijk)
- Demonstratives (deze, dit, die, dat)
- Possessive pronouns
- Present tense of "hebben"
- Singular nouns with articles (de, het)

**Requires Vocabulary:**
- Family members (vader, moeder, broer, zus, opa, oma, tante, oom)
- Basic descriptive adjectives
- Numbers 0-100
- Colors

**Requires Pronunciation:**
- Correct stress on family terms
- Diphthong pronunciation in adjectives

**Requires Cultural Knowledge:**
- Traditional and modern Dutch family structures
- Appropriate terms for extended family

**Assessment:**
- Describe a family member or a picture of people, using 3--5 correct adjectives and family relationships.

---

### Competency: Greeting and Basic Politeness

**CEFR Level:** A0
**Units:** Greetings and Leave-takings, Basic Politeness Formulas, Time of Day

**The learner can:**
- Greet people appropriately for the time of day.
- Ask how someone is.
- Respond to greetings.
- Say goodbye and farewell expressions.
- Use basic politeness words (please, thank you, sorry).
- Introduce themselves and others politely.

**Requires Grammar:**
- Simple yes/no questions
- Present tense of "zijn"
- Personal pronouns
- Imperative forms (basic: Zeg..., Vraag..., Doe...)

**Requires Vocabulary:**
- Greetings (goedemorgen, goedemiddag, goedenavond, hallo, tot ziens)
- Politeness formulas (alstublieft, dank je, dank u, sorry, pardon)
- Phrases for asking how someone is
- Time references (morning, afternoon, evening)

**Requires Pronunciation:**
- Clear, friendly intonation
- Correct stress in greeting phrases

**Requires Cultural Knowledge:**
- Dutch greeting customs (handshakes, cheek kisses, when to use "u" vs "jij")
- Appropriate greetings for formal vs informal contexts
- When to say "goedendag" vs "hallo"

**Assessment:**
- Conduct a 1-minute greeting exchange with a partner, including appropriate time-of-day greeting and politeness markers.

---

### Competency: Asking and Answering Simple Questions

**CEFR Level:** A0
**Units:** Question Formation, Yes/No Questions, Simple Wh-Questions

**The learner can:**
- Ask basic yes/no questions.
- Ask simple "who," "what," "where," and "how" questions.
- Understand and answer predictable personal questions.
- Respond with short, correct answers.
- Use correct word order in questions.

**Requires Grammar:**
- Yes/no question word order (inversion)
- Simple wh-question words (wie, wat, waar, hoe)
- Present tense of main verbs
- Personal pronouns
- Negation (niet, geen)

**Requires Vocabulary:**
- Question words and common answer structures
- Personal information vocabulary
- Numbers, places, family

**Requires Pronunciation:**
- Question intonation (rising for yes/no questions)
- Clear articulation of question words

**Requires Cultural Knowledge:**
- Typical Dutch topics for small talk
- Appropriate depth of personal questions in first meetings

**Assessment:**
- Answer 8-10 simple personal questions correctly and ask 3-4 appropriate follow-up questions.

---

### Competency: Telling Time and Describing Daily Activities

**CEFR Level:** A0
**Units:** Numbers and Time, Days and Months, Present Tense Regular Verbs, Daily Routines

**The learner can:**
- Tell time using analog and digital formats.
- Name the days of the week and months of the year.
- Describe what they do at different times of day.
- Use regular present tense verbs correctly.
- Ask and answer "What time is it?" questions.
- Identify times of day (morning, afternoon, evening).

**Requires Grammar:**
- Numbers (0-60 for minutes, 0-24 for hours)
- Days of the week and months
- Present tense of regular verbs (-en endings)
- Present tense of "zijn" and "hebben"
- Time expressions (om 3 uur, half 4, kwart over 2)
- Simple adverbial time expressions

**Requires Vocabulary:**
- Numbers 0-100
- Days and months
- Daily activities (eten, drinken, werken, studeren, spelen, slapen, wakker worden)
- Times of day
- Common locations

**Requires Pronunciation:**
- Correct pronunciation of numbers
- Dutch time-telling pronunciation

**Requires Cultural Knowledge:**
- 24-hour vs 12-hour time conventions in the Netherlands
- Dutch school and work schedules

**Assessment:**
- Read analog and digital clocks correctly in Dutch.
- Describe a simple daily routine using 5-7 present tense verbs.

---

### Competency: Identifying and Describing Objects and Places

**CEFR Level:** A0
**Units:** Nouns and Articles, Basic Adjectives, Classroom and Home Vocabulary, Prepositions of Place

**The learner can:**
- Name common objects in a classroom and home.
- Use correct articles (de/het) for nouns.
- Describe objects using basic adjectives.
- Point to and identify items using demonstratives.
- Describe the location of objects using simple prepositions.
- Count objects and identify quantities.

**Requires Grammar:**
- Singular nouns with articles (de, het)
- Basic adjectives (groot, klein, oud, nieuw, mooi, lelijk)
- Demonstratives (deze, dit, die, dat)
- Simple prepositions of place (in, op, onder, naast, voor, achter)
- Negation (geen, niet)

**Requires Vocabulary:**
- Classroom objects (tafel, stoel, deur, raam, bord, pen, boek)
- Home objects (bed, bank, lamp, televisie, keuken, badkamer, slaapkamer)
- Descriptive adjectives
- Colors

**Requires Pronunciation:**
- Correct stress on object names
- Clear vowel sounds in adjectives

**Requires Cultural Knowledge:**
- Typical Dutch home and classroom layouts
- Dutch naming conventions for household items

**Assessment:**
- Describe a picture or physical space, correctly identifying 10-15 objects with articles and 4-6 descriptive adjectives.
- Respond to questions about object locations using prepositions correctly.

---

### Competency: Ordering Food and Understanding Menus

**CEFR Level:** A0
**Units:** Food and Drinks Vocabulary, Numbers and Prices, Polite Requests, Restaurant Expressions

**The learner can:**
- Understand basic food and drink vocabulary.
- Order simple food and drinks.
- Ask for water, coffee, tea, and basic items.
- Understand a simple menu or food list.
- Use polite request forms.
- Identify common Dutch foods and drinks.

**Requires Grammar:**
- Polite request structures ("Ik wil..." "Mag ik..." "Kun je...")
- Imperative forms (Geef mij..., Zeg...)
- Articles with food nouns
- Numbers (for quantities and prices)
- Simple questions

**Requires Vocabulary:**
- Basic foods (brood, kaas, vlees, groenten, fruit)
- Drinks (water, koffie, thee, melk, sap)
- Polite expressions (alstublieft, dank je, nog een keer)
- Restaurant/café vocabulary
- Meal names (ontbijt, lunch, diner)

**Requires Pronunciation:**
- Clear pronunciation of food names
- Correct stress in polite phrases

**Requires Cultural Knowledge:**
- Dutch food culture (cheese, bread, typical meals)
- Café and restaurant customs
- Typical Dutch beverages

**Assessment:**
- Order 3-4 items from a simple menu using polite request forms.
- Understand and respond to basic waiter questions about food preferences.

---

### Competency: Describing Weather and Seasons

**CEFR Level:** A0
**Units:** Weather Vocabulary, Seasons, Weather-Related Adjectives, Weather Expressions

**The learner can:**
- Name the four seasons.
- Describe weather conditions using basic vocabulary.
- Ask and answer questions about the weather.
- Use weather-related adjectives correctly.
- Understand simple weather descriptions in reading and listening.

**Requires Grammar:**
- Weather expressions ("Het is...", "Het regent...", "Het sneeuwt...")
- Present tense of "zijn"
- Basic adjectives (warm, koud, nat, droog, heet, fris)
- Simple yes/no questions about weather

**Requires Vocabulary:**
- Seasons (lente, zomer, herfst, winter)
- Weather words (zon, regen, sneeuw, wind, wolk)
- Weather adjectives (zonnig, regenachtig, bewolkt, winderig)
- Weather-related items (paraplu, jas, laarzen)

**Requires Pronunciation:**
- Correct vowel sounds in season names
- Clear pronunciation of weather adjectives

**Requires Cultural Knowledge:**
- Typical Dutch weather patterns and seasons
- How weather affects Dutch daily life

**Assessment:**
- Describe the current weather using 3-4 correct weather adjectives and expressions.
- Understand and respond to simple weather questions in written or spoken form.

---

### Competency: Counting and Basic Quantities

**CEFR Level:** A0
**Units:** Numbers 0-100, Quantities and Measurements, Basic Money, Asking About Quantities

**The learner can:**
- Count from 0 to 100.
- Understand and use cardinal numbers (0, 1, 2, 3... 100).
- Ask "How many?" and respond with numbers.
- Identify basic quantities (ein paar, een paar, veel, weinig, niet veel).
- Understand and use basic money vocabulary (euro, cent).
- Ask prices and understand simple monetary amounts.
- Use numbers in context (ages, quantities, dates).
- Understand ordinal numbers (eerste, tweede, derde, etc.) in basic contexts.

**Requires Grammar:**
- Cardinal numbers (0-100)
- Ordinal numbers (eerste through tiende; 11th onwards as compound forms)
- "Hoeveel?" (how many) question formation
- Plural noun forms
- Number-noun agreement
- Basic monetary expressions

**Requires Vocabulary:**
- Numbers 0-100 (cardinal and ordinal)
- Quantity words (veel, weinig, een paar, some, a couple)
- Money (euro, cent, prijzen, geld, kosten, betalen)
- Measurement/quantity markers (bos, stuk, liter, kilo, pond, meter)
- Common objects that can be counted (appels, katten, huizen, etc.)

**Requires Pronunciation:**
- Clear, distinct pronunciation of each number 0-100
- Correct stress on compound numbers (like 21, 34, 56)
- Pronunciation of "r" sound in numbers like "drie," "vier," "uur"
- Correct intonation for quantity questions

**Requires Cultural Knowledge:**
- Dutch currency (euro) and common price ranges
- Dutch number formatting (comma for decimal separator)
- Typical Dutch pricing conventions and payment methods
- How Dutch use numbers in everyday contexts (telephone numbers, addresses, times, prices)

**Assessment:**
- Count aloud from 0 to 100 with correct pronunciation.
- Listen to numbers and repeat them accurately.
- Ask and answer "How many?" questions with objects or pictures.
- Understand and respond to price questions in euros and cents.
- Understand a short text or dialogue containing multiple numbers and quantities.

---

## A1 Competencies (Beginner)

### Competency: Shopping and Money

**CEFR Level:** A1
**Units:** Numbers and Prices, Money Vocabulary, Shopping Phrases, Asking for Quantities

**The learner can:**
- Ask prices and understand prices in Dutch.
- Understand currency and make simple monetary transactions.
- Ask for quantities and sizes.
- Understand and use basic shopping expressions.
- Handle simple payment interactions.
- Ask for help in shops.

**Requires Grammar:**
- Numbers (for prices)
- Modal verbs (willen, kunnen, mogen for requests)
- Question formation (Hoeveel kost...? Heb je...?)
- Articles and demonstratives
- Simple imperatives (Geef me... Zeg me...)
- Plural nouns (introduced in A1)

**Requires Vocabulary:**
- Numbers and prices
- Money and currency (euro, cent, betalen, geld, wisselgeld)
- Clothing items (kleren, overhemd, broek, jurk, schoen)
- Shoe and clothing sizes
- Colors (introduced in A0, expanded in A1)
- Shop types (bakkerij, supermarkt, kledingwinkel, apotheek)

**Requires Pronunciation:**
- Clear number pronunciation
- Correct stress on clothing items

**Requires Cultural Knowledge:**
- Dutch payment methods (cash, card, PIN, contactless)
- Tipping customs in Dutch shops and restaurants
- Common Dutch markets and shopping districts

**Assessment:**
- Complete a shopping transaction role play, asking prices, quantities, and sizes; paying correctly.

---

### Competency: Describing Houses and Furniture

**CEFR Level:** A1
**Units:** House and Rooms, Furniture, Prepositions of Place, Housing Vocabulary

**The learner can:**
- Name rooms in a house.
- Identify and describe furniture.
- Describe the layout and contents of a room or house.
- Use prepositions of place accurately.
- Understand and ask about housing details.
- Describe where things are located in a space.

**Requires Grammar:**
- Prepositions of place (in, op, onder, naast, voor, achter, boven, beneden, links, rechts)
- Present tense of "zijn"
- Articles and demonstratives
- Plural nouns
- Adjectives and adjective agreement (introduced in A1)
- Present tense verbs (liggen, staan, hangen)

**Requires Vocabulary:**
- Rooms (slaapkamer, keuken, badkamer, woonkamer, gang, kantoor)
- Furniture (bed, tafel, stoel, bank, kast, keuken, toilet, douche)
- Household items (lamp, deur, raam, muur, vloer, plafond)
- Location descriptions

**Requires Pronunciation:**
- Correct stress on room and furniture names
- Clear vowel sounds in prepositions

**Requires Cultural Knowledge:**
- Typical Dutch home layouts
- Dutch housing terminology
- Differences between Dutch, British, and American homes

**Assessment:**
- Describe a room or house using prepositions and adjectives correctly (8-10 sentences).
- Understand a description of a space and answer location-based questions.

---

### Competency: Transportation and Travel

**CEFR Level:** A1
**Units:** Transportation Vocabulary, Asking for Directions, Travel Phrases, Planning a Trip

**The learner can:**
- Name types of transportation.
- Ask for and give simple directions.
- Understand and use travel-related phrases.
- Ask how to get somewhere.
- Describe a journey.
- Use transportation vocabulary in context.

**Requires Grammar:**
- Modal verbs (willen, kunnen, moeten)
- Present tense verbs (gaan, rijden, vliegen, lopen)
- Prepositions of direction (naar, van, door, langs)
- Imperative (Ga... Rijd... Neem...)
- Subordinate clauses with "omdat"
- Time expressions

**Requires Vocabulary:**
- Transportation types (auto, trein, bus, fiets, vliegtuig, boot, voetpaden)
- Travel vocabulary (station, halte, kaartje, spoor, bagage)
- Directions (links, rechts, rechtdoor, naar links, naar rechts)
- Distance and time expressions
- Street names and landmarks

**Requires Pronunciation:**
- Clear pronunciation of transportation types
- Correct stress on direction words

**Requires Cultural Knowledge:**
- Dutch transportation system (trains, buses, cycling culture)
- Cycling importance in Dutch society
- Amsterdam and other Dutch cities' geography
- Public transportation etiquette

**Assessment:**
- Ask for and understand directions to a destination.
- Describe how to get somewhere using 3-4 transportation methods and directional language.

---

### Competency: Daily Routines and Telling Time

**CEFR Level:** A1
**Units:** Time Expressions (Expanded), Daily Routines, Regular Verbs, Imperative Mood

**The learner can:**
- Tell time with more precision (quarter past, quarter to, half past).
- Describe a daily routine using present tense.
- Ask and answer about daily schedules.
- Understand and use time-related prepositions (at, around, before, after).
- Use sequencing words (first, then, next, finally).
- Form imperatives to give instructions about daily activities.

**Requires Grammar:**
- Present tense regular verbs (expanded beyond A0)
- Present tense irregular verbs (gaan, doen, zien)
- Time expressions (om... uur, half..., kwart over..., kwart voor...)
- Prepositions of time (op, om, na, voor, tussen, rond, circa)
- Sequencing words (eerst, dan, daarna, tenslotte, vervolgens)
- Imperative mood (for instructions)
- Adverbs of frequency (altijd, meestal, soms, nooit)

**Requires Vocabulary:**
- Daily activities (wakker worden, opstaan, douchen, ontbijten, naar school gaan, werken, lunchen, diner, naar bed gaan)
- School activities (les, pauze, uitgang, toets, huiswerk)
- Work-related daily activities
- Time-related vocabulary

**Requires Pronunciation:**
- Correct pronunciation of time expressions
- Clear stress on activity verbs

**Requires Cultural Knowledge:**
- Typical Dutch school and work hours
- Dutch meal times
- Punctuality expectations in Dutch culture

**Assessment:**
- Describe a complete daily routine from morning to night using present tense, time expressions, and sequencing words (10-12 sentences).

---

### Competency: Sports, Hobbies, and Leisure

**CEFR Level:** A1
**Units:** Sports Vocabulary, Hobbies and Interests, Leisure Activities, Expressing Preferences

**The learner can:**
- Name common sports and hobbies.
- Describe hobbies and leisure activities.
- Express likes and dislikes using "ik hou van" and "ik mag... niet".
- Ask others about their hobbies.
- Understand and discuss frequency of leisure activities.
- Use present tense to describe what they do in their free time.

**Requires Grammar:**
- Present tense verbs (spelen, houden, doen, gaan)
- Modal verbs (willen, kunnen, mogen for preferences)
- Prepositional phrases (with "van", "met")
- Yes/no and wh-questions about hobbies
- Adverbs of frequency (altijd, meestal, soms, nooit)
- Imperative (for suggestions: "Kom...!" "Speel...!")

**Requires Vocabulary:**
- Sports (voetbal, tennis, zwemmen, fietsen, hardlopen, skiën, golf, hockey)
- Hobbies (lezen, schilderen, muziek spelen, zingen, dansen, boeken, films, spelletjes)
- Leisure activities and locations (park, zwembad, sportveld, bioscoop, museum, café)
- Frequency words

**Requires Pronunciation:**
- Correct stress on sport and hobby names
- Clear pronunciation of activity verbs

**Requires Cultural Knowledge:**
- Popular Dutch sports (football/voetbal, cycling, ice skating)
- Dutch relationship with sports and outdoors
- Common Dutch hobbies and pastimes

**Assessment:**
- Describe 3-4 hobbies or sports they enjoy, including frequency and why they like them (6-8 sentences).

---

### Competency: Clothing and Personal Appearance

**CEFR Level:** A1
**Units:** Clothing Vocabulary, Colors (Expanded), Adjective Agreement, Describing People

**The learner can:**
- Name clothing items and describe what people are wearing.
- Use adjective agreement when describing clothes.
- Ask for and describe clothing sizes.
- Describe fashion and personal style.
- Ask about and discuss clothing.
- Understand clothing descriptions in reading and listening.

**Requires Grammar:**
- Clothing vocabulary with articles
- Adjective agreement (color and descriptive adjectives with nouns)
- Present tense of "zijn" (for description)
- Simple questions about clothing
- Plural forms of clothing
- Prepositions (with clothing: "een jurk met...")

**Requires Vocabulary:**
- Clothing items (overhemd, blouse, broek, rok, jurk, jas, jas, schoenen, sokken, onderbroek, beha, das, sjaal, handschoenen, hoed, muts)
- Colors (expanded: patterns, shades)
- Clothing materials (katoen, wol, zijde, leer)
- Adjectives for clothing (mooi, lelijk, modern, klassiek, comfortabel, stijlvol)

**Requires Pronunciation:**
- Clear pronunciation of clothing terms
- Correct stress on adjectives

**Requires Cultural Knowledge:**
- Dutch fashion and style preferences
- Casual dress codes in Dutch workplaces
- Seasonally appropriate clothing in the Netherlands

**Assessment:**
- Describe what a person is wearing in a picture using 6-8 clothing items with correct articles and adjective agreement.

---

### Competency: Health and Doctor Visits

**CEFR Level:** A1
**Units:** Body Parts, Illness Vocabulary, Medical Phrases, Discussing Health

**The learner can:**
- Name body parts.
- Describe symptoms and illnesses.
- Understand and ask basic health-related questions.
- Request help for health issues.
- Understand basic medical instructions and advice.
- Describe pain or discomfort.

**Requires Grammar:**
- Body part vocabulary with articles
- Present tense of "hebben" (for symptoms: "Ik heb pijn...")
- Modal verbs (moet, kan, mag for medical advice)
- Imperative mood (for medical instructions)
- Questions about health (Hoe gaat het...? Wat is er...?)
- Prepositions for location of pain (in, op, aan)

**Requires Vocabulary:**
- Body parts (hoofd, oog, oor, neus, mond, tand, keel, hart, long, maag, been, arm, hand, voet, vinger)
- Illnesses and symptoms (koorts, hoest, verkoudheid, griep, hoofdpijn, buikpijn, griep, mazelen)
- Medical vocabulary (arts, tandarts, apotheker, medicijn, recept, pil, zalf, verbandmiddel)
- Health-related verbs (voelen, pijn hebben, hoesten, niezen, medicijn nemen)

**Requires Pronunciation:**
- Clear pronunciation of body part names
- Correct stress on illness words

**Requires Cultural Knowledge:**
- Dutch healthcare system basics
- Dutch doctor and pharmacy customs
- Common remedies in Dutch culture

**Assessment:**
- Describe symptoms to a "doctor" using body parts and illness vocabulary (4-6 sentences).
- Understand and respond to basic medical advice.

---

### Competency: Restaurants and Food Culture

**CEFR Level:** A1
**Units:** Food Types and Ingredients, Restaurant Phrases, Ordering Meals, Table Vocabulary

**The learner can:**
- Understand a restaurant menu.
- Order meals and drinks at a restaurant.
- Ask about ingredients and preparation.
- Understand server questions and respond appropriately.
- Express food preferences and dietary restrictions.
- Use restaurant-specific phrases and vocabulary.

**Requires Grammar:**
- Modal verbs (willen, kunnen, mogen for ordering)
- Polite request phrases ("Ik wil...," "Graag...")
- Questions with "wat is...?" "Zit er... in...?"
- Imperative (for waiter instructions: "Geef mij...", "Breng...")
- Present tense verbs
- Simple conditional (for preferences: "Ik zou...")

**Requires Vocabulary:**
- Food items (vlees, vis, kip, varkensvlees, groenten, salade, brood, kaas, ei, pasta, rijst)
- Cooking methods (gebakken, gekookt, gegrild, gerookt, rauw)
- Food descriptions (zoet, zuur, zout, heet, koud, pittig)
- Table and dishware (bord, kok, bestek, glas, servet, mes, vork, lepel, theelepel)
- Restaurant roles (ober, chef-kok)
- Meal types and courses (voorgerecht, hoofdgerecht, nagerecht, toetje)

**Requires Pronunciation:**
- Clear pronunciation of food names
- Correct stress on cooking methods

**Requires Cultural Knowledge:**
- Dutch food culture and typical meals
- Common Dutch restaurants and food styles
- Dutch table manners and dining customs
- Typical Dutch ingredients and dishes (stroopwafels, bitterballen, etc.)

**Assessment:**
- Order a complete meal (starter, main, beverage, dessert) from a menu, asking about ingredients and preparations.

---

### Competency: School and Education

**CEFR Level:** A1
**Units:** School Subjects, Education Vocabulary, Academic Life, Describing School Activities

**The learner can:**
- Name school subjects.
- Describe school life and daily activities at school.
- Talk about teachers and classmates.
- Discuss favorite and least favorite subjects.
- Understand school-related vocabulary in context.
- Ask and answer questions about education.

**Requires Grammar:**
- Present tense verbs (hebben, gaan, leren, studeren, schrijven, lezen, luisteren)
- School-related vocabulary
- Adjectives for subjects (moeilijk, makkelijk, interessant, saai)
- Questions about education
- Possessive adjectives (mijn klas, mijn leraar)
- Present tense of regular and irregular verbs

**Requires Vocabulary:**
- School subjects (Nederlands, wiskunde, Engels, geschiedenis, aardrijkskunde, scheikunde, biologie, lichamelijke opvoeding, kunst, muziek)
- School locations (klaslokaal, schoolplein, bibliotheek, kantoor, gym)
- School roles (leraar, leerling, rector, bibliothecaris)
- School activities (les, pauze, huiswerk, tentamen, toets, werkstuk)
- School supplies (boek, pen, potlood, schrift, map)

**Requires Pronunciation:**
- Clear pronunciation of subject names
- Correct stress on school-related words

**Requires Cultural Knowledge:**
- Dutch education system structure
- Typical Dutch school schedules
- Dutch school traditions and customs
- Common professions requiring different education levels

**Assessment:**
- Describe a typical school day, including subjects, activities, and opinions about them (8-10 sentences).

---

### Competency: Work and Employment

**CEFR Level:** A1
**Units:** Jobs and Professions, Workplace Vocabulary, Work Activities, Describing Your Job

**The learner can:**
- Name common occupations and jobs.
- Describe their job or a job they know about.
- Discuss work-related activities and responsibilities.
- Ask about someone's job.
- Understand workplace-related vocabulary.
- Describe work locations and tools.

**Requires Grammar:**
- Present tense verbs (werken, doen, helpen, verkopen, maken, bouwen, repareren)
- Job titles and professions with articles
- Questions about work (Wat doe je...? Waar werk je...?)
- Descriptive adjectives for jobs and work conditions
- Simple sentences about work activities
- Possessive pronouns (mijn baan, mijn baas)

**Requires Vocabulary:**
- Common jobs (leraar, arts, tandarts, verpleegster, politieagent, firefighter, monteur, timmerman, tuinman, kok, serveerster, receptionist, kantoormedewerker, verkoopmedewerker)
- Workplaces (kantoor, ziekenhuis, school, restaurant, winkel, fabriek, bouwplaats)
- Work tools and equipment (computer, telefoon, pen, gereedschap)
- Work activities (typen, bellen, verkopen, repareren, bouwen, helpen, serveren, koken)
- Work-related concepts (baas, collega, werkdag, salaris, promotion)

**Requires Pronunciation:**
- Clear pronunciation of job titles
- Correct stress on work-related words

**Requires Cultural Knowledge:**
- Common Dutch professions
- Dutch workplace culture
- Typical Dutch work hours and holidays
- Gender equality in Dutch workplaces

**Assessment:**
- Describe their own job or a job they are interested in, including what they do, where they work, and why they like/dislike it (6-8 sentences).

---

### Competency: Holidays and Celebrations

**CEFR Level:** A1
**Units:** Holidays and Festival Vocabulary, Celebration Traditions, Gift-Giving, Holiday Expressions

**The learner can:**
- Name major holidays and festivals.
- Describe holiday traditions and celebrations.
- Discuss what they do during holidays.
- Understand holiday-related vocabulary.
- Talk about gifts and gift-giving.
- Ask and answer about holiday plans.

**Requires Grammar:**
- Holidays and celebration vocabulary
- Present tense and future tense (going to: "Ik ga...")
- Adverbs and time expressions (in mei, in december, elk jaar, altijd)
- Questions about holidays
- Descriptive sentences about celebrations
- Modal verbs (willen, kunnen for holiday planning)

**Requires Vocabulary:**
- Holidays (Kerstmis, Pasen, Sinterklaas, Nieuwjaarsdag, Koningsdag, Moederdag, Vaderdag, Valentijnsdag)
- Celebration vocabulary (viering, traditie, cadeau/geschenk, decoratie, feest, toastje, dankgebed)
- Seasonal and holiday foods
- Holiday-related activities

**Requires Pronunciation:**
- Clear pronunciation of holiday names
- Correct stress on celebration words

**Requires Cultural Knowledge:**
- Major Dutch holidays and their significance
- Dutch Sinterklaas traditions (distinct from Christmas)
- Dutch Easter and Christmas customs
- Koningsdag celebrations
- Traditional Dutch holiday foods

**Assessment:**
- Describe their favorite holiday or how they celebrate a holiday, including traditions, foods, and activities (6-8 sentences).

---

## A2 Competencies (Elementary)

### Competency: Telling Stories and Past Experiences

**CEFR Level:** A2
**Units:** Past Tense (Perfect), Simple Narrative Structures, Story Vocabulary, Sequencing Events

**The learner can:**
- Tell simple stories about past events.
- Use past tense (perfect tense) correctly.
- Describe what happened and when.
- Use sequencing words to connect events.
- Ask about and discuss past experiences.
- Understand simple narrative texts.

**Requires Grammar:**
- Perfect tense (hebben + past participle, zijn + past participle)
- Past participle formation (regular and irregular)
- Time expressions for past (gisteren, vorige week, een maand geleden, altijd, nooit)
- Sequencing words (eerst, dan, daarna, tenslotte, ondertussen)
- Connecting words for narratives (en, maar, want, omdat)
- Simple subordinate clauses

**Requires Vocabulary:**
- Common irregular past participles (gegaan, geweest, gehad, gezien, gegeven, gestoken, gestaan, gelegen)
- Time markers for past
- Story vocabulary (personage, plot, einde, begin)
- Verbs for narrative (vertellen, gebeuren, ontmoeten, ontdekken, vinden, verliezen)

**Requires Pronunciation:**
- Correct stress on past participles
- Clear pronunciation of time expressions

**Requires Cultural Knowledge:**
- Typical Dutch story themes
- Dutch concepts of time and memory

**Assessment:**
- Tell a 2-3 minute story about a past event, using perfect tense correctly and sequencing events logically.

---

### Competency: Expressing Opinions and Preferences

**CEFR Level:** A2
**Units:** Opinion Phrases, Expressing Agreement and Disagreement, Justifying Opinions, Preferences Vocabulary

**The learner can:**
- Express personal opinions clearly.
- Agree and disagree with others.
- Give reasons for their opinions.
- Discuss preferences and dislikes.
- Understand and respond to opinions from others.
- Use appropriate language for formal and informal contexts.

**Requires Grammar:**
- Opinion phrases ("Ik denk dat...", "Ik vind dat...", "Mijn mening is dat...")
- Expressions of agreement ("Ik ben het eens...", "Absoluut!", "Helemaal mee eens!")
- Expressions of disagreement ("Ik ben het niet eens...", "Dat ben ik niet met je eens...")
- Conditional structures (for hypothetical opinions)
- Subordinate clauses with "dat"
- Modal verbs for opinions (kan, zou, mag denken)

**Requires Vocabulary:**
- Opinion vocabulary (denken, vinden, geloven, mening, idee, standpunt)
- Adjectives for evaluation (goed, slecht, interessant, saai, mooi, lelijk, belangrijk, onbelangrijk, waar, onwaar)
- Adverbs for hedging (misschien, waarschijnlijk, eigenlijk, mogelijk)
- Connectors for reasoning (want, omdat, aangezien, echter, maar)

**Requires Pronunciation:**
- Clear articulation of opinion phrases
- Correct stress for emphasis

**Requires Cultural Knowledge:**
- Dutch cultural attitudes and values
- Typical Dutch opinions on common topics
- Formal vs informal opinion expression

**Assessment:**
- Discuss 3-4 topics, expressing opinions with reasons, and responding to disagreement appropriately (8-10 exchanges).

---

### Competency: Describing Plans and Intentions

**CEFR Level:** A2
**Units:** Future Tense, Intention Structures, Planning Vocabulary, Modal Verbs for Future

**The learner can:**
- Talk about future plans using multiple structures.
- Express intentions and goals.
- Discuss when and where future events will happen.
- Understand and ask about other people's plans.
- Use both simple future and immediate future.
- Discuss conditional future plans (if...then).

**Requires Grammar:**
- Future tense ("zal" + infinitive)
- Immediate future ("gaan" + infinitive)
- Intention phrases ("Ik wil...", "Ik ben van plan om...", "Ik hoop dat...")
- Modal verbs for future (moeten, kunnen, willen, mogen)
- Time expressions for future (morgen, volgende week, volgende maand, in 2025, straks, binnenkort)
- Conditional clauses (als...dan)
- Subordinate clauses with "dat"

**Requires Vocabulary:**
- Future planning vocabulary (plan, doelstelling, voornemen, droom, ambitie)
- Verbs for planning (plannen, voorbereiden, reserveren, boeken)
- Goal-related vocabulary (studeren, verhuizen, trouwen, kinderen krijgen, reizen, sparen)
- Time markers for future

**Requires Pronunciation:**
- Clear pronunciation of future structures
- Correct stress on intention words

**Requires Cultural Knowledge:**
- Dutch attitudes toward future planning
- Common Dutch life goals and milestones
- Typical Dutch educational and career paths

**Assessment:**
- Describe personal plans for the next 1 year, 5 years, and 10 years, using multiple future structures and giving reasons (8-10 sentences).

---

### Competency: Making Comparisons and Descriptions

**CEFR Level:** A2
**Units:** Comparative Adjectives, Superlative Adjectives, Comparison Structures, Descriptive Language

**The learner can:**
- Use comparative forms to compare people, objects, and situations.
- Use superlative forms to identify the best/worst/most/least.
- Make meaningful comparisons between two or more things.
- Provide detailed descriptions using comparatives and superlatives.
- Understand comparisons in reading and listening.
- Explain similarities and differences.

**Requires Grammar:**
- Comparative forms (regular: -er, irregular: beter, slechter, meer, minder)
- Superlative forms (regular: -st, irregular: best, slechtst, meest, minst)
- Comparative structures ("...dan", "even...als", "niet zo...als")
- Superlative + article + adjective structure
- Descriptive adjectives (expanded from A1)
- Intensifiers (veel, heel, erg, tamelijk, nogal, behoorlijk)

**Requires Vocabulary:**
- Adjectives suitable for comparison (groot/klein, hot/cold, fast/slow, expensive/cheap, beautiful/ugly, intelligent/stupid, friendly/unfriendly)
- Comparison expressions (sterker, zwakker, hoger, lager, sneller, langzamer)
- Superlatives (het beste, het slechtste, het meest, het minst)

**Requires Pronunciation:**
- Correct pronunciation of comparative and superlative forms
- Clear stress on descriptive adjectives

**Requires Cultural Knowledge:**
- Dutch concepts of comparison and evaluation
- Typical Dutch preferences and standards

**Assessment:**
- Compare 2-3 objects, people, or situations using both comparative and superlative forms (6-8 sentences).

---

### Competency: Handling Problems and Complaints

**CEFR Level:** A2
**Units:** Problem-Solving Vocabulary, Complaint Phrases, Requesting Solutions, Expressing Dissatisfaction

**The learner can:**
- Describe problems clearly.
- Make formal and informal complaints.
- Request solutions to problems.
- Explain what went wrong and why.
- Understand and respond to complaints.
- Negotiate solutions.

**Requires Grammar:**
- Problem-related vocabulary
- Past tense (to describe what went wrong)
- Modal verbs (moeten, kunnen, willen for solutions)
- Complaint structures ("Er is iets mis met...", "Ik ben niet tevreden met...")
- Subordinate clauses explaining problems
- Imperative mood (for requesting action)
- Conditional structures (for hypothetical solutions)

**Requires Vocabulary:**
- Problem vocabulary (probleem, moeilijkheid, defect, storing, klacht, jammergenoeg, helaas)
- Complaint language (ontevreden, boos, teleurgesteld, gefrustreerd)
- Solution vocabulary (oplossing, reparatie, terugbetaling, vervanging, compensatie)
- Formal complaint phrases

**Requires Pronunciation:**
- Appropriate intonation for complaints
- Clear articulation of problem descriptions

**Requires Cultural Knowledge:**
- Dutch consumer rights and expectations
- Dutch directness in complaints
- Typical Dutch approaches to problem-solving

**Assessment:**
- Describe a problem (product defect, service issue, etc.), explain why you are dissatisfied, and request a solution (5-7 sentences).

---

### Competency: Understanding and Using Past Tense

**CEFR Level:** A2
**Units:** Simple Past Tense, Past Tense Irregular Verbs, Narrative Past Structures, Distinguishing Perfect and Simple Past

**The learner can:**
- Use simple past tense (imperfect) for descriptions and narratives.
- Understand the difference between perfect and simple past.
- Use irregular past tense forms correctly.
- Tell longer stories using past tense.
- Describe background and habitual past actions.
- Understand authentic historical and narrative texts.

**Requires Grammar:**
- Simple past tense (imperfect) formation (regular: -te/-den, irregular: was/waren, deed/deden, etc.)
- Irregular simple past forms (most common verbs)
- Distinguishing perfect and simple past usage
- Past tense of modal verbs
- Time expressions for past
- Subordinate clauses in past tense

**Requires Vocabulary:**
- Irregular past tense forms
- Time markers for past narrative (In 1945, toen, intussen, daarvoor)
- Verbs commonly used in narrative (zeggen, doen, denken, willen, kunnen, moeten, mag, laten, stellen, starten)

**Requires Pronunciation:**
- Correct pronunciation of irregular past forms
- Clear stress on narrative verbs

**Requires Cultural Knowledge:**
- Dutch history and historical narratives
- Typical Dutch story structures

**Assessment:**
- Tell a 3-4 minute story using a mix of simple past and perfect tense, with correct irregulars and clear sequencing.

---

### Competency: Reading and Understanding Newspapers and Articles

**CEFR Level:** A2
**Units:** News Vocabulary, Article Structure, Reading Comprehension, Summarizing Information

**The learner can:**
- Understand main ideas in newspaper articles.
- Find specific information in articles.
- Identify the purpose and structure of articles.
- Understand cause and effect in news stories.
- Summarize articles in their own words.
- Recognize different types of news (politics, sports, society, culture).

**Requires Grammar:**
- All grammar from A0-A1
- Perfect and simple past tense
- Passive voice (introductory)
- Subordinate clauses
- Relative clauses (introductory)
- Complex sentence structures

**Requires Vocabulary:**
- News vocabulary (artikel, nieuws, kop, alinea, bericht, verslaggeving)
- Common news topics (politiek, sport, weer, economie, cultuur, gezondheid, misdaad)
- Verbs for reporting (zeggen, melden, rapporteren, onthullen, bewijzen, ontkennen, beweren)
- Formal and journalistic language

**Requires Pronunciation:**
- Clear reading aloud of news articles
- Appropriate intonation for different article types

**Requires Cultural Knowledge:**
- Dutch news sources and media
- Important topics in Dutch news
- Dutch journalistic style and conventions

**Assessment:**
- Read a newspaper article and answer comprehension questions, then summarize the main points (5-7 sentences).

---

### Competency: Expressing Necessity and Obligation

**CEFR Level:** A2
**Units:** Modal Verbs (Must, Have to, Should), Obligation Structures, Duty and Responsibility

**The learner can:**
- Express what must or should be done.
- Discuss obligations and responsibilities.
- Understand rules and requirements.
- Give advice using modal verbs.
- Distinguish between different levels of obligation.
- Understand instructions and requirements.

**Requires Grammar:**
- Modal verbs for obligation (moeten, hoeven, dienen, willen for should)
- Obligation structures ("Ik moet...", "Ik hoef niet...", "Je behoort te...")
- Negation with modals (moeten niet, hoeven niet)
- Conditional obligation ("Je zou moeten...")
- Subordinate clauses with obligation language

**Requires Vocabulary:**
- Obligation vocabulary (plicht, verplichting, regel, voorwaarde, verantwoordelijkheid)
- Advice words (advies, suggestie, raad, voorstel)
- Necessity expressions (noodzakelijk, belangrijk, essentieel, optioneel, facultatief)

**Requires Pronunciation:**
- Clear pronunciation of modal verbs
- Appropriate intonation for instructions

**Requires Cultural Knowledge:**
- Dutch attitudes toward rules and obligations
- Social and legal obligations in the Netherlands

**Assessment:**
- Describe 4-5 things someone must, should, doesn't need to, and shouldn't do in a given situation (6-8 sentences).

---

### Competency: Describing Processes and Instructions

**CEFR Level:** A2
**Units:** Imperative Mood (Expanded), Sequencing Language, How-To Language, Cause and Effect

**The learner can:**
- Give clear step-by-step instructions.
- Understand how-to texts and recipes.
- Describe processes logically.
- Use sequencing words effectively.
- Use imperative and passive structures appropriately.
- Explain cause and effect.

**Requires Grammar:**
- Imperative mood (expanded: singular formal/informal, plural)
- Passive voice (introductory)
- Sequencing words (eerst, daarna, vervolgens, dan, tenslotte, tot slot, intussen)
- Causal structures (want, omdat, aangezien, doordat, dankzij)
- Time expressions for instructions
- Subordinate clauses

**Requires Vocabulary:**
- Process vocabulary (stap, procedure, proces, methode, instructie, werkwijze)
- Action verbs (doen, zetten, plaatsen, toevoegen, mengen, verwarmen, snijden, vouwen, binden)
- Tool and equipment vocabulary
- Time and sequence markers

**Requires Pronunciation:**
- Clear articulation of instruction verbs
- Appropriate pace for instruction delivery

**Requires Cultural Knowledge:**
- Dutch cooking and recipes
- Dutch DIY and crafting traditions

**Assessment:**
- Provide instructions for a process (cooking a dish, making something, getting somewhere) using 8-10 clear, sequenced steps.

---

### Competency: Telephone Communication and Voicemail

**CEFR Level:** A2
**Units:** Telephone Phrases, Leaving Messages, Understanding Voicemail, Business Phone Language

**The learner can:**
- Use appropriate phrases for phone conversations.
- Introduce themselves on the phone.
- Leave clear voicemail messages.
- Understand and take messages from others.
- Handle phone interruptions politely.
- Use formal and informal telephone language appropriately.

**Requires Grammar:**
- Telephone-specific phrases and structures
- Imperative mood (for asking to wait)
- Past tense (for explaining situations)
- Future tense (for promising callbacks)
- Polite question forms
- Reported speech (basic)

**Requires Vocabulary:**
- Phone vocabulary (telefoon, nummer, toets, lijn, opnemen, hangen op, terugbellen, voicemail, bericht, doorverbinden)
- Greeting and introduction phrases
- Request phrases ("Mag ik...?", "Kun je...?")
- Polite interruption phrases

**Requires Pronunciation:**
- Clear, distinct speech for phone communication
- Appropriate phone conversation intonation

**Requires Cultural Knowledge:**
- Dutch telephone etiquette
- Formal vs informal phone language in Dutch
- Business communication norms

**Assessment:**
- Conduct a phone conversation role play, introducing themselves, handling a simple request, and leaving a clear message.

---

### Competency: Writing Emails and Formal Letters

**CEFR Level:** A2
**Units:** Email Structure, Formal Letter Format, Salutations and Closings, Professional and Personal Correspondence

**The learner can:**
- Write clear, organized emails.
- Use appropriate salutations and closings for different contexts.
- Structure formal letters correctly.
- Explain information in writing.
- Request action through written communication.
- Understand and respond to emails and letters.

**Requires Grammar:**
- Sentence structures for formal writing
- Polite request forms ("Ik vraag me af of...","Zou je...?")
- Conditional structures
- Past tense (for background information)
- Future tense (for expectations)
- Formal register

**Requires Vocabulary:**
- Email and letter vocabulary (onderwerp, bericht, geval, mededeling, voorstel, aanvraag, reactie)
- Formal greetings (Geachte... Dames en heren, Beste...)
- Formal closings (Vriendelijke groeten, Met vriendelijke groeten, Kosten uw groeten)
- Business and formal vocabulary

**Requires Pronunciation:**
- Not directly applicable (written skill)
- Correct spelling and punctuation

**Requires Cultural Knowledge:**
- Dutch formal and informal email conventions
- Dutch business letter writing standards
- Appropriate formality levels in Dutch correspondence

**Assessment:**
- Write 2-3 emails/letters: an informal personal email, a formal business email, and a formal complaint letter.

---

### Competency: Understanding Relative and Subordinate Clauses

**CEFR Level:** A2
**Units:** Relative Pronouns, Relative Clauses, Subordinating Conjunctions, Complex Sentence Structures

**The learner can:**
- Understand and use relative clauses (who, which, that).
- Use subordinating conjunctions correctly.
- Combine sentences using complex structures.
- Understand complex sentence structures in reading.
- Use proper word order in subordinate clauses.
- Write longer, more sophisticated sentences.

**Requires Grammar:**
- Relative pronouns (die, dat, waar, wat, wie, welk)
- Relative clause formation and word order
- Subordinating conjunctions (omdat, hoewel, voordat, nadat, terwijl, zodra, toen, als, tenzij)
- Subjunctive and past subjunctive (basic)
- Word order in subordinate clauses (verb at end)
- Combining independent and dependent clauses

**Requires Vocabulary:**
- Subordinating conjunctions and their uses
- Relative clauses and formal structures

**Requires Pronunciation:**
- Clear articulation of complex structures
- Appropriate pacing for understanding

**Requires Cultural Knowledge:**
- Dutch writing styles and complexity
- Literary and formal Dutch structures

**Assessment:**
- Write 8-10 sentences combining multiple simple sentences into complex sentences using relative clauses and subordinating conjunctions.

---

## B1 Competencies (Independent User)

### Competency: Discussing Current Events and News

**CEFR Level:** B1
**Units:** News Analysis, Political Vocabulary, Opinion Formation on News, Media Literacy

**The learner can:**
- Discuss current events in depth.
- Analyze and critique news stories.
- Understand political and social commentary.
- Form and defend opinions on news topics.
- Understand and participate in news-related discussions.
- Recognize bias and perspective in media.

**Requires Grammar:**
- All A2 grammar
- Advanced subordinate clauses
- Reported speech (that he/she said that...)
- Conditional structures (if...then for analysis)
- Passive voice in news contexts
- Formal complex structures

**Requires Vocabulary:**
- Advanced news vocabulary (commentaar, analyse, onderzoek, rapport, standpunt, gegeven, bewijs, argument)
- Political vocabulary (regering, parlement, ministerie, politiek, verkiezingen, wetgeving, beleid, partij)
- Evaluative language (significant, important, consequential, problematic, beneficial, detrimental)

**Requires Pronunciation:**
- Native-like pronunciation of news vocabulary
- Appropriate intonation for debate

**Requires Cultural Knowledge:**
- Dutch political system and parties
- Current issues in Dutch society
- Dutch media landscape and perspectives
- Dutch attitudes toward current events

**Assessment:**
- Discuss 2-3 current news topics, analyzing different perspectives, supporting opinions with evidence, and engaging with opposing views.

---

### Competency: Formal Presentations and Public Speaking

**CEFR Level:** B1
**Units:** Presentation Structure, Presentation Vocabulary, Managing Audience Questions, Formal Speaking

**The learner can:**
- Deliver structured presentations on familiar topics.
- Organize information logically.
- Use presentation vocabulary and phrases.
- Handle questions from the audience.
- Maintain formal register in public speaking.
- Use visual aids effectively.

**Requires Grammar:**
- Complex sentence structures
- Formal register and tone
- Conditional structures (for hypothetical points)
- Reported speech (what someone said)
- Advanced connectors (furthermore, moreover, however, therefore)

**Requires Vocabulary:**
- Presentation vocabulary (dia, orde van presentatie, samenvattingsslide, diagram, grafiek, statistieken, conclusie)
- Presentation phrases ("Ik zal beginnen met...", "Het volgende punt is...", "Ter samenvatting...", "Vragen?")
- Formal vocabulary for topic areas
- Transition words (eerder, voorts, ondertussen, intussen, tenslotte, tot slot)

**Requires Pronunciation:**
- Clear articulation for audience understanding
- Appropriate pacing and pause use
- Native-like stress and intonation

**Requires Cultural Knowledge:**
- Dutch business presentation norms
- Academic presentation conventions in the Netherlands
- Cultural attitudes toward public speaking

**Assessment:**
- Deliver a 5-7 minute presentation on a familiar topic, with clear structure, handling of audience questions, and professional presentation skills.

---

### Competency: Workplace Communication

**CEFR Level:** B1
**Units:** Business Emails and Correspondence, Meeting Participation, Professional Relationships, Workplace Problem-Solving

**The learner can:**
- Participate effectively in workplace meetings.
- Write professional emails and reports.
- Communicate with colleagues and supervisors.
- Negotiate and solve workplace problems.
- Understand workplace norms and expectations.
- Discuss work-related issues professionally.

**Requires Grammar:**
- All subordinate and complex clause structures
- Conditional structures for hypothetical workplace situations
- Reported speech for relaying information
- Passive voice for formal reporting
- Formal register throughout

**Requires Vocabulary:**
- Advanced business vocabulary (projectmanagement, deadline, stakeholder, voortgang, doelstelling, medewerker, collega, rapport, memorandum)
- Meeting vocabulary (agenda, notulen, voorstel, besluit, agendering, afspraken, vervolgstappen)
- Professional register words

**Requires Pronunciation:**
- Professional articulation and pace
- Native-like pronunciation of business terms

**Requires Cultural Knowledge:**
- Dutch workplace communication styles
- Hierarchy and communication norms in Dutch companies
- Dutch attitudes toward formality in professional settings
- Dutch business etiquette

**Assessment:**
- Participate in a simulated workplace meeting, propose ideas, handle disagreements, and write a follow-up email summarizing decisions.

---

### Competency: Debating and Negotiation

**CEFR Level:** B1
**Units:** Argument Structure, Persuasion Techniques, Counterarguments, Compromise and Agreement Language

**The learner can:**
- Present structured arguments.
- Persuade others using reasoning and evidence.
- Understand and counter opposing viewpoints.
- Negotiate to reach agreement.
- Use appropriate language for debate.
- Recognize logical fallacies and weak arguments.

**Requires Grammar:**
- Complex argument structures with multiple clauses
- Conditional structures (if...then)
- Reported speech and thought
- Advanced modal verbs for nuance
- Formal connectors (furthermore, however, conversely, nonetheless)

**Requires Vocabulary:**
- Argument vocabulary (standpunt, bewijs, tegenargument, logica, conclusie, vooronderstelling, bewering)
- Persuasion language (Dit suggereert..., We kunnen concluderen dat..., Het is duidelijk dat...)
- Compromise language (We kunnen misschien..., Een mogelijke oplossing is..., Zou je kunnen accepteren...?)
- Connectors for logic (daarom, dus, bijgevolg, immers, omdat, met het oog op, in het licht van)

**Requires Pronunciation:**
- Persuasive intonation
- Clear stress for emphasis
- Native-like pace and delivery

**Requires Cultural Knowledge:**
- Dutch directness in debate
- Dutch cultural attitudes toward disagreement and conflict
- Dutch negotiation styles

**Assessment:**
- Engage in a formal debate on a familiar topic, presenting arguments with evidence, responding to counterarguments, and attempting to reach consensus.

---

### Competency: Understanding and Producing Advanced Written Texts

**CEFR Level:** B1
**Units:** Essay Writing, Opinion Pieces, Formal Writing, Text Analysis

**The learner can:**
- Write essays with clear structure and argumentation.
- Write opinion pieces and editorial-style pieces.
- Understand and analyze longer, complex texts.
- Use appropriate register for different writing types.
- Integrate evidence and examples effectively.
- Proofread and revise writing for clarity and correctness.

**Requires Grammar:**
- All complex structures from A2+
- Advanced subordination and coordination
- Passive voice for formal writing
- Subjunctive mood (Dutch subjonctief)
- Reported speech in various tenses
- Formal register and transitions

**Requires Vocabulary:**
- Advanced academic and formal vocabulary
- Argumentative vocabulary (claim, evidence, reasoning, implication, consequence, assumption)
- Evaluative vocabulary (valid, significant, problematic, compelling, credible, relevant)
- Transition and connector words for essays

**Requires Pronunciation:**
- Not directly applicable (written skill)
- Correct spelling and advanced punctuation

**Requires Cultural Knowledge:**
- Dutch writing conventions and styles
- Dutch preferences for argument structure
- Academic and formal writing norms in Dutch

**Assessment:**
- Write a 500-word essay on a debatable topic, with introduction, 2-3 well-developed body paragraphs with evidence, and conclusion.

---

### Competency: Cultural Understanding and Discussion

**CEFR Level:** B1
**Units:** Dutch Culture and Society, Cultural Comparison, Social Customs and Norms, Cultural Sensitivity

**The learner can:**
- Discuss Dutch culture, history, and society.
- Compare cultures thoughtfully.
- Understand cultural norms and expectations.
- Discuss cultural differences without stereotyping.
- Appreciate cultural nuances and complexity.
- Engage in intercultural dialogue.

**Requires Grammar:**
- All B1-level grammar for discussion
- Structures for comparison and contrast
- Conditional and hypothetical structures
- Reported speech for cultural commentary
- Complex sentences for nuance

**Requires Vocabulary:**
- Cultural and social vocabulary (waarde, norm, gewoonte, traditie, cultureel, sociaal, diverse, plurality, integratie)
- History vocabulary (erfenis, verleden, invloed, betekenis, betekenisvol)
- Social issues vocabulary (ongelijkheid, recht, discriminatie, inclusie, samenleven)

**Requires Pronunciation:**
- Sensitive, respectful tone
- Clear articulation of cultural concepts

**Requires Cultural Knowledge:**
- Dutch history and culture in depth
- Dutch values and worldview
- Regional diversity in the Netherlands
- Dutch social movements and contemporary issues
- Differences between the Netherlands and other cultures

**Assessment:**
- Discuss Dutch culture in depth, comparing it to the learner's own culture, and reflect on cultural differences and similarities (8-10 minute conversation).

---

### Competency: Consuming and Discussing Dutch Media

**CEFR Level:** B1
**Units:** Television and Film, Literature and Press, Digital Media, Cultural Commentary

**The learner can:**
- Watch and understand Dutch television and film.
- Read and discuss Dutch literature (simplified).
- Understand Dutch media and press.
- Discuss movies, books, and media intelligently.
- Recognize cultural references in media.
- Develop media literacy in Dutch.

**Requires Grammar:**
- All B1 grammar, applied to media discussion
- Literary and formal structures
- Reported speech for character and plot discussion
- Complex descriptive structures

**Requires Vocabulary:**
- Media vocabulary (film, serie, roman, lied, kunstenaar, karakter, plot, thema, toon, stijl)
- Literary vocabulary (hoofdstuk, scène, dialoog, verteller, perspectief, motief)
- Film and entertainment vocabulary (regie, acteur, regisseur, productie, geluidseffecten, ondertiteling)
- Evaluative vocabulary (grappig, dramatisch, spannend, vermoeiend, meesterwerk, afschuwelijk)

**Requires Pronunciation:**
- Listening comprehension of native Dutch speakers in films/shows
- Understanding different accents and dialects

**Requires Cultural Knowledge:**
- Popular Dutch films, television, and literature
- Dutch celebrities and media figures
- Dutch sense of humor and comedic traditions
- Significant Dutch cultural works

**Assessment:**
- Watch a Dutch film or TV episode and discuss plot, characters, themes, and their opinions on the work (6-8 minutes).

---

### Competency: Specialized/Professional Topics

**CEFR Level:** B1
**Units:** Technical Vocabulary (domain-specific), Industry-Specific Communication, Specialized Discussions

**The learner can:**
- Discuss specialized topics within their field or interest.
- Understand technical vocabulary in their domain.
- Communicate professionally in their field.
- Read specialized texts relevant to their work or studies.
- Explain complex topics in their area of expertise.

**Requires Grammar:**
- All B1-level grammar applied to specialized contexts
- Technical and formal register
- Complex sentences for technical explanation
- Passive voice (common in technical contexts)

**Requires Vocabulary:**
- Specialized vocabulary for learner's field (e.g., IT, medicine, law, engineering, business)
- Technical terms and concepts
- Industry-specific phrases and expressions

**Requires Pronunciation:**
- Clear pronunciation of technical terms
- Native-like delivery for professional contexts

**Requires Cultural Knowledge:**
- Professional norms and conventions in the learner's field in Dutch contexts
- Dutch industry practices and standards

**Assessment:**
- Explain a specialized topic or process related to the learner's field, answer questions about it, and discuss current developments in the field (5-7 minutes).

---

### Competency: Understanding Formal and Legal Language

**CEFR Level:** B1
**Units:** Legal Vocabulary, Administrative Language, Formal Procedures, Contracts and Documents

**The learner can:**
- Understand basic legal and administrative vocabulary.
- Read and comprehend formal documents.
- Navigate administrative procedures using Dutch.
- Understand rights and obligations in formal contexts.
- Communicate with government and legal institutions.
- Ask for clarification in formal contexts.

**Requires Grammar:**
- Formal register and complex structures
- Passive voice (very common in legal language)
- Modal verbs for obligation and rights
- Conditional structures for legal scenarios
- Complex subordination

**Requires Vocabulary:**
- Legal vocabulary (contract, clausule, artikel, bepaling, verplichting, recht, aansprakelijkheid, erfenis, eigendom)
- Administrative vocabulary (formulier, aanvraag, procedure, termijn, besluit, beroep, registratie, verzekering)
- Rights and obligation language (gerechtigde, schuldenaar, belastingplichtige, eigenaar)

**Requires Pronunciation:**
- Not directly applicable (reading skill)
- Correct understanding of formal language nuances

**Requires Cultural Knowledge:**
- Dutch legal system basics
- Common administrative procedures in the Netherlands
- Dutch social insurance and government systems
- Rights and obligations for residents and citizens

**Assessment:**
- Read a simplified legal document or contract and answer questions about obligations and rights, or navigate a common Dutch administrative procedure with guidance.

---

### Competency: Advanced Listening Comprehension

**CEFR Level:** B1
**Units:** Native Speech Comprehension, Podcast and Radio, Accent Variation, Specialized Audio Content

**The learner can:**
- Understand native-speed conversations on familiar topics.
- Listen to and comprehend Dutch podcasts and radio.
- Understand different Dutch accents and dialects.
- Follow lengthy spoken explanations.
- Note-take during lectures or presentations.
- Understand implied meaning in speech.

**Requires Grammar:**
- Understanding all B1-level grammar in spoken form
- Recognition of colloquial structures and informal speech
- Understanding of filler words and natural speech patterns

**Requires Vocabulary:**
- Advanced vocabulary for spoken contexts
- Colloquial expressions and slang
- Filler words (eigenlijk, gewoon, zeg maar, nou ja, weet je)
- Context-specific vocabulary

**Requires Pronunciation:**
- Passive recognition of all Dutch sounds and pronunciation variations
- Understanding connected speech and reductions
- Recognition of stress and intonation patterns

**Requires Cultural Knowledge:**
- Dutch speech patterns and styles
- Regional accents and dialects in the Netherlands
- Cultural references in spoken Dutch
- Contemporary Dutch colloquialisms

**Assessment:**
- Listen to 10-15 minutes of native Dutch speech (podcast, news, documentary, interview) and demonstrate comprehension through note-taking or answering detailed questions.

---

## Verification Checklist

Before a competency is marked complete, verify:

- [ ] It maps to real-world can-do statements, not abstract grammar topics.
- [ ] Every required grammar concept appears (or will appear) in `docs/GRAMMAR_MAP.md` at or before
      this competency's CEFR level.
- [ ] Every required vocabulary topic appears (or will appear) in `docs/VOCABULARY_ROADMAP.md` at or
      before this competency's CEFR level.
- [ ] The assessment describes a realistic, observable task (not a multiple-choice quiz alone).
- [ ] Every grammar/vocabulary item in `docs/CEFR_GUIDE.md` for this level is covered by at least one
      competency.
- [ ] No competency depends on a competency from a later CEFR level.

---

## Next Steps

1. Draft the full list of A0 competencies covering the entire A0 scope in `docs/CEFR_GUIDE.md`.
2. Repeat for A1, A2, and B1.
3. For each competency, name its units (these become the folders lessons live in).
4. Cross-check total grammar/vocabulary coverage against `docs/CEFR_GUIDE.md` -- nothing in the scope
   should be missing, and nothing outside the scope should appear.
5. Once competencies and units are stable, generate `docs/CURRICULUM.md` (lesson-level detail) and
   `docs/GRAMMAR_MAP.md` / `docs/VOCABULARY_ROADMAP.md` (concept-level detail) from this map.
