# Cold Open — The Numbers

## Purpose

This is the film's hook, and it is the only part of the film that is not part of
the story.

The narrative that follows is correct and it is slow to pay off. It opens on a
problem, introduces a tool, finds a symbol, asks a question, builds a graph,
crosses a repository, resolves a name and answers — and only then, twenty-seven
seconds in, does it produce the evidence that any of it was worth doing. That
ordering is right for someone already watching. It is wrong for someone deciding
whether to watch.

So the strongest thing the project has measured goes first, stripped to two
figures and the one line that makes them mean anything:

```text
35,961
kivgraph · tokens

267,980
grep + read

Same exact-answer count.
```

The viewer is given a result they cannot yet explain. The rest of the film is
the explanation.

## Viewer takeaway

> The same number of exact answers, for a fraction of the context. How?

The `how?` is the deliverable. This scene deliberately does not answer it — no
graph, no tool name, no product surface, no mechanism. Everything that could
answer it is in the thirty-four seconds that follow, which is the whole reason
for putting the answer to a different question first.

## Why the benchmark is at both ends of the film

**This is not the same slide twice, and a future edit must not remove one of
them as a duplicate.** The two appearances have different jobs and different
compositions:

| | Cold open | Scene 07 |
| --- | --- | --- |
| role | the promise | the receipts |
| shows | two figures, one parity claim | four measures, two arms, a source note |
| composition | stacked, centred, one axis | a table: column heads, a rule, four rows |
| withholds | precision, recall, corpus, methodology, and `28 / 29` itself | nothing |

The teaser states a result. The table shows the structure that makes the result
checkable — that correctness ties on three separate measures, that the corpus is
37 repositories, that the benchmark is published. Those are what a technical
viewer wants *after* they have decided the claim is interesting, and they are
dead weight in the first two seconds.

Remove the teaser and the film opens on mechanics with nothing at stake. Remove
the table and the claim the teaser makes is never substantiated.

The relationship is meant to read as:

```text
promise  →  demonstration  →  proof
```

and not as the same frame shown twice. Two things enforce that. The
compositions are different grammars — a stack against a table. And scene 07 is
introduced by `Same answer. Less context.`, which lands the viewer back on the
opening claim in words a full half-minute after they last saw it in figures.

## Narrative context

Nothing precedes it. It is frame 0.

Immediately after: `00-intent.md`, which opens with `You know what the code
does. / Not where it lives.` — the first line of the explanation, arriving into
the same dark field the numbers just left.

## Timeline

- Global frames: `0000`–`0120`
- Scene-local frames: `0000`–`0120` (they are master frames; the scene starts at 0)
- Time: 0.0 s – 2.0 s
- Duration: 120 frames / 2.0 s at 60 fps
- Remotion component: `src/scenes/ColdOpenScene.tsx`
- Registration: `<Sequence name="Cold Open" durationInFrames={120}>`
- Standalone composition: `ColdOpen`, for rendering and judging the opening on
  its own without waiting for the master.

| Master        | Local         | Beat                                                                    |
| ------------- | ------------- | ----------------------------------------------------------------------- |
| `0000`        | `0000`        | `35,961` and `kivgraph · tokens`, at full strength. No fade-up.         |
| `0016`–`0034` | `0016`–`0034` | `267,980` and `grep + read` arrive as the comparison.                   |
| `0040`–`0058` | `0040`–`0058` | `Same exact-answer count.` — the parity claim, in sans.                 |
| `0058`–`0102` | `0058`–`0102` | Settled. The complete statement, held. **Still-image key frame `0058`.** |
| `0102`–`0115` | `0102`–`0115` | The comparison and the parity line recede.                                 |
| `0106`–`0119` | `0106`–`0119` | `35,961` recedes last. The frame empties back to what it opened on.     |
| `0119`–`0128` | `0119`–`0128` | Ten empty frames, measured byte-identical, across the sequence boundary. |

## Reading time

Measured against the 25–40 characters per second the rest of the film is timed
by, with the exits beginning at `0102`:

| Element                          | Chars |  Settles | Dwell               | Chars/s |
| -------------------------------- | ----: | -------: | ------------------- | ------: |
| `35,961` + `kivgraph · tokens`   |    23 |   `0000` | 106 frames / 1.77 s |    13.0 |
| `267,980` + `grep + read`        |    18 |   `0034` |  68 frames / 1.13 s |    15.9 |
| `Same exact-answer count.`       |    24 |   `0058` |  44 frames / 0.73 s |    32.7 |

The parity line is the binding element, at 32.7 characters per second — inside
the 25–40 budget, and about where scene 07's source note sits. It is also what
sets the scene's length: at the 90 frames "1.5 seconds" would have bought, it
runs at over 50, which is outside anything else in the film.

