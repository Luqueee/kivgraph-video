# Scene 03 — Graph Reveal

## Purpose

This scene is the hinge of the video. The token `withRetry()` stops being HTML text and becomes a
node in a three-dimensional space, in the same screen rectangle and at the same apparent scale, and
then the codebase it belongs to opens out around it.

Everything before this shot argued that a symbol has consequences. This shot shows them, and it has
to show them as a **place** rather than as a picture: the viewer must come away believing there is a
structure that continues past the edge of the frame, not that they were shown a diagram.

If the substitution at the start is visible, the video has a cut in the middle of its thesis. If the
structure that follows reads as a flat chart, the video has spent five seconds saying what a
screenshot could have said.

## Viewer takeaway

> The thing I was looking at is one node in a real structure, and that structure has depth I have
> not seen the end of.

Not "here is a graph". The graph is the evidence; the space is the argument.

## Narrative context

`02-agent.md` ends with the question typed and the tool named. This scene is the answer beginning to
arrive, and it answers spatially before it answers semantically — the viewer understands that
`withRetry()` is connected to things several seconds before they could read every label.

`04-blast-radius.md` inherits this scene's final frame exactly and counts what it already shows.

## Timeline

**This document covers two storyboard scenes.** `STORYBOARD.md` splits the material into
SCENE 03 — FROM CODE TO GRAPH (0550–0700) and SCENE 04 — THE GRAPH EXPANDS (0700–0910). Both are
implemented by the single component `src/scenes/GraphRevealScene.tsx`, per `AGENTS.md` §7 and the
timeline in `STORYBOARD.md` §26, which already assigns one 300-frame `GraphRevealScene` sequence at
`from={330}`. Because of that merge this document sits one behind its storyboard numbers, and
because `STORYBOARD.md` SCENE 05 — CROSS-REPOSITORY is now a record of a cut scene rather than a
scene, every document after this one sits two behind: storyboard SCENE 06 is documented in
`04-blast-radius.md`, and so on. `docs/scenes/README.md` holds the canonical statement of this.

- Storyboard scenes: `STORYBOARD.md` — SCENE 03 FROM CODE TO GRAPH **and** SCENE 04 THE GRAPH
  EXPANDS
- Global frames: 0550–0910
- Scene-local frames: 0220–0580
- Time: 5.5 s – 11.5 s
- Duration: 360 frames (6.0 s at 60 fps)
- Remotion component: `src/scenes/GraphRevealScene.tsx`
- First fully Three.js scene of the video
- The global boundary lives inline in `src/Composition.tsx` as the scene's `<Sequence>` literals.
  The component animates in scene-local frames: `useCurrentFrame()` inside the `Sequence` starts
  at 0.

### Phase A — "from code to graph" (0550–0700 / local 0220–0370)

Storyboard SCENE 03. The symbol becomes a node and its direct callers appear behind it. The camera
steps in and off the axis.

| Master | Local | Beat                                                                     |
| -----: | ----: | ------------------------------------------------------------------------ |
|  0550  |  0000 | `withRetry()` holds its screen position; the dissolve begins; camera held |
|  0580  |  0030 | substitution complete, the prompt layer is gone; the camera starts moving |
|  0612  |  0062 | the first edge begins to draw, leaving the node already on screen         |
|  0618  |  0068 | `Policy.Do()` begins to appear                                            |
|  0638  |  0088 | second edge begins                                                        |
|  0642  |  0092 | first edge complete                                                       |
|  0650  |  0100 | `Once()` begins; the camera reaches its second pose and turns downstream  |
|  0654  |  0104 | `Policy.Do()` fully present                                               |
|  0660  |  0110 | the anchor's plate has finished growing out of the prompt's field         |
|  0668  |  0118 | third edge begins                                                         |
|  0678  |  0128 | `Client.Charge()` begins; `Once()` fully present                          |
|  0700  |  0150 | Phase A ends; the move continues without a beat                           |

### Phase B — "the graph expands" (0700–0910 / local 0370–0580)

Storyboard SCENE 04. The near repository completes and names itself, then the camera opens space to
its right and the impact is seen leaving for a second codebase.

