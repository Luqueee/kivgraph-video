# Scene 07 — Benchmark

> **FIGURES ON HOLD — 2026-08-26.** The layout, the timing and the geometry in
> this document are built, rendered and measured. **The contents of the table's
> cells are not confirmed.** A verification pass against the upstream
> benchmark's machine-readable results found that the pass this scene was built
> from is recorded only in prose and is contradicted by every `results*.json`
> file in that directory, on token count, on both correctness ratios and on the
> number of exactly-answered questions. Until the figure set is confirmed, every
> cell value, every correctness row label and the source-note string are marked
> `<!-- FIGURE PENDING: … -->` below. **Do not fill a marker from this
> document's own modification history**: those entries are dated records of what
> was built, not a source of truth about what is measured. See `## Provenance`.

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

> Two ways of getting the same answer, measured side by side, and one of them
> costs a fraction of the other.

The scene states a cost difference and a set of correctness measures, in two
named columns, at a stated corpus size. It does not state a superlative and it
does not state a percentage.

<!-- FIGURE PENDING: the takeaway's concrete form - the two cost figures, the
     correctness measures, and the corpus size - once the figure set is
     confirmed. Do not restate the previous build's values here. -->

Secondary, carried by the words `published benchmark` in the source note: these
numbers are checkable. Someone can go and read them — see `## Provenance` for
where, and for what in that directory must not be read as authoritative.

## Provenance

**This section is the most important one in the document, and it is currently
the least settled.**

The figures in this scene are not this repository's own. They come from an
upstream benchmark directory, and `src/data/benchmark.ts` is the single place in
this project where they live — its doc comment carries the provenance, and
`AGENTS.md` §29's update procedure lands there.

<!-- FIGURE PENDING: the upstream directory, the exact pass that is
     authoritative, and the corpus size, tokenizer, machine and date of the
     measurement environment. All of those were written into
     src/data/benchmark.ts from a pass that is now disputed; do not copy them
     out of that file into this one until the discrepancy below is resolved. -->

### The discrepancy that put every figure on hold

A verification pass compared the numbers this scene was built from against the
machine-readable results in the upstream directory. They do not agree.

- The pass the scene was built from appears **only in the closing prose** of a
  remeasurement note. That prose **names no results file**.
- Every `results*.json` file in the directory disagrees with it — on token
  count, on both correctness ratios, and on how many of the questions were
  answered exactly. **No results file records the subject arm at a perfect
  score.**
- The baseline arm's figures *are* corroborated by the machine record.

The consequence for this scene is specific and it is not cosmetic. The built
table states its correctness rows with **both columns at equal weight**, which is
a claim that the two arms tie on those measures. The machine record does not show
that tie. A frame that asserts a tie the measurement does not report is a
benchmark-integrity failure of exactly the kind `AGENTS.md` §29 exists to
prevent, and it is worse than a wrong number, because it is a wrong *shape* — the
layout itself would be making the claim.

So: the two-column composition described below is built and is sound as a
composition. Whether the four rows it holds are the right four rows, and whether
their figures tie, is open.

### Warning to whoever fills these markers in

**Prefer the machine-readable results over prose.** A remeasurement note's
narrative can describe a pass whose output was never committed; a results file
cannot. Where the two conflict, the results file is the record and the prose is a
claim about it.

**Do not resolve this by picking whichever source makes the film look
strongest.** If the honest figures are weaker than the ones this scene was built
from, the scene changes — the copy, the row set, possibly the argument. The film
is allowed to be less impressive. It is not allowed to be wrong.

<!-- FIGURE PENDING: the named-file account of which source supersedes which,
     including the token and exact-answer counts each one reports, once the
     upstream record has been reconciled. This section is deliberately
     figure-free until then. -->

### The caution the film inherits

The benchmark cautions about itself that its question set is small and was chosen
for what it could discriminate, on a single corpus. This scene inherits that
caution and does not get to drop it: a tool that answers all of the questions
there is not a tool that answers everything, it is a tool with **no known miss on
that set**. This is why the scene states raw fractions rather than a superlative,
and why `## Invariants` forbids a percentage improvement.

<!-- FIGURE PENDING: the size of the question set and of the corpus. -->

### The rival arms that are not in the table

The upstream benchmark measures more arms than the film shows. The additional
graph tools are **deliberately absent**, for two reasons:

- naming competitors in a promotional video is a strategic decision and not a
  design one, and it is not this document's to make;
- their figures are pinned to versions that will move, whereas the baseline arm
  the film does show cannot go stale the same way — it is what an agent already
  does without any tool at all.

**This is an open decision, not a closed one.** It belongs to the user. If the
decision goes the other way, the table is no longer two columns and every
measurement in `## Visual composition` is void — do not treat the two-column
layout as though the absence had been argued to a conclusion.

<!-- FIGURE PENDING: which tools, at which versions, and the margin by which the
     subject arm beats them on cost per correct answer. -->

## Narrative context

