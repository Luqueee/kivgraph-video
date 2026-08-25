# Scene 04 — Cross Repository

## Purpose

This scene exists to make the graph's **depth visible as depth**.

Everything in the frame has been three-dimensional since 0330 — real
coordinates, real perspective, a rig with an eye and a target — and for three
hundred frames the viewer has had to take that on trust, because the camera's
last move ends at 0598 and nothing turns after it. A structure seen from a
stationary camera is a picture of a structure. These ninety frames are the one
place in the video where the graph is seen from a camera that is moving, for
long enough to read as an object in space rather than as a well-drawn diagram.

It is still the narrative step:

```text
Cruza repositorios
```

from `STORYBOARD.md` §3 — but it makes it by moving around the crossing instead
of labelling it.

The scene adds no new structure. Everything in the graph already existed at
frame 0629. Two things change, and they are the same argument twice:

- **the rig turns.** The eye swings up and to the right — 4.9 units on `x`, 4.3 on
  `y` — on an orbit of constant radius, so the view direction rotates 20.6° and
  the total obliquity goes from 15.1° to 30.3° off `-Z`. Every plate is seen at a
  new angle, and the near end of the cascade crosses the frame *against* the far
  group instead of sliding with it;
- **the local chain recedes.** `Policy.Do()`, `Once()` and their edges fall to a
  fifth of their presence, leaving the claim at full strength: `withRetry()`, the
  public pair the impact travels through, the three consumers in another
  codebase, and the three edges between them.

The subtraction is what makes the turn legible. `03-graph-reveal.md` records that
the layout admits no more oblique camera while eight labels have to stay
readable; this scene has six, and buys its angle in the room that makes.

### What this scene used to be

Two implementations shipped here and both were cut. The history matters because
the second one was *better* than the first and still wrong.

The first dimmed the local chain in plain sight while a small caption sat in the
lower band. It read as nothing happening: ninety frames in which the picture
stayed ninety-five per cent the picture from before the cut, and the one new word
was the largest, brightest thing in a frame whose subject is the structure.

The second replaced the dimming with a veil — the whole frame receding to `0.86`
of `brand.background`, the word `Cross-repository.` read on it, the subtraction
finishing unseen underneath, the veil lifting onto an already-isolated graph.
That solved every problem the first one had, and it was verified: four beats
inspected, both seams pixel-identical, the caption anchored to the far
repository's own label.

It was cut anyway, on direction, because a word centred on a darkened frame reads
as a subtitle burnt over a shot rather than as part of the film. With the word
went the veil, which had no reason to darken a frame nobody was being asked to
read, and with the veil went the only *visible* event the scene had — which is
what left room for the camera to become the event instead.

The storyboard's rule for this material is now satisfied by having nothing to
satisfy it with: *"No mostrar todavía texto explicando cross-repo. Dejar que el
espectador lo vea primero."* The video never explains cross-repo in words. The
first veil in the film is Scene 05's, under its claim line.

This is the payoff of the whole first half of the video, and it is the reason
Three.js is used in this project at all (`AGENTS.md` §19, `STORYBOARD.md` §9) —
more literally than before, since the scene is now nothing but the camera and the
geometry.

## Viewer takeaway

> That far group is a second repository, and real relationships reach it from the
> codebase `withRetry()` lives in — and I am looking at a structure, not a chart.

Secondary, implicit: this is what Kivgraph sees. Nobody had to grep for it.

## Narrative context

**Immediately before.** Scene 03 (`GraphRevealScene.tsx`, frames 0330–0630,
covering storyboard scenes 03 and 04) took `withRetry()` from source text to a
node at the world origin, then opened its codebase out from it as a cascade in
depth — one step `+x` and `-z` per hop from the change, so distance from the
change is distance from the camera. Each edge was drawn *before* the node it
arrives at, so the shot travels a relationship and then shows what is at the end
of it. Hops 0–2 are `payments-api`; hop 3 is `checkout-service`, the furthest
group from the camera and the last step of the chain. The three crossings drew
over master 0554–0605 and the hop-3 nodes arrived over master 0568–0617 — one at
a time, which is presentation order and not a property of the data. Frame 0620 is
a key visual frame (`STORYBOARD.md` §29, and `AGENTS.md`'s list of frames that
must remain intentional as stills: 0080, 0620, 0800, 0950, 1120, 1280).

The storyboard is explicit that no cross-repository text appears during that
reveal: *"No mostrar todavía texto explicando cross-repo. Dejar que el
espectador lo vea primero."*

**This scene.** Delivers that text, one word long, and isolates the crossing
that makes the claim true.

**What it prepares.** Scene 05 (`05-blast-radius.md`) converts this structure
into consequence. By the time the blast radius propagates, the viewer must
already accept that repository boundaries are crossable — otherwise
`2 repositories` on the impact card means nothing.

## Timeline

- Storyboard coverage: **`STORYBOARD.md` SCENE 05 — CROSS-REPOSITORY**.
  Note the numbering offset: storyboard scenes 03 and 04 collapse into the
  single component `GraphRevealScene`, so every document number from 03 onward
  is one lower than its storyboard scene number.
- Global frames: **0630–0720**
- Scene-local frames: **0000–0090**
- Time: **10.5 s – 12.0 s**
- Duration: **90 frames / 1.5 s** at 60 fps
- Remotion component: `src/scenes/CrossRepoScene.tsx`
- Boundary source: the inline `<Sequence name="04 Cross Repository" from={630} durationInFrames={90}>`
  literal in `src/Composition.tsx`

Beats (scene-local = master − 630):

| Master      | Local       | Beat                                                                                     |
| ----------- | ----------- | ---------------------------------------------------------------------------------------- |
| `0630`      | `0000`      | Nothing. Graph state, camera and code bed are exactly what `0629` left.                  |
| `0630–0719` | `0000–0089` | The turn. One continuous move, eased out of rest and into rest, 20.6° of rotation.        |
| `0648–0674` | `0018–0044` | The boundary beat: both cluster labels rise to 1.5× their resting luminance.             |
| `0668–0700` | `0038–0070` | The isolation: the local chain and its edges recede to `0.22`; the three crossings hold. |
| `0719`      | `0089`      | The rig settles. The last frame this scene owns is a photograph.                          |

Three windows, all overlapping, and that is deliberate: the scene must read as
one gesture rather than as three cues. The turn runs under everything and is the
only thing that runs for the whole 90 frames.

The camera starts moving on local 0 and the subtraction does not start until 18.
That order is the argument: the frame is already moving before anything is taken
away, so the recession reads as *the camera choosing what to look at* rather than
as elements being switched off.

## Initial state

