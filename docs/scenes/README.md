# Kivgraph Video — Scene Documentation

| #   | Scene               |    Frames | Component              | Documentation                                            |
| --- | ------------------- | --------: | ---------------------- | -------------------------------------------------------- |
| 01  | Symbol              |     0–120 | `SymbolScene.tsx`      | [01-symbol.md](./01-symbol.md)                            |
| 02  | Agent               |   120–330 | `AgentScene.tsx`       | [02-agent.md](./02-agent.md)                              |
| 03  | Graph Reveal        |   330–630 | `GraphRevealScene.tsx` | [03-graph-reveal.md](./03-graph-reveal.md)                |
| 04  | Blast Radius        |   630–770 | `BlastRadiusScene.tsx` | [04-blast-radius.md](./04-blast-radius.md)                |
| 05  | Semantic Resolution |   770–970 | `SemanticScene.tsx`    | [05-semantic-resolution.md](./05-semantic-resolution.md)  |
| 06  | Agent Answer        |  970–1150 | `AgentAnswerScene.tsx` | [06-agent-answer.md](./06-agent-answer.md)                |
| 07  | Benchmark           | 1150–1270 | `BenchmarkScene.tsx`   | [07-benchmark.md](./07-benchmark.md)                      |
| 08  | Brand               | 1270–1360 | `BrandScene.tsx`       | [08-brand.md](./08-brand.md)                              |
| 09  | Outro               | 1360–1480 | `OutroScene.tsx`       | [09-outro.md](./09-outro.md)                              |

Master: 1920 × 1080, 60 fps, **1480 frames, 24.7 s**. Global frame boundaries
live only in `src/Composition.tsx`.

That 1480 is the plan, not what renders today. Scenes 01–06 exist, so
`KivgraphPromo` is registered at `mountedFrames` — currently **1150 frames,
19.17 s** — and Studio and `remotion render` produce the film that exists instead
of just over nineteen seconds of video followed by five and a half of black.
Raise `mountedFrames` in `src/Composition.tsx` as each scene lands, and delete it
once it reaches 1480.

The master length has moved seven times. Three were because the opening changed:
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
and the only one taken against a measurement rather than a judgement: 1330 to
**1480**, when the blast radius went 100 → 140, the semantic resolution 180 → 200
and the agent answer 90 → 180. See **Pacing and dwell time** below. Four scenes
have ever changed duration — scene 01 once, the blast radius twice, the semantic
scene twice, and the agent answer once. For every other scene, only offsets have
moved.

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
reading time rather than from feel, and the figures after the retime are:

| Element                                     | Dwell    |
| ------------------------------------------- | -------- |
| scene 04's impact card                      | `1.47 s` |
| scene 05's two counters                     | `1.00 s` |
| scene 06's lead-in                          | `2.23 s` |
| scene 06's counts                           | `1.97 s` |
| scene 06's path sentence                    | `1.67 s` (44 characters per second) |
| scene 06's `Answered with Kivgraph` label   | `1.43 s` |

Scene 05's counters were already at 1.00 s and its sixty-frame stand was left
exactly as it was; its twenty extra frames went to the *build* instead, where
every window was eighteen frames wide and spaced ten apart and is now twenty and
twelve. A comparison whose subject is counting cannot deliver its terms faster
than they can be counted.

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
| 07  | Benchmark           | specified only                            |
| 08  | Brand               | specified only                            |
| 09  | Outro               | specified only                            |

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

"Specified only" means the document is the contract the future implementation
must satisfy; no component exists yet and the corresponding stretch of the
master is still black.

## Visual grammar

Scenes 01 and 02 establish the grammar the rest of the video inherits:

- the camera lives inside the material; the world is never covered by a surface
  that explains it. Scene 04 spends the one exception: its impact card is a flat
  DOM panel composited above the canvas, because three counted numbers are a
  claim about the graph rather than a thing standing in it, and
  `src/components/MetricCard.tsx` holds that surface language for scene 07 too.
  `src/components/ImpactReport.tsx` composes it, and it exists because scene 05
  inherits the card on its first frame and fades it out during the flatten: two
  scenes drawing the same thing from two places is how a seam that must be
  invisible ends up measuring 22 dB. `ImpactReport` is the card alone — it used to
  carry a claim line under it, and that line was cut;
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
re-measured again once scene 06 landed, again after the semantic scene grew, and
again after the pacing pass: the 0330 and 0770 seams are pixel-identical, 0630 is
62.93 dB (glyph antialiasing only), and 1150 mounted frames render with no black
frame.

The 0970 boundary does not measure like those, and it is not supposed to. It is a
match cut, not an invisible cut: the symbol region across 0969/0970 measures
41.35 dB, because the symbol itself is in the same place at the same size, while
the whole frame measures far lower, because the split view's left column and
divider have gone and the prompt layer arrives. The whole-film scan over 1150
frames flags 0969 and 0970 and nothing else, and those are the two sides of that
cut — a step, not a spike, confirmed by the frames either side. Anyone measuring a
poor whole-frame figure at that boundary later should read the symbol region before
calling it a regression.

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
`1190`, `1350`. Each is documented in the scene that owns it, and each is stated
there as a *definition* rather than as a number, so the next retime can recompute
it instead of guessing:

| Frame  | Definition                                                              |
| ------ | ----------------------------------------------------------------------- |
| `0080` | scene 01's arrival: everything has landed together, first settled frame. |
| `0629` | scene 03's last frame — the settled graph, the image scene 04 inherits.  |
| `0718` | the frame scene 04's impact card settles on; first frame of its read.    |
| `0864` | the first frame of scene 05's measured byte-identical stand.             |
| `1064` | the frame scene 06's attribution label finishes on; the scene goes static.|
| `1190` | scene 07's `6.2k vs 63.5k` frame, both numbers fully legible.            |
| `1350` | scene 08's settled lockup plus tagline.                                  |

How they got here. `1064` joined the list as scene 06's label frame — it was
`0940` when the scene landed and `0970` after the semantic scene grew. Of the six
that predate it, the four after `0629` each moved −90 with the cross-repository
cut, and the last three moved a further −20 when the blast radius was trimmed,
then +30 when the semantic scene grew. The 2026-08-25 pacing pass moved five of
them: `0710` → `0718`, `0840` → `0864`, `0970` → `1064`, `1040` → `1190` and
`1200` → `1350`. Only `0080` and `0629` are untouched by it.

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
scene 06 only for the 30 frames it keeps a canvas at all; scene 07 onward must
carry them too.

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
`premountFor={30}` and no `postmountFor`, which is right while it is the last
mounted scene: nothing scrubs back across 1150 yet. Scene 05's `postmountFor`,
though, is now due and still missing — since 0970 became a boundary there is a
scene after it to scrub back from. Repeat both props on any sequence from scene 07
onward that mounts a canvas.

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