Immediately before: `06-agent-answer.md` closed the loop. The agent answered the
opening question with concrete quantities and a named dependency path. The viewer
knows what Kivgraph produces.

This scene answers the question a technical viewer asks next — *what does that
cost, and is it actually right?* — and it answers both at once, beside the
alternative rather than on its own. The cost row carries the first half. The
correctness rows carry the second. The source note carries the scale at which
both are claimed to hold.

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

- Global frames: `1150`–`1360`
- Scene-local frames: `0000`–`0210` (last rendered frame `0209` / master `1359`)
- Time: 19.17 s – 22.67 s
- Duration: 210 frames / 3.5 s at 60 fps
- Remotion component: `src/scenes/BenchmarkScene.tsx`

The storyboard drafted 120 frames. The scene is 210, because a two-column table
of four measures cannot finish arriving in 120: see `## Motion` → **The hold, and
why the scene is 210 frames**.

Beats, as built:

| Master        | Local         | Beat                                                                                         |
| ------------- | ------------- | -------------------------------------------------------------------------------------------- |
| `1150`        | `0000`        | Hard cut. Empty background.                                                                  |
| `1152`–`1172` | `0002`–`0022` | The two column heads, `kivgraph` and `grep + read`, arrive together.                         |
| `1160`–`1180` | `0010`–`0030` | The hairline rule under the heads, to `0.9` opacity.                                         |
| `1164`–`1188` | `0014`–`0038` | The cost row, `tokens`: the subject figure at 76 px, the baseline figure at 36 px and faint. |
| `1192`–`1212` | `0042`–`0062` | The first correctness row.                                                                   |
| `1216`–`1236` | `0066`–`0086` | The second correctness row.                                                                  |
| `1240`–`1260` | `0090`–`0110` | The third correctness row.                                                                   |
| `1266`–`1286` | `0116`–`0136` | The source note, below the body, lands last.                                                 |
| `1286`–`1348` | `0136`–`0198` | Settled. The render measures 63 byte-identical frames.                                       |
| `1348`–`1360` | `0198`–`0210` | The whole table fades out together.                                                          |

The table is built before it is filled: the heads and their rule arrive first,
because a figure landing in an unheaded column is a number with no claim
attached. The three correctness rows then arrive on a 24-frame pitch — the same
number as the 24 px between their tops — so the table fills at one speed and
reads as one object being completed rather than as four statements being made.

Only the hard cut at `1150` and the still-image key frame at `1190` are fixed by
the storyboard. The rest is the built rhythm and may shift, provided no element
loses dwell against the table in `## Motion` and the cost row is still complete
at `1190`.

Master timeline: **1570 frames, 26.17 s**. Nothing before `1150` moved: scenes
01–06 are untouched. Scene 08 is `1360`–`1450` and scene 09 is `1450`–`1570`.

## Initial state

At `1150` the frame is empty: `background` `#0a0b0d`, edge to edge. No panel, no
hairline, no residue of the prompt layer, no graph, no logo.

The emptiness is the hard cut's whole effect. Cutting from a dense frame of agent
output to bare background is what signals that the register has changed.

## Final state

At master `1347`, the last frame before the fade, the table is complete and
static:

- two column heads, `kivgraph` and `grep + read`, 18 px `textMuted`, each
  right-aligned on its own column;
- one 1 px hairline under them at `y 388`, spanning the table's full 800 px;
- the cost row, `tokens`: the subject figure at 76 px `textPrimary`, the baseline
  figure at 36 px `textFaint`;
- three correctness rows, each stating both columns at 36 px `textPrimary`;
- the source note alone below the body, 18 px `textFaint`, with no figure beside
  it;
- nothing in motion.

<!-- FIGURE PENDING: the eight cell values, the three correctness row labels and
     the source-note string. The structure above is built and measured; the
     contents are not confirmed. -->

The row where the two columns differ is the cost row, and that difference is what
the composition exists to carry. The correctness rows are stated at equal weight
in both columns, which is a claim about the measurement and not a design choice —
see `## Provenance` → **The discrepancy that put every figure on hold** before
treating that shape as settled.

The render measures this frame byte-identical for **63 frames**, master `1286`–
`1348`. A viewer landing on any one of those 63 frames should be able to
reconstruct the entire argument of the scene without having seen it fill.

## Visual composition

Typography only, laid out as a **comparison table**: two arms as column heads,
four measures as rows, one hairline under the heads, one source note below the
body.

```text
                          kivgraph        grep + read
              ────────────────────────────────────────
tokens                    [cost A]           [cost B]
[measure 2]                [fig A]            [fig B]
[measure 3]                [fig A]            [fig B]
[measure 4]                [fig A]            [fig B]

[source note]
```

<!-- FIGURE PENDING: the bracketed cells, the three measure labels and the
     source-note string. The shape of the diagram - two headed columns, one
     rule, four rows, a detached note - is the built layout and is correct. -->

