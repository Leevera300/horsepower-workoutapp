# Horsepower issue drafts

39 issues. D1–D38 were created as #1–#38 on 2026-10-23 (`D<n>` = `#<n>`). D39 and D40 were created as #39 and #40 on 2026-11-12.

Revision 2026-11-12 (applied to the issues and board the same day):
- Start moved to 2026-11-30 (new computer first); every issue now starts after its last dependency ends
- Stat scores use the last 7 days, not the calendar week (D7, D8), so nothing resets on Monday
- D31 dropped: medals are cosmetic, the ledger syncs like workouts (D30). Close #31 as not planned
- New: D39 developer accounts and signing, D40 store release; account deletion added to D29
- Sync-ready from schema v1: UUID ids, `updated_at`, `deleted_at`, workout calendar date, record context (D5, D12)
- Dependency fixes: D25 (+D22), D29 (+D39), D32 (D30), D36 (+D39)

Re-sequenced 2026-11-12, workout logger first (applied the same day):
- Order: setup (D1–D4) → workout logger (D5, D6, D12, D13, D14, D15, D17) → stats and records (D7–D11, D16, D18–D21) → game layer and remaining screens (D22–D27) → accounts and sync → leaderboards → premium and release → extras
- A step starts only after the previous step ends
- D12 creates the tables only; D16 wires saving a workout to the domain rules and owns the end-to-end checks (S → M)
- D17 depends on D14 only
- Milestones renamed to the steps: P0 Setup, P1 Workout logger, P2 Stats & records, P3 Game layer & screens, P4 Accounts & sync, P5 Leaderboards, P6 Premium & release, P7 Extras

| D | Milestone | Type | Pri | Size | Start → Target | Title | Depends on |
|---|---|---|---|---|---|---|---|
| D1 | P0 Setup | task | High | S | 11-30 → 12-01 | Flutter toolchain install |  |
| D2 | P0 Setup | task | High | M | 12-02 → 12-04 | Flutter project scaffold and folder layout | D1 |
| D3 | P0 Setup | feature | High | S | 12-05 → 12-06 | Routing shell with bottom tabs and onboarding gate | D2 |
| D4 | P0 Setup | feature | High | S | 12-07 → 12-09 | English/Korean localization setup | D3 |
| D5 | P1 Workout logger | task | High | M | 12-10 → 12-14 | Domain models | D2 |
| D6 | P1 Workout logger | task | Medium | S | 12-15 → 12-17 | Exercise catalog with stable IDs | D5, D4 |
| D7 | P2 Stats & records | task | High | S | 01-27 → 01-30 | Week/month windows and streak helpers | D5 |
| D8 | P2 Stats & records | feature | High | L | 01-31 → 02-09 | Stat formulas port with tests | D7, D6 |
| D9 | P2 Stats & records | feature | High | M | 02-10 → 02-14 | Personal record detection | D8 |
| D10 | P2 Stats & records | feature | Medium | S | 02-15 → 02-18 | Medal ledger and MVP medal rules | D9 |
| D11 | P2 Stats & records | feature | Low | S | 01-31 → 02-01 | Rule-based workout suggestion | D7, D6 |
| D12 | P1 Workout logger | task | High | L | 12-18 → 12-28 | drift database and repositories | D5, D6 |
| D13 | P1 Workout logger | feature | High | M | 12-29 → 01-04 | Welcome, language select and profile setup screens | D12 |
| D14 | P1 Workout logger | feature | High | L | 01-05 → 01-18 | Add workout: per-set strength logging | D12, D13 |
| D15 | P1 Workout logger | feature | High | S | 01-19 → 01-22 | Manual run entry with pace | D14 |
| D16 | P2 Stats & records | feature | High | M | 02-19 → 02-25 | Workout summary screen | D14, D10, D17 |
| D17 | P1 Workout logger | feature | Medium | M | 01-19 → 01-26 | Workout log list with edit and delete | D14 |
| D18 | P2 Stats & records | feature | High | M | 02-26 → 03-04 | Dashboard screen | D16, D11 |
| D19 | P2 Stats & records | feature | Medium | M | 03-05 → 03-11 | Stats detail screen with progress chart | D18, D12 |
| D20 | P2 Stats & records | feature | Medium | S | 03-05 → 03-08 | Records screen | D9, D18 |
| D21 | P2 Stats & records | feature | Low | S | 03-05 → 03-07 | Muscle map screen (grid) | D18 |
| D22 | P3 Game layer & screens | feature | Medium | M | 03-12 → 03-19 | Character screen and medal shop | D10, D18 |
| D23 | P3 Game layer & screens | feature | Medium | M | 03-12 → 03-19 | Mock rankings with all filters | D20, D13 |
| D24 | P3 Game layer & screens | feature | Low | S | 03-12 → 03-14 | AI Coach Preview screen | D11, D18 |
| D25 | P3 Game layer & screens | feature | Low | S | 03-20 → 03-22 | Settings screen | D13, D22 |
| D26 | P3 Game layer & screens | feature | Low | M | 03-12 → 03-16 | Weekly and milestone medal rules | D10, D7 |
| D27 | P3 Game layer & screens | task | High | S | 03-23 → 03-26 | Spec parity check and Expo removal | D18, D19, D20, D21, D22, D23, D24, D25, D15, D17, D26 |
| D28 | P4 Accounts & sync | task | High | L | 03-27 → 04-05 | Supabase project, schema and row-level security | D27 |
| D29 | P4 Accounts & sync | feature | High | M | 04-06 → 04-13 | Sign in with Apple and Google | D28, D39 |
| D30 | P4 Accounts & sync | feature | High | L | 04-14 → 04-24 | Workout sync via outbox | D29 |
| D32 | P5 Leaderboards | feature | High | L | 04-25 → 05-08 | Real leaderboards | D30 |
| D33 | P5 Leaderboards | feature | Medium | M | 05-09 → 05-16 | Plausibility checks and flagged records | D32 |
| D34 | P5 Leaderboards | task | Low | S | 05-17 → 05-24 | Decide proof requirements for top ranks | D33 |
| D35 | P6 Premium & release | feature | Medium | L | 05-25 → 06-14 | AI coach via LLM | D30, D24 |
| D36 | P6 Premium & release | feature | Medium | L | 06-15 → 07-05 | Premium subscription via RevenueCat | D35, D29, D39 |
| D37 | P7 Extras | feature | Low | L | 07-16 → 08-05 | GPS run tracking | D27 |
| D38 | P7 Extras | feature | Low | M | 07-16 → 07-29 | Body diagram muscle map | D21 |
| D39 | P4 Accounts & sync | task | High | S | 03-27 → 03-29 | Developer accounts, bundle IDs and signing | D27 |
| D40 | P6 Premium & release | task | Medium | M | 07-06 → 07-15 | Store release | D36, D29 |