At master frame 0630 (local 0000) the frame is **visually identical** to master
frame 0629. There is no re-framing, no re-entry, no fade, no scale reset.

Visible:

- The settled cascade. The camera is the rig Scene 03 ends on: eye
  `(7.0, 3.2, 10.0)` looking at `(8.0, 0.0, -2.4)`, held since Scene 03's local
  268, its view direction 15° off `-Z`. All eight nodes are present, each an
  extruded plate carrying a DOM label placed by `projectPoint` from that same
  pose.
- `withRetry()` at the near end of the chain, and unmistakably the origin of
  everything: the largest label, the brightest plate, a plate twice as deep as
  any other, the only material finished enough to return a highlight, and the
  only accent in the frame — an `accentText` `#bfdbfe` label over a hairline
  carrying `accent` `#2563eb` at 32%.
- `payments-api`, hops 0–2: `withRetry()` at `z 0.0`, `Policy.Do()` and `Once()`
  at `z -0.8` in `internal/retry`, `Client.Charge()` and `Client.Refund()` at
  `z -1.9` in `paymentService`.
- `checkout-service`, hop 3 at `z -3.4`: `ReconciliationJob.Run()`,
  `CheckoutService.PlaceOrder()` and `RefundHandler.Handle()` — furthest from the
  camera and smallest on screen.
- All seven edges complete and settled to their resting colour and weight:
  Catmull-Rom tubes at the settled radius `0.022`, `graph.edgeLocal` `#4b5563`
  for the four local edges and `graph.edgeCross` `#94a3b8` for the three
  crossings. This scene inherits every one of them and draws none.
- Floating cluster labels: `payments-api` below the near group,
  `checkout-service` above the far one. Nothing is drawn around either group.
- Background at `background` `#0a0b0d`, with Scene 03's receded, dimmed code
  field still underneath as a texture — the code world never leaves. No UI
  chrome, no editor window, no prompt layer.

Newly appearing at this frame: **nothing**. Nothing in this scene arrives; the
only thing it does is move, and the move starts from rest. Measured against 0629
the two frames differ only by antialiasing noise: PSNR 63.2 dB, which is a 1/255
difference on a small fraction of pixels.

## Final state

At master frame 0720 (local 0090, the boundary frame handed to the next scene):

- The camera has completed its turn and **has not returned**. It settles on 0719,
  the last frame this scene renders, at eye `(11.86, 7.53, 8.69)` looking at
  `(9.5, 1.5, -2.4)` — 30.3° off `-Z`, 20.6° of rotation away from the direction
  it inherited. Velocity is zero at that frame, so the pose handed over is a
  photograph rather than a moving frame caught mid-move.
- This is the one thing about the handoff that changed when the veil was cut.
  Scene 05 does not restate the pose; it samples `getCrossRepoState(90)`, so the
  landing propagates to Scenes 05 and 06 by construction and cannot go stale.
  Both were re-verified against it rather than assumed.
- Nothing dims the frame and no text is on screen. There is no veil in this scene
  at all.
- The crossing is at full presence: the three crossings, the two `paymentService`
  nodes at hop 2 they touch, the three `checkout-service` nodes at hop 3 at the
  other end, and `withRetry()` itself, which is the reason the shot exists.
- Everything else — `Policy.Do()` and `Once()` at hop 1, and every local edge —
  sits at `0.22`. It was seen receding, in plain sight, under a moving camera.
  That is the difference the veil used to hide and no longer needs to: a
  recession that happens while the frame is turning does not read as elements
  being switched off.
- The two cluster labels carry a little more presence than they did at 0629.
  Nothing is drawn around either group, and no geometry has been added.

This is the state `BlastRadiusScene.tsx` inherits at 0720: isolated,
already-understood cross-repository relationships, seen from a new angle, ready
to be pulsed.

## Visual composition

**Layout.** A cascade in depth. Each hop from the changed symbol steps `+x` and
`-z`, so depth is graph distance: hop 0 is the change, hop 1 its direct callers,
hop 2 the public bridge, hop 3 the other repository. Nothing is drawn around
anything, so the distance a crossing spans is a step *in depth* — from the
`paymentService` pair at `z -1.9` to `checkout-service` at `z -3.4`, the last
step of the chain and the only one that leaves the repository. That step is
load-bearing: it is what makes a crossing read as a crossing.

The composition is a chain that runs across the frame, `withRetry()` at its near
end and `checkout-service` at its far one. Every label is inside the 16:9 frame —
Scene 03's layout search rejected any layout where one was not, and the tightest
margin over its 300 frames is 55 px — but the chain spans 16 world units along
`x`, so no square or vertical crop can contain all of it (`STORYBOARD.md` §2,
`AGENTS.md` §38). See `## Current compromises`.

**A repository is a place in depth, not a container.** Per `STORYBOARD.md` §11 a
repository is perceived as a *spatial cluster*: obvious node proximity and a
floating label, explicitly **not** a giant box, panel, frame or wireframe volume.
The cascade satisfies that with position alone — `payments-api` is the near end of
the chain, `checkout-service` the far one, three hops of depth apart — plus one
floating label each. A faint base plane under each group was built, rendered once
in Scene 03 and deleted: correctly exposed it reads as a rectangle with four
corners around each cluster, which is exactly the container a repository must not
`0648–0674`, the only honest instruments are the two labels and the luminance gap
between the near group and the far one — nothing is drawn, and nothing appears.
That beat now runs under a turning camera, which is a louder event than a
luminance change on two small labels — the frankest possible admission of how
weak an instrument it is. It is not asked to carry a visible change, only to
leave the frame in a slightly better state than it found it.

**Hierarchy** at the end of the scene, strongest first:

1. the three crossings;
2. `withRetry()` at the near end of the chain;
3. the hop-2 nodes they touch and the hop-3 nodes at their far end;
4. the two cluster labels;
5. everything else, suppressed.

**Typography.** JetBrains Mono throughout this scene: node labels and cluster
labels, which is all the type there is. The project-wide rule this document
assumes is — text attached to the graph (symbols, repositories, technical
properties) is monospace; narrative statements addressed to the viewer are Geist
sans. This scene has no viewer-addressed line, so it never needs the sans.
Weights 400/500 only. Radius 0. No shadows.

**Label placement and size.** Every label is placed by `projectPoint` from the
camera pose, so the whole frame's typography is re-laid-out on every frame of the
turn. That is the load-bearing consequence of moving the camera at all: label
positions are not authored here, they are derived, and the check that matters is
that no two of them touch at any point in the move. Scene 03's layout search
guarantees it at the inherited pose with a 55 px tightest margin; this scene
holds the view distance constant so that margin is preserved through the turn
rather than re-searched.