**Why two columns.** The scene's argument is a comparison, so the composition has
to be one. Each column right-aligns on its own edge, which is the whole
convention of a figure column, and it is what lets the cost row's two figures be
read as one measure at two magnitudes rather than as two unrelated numbers. Two
figures floating at different sizes have to be compared by the viewer, from
memory, while the scene moves on; a single column with a baseline figure floating
beside it makes the viewer supply the comparison. Nothing is centred row by
row — centring each row independently would make four rows into four objects, and
this scene is one object.

Columns, in master pixels, exported as `tableGrid` from
`src/components/BenchmarkMetric.tsx`:

- `labelLeft: 560`, `columnRight: [1060, 1360]` — 800 px wide, centred in the
  1920 frame.

Two proportions were measured off a render and then fixed. The gap from a label
to its first figure runs **251–352 px** depending on how long the label is, and
the gap between the two figures runs **200–222 px**. A label therefore reads as
belonging to its row while the two figures still read as two columns rather than
as one wide number. The first attempt had those at **466** and **248**, which
detached the last row's label from its own figure while letting that row's two
figures crowd each other.

Vertical positions, in master pixels:

| Element           | Top   |
| ----------------- | ----- |
| column heads      | `342` |
| the hairline rule | `388` |
| row 1 (cost)      | `416` |
| row 2             | `516` |
| row 3             | `576` |
| row 4             | `636` |
| the source note   | `716` |

Vertical rhythm: 24 px between rows, 28 px either side of the rule, and **44 px
above the source note**. The note gets nearly double a row's gap because at a
row's spacing it read as a fifth measure that had lost its figures; a source note
has to sit outside the body it vouches for.

The block runs `342`–`734` and is centred on **538**, not 540: mono digits sit
high in their em, so a geometrically centred box of numerals reads low. Within a
row, everything sits on the tallest figure's optical centre
(`top + size * 0.375`), not on its top edge — in the cost row the two figures
differ by 40 px of size, and aligning tops would leave the smaller one floating
above its own baseline. The table is centred within the frame so future
1:1 / 4:5 / 9:16 variants remain possible (`STORYBOARD.md` §2, `AGENTS.md` §38).

Measured in the render: column A right-aligns at exactly `x 1058` and column B at
`x 1358` — 1–2 px of mono side bearing inside the declared column edges — the
block's ink spans `x 561`–`1358` for a centre of **959.5** against a frame centre
of 960, and the rule is 1 px tall and exactly 800 px wide at `y 388`.

Type, all `JetBrains Mono`, weights 400 and 500 only:

- the cost row, subject column: 76 px, weight 500, `textPrimary` `#f5f5f5`;
- the cost row, baseline column: 36 px, weight 400, `textFaint` `#737373`;
- the six correctness figures: 36 px, weight 400, `textPrimary` `#f5f5f5`;
- row labels and column heads: 18 px, `textMuted` `#a3a3a3`, letter-spacing
  `0.04em`;
- the source note: 18 px, `textFaint` `#737373`.

Everything is monospace: every string here is a technical value or a label on
one, which is exactly `AGENTS.md` §27's monospace case.

**The baseline figure in the cost row is the only dimmed figure in the table.**
`textFaint` in this scene means one thing: *the baseline, on the one measure where
the columns differ*. In the three correctness rows both columns are `textPrimary`,
at the same size and the same weight, because dimming one side of an equal pair
would assert a difference the measurement does not report — it would turn a
stated equality into an implied win, which is the one thing this scene is not
allowed to do (`AGENTS.md` §29). Whether those three rows are in fact equal is the
open question in `## Provenance`; the rule about dimming holds either way, because
it is a rule about not letting the type contradict the data.

**The column heads are labels, not a subject marker.** `kivgraph` and
`grep + read` are both `textMuted`, the same treatment the row labels get,
because all six of those strings are labels. The hierarchy in this frame is
carried by the figures. Colouring the subject column would contradict the
equal-weight correctness rows in the same frame that states them.

**The comparison reads by scale, not by colour.** The cost row is the only one
that breaks the 36 px figure size, and inside it the subject figure is 76 px
against the baseline's 36 px. That is the whole visual argument, which is why
nothing in the frame is colour-coded: per `AGENTS.md` §37 important meaning may
not depend solely on colour, and a green-versus-red win/lose pair would also read
as marketing rather than measurement. The comparison has to survive in greyscale,
which means it cannot be rescued by colour.

Accent is not used. The scene is fully neutral — `background`, `textPrimary`,
`textFaint`, `textMuted` and one `border` hairline — and the global 10–15 % accent
budget (`AGENTS.md` §26) is satisfied elsewhere in the video.

One 1 px `border` `#22262b` hairline, under the column heads, at `0.9` opacity.
It is the only structural line the frame gets. Depth in this project comes from
hairlines and surface steps, never shadows (`AGENTS.md` §25 house style): no
card, no box, no fill, no rules between rows, and no borders on the table — a
bordered table would be a screenshot of a spreadsheet, which is the opposite of
what the scene is for.

## Motion

Six entrances, one rule, a hold, one fade. Nothing else.