---

## D1 · Flutter toolchain install
`P0 Setup` · `type:task` · High · S · 2026-11-30 → 2026-12-01

- Rewrite target switches from Expo to Flutter; set up on the new computer (no Flutter, full Xcode, CocoaPods or Android SDK yet)
- Flutter SDK (stable), Xcode from the App Store, CocoaPods, Android Studio + one emulator image
- Local machine only, no repo change

## Done when
- [ ] `flutter doctor` shows no errors for iOS and Android
- [ ] Counter sample app runs on the iOS simulator and the Android emulator

---

## D2 · Flutter project scaffold and folder layout
`P0 Setup` · `type:task` · High · M · 2026-12-02 → 2026-12-04

- Start of the Flutter rewrite; Expo code kept on `master` as reference until parity (D27)
- `flutter create` on a new `dev` branch; package `horsepower`, iOS + Android only
- Folders: `lib/app`, `lib/l10n`, `lib/domain`, `lib/data`, `lib/features/<feature>`, `lib/shared`, `test/domain`
- Packages: riverpod, go_router, freezed, json_serializable, drift, build_runner, very_good_analysis
- Dark theme tokens ported from `src/constants/theme.js` (background, surface, accent, medal gold)
- GitHub Actions: `flutter analyze` + `flutter test` on PRs into `dev` (public repo, free minutes)
- `PLAN.md` with the phase plan and branch rules (feature branch → PR into `dev` → `master` on release)

## Done when
- [ ] `flutter analyze` clean, `flutter test` passes on the empty project
- [ ] `dart run build_runner build` works

Depends on: D1

---

## D3 · Routing shell with bottom tabs and onboarding gate
`P0 Setup` · `type:feature` · High · S · 2026-12-05 → 2026-12-06

