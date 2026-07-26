# Flashcard Application Plan

**Status:** Planned
**Owner:** Dutch B1 Curriculum project
**Target:** Local-first vocabulary practice on desktop and iPhone

## Purpose

Build a flashcard application for practicing the vocabulary in this repository. The application must
use the existing vocabulary CSV files as its source of truth, automatically incorporate new words as
they are researched, and keep personal review progress separate from educational content.

The first release is local-first. It will run in the existing VitePress site, work as a responsive
web application, and be installable on an iPhone through Safari's **Add to Home Screen** feature.

## Goals

- Practice vocabulary through active recall and spaced repetition.
- Select verbs, nouns, adjectives, other words, or a mixture.
- Practice specific grammatical forms, including verb tenses and noun articles.
- Mark cards as `Again`, `Hard`, `Good`, or `Confident`.
- Show weak and due cards more frequently without permanently hiding confident cards.
- Automatically discover new vocabulary from the CSV files after a rebuild.
- Work offline after the application has been loaded or installed.
- Support desktop and iPhone screen sizes and touch interaction.
- Allow review data to be exported and imported as a backup.

## Non-Goals For The First Release

The following are deliberately deferred:

- User accounts
- Cloud synchronization between devices
- AI-generated vocabulary or sentences
- Automatic speech recognition
- Audio generation
- Social or colleague-facing features
- Typed-answer grading
- Push notifications

These features may be added later without changing the core vocabulary and review-data separation.

## Existing Repository Constraints

The repository is currently a VitePress documentation site. It has no separate application framework.
The implementation should therefore extend the existing VitePress/Vue setup rather than introduce a
second frontend application.

Vocabulary is stored in four authoritative files:

- `shared/vocabulary/nouns.csv`
- `shared/vocabulary/verbs.csv`
- `shared/vocabulary/adjectives.csv`
- `shared/vocabulary/other.csv`

The schemas contain part-of-speech-specific fields such as noun articles and plurals, verb forms and
auxiliaries, and adjective comparison forms. Some files may be empty apart from their header while
curriculum research is still in progress. The application must handle that state correctly.

The VitePress site is published under the `/dutch/` base path. The flashcard route must work at:

```text
https://metekahyagil.github.io/dutch/flashcards/
```

## Architectural Separation

The application will use three distinct layers:

```text
Vocabulary CSV files
        |
        v
Build-time vocabulary catalog
        |
        v
Generated card definitions
        |
        v
Flashcard interface
        |
        v
IndexedDB review state
```

### Educational Source Data

The four CSV files remain the single source of truth for vocabulary. The flashcard application must
not write review results, UI settings, or generated data back into those files.

### Generated Catalog

A build-time script will parse the CSV files and generate a normalized catalog consumed by the
application. This catalog may be emitted as JSON or imported through the Vite build pipeline, but it
must always be derived from the CSV files.

Running the build after adding a vocabulary row must be sufficient for the new word to become
available. Adding a word must not require editing application source code or a manually maintained
card list.

### Personal Review State

Review history will be stored locally in IndexedDB. It must remain separate from the generated catalog
so that vocabulary content can be corrected or expanded without overwriting personal progress.

## Dynamic Vocabulary Requirements

The catalog builder must:

- Read all four vocabulary CSV files on every build.
- Preserve the source file and row metadata for each vocabulary item.
- Normalize part-of-speech-specific fields into a common item structure.
- Ignore blank rows.
- Handle empty files that contain only a header.
- Treat `--` as unavailable data where the schema uses it as a placeholder.
- Validate required headers and report malformed rows clearly.
- Preserve commas and quoted values in example sentences and notes.
- Expose lesson, CEFR level, frequency rank, topic, and source file metadata.

The generated catalog must not assume that all future rows have the same completeness as current rows.
Cards should be generated only for fields that contain usable values.

## Stable Identifiers

Every generated card must have a stable identifier. Review state will be keyed by this identifier.
Identifiers should be based on the vocabulary type, lemma, and skill being tested rather than on the
CSV row number.

Examples:

```text
noun:huis:meaning:nl-en
noun:huis:article
noun:huis:plural
verb:gaan:meaning:nl-en
verb:gaan:present:ik
verb:gaan:past:plural
verb:gaan:perfect
adjective:groot:comparative
```

The identifier strategy must be documented and tested before review data is released for regular use.
If a word is corrected in place, its existing identifiers should retain their review history. If a
lemma is intentionally renamed, the migration behavior must be explicit rather than silently losing
the old state.

## Card Model

The application should model a vocabulary item separately from the cards generated from it.

### Vocabulary Item

A normalized item should include:

