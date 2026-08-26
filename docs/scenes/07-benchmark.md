# Scene 07 — Benchmark

## Purpose

This scene replaces the claim with evidence.

Everything up to `1430` was demonstration: a graph, its cross-repository edges,
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

The scene states a cost difference and three correctness measures, in two named
columns, at a stated corpus size. It does not state a superlative and it does not
state a percentage.

Concretely: `35,961` tokens against `267,980` for the same 29 questions, with
`exact answers` at `28 / 29` in both columns, `precision` at `1.000` in both, and
`recall` at `0.996` against `0.989`. The corpus is 37 repositories. The ratio
between the two token figures is 7.45x and the scene never states it — two
figures sharing a row state it better than the word would.

Secondary, carried by the words `published benchmark` in the source note: these
numbers are checkable. Someone can go and read them — see `## Provenance` for
where they live and which file in that directory is the record.

## Provenance

The figures in this scene are not this repository's own. They come from an
upstream benchmark directory, and `src/data/benchmark.ts` is the single place in
this project where they live — its doc comment carries the provenance, and
`AGENTS.md` §29's update procedure lands there.

The authoritative pass:

- file: `kivgraph/benchmarks/graph-tools-comparison/results-all.json`, the
  `aggregate` block;
- commit `954b9eb`, generated `2026-08-22T10:18:32Z`;
- 29 questions over a corpus of 37 git repositories;
- tokenizer `tiktoken`, encoding `o200k_base`;
- machine Apple M5, macOS, arm64.

The two arms the film shows, as that block records them:

| Arm           |    tokens | calls | precision |    recall |   exact | answered |
| ------------- | --------: | ----: | --------: | --------: | ------- | -------- |
| `kivgraph`    |  `35,961` |  `36` |   `1.000` | `0.99617` | `28/29` | `29/29`  |
| `grep + read` | `267,980` | `321` |   `1.000` | `0.98851` | `28/29` | `29/29`  |

The baseline arm is recorded upstream as `native`. It is the `grep + read` arm,
and the film names it that way because that is what an agent without any tool
actually does. The cost ratio is `267980 / 35961` = **7.45x**; it is stated here
and nowhere on screen.

### The discrepancy that put every figure on hold, and how it resolved

The set this scene was first built from was a 7-question set that claimed the
subject arm at `7 / 7`. **No results file records that.** The passes on disk
read `4/7` (`results.json`, commit `4c1bfae`) and `6/7`
(`results-0.3.6.json`, commit `954b9eb`). The `7 / 7` came from the closing
prose of `remeasure.md`, which attributes it to `results-0.3.6.json` at commit
`71e6c57` — but all three of that note's passes wrote to that same filename, so
each overwrote the last, and the run that substantiated `7 / 7` no longer
exists. It cannot be re-checked, because it is not there.

The old on-screen set was `6.2k` / `63.5k` / `7 / 7` / `1.00` / `1.00`. It is
gone. The 29-question set above replaces it, and the difference that matters is
not that the numbers are bigger: it is that this set is a results file rather
than a narrative about one.

The rule that fell out of this is now an invariant. **Prefer the
machine-readable results over prose.** A remeasurement note can describe a pass
whose output was never committed; a results file cannot. Where the two conflict,
the results file is the record and the prose is a claim about it. And do not
resolve such a conflict by picking whichever source makes the film look
strongest: the film is allowed to be less impressive, it is not allowed to be
wrong.

The freeze also raised a question about *shape* rather than values. The table
states its correctness rows with **both columns at equal weight**, which is a
claim that the two arms tie on those measures — and a layout that asserts a tie
the measurement does not report is a benchmark-integrity failure of exactly the
kind `AGENTS.md` §29 exists to prevent, because it is a wrong shape and not
merely a wrong number. On the 29-question set that claim is checkable and it
holds: `exact answers` and `precision` are exact ties, and `recall` differs by
0.007 in kivgraph's favour. The equal-weight shape is therefore load-bearing and
true, which is why `## Invariants` now protects it.

### Display precision

Two display decisions are part of the figure set and not formatting.

Token counts are stated **exactly and comma-grouped** — `35,961` and `267,980`,
never `36k` and `268k`. An exact count is a measurement; a rounded one is a
summary of a measurement, and at 76 px that is the difference between a fact and
a headline.

`recall` is stated to three decimals, and `precision` is stated to three
decimals **to match it** even though both arms are at `1.000`. The reason is the
column, read downward: at two decimals `recall` would read `1.00` against
`0.99`, which flatters kivgraph to a perfect score it did not earn and inflates
the visible gap from 0.007 to 0.01. Three decimals states the smaller true gap
and keeps the two ratio rows at one depth.

### The caution the film inherits

The benchmark cautions about itself that its question set is small — 29
questions — and was chosen for what it could discriminate, on a single corpus of
37 repositories. This scene inherits that caution and does not get to drop it.
The subject arm answered all 29 questions and got 28 of them exactly right: that
is one known miss, not a perfect score, and the table says so in the same
denominator it states everything else in. This is why the scene shows raw
fractions rather than a superlative, and why `## Invariants` forbids a
percentage improvement.

### The rival arms that are not in the table