- go_router with a shell route for 5 tabs: Dashboard, Log, Stats, Rankings, Character
- Onboarding stack (Welcome → Language → Profile) shown until a profile exists
- Stats tab = Stats detail for Overall, as in Expo (no separate Stats screen)
- Pushed routes: Add workout, Workout summary, Stats detail, Records, Muscle map, Medal shop, AI coach, Settings
- Placeholder screens only; real screens in P2

## Done when
- [ ] Every one of the 15 spec screens reachable on the simulator
- [ ] Tab state kept when switching tabs

Depends on: D2

---

## D4 · English/Korean localization setup
`P0 Setup` · `type:feature` · High · S · 2026-12-07 → 2026-12-09

- Spec rule: all visible text from translation files, English + Korean from day one
- `flutter_localizations` + gen-l10n with `app_en.arb` / `app_ko.arb`
- Port keys from `src/i18n/en.js` and `ko.js`; placeholders for sentences with numbers (points to next division, medals earned)
- Language toggle stored locally; first launch follows device locale, falls back to English
- ⚠️ Expo build has hard-coded English strings ("No record yet", "No workouts yet", "None yet") and English-only medal reasons, item names and coach text; do not carry those over

## Done when
- [ ] Switching language updates every placeholder screen without restart
- [ ] No string literal in widgets outside ARB lookups (checked by grep in review)

Depends on: D3

---

## D5 · Domain models
`P1 Workout logger` · `type:task` · High · M · 2026-12-10 → 2026-12-14

- Typed models replacing the plain objects in `AppContext.js`; pure Dart, no Flutter imports
- freezed models: Profile, Exercise, Workout, WorkoutExercise, WorkoutSet, PersonalRecord, MedalTransaction, CharacterItem, UserCharacter, UserStats
- Enums: MuscleGroup (11 from spec), Division, Gender, WeightClass, AgeGroup, ExerciseTracking (weightReps / distanceTime / bodyweight)
- WeightClass and AgeGroup derived from profile weight and age
- MedalTransaction uses a reason code + params + optional period key (e.g. `2026-W49`), not an English sentence
- UUID ids on every model, so sync (D30) needs no re-keying
- Workout stores its calendar date (from the date picker), not only a timestamp; weeks and streaks read that date
- PersonalRecord stores bodyweight, weight class and age group at record time (needed by D32)

## Done when
- [ ] Models serialize to/from JSON round-trip in tests
- [ ] Weight class / age group boundaries tested (e.g. 50.0 kg → 50 to 60kg, age 18 → 18 to 24)

Depends on: D2

---

## D6 · Exercise catalog with stable IDs
`P1 Workout logger` · `type:task` · Medium · S · 2026-12-15 → 2026-12-17

- Current code matches exercises by English name (`name.includes("bench")`), which breaks Korean names and variants
- Seed catalog keyed by ID (`bench_press`, `incline_db_press`, …) with category, tracking type, muscles
- Spec list + Incline Dumbbell Press (spec example), Overhead Press, Barbell Row, Lat Pulldown, Romanian Deadlift, Calf Raise, Plank, Cycling
- Names come from ARB (`exercise_bench_press`)
- Strength-stat lifts flagged on the catalog entry, not by name matching

## Done when
- [ ] Muscle detection test for each spec example (Bench → chest/triceps/shoulders, Running → cardio/quads/hamstrings/calves, …)

Depends on: D5, D4

---

## D7 · Week/month windows and streak helpers
`P2 Stats & records` · `type:task` · High · S · 2027-01-27 → 2027-01-30

- Expo build calls all-time data "this week" (muscle map, dashboard, coach, weekly distance)
- Calendar week Mon–Sun and calendar month, from the workout's stored calendar date (medals, "this week" lists, weekly-distance record)
- Rolling windows: last 7 days and last 30 days (stat scores, D8)
- Helpers: workouts in week/month, workout days per week, current streak, longest streak (consecutive days)
- Injectable clock for tests

## Done when
- [ ] Tests across week boundary, month boundary and rolling 7/30 days
- [ ] Changing the device time zone does not move a logged workout to another day

Depends on: D5

---

## D8 · Stat formulas port with tests
`P2 Stats & records` · `type:feature` · High · L · 2027-01-31 → 2027-02-09