- Stable item identifier
- Dutch lemma
- English meaning
- Part of speech
- Pronunciation
- CEFR level
- Lesson introduced
- Frequency rank
- Topic
- Example sentence
- Example translation
- Notes
- Part-of-speech-specific forms

### Generated Card

Each card should include:

- Stable card identifier
- Vocabulary item identifier
- Card type
- Prompt direction
- Prompt data
- Answer data
- Relevant metadata for filtering

The card definition is generated and can change when source data changes. The review state is local
and must not be embedded in the card definition.

## Initial Card Types

### Nouns

Generate cards for available fields:

- Dutch to English meaning
- English to Dutch meaning
- Article: `de` or `het`
- Plural
- Diminutive

Noun cards should display the article with the noun where that supports the learning objective. The
article must not be treated as optional vocabulary metadata.

### Verbs

Generate cards for available fields:

- Dutch to English meaning
- English to Dutch meaning
- Present tense for `ik`
- Present tense for `jij/u/hij/zij/het`
- Present tense for `wij/jullie/zij`
- Simple past singular
- Simple past plural
- Auxiliary verb
- Past participle and perfect-tense construction

The UI should allow verb cards to be filtered by tense and subject grouping. Exceptions recorded in
the source `Notes` field must be shown on the answer side.

### Adjectives

Generate cards for available fields:

- Dutch to English meaning
- English to Dutch meaning
- Comparative
- Superlative
- Inflected form

### Other Words

Generate cards for available fields:

- Dutch to English meaning
- English to Dutch meaning
- Part of speech
- Example usage

## Study Configuration

Before starting a session, the learner should be able to choose:

- Part of speech: verbs, nouns, adjectives, other, or mixed
- CEFR level
- Lesson or lesson range
- Topic
- Noun article: `de`, `het`, or both
- Verb tense or form
- Verb subject group
- Card type
- Direction: Dutch to English, English to Dutch, or mixed
- Number of cards
- Queue mode: due, new, weak, confident review, or mixed

Filters should combine predictably. A mixed session should balance available card types so that one
verb with many forms does not dominate a session of otherwise varied vocabulary.

When a filter produces no cards, the interface should explain why and offer a way to broaden the
selection.

## Review Experience

The first release will use flip-and-self-rate interaction rather than typed answers.

### Card Front

The front should show the prompt, prompt direction, and enough context to identify the task without
revealing the answer.

Examples:

- `___ huis` with the task "Choose the article"
- `to go` with the task "Give the Dutch verb"
- `gaan` with the task "Past tense, plural"
- `groot` with the task "Give the comparative"

### Card Back

The back should show:

- Correct answer
- Dutch lemma and English meaning
- Pronunciation where available
- Example sentence and translation
- Relevant grammatical forms
- Source lesson and topic
- Notes and exceptions

### Ratings

The learner should choose one of four ratings:

- `Again` -- I did not know it.
- `Hard` -- I knew it slowly or with uncertainty.
- `Good` -- I knew it correctly.
- `Confident` -- I could produce it immediately.

Ratings must be available as large touch controls on iPhone and as keyboard-accessible controls on
desktop.

## Scheduling Model

Each card has its own schedule. Knowing the meaning of `huis` does not automatically mean knowing its
article, and knowing a verb's meaning does not imply knowing every tense.

The schedule should track at least:

- Card identifier
- Due timestamp
- Interval
- Difficulty
- Repetition count
- Lapse count
- Last rating
- Last reviewed timestamp
- Suspended status
- Scheduler version

The default queue order should be:

1. Due cards
2. Failed or weak cards
3. New cards
4. Optional confident-card review

`Confident` should increase the interval substantially but must not permanently hide a card. Mature
cards must return for occasional maintenance review.

The implementation should use a proven spaced-repetition algorithm, preferably FSRS, behind a small
application adapter. The UI must not depend directly on the scheduler library so the algorithm can be
changed or upgraded later.

## Local Storage And Backup

IndexedDB will store:

- Review state
- User study preferences
- Session history or summary data
- Suspended cards
- Storage schema version

The app must provide:

- Export of review data and settings as JSON
- Import of a previously exported JSON backup
- Validation before importing
- Clear local progress with confirmation
- A visible indication of the last backup or export

Export and import must be versioned so future schema changes can migrate old backups.

The UI should explain that browser storage is device-specific and that private browsing, clearing site
data, or browser storage eviction can remove local progress. Backups are therefore a required feature,
not an optional convenience.

## iPhone And PWA Requirements

The application will be implemented as a responsive Progressive Web App.

### Installation

On iPhone, the supported installation path is Safari:

```text
Share -> Add to Home Screen
```

The hosted application must use HTTPS. GitHub Pages provides the required HTTPS deployment for the
public version.

### Mobile Interface

The interface must support:

