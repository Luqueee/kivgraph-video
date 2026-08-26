# Kivgraph Video — Scene Documentation

| #   | Scene               |    Frames | Component              | Documentation                                            |
| --- | ------------------- | --------: | ---------------------- | -------------------------------------------------------- |
| 01  | Symbol              |     0–120 | `SymbolScene.tsx`      | [01-symbol.md](./01-symbol.md)                            |
| 02  | Agent               |   120–330 | `AgentScene.tsx`       | [02-agent.md](./02-agent.md)                              |
| 03  | Graph Reveal        |   330–630 | `GraphRevealScene.tsx` | [03-graph-reveal.md](./03-graph-reveal.md)                |
| 04  | Blast Radius        |   630–770 | `BlastRadiusScene.tsx` | [04-blast-radius.md](./04-blast-radius.md)                |
| 05  | Semantic Resolution |   770–970 | `SemanticScene.tsx`    | [05-semantic-resolution.md](./05-semantic-resolution.md)  |
| 06  | Agent Answer        |  970–1150 | `AgentAnswerScene.tsx` | [06-agent-answer.md](./06-agent-answer.md)                |
| 07  | Benchmark           | 1150–1360 | `BenchmarkScene.tsx`   | [07-benchmark.md](./07-benchmark.md)                      |
| 08  | Brand               | 1360–1530 | `BrandScene.tsx`       | [08-brand.md](./08-brand.md)                              |
| 09  | Outro               | 1530–1650 | `OutroScene.tsx`       | [09-outro.md](./09-outro.md)                              |

Master: 1920 × 1080, 60 fps, **1650 frames, 27.5 s**. Global frame boundaries
live only in `src/Composition.tsx`.

**Every scene exists.** `mountedFrames` is gone: it held the composition at the
length that actually rendered while the film was shorter than its plan, so that
Studio and `remotion render` produced the film that existed rather than that film
followed by seconds of black. Scene 09 was the last one outstanding, the two
numbers met, and `src/Composition.tsx` now exports `masterFrames = 1650`.

Rendered end to end: 1650 frames, 27.5 s, 1920 × 1080 at 60 fps, and no black
frame anywhere in it.

The master length has moved ten times. Three were because the opening changed:
it was 1500, grew to 1620 when scene 01 was extended from 90 to 210 frames,
returned to 1500 when the old scene 02 was deleted, and fell to 1410 when scene
01 was cut from 210 to 120. The fourth was the first one a later scene caused —
1410 to 1320, when the cross-repository scene was cut. The fifth, on 2026-08-25,
is the first one a *surviving* scene caused: 1320 to 1300, when the blast radius
was trimmed from 120 to 100 frames because the last 41 frames of it had become
pixel-identical once its claim line and veil were cut. The sixth, the same day,
is the first one that added time rather than removing it: 1300 to 1330, when the
semantic scene grew from 150 to 180 frames so its two-column comparison stands
for a full second before anything leaves the frame.

The seventh, also 2026-08-25, is the largest single change to the film's length
and the first taken against a measurement rather than a judgement: 1330 to
**1480**, when the blast radius went 100 → 140, the semantic resolution 180 → 200
and the agent answer 90 → 180. See **Pacing and dwell time** below.

The eighth, on 2026-08-26, is the second taken against that same measurement and
the first taken *before* a scene shipped rather than after: 1480 to **1530**, when
the benchmark landed at 170 frames instead of the 120 it had been drafted at. At
120 its last statement settled with 10 frames left — **0.17 s** — so the scene was
built at the length its own reading time asked for rather than at the length the
storyboard had guessed. Only scenes 08 and 09 moved, +50 each. Five scenes have
ever changed duration — scene 01 once, the blast radius twice, the semantic scene
twice, the agent answer once, and the benchmark once, at implementation. For every
other scene, only offsets have moved.

The ninth, the same day, is the second one the benchmark caused, and the first
time any scene has changed duration twice at implementation: 1530 to **1570**,
when scene 07 was rebuilt as a two-column comparison and went from 170 to 210
frames. Only scenes 08 and 09 moved again, +40 each. The eighth entry's count
takes one correction from here: five scenes have still ever changed duration, but
the benchmark has now changed twice, both times at implementation rather than in a
retime, so it is the only scene whose length has never been set by a plan. Why 210
rather than 170 is a dwell figure: the two-column build asks the viewer to read
eight figures and two arm names where the single column had four figures, and its
source note is the tightest row in the scene — see **Pacing and dwell time**.

The tenth, on 2026-08-26, is the first taken from a scene that had already
shipped rather than from one arriving, and the first taken by watching rather
than by counting: 1570 to **1650**, when the brand reveal went from the 90 frames
it was drafted at to 170. At 90 its tagline settled with ten frames left. Only
scene 09 moved, +80. Six scenes have now ever changed duration, and scene 08 is
the second — after the benchmark — whose length was never set by a plan.

## Pacing and dwell time

"Too fast in the last scenes" is a judgement. **Dwell time** is what made it
actionable: how long a readable thing stays on screen *after* it has finished
arriving. It is not the same quantity as a hold, and it is not the same quantity
as a scene's length — an element can settle early in a long scene and still be
read, or settle late in one and never be read at all.

Measured on the 1330-frame cut, two elements failed badly:

- the **impact card** in scene 04 — `7 affected symbols`, `3 dependency paths`,
  `2 repositories`, the three counted lines that scene exists to deliver — settled
  with 25 frames left: **0.42 s**;
