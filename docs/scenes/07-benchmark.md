# Scene 07 — Benchmark

## Purpose

This scene replaces the claim with evidence.

Everything up to `1150` was demonstration: a graph, its cross-repository edges,
an impact, an answer. A demonstration can be staged. This scene says that the
thing the viewer just watched was measured, published, and cheap — and it says
it in numbers rather than in adjectives.

It exists because `STORYBOARD.md` §30 forbids the alternative. Kivgraph is not
allowed to assert authority (`Revolutionize your codebase`, `10x your
productivity`); it must earn it through evidence. This is where the evidence
goes.

It is also the first scene since the opening frame with no product surface in it.
No graph, no terminal, no chrome. Removing every interface element is what makes
the numbers read as a fact about the world rather than a screenshot of a tool.

## Viewer takeaway

> The precise answer cost 6.2k tokens instead of 63.5k, and it was right every
> time, across 37 repositories.

Secondary, carried by the words `published benchmark`: these numbers are
checkable. Someone can go and read them.

## Narrative context

Immediately before: `06-agent-answer.md` closed the loop. The agent answered the
opening question with concrete quantities and a named dependency path. The viewer
knows what Kivgraph produces.

This scene answers the question a technical viewer asks next — *what does that
cost, and is it actually right?* — and it answers both at once. `6.2k` versus
`63.5k` is the cost. `7 / 7 exact answers` is the correctness. `37 repositories`
is the scale at which both hold.

Immediately after: `08-brand.md` attaches all of it to the name. Per
`STORYBOARD.md` §27 the path from metrics to logo is `fade → silence → brand
reveal`, so this scene is also the last full frame before the piece deliberately
empties out.

## Timeline

Storyboard source: `STORYBOARD.md` SCENE 09 — BENCHMARK.

The storyboard scene number is two ahead of the document number from
`04-blast-radius.md` onward: storyboard SCENE 03 and SCENE 04 are implemented as
a single component, and storyboard SCENE 05 is a record of a cut scene.
Storyboard SCENE 09 is document 07. See `docs/scenes/README.md`.

- Global frames: `1150`–`1320`
- Scene-local frames: `0000`–`0170` (last rendered frame `0169` / master `1319`)
- Time: 19.17 s – 22.0 s
- Duration: 170 frames / 2.83 s at 60 fps
- Remotion component: `src/scenes/BenchmarkScene.tsx`

The storyboard drafted 120 frames. The scene is 170, and the fifty frames were
bought with a measurement rather than a feeling: see `## Motion` → **The hold,
and why the scene is 170 frames**.

Beats, as built:

| Master        | Local         | Beat                                                                              |
| ------------- | ------------- | --------------------------------------------------------------------------------- |
| `1150`        | `0000`        | Hard cut. Empty background.                                                        |
| `1154`–`1182` | `0004`–`0032` | `6.2k` arrives against `tokens`: 88 px, the largest type in the scene.             |
| `1168`–`1188` | `0018`–`0038` | `63.5k` against `grep + read`, 40 px and faint, in the same value column.          |
| `1190`–`1210` | `0040`–`0060` | The hairline rule spans the table's 480 px, to `0.9` opacity.                      |
| `1196`–`1218` | `0046`–`0068` | `7 / 7` against `exact answers`.                                                   |
| `1222`–`1244` | `0072`–`0094` | `37` against `repositories`.                                                       |
| `1226`–`1248` | `0076`–`0098` | `published benchmark`, the table's source note, lands last.                        |
| `1248`–`1308` | `0098`–`0158` | Settled. The render measures 61 byte-identical frames.                             |
| `1308`–`1320` | `0158`–`0170` | All four rows fade out together.                                                   |

The windows overlap by design. They are one continuous cascade of four rows in
one table, not four separate cards.

Only the hard cut at `1150` and the still-image key frame at `1190` are fixed by
the storyboard. The rest is the built rhythm and may shift, provided no row loses
dwell against the figures in `## Motion` and `63.5k` is still complete at `1190`.