The upstream benchmark measures more arms than the film shows. On this
29-question set the four rival graph tools scored graft `3/29`, graphify `4/29`,
codebase-memory `3/29` and code-review-graph `3/29` on exact answers. They are
**deliberately absent** from the table, for two reasons:

- naming competitors in a promotional video is a strategic decision and not a
  design one, and it is not this document's to make;
- their figures are pinned to versions that will move, whereas the baseline arm
  the film does show cannot go stale the same way — it is what an agent already
  does without any tool at all.

**This is an open decision, not a closed one.** It belongs to the user. If the
decision goes the other way, the table is no longer two columns and every
measurement in `## Visual composition` is void — do not treat the two-column
layout as though the absence had been argued to a conclusion.

The version each rival was pinned to, and any cost-per-correct-answer margin
against them, live upstream and are not restated here.

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

- Global frames: `1430`–`1680`
- Scene-local frames: `0220`–`0470` (last rendered frame `0469` / master `1679`)
- Time: 20.17 s – 24.33 s
- Duration: 250 frames / 4.17 s at 60 fps
- Remotion component: `src/scenes/BenchmarkScene.tsx`

The storyboard drafted 120 frames. The scene is 210, because a two-column table
of four measures cannot finish arriving in 120: see `## Motion` → **The hold, and
why the scene is 210 frames**.

Beats, as built:

| Master        | Local         | Beat                                                                     |
| ------------- | ------------- | ------------------------------------------------------------------------ |
| `1430`        | `0000`        | Hard cut. Empty background.                                              |
| `1432`–`1452` | `0002`–`0022` | The two column heads, `kivgraph` and `grep + read`, arrive together.     |
| `1440`–`1460` | `0010`–`0030` | The hairline rule under the heads, to `0.9` opacity.                     |
| `1444`–`1468` | `0014`–`0038` | The cost row, `tokens`: `35,961` at 76 px, `267,980` at 36 px and faint. |
| `1472`–`1492` | `0042`–`0062` | The `exact answers` row: `28 / 29` in both columns.                      |
| `1496`–`1516` | `0066`–`0086` | The `precision` row: `1.000` in both columns.                            |
| `1520`–`1540` | `0090`–`0110` | The `recall` row: `0.996` against `0.989`.                               |
| `1546`–`1566` | `0116`–`0136` | The source note, `37 repositories · published benchmark`, lands last.    |
| `1566`–`1668` | `0136`–`0238` | Settled. The render measures 63 byte-identical frames.                   |
| `1668`–`1680` | `0238`–`0250` | The whole table fades out together.                                      |

The table is built before it is filled: the heads and their rule arrive first,
because a figure landing in an unheaded column is a number with no claim
attached. The three correctness rows then arrive on a 24-frame pitch — the same
number as the 24 px between their tops — so the table fills at one speed and
reads as one object being completed rather than as four statements being made.

Only the hard cut at `1430` and the still-image key frame at `1510` are fixed by
the storyboard. The rest is the built rhythm and may shift, provided no element
loses dwell against the table in `## Motion` and the cost row is still complete
at `1510`.

Master timeline: **1890 frames, 26.17 s**. Nothing before `1430` moved: scenes
01–06 are untouched. Scene 08 is `1680`–`1770` and scene 09 is `1770`–`1890`.

## Initial state

At `1430` the frame is empty: `background` `#0a0b0d`, edge to edge. No panel, no
hairline, no residue of the prompt layer, no graph, no logo.

The emptiness is the hard cut's whole effect. Cutting from a dense frame of agent
output to bare background is what signals that the register has changed.

## Final state

At master `1667`, the last frame before the fade, the table is complete and
static:

- two column heads, `kivgraph` and `grep + read`, 18 px `textMuted`, each
  right-aligned on its own column;
- one 1 px hairline under them at `y 388`, spanning the table's full 800 px;
- the cost row, `tokens`: `35,961` at 76 px `textPrimary`, `267,980` at 36 px
  `textFaint`;
- `exact answers`, `28 / 29` against `28 / 29`, both at 36 px `textPrimary`;
- `precision`, `1.000` against `1.000`, both at 36 px `textPrimary`;
- `recall`, `0.996` against `0.989`, both at 36 px `textPrimary`;
- the source note alone below the body, `37 repositories · published benchmark`,
  18 px `textFaint`, with no figure beside it;
- nothing in motion.

The only row where the two columns differ by an order of magnitude is the cost
row, and that difference is what the composition exists to carry. Below it,
`exact answers` and `precision` are exact ties and `recall` differs by 0.007 in
kivgraph's favour, so all three are stated at equal weight in both columns —
which is a report of the measurement and not a design choice. See
`## Provenance` → **The discrepancy that put every figure on hold, and how it
resolved**.

The render measures this frame byte-identical for **63 frames**, master `1606`–
`1668`. A viewer landing on any one of those 63 frames should be able to
reconstruct the entire argument of the scene without having seen it fill.

## Visual composition

Typography only, laid out as a **comparison table**: two arms as column heads,
four measures as rows, one hairline under the heads, one source note below the
body.

```text
                          kivgraph        grep + read
              ────────────────────────────────────────
tokens                      35,961            267,980
exact answers              28 / 29            28 / 29
precision                    1.000              1.000
recall                       0.996              0.989

37 repositories · published benchmark
```

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