**Brand colour.** Accent marks meaning only: the source symbol and the
cross-repository relationships. The selected node carries `accentText` `#bfdbfe`
as its label and `accent` `#2563eb` on its plate hairline at 32%; the crossings
are geometry and lift to `accent` while they are the subject of the shot.
Suppressed structure stays neutral: `graph.edgeLocal` `#4b5563` for local edges,
`textSecondary` `#d4d4d4` for unaccented node labels and `textMuted` `#a3a3a3`
for the cluster labels, all at low opacity; the crossings' own resting colour is
`graph.edgeCross` `#94a3b8`. Total accent coverage stays inside the 10–15% budget
(`AGENTS.md` §26) — easy here, because the scene's whole job is to reduce how
much is lit.

**Depth.** Depth comes from perspective, from the hops' real separation in `Z` —
`0.0`, `-0.8`, `-1.9`, `-3.4` — from the one plate orientation every node shares
a few degrees off the image plane, and from the parallax of the move. Apparent
size is perspective plus the small authored per-hop step in `shellLook`, so the
type ladder is a consequence of distance and nothing is scaled by hand: at Scene
03's settle frame it runs 28.6 / 25.0 / 23.5 / 21.3 / 19.4 / 18.4 / 17.1 /
16.0 px, near to far. Scene 01's radial luminance falloff sits over the geometry
and under the labels, crushing the periphery, so the far group reads dimmer near
the frame edges than its opacity alone would suggest. There is no depth-of-field
pass. No glow, no bloom stack, no neon.

## Motion

**Rhythm.** One continuous 1.5 s camera move, with a recession running inside
it. Nothing enters the world. Nothing bounces. Nothing cuts.

**Camera.** The rig turns, up and to the right. The eye swings from
`(7.0, 3.2, 10.0)` to `(11.86, 7.53, 8.69)` while the target moves from
`(8.0, 0.0, -2.4)` to `(9.5, 1.5, -2.4)`.

Measured on the two poses rather than asserted:

```text
            distance  obliquity  azimuth  elevation  x axis kept  smallest label
local 0      12.845     15.1°     -4.6°     14.4°       99.7%        16.0 px
local 89     12.842     30.3°    +12.0°     28.0°       98.3%        16.0 px
```

20.6° of total rotation of the view direction. `up` is world up on every frame:
no roll, no full revolution, and the horizon never tilts.

**It is an orbit at constant radius, and that is a constraint rather than a
style.** The eye stays 12.842 units from the target against 12.845 at rest —
three thousandths of a unit — because the layout has no room for anything else.
Two hard limits close the search:

- **containment.** No label is ever cut (`STORYBOARD.md` §13). The binding object
  is not a node at all: it is the `checkout-service` cluster label at the top
  right;
- **type size.** No label below §7's `Labels 16-20 px` bracket.
  `RefundHandler.Handle()` sits at exactly **16.0 px** at rest, so the layout is
  tuned hard against that floor and a camera move has nothing to spend on it.

A grid over azimuth, elevation and target offset found **no pose whatsoever**
that cleared both constraints on every frame of the move. That is the real
finding of this scene, and what ships is its resolution: the landing pose holds
the full 16 px floor, because Scenes 05 and 06 live there and key still 0800 has
to survive being downscaled to README width, while frames *in transit* are
allowed down to 15 px — they are seen for a fraction of a second and nobody stops
on one. That distinction is the only relaxation available and it is deliberate.

Two poses were rendered and rejected before this one, both of which read well in
isolation:

- a lateral swing to `eye (11.2, 4.0, 9.2)` pushed
  `CheckoutService.PlaceOrder()` **10 px past the right edge of the frame**.
  Caught on a render, not in review, and the reason the containment check now
  runs over every frame of the move rather than at the endpoints;
- a crane to `eye (5.85, 6.56, 8.7)` kept everything inside the frame with a
  comfortable margin and took `RefundHandler.Handle()` to **14.3 px**. The relief
  for that would be a bigger em on hop 3 — `0.86 → 0.963` — but hop 2 is at
  `0.88`, so it would put the far labels *above* the nearer ones and invert the
  ladder that encodes depth. Rejected on that, not on taste.

The target's `+1.5, +1.5` is what recentres the frame and buys back the azimuth
the first attempt could not afford. It is a recentre and not a change of subject;
a unit or two more and the shot is about something else.

The x axis keeps 98.3% of its length, so the chain's 16 world units do not
compress. That is also the answer to the constraint `03-graph-reveal.md` records,
that no more oblique camera is legible with eight labels: that constraint is
about rotating the *span*, and this move rotates the *eye* around it.

The move eases out of rest and into rest, so both the cut at 0630 and the handoff
at 0720 are continuous in velocity as well as in position. It settles on **local
89**, not 90: 90 is one frame past the end of a 90-frame sequence and is never
rendered, so a curve that only settles there leaves the rig a hundredth of a
world unit out of position on the last frame anybody sees. Invisible on the frame
itself and impossible to hide at the seam — Scene 05 samples the settled value
and draws it from its own first frame, so the whole graph steps by that hundredth
across the handoff, and the pair measured 47.9 dB PSNR where 63-ish means
antialiasing and nothing else. Measured now: 0719/0720 are identical.

30.3° exceeds the 15–20° per-sequence budget `STORYBOARD.md` §13 used to state.
The budget is now 15–31°, raised in the storyboard with the reason recorded
there: it was written when this scene had a word to protect, and 20° is not
enough for a plate to visibly turn.

**Why the camera, and why this move.** The reason is not inherited and has to be
re-earned, because the previous version of this scene deliberately did the
opposite. Three mechanisms were measured on the real geometry when the scene's
job was to *name* the crossing:

- rig translation, eye and target together: **9 px** of parallax differential
  between the near and far ends of a crossing. Composition intact, apparent size
  constant. That shipped;
- eye only, target held: **1–4 px**. A near-pure rotation about a point between
  the two groups moves them almost identically. Worse;
- changing the eye's `z`: **24 px**, the strongest by far, and rejected because it
  changes the apparent size of the crossings at the moment they become the
  subject.

All three measurements are still true. What changed is which one is correct: the
scene no longer has a word to protect, and its job is now the thing the third
mechanism was rejected for doing. What ships takes that mechanism and spends it
as rotation instead of as approach, which buys the same visible change of
viewpoint without the apparent-size cost that got it rejected.

**Boundaries.** `0648–0674` raises the presence of the two cluster labels and
widens the luminance gap between the near group and the far one. This is opacity
and nothing else: no scaling surfaces, no drawing-on outlines, no rings, no base
planes, no new geometry of any kind. There is no boundary object to strengthen —
the boundary *is* the step in depth.