| Master | Local | Beat                                                                  |
| -----: | ----: | --------------------------------------------------------------------- |
|  0708  |  0158 | fourth edge begins                                                     |
|  0718  |  0168 | `Client.Refund()` begins; `Client.Charge()` fully present              |
|  0790  |  0240 | cluster label `payments-api` begins to surface                         |
|  0796  |  0246 | `Client.Refund()` settles; the near repository is complete             |
|  0828  |  0278 | `payments-api` label settled. **Nothing else happens for eighteen frames.** |
|  0846  |  0296 | one crossing begins, alone, travelling off the right of a frame the camera has not moved |
|  0845  |  0295 | the rig's hold ends; it starts opening out, following where the edge went |
|  0886  |  0336 | `checkout-service` label begins                                        |
|  0890  |  0340 | the first crossing lands; `CheckoutService.PlaceOrder()` begins        |
|  0896  |  0346 | second crossing begins                                                 |
|  0898  |  0348 | third crossing begins                                                  |
|  0904  |  0354 | `ReconciliationJob.Run()` begins                                       |
|  0906  |  0356 | `RefundHandler.Handle()` begins                                        |
|  0918  |  0368 | the camera reaches its final pose and holds                            |
|  0938  |  0388 | the last node settles, and the `checkout-service` label with it; hold  |
|  0950  |  0400 | scene ends; `04-blast-radius.md` continues the same graph              |

The phase boundary at 0700 is a label on this document, not an event in the shot. The camera has
been moving since 0580 and does not pause, change direction or change rate there. The viewer must
not be able to find the seam, because there is not one.

**Every edge waits for its parent, and every node waits for the edge reaching it.** That ordering is
the scene's argument in miniature: impact propagates, it does not appear. If two hops landed
together the structure would read as a picture instead of a consequence, and the scene would lose
its only claim.

**The `checkout-service` nodes are revealed by the camera, not by a fade.** Their windows are not
choreography: 238, 251 and 253 are the measured frames at which the camera has already carried each
node 45 px inside the frame. Opacity follows the camera in. A node fading up while still crossing
the frame edge is a label sliced in half, which reads as a rendering fault rather than as a
discovery.

**A cluster label ramps on its own curve.** `labelEasing` in `src/three/graphState.ts` is
front-loaded rather than eased in, and the reason is photometric rather than aesthetic. A repository
label settles at `clusterLabelOpacity` 0.42 of `textMuted` over a near-black frame, which makes it
the dimmest type in the film. On the ramp curve the rest of the scene uses, the first two thirds
of the fade sat below the level at which that grey separates from the background. Forty-two frames
of ramp therefore behaved like a twelve-frame pop: `checkout-service` appeared out of nothing, in an
empty corner the vignette crushes, while the eye was on the crossings drawing at the other side of
the frame. Front-loaded, the label crosses into visibility in its first quarter and spends the rest
of its window settling. It has to be faintly present while the crossings travel toward it — a name
that is there to be read, not a name revealed after the tubes land.

`checkout-service` ramps over local 236–287, so it finishes on the frame its last plate,
`CheckoutService.PlaceOrder()`, finishes arriving: the name and the group it names stop moving
together. A label is not a hop, so this does not soften the ordering rule above; a repository is
simply not complete until the last thing inside it has landed.

## Initial state

At master frame 0550 (local 0220):

- scene 02's final image is on top at full opacity. Master `0549` and `0550` render
  **byte-identical** — verified by md5, not asserted;
- underneath it, the code world is frozen at scene 02's last state, and the graph is drawn with the
  anchor node occupying exactly the rectangle the prompt's `withRetry()` token occupied;
- the camera is at eye `(0, 0, 9)` looking at the origin, motionless;
- no other node, no edge, no cluster label is present.

## Match-cut calibration

Measured, not assumed. `src/three/projection.ts` holds the arithmetic.

With a vertical `fov` of 50° and the subject plane at `z = 0`, a camera at `Z: 9` gives:

```text
pxPerUnit = (1080 / 2) / (9 · tan(25°)) = 128.673 px per world unit
```

so the token's `213.84 × 47.52 px` is `1.6619 × 0.3693` world units, and the graph group sits at
`(0.8316, -0.8845, 0)` to put its origin on `(1347, 653.82)`.

Three findings the implementation depends on:

- **Offset the subject, never the camera.** React Three Fiber re-aims its default camera at world
  origin whenever the canvas is created or resized, so a camera translated sideways silently rotates
  back. The offset belongs to the group that holds the graph. `src/three/CameraRig.tsx` writes the
  pose during render and calls `updateMatrixWorld` immediately, so the camera is a pure function of
  the frame rather than of when the component mounted.
- **The first pose is not a choice.** `eye (0, 0, 9)` looking at the origin is the only pose whose
  view basis is the identity, which is what makes the general projection collapse to the arithmetic
  above. The rig holds it, motionless, until the dissolve is over: everything three-dimensional
  about this scene begins at local 30 and not one frame earlier.