- `labelLeft: 560`, `columnRight: [1340, 1680]` — 800 px wide, centred in the
  1920 frame.

Two proportions were measured off the render and then fixed. The gap from a label
to its first figure runs **174–331 px** depending on how long the label and its
figure are, and the gap between the two figures runs **158–201 px**. A label
therefore reads as belonging to its row while the two figures still read as two
columns rather than as one wide number. Both ranges tightened when the figures
got longer — `35,961` and `267,980` fill more of their columns than the previous
build's shorter strings did — so the earlier **251–352** and **200–222** are
superseded, as is the first attempt's **466** and **248**, which detached the
last row's label from its own figure while letting that row's two figures crowd
each other.

Vertical positions, in master pixels:

| Element           | Top   |
| ----------------- | ----- |
| column heads      | `562` |
| the hairline rule | `608` |
| row 1 (cost)      | `636` |
| row 2             | `736` |
| row 3             | `856` |
| row 4             | `916` |
| the source note   | `996` |

Vertical rhythm: 24 px between rows, 28 px either side of the rule, and **44 px
above the source note**. The note gets nearly double a row's gap because at a
row's spacing it read as a fifth measure that had lost its figures; a source note
has to sit outside the body it vouches for.

The block runs `562`–`1014` and is centred on **538**, not 540: mono digits sit
high in their em, so a geometrically centred box of numerals reads low. Within a
row, everything sits on the tallest figure's optical centre
(`top + size * 0.375`), not on its top edge — in the cost row the two figures
differ by 40 px of size, and aligning tops would leave the smaller one floating
above its own baseline. The table is centred within the frame so future
1:1 / 4:5 / 9:16 variants remain possible (`STORYBOARD.md` §2, `AGENTS.md` §38).

Measured on the render at settled frame `1665`: column A right-aligns at exactly
`x 1057` and column B at `x 1357` — 3 px of mono side bearing inside the declared
column edges — the block's ink spans `x 560`–`1679` for a centre of **959.5**
against a frame centre of 960, and the rule spans `x 560`–`1679` at `y 388`,
1 px tall and exactly 800 px wide.

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
the columns differ by an order of magnitude*. In the three correctness rows both
columns are `textPrimary`, at the same size and the same weight. On `exact
answers` and `precision` that is an exact tie, and dimming one side of an equal
pair would assert a difference that is not there. On `recall` the columns do
differ — `0.996` against `0.989` — and dimming the baseline there would inflate a
0.007 gap in the third decimal into a visual win. Both faults point the same way,
and the rule that forbids them is the same rule: the type may not contradict the
data (`AGENTS.md` §29).

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
| the two column heads      | `222`–`242` | `1432`–`1492` |
| the hairline rule         | `230`–`250` | `1440`–`1500` |
| the cost row, `tokens`    | `234`–`258` | `1444`–`1508` |
| the `exact answers` row   | `262`–`282` | `1512`–`1532` |
| the `precision` row       | `286`–`306` | `1536`–`1556` |
| the `recall` row          | `310`–`330` | `1560`–`1580` |
| the source note           | `336`–`356` | `1586`–`1606` |
| fade out, the whole table | `418`–`430` | `1668`–`1680` |

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
and frame `1510` is the case where that matters. It is a designated still-image
key frame (`STORYBOARD.md` §29). The cost row therefore completes at local `258`
/ master `1508`, and the `exact answers` row does not begin until `1512`, so
`1510` carries `35,961` and `267,980` settled under their two named arms with
nothing half-arrived beneath them. A half-faded figure at `1510` would ruin the
one frame from this scene that gets used outside the video.

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

Measured on the 210-frame cut, with the fade beginning at master `1668`:

| Element                 | Settles at master |               Dwell | Chars/s |
| ----------------------- | ----------------: | ------------------: | ------: |
| column heads            |            `1492` | 176 frames / 2.93 s |     6.5 |
| the `tokens` row        |            `1508` | 160 frames / 2.67 s |     7.1 |
| the `exact answers` row |            `1532` | 136 frames / 2.27 s |    11.9 |
| the `precision` row     |            `1556` | 112 frames / 1.87 s |    10.2 |
| the `recall` row        |            `1580` |  88 frames / 1.47 s |    10.9 |
| the source note         |            `1606` |  62 frames / 1.03 s |    35.8 |

The binding element is the source note, at 1.03 s and **35.8 characters per
second**: 37 characters in 62 frames. It is the longest quiet string in the scene
and the last thing to arrive, so it sets whether the scene is readable at all,
and it is the row that sets the scene's chars-per-second floor. Every other row
sits between 6.5 and 11.9, so nothing else is close. 35.8 is inside this
project's 25–40 budget for on-screen technical text, with nothing to spare — if
the note ever gets longer, the scene has to get longer with it.

The hold from master `1606` to `1668` is not padding and it is not a settled
frame waiting for a cut. Four measures across two columns can only be read as one
composition while they are all on screen together, and this is the only place in
the scene where that is true. The render measures **63 byte-identical frames**
there.

The scene is fully static from `1606`, so the fade toward `08-brand.md` begins
from a settled frame.

## Three.js

Not used.

## Transition in

Hard clean cut at `1430` (`STORYBOARD.md`: *hard cut limpio*).