## Initial state

At `1150` the frame is empty: `background` `#0a0b0d`, edge to edge. No panel, no
hairline, no residue of the prompt layer, no graph, no logo.

The emptiness is the hard cut's whole effect. Cutting from a dense frame of agent
output to bare background is what signals that the register has changed.

## Final state

At master `1307`, the last frame before the fade, the table is complete and
static:

- four rows, 480 px wide, centred: units left-aligned at `x 720`, values
  right-aligned to `x 1200`;
- `6.2k` against `tokens`, 88 px, `textPrimary` — the dominant figure;
- `63.5k` against `grep + read`, 40 px, `textFaint`, its right edge on `6.2k`'s;
- one 1 px hairline at `y 531`, dividing cost from worth;
- `7 / 7` against `exact answers` and `37` against `repositories`, both 40 px in
  `textPrimary`;
- `published benchmark` alone at the bottom left, 18 px `textFaint`, with no
  value beside it;
- nothing in motion.

The render measures this frame byte-identical for 61 frames, master `1248`–
`1308`. The full set must read as one table, not as a list that happened to
accumulate: a viewer landing on any one of those 61 frames should be able to
reconstruct the entire argument of the scene.

## Visual composition

Typography only, laid out as a **table**. Four rows, each a unit on the left and
its measured value right-aligned on the right; one hairline; one source note.

**Why a table.** The four statements are measurements with units, and a table is
what measurements look like. It buys the one thing the scene's argument needs:
`6.2k` and `63.5k` share a right edge, so the comparison is made by the
composition instead of by the viewer. Two numbers at different baselines in
different sizes have to be mentally aligned before they can be compared; two
numbers in a column do not. Nothing is centred row by row — centring each row
independently would make four rows into four objects, and this scene is one
object.

Columns, in master pixels, exported as `tableGrid` from
`src/components/BenchmarkMetric.tsx`:

- `labelLeft: 720`, `valueRight: 1200`, width **480**. The widest row is
  `exact answers` against `7 / 7` — 140 px of unit and 120 px of value — so 480
  leaves a 220 px gutter there. Wider and `repositories` stops belonging to `37`;
  narrower and `6.2k`, 211 px on its own, crowds its unit.

Rows, value tops in master pixels:

| Row                   | Top   |
| --------------------- | ----- |
| `6.2k`                | `351` |
| `63.5k`               | `463` |
| the hairline rule     | `531` |
| `7 / 7`               | `559` |
| `37`                  | `623` |
| `published benchmark` | `707` |

Vertical rhythm: 24 px between rows inside a group, 28 px either side of the
rule, and **44 px above the provenance note**. The note gets nearly double the
gap because at a row's spacing it read as a fifth row that had lost its value; a
source note has to sit outside the body it vouches for.

The block runs `351`–`725` and is centred on **538**, not 540: mono digits sit
high in their em, so a geometrically centred box of numerals reads low. Units are
centred on each value's optical centre (`top + size * 0.375 - 9`), not on its top
edge. The whole table is centred within the frame so future 1:1 / 4:5 / 9:16
variants remain possible (`STORYBOARD.md` §2, `AGENTS.md` §38).

Measured in the render: all four values right-align at exactly `x 1198` — 2 px of
mono side bearing inside the 1200 column edge — the block's ink spans
`x 721`–`1198` for a centre of **959.5** against a frame centre of 960, and the
rule is 1 px tall and 480 px wide, exactly `tableGrid.width`, at `y 531`.

Type, all `JetBrains Mono`, weights 400 and 500 only:

- `6.2k`: 88 px, weight 500, `textPrimary` `#f5f5f5`;
- `63.5k`: 40 px, weight 400, `textFaint` `#737373`;
- `7 / 7` and `37`: 40 px, weight 400, `textPrimary` `#f5f5f5`;
- units: 18 px, `textMuted` `#a3a3a3`, letter-spacing `0.04em`;
- `published benchmark`: 18 px, `textFaint` `#737373`.