- **Tone mapping had to be turned off.** React Three Fiber defaults to ACES Filmic, which is correct
  for a scene lit in physical units and wrong for this one: the whole shot lives in the bottom 12%
  of the range, where that curve has its steepest compression. With it on, a plate authored
  `#171a1f` rendered `#080a0d` — darker than the background it was supposed to sit on. The canvas
  now renders with `NoToneMapping` and sRGB output, so the graph's greys are the site's greys.

Frames 0549 and 0550 must be inspected side by side after any change to either scene.

## Layout validation

The dataset in `src/data/graphDemo.ts` was searched, not drawn. Every candidate layout was projected
through `src/three/projection.ts` at every frame of the camera path and rejected if two labels
touched, a label left the frame, an edge crossed a label it does not connect, or `checkout-service`
became visible before the camera had made room for it.

What the shipped layout measures:

| Phase | Local | Anchor label | Note                                            |
| ----- | ----: | -----------: | ----------------------------------------------- |
| A     |  0220 |        32 px | the match cut; identical to the prompt token    |
| B     |  0335 |        39 px | direct callers present                          |
| C     |  0420 |        49 px | the near repository complete, camera closest    |
| D     |  0472 |        31 px | the crossings in flight                         |
| E     |  0519 |        29 px | the whole graph, settled                        |

- Tightest label margin over all 300 frames: **55 px**, on `checkout-service` at local 242.
- No two labels overlap on any frame.
- No edge curve passes through a label it does not connect. The lateral bow is the constraint that
  decides this: at three times its shipped value the curves are prettier and the edge into
  `ReconciliationJob.Run()` swings across the `checkout-service` label.
- Type ladder at the settle frame: 28.6 / 25.0 / 23.5 / 21.3 / 19.4 / 18.4 / 17.1 / 16.0 px. Most of
  that comes from perspective; `shellLook` in `src/three/graphFrame.ts` adds a small authored step so
  the outermost label stays legible rather than merely honest.

## Final state

At master frame 0910 (local 0580):

- camera at eye `(7.0, 3.2, 10.0)` looking at `(8.0, 0.0, -2.4)`, held since local 268;
- eight nodes present, each an extruded plate carrying a DOM label;
- seven edges complete and settled to their resting weight and colour;
- both cluster labels legible: `payments-api` below the near group, `checkout-service` above the far
  one;
- `withRetry()` still identifiable as the origin of everything: the largest label, the brightest
  plate, the only accent in the frame;
- the code world still underneath as a dim texture, receding, never having cut away;
- **no explanatory text of any kind.** Every string on screen is a symbol name or a repository name,
  read verbatim from `src/data/graphDemo.ts`.

This is the state `04-blast-radius.md` inherits. It does not re-derive it: `src/three/blastState.ts`
reads this scene's settled values through `getGraphState(300)`, because every ramp in this scene
clamps and 300 therefore returns what frame 0909 renders.

## Visual composition

**Layout is a cascade in depth.** Each hop from the changed symbol steps `+x` and `-z`, so distance
from the change is distance from the camera:

```text
   hop 0   withRetry             z  0.0    the change
   hop 1   direct callers        z -0.8    internal/retry
   hop 2   the public package    z -1.9    paymentService
   hop 3   the other repository  z -3.4    checkout-service
```

Two layouts were built before this one and both are instructive. A left-to-right chart read as a
flowchart. Concentric rings read as a radar sweep: the rings became the loudest objects in the
frame, they had to be drawn as screen-space ellipses to fit 16:9, and the viewer's first question
was what the circles measured rather than what the graph said.

What both got wrong is that they encoded hop count in a **drawn shape**. Here it is encoded in
position, so nothing has to be drawn around anything. A viewer reads the ladder as depth long before
reading a single label, because that is what perspective, occlusion and parallax are for.

**Hierarchy** is luminance first, size second, and both are mostly consequences of distance. The
accent budget for the whole scene is spent on two things: the hairline around the anchor's plate,
and an edge while it is resolving. Nothing else in the frame carries hue.

**The code never leaves.** It stays underneath at scene 02's ending luminance and keeps receding,
blurred, exactly as the depth bed does in scene 01. The graph is drawn *inside* the code
environment, not on a black slide. This is the single largest reason the shot reads as the same film
as the opening.

**The periphery is crushed** by scene 01's radial falloff, transposed and centred on the anchor, so
the frame reads as a crop of something larger and a label entering at the edge arrives out of
darkness rather than appearing on a flat field.

## Motion

