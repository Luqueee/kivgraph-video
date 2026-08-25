# Scene 07 — Benchmark

## Purpose

This scene replaces the claim with evidence.

Everything up to `0970` was demonstration: a graph, its cross-repository edges,
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

- Global frames: `0970`–`1090`
- Scene-local frames: `0000`–`0120` (last rendered frame `0119` / master `1089`)
- Time: 16.17 s – 18.17 s
- Duration: 120 frames / 2.0 s at 60 fps
- Remotion component: `src/scenes/BenchmarkScene.tsx`

Beats, all four fixed by the storyboard:

| Master        | Local         | Beat                                          |
| ------------- | ------------- | --------------------------------------------- |
| `0970`        | `0000`        | Hard cut. Empty background.                    |
| `0970`–`1010` | `0000`–`0040` | `6.2k`, very large, with `tokens` beneath.     |
| `0990`–`1030` | `0020`–`0060` | `63.5k` with `grep + read`, to the right, much less prominent. |
| `1020`–`1060` | `0050`–`0090` | `7 / 7 exact answers`.                         |
| `1040`–`1080` | `0070`–`0110` | `37 repositories` and `published benchmark`.   |
| `1080`–`1090` | `0110`–`0120` | Settled. Nothing moves before the fade out.    |

The windows overlap by design. They are one continuous cascade of four
statements, not four separate cards.

## Initial state

At `0970` the frame is empty: `background` `#0a0b0d`, edge to edge. No panel, no
hairline, no residue of the prompt layer, no graph, no logo.

The emptiness is the hard cut's whole effect. Cutting from a dense frame of agent
output to bare background is what signals that the register has changed.

## Final state

At `1089` all four statements are on screen simultaneously, static:

- `6.2k` dominant, `tokens` beneath it;
- `63.5k` with `grep + read`, clearly subordinate, to the right;
- `7 / 7 exact answers`;
- `37 repositories` with `published benchmark` beneath it.

The full set must read as one composition, not as a list that happened to
accumulate. A viewer landing on `1089` alone should be able to reconstruct the
entire argument of the scene.

## Visual composition

Typography only. This is the constraint, not a description of the current draft.

Layout, centred within the frame so future 1:1 / 4:5 / 9:16 variants remain
possible (`STORYBOARD.md` §2, `AGENTS.md` §38):

- **Upper region — the comparison.** `6.2k` at the large-metric scale (80–120 px,
  `STORYBOARD.md` §7), `JetBrains Mono`, `textPrimary` `#f5f5f5`, with `tokens`
  directly beneath at the label scale (16–20 px) in `textMuted` `#a3a3a3`. To its
  right and optically much weaker, `63.5k` at roughly 40–50 % of that size in
  `textFaint` `#737373`, with `grep + read` beneath it in the same faint register.
- **Lower region — the two claims.** `7 / 7 exact answers` and `37 repositories`
  stacked, between the body and heading tiers of `STORYBOARD.md` §7 (34–52 px),
  mono. `published benchmark`
  sits beneath `37 repositories` at the label scale in `textFaint` `#737373` — it
  is a provenance stamp, not a claim, and it should look like one.

A single 1 px `border` `#22262b` hairline may separate the comparison from the
claims. Depth in this project comes from hairlines and surface steps, never
shadows (`AGENTS.md` §25 house style). No card, no box, no fill.

Everything is monospace: every string here is a technical value or a label on
one, which is exactly `AGENTS.md` §27's monospace case. `JetBrains Mono`, weights 400
and 500 only.

**The comparison reads by scale, not by colour.** `6.2k` wins because it is three
times the size of `63.5k` and because it is bright while the baseline is faint.
It must not be a green-versus-red pairing: per `AGENTS.md` §37, important meaning
may not depend solely on colour, and a win/lose colour code would also read as
marketing rather than measurement.