Its first build printed the figure — `28 / 29 exact answers — both`, 28
characters, 38.2 per second — so the copy change bought four characters of
headroom as a side effect. That was not why it changed; see `## Copy`.

## Initial state

At `0000` the frame carries `35,961` at 150 px and `kivgraph · tokens` at 32 px,
both at full strength, centred, on `background` `#0a0b0d`. Nothing else.

**There is no fade-up, and that is a requirement rather than a style.** A ramp
from zero means frame `0000` is an empty black frame, which is the first thing
the opening is not allowed to be — and it is the frame most players use as the
poster. It has to carry the hook alone: a figure, whose it is, and what it
measures.

## Final state

At `0118`, the last frame with anything in it, the subject figure is at 7 %
and everything else is gone. At `0119` the frame is empty and stays empty to
`0128`, nine frames into the intent scene.

## Visual composition

Typography only. Centred, stacked, one axis — deliberately **not** the table
scene 07 ends on. Same brand, different grammar.

```text
                        35,961
                   kivgraph · tokens

                       267,980
                      grep + read

              Same exact-answer count.
```

The type, in master pixels:

| Element               |  Top | Size | Colour          |
| --------------------- | ---: | ---: | --------------- |
| `35,961`              |  283 |  150 | `textPrimary`, weight 500 |
| `kivgraph · tokens`   |  457 |   32 | `textMuted`     |
| `267,980`             |  535 |   92 | `textMuted`     |
| `grep + read`         |  651 |   32 | `textMuted`     |
| `Same exact-answer count.` |  741 |   40 | `textSecondary`, **sans** |

24 px from a figure to its own label, 46 px between the two blocks, and 58 px
above the parity line — more than double a label's gap, because it is a different
kind of statement. At a row's spacing it would have read as a third arm that had
lost its figure, which is the mistake scene 07's source note was moved out of.

The parity line is the only sans in the scene. Everything above it is a value
read off a measurement and is set in the mono the whole film uses for those; it
is a sentence addressed to the viewer, and the film already makes that split —
scene 07's bridge line and scene 00's opening two lines are sans for the same
reason.

The tops are measured rather than calculated. Laid out on round numbers the
settled block's ink measured `314`–`788`, centring on 551 — eleven pixels low,
because a line box is not its ink and five of them stack the error. Every top
then moved −13, which puts the ink centre on **538**: the same place scene 07
centres its table, two above the frame's 540, because mono digits sit high in
their em and a geometrically centred box of numerals reads low.

**No accent anywhere in the scene.** Marking the subject with `accent` would
assert a difference the parity line explicitly denies, which is the same argument
`BenchmarkMetric.tsx` makes for refusing to colour the subject column. The
hierarchy is size and luminance only, and the comparison survives greyscale.

### The size inversion, and why it is accepted

`35,961` is 150 px and `267,980` is 92 px, so the **smaller** number is the
**larger** object. That is scene 07's rule as well — size marks the subject, not
the magnitude — and it carries the same risk: a viewer who reads only the shapes
could take the dominant figure for the bigger one.

Three things carry the real reading. The labels name whose each figure is. The
unit says the measure is a **cost**, where less is the point. And the subject is
alone on screen for the first sixteen frames, so it is established as the
subject before there is anything to mistake it for.

The alternative — both figures at one size, so the digit count does the work —
was considered and rejected on measurement: at equal size the two are 540 px and
630 px wide, a 15 % difference for a 7.45× ratio. Neither layout makes the ratio
visible; the ratio has to be read off the digits either way. Given that, the
hierarchy is better spent on saying which arm is which.

### Why the baseline is `textMuted` and not `textFaint`

Scene 07 sets `267,980` in `textFaint` in its cost row. This scene sets it one
step brighter, and the reason is that this frame has no column heads and no rule
to carry structure. If the baseline is hard to read on a small embedded player,
there is nothing to compare against and the scene has no content at all.

## Motion

Three arrivals, two exits, and nothing else. No count-up, no odometer, no
spring, no zoom, no spin, no glitch.

Each arrival is opacity plus an 8 px upward settle on the project's easing —
the same gesture as every other entrance in the film. The subject has no
entrance at all: it does not arrive, it is already there.

**The exits are linear, and it is the only place in the film that departs from
`Easing.bezier(0.22, 1, 0.36, 1)`.** Used in reverse that curve dumps most of
the light in the first third and then crawls, so the ink was measurably gone six
frames before the window closed; pushing the window later to compensate turned
the fade into a snap. Linear is the shape that actually lands on the frame it is
aimed at, and over fourteen frames of type it is indistinguishable from a curve
except in where it ends.