- the answer's **path sentence** in scene 06 — `checkout-service consumes the
  symbol through payments-api/paymentService.`, 73 characters naming the one
  package the impact can legally travel through — settled with 34 frames left:
  **0.57 s, which is 129 characters per second**, against the 25–40 that on-screen
  technical text can actually be read at.

The film was accelerating into its own payoff. Durations are now derived from
reading time rather than from feel, and the figures as the film stands are:

| Element                                     | Dwell    |
| ------------------------------------------- | -------- |
| scene 04's impact card                      | `1.47 s` |
| scene 05's two counters                     | `1.00 s` |
| scene 06's lead-in                          | `2.23 s` |
| scene 06's counts                           | `1.97 s` |
| scene 06's path sentence                    | `1.67 s` (44 characters per second) |
| scene 06's `Answered with Kivgraph` label   | `1.43 s` |
| scene 07's column heads                     | `2.93 s` |
| scene 07's `tokens / 35,961`                | `2.67 s` |
| scene 07's `grep + read / 267,980`          | `2.67 s` |
| scene 07's `exact answers / 28 / 29`        | `2.27 s` |
| scene 07's `precision / 1.000`              | `1.87 s` |
| scene 07's `recall / 0.996`                 | `1.47 s` |
| scene 07's source note                      | `1.03 s` (35.8 characters per second) |

Scene 05's counters were already at 1.00 s and its sixty-frame stand was left
exactly as it was; its twenty extra frames went to the *build* instead, where
every window was eighteen frames wide and spaced ten apart and is now twenty and
twelve. A comparison whose subject is counting cannot deliver its terms faster
than they can be counted.

Scene 07 is the first scene whose duration was set by this measurement *before* it
was built rather than after. At the 120 frames it had been drafted at, its last
statement settled with 10 frames left — 0.17 s — so it landed at 170, and the
rebuild as a two-column comparison took it to 210. Every readable element sits
inside the budget: the column heads at 6.5 characters per second, `tokens` at 7.1,
`precision` at 10.2, `recall` at 10.9 and `exact answers` at 11.9. The row
that sets the scene's floor is the source note — `37 repositories · published
benchmark` is 37 characters in 1.03 s, which is 35.8 per second, the tightest
reading in the scene and still under 40. That is also why the question count is not
in the note: `29` is already on screen in the denominator of `28 / 29`, and
repeating it would push the one row with no slack out of budget. The settled table
then stands byte-identical for 63 frames from 1286 before the fade.

Two things follow for anyone retiming this film again. Dead frames and dwell are
different quantities measured in the same units: the twenty frames trimmed off the
blast radius in the fifth change were pixel-identical *and* its card was still
underexposed, which is why the same scene lost frames and then gained forty. And a
hold at the end of a scene is not slack — in scene 06 the 87-frame static run is
the only place in the scene where the answer is read.

## Implementation status

| #   | Scene               | Status                                    |
| --- | ------------------- | ----------------------------------------- |
| 01  | Symbol              | implemented, key frames inspected         |
| 02  | Agent               | implemented, key frames inspected         |
| 03  | Graph Reveal        | implemented, key frames inspected         |
| 04  | Blast Radius        | implemented, key frames inspected         |
| 05  | Semantic Resolution | implemented, key frames inspected         |
| 06  | Agent Answer        | implemented, key frames inspected         |
| 07  | Benchmark           | implemented, key frames inspected         |
| 08  | Brand               | implemented, key frames inspected         |
| 09  | Outro               | implemented, key frames inspected         |

`src/data/graphDemo.ts` exists and is the graph truth all three graph scenes read:
eight nodes, seven `caller → callee` edges, two repositories, a derived
`impactSummary` of **1 selected / 7 affected / 3 dependency paths / 2
repositories**, and `nameMatches`, the two real benchmark declarations scene 05's
left column lists. Those figures are counted from the data, so scene 04's card
and scene 05's counters cannot outlive the graph they describe — scene 05 prints
`2 real relationships` because that is how many edges reach `withRetry`, not
because the storyboard's `3` was corrected by hand.

The number is 7 rather than the 6 an earlier storyboard drew, because 6 was not
reachable by a call chain that compiles: `withRetry` is unexported, so its direct
callers must live in `internal/retry`, and Go's `internal/` rule forbids
`checkout-service` from importing them — the impact has to travel through the
public `payments-api/paymentService`. Do not simplify it back.

`src/data/benchmark.ts` is the same idea for scene 07: every figure the scene shows
in one place, each with its provenance. It holds the two arm names, four rows of two
values — eight figures — and the source note, and its header comment carries the
upstream file, commit and generation date they were read from. They are stored as
**strings, not numbers**, because formatting a number would let a future edit change
the precision, and changing the precision is changing the value. The table shows
that rule working in both directions. Comma-grouping `35,961` does not change its
precision, but rounding it to `36k` would, so the token counts stay exact and
grouped. And `recall` is the row that proves the cost of the other direction — at
two decimals it would read `1.00` against `0.99`, which flatters kivgraph to a
perfect score it did not earn and doubles the apparent gap — so three decimals is
the shortest true form, and `precision` states three as well rather than mixing
depths down one column. That is also why the scene has no count-up: a mid-count
still frame displays a number that is not the published benchmark.

The figure set moved once, on 2026-08-26, and the reason belongs here rather than
only in the module. The storyboard specified `6.2k · 63.5k · 7 / 7 · 37
repositories`, and the `7 / 7` was withdrawn because **no results file records it**:
the seven-question passes on disk read `4/7` (`results.json`, commit `4c1bfae`) and
`6/7` (`results-0.3.6.json`, commit `954b9eb`), and the `7 / 7` comes from the
closing prose of `remeasure.md`, which attributes it to `results-0.3.6.json` at
commit `71e6c57` — all three of that file's passes wrote to the same filename, so
each overwrote the last and the run that substantiated it no longer exists. The
29-question set replaced it because it is machine-backed line by line. The four
rival graph tools the same results file measures are out of the table by a strategic
decision rather than a measured one; the module records that too.

"Specified only" means the document is the contract the future implementation
must satisfy; no component exists yet and the corresponding stretch of the
master is still black.

## Visual grammar

Scenes 01 and 02 establish the grammar the rest of the video inherits:

- the camera lives inside the material; the world is never covered by a surface
  that explains it. Scene 04 spends the one exception: its impact card is a flat
  DOM panel composited above the canvas, because three counted numbers are a
  claim about the graph rather than a thing standing in it, and
  `src/components/MetricCard.tsx` holds that surface language for scenes 04 and 05
  alone. `src/components/ImpactReport.tsx` composes it, and it exists because scene
  05 inherits the card on its first frame and fades it out during the flatten: two
  scenes drawing the same thing from two places is how a seam that must be
  invisible ends up measuring 22 dB. `ImpactReport` is the card alone — it used to
  carry a claim line under it, and that line was cut. Scene 07 was expected to
  inherit the card and does not: it has no graph behind it to make a claim against,
  so it is a comparison table on the bare background — one hairline rule, no panel
  — and `src/components/BenchmarkMetric.tsx` is its own surface language, one
  comparison row rather than a card;
- an element that **crosses a cut** is defined once, outside both scenes, for the
  same reason: `src/components/Attribution.tsx` holds `Answered with Kivgraph`,
  which scene 06 settles as the answer's signature and scene 07 inherits on its
  first frame and retires as its column heads arrive. The region measures `inf`
  PSNR across `1149/1150` while the whole frame still measures 24.25 dB, which is
  what a match cut is: hard in the frame, exact in the matched element. A pixel of
  drift between the two scenes would turn it into a mistake, so neither scene owns
  the geometry. It is there because scene 06's last 87 frames are byte-identical
  reading time that cannot be trimmed, and scene 07 opened on 34% of its settled
  ink — a hard cut between a frozen frame and an empty one reads as a stall, not
  as a change of register;
- the opening is **one continuous shot** through **one world**. There is no cut
  anywhere before frame 0330. `src/world/camera.ts` projects it and
  `src/components/CodeWorld.tsx` holds the only spatial layout; a scene animates
  the camera and luminance, and never places a plane;
- `withRetry` is world origin `(0, 0)` and the camera targets it, so the symbol
  is a pinned screen anchor rather than an element that moves;
- hierarchy is luminance in a single hue, never syntax colour;
- depth is projection and parallax plus falloff, never a surface step with a
  border;
- brand accent marks meaning only: the selected symbol, an active relationship,
  propagation, a Kivgraph invocation, an important result;
- **the graph passage explains nothing in words.** The only sentence addressed to
  the viewer anywhere in the film as it stands is the agent's prompt in scene 02,
  and the viewer is ready for it because the camera built the question without
  stating it. Everything else on screen is a symbol name, a file path, a cluster
  name or a measured value. That is why the passage reads as evidence rather than
  as narration, and it is worth stating for its own sake rather than as what is
  left over after three deletions;
- **a sentence to the viewer is read on a darkened frame** — a rule that currently
  governs nothing implemented. When viewer-addressed copy enters, a veil in
  `brand.background` rises over the whole frame, the text arrives a few frames
  later, and both leave the way they came. The rule is `STORYBOARD.md`
  § Frase sobre el cuadro, and it is kept because scenes 06 to 09 may still need
  it. Every instance of it has been cut: scene 04's `Cross-repository.` at `0.86`
  went with the cross-repository scene itself, the blast radius' `Exact symbols.
  Not name matches.` at `0.72` and the semantic scene's `A name is not a symbol.`
  at `0.58` were both cut for not reading as results of what they sat over. No
  frame of the film raises a veil today. Two constraints travel with the rule if
  it is ever spent again: the veil never reaches black — 0.7 to 0.9, so whatever
  the sentence is about stays visible behind it — and it is zero at both ends of
  the scene that raises it, unless the next scene's document says it inherits one.
  It does **not** apply to graph-attached text or to a metric card's values: those
  exist to be read against the structure behind them, and dimming the graph under
  `7 affected symbols` would take away the evidence for the number;
- chrome appears only when it carries narrative meaning, and even then it is the
  smallest thing that works: the agent is a rule, a glyph and a line, not a
  terminal window;
- scenes hand over an unresolved frame, not a finished layout.

Scene 03 inherits all of it and adds the graph's own grammar:

- **hop count is depth.** Each hop from the changed symbol steps one place
  sideways and one place away from the camera, so distance from the change is
  distance from the viewer. Nothing is drawn around anything: there are no
  rings, no radius, no spokes, no repository box, region or base plane. A faint
  base plane was built and deleted — correctly exposed it read as a rectangle
  with four corners, which is the one thing a repository must not be. The two
  repositories read apart through depth, distance and one floating label each;
- the camera is a **rig** — an eye and a point it looks at — not a position with
  a fixed direction. It holds still through the match cut, steps off the axis,
  travels with the impact and rises above the chain, and then stops: scene 03's
  move completes at 0598 and no frame after it explores, though two later scenes
  do move the rig — scene 05 straightening it to frontal as part of its flatten,
  and scene 06 running the reveal's own travel backwards over twenty-four frames to
  put the anchor back where the match cut found it. It never orbits
  continuously, never rolls, and `up` is world up on every frame;
- a node is an extruded plate with a hairline contour, standing **upright in
  world space**. It carries no rotation of its own: every degree of obliquity
  comes from the camera, and because each plate sits somewhere different in a
  16-unit cascade, an off-axis camera sees each at its own angle. That per-plate
  variation is the depth cue. A global tilt was tried at three different angles
  and each one made every label rotate by the same amount, which reads as a
  broken camera rather than as depth — `src/three/graphFrame.ts` keeps the full
  measurement;
- its label is `Text` **inside the scene**, not DOM over the canvas, so it turns
  with the plate it is printed on. That is what allows the camera to move at all:
  flat DOM text cannot foreshorten, so it capped both the plate's angle and the
  camera's. troika renders it from an SDF, so it stays clean at any scale;
- an edge is a tube with real thickness, bowed slightly toward the camera, clipped
  against the plate's own rectangle so it arrives at an edge rather than near one.
  It carries accent while the relation is being established and settles to a
  neutral weight once it is structure;
- a relation is drawn before the node it reaches, and a node the camera has not
  yet made room for does not fade in at the frame edge.

Where scene 03's truth lives: `src/data/graphDemo.ts` (topology and
coordinates), `src/three/graphFrame.ts` (spatial contract),
`src/three/graphState.ts` (per-frame state and the camera path),
`src/three/projection.ts` (the camera basis, the graph offset, and the pose
search that checks label containment), `src/three/CameraRig.tsx`,
`src/three/GraphNode.tsx`, `src/three/GraphEdge.tsx`.
There is no `RepositoryCluster.tsx`; it was deleted along with the `region`
field on `Repository`, because there is no repository geometry to draw.

`public/fonts/` carries JetBrains Mono twice on purpose: the `.woff2` that
`@remotion/fonts` loads for every DOM surface, and a `.ttf` for troika, which
cannot read woff2. They are the same typeface and must be regenerated together —
the match cut is a DOM glyph cross-fading into a troika glyph, so if the two files
drift the cut breaks and nothing in the build will say so.

Two measurements from that migration are worth keeping, because both correct
something the project believed.

**The DOM labels were never straight on their plates.** At the pose the graph
holds from 0598 onward — the `lookAt` rig at eye `(7.0, 3.2, 10.0)` looking at
`(8.0, 0.0, -2.4)`, 15° off `-Z` — a world vertical projects with a lean running
from `-10.4°` at the anchor to `+9.0°` at the far cluster label; measured on the
render, the anchor plate's own edges come out at `-11.6°` and `-8.7°`, bracketing
the model. The DOM type was dead vertical against plates sheared by that much, and
nobody had noticed because the camera never moved far enough to make it obvious.
In-scene text shares the lean, so a far label now looks faintly italic: that is
not a defect, it is the perspective the plate always had, and the flat overlay was
the thing that was lying about it.

Those figures were measured while the cross-repository scene still existed, on the
pose it landed on. That scene translated its eye and target together, so it never
changed the view direction and returned to the pose above; the pose the numbers
describe is therefore the one that survives the cut, and it is now scene 03's
settled pose held to the end of the graph passage. They have not been re-measured
since.

**troika laid down 20.8% less ink than Chrome, and now does not.** Both render
JetBrains Mono at 400; the deficit was the blend model — troika's SDF coverage is
linear alpha, Chrome's text is gamma-corrected — and it was invariant to
`sdfGlyphSize` (`-20.83%` at 64, `-20.88%` at 256), which is what proved it was
not a resolution artefact. Left alone it made the graph's type lighter than the
same typeface on the shipped web, and `src/brand` mirrors that design system 1:1.

The correction is stem darkening: an outline in the fill's own colour and
opacity, `0.75%` of the em, which thickens the stroke the way a rasteriser does
without changing the letterform. Raising `fontWeight` would have been the fake —
and is also unavailable, since troika renders the variable font's default
instance.

The value is measured rather than chosen. Integrated glyph coverage over the
match-cut token rectangle, at master 0360 — the frame where the dissolve's
residual has reached zero while the camera still holds the match-cut pose, so the
rectangle holds the troika label alone at the size the DOM token had. Matching a
20.8% deficit means raising ink by `1 / (1 - 0.208) - 1 = 26.3%`; `0.75%` of em
measures **+26.60%**, which is inside the metric's own noise. Being in em it is
invariant to distance, so every label in the cascade takes the same correction
instead of the near ones taking more.

One measurement trap, recorded because it cost a wrong answer first: comparing
the rectangle across two different frames does not work. Once the selection field
has faded, the rectangle holds background outside the plate and plate inside it,
and estimating the glyph's base from the darkest pixel makes the plate itself read
as 10% coverage everywhere — thousands of pixels of ink that are not ink, which
reported troika as having *more* ink than the DOM. The base has to be the modal
dark value, which is the surface actually behind the type, and comparisons have to
be same-frame before and after a change.

Everything else about that cut is exact: the troika word lands in the DOM token's
rectangle to within 0.5 px per glyph, the ink bounding box is identical at 207 px
wide, and the field and fill are byte-exact `#1e3a8a` and `#bfdbfe`.