No crossfade, no dissolve, no motion carried over from the terminal. The
abruptness is the point: the video steps out of the demonstration and states a
measurement. The whole frame measures 24.25 dB across the boundary, which is what
a hard cut measures.

It is a match cut on one element. The attribution line `Answered with Kivgraph`
arrives already on screen at `1430`, at exactly the position, size, colour and
letter-spacing scene 06 left it — that region measures `inf` PSNR across the cut
— and retires over local `2`–`18` as the column heads arrive. The word
`Kivgraph` is handed from a signature at 17 px to a column head at 18 px, which
states the pivot from "Kivgraph produced this answer" to "and here is what the
answer cost" without a sentence.

Nothing else from `06-agent-answer.md` persists — not the panel, not the prompt,
not the three answer blocks. `STORYBOARD.md`'s frame spec for `1430` still holds
exactly as written: background, *sin grafo*, *sin terminal*, *sin chrome de
producto*, *sólo tipografía*. The carried line is typography.

### Why anything is carried at all

Scene 06 is byte-identical for its last 87 frames, `1343`–`1429`, and that
stillness is the only place in that scene where the answer is read, so it cannot
be trimmed. This scene used to open on a frame holding 34% of its settled ink,
reaching 38% by local 6. A hard cut out of a frozen frame and into an almost
empty one reads as the film stalling rather than as a change of register: the
viewer's eye is parked at the answer's last line around `y 956` and the table
builds at `y 342`–`1014`, so for a third of a second there was nothing to look at
anywhere.

Carrying the attribution puts something at `1430` in the place the eye already
is, and then moves the eye up by taking it away. The alternative considered and
rejected was a crossfade, which both this document and `06-agent-answer.md`
rejected independently for the same reason: it blends two claims into one. A
crossfade would also have made the wrong problem worse — this cut was never too
abrupt, it was landing in a vacuum.

The geometry lives in `components/Attribution.tsx`, not in either scene, so the
two frames either side of the cut cannot disagree about it. A single pixel of
drift would turn the match into a mistake. Same reason `ImpactReport` is shared
by scenes 04 and 05.

## Transition out

Per `STORYBOARD.md` §27, the metrics-to-logo transition is:

```text
fade
↓
silence
↓
brand reveal
```

The whole **table** fades out together over `1668`–`1680`, ending on the empty
brand background at `1680`. It fades as one composition; fading the rows out in
sequence would restate the cascade backwards and cost the brand reveal its
silence.

**The table fades. The background does not.** That distinction was a real defect
until 2026-08-26: the `opacity` sat on the same `AbsoluteFill` that painted
`brand.background`, so the background left with the table and there was nothing
behind it. The frame reached pure `#000000` at `1676` and held it to `1679`, and
scene 08 then restored `#0a0b0d` at `1680` — a ten-level step on a flat frame,
at the one boundary in the film that is meant to be invisible, and precisely the
levels change `08-brand.md` forbids by name. It had been invisible only because
`mountedFrames` was 1680 and the film ended here.

The fade now lives on an inner fill under an opaque one. Only `1668`–`1679`
changed: `fadeOut` is 1 for every frame before local `418`, so `1510`, `1620` and
`1667` are byte-identical to the render before the fix, and nothing about the
`1430` cut or the 63-frame settled run moved. **Never put this scene's fade back
on the element that carries `backgroundColor`.**

Measured after the fix: `1679` and `1680` are pixel-identical, `PSNR = inf`, and
the corner holds `10 11 13` across the boundary. The fade actually lands two
frames early, at `1678`, because the project's easing is within one 255th of its
final value before its ramp ends — so the scene's own tail and scene 08's ten
frames of silence form one twelve-frame identical run, `1678`–`1689`.

`1680`–`1690` is that silence, and it is not a hole in the timeline: it is scene
08's own opening beat, its scene-local `0220`–`0230`, and `08-brand.md` owns it.
It is `#0a0b0d`, not `#000000`. That silence is the `silence` in the §27 path,
and it separates this scene's evidence from the logo so the reveal is not read as
a fifth measure.

## Copy

Verbatim, and complete — this scene contains no other text.

Column heads, in column order:

```text
kivgraph
grep + read
```

The four rows, as label, column A, column B:

```text
tokens          35,961      267,980
exact answers   28 / 29     28 / 29
precision       1.000       1.000
recall          0.996       0.989
```

The source note:

```text
37 repositories · published benchmark
```

That is fifteen strings and nothing else: two column heads, four row labels,
eight figures and one source note.

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

The figures are quoted exactly as the results file records them, at the depth
`## Provenance` → **Display precision** sets out: token counts exact and
comma-grouped rather than rounded to `36k`, and both ratio rows at three
decimals so the column reads at one precision.

**The question count is deliberately absent from the source note.**
`37 repositories · published benchmark` states the corpus and states that the
measurement is checkable, and it does not say `29 questions`, because 29 is
already on screen twice — it is the denominator of `28 / 29` in both columns.
Repeating it would cost the note characters it does not have. At 37 characters
in 62 frames the note already reads at 35.8 characters per second, the tightest
row in the scene and the one that sets its chars-per-second floor, so every
character in it has to be earning something.