**No count-up, and this is an integrity rule rather than a taste one.** A frame
of a counting animation displays a number that is not the published benchmark.
Every frame this scene renders shows the figures at their published value or
does not show them at all.

## Three.js

Not used. Two seconds of type, and a WebGL context that would have to be created
for frame 0 is the worst possible place to pay for one.

## Transition in

None. This is frame 0 of the film.

## Transition out

A dissolve to the empty field, then `00-intent.md` begins in it.

The exits reverse the arrivals, so the frame empties back to the figure it
opened on and `35,961` is the last thing to leave. That is `STORYBOARD.md` §27's
preference applied at the front of the film: the transition comes from the
content, and here the content receding *is* the transition. A hard cut was the
alternative and it was not taken — the whole point of the join is that the film
does not restart after the teaser, and a cut announces a restart.

**`leaveSubject` closes on `0119` and not on `0120`, and the difference is a
frame the render can see.** Ending on the boundary leaves the scene's last frame
carrying `35,961` at 7 % — measured, a peak of 32 against a background of 11 —
which then vanishes at `0120`. That is a one-frame pop at a boundary that is
supposed to be invisible. Closing a frame early makes the seam disappear:

```text
frames 0119–0128   byte-identical PNG stills, md5 4f8fc76764f2dae122b0c5834c2abdcd
frame  0129        the intent scene's first copy becomes visible
```

Ten empty frames, which is the same opening silence `08-brand.md` uses, and the
beat in which the viewer's *how?* forms before anything starts answering it. The
scene contributes one of them and the intent scene's own opening beat contributes
the other nine.

The film's first **cut** is still the match cut at `0420`.

## Copy

```text
35,961
kivgraph · tokens

267,980
grep + read

Same exact-answer count.
```

The two figures and both labels are assembled from `src/data/benchmark.ts` at
module load. Nothing numeric in this scene is typed:

```ts
const subject  = { figure: cost.values[0], label: `${arms[0]} · ${cost.label}` };
const baseline = { figure: cost.values[1], label: arms[1] };
```

The parity line is the one written string:

```ts
const parity = "Same exact-answer count.";
```

### Why the parity line does not print the figure

It read `28 / 29 exact answers — both` for one build, taken straight out of the
`exact answers` row, and it was cut on the objection that decides it: **a lone
fraction at the top of a film reads as *it gets one wrong*, not as *these two
tie*.**

In `07-benchmark.md` the same figure is safe, and the difference is what is
beside it. There it sits in a table with `28 / 29` in the column next to it and
three more correctness rows underneath, so the denominator is visibly the
benchmark's rather than Kivgraph's failure rate. Here there is nothing next to it
to make that reading available, and two seconds is not long enough for a viewer
to go looking for it. A hook that has to be disambiguated is not a hook.

So the teaser states the tie and the table states the count.

`Same exact-answer count.` is the measured result and **not** a widening of it:
the benchmark records `exact_answers` at 28 for both arms, and the sentence says
that and only that. It is deliberately not `same quality` or `same accuracy`,
which would claim `precision` and `recall` as well — `07-benchmark.md` shows all
three, and this scene may not imply them.

## Key frames

```text
frame 0000 — 35,961 and its label, at full strength; POSTER FRAME
frame 0034 — the comparison has landed; two figures, no parity line yet
frame 0058 — complete: both figures, both labels, the parity line; STILL-IMAGE KEY FRAME
frame 0102 — the last settled frame before anything leaves
frame 0119 — empty; identical to 0128
```

`0058` is *defined* as the first frame on which the parity line has finished
arriving, so a retime recomputes it from the parity window rather than looking
the number up.

`0000` is the poster frame and it is deliberately not centred: it holds only the
subject block, whose ink runs `301`–`489`. Centring it would decentre the
settled composition, which is the image the scene actually holds for 44 frames.
A poster that needs the figure optically centred is cropped, not re-laid-out —
the same rule `07-benchmark.md` applies to `1708`.

## Invariants

- **Every figure is read from `src/data/benchmark.ts`.** Two scenes stating the
  same measurement from two transcriptions is exactly how they drift, and
  `AGENTS.md` § Benchmark integrity requires one place to change if the
  benchmark moves. The scene resolves its rows by label and throws if either is
  gone, so a reorder or rename in that file fails the render with a reason
  rather than silently showing something else.
- **The word `Same` is checked against the measurement.** If the two arms ever
  stop tying on `exact answers`, `ColdOpenScene.tsx` throws at module scope and
  the render stops. This matters *more* now than when the figure was printed:
  nothing visible would go stale if the benchmark moved, so the claim could
  quietly become false while every glyph on screen stayed correct. A film that
  keeps asserting parity after parity has gone is the worst failure available to
  this project, and a failed render is a better outcome than a shipped lie.