**The dissolve and the substitution (0550–0580 / local 0220–0250).** The prompt layer and the
residual code world fade out while the token `withRetry()` hands over to a 3D node occupying the
same screen rectangle. Matched position, matched apparent scale, matched typography, matched colour,
brief cross-fade. A cross-fade between two identical images has no visible midpoint — that is the
whole trick, and it is why the substitution needs no flash, blur or whip to cover it.

The code's own `withRetry` is **demoted, never deleted.** It is a word inside a line of Go that stays
on screen; removing it would leave `func      (ctx context.Context`, a hole that reads as a
rendering fault. What retires is its accent and its selection field. By local 90 it is ordinary code
and the only accented `withRetry` in the frame is the node.

**The camera rig.** Four poses, and it is a rig — an eye and a point it looks at — rather than a
position and a fixed direction:

```text
   0220-0250   eye (0.0, 0.0,  9.0)  ->  (0.0,  0.0,  0.0)   hold, the match cut
   0250-0320   eye (0.6, 0.4,  7.4)  ->  (1.3, -0.4, -0.4)   step in, off the axis
   0320-0415   eye (2.6, 0.2,  6.2)  ->  (3.8, -0.6, -1.0)   travel with the impact
   0415-0475   eye (2.6, 0.2,  6.2)  ->  (3.8, -0.6, -1.0)   held, while the crossing draws
   0475-0548   eye (7.0, 3.2, 10.0)  ->  (8.0,  0.0, -2.4)   rise and open out, after it
   0548-0580   held
```

That the camera is a rig is the change the whole design rests on. A camera locked to `-Z` sees every
plate square-on, so depth can only be inferred from scale and the shot reads as a diagram no matter
how the nodes are arranged. Once the eye steps off the axis the same coordinates produce
convergence, foreshortening, differential parallax between hops and a visible edge on every plate.

The **rise** in the last move is the pose that earns the scene its depth. The plates stand upright,
so a camera level with them sees them square-on; a camera above them sees every plate foreshorten,
its top edge catch the key light and its extrusion appear. The view direction ends 15° off `-Z`.

The horizontal reach is a constraint, not a preference. The graph spans 16 world units along `x`; a
stronger horizontal oblique foreshortens that span into a region too small to hold eight labels, and
a search over the real label metrics returns no camera that is both more oblique and legible. Depth
is therefore carried by the rise, by the plates' own orientation and by parallax — not by swinging
the camera sideways.

It never orbits, never rolls, never floats. `up` is world up on every frame.

**Rhythm.** Substitute → callers → travel → the near repository completes → the impact leaves →
land. Continuous motion throughout, with exactly one hold, at the end.

## Three.js

### Why 3D is necessary here

The subject of this scene is the shape of a dependency structure: how far it reaches, how many hops,
whether it stays inside one codebase. Collapsed into a diagram, that is an illustration of a claim.
In 3D, with a camera that moves, it is a place the viewer is being shown.

Two beats require it and could not be faked. The camera opening space to the right, which reveals
`checkout-service` by arriving at it rather than by fading it in. And the plates turning as the
camera rises, which is the only reason a still frame of this scene has depth in it.

### Scene topology

One R3F canvas mounted through `@remotion/three`, holding **only** the geometry:

- `src/three/GraphNode.tsx` — an extruded rounded plate with a hairline contour on its front face;
- `src/three/GraphEdge.tsx` — a Catmull-Rom tube;
- `src/three/CameraRig.tsx` — the pose, written imperatively during render;
- lighting.

Everything that is text is DOM, positioned by `projectPoint` from the same camera pose the canvas
uses. Text stays text: it is rendered by the same font stack as every other scene, at the subpixel
quality the rest of the video has, and it never becomes a blurred texture at the moment the viewer
is asked to read it. The two renderers agree by construction rather than by tuning.

### Nodes

A node **is** its label; the plate is the surface the label sits on, and its job is to give that
label a position in space rather than on the screen. It earns its place in three ways, all of which
need geometry: it foreshortens as the camera moves off-axis, its side face appears and disappears
with the viewing angle, and its hairline catches the light unevenly across its length.

All plates share one orientation, a few degrees off the image plane. Shared rather than per-node,
and small rather than dramatic: a common orientation reads as one material in one space, whereas
nodes fanned at individual angles read as scattered cards.

The selected node is distinguished physically, not chromatically: it is on the brighter of the two
surface tokens, its plate is twice as deep, its material is the only one finished enough to return a
highlight, and it carries the scene's only accent hairline — at 32%, because a full-strength accent
border turns the node into a button, which is a control the viewer expects to press.