The correctness rows are three rather than one on purpose. One row asserting
that a tool is right is easy to disbelieve; three independent measures agreeing
is a shape a technical viewer recognises and can check. `exact answers` is the
coarse, unarguable one — did it produce the answer or not. `precision` and
`recall` are the two halves of the finer question, and stating both is what
stops either from being cherry-picked.

No unit explanations, no footnotes, no percentage, no "vs", no comparative
sentence. The relationship between the cost row's two figures is carried by the
two column edges and the size difference. If it needs a word to be understood,
the layout is wrong.

## Key frames

```text
frame 1430 — hard cut; empty frame, nothing yet
frame 1510 — column heads, rule and the cost row all complete; `35,961` and
             `267,980` legible under `kivgraph` and `grep + read`, the three
             correctness rows not yet arrived; STILL-IMAGE KEY FRAME
frame 1570 — heads, rule, `tokens`, `exact answers` and `precision` complete,
             `recall` mid-arrival
frame 1620 — the settled table, inside the 63-frame identical run 1606-1348
frame 1667 — the last frame before the fade
```

`1510` is on both `AGENTS.md`'s still-image key frame list and `STORYBOARD.md`
§29: it is designated for the benchmark launch and must work as a standalone
image for landing page, README, and social use. It is a hard requirement on this
scene, not a nicety. Inspect it as an exported PNG, not only in the Studio
scrubber.

`STORYBOARD.md` §29 specifies the required content of this still as the two cost
figures, and the frame delivers them: `35,961` and `267,980`, complete and
legible, with `kivgraph` and `grep + read` named above them. That is an
improvement on the previous build, which put two bare numbers there and left the
caption to explain which was which — a reader who has never seen the video can
now tell which number belongs to which way of working. The still's one remaining
compromise is vertical; see `## Current compromises`.

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
  This is the invariant that retired the 7-question set — see `## Provenance`.
- **The figures are stored as strings, not numbers.** A figure quoted with a
  suffix is not that suffix applied to an integer, and a figure quoted to three
  decimal places is not an integer formatted to three places: `1.000` is not `1`,
  and `0.996` is not `0.99617` re-formatted at render time. The published values
  are quoted at a specific precision, and formatting a number would let a future
  edit change the precision — which is the same thing as changing the value.
- **The four-row, equal-weight shape is load-bearing, and on this figure set it
  is true.** `exact answers` ties at `28 / 29`, `precision` ties at `1.000`,
  `recall` differs by 0.007 in kivgraph's favour, and cost is the only measure
  that moves at all. That is the argument the frame makes: same answers, same
  correctness, a fraction of the tokens. An edit that drops a correctness row,
  collapses the three into one, or dims one column on any of them breaks it —
  with fewer rows the scene is a cost claim with nothing holding it honest, and
  with a dimmed column it is an implied win the measurement does not report.
  Four rows, two columns, one dimmed figure.
- **`precision` states three decimals.** It ties at `1.000` in both columns and
  could be written `1.00`, but it is quoted to `recall`'s depth so the two ratio
  rows read at one precision down the column. At two decimals `recall` would
  read `1.00` against `0.99`, which hands kivgraph a perfect score it did not
  earn and inflates the visible gap from 0.007 to 0.01.
- **Rows whose two figures are equal are never dimmed relative to each other**,
  and neither is a row that differs only in the third decimal. In every
  correctness row both columns are `textPrimary`, at the same size and the same
  weight. Dimming one side would assert a difference the measurement does not
  report, or inflate one it barely does.
- **The baseline figure in the cost row is the only dimmed figure in the table.**
  `textFaint` means "the baseline, on the one measure where the columns differ by
  an order of magnitude", and it never spreads to another row.
- **The column heads are labels, not a coloured subject marker.** `kivgraph` and
  `grep + read` are both `textMuted`, identical to the row labels. Marking the
  subject column with accent or `textPrimary` would contradict the equal-weight
  correctness rows in the same frame that states them.
- **The shared right edge, per column.** Column A right-aligns on
  `tableGrid.columnRight[0]` `1340` (measured ink at `x 1057`) and column B on
  `columnRight[1]` `1680` (measured at `x 1357`). The comparison is made by the
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
- Frame `1510` works as a still image, with `35,961` and `267,980` fully legible
  and both arms named above them.
- The hard cut at `1430` stays hard.
- The scene is static from `1606` to `1668`, and the whole table leaves together.
- **The background does not fade.** The scene's `opacity` never goes on the
  element that carries `backgroundColor`; the frame never reaches `#000000`.

## Flexible elements

- Exact row tops and the vertical rhythm, provided the source note keeps roughly
  double a row's gap above it.
- The table's width and column positions, provided the two measured proportions
  hold: a label sits 174–331 px from its first figure, and the two figures sit
  158–201 px apart. Those are the numbers that keep a label attached to its row
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
  `## Motion` and the cost row is complete at `1510`.

Not flexible, and stated in `## Invariants`: the four-row equal-weight shape and
the row set that carries it, the three decimals on both ratio rows, the 76/36
size pair, the per-column right edges, the baseline cost figure as the only
dimmed figure, the column heads as plain labels, and whether any accent is used.

## Technical notes