**Isolation.** `0668–0700` removes everything that is not part of the claim:
non-participating nodes and edges fall to `0.22`, the crossings and their
endpoints hold and take accent. It now happens **in plain sight**, which is
exactly what the first implementation of this scene was cut for. The difference is
the camera: a recession that runs while the frame is turning reads as the shot
choosing its subject, where the same recession under a static camera read as
elements being switched off. The veil was one answer to that problem; a moving
camera is a better one, because it does not have to hide anything.

**Holds.** The final frames must be calm enough to read as a still. The rig
settles on 0719 with zero velocity, so nothing on screen is moving at the
handoff.

**Depth of field.** `STORYBOARD.md` §15 permits very subtle DOF in exactly two
places, one of which is the cross-repo reveal — this scene. Scene 03 spends none
of that budget: it ships with no DOF pass at all, and frame 0629 lands sharp, so
the whole allowance is still here. Any DOF used must be barely perceptible, must
not deepen as the isolation runs, and must never soften the source symbol or the
crossings. P1 polish, not a requirement.

## Three.js

**Why 3D is necessary.** The single claim of this scene — a relationship leaves
one repository and enters another — is a claim about topology. Drawn flat, a chain
of boxes is a diagram, and a viewer reads a diagram as an illustration. Real depth
is what pays for it: the four hops sit at four distinct `Z` values, so the near
group and the far one change apparent size at different rates, every plate
foreshortens under a camera already 15° off `-Z`, and the crossings swing under
the smallest camera move. This is precisely the case `AGENTS.md` §19 and
`STORYBOARD.md` §9 reserve Three.js for.

**Topology.** Eight nodes and seven edges from the static demo dataset
(`src/data/graphDemo.ts`), arranged by hop distance from the change:

```text
hop 0   z  0.0   payments-api      withRetry                             (1)
hop 1   z -0.8   payments-api      Policy.Do, Once                       (2)
hop 2   z -1.9   payments-api      Client.Charge, Client.Refund          (2)
hop 3   z -3.4   checkout-service  ReconciliationJob.Run,
                                   CheckoutService.PlaceOrder,
                                   RefundHandler.Handle                  (3)
```

The repository split falls exactly on a hop boundary: hops 0–2 are
`payments-api`, hop 3 is `checkout-service`. Nothing was arranged to make that
true — it is a property of the data, and it is the reason this scene can be about
a hop boundary at all.

Three edges cross that boundary, and all three touch `payments-api` at the same
two nodes:

```text
checkout.placeOrder        → payments.clientCharge
checkout.reconciliationRun → payments.clientCharge
checkout.refundHandle      → payments.clientRefund
```

Edges are stored in the real call direction, `caller → callee`, so in the data a
crossing runs from the consumer back toward the change. The picture draws it the
other way, out from the change and into depth, because what is being animated is
impact leaving `withRetry()`. The blast radius of Scene 05 travels the data's way
again; both inversions belong to the scenes, never to the dataset.

Every other edge stays inside `payments-api`.

**Why the crossing lands where it does.** `withRetry` is unexported, so nothing
outside `package retry` can call it, and Go's `internal/` rule forbids
`checkout-service` from importing `payments-api/internal/...` at all. The relation
therefore cannot cross the boundary in one hop; it needs a public package inside
`payments-api` to cross through. That package is `paymentService`, which holds
`Client.Charge()` and `Client.Refund()` — the two nodes at hop 2. It is the
package the answer text quoted in `## Current compromises` names on screen, and it
is why all three crossings touch `payments-api` at exactly two nodes: the boundary
is crossed in one place because there is only one place to cross it. In the
cascade that argument is visible as position. The boundary cannot fall inside
`payments-api`, so it falls between hop 2 and hop 3, which makes the crossings
necessarily the last step of the chain — the furthest thing from the camera, and
the last step before the change leaves its own repository.

**Camera intent.** Inherit Scene 03's final rig — eye `(7.0, 3.2, 10.0)` looking
at `(8.0, 0.0, -2.4)` — translate the whole rig a small amount on the `(+X, +Y)`
diagonal, hold the eye's `z` at `10.0`, return to the inherited pose before 0720,
keep the whole chain framed as it was. No orbit. No rotation. No spin. No
continuous float. No shake. Both the eye and its target are derived from the
frame, and they move together, so the view direction is a constant for all 90
frames.

**Nodes.** A node is its label; the plate is the surface the label sits on, and
its job is to give that label a position in space rather than on the screen. The
plates are extruded, with a hairline contour on the front face, and they all
share one orientation a few degrees off the image plane, so they foreshorten and
catch the key light together instead of reading as scattered cards. Two
consequences this scene must respect: *kind* is not carried by shape or scale,
because every plate is deliberately the same plate and apparent size means hop
distance; *state* is carried by surface luminance, plate depth, the accent
hairline and opacity — which is exactly how the selected node is already
distinguished, and exactly the channel the isolation beat spends. See
`## Current compromises` for the open point about the graph kind tokens.

**Edges.** Catmull-Rom tubes with real thickness, bowed slightly toward the
camera and to one side, drawn from the node already on screen toward the node
arriving. By 0630 every one of them has settled: radius `0.022`, `edgeLocal` for
the four local edges and `edgeCross` `#94a3b8` for the three crossings. The
crossings settle *heavier* than the local edges rather than lighter — the only
place in the graph where a settling edge gains presence — which is deliberate:
they are the most important edges in the video and must stay visually more
important than any local edge for the whole scene, before this scene lifts them
at all. Active state takes brand colour, higher opacity and a slightly larger
tube radius. No lightning, no sparks, no particles; if propagation is ever shown
along an edge it is a very subtle energy point, and this scene does not need one —
every edge is already drawn when the scene begins.

**Repository presence.** There are no cluster meshes, no base surfaces and no
strokes of any kind. A repository is carried by where it sits in depth, by how
far it is from the change, and by one floating label in `textMuted` `#a3a3a3` at
`0.42` of its schedule value. The `0648–0674` beat drives those two label
opacities and the luminance of the groups themselves, and nothing else. Nothing
in this scene is drawn outside the graph: there is no overlay, no surface and no
full-frame layer of any kind.

**Lighting.** The graph is lit: soft ambient, one key from above and to the
camera's left, and a dim fill from behind so a plate's far edge separates from
the background instead of dissolving into it. Two lights, no shadows — enough for
form, not enough to look like a product render. Lighting is therefore a real
channel in this scene, and it is precisely the channel this scene must not
animate: the isolation beat is opacity, because moving a light restates the whole
frame instead of subtracting from it. No dramatic spotlight, no metallic
reflection, no gaming lighting.

