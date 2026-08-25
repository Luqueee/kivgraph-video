# Kivgraph Video — Scene Documentation

| #   | Scene               |    Frames | Component              | Documentation                                            |
| --- | ------------------- | --------: | ---------------------- | -------------------------------------------------------- |
| 01  | Symbol              |     0–120 | `SymbolScene.tsx`      | [01-symbol.md](./01-symbol.md)                            |
| 02  | Agent               |   120–330 | `AgentScene.tsx`       | [02-agent.md](./02-agent.md)                              |
| 03  | Graph Reveal        |   330–630 | `GraphRevealScene.tsx` | [03-graph-reveal.md](./03-graph-reveal.md)                |
| 04  | Cross Repository    |   630–720 | `CrossRepoScene.tsx`   | [04-cross-repo.md](./04-cross-repo.md)                    |
| 05  | Blast Radius        |   720–840 | `BlastRadiusScene.tsx` | [05-blast-radius.md](./05-blast-radius.md)                |
| 06  | Semantic Resolution |   840–990 | `SemanticScene.tsx`    | [06-semantic-resolution.md](./06-semantic-resolution.md)  |
| 07  | Agent Answer        |  990–1080 | `AgentAnswerScene.tsx` | [07-agent-answer.md](./07-agent-answer.md)                |
| 08  | Benchmark           | 1080–1200 | `BenchmarkScene.tsx`   | [08-benchmark.md](./08-benchmark.md)                      |
| 09  | Brand               | 1200–1290 | `BrandScene.tsx`       | [09-brand.md](./09-brand.md)                              |
| 10  | Outro               | 1290–1410 | `OutroScene.tsx`       | [10-outro.md](./10-outro.md)                              |

Master: 1920 × 1080, 60 fps, **1410 frames, 23.5 s**. Global frame boundaries
live only in `src/Composition.tsx`.

That 1410 is the plan, not what renders today. Scenes 01–06 exist, so
`KivgraphPromo` is registered at `mountedFrames` — currently **990 frames,
16.5 s** — and Studio and `remotion render` produce the film that exists instead
of sixteen and a half seconds of video followed by seven of black. Raise
`mountedFrames` in `src/Composition.tsx` as each scene lands, and delete it once
it reaches 1410.

The master length has moved three times, always because the opening changed and
never because a later scene did. It was 1500, grew to 1620 when scene 01 was
extended from 90 to 210 frames, returned to 1500 when the old scene 02 was
deleted, and is now 1410 because scene 01 was cut from 210 to 120. Scenes 03–10
have kept their durations throughout; only their offsets moved.

## Implementation status

| #   | Scene               | Status                                    |
| --- | ------------------- | ----------------------------------------- |
| 01  | Symbol              | implemented, key frames inspected         |
| 02  | Agent               | implemented, key frames inspected         |
| 03  | Graph Reveal        | implemented, key frames inspected         |
| 04  | Cross Repository    | implemented, rendered frames inspected    |
| 05  | Blast Radius        | implemented, key frames inspected         |
| 06  | Semantic Resolution | implemented, key frames inspected         |
| 07  | Agent Answer        | specified only                            |
| 08  | Benchmark           | specified only                            |
| 09  | Brand               | specified only                            |
| 10  | Outro               | specified only                            |

`src/data/graphDemo.ts` exists and is the graph truth all four graph scenes read:
eight nodes, seven `caller → callee` edges, two repositories, a derived
`impactSummary` of **1 selected / 7 affected / 3 dependency paths / 2
repositories**, and `nameMatches`, the two real benchmark declarations scene 06's
left column lists. Those figures are counted from the data, so scene 05's card
and scene 06's counters cannot outlive the graph they describe — scene 06 prints
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
  that explains it. Scene 05 spends the one exception: its impact card is a flat
  DOM panel composited above the canvas, because three counted numbers are a
  claim about the graph rather than a thing standing in it, and
  `src/components/MetricCard.tsx` holds that surface language for scene 08 too.
  `src/components/ImpactReport.tsx` composes that card with the claim line under
  it, and it exists because scene 06 inherits the whole block on its first frame
  and fades it out during the flatten: two scenes drawing the same thing from two
  places is how a seam that must be invisible ends up measuring 22 dB;
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
- **the opening explains nothing in words.** Scene 01 carries no sentence at all
  — only a file path caption. The only sentence anywhere before the graph is
  finished is the agent's prompt in scene 02, and the viewer is ready for it
  because the camera built the question without stating it;
- **a sentence to the viewer is read on a darkened frame.** When viewer-addressed
  copy enters, a veil in `brand.background` rises over the whole frame, the text
  arrives a few frames later, and both leave the way they came. The rule is
  `STORYBOARD.md` § Frase sobre el cuadro; scene 04 established it for
  `Cross-repository.` and scene 05 follows it for
  `Exact symbols. Not name matches.` Two constraints travel with it: the veil
  never reaches black — 0.7 to 0.9, so whatever the sentence is about stays
  visible behind it — and it is zero at both ends of the scene that raises it,
  unless the next scene's document says it inherits one. It does **not** apply
  to graph-attached text or to a metric card's values: those exist to be read
  against the structure behind them, and dimming the graph under
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
  travels with the impact and rises above the chain, and in scene 04 it turns
  once, 20.6°, and stops. It never orbits continuously, never rolls, and `up` is
  world up on every frame;
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