- Component: `src/scenes/BenchmarkScene.tsx`. It owns the layout — four entries
  in one `layout` constant (`headerTop` `562`, `ruleY` `608`, `rowTops`
  `[416, 516, 576, 636]`, `noteTop` `996`) — and the timing: the header `entry`,
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
- `tableGrid` is `{ labelLeft: 560, columnRight: [1340, 1680] }`, exported
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
  a component are eight places to forget. That file holds the confirmed
  29-question set — see `## Provenance`.
- Global scene boundaries live inline in `src/Composition.tsx` as
  `<Sequence name="07 Benchmark" from={1430} durationInFrames={210} premountFor={30}>`
  literals, because Remotion Studio can only trim inline literals. There is no
  timing module. The component animates in scene-local frames:
  `useCurrentFrame()` inside the Sequence starts at `0`. The composition's
  `mountedFrames` is `1680`, this scene's end boundary.
- Fonts from `src/brand/fonts.ts` (`"JetBrains Mono"`, local `.woff2` via
  `@remotion/fonts`, loaded deterministically). Large numerals are where a late
  font swap is most visible, so no fallback family here.
- No `fontVariantNumeric` is set: `JetBrains Mono` already advances every digit
  identically, and the render confirms it — column A lands a right edge at
  `x 1057` and column B at `x 1357`, on every row, including the two rows whose
  figures differ in width by a digit. If a future font change misaligns digits,
  add tabular figures rather than nudging a row; misaligned digits at 76 px look
  like a bug.
- Colours from `src/brand/tokens.ts`. No raw hex in the component. The scene uses
  `background`, `textPrimary`, `textFaint`, `textMuted` and `border`, and no
  accent.
- The cheapest scene in the video: two heads, four rows, a rule and a note, all
  absolutely positioned. No 3D, no images.
- Measured on the render: **1680 frames with no black frame**, the settled table
  byte-identical for 63 frames (`1606`–`1668`), and the only single-frame
  anomalies at the two hard cuts, `1249`/`1250` and `1429`/`1430`. Seams:
  `0909`/`0910` at **62.93 dB** and `1049`/`1050` pixel-identical, both unchanged
  by this figures pass; `1249`/`1250` at **30.44 dB whole frame**, a match cut,
  and a whole-frame figure is not comparable to a symbol-region one so always
  say which is quoted; `1429`/`1430` at **24.25 dB**, where a hard cut is
  supposed to measure low. That number moved twice: from 22.30 to 24.21 dB when
  the figure set was resolved, because the content on the right of the cut *is*
  the figures and a cut's PSNR is a property of both frames; then to 24.25 dB
  when the attribution match cut was added. That second move being negligible is
  the point — carrying one faint line across the cut did not soften it, while the
  carried region itself measures `inf`. Neither move is a regression or an
  improvement; both are the same cut measuring a different first frame.
- Because the frame is nearly empty, check legibility in a small embedded player
  (`STORYBOARD.md` §7). The source note at 18 px in `textFaint` `#737373` is the
  first thing that will disappear at low resolution or high compression, and it
  is now the longest string in the scene rather than one of the shortest. If it
  goes, raise it to `textMuted` `#a3a3a3` rather than enlarging it — its
  quietness is intentional, its invisibility is not.

## Current compromises

- **Implemented, and rebuilt as a two-column comparison table.**
  `src/scenes/BenchmarkScene.tsx`, `src/components/BenchmarkMetric.tsx` and
  `src/data/benchmark.ts` exist and the scene renders. This document describes
  what is built, not a specification waiting to be satisfied. It has been
  re-authored twice in one day: if a future agent finds a sentence describing a
  single value column, or a `label → value` pair, or a mid-table rule, that
  sentence is a leftover and the two-column table wins.
- **The `1510` still names both arms now, but still sits above frame centre.**
  The frame delivers what `STORYBOARD.md` §29 asks — `35,961` and `267,980`
  complete and legible — and it delivers it better than the previous build did,
  because `kivgraph` and `grep + read` are named above the figures, so the still
  is self-explanatory as a standalone image. The pair still sits high, because
  the block is laid out for four rows and the lower three are empty at `1510`.
  That is a **crop question, not a layout one**: centring the pair would decentre
  the settled table, and the settled table is the image the film actually shows,
  byte-identical, for 63 frames. A still that needs the pair optically centred
  should be cropped.
- **Two of the correctness measures are jargon, accepted deliberately.**
  `exact answers` reads in plain English. `precision` and `recall` are terms of
  art, not general-audience words, and a general audience would need a sentence
  for each — which this scene refuses to give. The audience for this film is
  developers, and to that audience the terms are precise, familiar and
  unarguable. A viewer who does not know them still reads two figures side by
  side and gets the shape. The alternative was a plain-language paraphrase, which
  would have been longer, softer, and would have looked like it was avoiding the
  real terms.
- **Naming the other measured arms: open.** The upstream benchmark measures more
  tools than the film shows. They are out because naming competitors is a
  strategic decision rather than a design one, and because their figures are
  pinned to versions that will move. **That is the current decision, not a closed
  one**; it belongs to the user, not to this document. `## Provenance` → **The
  rival arms that are not in the table** names the four and what they scored.
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