Each element: opacity `0 → 1` with a 6 px upward settle, on the storyboard's
controlled curve (`Easing.bezier(0.22, 1, 0.36, 1)`). Precise, mechanical, no
bounce, no scale-up, no blur, no slide from off-frame. The motion language here is
`STORYBOARD.md` §8: *precisas, rápidas, controladas*.

Windows as built:

| Element                   | Local       | Master        |
| ------------------------- | ----------- | ------------- |
| the two column heads      | `002`–`022` | `1152`–`1172` |
| the hairline rule         | `010`–`030` | `1160`–`1180` |
| the cost row              | `014`–`038` | `1164`–`1188` |
| correctness row 1         | `042`–`062` | `1192`–`1212` |
| correctness row 2         | `066`–`086` | `1216`–`1236` |
| correctness row 3         | `090`–`110` | `1240`–`1260` |
| the source note           | `116`–`136` | `1266`–`1286` |
| fade out, the whole table | `198`–`210` | `1348`–`1360` |

The heads and the rule arrive first and almost together: the table has to exist
before it can be filled. The rule fades to `0.9`, not to `1` — it separates the
heads from the body, it is not a row of the table. The source note lands last,
because a source note is read after the thing it vouches for.

**The 24-frame pitch.** The three correctness rows start 24 frames apart, which
is the same number as the 24 px between their tops. That is not a coincidence
kept for its own sake: a constant pitch makes the table fill at one speed, so the
frame reads as one object being completed. Rows arriving at varying intervals
read as separate assertions being made one after another, which is the opposite
of what a table is for.

Storyboard frame numbers mark when a beat **reads**, not when its ramp begins,
and frame `1190` is the case where that matters. It is a designated still-image
key frame (`STORYBOARD.md` §29). The cost row therefore completes at `1188`, and
the first correctness row does not begin until `1192`. A half-faded figure at
`1190` would ruin the one frame from this scene that gets used outside the video.

**No count-up, no odometer, no ticking numerals.** Numbers appear at their final
value. Two reasons, and both are hard: a mid-count still frame displays a number
that is not the published benchmark, which is a benchmark-integrity problem
(`AGENTS.md` §29), and a counting animation is exactly the "look at how impressive
this is" gesture the storyboard rules out. The numbers speak for themselves only
if they are allowed to simply be there.

**The hold, and why the scene is 210 frames.** The storyboard drafted 120, and the
number that grew it is **dwell time**: how long a readable thing stays on screen
after it has finished arriving — the same measurement that repaced scenes 04, 05
and 06. At 120 frames a two-column table of four measures could not finish
arriving at all.

Measured on the 210-frame cut, with the fade beginning at master `1348`:

| Element           | Settles at master | Dwell               |
| ----------------- | ----------------: | ------------------- |
| column heads      |            `1172` | 176 frames / 2.93 s |
| the cost row      |            `1188` | 160 frames / 2.67 s |
| correctness row 1 |            `1212` | 136 frames / 2.27 s |
| correctness row 2 |            `1236` | 112 frames / 1.87 s |
| correctness row 3 |            `1260` |  88 frames / 1.47 s |
| the source note   |            `1286` |  62 frames / 1.03 s |

The binding element is the source note, at 1.03 s. It is the longest quiet string
in the scene and the last thing to arrive, so it sets whether the scene is
readable at all.

<!-- FIGURE PENDING: the source note's character count and the resulting
     characters-per-second reading rate against this project's 25-40 budget for
     on-screen technical text. The 1.03 s is measured and correct; the rate
     depends on the note's final string. -->

The hold from master `1286` to `1348` is not padding and it is not a settled
frame waiting for a cut. Four measures across two columns can only be read as one
composition while they are all on screen together, and this is the only place in
the scene where that is true. The render measures **63 byte-identical frames**
there.

The scene is fully static from `1286`, so the fade toward `08-brand.md` begins
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

The whole table fades out together over `1348`–`1360`, ending on black at `1360`.
It fades as one composition; fading the rows out in sequence would restate the
cascade backwards and cost the brand reveal its silence. The last rendered frame
of the scene, `1359`, is one frame short of black — the render contains no fully
black frame.

`1360`–`1370` is black, and it is not a hole in the timeline: it is scene 08's
own opening beat, its scene-local `0000`–`0010`, and `08-brand.md` owns it. That
black is the `silence` in the §27 path, and it separates this scene's evidence
from the logo so the reveal is not read as a fifth measure.

## Copy

Verbatim, and complete — this scene contains no other text.

Column heads, in column order:

```text
kivgraph
grep + read
```

Row labels:

```text
tokens
```

<!-- FIGURE PENDING: the three correctness row labels and the source-note
     string. They are copy, but they name measures whose figures are
     unconfirmed, and if the question set changes the row set changes with
     it. -->

`kivgraph` is **lowercase deliberately**. It is a benchmark arm standing beside
`grep + read`, not the brand lockup: this scene names a thing that was measured,
and the name of the product arrives one scene later, in `08-brand.md`, where it
is allowed to be a logo. Capitalising it here would make the column head an
assertion instead of a label.