Everything is monospace: every string here is a technical value or a label on
one, which is exactly `AGENTS.md` §27's monospace case.

**The comparison reads by scale, not by colour.** `6.2k` is the only row that
breaks the 40 px value size, and it breaks it by **2.2x**. That ratio is the whole
argument of the scene, which is why nothing in it is colour-coded: per
`AGENTS.md` §37 important meaning may not depend solely on colour, and a
green-versus-red win/lose pair would also read as marketing rather than
measurement. The comparison has to survive in greyscale, which means it cannot be
rescued by colour.

Accent is not used. The scene is fully neutral — `background`, `textPrimary`,
`textFaint`, `textMuted` and one `border` hairline — and the global 10–15 % accent
budget (`AGENTS.md` §26) is satisfied elsewhere in the video.

A single 1 px `border` `#22262b` hairline separates the comparison from the
claims, at `0.9` opacity. It is the only structural line the frame gets. Depth in
this project comes from hairlines and surface steps, never shadows (`AGENTS.md`
§25 house style): no card, no box, no fill, and no borders around the table — a
bordered table would be a screenshot of a spreadsheet, which is the opposite of
what the scene is for.

## Motion

Four entrances, one rule, a hold, one fade. Nothing else.

Each row: opacity `0 → 1` with a 6 px upward settle, on the storyboard's
controlled curve (`Easing.bezier(0.22, 1, 0.36, 1)`). Precise, mechanical, no
bounce, no scale-up, no blur, no slide from off-frame. The motion language here is
`STORYBOARD.md` §8: *precisas, rápidas, controladas*.

Windows as built:

| Element                   | Local         | Master        |
| ------------------------- | ------------- | ------------- |
| `6.2k` / `tokens`         | `004`–`032`   | `1154`–`1182` |
| `63.5k` / `grep + read`   | `018`–`038`   | `1168`–`1188` |
| the hairline rule         | `040`–`060`   | `1190`–`1210` |
| `7 / 7` / `exact answers` | `046`–`068`   | `1196`–`1218` |
| `37` / `repositories`     | `072`–`094`   | `1222`–`1244` |
| `published benchmark`     | `076`–`098`   | `1226`–`1248` |
| fade out, all four rows   | `158`–`170`   | `1308`–`1320` |

The rule fades to `0.9`, not to `1`: it divides the table, it is not a row of it.
`published benchmark` lands last because a source note is read after the thing it
vouches for.

Storyboard frame numbers mark when a beat **reads**, not when its ramp begins,
and frame `1190` is the case where that matters. It is a designated still-image
key frame whose content is `6.2k vs 63.5k` (`STORYBOARD.md` §29), while the
storyboard's `63.5k` window is `1170`–`1210`. The ramp therefore front-loads
inside that window and completes at `1188`, and the rule does not begin until
`1190`. A half-faded `63.5k` at `1190` would ruin the one frame from this scene
that gets used outside the video.

**No count-up, no odometer, no ticking numerals.** Numbers appear at their final
value. Two reasons, and both are hard: a mid-count still frame displays a number
that is not the published benchmark, which is a benchmark-integrity problem
(`AGENTS.md` §29), and a counting animation is exactly the "look at how impressive
this is" gesture the storyboard rules out. The numbers speak for themselves only
if they are allowed to simply be there.

**The hold, and why the scene is 170 frames.** The storyboard drafted 120, and the
number that grew it is **dwell time**: how long a readable thing stays on screen
after it has finished arriving — the same measurement that repaced scenes 04, 05
and 06.

At 120 frames the last statement settled with **10 frames left, 0.17 s**. Measured
on the 170-frame cut, with the fade beginning at master `1308`:

| Row                       | Settles at local | Dwell               |
| ------------------------- | ---------------: | ------------------- |
| `tokens` / `6.2k`         |               32 | 126 frames / 2.10 s |
| `grep + read` / `63.5k`   |               38 | 120 frames / 2.00 s |
| `exact answers` / `7 / 7` |               68 |  90 frames / 1.50 s |
| `repositories` / `37`     |               94 |  64 frames / 1.07 s |
| `published benchmark`     |               98 |  60 frames / 1.00 s |

The two rows that arrive last are read together, and they are 33 characters in
1.00 s: **33 characters per second**, inside the 25–40 characters per second at
which on-screen technical text can actually be read.

The hold from local 98 to 158 is not padding and it is not a settled frame waiting
for a cut. Four statements can only be read as one composition while they are all
on screen together, and this is the only place in the scene where that is true.
The render measures 61 byte-identical frames there, master `1248`–`1308`.

The scene is fully static from `1248`, so the fade toward `08-brand.md` begins
from a settled frame.

## Three.js

Not used.

## Transition in

Hard clean cut at `1150` (`STORYBOARD.md`: *hard cut limpio*).

No crossfade, no dissolve, no motion carried over from the terminal. The previous
scene is fully settled at `1149` and this one is empty at `1150`. The abruptness
is the point: the video steps out of the demonstration and states a measurement.

Nothing from `06-agent-answer.md` persists — not the panel, not the prompt, not
the label.

## Transition out

Per `STORYBOARD.md` §27, the metrics-to-logo transition is:

```text
fade
↓
silence
↓
brand reveal
```

The four rows fade out together over `1308`–`1320`, ending on black at `1320`.
They fade as one composition; fading them out in sequence would restate the
cascade backwards and cost the brand reveal its silence. The last rendered frame
of the scene, `1319`, is one frame short of black — the render contains no fully
black frame.

`1320`–`1330` is black, and it is not a hole in the timeline: it is scene 08's
own opening beat, its scene-local `0000`–`0010`, and `08-brand.md` owns it. That
black is the `silence` in the §27 path, and it separates this scene's evidence
from the logo so the reveal is not read as a fifth statistic.

## Copy

Verbatim, and complete — this scene contains no other text. As laid out:

```text
tokens                6.2k
grep + read          63.5k
--------------------------
exact answers        7 / 7
repositories            37

published benchmark
```

Every string is the storyboard's, taken from `STORYBOARD.md` SCENE 09 —
BENCHMARK. Two of them are **re-associated as a value and a unit** rather than
rewritten, because a table needs the measured quantity in its own column:

- `7 / 7 exact answers` → value `7 / 7`, unit `exact answers`;
- `37 repositories` → value `37`, unit `repositories`.

No value changes. `7 / 7` keeps the storyboard's spacing, `37` keeps its
precision, and both unit words are the storyboard's own. Splitting where the copy
already had a space is not rewriting it, and `## Flexible elements` already
permitted `7 / 7` and `exact answers` at two different emphases.

`published benchmark` is no longer a label of `37`: it is the table's source note,
standing alone below the body. It stays lowercase; it is a provenance stamp, not a
heading.

No unit explanations, no footnotes, no percentage, no "vs", no comparative
sentence. The relationship between `6.2k` and `63.5k` is carried by the shared
right edge and the size ratio. If it needs a word to be understood, the layout is
wrong.

## Key frames

```text
frame 1150 — hard cut; empty frame, nothing yet
frame 1190 — "6.2k" and "63.5k" both complete and legible, rule not yet arrived;
             STILL-IMAGE KEY FRAME
frame 1230 — comparison and rule complete, "7 / 7 exact answers" read, "37" mid-arrival
frame 1269 — the settled table, inside the 61-frame identical run 1248-1308
frame 1307 — the last frame before the fade
```

`1190` is on both `AGENTS.md`'s still-image key frame list and
`STORYBOARD.md` §29: it is designated for the benchmark launch and must work as
a standalone image for landing page, README, and social use. It is a hard
requirement on this scene, not a nicety. Inspect it as an exported PNG, not only
in the Studio scrubber. Its one compromise is vertical; see
`## Current compromises`.