- Port of `src/utils/stats.js` to `lib/domain/stats/`, fixing what the Expo version skipped
- Strength: raw bench/squat/deadlift bests (keep current weights; bench 120 / squat 160 / deadlift 190 → 89)
- Cardio: fastest mile, fastest 5K and average pace (Expo version uses best pace only)
- Endurance: last 7 days' distance, longest run, total cardio duration
- Consistency: workout days in the last 7 days, current streak, workouts in the last 30 days (Expo version counts all-time days)
- Volume: total sets, reps and weight lifted, plus the last 7 days' volume (Expo version uses weight only)
- Muscle balance: evenness across the 11 groups over the last 7 days, not just coverage, so chest+arms only stays low
- Rolling windows instead of the calendar week, so scores and divisions don't drop every Monday
- Overall: 30/20/15/15/10/10 weights; divisions at fixed thresholds, uncapped (180 stays Legend)
- ⚠️ Exact coefficients for Cardio/Endurance/Consistency/Volume/Balance to be tuned; tests pin the shape (monotonic, uncapped)

## Done when
- [ ] All 14 spec utility functions exist with unit tests
- [ ] Division boundary tests for every threshold
- [ ] Same history scores the same on Sunday and Monday

Depends on: D7, D6

---

## D9 · Personal record detection
`P2 Stats & records` · `type:feature` · High · M · 2027-02-10 → 2027-02-14

- Expo build never produces fastest mile, fastest 5K, weekly distance or streak records, and any run sets a pace record
- Records: bench, squat, deadlift, powerlifting total, fastest mile, fastest 5K, longest run, most weekly distance, longest streak, most weekly volume
- These 10 records are also the leaderboard categories (D23, D32); there is no average-pace record, a short jog could set it
- Mile/5K only from runs at least that long; time estimated from average pace for longer runs (marked as estimate)
- Each record keeps the previous value and the source workout/set
- Recalculation from full history (needed for edit/delete in D17)

## Done when
- [ ] Tests: 200 m jog sets no pace record; 10 km run yields a 5K estimate; editing a workout down removes its PR

Depends on: D8

---

## D10 · Medal ledger and MVP medal rules
`P2 Stats & records` · `type:feature` · Medium · S · 2027-02-15 → 2027-02-18

- Append-only ledger; balance = sum of entries, never a stored counter
- MVP rules from spec: +20 per workout, +10 for 3+ exercises, +20 when a PR is set
- Shop purchases as negative entries; reason codes translated in the UI
- Entry unique on reason + period key when a period key is set, so D26 needs no schema change
- Deleting a workout writes a reversal entry instead of rewriting history

## Done when
- [ ] Tests for each rule, purchase with insufficient balance rejected, delete reversal

Depends on: D9

---

## D11 · Rule-based workout suggestion
`P2 Stats & records` · `type:feature` · Low · S · 2027-01-31 → 2027-02-01

- Port of `getSuggestedWorkoutFocus` over this week's muscles (D7)
- Returns missed groups + a focus enum (leg / pull / push / cardio / lower body / balanced) + catalog exercise IDs, so text is translatable
- Adds the spec rule missing from Expo: upper body only → lower body day

## Done when
- [ ] One test per spec rule

Depends on: D7, D6

---

## D12 · drift database and repositories
`P1 Workout logger` · `type:task` · High · L · 2026-12-18 → 2026-12-28

- Replaces the single AsyncStorage JSON blob that is rewritten on every change
- Tables: profile, exercises (seeded), workouts, workout_exercises, sets, personal_records, medal_ledger, character_items, user_character, stat_snapshots
- All tables created here; records, ledger and `stat_snapshots` are first written in D16
- UUID primary keys, `updated_at` and `deleted_at` (soft delete) on user tables, so sync (D30) needs no migration
- Repositories + Riverpod providers exposing live queries; schema version 1 with migration test
- No import from the Expo app (test data only)

## Done when
- [ ] Repository tests on an in-memory database: save, edit, soft-delete and read back a workout

Depends on: D5, D6

---

## D13 · Welcome, language select and profile setup screens
`P1 Workout logger` · `type:feature` · High · M · 2026-12-29 → 2027-01-04

- Expo profile form is free text for gender, goal and equipment, so rankings can't filter on it
- Pickers: gender, goal, training experience; multi-select equipment; numeric age, height, weight with validation
- Shows derived weight class and age group before saving
- Branding: Horsepower / 馬力 / 마력

## Done when
- [ ] First launch → profile saved → lands on Dashboard, in both languages

Depends on: D12

---

## D14 · Add workout: per-set strength logging
`P1 Workout logger` · `type:feature` · High · L · 2027-01-05 → 2027-01-18