## Scene numbering

Document numbers follow the nine Remotion components, not the eleven storyboard
scenes, and two storyboard scenes have no document of their own. `STORYBOARD.md`
splits the graph into `SCENE 03 — FROM CODE TO GRAPH` (0330–0480) and
`SCENE 04 — THE GRAPH EXPANDS` (0480–0630), both realised by the single
`GraphRevealScene` component, and its `SCENE 05 — CROSS-REPOSITORY` is now a
record of a cut scene rather than a scene. Documents are therefore offset by one
across the graph reveal and by **two** from `04-blast-radius.md` onward.

The storyboard keeps its own numbering: SCENE 05 stays in place as the cut
record, and SCENE 06 to SCENE 11 keep their numbers. Their frame ranges moved
−90 with the cut; SCENE 06 then gave up twenty frames of its own tail, and
SCENE 07 to SCENE 11 moved a further −20. The 2026-08-25 pacing pass then moved
SCENE 06's end +40, SCENE 07's +70 and SCENE 08 to SCENE 11 a flat +150.
The 2026-08-26 benchmark pass then moved SCENE 09's end +50 and SCENE 10 and
SCENE 11 a flat +50, and the same day's rebuild of SCENE 09 moved its end a
further +40 and SCENE 10 and SCENE 11 a further +40.

| Document | Storyboard scene |
| --- | --- |
| `01-symbol.md` | SCENE 01 — THE SYMBOL |
| `02-agent.md` | SCENE 02 — ASK THE AGENT |
| `03-graph-reveal.md` | SCENE 03 + SCENE 04 |
| — (cut) | SCENE 05 — CROSS-REPOSITORY |
| `04-blast-radius.md` | SCENE 06 — BLAST RADIUS |
| `05-semantic-resolution.md` | SCENE 07 — NAME ≠ SYMBOL |
| `06-agent-answer.md` | SCENE 08 — RETURN TO AGENT |
| `07-benchmark.md` | SCENE 09 — BENCHMARK |
| `08-brand.md` | SCENE 10 — BRAND REVEAL |
| `09-outro.md` | SCENE 11 — CTA |

## Deleted scenes

Two scenes have been cut. Neither should come back.

### The cross-repository scene

`CrossRepoScene.tsx` / `04-cross-repo.md`, storyboard `SCENE 05 —
CROSS-REPOSITORY`, 90 frames at master 0630–0720 under the numbering of the time.
It turned the camera around the finished graph — one turn, 20.6°, and stop — and
labelled the crossings `Cross-repository.` on a veil at `0.86`, then suppressed
the local chain to leave the crossings alone on screen.

It was cut for two reasons, and both are worth keeping.

**The camera turn did not communicate.** The viewer had already read the
structure by the time it started, and moving around it added nothing they could
name. The crossings themselves were never the problem: scene 03 still draws them,
at 0554–0569, and the propagation still leaves one repository and arrives in
another. What went was a shot *about* that fact, laid over a frame that had
already shown it.

**Its other beat fought the scene after it.** To make room for the caption it
pulled `Policy.Do()` and `Once()` back to `0.22` — and those two are hop 1,
exactly the two nodes the blast radius' propagation lights first. The old cut
dimmed what the next frame re-lit. The blast radius now inherits scene 03's whole
settled graph, evenly present, via `getGraphState(300)` where it used to sample
`getCrossRepoState(90)`, and its propagation reads as travel rather than as the
re-lighting of something held back for it.