The storyboard's strings changed **role** rather than wording. `grep + read` is
now a column head rather than a row label. `tokens` labels the cost row. The two
storyboard statements that used to be split label/value pairs are no longer
pairs: one is now a row label whose figures live in the two columns, and the
other has moved into the source note, where it states the scale the whole table
holds at — which is where it always belonged. `published benchmark` remains the
source note's tail, lowercase, a provenance stamp rather than a heading.

The correctness rows are three rather than one on purpose. One row asserting that
a tool is right is easy to disbelieve; three independent measures agreeing is a
shape a technical viewer recognises and can check. That reasoning survives the
figure hold, but the specific three measures do not — see `## Provenance`.

No unit explanations, no footnotes, no percentage, no "vs", no comparative
sentence. The relationship between the cost row's two figures is carried by the
two column edges and the size difference. If it needs a word to be understood,
the layout is wrong.

## Key frames

```text
frame 1150 — hard cut; empty frame, nothing yet
frame 1190 — column heads, rule and the cost row all complete; the two cost
             figures legible under their two named arms, correctness rows not
             yet arrived; STILL-IMAGE KEY FRAME
frame 1250 — heads, rule, cost row and the first two correctness rows complete,
             the third mid-arrival
frame 1300 — the settled table, inside the 63-frame identical run 1286-1348
frame 1347 — the last frame before the fade
```

`1190` is on both `AGENTS.md`'s still-image key frame list and `STORYBOARD.md`
§29: it is designated for the benchmark launch and must work as a standalone
image for landing page, README, and social use. It is a hard requirement on this
scene, not a nicety. Inspect it as an exported PNG, not only in the Studio
scrubber.

<!-- FIGURE PENDING: STORYBOARD.md §29 specifies the required content of this
     still as two named figures. Do not restate them here until the figure set
     is confirmed. -->

The rebuild **improved that frame**. It now shows the cost row's two figures with
both arms named above them, so the still explains itself: a reader who has never
seen the video can tell which number belongs to which way of working. The
previous build put two bare numbers there and left the caption to do that work.
Its one remaining compromise is vertical; see `## Current compromises`.

## Invariants

- **The figures are the published benchmark and are never adjusted for visual
  convenience** (`AGENTS.md` §29). Not rounded to look neater, not inflated, and
  not chosen from among conflicting sources for being the most flattering. If the
  published benchmark changes, then `STORYBOARD.md`, this document,
  `04-blast-radius.md` and `06-agent-answer.md` are updated together in the same
  task, along with every visual reference.
- **The figures are never re-derived from a superseded or uncorroborated pass.**
  Prefer the upstream benchmark's machine-readable results over any prose
  narrative about them; where the two conflict, the results file is the record.
  This is the invariant this scene has already been caught violating — see
  `## Provenance`.
- **The figures are stored as strings, not numbers.** A figure quoted with a
  suffix is not that suffix applied to an integer, and a figure quoted to two
  decimal places is not an integer formatted to two places. The published values
  are quoted at a specific precision, and formatting a number would let a future
  edit change the precision — which is the same thing as changing the value.
- **Rows whose two figures are equal are never dimmed relative to each other.**
  In every correctness row both columns are `textPrimary`, at the same size and
  the same weight. Dimming one side of an equal pair would assert a difference
  the measurement does not report.
- **The baseline figure in the cost row is the only dimmed figure in the table.**
  `textFaint` means "the baseline, on the one measure where the columns differ",
  and it never spreads to another row.
- **The column heads are labels, not a coloured subject marker.** `kivgraph` and
  `grep + read` are both `textMuted`, identical to the row labels. Marking the
  subject column with accent or `textPrimary` would contradict the equal-weight
  correctness rows in the same frame that states them.
- **The shared right edge, per column.** Column A right-aligns on
  `tableGrid.columnRight[0]` `1060` (measured ink at `x 1058`) and column B on
  `columnRight[1]` `1360` (measured at `x 1358`). The comparison is made by the
  composition, not by the viewer. A row that centres itself, or a figure that
  opts out of its column, destroys the scene's mechanism.
- **The 76/36 pair.** In the cost row the subject figure is 76 px against the
  baseline's 36 px, and that is the entire visual argument. The cost row is the
  only row allowed to break the 36 px figure size. The type scale lives once in
  `BenchmarkMetric.tsx`'s `emphasis` map and the component takes no `fontSize`
  and no colour, so the hierarchy cannot be narrowed one call at a time.
- **No colour-coding, ever.** Never a green-versus-red pair, never an accent on
  one side of the comparison. The comparison must survive in greyscale
  (`AGENTS.md` §37); as built the scene uses no accent at all.
- **The source note sits outside the table body**, bottom left, 44 px below the
  last row, quieter than the labels above it, with no figure beside it. It is
  never a fifth row.
- **No count-up, ever.** Numbers render at their final value on every frame on
  which they are visible. No odometer, no ticking numerals, not even over four
  frames.