Accent is optional in this scene and may be omitted entirely — a fully neutral
frame is a legitimate outcome here. If accent `#2563eb` is used, it marks the
Kivgraph side only (`6.2k`, or its `tokens` label), never the `grep + read`
baseline. Accent that decorates the baseline would say the wrong thing.

## Motion

Four entrances and a hold. Nothing else.

Each statement: opacity `0 → 1` with a small upward settle (4–8 px), on the
storyboard's controlled curve (`Easing.bezier(0.22, 1, 0.36, 1)`). Precise,
mechanical, no bounce, no scale-up, no blur, no slide from off-frame. The motion
language here is `STORYBOARD.md` §8: *precisas, rápidas, controladas*.

Storyboard frame numbers mark when a beat **reads**, not when its ramp begins.
This matters concretely here: frame `1010` is a designated still-image key frame
whose content is `6.2k vs 63.5k` (`STORYBOARD.md` §29), but the `63.5k` window is
`0990`–`1030`. Its opacity ramp must therefore front-load and be complete by
`1010`, using the rest of the window as settle. A half-faded `63.5k` at `1010`
would ruin the one frame from this scene that gets used outside the video.

**No count-up, no odometer, no ticking numerals.** Numbers appear at their final
value. Two reasons, and both are hard: a mid-count still frame displays a number
that is not the published benchmark, which is a benchmark-integrity problem
(`AGENTS.md` §29), and a counting animation is exactly the "look at how impressive
this is" gesture the storyboard rules out. The numbers speak for themselves only
if they are allowed to simply be there.

The scene is fully static from `1080`, so the fade toward `08-brand.md` begins
from a settled frame.

## Three.js

Not used.

## Transition in

Hard clean cut at `0970` (`STORYBOARD.md`: *hard cut limpio*).

No crossfade, no dissolve, no motion carried over from the terminal. The previous
scene is fully settled at `0969` and this one is empty at `0970`. The abruptness
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

The four statements fade out together, ending on black at `1090`. They fade as
one composition; fading them out in sequence would restate the cascade backwards
and cost the brand reveal its silence.

The `1090`–`1100` gap that follows belongs to `08-brand.md` and is intentionally
empty. It is not a hole to be filled.

## Copy

Verbatim, and complete — this scene contains no other text:

```text
6.2k
tokens
```

```text
63.5k
grep + read
```

```text
7 / 7 exact answers
```

```text
37 repositories
published benchmark
```

Spacing inside `7 / 7 exact answers` is the storyboard's and is preserved.
`published benchmark` stays lowercase; it is a provenance label, not a heading.

No unit explanations, no footnotes, no percentage, no "vs", no comparative
sentence. The relationship between `6.2k` and `63.5k` is carried by layout and
scale. If it needs a word to be understood, the layout is wrong.

## Key frames

```text
frame 0970 — hard cut; empty frame, nothing yet
frame 1010 — "6.2k" and "63.5k" both fully legible; STILL-IMAGE KEY FRAME
frame 1050 — comparison plus "7 / 7 exact answers"
frame 1089 — all four statements settled, immediately before the fade
```

`1010` is on both `AGENTS.md`'s still-image key frame list and
`STORYBOARD.md` §29: it is designated for the benchmark launch and must work as
a standalone image for landing page, README, and social use. It is a hard
requirement on this scene, not a nicety. Inspect it as an exported PNG, not only
in the Studio scrubber.

`0970`, `1010`, `1050`, and `1089` are all on the manual review list in
`STORYBOARD.md` §28.

## Invariants

- **The values are the published benchmark and are never adjusted for visual
  convenience** (`AGENTS.md` §29). `6.2k`, `63.5k`, `7 / 7 exact answers`,
  `37 repositories`. Not rounded to look neater, not inflated, not re-derived.
  If the published benchmark changes, then `STORYBOARD.md`, this document,
  `04-blast-radius.md`, and `06-agent-answer.md` are updated together in the same
  task, along with every visual reference.