- Touch-first card flipping
- Large rating buttons
- Comfortable text size
- No hover-only interactions
- Portrait and landscape layouts
- Safe-area padding for iPhone notches and home indicators
- Reduced accidental taps
- Visible progress during a session
- Accessible focus and keyboard behavior where supported

### Offline Behavior

The service worker should cache:

- The application shell
- The generated vocabulary catalog
- Required styles, icons, and assets

The app should show an offline indicator and continue to support existing cards and local review
actions without a network connection.

When a new catalog is published, the application should update its cached assets without discarding
IndexedDB review state. A stale catalog must not prevent review of already cached cards.

### Local Development

Desktop local development will use the existing VitePress development server. iPhone testing should
primarily use the hosted HTTPS version. Local-network testing may be added later, but it is not a
requirement for the first implementation.

## Proposed Project Changes

The exact filenames may change during implementation, but the expected responsibilities are:

```text
scripts/build-vocabulary-catalog.js
docs/flashcards/index.md
docs/flashcards/FlashcardApp.vue
docs/flashcards/scheduler.js
docs/flashcards/reviewStore.js
docs/flashcards/flashcards.css
docs/flashcards/manifest.webmanifest
docs/flashcards/service-worker.js
```

The VitePress configuration will add a top-level Flashcards navigation entry and any required route or
asset configuration. Generated site output must continue to be produced only through the existing
publishing workflow. Generated HTML and assets must not be hand-edited.

## Implementation Phases

### Phase 1 -- Vocabulary Pipeline

- Implement CSV parsing for all four source files.
- Normalize vocabulary rows.
- Generate card definitions for available fields.
- Add stable card identifiers.
- Add validation for headers and malformed data.
- Handle empty files and missing optional values.
- Verify that adding a CSV row creates cards without application-code changes.

### Phase 2 -- Flashcard Vertical Slice

- Add the `/flashcards/` route.
- Display one generated card.
- Implement flip behavior.
- Display answer details and source metadata.
- Add `Again`, `Hard`, `Good`, and `Confident` controls.
- Add a basic session queue.

The phase is complete when a learner can select current vocabulary, flip cards, rate them, and finish
a session.

### Phase 3 -- Review Persistence And Scheduling

- Add IndexedDB storage.
- Add the scheduler adapter.
- Save ratings and due dates.
- Prioritize due and weak cards.
- Add new-card handling.
- Add reload persistence.
- Add export and import.
- Add schema versioning and migration tests.

### Phase 4 -- Filters And Study Modes

- Add part-of-speech filters.
- Add CEFR, lesson, and topic filters.
- Add `de` and `het` filters.
- Add verb tense and subject filters.
- Add direction and card-type filters.
- Add mixed-session balancing.
- Add weak-card and confident-card modes.
- Add session size and progress controls.

### Phase 5 -- Responsive PWA

- Add responsive mobile styling.
- Add touch-first controls.
- Add safe-area support.
- Add web manifest and app icons.
- Add service worker and offline caching.
- Add offline status and update handling.
- Test Safari Home Screen installation.

### Phase 6 -- Verification And Publishing

- Test all current vocabulary files, including the empty verbs file.
- Test generated cards for every available part of speech.
- Test new vocabulary ingestion.
- Test stable IDs after source-data edits.
- Test due, weak, new, and confident queues.
- Test filter combinations and mixed sessions.
- Test reload persistence.
- Test export/import.
- Test a production build under `/dutch/flashcards/`.
- Test desktop and mobile layouts.
- Test offline review on an iPhone.
- Run the existing documentation build and publishing workflow.

## Acceptance Criteria

The first release is acceptable when:

- The app is reachable at `/dutch/flashcards/` in the production site.
- New CSV vocabulary appears after rebuilding without editing app code.
- Empty or incomplete vocabulary files do not break the build or app.
- Noun articles can be practiced independently from noun meanings.
- Verb forms can be practiced by tense and subject group.
- Mixed sessions do not overrepresent one vocabulary item because it has many generated cards.
- Ratings change future card ordering.
- Confident cards return for maintenance review.
- Review progress survives closing and reopening the browser.
- Exported progress can be imported successfully.
- The app can be installed on an iPhone from Safari.
- Installed users can review cached cards without a network connection.
- Publishing new vocabulary does not reset existing review progress.

## Future Synchronization Option

The first release intentionally keeps progress local to each device. Desktop and iPhone will therefore
have separate review histories.

If cross-device progress becomes necessary, add synchronization as a separate phase:

- Introduce authentication.
- Store review state in a backend database.
- Retain IndexedDB as an offline cache.
- Define conflict resolution for reviews made on multiple devices.
- Encrypt or minimize personal data where appropriate.

The local-first storage interface should be designed so this future sync layer can be added without
changing the flashcard UI or card-generation pipeline.