- **One hairline only, and no borders.** No card, no box, no fill, no rules
  between rows, no outline around the table.
- No giant bar charts. No pie charts. No gauges. No animated graphs.
- No confetti, no bursts, no shine sweep, no celebration of any kind.
- Nothing resembling `90% BETTER!!!`. No percentage improvement, no superlative,
  no exclamation mark anywhere in the scene. The honest form of this claim is the
  raw fraction with its corpus named beside it; see `## Provenance` → **The
  caution the film inherits**.
- The figures speak for themselves. Nothing is added to help them.
- Typography only. No graph, no terminal, no product UI, no logo, no device
  frame, no background texture.
- Frame `1190` works as a still image, with both cost figures fully legible and
  both arms named above them.
- The hard cut at `1150` stays hard.
- The scene is static from `1286` to `1348`, and the whole table leaves together.

## Flexible elements

- Exact row tops and the vertical rhythm, provided the source note keeps roughly
  double a row's gap above it.
- The table's width and column positions, provided the two measured proportions
  hold: a label sits 251–352 px from its first figure, and the two figures sit
  200–222 px apart. Those are the numbers that keep a label attached to its row
  without letting the two figures merge into one wide number.
- Whether the hairline under the column heads exists at all, and its opacity
  (built: `0.9`).
- Easing and travel distance of the entrances (built: 6 px, `Easing.bezier(0.22,
  1, 0.36, 1)`).
- Letter-spacing and tabular-figure settings on the numerals (built: `-0.02em` on
  figures, `0.04em` on labels, column heads and the source note).
- The 24-frame pitch of the correctness rows, provided it stays constant across
  all of them: the table has to fill at one speed.
- The exact window starts, provided no element loses dwell against the table in
  `## Motion` and the cost row is complete at `1190`.
- **The row set itself, until the figure hold lifts.** How many correctness rows
  there are, and what they measure, follows the confirmed figure set rather than
  this layout. Four rows is what is built; it is not yet an invariant.

Not flexible, and stated in `## Invariants`: the 76/36 size pair, the per-column
right edges, the equal treatment of any row whose figures are equal, the baseline
cost figure as the only dimmed figure, the column heads as plain labels, and
whether any accent is used.

## Technical notes

- Component: `src/scenes/BenchmarkScene.tsx`. It owns the layout — four entries
  in one `layout` constant (`headerTop` `342`, `ruleY` `388`, `rowTops`
  `[416, 516, 576, 636]`, `noteTop` `716`) — and the timing: the header `entry`,
  the rule's `ramp`, the `rowEntry` windows, the note's `entry`, and `fadeOut`.
- **There is deliberately no state module.** Scenes 05 and 06 have
  `src/three/semanticState.ts` and `src/three/answerState.ts` because they have
  state worth naming. This scene's state is seven ramps and a fade; a module for
  that would be an empty file. All state derives from the frame (`AGENTS.md`
  §17).
- `src/components/BenchmarkMetric.tsx` exports `BenchmarkMetric` **and**
  `tableGrid`. `BenchmarkMetric` is **one table row**: `label` (the measure,
  left, 18 px `textMuted`), `values` (a `readonly [string, string]`, one figure
  per arm, each right-aligned on its own column), `emphasis` (`cost | claim`),
  `top`, `opacity`, `offsetY`. It owns the type scale and the column geometry;
  the caller never passes a font size or a colour.
- The `emphasis` map is where the two rules that matter live. `cost` is
  `[76, 36]` px at weights `[500, 400]` in `[textPrimary, textFaint]`; `claim` is
  `[36, 36]` at `[400, 400]` in `[textPrimary, textPrimary]`. That second entry
  encodes the equal pair once, so there is no way for a caller to dim one side of
  a correctness row — and no way to do it accidentally while adding a row.
- `tableGrid` is `{ labelLeft: 560, columnRight: [1060, 1360] }`, exported
  because both the column heads and the rule under them span exactly these
  columns. A rule that misses the table it divides by a few pixels is the kind of
  detail that makes a frame look assembled rather than designed.
- Row internals align on the tallest figure's optical centre,
  `top + size * 0.375`, not on the top edge. Mono digits fill about three
  quarters of their em; in the cost row the two figures differ by 40 px of size,
  and aligning tops would leave the smaller one floating above its own baseline.
- `MetricCard.tsx` is the blast-radius impact card and is a different component;
  do not reuse it here, because this scene must have no card in it.
- Benchmark figures: `src/data/benchmark.ts`, exporting `arms`, `rows` and
  `sourceNote`, with the provenance in the file's own doc comment. §29's update
  procedure has to have a single place to land; eight cell values spread through
  a component are eight places to forget. **That file currently holds the
  disputed figure set** — see `## Provenance`.
- Global scene boundaries live inline in `src/Composition.tsx` as
  `<Sequence name="07 Benchmark" from={1150} durationInFrames={210} premountFor={30}>`
  literals, because Remotion Studio can only trim inline literals. There is no
  timing module. The component animates in scene-local frames:
  `useCurrentFrame()` inside the Sequence starts at `0`. The composition's
  `mountedFrames` is `1360`, this scene's end boundary.