The anchor's plate begins life as the prompt's selection field. The DOM field withdraws while the
plate grows its padding and its thickness over local 30–110, so the viewer sees a highlight become
an object rather than one thing replace another.

### Edges

Tubes, not lines. `linewidth` is ignored by every WebGL platform that matters, so a
`lineBasicMaterial` edge is one pixel wide at every distance — precisely the flatness this scene
exists to remove. Real geometry means an edge near the camera is visibly heavier than one behind it,
and the depth of the graph survives a still frame.

Each curve bows toward the camera and slightly to one side. Both matter: the lateral bow keeps the
two edges leaving `withRetry()` from reading as one shape, and the bow in `+Z` means an edge is never
coplanar with the plates it connects, so it passes visibly *in front of* the space between them.

Edges draw from the node already on screen **toward** the node arriving. The dataset stores
`caller → callee` and the animation traverses it backwards, because what is being animated is impact
leaving `withRetry()`, which is the question being answered.

An edge carries the accent while it resolves and settles to a neutral within 26 frames. The accent
is carried at 62% opacity: at full strength a resolving edge measured `#2153c3` across 6 px, which
is a beam, not a relationship.

### Repositories

There is no geometry for a repository. A faint base plane was built and shipped for exactly one
render; correctly exposed it is a rectangle with four corners around each cluster — a container,
which is the one thing a repository must not be here. `checkout-service` is not a box the impact
enters, it is a place the impact is already in by the time you see it.

Depth, distance and one floating label each carry it. `payments-api` sits below the near group,
`checkout-service` above the far one; both positions came out of the same collision search as the
nodes.

### Lighting

Soft ambient, one key from above and to the camera's left, and a dim fill from behind the graph so a
plate's far edge separates from the background instead of dissolving into it. Two lights, no
shadows: enough for form, not enough to look like a product render.

The intensities are set by measurement. At the settle frame the anchor's face lands around `#131619`
with its lit top edge at `#30363e`, a hop-1 plate around `#151617`, a hop-3 plate around `#0e0f11`,
against a `#0a0b0d` background. Still the darkest things in the frame after the background, still
well below the type, and unmistakably objects.

### Materials

Flat, matte, unlit-looking, near-black. Metalness stays at 0.02 for every plate: a metallic surface
reflects its environment and this scene has no environment map, so raising metalness to get a sheen
reflects black — measured, and it made the anchor darker than the plates it was meant to lead. The
anchor's highlight comes from roughness against a real light.

### Depth

Carried by perspective, by the plate orientation, by the parallax of the move, and by scene 01's
radial falloff on the periphery. There is no depth-of-field pass. `STORYBOARD.md` §15 permits one at
graph entry and at the cross-repository reveal; that reveal has since been cut, and §15 now records
the pass itself as built, measured and retired. Frame 0909 lands without it.

### Deterministic animation rules

- All state is `f(frame)`. No accumulating `useFrame` mutation, no wall-clock time, no unseeded
  randomness (`AGENTS.md` §17–§18).
- The camera pose is written during render, not in an effect, so it cannot depend on mount order.
- Node positions come from the precomputed dataset in `src/data/graphDemo.ts`, never from a force
  simulation at render time (`STORYBOARD.md` §19–§20).
- Propagation is causal and ordered: direct caller → caller of caller → consumer. Never
  simultaneous.

## Transition in

Hard boundary at 0550 in `src/Composition.tsx`, but **not a visual cut**. Scene 02 delivers a
contract at its frame 0549: the screen-space centre and apparent scale of the token `withRetry()`,
its font and weight, its colour and selection field, and the direction and velocity of the 2D
push-in already underway. This scene honours all of it.

- The central node occupies that same screen rectangle at 0550.
- Its label is drawn in the same face at the same apparent size.
- The R3F camera starting at `Z: 9` continues the push-in rather than restarting a move.
- The prompt layer and the residual code world are dissolved by **this** scene, over 0550–0580, not
  by scene 02.

If `promptLayout`, the token's size or the push-in curve changes in `02-agent.md`, this scene must be
updated in the same task. Frames 0549 and 0550 are always inspected as a pair.

## Transition out

Hard boundary at 0910 into `04-blast-radius.md`, but **not a visual cut**. The next scene continues
this exact graph: same camera pose, same node states, same edge states, same labels. Nothing is
added at the seam — no caption, no label, no veil — and scene 04 works by reducing the opacity of
everything that is not the source symbol, the crossings or their endpoints.