Everything after 0630 moved 90 frames earlier and the master went from 1410 to
1320. The camera pose the deleted scene landed on was scene 03's own returned to,
so nothing about the graph's geometry changed with it: the only rig moves after
0598 are scene 05 straightening into its flatten and scene 06's twenty-four-frame
return of the graph to the match cut's pose. `src/three/crossRepoState.ts` and its
`restLook` export went with the scene; scene 05 reads the pose off the state it
inherits instead.

Measured after the cut, re-measured after the blast radius was trimmed,
re-measured again once scene 06 landed, again after the semantic scene grew, again
after the pacing pass, once scene 07 landed, again once scene 07 was rebuilt, and
again once scene 08 landed: the 0330 and 0770 seams are pixel-identical, 0630 is
62.93 dB (glyph antialiasing only), and 1530 mounted frames render with no black
frame.

**No black frame** now needs one word of precision, because scene 08 opens on ten
empty ones. They are `#0a0b0d`, the brand background, painted by `BrandScene`
itself — not `#000000`, and not a hole in the timeline. That distinction was a
real defect for exactly as long as scene 08 was unmounted: `BenchmarkScene`
carried its fade's `opacity` on the same `AbsoluteFill` that painted the
background, so the background faded out with the table and the frame reached
pure `#000000` at 1356 and held it to 1359, and scene 08 then restored `#0a0b0d`
at 1360. A ten-level step on a flat frame, at the one boundary in the film that
is meant to be invisible, and precisely the levels change `08-brand.md` forbids
by name. The fade now lives on an inner fill; 1190, 1300 and 1347 are
byte-identical to the render before it, because `fadeOut` is 1 for every frame
before local 198.

The 1359/1360 seam therefore measures `inf` — the two frames are identical, and
the corner holds `10 11 13` across it. Scene 07 does not render the silence; it
lands on it two frames early, at 1358, because the project's easing is within one
255th of its final value before its ramp ends, and scene 08's own ten frames join
it into one twelve-frame identical run.

The 0970 boundary does not measure like those, and it is not supposed to. It is a
match cut, not an invisible cut: the symbol region across 0969/0970 measures
41.35 dB, because the symbol itself is in the same place at the same size, while
the whole frame measures far lower, because the split view's left column and
divider have gone and the prompt layer arrives — 28.69 dB whole-frame. The
whole-film scan flags two pairs and nothing else: 0969/0970 and
1149/1150. Scene 08 adds no third: its own boundary at 1360 is identical rather
than a cut, and it contains no cut of its own. Both are hard cuts, steps rather than spikes, confirmed by the frames
either side, and 1149/1150 is scene 07's own cut at 24.25 dB, which is what a hard
cut is supposed to measure. That figure moved twice: from 22.30 dB when the
benchmark's figure set was resolved, and again to 24.25 when the attribution match
cut was added. Neither is an improvement or a regression — a cut's PSNR is a
property of both frames, and the right side of this one is the figure table, so
changing what it holds moves the number by definition. Anyone measuring a poor
whole-frame figure at either boundary later should read the matched region before
calling it a regression: at 1149/1150 the attribution region measures `inf`.

### The problem scene

There used to be a scene between the symbol and the agent: `ProblemScene.tsx` /
`02-problem.md`, storyboard `SCENE 02 — THE LIMITATION`, later `NOT ALONE`,
frames 0210–0360 under the numbering of the time.

It was deleted, not merged. Its job had been to deliver two lines of copy —
`Your agent can read this file.` and `But what depends on it?` — and when the
opening dropped all explanatory text, the copy went with it and nothing was left
for the scene to do. The replacement material (neighbouring package files showing
that `withRetry` already appears elsewhere) stated something obvious and spent,
in grey and 200 frames early, the reveal that scenes 03 to 05 exist to deliver.

The limitation it was supposed to establish is now carried by the question
itself: if a developer has to ask what breaks, they cannot see it. The
widen-and-dim it performed survives as the first 70 frames of `02-agent.md`,
where it is a transition rather than a scene.

Do not reintroduce it. If the opening ever needs more room, the honest place to
find it is in the length of the two scenes that remain.

## Key frames

Frames that must hold up as still images: `0080`, `0629`, `0718`, `0864`, `1064`,
`1190`, `1440`. Each is documented in the scene that owns it, and each is stated
there as a *definition* rather than as a number, so the next retime can recompute
it instead of guessing:

| Frame  | Definition                                                              |
| ------ | ----------------------------------------------------------------------- |
| `0080` | scene 01's arrival: everything has landed together, first settled frame. |
| `0629` | scene 03's last frame — the settled graph, the image scene 04 inherits.  |
| `0718` | the frame scene 04's impact card settles on; first frame of its read.    |
| `0864` | the first frame of scene 05's measured byte-identical stand.             |
| `1064` | the frame scene 06's attribution label finishes on; the scene goes static.|
| `1190` | scene 07's cost row complete, with both arms already named above it.     |
| `1440` | scene 08's settled lockup plus tagline; static since `1438`.             |

How they got here. `1064` joined the list as scene 06's label frame — it was
`0940` when the scene landed and `0970` after the semantic scene grew. Of the six
that predate it, the four after `0629` each moved −90 with the cross-repository
cut, and the last three moved a further −20 when the blast radius was trimmed,
then +30 when the semantic scene grew. The 2026-08-25 pacing pass moved five of
them: `0710` → `0718`, `0840` → `0864`, `0970` → `1064`, `1040` → `1190` and
`1200` → `1350`. Only `0080` and `0629` are untouched by it. The 2026-08-26
benchmark pass moved one of them: `1350` → `1400`, carried by scene 08's +50
offset, and the same day's rebuild of scene 07 moved it again, `1400` → `1440`,
carried by scene 08's further +40. `1190` has not moved through either pass,
because scene 07 grew at its tail both times — its start is unchanged and the
frame is scene-local 40 either way — and it is now measured on the render rather
than planned.

Two of those are not simple shifts and that is the reason the definitions are
written down. `0718` is +8 rather than +40, because the card's entry window moved
inside its own scene as well as the scene moving. `0864` is +24 rather than +40,
because scene 05's growth went into its build rather than its tail, so the stand
it names starts later in scene-local frames than it used to.

Scene 03's entry moved from `0620` to `0629`. Both frames sit inside the held
final camera pose, but at 0620 the last crossing is still handing its accent back
to the structure; `0629` is the last frame the scene owns, the nearest thing to
settled, and the image `04-blast-radius.md` inherits one frame later — so the still
and the handoff are the same picture. `STORYBOARD.md` §28-§29 still list `0620`
and have not been reconciled.

`0864` lost its headline rather than just its number. It used to hold
`A name is not a symbol.` across the middle of the split view; with that sentence
cut, the still carries the two-column asymmetry on its own and has to be
unmistakable without a caption telling the viewer what to conclude.

`1064` is scene 06's label frame, and it sits at the head of a hold rather than on
the last frame that moves: measured on the render, the scene stops changing at 1063
and every frame from there to 1149 is byte-identical, so the still is one frame
clear of the last thing that moves rather than balanced on it. That hold is 87
frames, and it is where the answer is read.

`1190` is the one still in the list that is delivered with a compromise. What it
holds is now structural rather than a pair of numbers: the cost row complete and
legible with **both arms already named above it**, which is what lets the frame
explain itself as a standalone image. The superseded build could not do that — it
showed two bare figures and nothing saying whose each one was — and the rebuild is
the reason the still improved rather than merely moved. The cost row arrives in a
single window — scene-local 14 to 38, master 1164 to 1188 — and settles two frames
before 1190, so nothing has to be front-loaded inside its ramp to make the frame
legible. What the still holds is `35,961` against `267,980`, under `kivgraph` and
`grep + read`.

What it still cannot do is centre what it shows. At 1190 the rows on screen sit
above frame centre, because the block is laid out for four rows and the lower ones
are still empty; centring them would decentre the table, and the table is the image
the film actually shows for 63 static frames. A still that needs the row optically
centred should be cropped, not re-laid-out.

The definition in the table stays structural on purpose. `35,961` and `267,980` are
what it resolves to on this cut; a later retime should recompute the frame from the
cost row's settle rather than look the numbers up.

## Rendering

`remotion.config.ts` forces Chromium's `angle` OpenGL renderer. Three.js cannot
acquire a WebGL context under the default backend on macOS, so every scene from
03 onward would render as an error without it.