`1150`, `1190`, `1230`, and `1269` are all on the manual review list in
`STORYBOARD.md` §28. `1269` used to be the frame immediately before the fade; on
the 170-frame cut it sits inside the settled run instead, and the last frame
before the fade is `1307`.

## Invariants

- **The values are the published benchmark and are never adjusted for visual
  convenience** (`AGENTS.md` §29). `6.2k`, `63.5k`, `7 / 7`, `37`. Not rounded to
  look neater, not inflated, not re-derived. If the published benchmark changes,
  then `STORYBOARD.md`, this document, `04-blast-radius.md`, and
  `06-agent-answer.md` are updated together in the same task, along with every
  visual reference.
- **The values are stored as strings, not numbers.** `6.2k` is not `6200`
  rendered with a suffix. The published figure is quoted at that precision, and
  formatting a number would let a future edit change the precision — which is the
  same thing as changing the value.
- **The 2.2x ratio.** `6.2k` is 88 px against `63.5k`'s 40 px, and that ratio is
  the entire argument of the scene. `6.2k` is the only row allowed to break the
  40 px value size. The type scale lives once in `BenchmarkMetric.tsx`'s
  `emphasis` map and the component takes no `fontSize`, so the hierarchy cannot be
  narrowed one call at a time.
- **The shared right edge.** All four values right-align on the value column
  (`tableGrid.valueRight` `1200`; measured ink at `x 1198`). The comparison is
  made by the composition, not by the viewer. A row that centres itself, or a
  value that opts out of the column, destroys the scene's mechanism.
- **No colour-coding, ever.** Never a green-versus-red pair, never an accent on
  one side of the comparison. The comparison must survive in greyscale
  (`AGENTS.md` §37); as built the scene uses no accent at all.
- **`published benchmark` sits outside the table body**, as a source note: bottom
  left, 44 px below the last row, quieter than the units above it, with no value
  beside it. It is never a label of `37` and never a fifth row.
- **No count-up, ever.** Numbers render at their final value on every frame on
  which they are visible.
- One hairline only. No borders, no card, no box, no fill.
- No giant bar charts. No pie charts. No gauges. No animated graphs.
- No confetti, no bursts, no shine sweep, no celebration of any kind.
- Nothing resembling `90% BETTER!!!`. No percentage improvement, no superlative,
  no exclamation mark anywhere in the scene.
- The numbers speak for themselves. Nothing is added to help them.
- Typography only. No graph, no terminal, no product UI, no logo, no device
  frame, no background texture.
- Frame `1190` works as a still image with both numbers fully legible.
- The hard cut at `1150` stays hard.
- The scene is static from `1248` to `1308`, and all four rows leave together.

## Flexible elements

- Exact row tops and the vertical rhythm, provided the provenance note keeps
  roughly double a row's gap above it.
- The column width, provided the widest row keeps its gutter, `repositories`
  still belongs to `37`, and `6.2k` does not crowd `tokens`.
- Whether the separating hairline exists at all, and its opacity.
- Easing and travel distance of the entrances (built: 6 px, `Easing.bezier(0.22,
  1, 0.36, 1)`).
- Letter-spacing and tabular-figure settings on the numerals (built: `-0.02em` on
  values, `0.04em` on units and the note).
- Whether `7 / 7` and `exact answers` are rendered at two different emphases.
  Built: they are — a 40 px `textPrimary` value against an 18 px `textMuted` unit
  — and that permission is what the value/unit split in `## Copy` relies on.
- The exact window starts, provided no row loses dwell against the table in
  `## Motion` and `63.5k` is complete at `1190`.

Not flexible any more, and moved to `## Invariants`: the size ratio between
`6.2k` and `63.5k`, the shared right edge, and whether any accent is used.

## Technical notes