The graph state at frame 0909 must therefore equal the graph state scene 04 assumes at 0910. The
practical consequence is that graph state must be a pure function of the **global** frame, or the
two scenes must share the same state function with an explicit offset — a discontinuity here would
read as a mistake, since nothing in the image is supposed to have changed.

## Copy

**No explanatory text appears in this scene.** Not `2 repositories`, not `7 affected symbols`, not a
caption naming what the crossings are. Every string on screen is a symbol name or a repository name,
read verbatim from the dataset. Nor does any later scene supply one: the graph scenes carry no
viewer-addressed sentence at all now, so what this scene does not say is not being saved for
somewhere else.

## Key frames

```text
frame 0550 — match cut; withRetry() in its prompt position, the layer beginning to dissolve
frame 0580 — the word is now a 3D node, fully lit and accented; the prompt is gone; the code is
             still legible underneath
frame 0660 — the anchor's plate has finished forming; two callers present; one edge resolving
frame 0750 — the near repository is complete and begins to name itself
frame 0850 — a crossing edge is in flight toward empty frame; the reveal is a camera move
frame 0909 — the whole graph, settled — KEY VISUAL, must work as a still image
```

`STORYBOARD.md` §28 lists 0550, 0580, 0610, 0670, 0700, 0760, 0870 and 0900 for manual review. The
list above is where the beats actually land now, and the two should be reconciled the next time the
storyboard is touched.

**Frame 0909 is the key visual frame** (`STORYBOARD.md` §29), intended for social use. As a still,
with no motion and no audio, it must communicate the entire product thesis: one accented symbol, a
structure receding from it in depth, and three relations leaving the near codebase for a second one.

## Invariants

- **No explanatory cross-repository text appears in this scene.** The viewer must *see* it here.
  The caption that once told them in the next scene has been cut, so the crossing into a second
  repository is carried by the image alone, in this scene and in every scene after it.
- **The camera never rotates about its view axis and never orbits.** It rises and travels; `up` is
  world up on all 300 frames.
- **There are no rings, circles, containers or walls.** Nothing is drawn *around* anything. If a
  future edit needs to group nodes, it must do it with position and light.
- **Text is DOM and geometry is WebGL, placed by one projection.** The moment a label becomes a
  texture, the shot stops being able to claim the graph is a real arrangement in space that you are
  reading normally.
- **The code's own `withRetry` token is demoted, never deleted.** It is a word inside a line of Go
  that stays on screen.
- **The match cut at 0550 is not covered by an effect.** No flash, no whip pan, no blur transition.
- **Accent marks exactly one thing at a time:** the anchor's hairline, and an edge while it is
  resolving.
- **The graph state is continuous across 0910.** Scene 04 must be able to assume it.

## Flexible elements

- exact node coordinates within the dataset, as long as the layout search still passes;
- exact delays between the typing groups of beats, within a few frames;
- the exact easing of each camera leg;
- the lateral bow of an edge, as long as no curve crosses a label it does not connect;
- exact cluster-label positions, as long as each stays clear of its own group.

## Technical notes

- R3F is mounted through `@remotion/three` (`ThreeCanvas`), with `three` and `@react-three/fiber`
  already in `package.json`. Consult the local Remotion skills under `.claude/skills/` before
  assuming an API (`AGENTS.md` §3).
- Global scene boundaries live inline in `src/Composition.tsx` as
  `<Sequence name="03 Graph Reveal" from={330} durationInFrames={300}>`. That file is the single
  place holding global frame numbers — there is no timing module, deliberately, because Remotion
  Studio can only trim inline literals.
- **Phase structure.** This component covers two storyboard scenes but is a single flat 300-frame
  timeline, deliberately. The camera opens straight through local 150 without a pause, a change of
  direction or a change of rate; a sub-`Sequence` boundary there would put a seam in the source at
  the exact frame the shot is built to have none. The phase headings in `## Timeline` are
  documentation, not structure.
- Dataset: `src/data/graphDemo.ts`, shaped per `STORYBOARD.md` §19 — `{ repositories, nodes, edges }`
  with `GraphNode = { id, label, repository, package, kind, position }`.
- Derived state: `getGraphState(frame)` in `src/three/graphState.ts`, returning the
  `GraphVisualState` shape from `STORYBOARD.md` §22. Keeping the whole scene's timing in one pure
  function is what makes the causal ordering auditable and the 0910 handoff verifiable.
- Spatial contract: `src/three/graphFrame.ts`. One definition of a node's box, three consumers — the
  DOM label, the plate drawn behind it, and the clipping of every edge that arrives at it. If they
  disagree, an edge stops short of its own node or a plate sits crooked under its text.