**Deterministic animation.** Every value on screen is a pure function of the frame
(`AGENTS.md` §17, §18, §21; `STORYBOARD.md` §21, §22). Node positions are
precomputed static coordinates in `graphDemo.ts`, and `src/three/graphFrame.ts`
derives the graph offset, the base em, every plate's box, the edge gutter, the
tube radii and the per-hop look ladder from them — one definition, three
consumers: the DOM label, the plate drawn behind it and the clipping of every
edge that arrives at it. No force simulation runs at render time
(`STORYBOARD.md` §19, §20). No `useFrame` mutation, no `Date.now()`, no unseeded
randomness. The graph portion of this scene comes from `getGraphState` in
`src/three/graphState.ts`, which returns the full visual state (camera pose,
per-node presence, per-edge draw and settle progress, cluster label progress) and
throws if a node, edge or repository has no schedule entry, so this scene and
Scene 03 cannot drift apart. See `## Transition in` for how it must be sampled.

## Transition in

There is no transition. That is the point.

Scenes 03 and 04 are separate Remotion `<Sequence>` entries, so the cut at 0630
is a hard component boundary — but it must be **visually invisible**. Camera
position, camera target, node positions, node opacities and edge states at master
0630 must equal their values at master 0629.

There is now **no** difference between the two frames. The scene introduces
nothing on its first frame; the turn starts from rest, so 0630 is 0629 to within
antialiasing noise, and that is verified rather than intended.

Practical consequence for a scene that animates in scene-local frames:
`getGraphState` is parameterised on **Scene 03's** local frame, `0–300`, not on
the master frame, and every ramp inside it clamps at both ends. `CrossRepoScene`
must therefore sample it at `localFrame + 300`, which lands on or past 300 for
the whole scene and returns exactly the settled state — the same values Scene 03
produced at its own local 300. Getting this wrong produces the one failure this
scene cannot survive: a jump at 0630.

The camera is the exception to that inheritance, and it is worth being precise
about why. This scene does not offset Scene 03's curve; it declares its own
`restLook` literals matching Scene 03's final pose and interpolates from them to
its landing pose. Two independent statements of one pose is normally a second
source of truth, and here it is deliberate: the agreement is a *checked fact*
rather than an assumption, verified by the 0629/0630 seam measuring 63 dB. Scene
05, whose inheritance is twenty-three values rather than one pose, does the
opposite and samples this module.

## Transition out

At 0720 `BlastRadiusScene.tsx` takes over. Again a hard sequence boundary with
continuous visuals: the camera and the graph carry straight through, and the
first thing the next scene does is pulse `withRetry()` once.

Two things make that pulse legible. The isolation performed during `0668–0700`
leaves the frame holding nothing but the objects the blast radius is about to
travel through, ranked so the crossing reads first. And the rig is **still** — it
settled on 0719 — so the pulse is the only moving thing in the frame it lands on,
which is what a cause looks like.

The card that scene writes over this frame sits in the top-left, not in the right
column, and the turn is the reason that placement had to be re-measured rather
than inherited: the landing pose changes what occupies the right of the frame at
0720. This scene is therefore the setup for the next one, and the two must be
inspected together whenever either changes (`AGENTS.md` §9, §11).

## Copy

**This scene introduces no strings at all.** It is the only scene in the video
with nothing to say, and that is now its defining property rather than an
omission.

Inherited from Scene 03, unchanged, still on screen:

```text
payments-api
checkout-service
withRetry()
```

Remaining node labels are inherited from `03-graph-reveal.md` and
`src/data/graphDemo.ts`; this scene introduces none and renames none.

What was here, for the record: `Cross-repository.` — one word and a period, in at
local 28, out at 78, over a veil. Removed on direction. `## Purpose` records why,
and `STORYBOARD.md` SCENE 05 keeps the deleted beat so the decision is not
re-litigated from scratch.

## Key frames

Frames to inspect manually (`STORYBOARD.md` §28):

```text
0630 — nothing new; identical to 0629 but for antialiasing noise
0660 — a third through the turn: plates beginning to show their side faces
0690 — past the midpoint: the near chain receding, the crossings holding accent
0719 — final frame, settled: the new angle, three accented crossings, the retry
       interior suppressed to 0.22
```

All four are the turn at different points, which is the honest way to inspect a
scene whose only event is a move. The pair to compare is `0630` and `0719`: they
must be recognisably the same structure from two different viewpoints, and if
they are not distinguishable at a glance the scene has failed at its one job.

Frame **0620** is the neighbouring key visual (the whole chain settled, three
crossings running out of `payments-api` into `checkout-service`, usable for
social) and belongs to `03-graph-reveal.md`. It is listed here because this scene
must not damage it: nothing in `CrossRepoScene` may retroactively change how 0620
is composed.

## Invariants

Preserve unless the creative direction is explicitly changed:

- **The scene is silent.** No caption, no label, no title, no sentence. If a
  future version needs to name the crossing, it is not this scene's job:
  `STORYBOARD.md` §3's `Cruza repositorios` is a narrative step, not a string to
  be rendered.
- **No veil.** The frame is never darkened here. The first veil in the film is
  Scene 05's, under its claim line, and `docs/scenes/README.md` §Visual grammar
  ties a veil to a viewer-addressed sentence — of which this scene has none.
- **No re-framing jump at 0630.** This scene inherits the exact camera state and
  graph layout left by `03-graph-reveal.md` at frame 0629 — the rig at eye
  `(7.0, 3.2, 10.0)` looking at `(8.0, 0.0, -2.4)`, eight settled plates, seven
  settled edges, both cluster labels present. No fade-in, no scale pop, no camera
  reset, no re-entry animation.
- **The camera turns, and it does not come back.** A single eased move from the
  inherited pose to `eye (11.86, 7.53, 8.69) -> target (9.5, 1.5, -2.4)`, settled
  by local 89. `up` is world up on every frame. No roll, no orbit, no full
  revolution, no continuous drift past 0720, and no return to the starting pose —
  a move that returns is a tremor.
- **Apparent size is constant.** The view distance stays within 1% across the
  whole move. A version of this turn that also approaches the graph would spend
  the 55 px tightest label margin Scene 03's layout search left, and labels would
  begin to touch.
- **The meaning survives with no audio and in a small embedded player.** The
  cross-repository fact must be understandable from the image alone. Sound design
  may add a slightly deeper tone for the cross-repository connection
  (`STORYBOARD.md` §18), but sound must never be required to understand the
  scene.
- **Meaning must not depend on colour alone** (`AGENTS.md` §37). Which hop a node
  sits on, the depth step a crossing spans, the luminance ladder and the
  perspective type ladder each carry the claim independently of hue. Scale is not
  available as a channel: it already means hop distance.