```text
2026-08-26
- The figure hold is lifted. The user resolved the figure set to the 29-question
  pass in `kivgraph/benchmarks/graph-tools-comparison/results-all.json`, the
  `aggregate` block at commit `954b9eb`, generated `2026-08-22T10:18:32Z`: 29
  questions over 37 git repositories, tokenizer `tiktoken` `o200k_base`, machine
  Apple M5 / macOS / arm64. Values only - the table's layout, timing and row
  count are unchanged. Every `<!-- FIGURE PENDING: ... -->` marker in this
  document is filled and deleted, and the `FIGURES ON HOLD` notice under the
  title and the "do not ship this scene" compromise are gone with them.
- On screen, four rows: `tokens` `35,961` against `267,980`; `exact answers`
  `28 / 29` against `28 / 29`; `precision` `1.000` against `1.000`; `recall`
  `0.996` against `0.989`. Source note `37 repositories · published benchmark`.
  The cost ratio is 7.45x and appears nowhere on screen. The baseline column is
  the upstream `native` arm, named `grep + read` because that is what it is.
- The 7-question set was abandoned because it cannot be checked. No results file
  records the subject arm at `7 / 7`: the passes on disk read `4/7`
  (`results.json`, commit `4c1bfae`) and `6/7` (`results-0.3.6.json`, commit
  `954b9eb`), and the `7 / 7` comes from the closing prose of `remeasure.md`,
  which attributes it to `results-0.3.6.json` at commit `71e6c57` - but all three
  of that note's passes wrote to that same filename, so each overwrote the last
  and the run that substantiated it no longer exists. The old on-screen set was
  `6.2k` / `63.5k` / `7 / 7` / `1.00` / `1.00`.
- The two correctness measure names that were neutralised to "both correctness
  ratios" during the freeze are restored: the rows are `exact answers`,
  `precision` and `recall`. Two of the three stay jargon, deliberately.
- The four-row equal-weight shape moved from open question to invariant, because
  on this set it is true: `exact answers` and `precision` are exact ties,
  `recall` differs by 0.007 in kivgraph's favour, and cost is the only measure
  that moves. An edit that reduces the table to fewer rows or dims one column
  breaks the argument, so `## Invariants` now says so and the "row set until the
  figure hold lifts" entry left `## Flexible elements`.
- `precision` is quoted to three decimals although it ties at `1.000`, to match
  `recall`'s depth down the column. At two decimals `recall` would read `1.00`
  against `0.99`, which hands kivgraph a perfect score it did not earn and
  inflates the visible gap from 0.007 to 0.01. Token counts stay exact and
  comma-grouped rather than rounded to `36k`. Both rules are recorded in
  `## Provenance`, under Display precision.
- The question count is deliberately absent from the source note: 29 is already
  on screen as the denominator of `28 / 29` in both columns, and the note at 37
  characters is the row that sets the scene's chars-per-second floor.
- Geometry re-measured on the render that ships these figures, at settled frame
  `1345`: the rule spans `x 560`-`1359` at `y 388`, exactly 800 px; the block's
  ink centres on 959.5 against a frame centre of 960; the figure columns
  right-align at `x 1057` and `x 1357`. The label-to-figure gap is now 174-331 px
  and the figure-to-figure gap 158-201 px, replacing 251-352 and 200-222, which
  were measured with the previous, shorter figure strings.
- Dwell against the 25-40 characters-per-second budget: column heads 6.5, the
  `tokens` row 7.1, `exact answers` 11.9, `precision` 10.2, `recall` 10.9, and
  the source note 35.8 - 37 characters in 62 frames. The note is the tightest row
  in the scene and it is inside budget.
- Entrance windows, master timeline and hold are unchanged: header 2-22, rule
  10-30, rows 14-38, 42-62, 66-86 and 90-110, source note 116-136, fade out
  198-210, all scene-local; master 1570 frames (26.17 s), `mountedFrames` 1360,
  this scene master `1150`-`1360` / local `0000`-`0210`; the settled table
  byte-identical for 63 frames from `1286`; 1360 frames rendered with no black
  frame. The still-image key frame stays at `1190`, where the cost row is
  complete by local `038` / master `1188`, so it carries `35,961` and `267,980`
  under both named arms.
- Seams on this render: `0629`/`0630` 62.93 dB and `0769`/`0770`
  pixel-identical, unchanged; `0969`/`0970` 30.44 dB whole frame; `1149`/`1150`
  24.21 dB, where the earlier pass measured 22.30. The hard cut itself did not
  change - a cut's PSNR is a property of both its frames, and the frame on the
  right of this one is now the new figure set, so the same cut measures a
  different first frame. It is neither a regression nor an improvement. A
  whole-frame number and a symbol-region number are not comparable, and this
  document now states which it quotes.
- The four rival graph tools scored graft `3/29`, graphify `4/29`,
  codebase-memory `3/29` and code-review-graph `3/29` on exact answers. They
  stay out of the table; that decision is still the user's and is still open.
```

```text
2026-08-26
- Transition in is now a match cut on one element, not a bare hard cut. The
  attribution line `Answered with Kivgraph` arrives already on screen at 1150 at
  scene 06's exact values and retires over local 2-18 while the column heads
  arrive, handing the word `Kivgraph` from a signature at 17 px to a column head
  at 18 px.