It is set globally rather than passed as `--gl=angle`, so Studio, `still` and
`render` cannot disagree. Enabling it shifted glyph antialiasing across the
whole film by at most 15/255 on ~2.4% of pixels — visually indistinguishable,
checked side by side, but enough that renders made before and after are not
byte-comparable. Every byte-identity claim in these documents was re-verified
under `angle`.

Every Three.js canvas in the film also disables tone mapping and outputs sRGB.
React Three Fiber defaults to ACES Filmic, which is right for a scene lit in
physical units and wrong for these: the graph lives in the bottom of the range,
where ACES compresses hardest, and a plate authored `#171a1f` rendered `#080a0d`
— darker than the background it was supposed to sit on. The video is authored in
sRGB from `src/brand/tokens.ts` and every other scene is DOM, so a film curve
between the tokens and the frame would mean the graph's greys are not the site's
greys. Scenes 04 to 06 inherit both by drawing through the same `GraphWorld` —
scene 06 only for the 30 frames it keeps a canvas at all. Scene 07 mounts no canvas
at all — it is type on the background and there is no Three.js in it. Scene 08
brings a canvas back for its converging relationships, and it carries the pair:
`toneMapping: NoToneMapping`, `outputColorSpace: SRGBColorSpace`, copied from
`GraphWorld` for the same reason. Repeat them on any canvas from here on.

Every graph sequence also carries `premountFor={30}`, and that is a preview fix
rather than a creative one. A `<Sequence>` renders its children only inside its
range, so at the 0630 boundary `GraphRevealScene` unmounts and `BlastRadiusScene`
mounts; sharing the `GraphWorld` component does not share its instance, and the
`ThreeCanvas` loses its WebGL context at the seam. Measured in Studio by patching
`HTMLCanvasElement.prototype.getContext` and stepping 0629 <-> 0632 four times:
four new `webgl2` contexts. On the first displayed frame after the cut the DOM
labels are painted and the plates and tubes are not, so the whole graph blinks at
the one seam the design spends everything to hide. Premounting mounts the scene
thirty frames early while `<Sequence>`'s hardcoded `hideWhilePremounted:
"opacity"` keeps it invisible, so the canvas paints and the context is warm
before it is seen. Scenes 03 and 04 also carry `postmountFor={30}`, because
scrubbing back across 0630 or 0770 remounts them and the timeline has to
survive being walked backwards as well as forwards. None of this touches the
film: `premountingActive` is gated on `!isRendering`, so no rendered frame
changes — the render never had the blink, only the preview did. Scene 06 carries
`premountFor={30}` and no `postmountFor`, and that is now due: scene 07 mounts at
1150, so there is a scene after it to scrub back from, and scrubbing back across
1150 remounts the canvas scene 06 holds for its first 30 frames. Scene 05's is due
for the same reason and has been since 0970 became a boundary. Scene 07 needs
neither prop, because it mounts no canvas. Scene 08 does mount one — R3F, for
its converging relationships — so it carries `premountFor={30}` like the graph
scenes. Repeat both on any sequence that mounts a canvas.

Scene 08 is the one place in the film where the premount matters least, and that
is worth knowing rather than rediscovering: it opens on ten deliberately empty
frames, so played forward the context has ten frames to warm before the first
line is drawn at 1370. The premount is for the scrubber, not for the
playthrough. `postmountFor` becomes due the moment scene 09 exists, for the same
reason scenes 03 and 04 carry theirs.

The mechanism survived the cross-repository cut unchanged, but the seam it was
found at is now a different pair of scenes: it was `GraphRevealScene` handing over
to `CrossRepoScene`, and the `getContext` measurement was taken there. The
boundary frame is still 0630 and the count is still four, because what is being
counted is a `<Sequence>` remount rather than anything specific to either scene.

## Known documentation debt

The scene documents cite `AGENTS.md` by section number (`§14`, `§17`, `§26`, …).
`AGENTS.md` was rewritten without numbered sections, so those citations no longer
resolve. Several documents also attribute the still-image key-frame list to
`AGENTS.md`; that list lives here and in `STORYBOARD.md` §28, and `AGENTS.md`
carries no still-image frame numbers — the only frames it names are the ones its
camera rule turns on. Replacing both kinds of citation with section titles is a
mechanical pass across all nine documents and has not been done yet.

## Modification history

```text
2026-08-25
- Scene 06 (Agent Answer) implemented: src/scenes/AgentAnswerScene.tsx and
  src/three/answerState.ts. mountedFrames 880 -> 970, so the film that renders
  is 16.17 s and 330 frames — 5.5 s — of the 1300-frame master are still black.
  Frame ranges, beats and copy unchanged: the implementation matches the
  storyboard's timeline exactly.
- The scene holds a canvas for its first 26 frames. It returns the graph's last
  surviving node to the prompt's withRetry() token by running the reveal's own
  two parameters backwards — cutDistance and the anchor's grow — over 20 frames,
  so it is exact at both ends by construction rather than by tuning, and the
  canvas is unmounted for the remaining 64 frames. The claim corrected for it,
  here and in AGENTS.md, is that no frame after 0598 moves the camera. The rule
  behind that claim is untouched — a camera move has to answer a
  question the viewer is currently asking, and this one is the whole film's
  question, returning to where the viewer first saw the symbol.
- Key frame 0940 added to the still list. Measured: the frame stops changing at
  0939 and every frame from there to 0969 is byte-identical, one frame earlier
  than the storyboard's 0940 requires.
- Measured after the scene landed: the 0330 and 0730 seams are pixel-identical,
  0630 is 62.93 dB, and 970 mounted frames render with no black frame. The new
  0879/0880 boundary is a match cut rather than an invisible cut — 27.9 dB
  whole-frame, 42.2 dB over the symbol region — and the whole-film scan flags
  0880 alone, which is the cut itself, a step rather than a spike.
- Scene 05's postmountFor is now due and still missing: there is a scene after
  it to scrub back from.
```

```text
2026-08-25
- Scene 05 (Semantic Resolution) grew from 150 to 180 frames on direct art
  direction, so the master is 1330 frames (22.2 s) and every frame at or after
  0910 moved +30: scene 06 is 0910-1000, scene 07 1000-1120, scene 08 1120-1210,
  scene 09 1210-1330. mountedFrames 970 -> 1000, so the film that renders is
  16.67 s and 330 frames - still 5.5 s - of the master are black. Nothing before
  0730 moved, and no scene-local frame outside scene 05's tail changed.
- This is the sixth master length and the first that added time. It is also only
  the third duration change in the film's history: scene 01, the blast radius,
  and now the semantic scene.
- The reason is reading time, not padding. The comparison completed at 0815 and
  the frame began emptying 27 frames later, on three separate windows, so it read
  as pieces being switched off one after another. Everything now leaves on one
  window, 0875-0903, and the two columns stand complete for the sixty frames
  before it.
- Key frames: 0940 -> 0970, 1010 -> 1040, 1170 -> 1200. 0080, 0629, 0710 and 0840
  are unchanged; 0840 is scene-local 110, inside the untouched head of the scene
  that grew.
- Measured: 1000 frames render with no black frame and the anomaly scan flags 0909
  alone, which is the cut itself. The 0330 and 0730 seams are still
  pixel-identical and 0630 is still 62.93 dB. The match cut is now 0909/0910 and
  measures 41.4 dB over the symbol region. Scene 06 is static from 0969 through
  0999, where it used to be static from 0939.
```

```text
2026-08-25
- A pacing pass grew the three implemented scenes after the graph reveal, and the
  frames were bought with a measurement rather than a judgement. Blast radius
  100 -> 140, semantic resolution 180 -> 200, agent answer 90 -> 180. The master is
  1480 frames (24.7 s) and mountedFrames 1000 -> 1150, so the film that renders is
  19.17 s and 330 frames - still 5.5 s - of the master are black.
- Timeline: 04 is 0630-0770, 05 is 0770-0970, 06 is 0970-1150, 07 is 1150-1270, 08
  is 1270-1360, 09 is 1360-1480. Nothing before 0630 moved. This is the seventh
  master length, the largest single change to it, and the first to change three
  scenes' durations in one pass.