- **A repository stays a place in depth.** Contiguous hop distance and one
  floating label. Never a giant box, never a ring, and never a base surface
  bolted on to make it look like one — one was built and deleted for exactly that
  reason.
- **Only the crossing and its endpoints are highlighted at the end.** Source
  symbol, the three crossings, the two `paymentService` nodes at hop 2 they
  touch, the three `checkout-service` nodes at hop 3 at their far end. Nothing
  decorative may join them.
- **Accent means something.** Accent marks the selected symbol and the active
  cross-repository relationships, never ornament.
- **No new structure appears.** This scene explains; it does not reveal. New
  nodes, new edges or a third repository appearing here would steal Scene 03's
  payoff and break Scene 05's counting.
- **Nothing is drawn outside the graph.** No overlay, no full-frame surface, no
  panel, no card, no caption layer. The frame is the code bed, the graph, and
  nothing else — which makes this the only scene in the video whose composition is
  entirely the world.

## Flexible elements

Safe to change without altering the scene's purpose:

- exact magnitude and direction of the turn, provided it starts from the
  inherited pose, holds the view distance within about 1%, settles by local 89,
  and does not return to where it started;
- exact easing, as long as it stays non-elastic and free of overshoot;
- exact suppressed opacity of the receding chain (`0.22` today);
- exact final opacity of the two cluster labels;
- exact node coordinates (owned by `graphDemo.ts`), as long as Scene 03's layout
  search still passes and the hop ordering in depth is preserved;
- whether very subtle depth of field is used at all;
- whether the boundaries beat begins a few frames earlier or later, as long as it
  finishes before the turn settles.

## Technical notes

- Component: `src/scenes/CrossRepoScene.tsx`.
- Global scene boundaries live only as inline `<Sequence>` literals in
  `src/Composition.tsx` (`from={630}`, `durationInFrames={90}`), so Remotion
  Studio can trim them. There is no timing module; do not introduce one and do
  not restate 630/720 inside the scene. The scene animates in scene-local frames.
- That `<Sequence>` carries `premountFor={30}` and `postmountFor={30}`, and so
  does Scene 03's. A Sequence renders its children only inside its range, so at
  0630 Scene 03 unmounted and this scene mounted, destroying and recreating the
  `ThreeCanvas`'s WebGL context — measured by patching
  `HTMLCanvasElement.prototype.getContext` in Studio and stepping
  0629 ↔ 0632 four times: four new `webgl2` contexts, and the whole graph blinks
  for a frame at the one seam this scene's design spends everything to hide. The
  premounted scene mounts thirty frames early at `opacity: 0` and its canvas
  paints, so the context is warm before it is seen. `postmountFor` was added to
  this scene when Scene 05 arrived and 0720 became a boundary that gets scrubbed
  across: going backwards over it remounts this scene, at the same cost and with
  the same blink, and staying mounted thirty frames late is the same fix in the
  other direction. Both are preview-only: Remotion gates them on `!isRendering`,
  and the rendered range 0330–0719 was verified to have no luminance
  discontinuity either way.
- Scene state lives in `src/three/crossRepoState.ts`: `getCrossRepoState`, and
  nothing else — the module exports one function now. The scene component holds
  the code bed's frozen camera and the graph, and nothing else.
- Three.js and rendering pieces involved: `src/scenes/GraphRevealScene.tsx` is
  the reference implementation of this graph — it draws every node as an extruded
  plate (`src/three/GraphNode.tsx`), every edge as a tube
  (`src/three/GraphEdge.tsx`), writes the camera pose imperatively during render
  (`src/three/CameraRig.tsx`), and places every label as DOM text over the
  canvas — on top of `src/three/graphState.ts` (choreography and the camera rig),
  `src/three/graphFrame.ts` (the spatial contract) and
  `src/three/projection.ts` (`lookBasis` and `projectPoint`: world to screen
  under an arbitrary pose). There is no `RepositoryCluster` component — it was
  built and deleted — and no `KivgraphScene`, `RepositoryLabel` or
  `GraphLighting`; do not introduce one to render a frame Scene 03 already
  renders.
- The canvas renders with `NoToneMapping` and sRGB output. R3F's ACES Filmic
  default was rendering a `#171a1f` plate as `#080a0d`, darker than the
  background it sits on, so a canvas mounted here with the defaults would not
  match Scene 03's greys across the cut.
- Data: `src/data/graphDemo.ts`. Static, deterministic positions plus `shellOf`,
  which is the hop index — the word "shell" survives only inside code
  identifiers. Layout, if computed by an algorithm, is precomputed and stored,
  never simulated per frame.
- Tokens: `src/brand/tokens.ts`. Fonts: `src/brand/fonts.ts` (`"Geist"`,
  `"JetBrains Mono"`, loaded deterministically from `public/fonts/*.woff2` — late font
  loading must not shift the label).
- Continuity with Scene 03 is the highest technical risk here; the shared graph
  curve is sampled in Scene 03's local frames and clamps past 300. See
  `## Transition in`.
- Performance: the frame carries eight DOM labels, eight extruded plates, seven
  tubes, two cluster labels, the code world underneath and one radial-gradient
  overlay at 1920×1080 / 60 fps. Keep the transparent surface count low and avoid
  stacked postprocessing (`AGENTS.md` §35, §36).
- A node is a DOM label over its own plate, and every plate and tube already
  rebuilds its geometry each frame, so per-node and per-edge opacity for the
  isolation beat costs nothing new. Each plate and tube owns its material;
  measure before optimising.
- Iterate with Remotion Studio and small range renders over roughly 0610–0730 so
  the 0629/0630 seam can be scrubbed forward and backward repeatedly
  (`AGENTS.md` §40, §41).

## Current compromises

- **The boundary beat is now the quietest thing in a moving frame.** It was
  written when a repository was a drawn shape, it then ran under a veil where
  almost nothing it did could be seen, and it now runs under a turning camera
  which is louder than a luminance change on two small labels. Keeping it is
  defensible — the returned frame has two slightly firmer cluster labels — but it
  has never once been the scene's second beat in any meaningful sense, and it
  remains the beat to spend if a future edit needs the frames.
- **The remote consumers are named now.** `STORYBOARD.md` never gives the
  `checkout-service` nodes labels, and `07-agent-answer.md` only says
  *"checkout-service consumes the symbol through payments-api/paymentService."*
  `graphDemo.ts` settles the rest: `CheckoutService.PlaceOrder()`,
  `ReconciliationJob.Run()` and `RefundHandler.Handle()`, each reaching
  `payments-api` through `Client.Charge()` or `Client.Refund()` in the public
  `paymentService` package. That is the package the sentence names, and the only
  package it could name, because `internal/` is closed to another repository.
  Scenes 03, 04, 05 and 07 use those names; none of them may invent others.