- Expo version forces identical sets, so the spec's 80×10 / 85×8 / 90×5 can't be entered
- Workout name, date picker, notes; add/remove/reorder exercises from a searchable catalog
- Per-set weight and reps, add/remove sets, copy previous set
- Mixed workouts allowed (strength + run in one session)

## Done when
- [ ] Spec "Push Day" example (bench 3 sets, incline DB 2, pushdown 2) can be entered exactly
- [ ] Volume shown live (80 kg × 10 × 3 = 2,400 kg)

Depends on: D12, D13

---

## D15 · Manual run entry with pace
`P1 Workout logger` · `type:feature` · High · S · 2027-01-19 → 2027-01-22

- Distance (km) + duration (h:mm:ss) + notes; GPS stays in P5
- Live average pace as m:ss/km (spec example 5 km / 30 min → 6:00/km)
- Feeds weekly distance, longest run, mile/5K records

## Done when
- [ ] Spec "Easy Run" example shows 6:00/km and appears in Endurance/Cardio inputs

Depends on: D14

---

## D16 · Workout summary screen
`P2 Stats & records` · `type:feature` · High · M · 2027-02-19 → 2027-02-25

- Wires saving, editing and deleting a workout to the domain rules: records (D9), medal entries (D10) and a `stat_snapshots` row are stored
- After saving: muscles worked, total volume, medals earned with reasons, new PRs (old → new), stat changes (before → after, division changes highlighted)

## Done when
- [ ] Shows a stat delta and a PR after logging the Push Day example on a fresh profile
- [ ] Logging a workout and reading back stats/records works end to end in a test
- [ ] Deleting the workout that set a PR restores the previous record and medal balance

Depends on: D14, D10, D17

---

## D17 · Workout log list with edit and delete
`P1 Workout logger` · `type:feature` · Medium · M · 2027-01-19 → 2027-01-26

- Expo build can't edit or delete a workout
- List grouped by week; detail view; edit reopens the add-workout form
- Edit and delete go through the repository (soft delete); recalculating stats, records and medals is wired in D16

## Done when
- [ ] An edited workout shows its new sets in the list; a deleted one is gone after restart

Depends on: D14

---

## D18 · Dashboard screen
`P2 Stats & records` · `type:feature` · High · M · 2027-02-26 → 2027-03-04

- Spec contents: app name, medal balance, Overall + division, 6 stat cards, recent workout, muscles trained this week, missed groups, suggested focus, character preview
- Settings from a profile icon in the header
- Stat cards open Stats detail

## Done when
- [ ] Every element in the spec's Dashboard list present, "this week" data only

Depends on: D16, D11

---

## D19 · Stats detail screen with progress chart
`P2 Stats & records` · `type:feature` · Medium · M · 2027-03-05 → 2027-03-11

- Stat, score, division, next division, points needed ("You need +14 Strength points to reach Diamond")
- Related records per stat only (Expo shows every record on every stat)
- Recent progress line chart from `stat_snapshots` (fl_chart)
- Legend shows no "next division"; uncapped score still shown

## Done when
- [ ] Strength 86 example renders the spec text in English and Korean

Depends on: D18, D12

---

## D20 · Records screen
`P2 Stats & records` · `type:feature` · Medium · S · 2027-03-05 → 2027-03-08

- The 9 spec records plus most weekly volume, with value, date and previous value; estimated mile/5K marked
- Powerlifting total from the best of each lift, not the latest record

## Done when
- [ ] Each record shows "No record yet" (translated) until earned

Depends on: D9, D18

---

## D21 · Muscle map screen (grid)
`P2 Stats & records` · `type:feature` · Low · S · 2027-03-05 → 2027-03-07

- Card grid of the 11 groups: trained this week vs missed, with set counts per group
- Visual body diagram is P5 (D38)

## Done when
- [ ] Matches the spec example layout of trained / missed lists

Depends on: D18

---

## D22 · Character screen and medal shop
`P3 Game layer & screens` · `type:feature` · Medium · M · 2027-03-12 → 2027-03-19

- Expo preview is the text "◆ HP ◆" and ignores equipped items
- Layered preview of equipped slots (simple placeholder art), medal balance, owned items, equip/unequip
- Shop with locked/unlocked state and prices; profile frame slot added (in spec, missing in Expo)
- Medal history screen listing ledger entries with translated reasons
- Cosmetic only, no effect on stats or rankings

## Done when
- [ ] Buying, equipping and seeing the item in the preview works; can't buy without enough medals