- Component: `src/scenes/BenchmarkScene.tsx`. It owns the layout — six
  master-pixel tops in one `layout` constant — and the timing: `entry`, the rule's
  `ramp`, and `fadeOut`.
- **There is deliberately no state module.** Scenes 05 and 06 have
  `src/three/semanticState.ts` and `src/three/answerState.ts` because they have
  state worth naming. This scene's state is four opacity ramps, one rule ramp and
  a fade; a module for that would be an empty file. All state derives from the
  frame (`AGENTS.md` §17).
- `src/components/BenchmarkMetric.tsx` exports `BenchmarkMetric` **and**
  `tableGrid`. `BenchmarkMetric` is **one table row**: `label` (the unit, left,
  18 px `textMuted`), `value` (right-aligned to the value column), `emphasis`
  (`primary | baseline | claim`), `top`, `opacity`, `offsetY`. It owns the type
  scale and the column geometry; the caller never passes a font size. This
  replaces the shape this document originally specified — "a value plus a label
  beneath it" — and the reason is in `## Visual composition` → **Why a table**.
- `tableGrid` is `{ labelLeft: 720, valueRight: 1200, width }`, exported because
  the separating rule spans exactly the table's columns. A rule a few pixels wider
  than the table it divides is the kind of detail that makes a frame look
  assembled rather than designed.
- `MetricCard.tsx` is the blast-radius impact card and is a different component;
  do not reuse it here, because this scene must have no card in it.
- Benchmark values: `src/data/benchmark.ts`, one exported `benchmark` constant
  with its provenance recorded in the file's own doc comment. §29's update
  procedure has to have a single place to land; four literals spread through a
  component are four places to forget.
- Global scene boundaries live inline in `src/Composition.tsx` as
  `<Sequence name="07 Benchmark" from={1150} durationInFrames={170} premountFor={30}>`
  literals, because Remotion Studio can only trim inline literals. There is no
  timing module. The component animates in scene-local frames:
  `useCurrentFrame()` inside the Sequence starts at `0`.
- Fonts from `src/brand/fonts.ts` (`"JetBrains Mono"`, local `.woff2` via
  `@remotion/fonts`, loaded deterministically). Large numerals are where a late
  font swap is most visible, so no fallback family here.
- No `fontVariantNumeric` is set: `JetBrains Mono` already advances every digit
  identically, and the render confirms it — all four values land a right edge at
  `x 1198`. If a future font change misaligns digits, add tabular figures rather
  than nudging a row; misaligned digits at 88 px look like a bug.
- Colours from `src/brand/tokens.ts`. No raw hex in the component. The scene uses
  `background`, `textPrimary`, `textFaint`, `textMuted` and `border`, and no
  accent.
- The cheapest scene in the video: four rows, a rule and a note, all absolutely
  positioned. No 3D, no images.
- The hard cut in measures `22.30 dB` across `1149`/`1150`, and a hard cut is
  supposed to measure low. The render is 1320 frames with no black frame, and the
  only single-frame anomalies are the two hard cuts, `0969`/`0970` and
  `1149`/`1150`.
- Because the frame is nearly empty, check legibility in a small embedded player
  (`STORYBOARD.md` §7): `published benchmark` at 18 px in `textFaint` `#737373`
  is the first thing that will disappear at low resolution or high compression.
  If it does, raise it to `textMuted` `#a3a3a3` rather than enlarging it — its
  quietness is intentional, its invisibility is not.

## Current compromises

- **Implemented.** `src/scenes/BenchmarkScene.tsx`,
  `src/components/BenchmarkMetric.tsx` and `src/data/benchmark.ts` exist and the
  scene renders. This bullet used to read "Not implemented yet"; this document is
  now a description of what is built, not a specification waiting to be
  satisfied.
- **Built as a table, on art direction taken mid-implementation.** The first draft
  followed this document's original free-floating value/label composition. It was
  replaced because measurements with units look like a table, and because a table
  gives `6.2k` and `63.5k` a shared right edge. Every section above now describes
  the table; if a future agent finds a sentence describing a value with its label
  beneath it, that sentence is a leftover and the table wins.