- **No bare fraction.** `28 / 29` does not appear in this scene and must not be
  put back. It belongs to the table, where the column beside it makes it read as
  a tie; alone at the top of the film it reads as a failure rate.
- **No ratio, no percentage, no multiplier.** `7.45x` and `87 % fewer` are both
  computable from what is on screen and neither may appear. The raw figures are
  more credible than any number derived from them, and `STORYBOARD.md` §30 rules
  out the register.
- **The two token figures never appear without the parity line.** Cheaper is only
  interesting if the answers are as good. A cost comparison alone is a claim the
  benchmark does not make.
- **No logo, no wordmark, no mark, no product splash.** `kivgraph` appears once,
  at 32 px, as the label under a figure. The viewer meets the product by
  watching it work, not by being shown its name first.
- **Frame `0000` is never empty and never fades up.**
- **The scene never states precision, recall, corpus size or methodology.**
  Those belong to `07-benchmark.md`, and holding them back is what stops the two
  appearances reading as one slide shown twice.
- **The scene works muted**, like every other. `STORYBOARD.md` §17: if sound is
  ever added, one restrained impact on the first figure and a lighter cue on the
  comparison would be in register; nothing in the scene may require them.

## Flexible elements

- the exact type sizes, provided `35,961` stays dominant and no label drops
  below 30 px — see `## Responsive`;
- the vertical rhythm, provided the settled block's ink still centres on 538;
- the arrival windows, provided no element loses dwell against the table in
  `## Reading time`;
- whether the unit rides with the subject's label or sits on its own line.

## Technical notes

- `src/scenes/ColdOpenScene.tsx` owns layout and timing; `src/data/benchmark.ts`
  owns every value and its provenance.
- One shared `Line` component for all five strings, because five copies of the
  same style is five chances to let one drift.
- Letter-spacing switches at 60 px: `-0.02em` for the figures, `0.04em` for the
  labels and the parity line. That is the same split `BenchmarkMetric.tsx` uses.
- No `premountFor`. The scene mounts no canvas, it is first in the composition,
  and there is nothing before it to premount from.

## Responsive

`STORYBOARD.md` §2 requires the master to survive later crops, and this scene
will be watched embedded, on GitHub, on Reddit, on X and in Discord, usually
small. Checked by rendering `0058` and downscaling:

```text
1920 px   everything comfortable
 640 px   comfortable
 480 px   both figures and the parity line clear; the 32 px labels small but legible
 360 px   figures and parity line hold; the labels are at the floor
```

480 px wide is a realistic worst case for an embedded player and the scene holds
there. 360 is the floor and it is recorded so a future edit knows which element
gives out first: the labels, not the figures.

The block spans `301`–`775` vertically and `699`–`1219` horizontally, so it sits
inside a 1:1 centre crop and inside a 9:16 one.

## Current compromises

- **The parity line is a sentence where everything else in the scene is a
  measurement.** At 32.7 characters per second it is inside the budget with some
  room, but it is the block that breaks first if it ever grows: the scene would
  have to grow with it.
- **The film is 36.17 s**, above the 34–36 s the brief asked for. 110 frames
  would have landed it on exactly 36.00, and it would have cost the parity line four
  frames of dwell and put it outside the reading budget. Clarity was taken over
  the round number.
- **The size inversion is real and is accepted**, on the same terms scene 07
  accepts it. See `## Visual composition`.
- **No sound.** The film is muted-first and nothing here needs audio.

## Modification history

```text
2026-08-27
- Initial scene. The benchmark's two token figures and the exact-answer tie,
  added at the front of the film as a cold open.
- The parity line was `28 / 29 exact answers — both` in the first build and is
  now `Same exact-answer count.`. Reason: alone at the top of a film the
  fraction reads as a failure rate rather than as a tie, and there is nothing
  beside it in two seconds to correct that. The figure stays in scene 07, where
  the column next to it does the correcting. Also moved from mono to sans, and
  the parity line's top from 737 to 741 so the settled block's ink still centres
  on 538.
- Reason: the strongest evidence in the piece was 27 seconds in. Moving a
  *teaser* of it to frame 0 gives the viewer a question to carry through the
  narrative instead of asking them to trust the narrative until it pays off.
- The full benchmark stays where it was and keeps every methodology row. The
  two appearances are documented as promise and proof, in this file and in
  `07-benchmark.md`, so neither is later removed as a duplicate.
- Master 2050 -> 2170 frames, 34.17 s -> 36.17 s. Every other scene moved +120
  and none changed length; nothing was compressed to pay for the addition.
```