Depends on: D10, D18

---

## D23 · Mock rankings with all filters
`P3 Game layer & screens` · `type:feature` · Medium · M · 2027-03-12 → 2027-03-19

- Expo filters show only the first options (no 90 to 100kg, no ages 35+), no powerlifting total, and "You" is a mock row
- 10 categories = the records from D9: bench, squat, deadlift, powerlifting total, fastest mile, fastest 5K, longest run, most weekly distance, longest streak, most weekly volume
- Mile and 5K replace the spec's "average running pace" (decided 2026-11-12); times rank ascending
- Filters: gender, weight class, age group and all their combinations
- Generated mock population (~500 rows); your real records inserted to show "your rank" under the active filter
- Division badge stays the same whatever filter is active

## Done when
- [ ] Spec example style: bench 120 kg ranked under 4 filter combinations with the same Strength division

Depends on: D20, D13

---

## D24 · AI Coach Preview screen
`P3 Game layer & screens` · `type:feature` · Low · S · 2027-03-12 → 2027-03-14

- Labelled "AI Coach Preview" / premium preview; no payment
- Missed groups this week, suggested focus and exercise list from D11, translated

## Done when
- [ ] Training only chest + arms in a week suggests a lower-body day

Depends on: D11, D18

---

## D25 · Settings screen
`P3 Game layer & screens` · `type:feature` · Low · S · 2027-03-20 → 2027-03-22

- Language, edit profile, medal history link, reset all data (with confirmation), app version

## Done when
- [ ] Reset returns to onboarding with an empty database

Depends on: D13, D22

---

## D26 · Weekly and milestone medal rules
`P3 Game layer & screens` · `type:feature` · Low · M · 2027-03-12 → 2027-03-16

- Full medal list from the spec on top of the MVP rules: 3 workouts in a week +75, all major groups in a week +100, 5 km run in a week +50, 7-day streak +100
- Each awarded at most once per period (unique reason + week in the ledger)
- ⚠️ Spec lists a PR as +50 here and +20 in the MVP rules; pick one

## Done when
- [ ] Tests: awards once per week, survives edits that drop below the threshold (reversal)

Depends on: D10, D7

---

## D27 · Spec parity check and Expo removal
`P3 Game layer & screens` · `type:task` · High · S · 2027-03-23 → 2027-03-26

- Walk the spec's 11-point "user can…" list in English and Korean on iOS and Android
- Remove the Expo code, merge `dev` into `master`, update README

## Done when
- [ ] All 11 points pass in both languages, results posted on this issue

Depends on: D18, D19, D20, D21, D22, D23, D24, D25, D15, D17, D26

---

## D28 · Supabase project, schema and row-level security
`P4 Accounts & sync` · `type:task` · High · L · 2027-03-27 → 2027-04-05

- Postgres schema mirroring the drift tables (medal ledger and character included), keyed by user ID, with `updated_at` / `deleted_at`
- RLS: users read/write only their own rows; leaderboard data only through views
- Migrations in the repo (`supabase/migrations`)

## Done when
- [ ] RLS tests: user A can't read user B's workouts

Depends on: D27

---

## D29 · Sign in with Apple and Google
`P4 Accounts & sync` · `type:feature` · High · M · 2027-04-06 → 2027-04-13

- supabase_flutter auth; Sign in with Apple on iOS (App Store guideline 4.8 when Google login is offered)
- Local-only data attached to the account on first sign-in; if the account already has data, both sets are kept (union by ID)
- App still usable signed out (local mode)
- Delete account in Settings: removes the server rows and the auth user (App Store guideline 5.1.1(v))

## Done when
- [ ] Sign in, sign out and sign back in on both platforms keeps data
- [ ] Delete account leaves no rows for that user on the server

Depends on: D28, D39

---

## D30 · Workout sync via outbox
`P4 Accounts & sync` · `type:feature` · High · L · 2027-04-14 → 2027-04-24

- Local writes go to an outbox table; background push when online, pull on launch
- Workouts are the synced truth; stats/records recalculated from them on each side
- Conflict rule: last edit wins per workout; deletes sync as `deleted_at`
- Medal ledger and character items sync too (append-only, union by ID); no server-side awarding, medals are cosmetic

## Done when
- [ ] Log offline → reconnect → appears on a second device
- [ ] Delete on one device → gone on the other; medal balance equal on both

Depends on: D29

---