- The measurement is dwell time: how long a readable thing stays on screen after it
  has finished arriving. At the old durations scene 04's impact card settled with 25
  frames left (0.42 s) and scene 06's path sentence with 34 (0.57 s, or 129
  characters per second against a readable 25-40). Both are the payload of their
  scene and one is the payload of the film. See ## Pacing and dwell time, added in
  this pass, for the figures after the change.
- Where the frames went. Scene 04: card entry local 55-75 -> 66-88, hop schedule
  widened, and a 49-frame read where there was a 21-frame hold; card dwell 1.47 s.
  Scene 06: blocks at local 30/46/64 instead of 10/25/40, label finishing at 94,
  and an 87-frame hold; path dwell 1.67 s at 44 characters per second. Scene 05 was
  the exception - its counters already had 1.00 s and its sixty-frame stand was
  right, so its twenty frames went to the build, whose windows went from eighteen
  frames spaced ten to twenty spaced twelve.
- Key frames: 0710 -> 0718, 0840 -> 0864, 0970 -> 1064, 1040 -> 1190, 1200 -> 1350.
  0080 and 0629 are unchanged. Each is now recorded with its definition rather than
  only its number, because two of the five moved by something other than the scene
  offset: 0718 is +8 and 0864 is +24.
- Measured: 1150 frames render with no black frame. Static runs 0722-0770 (49
  frames, scene 04's read), 0864-0928 (65, scene 05's stand), 0956-0969 (14, its
  settle to the cut) and 1063-1149 (87, scene 06's hold). Seams: 0629/0630 is
  62.93 dB, 0769/0770 is pixel-identical, 0969/0970 is 41.35 dB on the symbol
  region. The anomaly scan flags 0969 and 0970, which are the two sides of the match
  cut.
- Inheritance samples followed the durations: scene 05 samples getBlastState(140)
  and scene 06 samples getSemanticState(200).
- Scene 05's postmountFor is still due and still missing.
```

```text
2026-08-26
- Scene 07 (Benchmark) implemented: src/scenes/BenchmarkScene.tsx,
  src/data/benchmark.ts and src/components/BenchmarkMetric.tsx. There is no state
  module: the timing is four ramps and a fade, and a module for that would be an
  empty file. No Three.js, no canvas, no chrome.
- It landed at 170 frames rather than the 120 it was drafted at, so the master is
  1530 frames (25.5 s) and mountedFrames 1150 -> 1320, which is 22.0 s. Scenes 08
  and 09 moved +50 each: 08 is 1320-1410, 09 is 1410-1530. Nothing before 1150
  moved. 210 frames - 3.5 s - of the master are still black.
- The 50 extra frames were bought with the same dwell measurement as the 2026-08-25
  pacing pass. At 120 the last statement settled with 10 frames left: 0.17 s. As
  built, with the fade starting at 1308: tokens / 6.2k 2.10 s, grep + read / 63.5k
  2.00 s, exact answers / 7 / 7 1.50 s, repositories / 37 1.07 s, published
  benchmark 1.00 s. The last two rows are 33 characters in 1.00 s, which is 33 per
  second and inside the 25-40 budget.
- Built as a table on direct art direction, not as the free-floating value/label
  composition the spec described. BenchmarkMetric is therefore one table row - unit
  left, measured value right-aligned - and it owns the type scale and the column
  geometry, so the caller never passes a font size. It also exports tableGrid.
  Scene 07 does not inherit MetricCard: it has no graph to make a claim against.
- Two storyboard strings were split into value and unit, because a table needs the
  measured quantity in its own column: 7 / 7 exact answers -> 7 / 7 + exact
  answers, and 37 repositories -> 37 + repositories. No value changed. published
  benchmark is now a source note under the table rather than a label of 37. Values
  are stored as strings, not numbers: 6.2k is not 6200 with a suffix, because
  formatting a number would let a future edit change the precision, which is the
  same thing as changing the value.
- Windows, master frames: 6.2k 1154-1182, 63.5k 1168-1188, rule 1190-1210 to 0.9
  opacity, 7 / 7 1196-1218, 37 1222-1244, published benchmark 1226-1248, fade out
  1308-1320 with all four rows leaving together. 63.5k front-loads inside the
  storyboard's 1170-1210 window so key frame 1190 has both numbers complete.
- Measured: 1320 frames render with no black frame and the anomaly scan flags only
  the two hard cuts, 969/970 and 1149/1150. Seams: 0629/0630 62.93 dB and
  0769/0770 pixel-identical, both unchanged; 0969/0970 28.69 dB whole-frame,
  unchanged; 1149/1150 22.30 dB, the new hard cut, and a hard cut is supposed to
  measure low. The settled table is byte-identical for 61 frames, 1248-1308. The
  layout geometry it was measured against - columns, coordinates, type scale,
  vertical rhythm, optical centring - lives in 07-benchmark.md § Visual
  composition, not here.
- Key frames: 1350 -> 1400, carried by scene 08's offset. 1190 did not move and is
  scene 07's still. Its compromise: at 1190 the pair sits above frame centre,
  because the block is laid out for the settled table and the lower rows are still
  empty. Not fixable by layout - centring the pair would decentre the table, which
  is the image the film shows for 61 static frames. Crop, do not re-lay-out.
- Rejected: count-up or ticking numerals (a mid-count still frame shows a number
  that is not the published benchmark), colour-coded win/lose pair (meaning would
  depend on colour alone), bar chart, and borders on the table. 6.2k dominates by
  scale and never by colour: it is the only figure that breaks the size of the
  others, and that disproportion is the whole argument, so the comparison has to
  survive in greyscale.
- Scene 06's postmountFor is now due as well as scene 05's, since there is a scene
  after 1150 to scrub back from. Scene 07 needs neither prop: no canvas.
```

```text
2026-08-26
- Scene 07 (Benchmark) rebuilt a second time the same day, on direct art
  direction: a comparison table with two arms as column heads and four measures as
  rows, replacing the single column of measured values the entry above describes.
  Structure, motion, geometry and rhythm are in 07-benchmark.md. src/** is
  committed at 7d9e88f.
- ON HOLD, same day: every benchmark figure the rebuild displays is withheld
  pending verification, and so is the account of what src/data/benchmark.ts cites.
  The machine-readable results in the upstream benchmark directory do not support
  the figure set the rebuild was written against. Nothing in this file states a
  benchmark value for the new build, and nothing should until the figure set is
  confirmed. Where a sentence needs an unconfirmed value it carries a
  <!-- FIGURE PENDING: ... --> marker in its place rather than a guess. Two places
  carry a fuller hold note because a whole passage describes the superseded build:
  ## Pacing and dwell time (the dwell table's five scene-07 rows and the paragraph
  under it) and ## Implementation status (the src/data/benchmark.ts paragraph). Do
  not carry their values forward.
- What is settled is the timeline. 170 -> 210 frames, so the master is 1570 frames
  (26.17 s) and mountedFrames 1320 -> 1360, which is 22.67 s. Scenes 08 and 09
  moved +40 each, on top of the +50 they took earlier the same day: 07 is
  1150-1360, 08 is 1360-1450, 09 is 1450-1570. Nothing before 1150 moved. 210
  frames - 3.5 s - of the master are still black, the same black as before, because
  the master and the mount grew together.
- Ninth master length, and the correction it forces on the entry above: five scenes
  have still ever changed duration, but the benchmark has now changed twice, both
  times at implementation. It is the only scene whose length has never been set by a
  plan.
- Measured: 1360 frames render with no black frame and the anomaly scan flags only
  the two hard cuts, 969/970 and 1149/1150. Seams unchanged: 0629/0630 62.93 dB,
  0769/0770 pixel-identical, 0969/0970 28.69 dB whole-frame, 1149/1150 22.30 dB.
  The settled table is byte-identical for 63 frames, 1286-1348, where it was 61
  frames at 1248-1308.
- Key frames: 1400 -> 1440, carried by scene 08's further +40. 1190 did not move
  through this pass either - the scene grew at its tail both times, so the frame is
  scene-local 40 either way - but what it holds improved, and its definition is now
  structural rather than a pair of numbers: the cost row complete with both arms
  already named above it. That is what the superseded build could not deliver - two
  bare figures with nothing saying whose each one was - so the still got better and
  not merely later. The figure itself is marked pending; the definition stays
  structural once it lands. The compromise survives for the reason it existed: the
  block is laid out for more rows than have arrived by 1190. Crop, do not
  re-lay-out.
- Scene 07 still mounts no canvas, so it still needs neither premountFor nor
  postmountFor, and scenes 05 and 06 still owe theirs.
```

```text
2026-08-26
- Benchmark figure set resolved and the hold lifted. Scene 07 shows the 29-question
  set: tokens 35,961 against 267,980, exact answers 28 / 29 against 28 / 29,
  precision 1.000 against 1.000, recall 0.996 against 0.989, over the source note
  37 repositories · published benchmark. Provenance is the aggregate block of
  results-all.json, commit 954b9eb, generated 2026-08-22T10:18:32Z, 29 questions,
  corpus 37 git repositories, tokenizer tiktoken o200k_base, Apple M5 / macOS /
  arm64. The cost ratio is 267980 / 35961 = 7.452, stated as 7.45x and shown as two
  figures rather than as a ratio.
- The 7-question set was withdrawn: no results file records kivgraph at 7/7. The
  passes on disk read 4/7 (results.json, 4c1bfae) and 6/7 (results-0.3.6.json,
  954b9eb); the 7/7 came from the closing prose of remeasure.md, attributed to
  results-0.3.6.json at 71e6c57, and all three of that file's passes wrote to the
  same filename, so the run behind it no longer exists. The superseded on-screen set
  was 6.2k / 63.5k / 7 / 7 / 1.00 / 1.00. The four rival graph tools reach 3/29,
  4/29, 3/29 and 3/29 on this set and stay out of the table.
- Both ON HOLD notes are gone - the one over the dwell table's scene-07 rows and the
  one over the src/data/benchmark.ts paragraph - and both FIGURE PENDING markers in
  this file are resolved. 1190's definition stays structural, which is what its own
  marker asked for; the figures it resolves to are stated in the prose under Key
  frames instead.
- Dwell, scene 07 as built, fade at local 198: column heads 2.93 s (6.5 characters
  per second), tokens 2.67 s (7.1), exact answers 2.27 s (11.9), precision 1.87 s
  (10.2), recall 1.47 s (10.9), source note 1.03 s (35.8). The note is the tightest
  row in the scene and inside the 25-40 budget, and it is why the question count is
  absent from it: 29 is already on screen in the denominator of 28 / 29.
- The dwell table lost its repositories / 37 row. 37 repositories is part of the
  source note now, not a row of its own, and it gained rows for the column heads,
  precision and recall, so the table lists every readable element of the scene.
- Nothing in the timeline moved: master 1570, mountedFrames 1360, 07 is 1150-1360,
  08 1360-1450, 09 1450-1570. 1360 frames render with no black frame and the anomaly
  scan still flags only the two hard cuts, 969/970 and 1149/1150. The settled table
  is byte-identical for 63 frames from 1286.
- Seams on the pass that ships these figures: 0629/0630 62.07 dB, 0769/0770
  pixel-identical, 0969/0970 30.44 dB whole frame, 1149/1150 24.21 dB. Two notes on
  reading them against the entries above. 1149/1150 was 22.30 dB and moved because
  the content on its right side is the new figures - a hard cut's PSNR is a property
  of both frames, so replacing 6.2k with 35,961 necessarily moves it, and it is
  neither a regression nor an improvement. And 0969/0970 must be quoted with its
  region: 30.44 dB and the earlier 28.69 dB are whole-frame, the 41.35 dB in the
  2026-08-25 entry is the symbol region alone, and the two are not comparable.
  0629/0630 at 62.07 against the earlier 62.93 is JPEG re-encode variance on frames
  that differ only by antialiasing; the earlier figure is correct for its own pass
  and is not being corrected.
```

```text
2026-08-26
- A transition was added between scenes 06 and 07, on direct art direction. It is
  a match cut, not a dissolve: the attribution line `Answered with Kivgraph`
  crosses 1149/1150 pixel-identically and retires over scene 07's local 2-18 as
  its column heads arrive, handing the word `Kivgraph` from signature to column
  head.
- New shared component `src/components/Attribution.tsx`, added to the visual
  grammar list as its own invariant: an element that crosses a cut is defined
  once, outside both scenes. Third such component after `MetricCard` and
  `ImpactReport`.
- The 1149/1150 figure in "The cross-repository scene" moved 24.21 -> 24.25 dB.
  Both moves of that number are now recorded there with their causes; the matched
  region measures `inf`, and a reader who finds a poor whole-frame number should
  read the matched region before calling it a regression.
- The scene 06 dwell claim in "Pacing and dwell time" is unchanged and was the
  reason the transition took this shape: the 87-frame static run is the only place
  the answer is read, so it could not be trimmed to close the gap.
```

```text
2026-08-26
- Scene 08 (Brand) implemented. src/scenes/BrandScene.tsx and the new shared
  src/components/BrandLogo.tsx, mounted at 1360-1450, 90 frames. mountedFrames
  1360 -> 1450. Nothing in the timeline moved: the master is still 1570, scene 08
  is still 1360-1450 and scene 09 is still 1450-1570. Scene 09 is the only
  unrendered part of the master.
- BrandLogo.tsx is the fourth shared component after MetricCard, ImpactReport and
  Attribution, and it exists for the same reason as Attribution: an element that
  crosses a scene boundary is defined once, outside both scenes. It owns the mark,
  the wordmark, the tagline, the two copy strings and - the part that matters at
  1450 - the lockup's screen position, as one constant both scenes read. It was
  authored to scene 09's column rather than to scene 08's own frame, so the mark's
  centre is 960, 360 and scene 08 settles about 80 px above centre on purpose.
- Three open decisions resolved. Lowercase `kivgraph` rather than `Kivgraph`,
  with STORYBOARD.md SCENE 10 updated in the same task. The lockup persists across
  1450, which BrandLogo.tsx now enforces rather than assumes. And 2D rather than
  R3F - which was then partly overridden, below.
- Three overrides on direct art direction, all recorded as overrides in 08-brand.md
  ## Current compromises rather than dressed up as derivations. The mark is the
  shipped raster (see below). The relationships were rebuilt in R3F with a trail
  shader, against the AGENTS.md list that names estelas among what was rejected up
  front - but bounded: no postprocessing, no particles, no uTime, no camera, and
  the lockup kept in DOM so the 1450 position guarantee survives. And the mark
  turns once as the wordmark enters, against the scene's own
  inevitable-rather-than-animated rule - but concluding at 1436, so the still
  frame is not caught mid-rotation. Frame 1440 came out of both overrides
  byte-identical to the render from before either existed; it moved afterwards
  for a third reason, below.
- Scene 08 therefore mounts a canvas, and the two notes above about it not doing
  so are corrected: it carries premountFor={30} and the NoToneMapping / sRGB
  pair.
- The mark is the shipped raster, not the 8 x 8 #2563eb square, on direct art
  direction. Both marks are real - the square is the web header lockup and
  TopBar.astro still draws it - so the site and the film do not show the same mark
  today. Recorded as the first item of 08-brand.md ## Current compromises along
  with its three consequences: no accent anywhere in the film after 1430, two
  colours (#e9e2dc, #56818a) that come from no token, and the loss of the scene's
  original argument that the node and the mark were the same shape.
- New asset public/brand/kivgraph-mark.png, derived rather than copied: the
  shipped raster with its background keyed to alpha and cropped to the glyph. The
  background was measured as the modal colour, #0e1015, rather than read off the
  corner, which is #101218. It rots silently if the shipped mark changes and this
  is not regenerated - the same trap kivgraph/landing/AGENTS.md records for a
  stale favicon.svg and src/brand/fonts.ts for the .woff2 / .ttf pair.
- Defect found in scene 07 by mounting scene 08, fixed in the same task.
  BenchmarkScene carried its fade's opacity on the same AbsoluteFill that painted
  the background, so the frame reached pure #000000 at 1356 and held it to 1359
  and scene 08 restored #0a0b0d at 1360 - the levels change 08-brand.md forbids by
  name. Invisible only because the film used to end at 1360. Verified
  byte-identical at 1190, 1300 and 1347; only 1348-1359 changed.
- Measured on exported PNGs of 1340-1449, not on the Studio scrubber. 1359/1360
  measures inf and the corner holds 10 11 13 across it. Identical runs: 1340-1348
  the settled table, 1358-1369 the silence (twelve frames - the fade lands two
  early and scene 08's ten join it), 1416-1418 the complete convergence figure,
  and 1438-1449 the settled lockup. 78 distinct images in 110 frames. Measured
  separately over a band that contains lines and no type, no line fragment
  survives past 1424 - four frames inside the requirement that they be gone before
  the wordmark reads. The whole-film cut scan still flags only 0969/0970 and
  1149/1150; scene 08 adds no third.
- Key frame 1440 unchanged in position and better in kind: it is now static since
  1438, because the project's easing lands within one 255th of its final value
  about two frames before its ramp ends. Same reason the wordmark is settled at
  1428 rather than 1430. The turn was timed to end at 1436 precisely so this
  remained true.
- One timing bug caught by exporting rather than by reading code: the node's ramp
  opened on local 0010, and interpolate() is exactly 0 at the left edge of its
  range, so 1370 rendered identical to 1360 and the silence was eleven frames
  instead of ten. The ramp opens on 0009 now.
- Known and unfixed here: pnpm run lint fails on a clean checkout of this repo,
  independent of this work. tsconfig.json sets lib: ["es2015"] and there are 27
  uses of Object.fromEntries and flatMap across graphDemo.ts, blastState.ts,
  graphState.ts, semanticState.ts and GraphWorld.tsx. Verified by stashing: the
  same 27 errors without any file from this task. eslint passes, and tsc passes
  with lib es2022.
```

```text
2026-08-26
- Two changes on direct art direction, from watching the film rather than from
  reading it.
- Scene 06 is centred. Its whole prompt layer - rule, question, tool line, three
  answer blocks, attribution - and its falloff sit 260 px higher than
  promptLayout puts them. New constant answerLift in AgentPrompt.tsx; promptScrim
  becomes promptScrimLifted(0) so the two offsets share one gradient. Measured:
  the content at 1064 ran 604-976, centre 790 against the frame's 540, and now
  runs 344-716, centre 530. Horizontally nothing moved because nothing needed to -
  the content spans 440-1458 and its centre was already 949.
- promptLayout itself was not touched, which is the whole point. 02-agent.md marks
  the row's position not flexible, and the reason is graphFrame.ts deriving
  graphOffset - the world position of the entire graph for scenes 03 to 06 - from
  selectedTokenRect. Verified: 0969 and the still 1190 are byte-identical to the
  render before the change. Both match cuts hold: 0969/0970 whole frame 29.84 ->
  29.83 dB and symbol plate 50.99 -> 52.14 dB; 1149/1150 attribution region 56.79
  -> 56.70 dB with a max delta of 1 level on both sides, which is what it always
  measured in that crop.
- One trap worth carrying forward: the lift reaches the travelling symbol through
  the camera pose, not through a transform on the canvas. The first build put
  `translate` on the AbsoluteFill holding GraphWorld, gated on a ramp that is zero
  at frame 0, and frame 0970 still moved by 51 dB. A transform resamples a WebGL
  texture whether or not it displaces anything. Same family as scene 08's
  will-change finding: DOM transforms over rasters are not free.
- Scene 08 grew from 90 frames to 170, tenth master length: 1570 -> 1650 (27.5 s),
  scene 09 to 1530-1650, mountedFrames 1450 -> 1530. No beat moved - the still
  key frame is still 1440 - and the growth is all tail. The tagline now has 90
  frames of dwell, 1.5 s, 28 characters per second, against ten frames and 252 at
  the drafted length. Frames 1440 and 1529 are byte-identical.
- attributionLayout.y is now 956 + answerLift = 696, shared by scenes 06 and 07 as
  before, so in scene 07 that line sits between the last table row and the source
  note. They never share a frame.
```

```text
2026-08-26
- Scene 09 (Outro) implemented. src/scenes/OutroScene.tsx, mounted at 1530-1650.
  Every scene in the film now exists. mountedFrames was retired - it existed only
  while the film was shorter than its plan - and src/Composition.tsx exports
  masterFrames = 1650 instead; Root.tsx reads that.
- Scene 08 gained postmountFor={30}, due the moment there was a scene after it to
  scrub back from, because it mounts a canvas. Scene 09 needs neither prop: static
  type, no canvas, nothing after it.
- Both of scene 09's open decisions closed against the product rather than by
  choice. Domain kivgraph.dev, which landing/astro.config.mjs bakes in as the
  production fallback for `site` and which STORYBOARD.md already named, so the
  storyboard did not change. Install line omitted - 89 characters against a
  12-character URL, which is the condition the storyboard itself set. Integration
  names verified: kivgraph mcp install has five targets, so all three on screen
  are real, and Claude Desktop and Oh My Pi are left off for space.
- Implementation status table: 09 goes from "specified only" to implemented. It is
  the last row to move.
- Measured end to end. The film renders 1650 frames, 27.5 s, 1920x1080 at 60 fps,
  with no black frame anywhere. The 1530 boundary is byte-identical - 1529 and
  1530 are the same image - so it is not a seam at all. In the H.264 encode the
  final hold stays a hold, 87.9 dB between frames that are identical in the
  source, and the poster frame measures 45.2 dB against its source PNG.
```

```text
2026-08-26
- Oh My Pi added to scene 09's integrations line, on direct art direction: four
  names rather than three. It is a real target and the label is the product's own,
  from landing/src/components/landing/clients.ts, which derives from
  internal/integrations/integrations.go. STORYBOARD.md fixes that line verbatim,
  so its copy block was updated in the same task under the clause that already
  allowed further integrations «si hay espacio».
- Space measured, not judged: 511 px, 27% of the frame, centred on 959, clearing a
  1080-wide crop with 280 px either side. The stagger went 4 -> 3 frames per name
  so the last one still lands before the URL reads at 1560.
- Claude Desktop remains the one supported client off screen - user scope only and
  the one target with no local skill install, so the narrowest of the five.
- The ending's length was confirmed as final and is not to be trimmed. Scene 08 is
  170 frames and scene 09 is 120; the tagline's 210-frame total dwell stands.
- Nothing else moved: 1529/1530 still byte-identical, 1560/1590/1649 still one
  image.
```

```text
2026-08-26
- Legibility pass on direct art direction, from watching the film at the sizes it
  is embedded at rather than at full size. Three items, no retime, no topology or
  concept touched: contrast in the graph, the impact card's surface, and the size
  of the agent's answer.
- Contrast. Measured on frame 0629, 94.86% of the frame sat below luminance 12 and
  the hop-3 labels - the three checkout-service consumers, the payoff of the piece
  - were the dimmest ink in it. Shell labels went 1 / 0.75 / 0.65 / 0.58 -> 1 /
  0.84 / 0.76 / 0.70, plates 1 / 0.9 / 0.78 / 0.66 -> 1 / 0.94 / 0.86 / 0.78,
  repository labels 0.42 -> 0.56, and settled edges now gain opacity instead of
  losing it - a local edge ends at 0.72 rather than 0.56, a crossing at 0.88. The
  code bed came down to roughly half. Verified at 900 px: the whole topology, all
  eight labels and both repository names read.
- One defect found doing it: three hand-kept copies of the level the code settles
  to, and scene 04 was holding scene 03's previous numbers, so the code read
  brighter under the impact card than under the graph the card describes. One
  definition now, `settledBed` in CodeWorld.tsx.
- The impact card stops being a card - no fill, no hairline, no padding - which is
  what STORYBOARD.md already asked for under *No hay claim line*: the values read
  against the graph, and the graph under `7 affected symbols` is the proof of the
  figure. An opaque panel made that impossible.
- The agent's answer grew: lead 24 -> 28, quantities 32 -> 42, path 22 -> 26, and
  the path sets on two lines so it survives the 1:1 and 9:16 crops. 42 is above
  the body tier §7 offers; §7's own reason for existing is that the video stay
  understandable inside a social post, and at 32 px the film's central sentence
  was 1.7% of the height of a 600 px embed. Two knock-ons: `answerLift` -260 ->
  -287 to keep the grown block centred, and `attributionLayout.y` moved because
  the second path line was drawn over the signature.
- Not done, and deliberately. The review also asked for more perceptible depth,
  a stronger cross-repository payoff and a narrative bridge into the benchmark;
  two of those change durations and cascade through every document, so they are
  their own pass. It asked to shorten the outro, which contradicts a direct
  instruction that the ending's length is final - the instruction wins. And it
  asked to bring back `A name is not a symbol.`, which STORYBOARD.md records as
  built, watched and cut, with the reason: it named what the two columns were
  already demonstrating. Not reinstated without a decision taken in knowledge of
  that.
```