- **The `1190` still sits above frame centre.** The frame delivers exactly what
  `STORYBOARD.md` §29 asks — `6.2k` and `63.5k` both complete and legible, the
  rule not yet arrived, the two claims not yet arrived — but the pair sits high,
  because the block is laid out for the settled table and the lower rows are still
  empty at `1190`. This is deliberate and it is not fixable by layout: centring
  the pair would decentre the table, and the table is the image the film actually
  shows, byte-identical, for 61 frames. Sixty-one frames of the film outrank one
  frame's centring. A still that needs the pair optically centred should be
  **cropped**, not re-laid-out.
- **Benchmark provenance still not linked, but now recorded.**
  `src/data/benchmark.ts` states that `STORYBOARD.md` SCENE 09 is this
  repository's record of the published benchmark and that nothing in the project
  can re-derive it. Nothing yet points at where the benchmark is published.
  Before release, record that source so a future agent can verify the four values
  rather than trusting them.
- **Accent, decided: none.** This used to be an open decision. The rendered scene
  uses no accent at all: a neutral frame is what makes the comparison survive in
  greyscale, and the 10–15 % accent budget (`AGENTS.md` §26) is satisfied
  elsewhere in the video.
- **Sound absent.** `STORYBOARD.md` §18 lists no sound for this scene, and §17
  requires the piece to work muted. The silence before the brand reveal is a
  deliberate part of the §27 transition, not a missing asset.

## Modification history

```text
2026-08-23
- Initial scene specification.
```

```text
2026-08-23
- Retimed for the scene 01 redesign: scene 01 grew from 90 to 210 frames, so
  every master frame in this document moved +120. Beats, durations and
  scene-local frames are unchanged.
```

```text
2026-08-23
- Scene 02 (Problem / Not Alone) was deleted, so this document was renumbered
  from 09 to 08 and now realises storyboard SCENE 09. Every master frame moved
  -120; the master timeline is now 1500 frames. Beats, durations, scene-local
  frames and all benchmark values are unchanged.
```

```text
2026-08-23
- Scene 01 was shortened from 210 to 120 frames, so every master frame in this
  document moved -90; the master timeline is now 1410 frames (23.5 s). Beats,
  durations, scene-local frames and all benchmark values are unchanged.
```

```text
2026-08-25
- Scene 04 (Cross Repository) was cut, so this document was renumbered from 08
  to 07. It still realises storyboard SCENE 09; the storyboard number is now two
  ahead of the document number. Every master frame moved -90; the master
  timeline is now 1320 frames (22.0 s). The still-image key frame moved from
  `1120` to `1030`. Beats, durations, scene-local frames and all benchmark
  values are unchanged.
```

```text
2026-08-25
- The blast radius scene was trimmed from 120 to 100 frames, so every master
  frame in this document moved -20; the master timeline is now 1300 frames
  (21.7 s). The still-image key frame moved from `1030` to `1010`, and the hard
  cut in is now at `0970`. Beats, durations, scene-local frames and all benchmark
  values are unchanged.
- The trim was upstream: with its claim line and veil cut, the blast radius' last
  41 frames were pixel-identical, so twenty came off and everything after 0730
  followed. Nothing about this scene's cascade changed.
```

```text
2026-08-25
- Scene 05 (Semantic Resolution) grew from 150 to 180 frames, so every master
  frame in this document moved +30; the master timeline is now 1330 frames
  (22.2 s). The scene spans `1000`-`1120`, the hard cut in is at `1000`, the
  still-image key frame moved from `1010` to `1040`, and the fade out ends on
  black at `1120`. Beats, durations, scene-local frames and all benchmark values
  are unchanged.
- The growth was upstream and it bought reading time: the semantic scene's
  comparison now stands for a full second and everything leaves it on one window
  rather than three. The frame this scene cuts away from is still fully settled,
  now at 0999. Nothing about this scene's cascade changed.
```