**The DOM labels were never straight on their plates.** At the scene 04 landing
pose a world vertical projects with a lean running from `-10.4°` at the anchor to
`+9.0°` at the far cluster label — measured on the render, the anchor plate's own
edges come out at `-11.6°` and `-8.7°`, bracketing the model. The DOM type was
dead vertical against plates sheared by that much, and nobody had noticed because
the camera never moved far enough to make it obvious. In-scene text shares the
lean, so a far label now looks faintly italic: that is not a defect, it is the
perspective the plate always had, and the flat overlay was the thing that was
lying about it.

**troika lays down 20.8% less ink than Chrome at the same weight.** Both render
JetBrains Mono at 400; the deficit is the blend model — troika's SDF coverage is
linear alpha, Chrome's text is gamma-corrected — and it is invariant to
`sdfGlyphSize` (`-20.83%` at 64, `-20.88%` at 256), which is what proves it is not
a resolution artefact. Over the match-cut token rectangle, with the pre-existing
field-opacity step compensated out, glyph rasterisation alone measures 22.74 dB.
Everything else about that cut is exact: the troika word lands in the DOM token's
rectangle to within 0.5 px per glyph, the ink bounding box is identical at 207 px
wide, and the field and fill are byte-exact `#1e3a8a` and `#bfdbfe`.

It ships at 400, unfaked. The graph's labels are all troika so they are internally
consistent, and the deviation is against the DOM code bed and the shipped web.
Correcting it properly means emulating the reference rasteriser's stem darkening
— a small same-colour outline tuned until integrated ink matches — not raising the
weight, which would invent a typeface the design system does not have. Open, with
the number recorded so the decision can be made on evidence.
drift the cut breaks and nothing in the build will say so.

## Scene numbering

Document numbers follow the ten Remotion components, not the eleven storyboard
scenes. `STORYBOARD.md` splits the graph into
`SCENE 03 — FROM CODE TO GRAPH` (0330–0480) and
`SCENE 04 — THE GRAPH EXPANDS` (0480–0630); both are realised by the single
`GraphRevealScene` component, so every document from `04-cross-repo.md` onward is
offset by one relative to the storyboard.

| Document | Storyboard scene |
| --- | --- |
| `01-symbol.md` | SCENE 01 — THE SYMBOL |
| `02-agent.md` | SCENE 02 — ASK THE AGENT |
| `03-graph-reveal.md` | SCENE 03 + SCENE 04 |
| `04-cross-repo.md` | SCENE 05 — CROSS-REPOSITORY |
| `05-blast-radius.md` | SCENE 06 — BLAST RADIUS |
| `06-semantic-resolution.md` | SCENE 07 — NAME ≠ SYMBOL |
| `07-agent-answer.md` | SCENE 08 — RETURN TO AGENT |
| `08-benchmark.md` | SCENE 09 — BENCHMARK |
| `09-brand.md` | SCENE 10 — BRAND REVEAL |
| `10-outro.md` | SCENE 11 — CTA |

## Deleted scenes

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

Frames that must hold up as still images: `0080`, `0629`, `0800`, `0950`,
`1120`, `1280`. Each is documented in the scene that owns it.

Scene 03's entry moved from `0620` to `0629`. Both frames sit inside the held
final camera pose, but at 0620 the last crossing is still handing its accent back
to the structure; `0629` is the last frame the scene owns, the nearest thing to
settled, and the image `04-cross-repo.md` inherits one frame later — so the still
and the handoff are the same picture. `STORYBOARD.md` §28-§29 still list `0620`
and have not been reconciled.

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
greys. Scenes 04, 05 and 06 inherit both by drawing through the same
`GraphWorld`; scene 07 onward must carry them too.

Every graph sequence also carries `premountFor={30}`, and that is a preview fix
rather than a creative one. A `<Sequence>` renders its children only inside its
range, so at the 0630 boundary `GraphRevealScene` unmounts and `CrossRepoScene`
mounts; sharing the `GraphWorld` component does not share its instance, and the
`ThreeCanvas` loses its WebGL context at the seam. Measured in Studio by patching
`HTMLCanvasElement.prototype.getContext` and stepping 0629 <-> 0632 four times:
four new `webgl2` contexts. On the first displayed frame after the cut the DOM
labels are painted and the plates and tubes are not, so the whole graph blinks at
the one seam the design spends everything to hide. Premounting mounts the scene
thirty frames early while `<Sequence>`'s hardcoded `hideWhilePremounted:
"opacity"` keeps it invisible, so the canvas paints and the context is warm
before it is seen. Scenes 03, 04 and 05 also carry `postmountFor={30}`, because
scrubbing back across 0630, 0720 or 0840 remounts them and the timeline has to
survive being walked backwards as well as forwards. None of this touches the
film: `premountingActive` is gated on `!isRendering`, so no rendered frame
changes — the render never had the blink, only the preview did. Repeat both props
on the graph sequences from scene 07 onward as they land; scene 06 needs its
`postmountFor` at the same time, once there is a scene after it to scrub back
from.

## Known documentation debt

The scene documents cite `AGENTS.md` by section number (`§14`, `§17`, `§26`, …).
`AGENTS.md` was rewritten without numbered sections, so those citations no longer
resolve. Several documents also attribute the still-image key-frame list to
`AGENTS.md`; that list lives here and in `STORYBOARD.md` §28, and `AGENTS.md`
contains no frame numbers at all. Replacing both kinds of citation with section
titles is a mechanical pass across all ten documents and has not been done yet.