- **Node-kind colour is a narrower open decision than it was.** `tokens.ts` ships
  four graph kind colours (`graph.repository` `#2563eb`, `graph.package`
  `#7c3aed`, `graph.file` `#059669`, `graph.symbol` `#ea580c`), and
  `STORYBOARD.md` §10 refuses five distinct node-type colours, asking instead for
  shape and scale differentiation inside one chromatic family. The shipped design
  declines both halves of that offer: there are plates now, but every plate is
  deliberately the same plate, and scale is not free because apparent size means
  hop distance. What is left is **state is physical** — the selected node is the
  brighter surface, twice as deep, the only one finished enough to return a
  highlight and the only one with an accent hairline — and **kind is legible from
  the label itself and from which hop it sits on**. Must be resolved identically
  in `03-graph-reveal.md` before implementation.
- **Typography split is a project-level open decision.** `AGENTS.md` §27 assigns
  sans to headings/UI/marketing, while the Kivgraph web is mono-dominant (`body`
  is monospace, sans reserved for long prose). This document resolves it as
  graph-attached text in mono, viewer-addressed narrative lines in sans, and the
  rule must be applied identically across every scene document.
- **Sound is absent.** The slightly deeper cross-repository connection tone from
  `STORYBOARD.md` §18 is not specified in detail and is not required.
- **The label's ramp-in is no longer "immediate presence".** The storyboard says
  only "Frame 0630", and the intent recorded here used to be immediate presence
  with a very short fade. The shipped scene delays the word to local 28 and
  fades it over sixteen frames, because the storyboard's stronger rule — *"No
  mostrar todavía texto explicando cross-repo. Dejar que el espectador lo vea
  primero."* — is violated by a sentence that is complete before any of the
  evidence for it. Reconcile `STORYBOARD.md` §SCENE 05 the next time it is
  touched: the frame it names for the label is now the frame the beat begins, not
  the frame the text appears.
- **Crop safety now applies to the near end, not the whole graph.**
  `STORYBOARD.md` §2 and `AGENTS.md` §38 ask that 1:1 / 4:5 / 9:16 crops stay
  possible, and the shipped layout spans 16 world units along `x`, so the chain
  fills the 16:9 frame from side to side and no square or vertical crop can hold
  all of it. Nothing is cut off in 16:9 — Scene 03's layout search keeps every
  label inside the frame, tightest margin 55 px — it is the crops that cannot
  hold the width. This document resolves it as: the near end of the composition,
  `withRetry()` and its direct callers, must survive a crop; the far end need
  not. The redesign does not restate the crop requirement, so this is a reading
  rather than a settled decision. The turn makes it slightly worse at the far
  end and slightly better at the near one, and neither by enough to change the
  reading.
- **The veil left this scene and stayed in the film.** It was recorded here as a
  global gesture in a film that had none, then generalised into
  `STORYBOARD.md` § Frase sobre el cuadro as the rule for every sentence
  addressed to the viewer. The generalisation outlived the scene that motivated
  it: this scene has no veil and no sentence, and the rule now binds Scenes 05
  and 06, which do. That is the right outcome — a rule that survives the deletion
  of its first instance was a rule about the film rather than about one shot — but
  it means the provenance in that section and in `docs/scenes/README.md`
  § Visual grammar names a scene that no longer demonstrates it.
- **Scene 05's impact card sits in the top-left, and this scene never owed it
  space on the right.** The old claim was that this scene's drift opens the right
  of the frame for the card; a render disposed of it. Placed on the right where
  `STORYBOARD.md` SCENE 06 asks for it, the card covered
  `ReconciliationJob.Run()` and the crossing arriving at
  `CheckoutService.PlaceOrder()` — the objects the numbers printed on it are the
  evidence for, and an invariant of `05-blast-radius.md`'s key frame 0800.
  Measured on that render, the only free rectangle big enough for the card and
  its claim line is the top-left, so that is where it ships. The turn changes
  what the right of the frame holds at 0720, so that measurement was **re-taken
  against the new landing pose** rather than carried over.
- **Frame 0620 is settled, but it is not the frame that ships.** The last node
  settles at master 0617, so 0620 works as a still. `03-graph-reveal.md` records
  0629 as the frame it actually ships as the key visual, while `STORYBOARD.md`
  §28–§29 still list 0620; the two should be reconciled the next time the
  storyboard is touched. This scene must not retime Scene 03 either way; it is
  recorded here because the two frames are inspected together.

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
- Scene 02 ("Not Alone") was deleted, so this document was renumbered from 05 to
  04 and every master frame in it moved −120. Storyboard coverage is now
  SCENE 05 — CROSS-REPOSITORY. Beats, durations and scene-local frames are
  unchanged.
- The initial-state line now says "no prompt layer" instead of "no terminal":
  the video has no terminal window anywhere.
```

```text
2026-08-23
- Scene 01 was shortened from 210 to 120 frames, so every master frame in this
  document moved −90. The master is now 1410 frames (23.5 s). Beats, durations
  and scene-local frames are unchanged.
```

```text
2026-08-23
- Topology corrected against the implemented fixture (`src/data/graphDemo.ts`):
  three cross-repository edges rather than one, all landing on `Client.Charge()`
  and `Client.Refund()` in the public `paymentService` package. Cluster
  membership (5 payments-api / 3 checkout-service) is recorded here now.
- The end-of-scene isolation lights the crossing and its endpoints instead of
  "three objects"; `withRetry()` is not itself an endpoint of a crossing edge.
- The `paymentService` sentence is grounded: `internal/` is closed to another
  repository, so that package is the only legal door. Frames, beats, motion and
  every visible string are unchanged.
```

```text
2026-08-23
- Corrected for the shipped Scene 03 redesign. The graph is concentric shells
  around `withRetry()`, not two lateral clusters, so the inherited frame,
  initial and final state, layout, hierarchy, topology, invariants and flexible
  elements now speak of an inner disc (shells 0-2, `payments-api`), an outer
  ring (shell 3, `checkout-service`) and three crossings that leave shell 2
  outward in three directions. Inherited camera is `(0.8316, -0.8846, 10.6)`.
- The camera move is re-argued rather than inherited: a small lateral drift on
  the `(+X, +Y)` diagonal, `Z` held at `10.6`, out of rest and back to rest.
  That axis is roughly perpendicular to Scene 03's arrival vector, which is the
  axis that shears all three crossings most evenly, and it opens the right of
  the frame for Scene 05's card. More dolly was rejected: it would shrink the
  crossings and pull the outer ring back inside the shot.