```text
2026-08-25
- A pacing pass on the three scenes before this one moved every master frame in
  this document +150. Scene 04 grew from 100 to 140 frames, scene 05 from 180 to
  200 and scene 06 from 90 to 180; the master timeline is now 1480 frames
  (24.7 s). This scene spans `1150`-`1270`, the hard cut in is at `1150`, the
  still-image key frame moved from `1040` to `1190`, and the fade out ends on
  black at `1270`. Beats, durations, scene-local frames and all benchmark values
  are unchanged.
- The growth was upstream and it was bought with a measurement rather than a
  feeling: dwell time, how long a readable thing stays on screen after it has
  finished arriving. The impact card had 0.42 s and the agent's path sentence
  0.57 s - 129 characters per second against a readable 25-40. Both now clear
  1.4 s.
- The frame this scene cuts away from is still fully settled, now at `1149`, and
  it is settled for 87 frames rather than 30. Nothing about this scene's cascade
  changed.
```

```text
2026-08-26
- Implemented, and built as a table rather than as the free-floating value/label
  composition this document drafted. `src/scenes/BenchmarkScene.tsx`,
  `src/components/BenchmarkMetric.tsx` and `src/data/benchmark.ts` exist and the
  scene renders. `BenchmarkMetric` is now one table row - a unit on the left, its
  measured value right-aligned on the right - and it exports `tableGrid`
  (`labelLeft` 720, `valueRight` 1200, width 480) because the separating rule
  spans exactly the table's columns. There is deliberately no state module: the
  timing is four ramps and a fade.
- The reason for the table is the comparison. `6.2k` and `63.5k` now share a
  right edge, measured at `x 1198`, so the comparison is made by the composition
  instead of by the viewer. Value tops are 351, 463, 559 and 623 with the rule at
  531 and the provenance note at 707; the block runs 351-725, centred on 538
  rather than 540 because mono digits sit high in their em.
- Two storyboard strings were re-associated as a value and a unit, because a
  table needs the measured quantity in its own column: `7 / 7 exact answers`
  became `7 / 7` plus `exact answers`, and `37 repositories` became `37` plus
  `repositories`. No value changed - `7 / 7` keeps the storyboard's spacing and
  `37` its precision - and § Flexible elements already permitted those two at
  different emphases. `published benchmark` is now the table's source note rather
  than a label of `37`.
- The scene grew from 120 to 170 frames (2.0 s to 2.83 s) on dwell time, the same
  measurement that repaced scenes 04, 05 and 06. At 120 the last statement
  settled with 10 frames left, 0.17 s. As built, with the fade beginning at
  `1308`: `6.2k` 126 frames / 2.10 s, `63.5k` 120 / 2.00 s, `7 / 7` 90 / 1.50 s,
  `37` 64 / 1.07 s, `published benchmark` 60 / 1.00 s. The last two rows are 33
  characters in 1.00 s, 33 characters per second, inside the readable 25-40 band.
- The scene still cuts in hard at `1150` and did not move; it now ends at `1320`.
  Scenes 08 and 09 each moved +50 - 08 from `1270`-`1360` to `1320`-`1410`, 09
  from `1360`-`1480` to `1410`-`1530` - and the master timeline is now 1530
  frames (25.5 s). The still-image key frame stays at `1190`. All four benchmark
  values are unchanged.
- Measured on the render: 1320 frames with no black frame, the settled table
  byte-identical for 61 frames (`1248`-`1308`), the new hard cut measuring
  22.30 dB across `1149`/`1150`, and the block's ink centred on 959.5 against a
  frame centre of 960.
- Two decisions closed. Accent: none - the scene is fully neutral, so the
  comparison survives in greyscale. The `1190` still: it sits above frame centre
  and stays there, because 61 static frames of the film outrank one still's
  centring; a crop is the fix, not a re-layout.
```