- Built because this scene opened on 34% of its settled ink and scene 06's last
  87 frames are byte-identical reading time that cannot be trimmed. A hard cut
  from a frozen frame into an almost empty one reads as the film stalling, not as
  a change of register - the eye sits at y 956 and the table builds at y 342-734.
- A crossfade was rejected, as it already was independently in this document and
  in `06-agent-answer.md`: it blends two claims into one. It would also have
  worsened the wrong problem - the cut was never too abrupt, it was landing in a
  vacuum.
- `STORYBOARD.md`'s frame spec for 1150 is unchanged and still exactly true:
  background, sin grafo, sin terminal, sin chrome de producto, solo tipografia.
  The carried line is typography. A new storyboard block, "El relevo de la
  firma", records the beat.
- Geometry lives in `src/components/Attribution.tsx` so the two frames either
  side cannot disagree. Third shared component after `MetricCard` and
  `ImpactReport`, for the same measured reason.
- Measured: attribution region `inf` across 1149/1150, whole frame 24.25 dB
  (from 24.21), stills 1190 and 1345 pixel-identical to the previous render, the
  63-frame byte-identical settled run from 1286 intact, 1360 frames with no black
  frame, anomalies still only at the two hard cuts.
```

```text
2026-08-26
- Fade-out defect fixed, found by mounting scene 08. The scene carried
  `opacity: fadeOut(frame)` on the same AbsoluteFill that painted
  brand.background, so the background faded with the table and the frame reached
  pure #000000 at 1356, holding it to 1359 - and scene 08 restored #0a0b0d at
  1360. A ten-level step on a flat frame at an invisible boundary, and the exact
  artefact docs/scenes/08-brand.md forbids by name. The fade now lives on an
  inner fill under an opaque one.
- Nothing else about the scene changed and nothing in the timeline moved. Only
  frames 1348-1359 differ, because fadeOut is 1 for every frame before local 198:
  verified byte-identical at 1190, 1300 and 1347 against the render before the
  fix. The 1150 cut, the 63-frame settled run 1286-1348 and every figure are
  untouched.
- Measured after: 1359/1360 is pixel-identical, PSNR = inf, corner 10 11 13 on
  both sides. The fade lands two frames early at 1358 - the project's easing is
  within 1/255 of its final value before its ramp ends - so this scene's tail and
  scene 08's ten frames of silence are one twelve-frame identical run, 1358-1369.
- New invariant under ## Invariants: the background does not fade. Do not put
  this scene's opacity back on the element that carries backgroundColor.
```

```text
2026-08-26
- The attribution this scene inherits across 1149/1150 moved, and nothing in this
  scene moved with it. Scene 06 was recentred - its whole prompt layer lifted
  260 px - so attributionLayout.y is now 956 + answerLift = 696. The constant is
  shared, so both scenes still draw the line at identical coordinates and the
  match cut is intact.
- Consequence for this frame: the line now sits between the last table row and the
  source note rather than near the bottom edge. They never share a frame - the
  attribution is gone by local 18 (1168) and the note does not arrive until local
  116 (1266) - and the still at 1190 is byte-identical to the render before the
  change. Nothing about the table, the figures or the timing changed.
- Measured: 1149/1150 over the attribution region, 56.79 dB before and 56.70 dB
  after, max delta 1 level on both sides. It was never `inf` in that crop; the
  single level is the code bed showing through the 0.72 tail of promptScrim on
  scene 06's side.
```

```text
2026-08-26
- The inherited attribution moved again, and again nothing in this scene moved
  with it: scene 06's answer was enlarged, its path sentence now sets on two
  lines, and the signature had to clear them. `attributionLayout.y` is now
  `1015 + answerLift` = 728. The constant is still shared, so both scenes draw
  the line at identical coordinates and the match cut is intact - measured 55.79
  dB over that region, the same one-level bed bleed as before.
- In this frame the line now sits below the source note rather than between the
  last row and it. They still never share a frame, and the still at 1190 is
  unaffected.
```

```text
2026-08-27
- A bridge line was added and the scene grew 210 -> 250 frames to carry it. On
  direct art direction: until now the film went from an agent answering a
  question to a benchmark, and the benchmark read as a new section rather than as
  the consequence of what had just been watched.
- Verbatim, and new copy in STORYBOARD.md §32 in the same task:
      Same answer. Less context.
  Geist, 52 px - the floor of §7's heading tier - centred, `textPrimary`. Sans
  because it is prose addressed to the viewer rather than a value read off the
  graph, and it is the only sentence in the scene.
- It never shares a frame with the table. The attribution retires into it at local
  18, it reads at 30, and it is gone by 62 as the column heads land. The scene now
  opens as a relay of three single things rather than as a slide filling up, and
  §17's rule that the frame darkens for a sentence addressed to the viewer is
  satisfied by there being nothing else in the frame at all.
- It is a claim about a measurement, not about the product, which is what §30
  requires - Kivgraph may not assert authority, it has to earn it - and the four
  rows answer it two seconds later.
- The table's whole schedule shifted +40 local and its dwell is unchanged: the
  62-frame settled hold is still 62 frames. The fade is 238-250.
- The still-image key frame moved with it, and by its own structural definition
  rather than by being dragged: the first frame on which the cost row is complete
  with both arms named above it is now local 78, master 1288.
```