- Projection: `src/three/projection.ts`. `projectPoint` is written out rather than read back from
  the R3F camera because the scene needs it during render, before the canvas has drawn anything.
- Colours come from `src/brand/tokens.ts`. No hard-coded hex values in the scene or the three
  components.
- Labels: `JetBrains Mono` from `src/brand/fonts.ts`. Late font loading would shift or pop labels
  mid-shot; label typography must be resolved before the first rendered frame (`AGENTS.md` §27).
- Performance: 1920×1080 at 60 fps for 300 frames. Geometry is rebuilt per frame for eight plates
  and seven tubes, which is cheap and keeps the components pure.

## Current compromises

- **Sound is absent.** `STORYBOARD.md` §18 suggests a small tick on edge resolve and a slightly
  deeper sound on the cross-repository connection. Neither is implemented, and frame 0909 must land
  without them.
- **DOF is a P1 item** (`STORYBOARD.md` §35) and ships absent. The radial falloff on the periphery
  is a composition device, not a depth-of-field pass; its absence is not a defect, but a real DOF
  pass that softens a crossing or a repository label would be.
- **`STORYBOARD.md` §28–§29 still list 0900** as the key visual, and the last node now settles at
  0897 with the scene holding to 0910. `0909` is the frame that ships; the storyboard should be
  reconciled the next time it is touched.
- **Edges are one pixel wide in the shader's terms and cannot be thicker as lines.** They are meshes
  for exactly that reason; if an edge ever needs a rendered outline or a variable profile it has to
  become a `Line2`/`meshLine` style ribbon, which is a larger change and has not been needed.

## Modification history

```text
2026-08-23
- Initial scene specification.

2026-08-23
- Retimed for the scene 01 redesign; scene 03 now spans 0330-0630.

2026-08-23
- Layout redesigned from a left-to-right cascade with two lateral clusters into
  concentric shells; radius is hops from the changed symbol.

2026-08-23
- Concentric shells removed. Layout is now a cascade in depth: each hop steps
  +x and -z, so distance from the change is distance from the camera. Reason:
  correctly exposed, the rings were the loudest objects in the frame and read
  as a radar sweep; they also had to be drawn as screen-space ellipses to fit
  16:9, which is not a circle and could not be defended.
- The camera became a lookAt rig and now rises above the chain in its last
  move, ending 15 degrees off -Z. This is what makes the plates foreshorten;
  without it the shot was flat regardless of how the nodes were arranged.
- Nodes became extruded plates with a hairline contour; edges became tubes.
  Both exist so that a still frame has depth in it.
- Repository base planes were built, rendered once and deleted: correctly
  exposed they are boxes around each cluster.
- Tone mapping disabled and sRGB output set explicitly. R3F's default ACES
  Filmic was rendering a #171a1f plate as #080a0d, which is why three earlier
  rounds of raising the lights had no visible effect. This was the root cause
  of the scene reading as flat, not the layout.
- Match cut re-verified byte-identical after every change above.

2026-08-24
- Cluster labels ramp on a dedicated front-loaded curve (labelEasing) instead
  of the scene's default. At 0.42 of textMuted over near-black, most of an
  ease-in ramp sits below the level where that grey separates from the
  background, so the far repository's name was reading as a pop rather than
  as a fade.
- checkout-service extended to 236-287 (was 236-278) so the name settles on
  the same frame as the last plate inside it, checkout.placeOrder.

2026-08-25
- Nothing in this scene moves; 0330-0630 and the 0629 key visual are as they
  were. What changed is the other half of its contract: the next scene's
  `Cross-repository.` was cut with its veil, and `Exact symbols. Not name
  matches.` after it, so the graph scenes now carry no viewer-addressed
  sentence at all. This scene no longer withholds a label for a later one to
  pay off - the crossing into a second repository is carried by the image, and
  by nothing else, for the rest of the film.
```