- Fonts from `src/brand/fonts.ts` (`"JetBrains Mono"`, local `.woff2` via
  `@remotion/fonts`, loaded deterministically). Large numerals are where a late
  font swap is most visible, so no fallback family here.
- No `fontVariantNumeric` is set: `JetBrains Mono` already advances every digit
  identically, and the render confirms it — column A lands a right edge at
  `x 1058` and column B at `x 1358`, on every row. If a future font change
  misaligns digits, add tabular figures rather than nudging a row; misaligned
  digits at 76 px look like a bug.
- Colours from `src/brand/tokens.ts`. No raw hex in the component. The scene uses
  `background`, `textPrimary`, `textFaint`, `textMuted` and `border`, and no
  accent.
- The cheapest scene in the video: two heads, four rows, a rule and a note, all
  absolutely positioned. No 3D, no images.
- Measured on the render: **1360 frames with no black frame**, the settled table
  byte-identical for 63 frames (`1286`–`1348`), and the only single-frame
  anomalies at the two hard cuts, `0969`/`0970` and `1149`/`1150`. Seam
  measurements are unchanged by this rebuild: `0629`/`0630` at **62.93 dB** and
  `1149`/`1150` at **22.30 dB** — a hard cut is supposed to measure low.
- Because the frame is nearly empty, check legibility in a small embedded player
  (`STORYBOARD.md` §7). The source note at 18 px in `textFaint` `#737373` is the
  first thing that will disappear at low resolution or high compression, and it
  is now the longest string in the scene rather than one of the shortest. If it
  goes, raise it to `textMuted` `#a3a3a3` rather than enlarging it — its
  quietness is intentional, its invisibility is not.

## Current compromises

- **The figure set is on hold, and this outranks every other compromise here.**
  The layout, the timing and the geometry are built, rendered and measured. The
  cell contents are not confirmed: the pass they came from is recorded only in
  prose and is contradicted by the upstream benchmark's machine-readable
  results. Until that is resolved this document carries
  `<!-- FIGURE PENDING: … -->` markers instead of values, and the rendered scene
  is showing figures that may be wrong. **Do not ship this scene.** See
  `## Provenance`.
- **Implemented, and rebuilt as a two-column comparison table.**
  `src/scenes/BenchmarkScene.tsx`, `src/components/BenchmarkMetric.tsx` and
  `src/data/benchmark.ts` exist and the scene renders. This document describes
  what is built, not a specification waiting to be satisfied. It has been
  re-authored twice in one day: if a future agent finds a sentence describing a
  single value column, or a `label → value` pair, or a mid-table rule, that
  sentence is a leftover and the two-column table wins.
- **The `1190` still names both arms now, but still sits above frame centre.**
  The frame delivers what `STORYBOARD.md` §29 asks — both cost figures complete
  and legible — and it delivers it better than the previous build did, because
  `kivgraph` and `grep + read` are named above the figures, so the still is
  self-explanatory as a standalone image. The pair still sits high, because the
  block is laid out for four rows and the lower three are empty at `1190`. That
  is a **crop question, not a layout one**: centring the pair would decentre the
  settled table, and the settled table is the image the film actually shows,
  byte-identical, for 63 frames. A still that needs the pair optically centred
  should be cropped.
- **The correctness measures are jargon, accepted deliberately.** The labels on
  the correctness rows are terms of art, not general-audience words, and a
  general audience would need a sentence for each — which this scene refuses to
  give. The audience for this film is developers, and to that audience the terms
  are precise, familiar and unarguable. A viewer who does not know them still
  reads two figures side by side and gets the shape. The alternative was a
  plain-language paraphrase, which would have been longer, softer, and would have
  looked like it was avoiding the real terms.
- **Naming the other measured arms: open.** The upstream benchmark measures more
  tools than the film shows. They are out because naming competitors is a
  strategic decision rather than a design one, and because their figures are
  pinned to versions that will move. **That is the current decision, not a closed
  one**; it belongs to the user, not to this document. See `## Provenance` → **The
  rival arms that are not in the table**.
- **Accent, decided: none.** The rendered scene uses no accent at all: a neutral
  frame is what makes the comparison survive in greyscale, and the 10–15 % accent
  budget (`AGENTS.md` §26) is satisfied elsewhere in the video.
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