- No giant bar charts. No pie charts. No gauges. No animated graphs.
- No confetti, no bursts, no shine sweep, no celebration of any kind.
- Nothing resembling `90% BETTER!!!`. No percentage improvement, no superlative,
  no exclamation mark anywhere in the scene.
- The numbers speak for themselves. Nothing is added to help them.
- Typography only. No graph, no terminal, no product UI, no logo, no device
  frame, no background texture.
- `6.2k` dominates by scale, and the comparison survives in greyscale
  (`AGENTS.md` §37).
- Frame `1010` works as a still image with both numbers fully legible.
- Numbers render at their final value on every frame on which they are visible.
- The hard cut at `0970` stays hard.
- The scene is static from `1080` to `1090`.

## Flexible elements

- Exact type sizes within the documented ranges, and the size ratio between
  `6.2k` and `63.5k`, provided the hierarchy is unmistakable.
- Horizontal and vertical placement of the four statements, and whether the two
  lower claims are centred or share the left edge of `6.2k`.
- Whether the separating hairline exists at all.
- Whether any accent is used, and if so whether it lands on `6.2k` or on its
  `tokens` label.
- Easing and travel distance of the entrances.
- Whether `7 / 7` and `exact answers` are rendered at two different emphases
  within the single string.
- Letter-spacing and tabular-figure settings on the large numerals.

## Technical notes

- Component: `src/scenes/BenchmarkScene.tsx`.
- Shared component expected: `BenchmarkMetric.tsx` — a value plus a label
  beneath it, at a given emphasis. All four statements are that same shape, which
  is what makes them read as one composition. `MetricCard.tsx` is the
  blast-radius impact card and is a different component; do not reuse it here,
  because this scene must have no card in it.
- Global scene boundaries live inline in `src/Composition.tsx` as
  `<Sequence name="07 Benchmark" from={970} durationInFrames={120}>` literals, because
  Remotion Studio can only trim inline literals. There is no timing module. The
  component animates in scene-local frames: `useCurrentFrame()` inside the
  Sequence starts at `0`.
- Benchmark values belong in one exported constant, not inline in JSX in four
  places. §29's update procedure has to have a single place to land.
- Fonts from `src/brand/fonts.ts` (`"JetBrains Mono"`, local `.woff2` via
  `@remotion/fonts`, loaded deterministically). Large numerals are where a late
  font swap is most visible, so no fallback family here.
- Enable tabular figures if the chosen `JetBrains Mono` rendering does not already
  align digits; misaligned digits at 100 px look like a bug.
- Colours from `src/brand/tokens.ts`. No raw hex in the component.
- All state derives from the frame (`AGENTS.md` §17).
- The cheapest scene in the video: four text elements, no 3D, no images.
- Because the frame is nearly empty, check legibility in a small embedded player
  (`STORYBOARD.md` §7): `published benchmark` at the label scale in
  `textFaint` `#737373` is the first thing that will disappear at low resolution
  or high compression. If it does, raise it to `textMuted` `#a3a3a3` rather than
  enlarging it — its quietness is intentional, its invisibility is not.

## Current compromises

- **Not implemented yet.** This document is the specification the implementation
  must satisfy; no `BenchmarkScene.tsx` and no `BenchmarkMetric.tsx` exist at the
  time of writing.
- **Benchmark provenance not linked.** The scene says `published benchmark` but
  nothing in this repository points to where it is published. The values are
  currently carried from `STORYBOARD.md` and `AGENTS.md` §29 only. Before
  release, the source should be recorded somewhere in the repository so a future
  agent can verify the four values rather than trusting them.
- **Open decision — accent.** Whether this scene uses any brand accent at all is
  deliberately left open. The global 10–15 % accent budget (`AGENTS.md` §26) is
  satisfied elsewhere in the video, so a fully neutral benchmark frame is
  acceptable and possibly better. Decide it against the rendered frame `1010`,
  not in the abstract.
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