```text
2026-08-26
- Contrast pass, on direct art direction, after watching the film at the sizes it
  is actually embedded at. The complaint was that the code bed and the graph
  shared too much of the same luminance range, and measured on frame 0629 that
  was exactly true: 94.86% of the frame sat below luminance 12 and the hop-3
  labels - the three checkout-service consumers, which are the payoff of the whole
  piece - were the dimmest ink in it.
- The shell ladder was compressed. Labels 1 / 0.75 / 0.65 / 0.58 -> 1 / 0.84 /
  0.76 / 0.70, plates 1 / 0.9 / 0.78 / 0.66 -> 1 / 0.94 / 0.86 / 0.78. The
  hierarchy is not weaker: what separates the anchor is that it is the brightest
  surface, the largest type and the only thing carrying hue at rest.
- Repository labels 0.42 -> 0.56. `checkout-service` is the word that makes the
  cross-repository claim land and it was the faintest type in the frame at the
  moment the film wants it read.
- Settled edges now gain opacity instead of losing it. A local edge ended at 0.56,
  which put the structure of the graph below its own labels; it ends at 0.72 now,
  and a crossing at 0.88 - a settled crossing is supposed to weigh more than any
  local edge.
- The code bed came down: body 0.03 -> 0.017, context 0.026 -> 0.014, neighbours
  0.022 -> 0.012, bed 0.02 -> 0.011, and the `withRetry` line 0.062 -> 0.038 so it
  stays the brightest code without competing. The code never disappears - the film
  never leaves it - but it is the bottom of the ladder now rather than a rival.
- One defect found while doing it: there were three hand-kept copies of the level
  the code settles to, in scene 03, scene 04 and answerState.ts, and scene 04 was
  still holding scene 03's previous numbers - so the code read brighter under the
  impact card than under the graph the card describes. There is one definition
  now, `settledBed` in CodeWorld.tsx, and all three read it.
- Verified at 900 px, which is what the review was actually asking about: at
  embedded size all eight labels, both repository names and the whole topology
  read.
```

```text
2026-08-26
- Depth pass, on direct art direction: in still frames the graph could still be
  read as a 2D diagram with curved connectors, which is the one thing the plates
  exist to prevent.
- The key light went back up, and finding out why it was down is the whole entry.
  It had been lowered to `[-4, 0, 9]` - 22 degrees off the plates' own normal -
  because `plateTilt` pitched the plates 17 degrees into it and the key was
  striking their top rim square, coming out brighter than the front face. That
  measurement was correct. But `plateTilt` was afterwards set to the identity
  basis and the plates stand upright now, so the reason was gone and the flat key
  remained: a light almost normal to a flat surface, which lights the face and
  not the chamfer. `[-6, 5, 8]`, 43 degrees off the normal. The old failure needs
  pitched plates and there are none.
- Plate thickness 0.038 -> 0.062. The documented bound has not moved; what
  changed is that the chamfer is lit now, so it reads as a turning surface rather
  than a slightly darker line. Checked at 3x against the failure the bound exists
  for: the side face and the hairline are still two things, not a band.
- The edges' lift toward the camera roughly doubled, 0.13 + 0.012 L -> 0.22 +
  0.026 L. It is the only part of an edge that is unambiguously depth rather than
  curvature. The lateral bow is untouched - it was set at 0.032 against a real
  measured complaint about edges wandering, and doubling it would bring the
  detour back.
- Not done: per-node plate rotation of a few degrees. This file records three
  attempts at plate rotation and why each failed, and the labels are children of
  the plate group - they rotate with it, which is what produced fake italics on
  the far nodes. A varied per-node tilt is not the global tilt that was rejected,
  but it has the same consequence for the type, and the depth cue it would add is
  the one the upright plates already get from sitting at different places in the
  cascade.
```

```text
2026-08-27
- The cross-repository reveal became a beat instead of a coincidence, on direct
  art direction, and the scene grew 300 -> 360 frames to hold it. The master is
  1750 frames (29.17 s); everything after 0690 moved +60, and scene 07 a further
  +40 of its own.
- What was wrong was order, not geometry. The three crossings started at local
  224 while the camera was already opening at 195, so the new space and the edges
  that reach it arrived together and the shot said "and there is more over here"
  rather than "this relationship leaves the repository". It was the least marked
  moment in the film and it is the most sellable thing the product does.
- Now: `payments-api` completes, its label settles at local 238, and nothing
  happens for eighteen frames. Then one crossing draws alone for forty-four
  frames with the rig still parked at the pose it settled into at 195, so the
  edge visibly leaves the frame toward space the viewer cannot see. Only then
  does the camera open, following where the edge already went, and
  `checkout-service` arrives to explain it. The other two crossings come after,
  as confirmation rather than as the discovery.
- `placeOrder` goes first because `CheckoutService.PlaceOrder` is the consumer a
  reader can place without being told - an order being placed, reaching a retry
  policy four hops away in another repository.
- New camera pose at local 255, and a new `Easing.linear` segment with it, so the
  rig genuinely holds rather than creeping. The move now answers a question the
  viewer is already asking, which is the only thing AGENTS.md lets a camera move
  do.
- Key still 0629 is now 0689: same definition, the scene's last frame with the
  graph settled.
```