## D32 · Real leaderboards
`P5 Leaderboards` · `type:feature` · High · L · 2027-04-25 → 2027-05-08

- Replaces mock rankings with server data; same 10 categories (D9 records) and filter combinations
- Records computed on the server in SQL from synced workouts, never taken from the client; this is the only domain rule ported to the server
- Shared JSON test cases run against both the Dart rules (D9) and the SQL, so they can't drift
- Materialized views refreshed on a schedule; weight class / age group at record time (stored since D5)
- Opt-in to appear on public boards; display name only (new unique profile field)

## Done when
- [ ] Your rank under each filter combination matches a direct SQL count

Depends on: D30

---

## D33 · Plausibility checks and flagged records
`P5 Leaderboards` · `type:feature` · Medium · M · 2027-05-09 → 2027-05-16

- Self-reported raw numbers are easy to fake
- Flags: lifts above set multiples of bodyweight, pace faster than human limits, sudden jumps between sessions
- Flagged records hidden from boards until resolved; still count for the user's own stats

## Done when
- [ ] Each check has a test with a passing and a flagged example

Depends on: D32

---

## D34 · Decide proof requirements for top ranks
`P5 Leaderboards` · `type:task` · Low · S · 2027-05-17 → 2027-05-24

- Open product question: what must top-N lifters/runners provide (video, linked run app, nothing)
- Decision recorded here; implementation follows as its own issue

## Done when
- [ ] Decision written on this issue

Depends on: D33

---

## D35 · AI coach via LLM
`P6 Premium & release` · `type:feature` · Medium · L · 2027-05-25 → 2027-06-14

- Edge function sends a weekly training summary (volume per group, PRs, missed days, goal, equipment), never raw history
- Structured output: workout plan with catalog exercise IDs; rule-based coach stays as fallback and free tier
- Model and prompt versioned in the repo
- Per-user daily call limit in the function; the only cost guard until D36

## Done when
- [ ] Spec example (chest + arms only week) returns a legs + back plan using catalog exercises

Depends on: D30, D24

---

## D36 · Premium subscription via RevenueCat
`P6 Premium & release` · `type:feature` · Medium · L · 2027-06-15 → 2027-07-05

- App Store / Play billing through RevenueCat (`purchases_flutter`); store rules require in-app purchase for digital subscriptions
- Entitlement checked server-side before the AI coach function runs
- Sandbox purchases only until store review

## Done when
- [ ] Sandbox subscribe → AI coach unlocks; cancel → falls back to rule-based preview

Depends on: D35, D29, D39

---

## D37 · GPS run tracking
`P7 Extras` · `type:feature` · Low · L · 2027-07-16 → 2027-08-05

- geolocator background tracking: distance, pace splits, route map
- Saves as a normal run entry so records and stats need no change
- Battery and permission handling on both platforms

## Done when
- [ ] Outdoor 1 km test run within 3% of a reference app

Depends on: D27

---

## D38 · Body diagram muscle map
`P7 Extras` · `type:feature` · Low · M · 2027-07-16 → 2027-07-29

- Front/back SVG body with groups shaded by this week's sets; tap a group for its exercises
- Replaces the grid from D21

## Done when
- [ ] All 11 groups mapped, readable in dark theme

Depends on: D21

---

## D39 · Developer accounts, bundle IDs and signing
`P4 Accounts & sync` · `type:task` · High · S · 2027-03-27 → 2027-03-29

- Sign in with Apple (D29), in-app purchase (D36) and store builds (D40) all need paid developer accounts
- Apple Developer Program and Google Play Console enrolment (enrol early, approval can take days)
- Bundle ID / application ID, App Store Connect and Play app records, signing certificates and keystore (kept out of the repo)
- Sign in with Apple capability on the app ID; paid-apps agreement signed (needed for sandbox purchases)

## Done when
- [ ] A signed release build installs on a real iPhone and a real Android phone

Depends on: D27

---

## D40 · Store release
`P6 Premium & release` · `type:task` · Medium · M · 2027-07-06 → 2027-07-15

- App icon and splash, store listing text and screenshots in English and Korean
- Privacy policy page and store privacy forms (account, workout data, purchases)
- TestFlight and Play internal testing builds, then submission for review
- GPS (D37) and body diagram (D38) ship in a later update

## Done when
- [ ] Build accepted on TestFlight and the Play internal track
- [ ] Submitted for review on both stores

Depends on: D36, D29