```text
2026-08-26
- Rebuilt a second time on the same day, on art direction: "una tabla
  comparativa ... tipo con mas datos de benchmarks". The scene is now a
  two-column comparison - two arms as column heads, four measures as rows, one
  hairline under the heads, one source note below the body - and not the
  unit/value table the entry above describes. `kivgraph` and `grep + read` head
  the columns and `tokens` labels the cost row. The entry above is a dated record
  of the previous build and is left as written.
- The reason for two columns is that the comparison is now made by the layout
  rather than by the viewer from memory. Each column right-aligns on its own
  edge: measured, column A at `x 1058` and column B at `x 1358`. `tableGrid` is
  now `labelLeft` 560 with `columnRight` [1060, 1360] - 800 px wide, centred -
  replacing 720/1200 and 480 px. Row tops are 416, 516, 576 and 636, the column
  heads sit at 342, the one rule at y 388 and the source note at 716; the block
  runs 342-734, centred on 538 rather than 540 because mono digits sit high in
  their em. The block's ink spans `x 561`-`1358` for a centre of 959.5 against a
  frame centre of 960, and the rule is 1 px tall and exactly 800 px wide.
- The label-to-figure and figure-to-figure gaps were measured and then fixed at
  251-352 px and 200-222 px. The first attempt had them at 466 and 248, which
  detached the last row's label from its own figure while letting that row's two
  figures crowd each other.
- The type pair is now 76/36 px, replacing 88/40, and the mid-table rule became
  one hairline under the column heads. The baseline figure in the cost row is the
  only dimmed figure in the table: in the correctness rows both columns are
  `textPrimary` at the same size and weight, because dimming one side of an equal
  pair would assert a difference the measurement does not report. The column
  heads are `textMuted`, the same as the row labels - all six are labels, the
  hierarchy is carried by the figures, and colouring the subject column would
  contradict the equal-weight rows in the same frame.
- Copy changed role rather than wording. `grep + read` became a column head. The
  two storyboard statements that were split label/value pairs are no longer
  pairs: one is a row label whose figures live in the two columns, the other
  moved into the source note as the scale the whole table holds at. `published
  benchmark` remains the source note's tail. `kivgraph` is lowercase
  deliberately: it is a benchmark arm beside `grep + read`, not the brand lockup.
  Three correctness rows rather than one, because one row asserting a tool is
  right is easy to disbelieve and three agreeing measures is a shape a technical
  viewer can check. The three labels are terms of art, accepted as jargon for a
  developer audience.
- The scene grew from 170 to 210 frames (2.83 s to 3.5 s) on dwell time again:
  the table now has six things to land instead of five. Windows, scene-local to
  master: column heads 2-22 / `1152`-`1172`, the rule 10-30 / `1160`-`1180` to
  0.9 opacity, the cost row 14-38 / `1164`-`1188`, correctness rows 42-62 /
  `1192`-`1212`, 66-86 / `1216`-`1236` and 90-110 / `1240`-`1260`, the source
  note 116-136 / `1266`-`1286`, fade out 198-210 / `1348`-`1360`. The three
  correctness rows arrive on a 24-frame pitch, the same number as their 24 px
  spacing, so the table fills at one speed and reads as one object being
  completed. Entrances stay opacity 0-1 with a 6 px upward settle on
  `Easing.bezier(0.22, 1, 0.36, 1)`.
- Dwell, with the fade at `1348`: column heads 2.93 s, the cost row 2.67 s, then
  2.27 s, 1.87 s and 1.47 s for the three correctness rows, and 1.03 s for the
  source note. The note is the binding element.
- The scene still cuts in hard at `1150` and did not move; it now ends at `1360`.
  Scenes 08 and 09 each moved a further +40 on top of today's earlier +50 - 08
  from `1320`-`1410` to `1360`-`1450`, 09 from `1410`-`1530` to `1450`-`1570` -
  and the master timeline is now 1570 frames (26.17 s). `mountedFrames` is 1360.
  Scenes 01-06 are untouched; nothing before `1150` moved.
- Measured on the render: 1360 frames with no black frame, the settled table
  byte-identical for 63 frames (`1286`-`1348`), single-frame anomalies only at
  the two hard cuts `0969`/`0970` and `1149`/`1150`, and the seams unchanged at
  62.93 dB across `0629`/`0630` and 22.30 dB across `1149`/`1150`.
- The `1190` still improved. `STORYBOARD.md` §29 designates it a still-image key
  frame showing the two cost figures, and it now delivers them with both arms
  named above, so the still is self-explanatory as a standalone image - which two
  bare numbers were not. The pair still sits above frame centre, because the
  block is laid out for four rows; that stays a crop question, not a layout one.
- Every benchmark figure was withheld from this document rather than written, and
  every sentence that needed one carries a `<!-- FIGURE PENDING: ... -->` marker
  naming what goes there. A verification pass against the upstream benchmark's
  machine-readable results found that the pass this rebuild was built from
  appears only in prose, names no results file, and is contradicted by every
  results file in that directory on token count, both correctness ratios and
  exactly-answered questions - and that no results file records the subject arm
  at a perfect score, while the baseline arm's figures are corroborated. The
  built table therefore states an equality the machine record does not show,
  which is a wrong shape and not merely a wrong number. Provenance was promoted
  to its own section to carry that, together with the caution the benchmark makes
  about its own small question set and the open decision about the other measured
  arms. The figures in `src/data/benchmark.ts` and on screen are unchanged and
  unconfirmed; the scene must not ship until the user resolves the figure set.
```