- Grounded against the implementation: node plates and cluster base surfaces do
  not exist, `getGraphState` takes Scene 03's local frame and clamps past 300,
  and the renderer component list was replaced with the files that ship.
- Frames, beats, durations, scene boundaries and every visible string are
  unchanged.
```

```text
2026-08-23
- Corrected for the shipped Scene 03 redesign a second time. The concentric
  shells are gone: the layout is a cascade in depth, one step +x and -z per hop,
  so the inherited frame, initial and final state, layout, hierarchy, topology,
  invariants and flexible elements now speak of hops at z 0.0, -0.8, -1.9 and
  -3.4 instead of an inner disc, an outer ring, radii or screen radii. Nothing
  is drawn around a repository: a base plane was built, rendered once and
  deleted, because correctly exposed it reads as a box with four corners.
- The inherited camera is the lookAt rig Scene 03 ends on, eye (7.0, 3.2, 10.0)
  looking at (8.0, 0.0, -2.4), 15 degrees off -Z. The old figure
  (0.8316, -0.8846, 10.6) was the graph group's offset, not a camera, and the
  claim that the camera looks straight down -Z because `projection.ts` requires
  it was false: `projectPoint` derives its basis from an arbitrary pose. The
  drift is re-argued as a translation of the whole rig, eye and target together,
  ending back on the inherited pose so 0720 hands scene 05 the frame it expects.
- The 0650-0690 boundary beat is recorded as weakened rather than quietly
  respecified. There is no boundary object left to strengthen, so it can only
  raise the two cluster labels and the luminance gap between the groups; if that
  does not read on a render, the beat goes, not the design.
- Grounded against the implementation: nodes are extruded plates with a hairline
  contour, edges are tubes that settle to 0.022 with the crossings settling
  heavier than the local edges, lighting is real and must not be animated,
  cluster labels sit at 0.42, and `graphFrame.ts` has no concentricity guard to
  cite. Screen radii, ring strokes, per-shell blur, the `edgeContainment` spend,
  the "blast radius wider than the frame" claim and the shear numbers that
  depended on the old camera were deleted rather than restated.
- Frames, beats, durations, scene boundaries and every visible string are
  unchanged.
```

```text
2026-08-24
- Replaced the pinned caption with a veil beat: the whole frame darkens to 0.86
  over local 14-40, `Cross-repository.` is read centred at 44 px over local
  28-78, and the veil lifts by local 88. Reason: the scene had no visible event.
  Subtraction in plain sight left the frame ninety-five per cent unchanged from
  before the cut, and the caption, pinned low at (1380, 940), was the brightest
  largest type in a frame whose subject is the structure - on the near side of
  the boundary it names, and close enough to one crossing to read as that edge's
  label.
- Retimed the two original beats under the veil: boundary 0020-0060 -> 0018-0044,
  isolation 0050-0090 -> 0038-0070. Both now finish before the lift, so the graph
  is never watched rearranging itself and the frame that returns is already the
  isolated claim.
- Both ends of the scene are at zero veil and zero text. 0630 still matches 0629
  (PSNR 63.2 dB, antialiasing only) and 0719 hands scene 05 an undimmed frame.
- Key frames changed: 0690 dropped, 0680 and 0705 added. 0680 is the veil at
  full; 0705 is the lift with the isolated claim returning.
- Added `premountFor` to this scene's sequence and `premountFor`/`postmountFor`
  to scene 03's, fixing a whole-graph blink at 0630 in the preview: the sequence
  boundary was destroying and recreating the WebGL context. Preview-only; no
  rendered frame changes.
```

```text
2026-08-24
- The camera drift's return-to-rest now lands on local 89, the last frame this
  scene renders, instead of 90, which never renders. Landing on 90 left the rig
  0.022 out of rest on 0719 - a hundredth of a world unit - and scene 05
  inherits that pose, so the handoff measured 47.9 dB PSNR instead of the 63-ish
  that means antialiasing only. 0719 and 0720 are identical now.
- Added `postmountFor={30}` to this scene's sequence. Scene 05 exists, so 0720 is
  a seam that gets scrubbed across, and scrubbing back over it remounted this
  scene and re-created the WebGL context. Preview-only; no rendered frame
  changes.
- Scene 05's impact card ships in the top-left, not the right column, so the
  drift is no longer expected to open the right of the frame for it.
```

```text
2026-08-25
- The word and the veil are gone, on direction: `Cross-repository.` read as a
  subtitle burnt over a shot rather than as part of the film. With no sentence to
  darken a frame for, the veil went with it - `veilOpacity` and `captionOpacity`
  are deleted from `crossRepoState.ts`, and the scene introduces no strings at
  all.
- The scene's purpose changed rather than shrank. It exists now to make the
  graph's depth visible as depth: the rig turns on an orbit of constant radius
  from `eye (7.0, 3.2, 10.0) -> target (8.0, 0.0, -2.4)` to
  `eye (11.86, 7.53, 8.69) -> target (9.5, 1.5, -2.4)` - 20.6 degrees of view
  rotation, obliquity 15.1 -> 30.3 degrees. Every plate is seen at a new angle
  and the near end of the cascade crosses the frame against the far group.
- Two earlier landings were rendered and rejected: a lateral swing that pushed
  `CheckoutService.PlaceOrder()` 10 px off the right edge, and a crane that took
  `RefundHandler.Handle()` to 14.3 px, under the 16 px `Labels` floor. A grid over
  azimuth, elevation and target offset found no pose clearing both constraints on
  every frame; the shipped answer holds 16 px at the landing, where Scenes 05 and
  06 live and key still 0800 sits, and allows 15 px in transit.
- The move does not return. The old drift left and came back, which is a tremor
  rather than a gesture; the ramp `[0, 45, 89]` becomes `[0, 89]` and the rig
  settles at the landing pose with zero velocity. Scenes 05 and 06 inherit it
  through `getCrossRepoState(90)` and were re-verified against it.
- Bought with angle, not distance: view distance holds at 12.85 -> 12.95 units
  (0.8%), so no label changes apparent size and Scene 03's layout search, with
  its 55 px tightest margin, stays valid. The x axis keeps 98.4% of its length.
- `STORYBOARD.md` §13's angular budget was raised from 15-20 to 15-25 degrees for
  this move, with the reason recorded there. It was written when this scene had a
  word to protect.
- The isolation now runs in plain sight, which is what the first version of this
  scene was cut for. It works this time because the frame is turning while it
  happens: a recession under a moving camera reads as the shot choosing its
  subject rather than as elements being switched off.
- Key frames changed: 0680 and 0705 dropped with the veil; 0660 and 0690 added.
  All four are now the turn at different points, and 0630 against 0719 is the
  pair that proves the scene.
```
