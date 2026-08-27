# Scene 05 — Semantic Resolution

## Purpose

This scene proves the product claim.

Every scene before this one showed structure and counted it. Nothing has told the
viewer that the count is about meaning rather than about spelling, and nothing
should: this scene supplies the evidence by putting the two approaches side by
side and letting the viewer see the difference without being told. Searching a
name returns whatever happens to be spelled that way; resolving a symbol returns
one thing and its real relationships.

It is the narrative step:

```text
Demuestra por qué un nombre ≠ un símbolo
```

from `STORYBOARD.md` §3. It makes that argument entirely with the comparison; the
sentence `A name is not a symbol.` that used to sit across the middle of the frame
(`STORYBOARD.md` §4) was cut — see `## Modification history`.

This is also the scene that makes everything before it credible. Without it, the
blast radius from Scene 04 could plausibly be a fancy text search. With it, the
`7 affected symbols` become a claim about meaning rather than about spelling —
which is the entire reason a coding agent would want Kivgraph.

## Viewer takeaway

> Other things share that name. Only one of them is the symbol. A tool that
> cannot tell the difference cannot tell you what breaks.

## Narrative context

**Immediately before.** Scene 04 (`04-blast-radius.md`, frames 0990–1130)
propagated a change through the graph and counted it on a card
(`7 affected symbols`, `3 dependency paths`, `2 repositories`). The graph is
accent-marked, at rest and at full presence, and the card is the only flat
surface in the frame.

**This scene.** Stops being a graph for a moment and becomes a comparison. The 3D
representation is retired here — deliberately, and by flattening rather than by
cutting away — because the argument being made is not spatial. It is a difference
in count.

**What it prepares.** Scene 06 (`06-agent-answer.md`, frames 1330–1510) returns
to the agent prompt, where the agent states the answer in prose. That return is a
match cut on a symbol that does not move across it: this scene ends with
`withRetry()` alone in the right column, settled and still, and Scene 06 opens on
it in that same place at that same apparent size. Carrying it back to the prompt's
token — closing the loop the 0630 cut opened — is Scene 06's move, made in its own
hundred and eighty frames. This scene owns the contraction that leaves the
symbol alone and must have it fully settled at 1329.

## Timeline

- Storyboard coverage: **`STORYBOARD.md` SCENE 07 — NAME ≠ SYMBOL**.
  Note the numbering offset: storyboard scenes 03 and 04 collapse into the single
  component `GraphRevealScene`, and storyboard SCENE 05 — CROSS-REPOSITORY was
  cut, so every document number from `04-blast-radius.md` onward is **two** lower
  than its storyboard scene number. `docs/scenes/README.md` § Scene numbering
  holds the whole mapping.
- Global frames: **1130–1330**
- Scene-local frames: **0300–0500**
- Time: **13.83 s – 17.17 s**
- Duration: **200 frames / 3.33 s** at 60 fps
- Remotion component: `src/scenes/SemanticScene.tsx`
- Boundary source: the inline `<Sequence name="05 Semantic Resolution" from={850} durationInFrames={200}>`
  literal in `src/Composition.tsx`

Beats (scene-local = master − 850):

| Master      | Local       | Beat                                                                                             |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------ |
| `1130–1178` | `0000–0048` | The rig straightens, depth collapses, the graph flattens into the right half, split view forms. The divider draws over local 14–52; the impact card fades out over local 0–36. |
| `1164–1220` | `0034–0090` | Left side builds: label `Name matching` (local 34–54), the two `withRetry()` entries under two languages (42–62 and 54–74), both highlighted, then the counter (70–90). |
| `1194–1228` | `0064–0098` | Right side resolves: label `Semantic resolution` (local 64–84), the symbol and the two relationships that reach it, then the counter (78–98). |
| `1228`      | `0098`      | Both counters settled: `2 matches` left, `1 symbol` and `2 real relationships` right. The comparison is complete, and nothing leaves it for sixty frames. |
| `1224–1288` | `0094–0158` | The stand: 65 frames byte-identical, both halves at full presence. `1224` is the key visual frame and is the first frame of this run. |
| `1288–1316` | `0158–0186` | One exit window, twenty-eight frames: the two callers and their tubes, the left column, the divider, `Semantic resolution` and both counters leave together. |
| `1436–1449` | `0306–0319` | `withRetry()` alone, pixel-identical through to 1329 for the match cut. |

Every build window above is **twenty frames wide and spaced twelve apart**. They
were eighteen and ten, which put the label, the two rows and the counter of the
left column inside 48 frames: a comparison whose whole subject is *counting*
cannot deliver its terms faster than they can be counted. The measured cost of the
old spacing is in `## Motion` → **The build**.

The internal beat frames between 1130 and 1228 are this document's proposal; the
storyboard fixes the transition, the build completing before the stand, the
sixty-frame stand, the single exit window and the settle to the cut. Its centred
copy at what is now 1224 was cut, so the key visual frame is the comparison itself
rather than a sentence over it. See `## Flexible elements` and
`## Current compromises`.

## Initial state

At master frame 1130 (local 0300) the frame is **visually identical** to master
frame 1129: the 3D graph as Scene 04 left it, at rest and accent-marked, at full
presence, with the impact card in the **top-left**.

There is no veil to inherit and none to raise. Scene 04 used to hand one over at
`0.72`, raised under its claim line `Exact symbols. Not name matches.`, and this
scene used to spend it across the flatten and then raise a second at `0.58` for
`A name is not a symbol.` Both sentences and both veils have been cut. What the
frame gains is what the comparison needed anyway: both columns are lit identically
for their whole life, so the asymmetry between them reads as data rather than as
emphasis, and nothing has to be un-dimmed before it can be counted.

`STORYBOARD.md` § Frase sobre el cuadro survives as a project rule — a sentence
addressed to the viewer is read on a darkened frame, the veil never reaching black,
returning to zero inside the scene that raised it unless the next scene's document
says it inherits one — and scenes 06 to 09 may still need it. It currently governs
nothing implemented, because there is no viewer-addressed sentence anywhere in the
graph passage. `veilOpacity` and `copyOpacity` are both gone from
`src/three/semanticState.ts`; what remains of the inherited block is `reportFade`,
which takes the card out over local 0–36.

Nothing about the split view exists yet. The scene begins as a graph and becomes a
comparison.

## Final state

At master frame 1330 (local 0500, the frame after this scene's last):

By 1329 the frame holds **one symbol and the code bed underneath it**, and
nothing else:

- `withRetry()` settled and still, at the apparent size the right column drew it
  at — 135 master pixels per world unit, which puts its glyph run at 216 px
  against the prompt token's 213.8 — and at the position `AgentAnswerScene.tsx`
  opens on at 1330;
- the code bed, dim, exactly as scene 04 left it. It has been under every frame
  since 0300 and it carries on into scene 06, which is what makes the cut a
  change of context rather than a change of world;
- the two callers and their tubes gone;
- the left column, the divider, `Semantic resolution` and both counters gone.

That last point reverses what this document used to require. It asked for the
left side to stay faintly visible so "the two-versus-one comparison still reads
as a comparison" at 1329. That was written when the scene ended *on* the
comparison. It ends by handing a shape to a match cut, and holding four pieces
of chrome to the last frame made the cut remove four things and add a prompt in
one frame - which reads as a scene change, not as a match. The comparison has
been made and read by local 158; what the next frame needs is the symbol, alone.
Every exit runs on one window, local 158-186, and the comparison stands complete
and untouched for the sixty frames before it.

Nothing is mid-animation at 1329: the frame is pixel-identical from 1316, fourteen
frames before the cut. A match cut requires the outgoing shape to be at rest at
the cut.

## Visual composition

**Layout.** A 50/50 vertical split of the 1920×1080 frame, divided by a single 1px
hairline in `borderStrong` `#413a42`. Radius 0. No shadows. Both halves sit on
`background` `#0a0b0d`; depth comes from surface steps, not from panels floating
over each other.

A horizontal band across the middle-lower area of the frame used to be **reserved
from the start** for `A name is not a symbol.`, so that the copy could arrive
without anything moving aside. The sentence was cut and the reservation goes with
it: both columns now compose against the full height they occupy. The rule the
reservation served still holds — layout must never reflow on a key frame — and it
is now satisfied by there being nothing left to arrive.

**Left side — `Name matching`.** Two entries, each two lines: the language, the
identifier, and beneath it the real path it was declared in. Every entry carries
the same symbol name and a different language:

- the language (`TypeScript`, `Go`) and the declaring path, both in JetBrains Mono,
  `textFaint` `#737373`, small;
- the entry `withRetry()` in JetBrains Mono, `textSecondary` `#d4d4d4`, sitting on a
  flat highlight block.

The highlight is **`selection` `#1e3a8a`**, not the brand accent. This is
deliberate: the left side is what a find-all-matches result looks like in an
editor, and the brand accent in this video means *semantically true*. Painting
false positives in brand accent would say the opposite of what the scene
argues. Using the editor-selection token instead makes the left side read as
"highlighted by a text search" — which is exactly its meaning.

Below the list, small, JetBrains Mono, `textMuted` `#a3a3a3`:

```text
2 matches
```

**Right side — `Semantic resolution`.** One node, `withRetry()`, and the two
relationships that reach it — `Policy.Do()` and `Once()` — carried over from the
flattened graph and still wearing the accent state it earned in Scenes 03–05.

A node is not bare type on the field. It is a DOM label over an extruded rounded
plate with a hairline contour around the plate's own front face
(`src/three/GraphNode.tsx`), and the accent state is `accentText` `#bfdbfe` on the
label, the plate's face lifted one surface step, and its contour carried toward
`accent` `#2563eb` at low alpha. Accent is never a solid field behind a label:
at full strength a plate with an accent border stops being a symbol under
discussion and becomes a button.

The plate is what the flatten has to decide about. Everything it was given
geometry for — foreshortening, its side face appearing, the key light crossing it
unevenly — is visible only while the camera can turn against it, and after the
flatten the camera cannot. A plate that kept its full thickness head-on would
claim a depth the frame no longer has and would read as a grey rectangle under a
label. The answer taken is that the extrusion goes with the depth: `GraphWorld`
thins each plate to 18% of its thickness across the flatten and keeps the
contour, so what survives into the column is a label inside a hairline — the same
kind of object the left column's rows are, which is what lets the two halves be
compared at all.

The two relationships are tubes with real width, not lines
(`src/three/GraphEdge.tsx`), and they arrive at the partial settle Scene 05 left
them at: `0.34` of the way from accent back toward `graph.edgeLocal`, radius
about `0.0246` between the resolving `0.026` and the settled `0.022`. They read
as marked structure rather than as edges drawing again. There is nothing else in
the column. The emptiness is the argument.

Below it, small, JetBrains Mono, `textMuted` `#a3a3a3`:

```text
1 symbol
2 real relationships
```

**Side labels.** `Name matching` and `Semantic resolution` in JetBrains Mono at UI
scale, `textMuted` `#a3a3a3`, set identically on both sides. They are technical
labels naming two mechanisms, not marketing headings, so they take the same
monospace treatment as the rest of the technical text — and setting them
identically is what makes the asymmetry below them read as data rather than as
design.

**No centre copy.** `A name is not a symbol.` was set here in Geist sans at Hero
scale, centred horizontally across the whole frame because it belonged to neither
column. It was cut: it did not read as a result of the comparison under it and did
not explain itself, and the same objection retired `Exact symbols. Not name
matches.` in Scene 04. Every string left in this frame is a symbol name, a
declaring path, a mechanism label or a counted value, so the project rule that
viewer-addressed narrative is sans while graph-attached text is mono
(`STORYBOARD.md` §7) governs nothing in this scene.

**Colour budget.** The frame is overwhelmingly neutral. Accent appears only on the
right side's single symbol and the two relationships that reach it; `selection`
carries the left side's highlight. Well inside the 85–90% / 10–15% split
(`AGENTS.md` §26).

**Hierarchy** at 1224, strongest first:

1. the right side's single resolved symbol;
2. the left side's two matches, at full presence — nothing dims in this scene;
3. the counters;
4. the side labels and the divider.

## Motion

**Rhythm.** Flatten, build, compare, stand, and leave one symbol. The scene is
3.33 s long — the longest of this trio — because the comparison needs time to be
counted, not just seen: the two columns stand complete for sixty frames, a full
second, before anything leaves. There is no dim between the compare and the
stand any more; see **The subtraction that was removed** below.

**The flatten.** Continuous, not a cut, and three things move as one gesture: the
rig straightens, the four hop planes collapse onto the anchor's, and the
surviving subgraph is carried into the right half of the frame while the divider
and the left column establish themselves. The rig arrives 15° off `-Z` and leaves
pointing exactly down it. The carry into the right half is done by aiming the rig
beside the cluster rather than by translating the graph, because a look-at camera
always projects its target to the centre of the frame, so an off-centre cluster
is a property of where the camera is pointed. Eased with
`Easing.bezier(0.22, 1, 0.36, 1)` across `0890–0938`. The impact card fades out
during this move — `reportFade` over local 0–36 — and it does not slide or wipe.
There is nothing else to clear.

**The build.** Every window in the build is twenty frames wide and they are spaced
twelve apart: left label 34–54, the two rows 42–62 and 54–74, the left counter
70–90; right label 64–84, right counter 78–98. They were eighteen and ten, which
delivered the left column's label, both rows and its counter inside 48 frames.

That is the same measurement that grew scene 04 and scene 06, applied to a build
rather than to a hold. A comparison whose whole subject is *counting* cannot
deliver its terms faster than they can be counted, and eighteen-frame windows ten
frames apart mean a row is still arriving while the next one starts and the
counter under them lands before either has been held. Widening the windows and
spreading them does not slow the scene down as an effect; it puts each term on
screen alone long enough to be taken in before the term it is being compared with
arrives.

The build finishing at local 98 rather than 85 is what the extra twenty frames of
this scene paid for. The stand behind it is unchanged at sixty frames, deliberately:
it was already the right length, and the growth went to the terms rather than to
the pause after them.

**The left build.** The two entries arrive in a rapid, near-simultaneous burst,
like a find-all-matches list filling. This is a **deliberate contrast** with Scene
04's strictly ordered causal propagation: name matching dumps results in no
meaningful order, semantic resolution derives them in a causal one. The
highlighting of both is simultaneous — the point is that a name search cannot
distinguish between them, so nothing about their appearance may suggest ranking.

**The right resolve.** Slower and singular. One node settles, then the two
relationships that reach it. Where the left side arrives all at once, the right
side arrives deliberately.

**The subtraction that was removed.** Local `84–112` used to take the left side's
opacity down to `0.18` while the right side held, on the principle that the scene
makes its point by removing rather than by adding. It is gone, and it was two
mistakes stacked.

It was written so the left side would recede under the centred sentence. That
sentence was cut, so the dim outlived its reason — and then acquired a new one
after the fact: that the still at 1224 needed the asymmetry to carry it. It does
not. The asymmetry is `2 matches` against `1 symbol` and `2 real relationships`,
which is content, and the right side is already dominant through its plates and
its accent.

The second mistake was mechanical and it is the one that showed on screen. It
broke the single exit window. Leaving from `0.18` while the right side left from
`1` meant the right visibly vanished and the left, already almost invisible,
appeared to go separately — which is exactly the "not together" the single window
existed to fix. **Two things cannot read as leaving together if they start from
different opacities.** Measured across the exit, peak luminance as a percentage
of frame 1288: left `87 / 53 / 18 / 8`, the right column's label
`88 / 54 / 20 / 8`.

What the removal also buys is the thing the stand is for: at `0.18` the left
column was not comfortably readable, so the sixty frames of reading time were
being spent on a column the viewer had to squint at.

**The stand.** The comparison is complete at 1228 and nothing leaves it until
1288 — sixty frames, a full second, which is the reading time two columns need and
the counters' whole dwell. With no dim inside it the frame is byte-identical for 65
frames, master `0984–1048`, and both halves are at full presence for all of them.
The measured run starts four frames before the nominal one because the right
counter's ramp is eased front-loaded, so its last four frames move less than one
level of eight-bit grey; `1224` is the measured start, which is why it is the key
frame rather than `1228`.

**The contraction.** Everything leaves on one window, local 158–186 (master
`1048–1076`): the two callers and their tubes, and with them the left column, the
divider, `Semantic resolution` and both counters. `withRetry()` is left alone. It
is a subtraction, not a move: the node holds its position, its apparent size and
its accent, and the camera does not travel for it. That is what a match cut needs
— the outgoing shape has to be in the same place on both sides of the cut, so the
shape that survives is the one that never moved. The window ends fourteen frames
before the cut, so the frame is pixel-identical from 1316 to 1329 and the shape is
at rest when the cut lands. Carrying the symbol back to the prompt's token belongs
to Scene 06, which has a hundred and eighty frames for it; doing it here would mean
two moves at once inside twenty-eight frames, one of them a snap.

**No elasticity anywhere.** No bounce, no overshoot, no playful easing
(`STORYBOARD.md` §8).

## Three.js

Three.js is used, and this scene is where it retires.

**Why 3D is involved at all.** The transition out of 3D must come from the content
(`STORYBOARD.md` §27, *Graph → Semantic comparison*: camera rotates to front →
graph flattens → split view). All three steps are real work here. An earlier
version of this document claimed the first was already spent because the camera
had looked straight down `-Z` since 0630; it never did. The camera is a rig — an
eye and a point it looks at — and Scene 03 steps it off the axis at its local 30
and leaves it, from its local 348 onward, at eye `(7.0, 3.2, 10.0)` looking at
`(8.0, 0.0, -2.4)`: roughly 15° off `-Z`. Scene 04 never moves it, and neither did
the cross-repository scene between them while it existed. That scene used to
export the pose as `restLook` from `src/three/crossRepoState.ts`; both are gone,
and this scene now reads the pose off the state it inherits — `inherited.look`,
from `getBlastState(140)` — instead of importing a named constant. It still reads
what it inherits rather than restating it. Straightening the rig to frontal is
therefore part of the flatten, not a step already taken.

That has a cost this document previously assumed away. The 15–20° angular budget
(`STORYBOARD.md` §13, `AGENTS.md` §22) is not unspent. Scene 03's rise spends
about 15° of it, and that expenditure is what gives the plates their
foreshortening and the shells their differential parallax; this scene spends the
same 15° again giving it back. Two moves against one budget, and it stays honest
only because they are the same angle in opposite directions and neither orbits,
rolls nor floats — `up` is world up on every frame of both.

A cut from a 3D graph to a 2D comparison would discard the continuity the video
has built since frame 0630; flattening the actual graph proves that the
right-hand column *is* the same structure, re-presented. That continuity is what
stops the right side from looking like a second, unrelated diagram.

**Approach.** Keep the R3F canvas alive across the flatten instead of swapping
representations mid-scene:

- the rig straightens from the inherited pose to a pose whose view direction is exactly
  `-Z`, and lands the resolved cluster in the right half by aiming beside it;
- depth interpolates onto a single plane. `flatten` on `GraphVisualState` runs
  `0 → 1` and multiplies every node's `z` toward zero, so the four hop planes
  converge onto the anchor's. Plates, tubes and DOM labels all reach the screen
  through the one `world()` expression in `src/components/GraphWorld.tsx`, so they
  cannot come out of the collapse disagreeing about where a node is;
- the plates thin with the depth, to 18% of their thickness at full flatten, and
  keep their contour: the extrusion is only ever seen from an angle the frame is
  about to lose, and a thickness nothing can reveal is a claim rather than a
  surface;
- Scene 03 gives every label the same world em and lets perspective alone make the
  size ladder, so collapsing depth collapses that ladder with it. The surviving
  labels are therefore sized deliberately once they are coplanar — 152 master
  pixels per world unit, which puts the anchor's label at the top of the Body
  scale and its two callers just under it, with the camera distance derived from
  that figure through `pxPerUnit` rather than typed in;
- what retires with the depth is the depth itself and the two floating cluster
  labels. There is no ring, no cluster plate and no boundary object of any kind to
  retire: a base plane was built, shipped for one render and deleted for reading
  as a container. A repository here is a place in depth, so once the frame is flat
  there is no depth for the names to name, and they go with it;
- everything outside the resolved symbol's own relationships fades out during the
  flatten. What survives is derived — the edges whose callee is
  `selectedSymbolId` — and never listed by hand;
- the left column, both counters and the divider are DOM, composited over the
  canvas.

Once flat and frontal, the canvas is a 2D rendering of the same data, and no
further 3D behaviour is used.

**What flat costs, and why the whole graph cannot come with it.** Head-on, none of
the three things that made a plate an object can be seen, and a tube loses
something too: its bow toward the camera stops being a pass in front of the gap
between two plates and becomes a curve in the picture plane. The tubes stay
regardless, because a tube has width and a `line` primitive has one pixel at
every distance — `linewidth` is ignored by every WebGL platform that matters — and
a one-pixel edge beside 40 px type is not a relationship, it is a scratch. What
does not stay is the rest of the cascade: sixteen world units of graph inside the
940 px the right half has to offer puts every label at about 11 px, under half
the Body floor of `STORYBOARD.md` §7. The resolved symbol and its two callers
span five units and read at 35–45 px.

**Alternative, if the flatten proves visually insufficient.** Cross-fade the
flattened canvas into an equivalent DOM rendering at a frame where both are
visually identical. This is acceptable only if the seam is genuinely invisible;
`AGENTS.md` §23 forbids hiding poor continuity behind an effect. See
`## Current compromises` for why the R3F flatten is being tried first, and record
the switch there if it is taken.

**Lighting and materials.** Unchanged and very soft. Flattening must not be
accompanied by a lighting change, which would read as a different scene rather
than a different viewpoint. Nothing in the collapse touches a light: a plate
loses its thickness, not its material.

**Deterministic animation.** The rig, the depth collapse, per-node opacity, the
per-edge gains, the card's fade and the final contraction are all
`state = f(frame)` (`AGENTS.md` §17, §18, §21; `STORYBOARD.md` §21, §22). No
`useFrame` mutation, no real-time clocks, no unseeded randomness. There are no
veil or copy channels left to be deterministic about: `veilOpacity` and
`copyOpacity` were deleted with the sentence. The graph's lifetime is not one
function, and this scene should not try to make it one: each scene owns a state
module over its own scene-local frames. Scene 04 samples `getGraphState(380)`
rather than restating Scene 03's settled numbers, because a whole graph state is
twenty-odd values and copying them would be a second source of truth that goes
stale the first time the scene before it is retuned. This scene follows the same
pattern: `getSemanticState` samples `getBlastState(140)`. Extending
`getGraphState` with an offset, which an earlier version of this document
proposed, would fight that pattern rather than follow it.

## Transition in

Hard sequence boundary at 1130, and it is **pixel-identical**: at 1130 the frame
equals 1129 — the accent-marked graph at rest at full presence, with the impact
card top-left and nothing else. Getting there mattered: the card and the claim
line under it used to be drawn by this scene and by Scene 04 from two different
places, and the 1129/1130 seam measured 22 dB. Both scenes now draw
`src/components/ImpactReport.tsx`, which since the claim line was cut is the card
alone.

The flatten then begins. Its preconditions, owed by Scene 04:

- the graph must be **at rest** at 1130, otherwise the flatten reads as a glitch
  rather than as a change of representation;
- the accent state must carry over unchanged, so the right column is recognisably
  the same symbol;
- the card must clear during the flatten. It is the only thing to clear: Scene 04
  ends with no claim line and no veil, and this scene raises neither.

The scene animates in scene-local frames, offsetting to absolute frames only where
it samples the graph curve shared with Scenes 03 and 04.

## Transition out

At 1330 `AgentAnswerScene.tsx` takes over with a **match cut** into the agent
prompt (`STORYBOARD.md` §27, *Graph → Agent*: graph contracts into selected
symbol → match cut into prompt text).

The contract with `06-agent-answer.md`:

- this scene owns the contraction, which is everything leaving on one window over
  local 158–186, and completes it at **1316**;
- from 1316 to 1329 the frame is pixel-identical: `withRetry()` alone, settled and
  still, at the centre of the right column and at the apparent size the column
  drew it at;
- at 1330 Scene 06 opens on the symbol in that same place at that same size, and
  then carries it back to the prompt's token over its own duration.

Scene 06 therefore inherits **a position and an apparent size**, not the token
rect. It is not handed a shape already sitting on `selectedTokenRect`, and it must
not assume one: returning the symbol to the token is the beat that closes the loop
the 0630 cut opened — `graphOffset` in `src/three/graphFrame.ts` is derived from
`selectedTokenRect`, so the graph began on that rect and the film ends by putting
the symbol back on it — and that beat is Scene 06's to make.

A match cut only works if the shape is in the same place on both sides of it,
which is why nothing about the surviving node moves after 1288 and why the exit
finishes fourteen frames before the cut rather than on it.

## Copy

Left side:

```text
Name matching
```

```text
TypeScript   withRetry()
             libraries/library-shared/src/utils/retry.ts

Go           withRetry()
             services/api-db-go/internal/infrastructure/postgres/retry.go
```

```text
2 matches
```

Right side:

```text
Semantic resolution
```

```text
1 symbol
2 real relationships
```

No centre copy. `A name is not a symbol.` used to be set across the middle of the
frame from what is now 1224; it was cut, and nothing replaced it.

The right-hand counter reads `2 real relationships` because two is how many the
fixture has. `src/data/graphDemo.ts` gives `withRetry` exactly two edges whose
callee it is — `Policy.Do()` and `Once()` call it — and an earlier version of this
document printed `3`, which was invented. A scene whose subject is exactness
cannot print a number it does not have. Every figure on screen is counted rather
than typed: `2 matches` is `nameMatches.length`, and `1 symbol` and
`2 real relationships` are `resolution` in `src/three/semanticState.ts`, which
filters `edges` for those reaching `selectedSymbolId`.

Two consequences worth stating. The digit collision with Scene 04's
`3 dependency paths` disappears, so no viewer has to work out whether the same
`3` means the same quantity twice. And the asymmetry the scene shows is the
storyboard's original pairing, `2 matches` against `1 symbol`: two things that
merely share nine characters, neither of which is the symbol, against the one
that is, with the relationships that genuinely exist. It is not two against
seven. Seven is the blast radius, and the blast radius is Scene 04's subject —
this column is the resolution, and a resolution that returned everything would be
a search result.

Two entries, and they are **real**. Both come from the published benchmark in
`kivgraph/benchmarks/graph-tools-comparison/results.json`, which asks separately
*"Which call sites use the withRetry declared in
libraries/library-shared/src/utils/retry.ts?"* and *"Which call sites use
withRetry in services/api-db-go/internal/infrastructure/postgres/retry.go?"*.
They are carried in `src/data/graphDemo.ts` as `nameMatches`, deliberately
outside the graph: they are not nodes, they have no edges, and hanging them off
the blast radius would dirty a topology that four scenes depend on.

An earlier version of this scene listed seven invented contexts — `payments`,
`http`, `jobs`, `utils`, `client`, `worker`, `tests`. Seven filled the frame
better. It was also a fabricated demonstration of exactness, in a video whose
entire claim is exactness, and it went. If a seven-way version is ever wanted,
the honest route is a real compilable fixture documented as a demo fixture, not
a prop dressed as benchmark data.

Unlike the seven, the paths carry file extensions, because the extension is the
argument: `.ts` and `.go` are two languages, two type systems, two analysers,
and the same nine characters. No line numbers, no other annotation. No other
text appears in the scene.

## Key frames

Frames to inspect manually (`STORYBOARD.md` §28):

```text
1130 — frame identical to 1129; flatten begins
1190 — split view established, both matches highlighted, right side resolving
1224 — KEY VISUAL: name matching vs semantic resolution, the asymmetry alone
1329 — contraction settled since 1316, ready for the match cut
```

**Frame 1224 is a key visual frame** (`STORYBOARD.md` §29 and `AGENTS.md`'s
still-image key frame list), earmarked for technical marketing. It is *defined* as
the first frame of the stand's measured byte-identical run — the comparison
complete, nothing arriving and nothing leaving — so a retime moves it to wherever
that run now begins. It must work as a still image, which means at 1224:

- the two-versus-one asymmetry is countable at a glance;
- both counters (`2 matches`, `1 symbol`, `2 real relationships`) are legible;
- the frame carries the comparison **on its own**. It used to carry
  `A name is not a symbol.` across the middle, and that sentence was the still's
  headline; with it cut, the asymmetry is the only thing the image has to say, so
  it has to be unmistakable without a caption telling the viewer what to conclude;
- the left side is at full presence and plainly readable — nothing dims in this
  scene, and a still in which the left side has effectively disappeared loses the
  comparison and therefore the point;
- nothing is mid-fade in a way that looks accidental;
- the image survives downscaling to social/blog width.

Inspect it as an exported still, not only by scrubbing.

## Invariants

Preserve unless the creative direction is explicitly changed:

- **Two versus one is the whole point and must not be padded.** Two entries on the
  left, one symbol on the right. The temptation is to add more rows because two
  looks thin; adding an invented one destroys the scene far more thoroughly than a
  sparse frame does. If the left side ever grows, it grows because the corpus does.
- **Both are highlighted, neither is ranked.** A name search cannot tell them
  apart, so nothing in their appearance may imply that one is the right one.
- **The two entries are real and must stay traceable.** They come from
  `nameMatches` in `src/data/graphDemo.ts`, which cites the benchmark question it
  took each from. A future editor who wants a different pair must change the
  citation with them.
- **The left/right asymmetry is legible without audio and in a small embedded
  player.** The scene's meaning is a difference in count, which is readable at any
  size, and it must not depend on colour alone (`AGENTS.md` §37): row count,
  emptiness on the right, and the two counters each carry it independently.
- **Brand accent stays on the right.** The left side's highlight is the editor
  `selection` token; accent means semantically resolved and must not be spent on
  name matches.
- **Everything leaves on one window, from the same opacity.** Local 158–186.
  Nothing may be pre-dimmed, pre-faded or given its own exit before it: two
  things cannot read as leaving together if they start from different opacities,
  and every earlier version of this tail failed on exactly that. If a future
  edit wants the left side quieter, it has to be quieter for its whole life, not
  quieted on the way out.
- **The counters are counted, not chosen.** `2 matches` is `nameMatches.length`;
  `1 symbol` and `2 real relationships` are `resolution` in
  `src/three/semanticState.ts`, which counts the edges whose callee is
  `selectedSymbolId`. None of the three may become a literal. If the demo graph
  ever gains an edge into `withRetry`, the column and its counter change
  together, which is the only way a scene about exactness can be maintained.
- **They are still not benchmark figures.** `STORYBOARD.md` labels the right-hand
  side *"Ejemplo conceptual"*, and these numbers describe the demo corpus rather
  than a measurement: `2 matches` counts declarations sharing a name in it, while
  `07-benchmark.md`'s `7 / 7 exact answers` counts benchmark questions answered
  exactly. They are unrelated quantities and must never be juxtaposed in a way
  that suggests otherwise.
- **The right column shows the resolution, not the blast radius.** One symbol and
  the relationships that reach it. The seven affected symbols belong to Scene 04's
  card; the emptiness here is what this scene is arguing, and the whole cascade
  would not be legible in half a frame in any case.
- **The counters must still agree with what is on screen.** `1 symbol` and
  `2 real relationships` must match the right column exactly — one label, two
  tubes, nothing else — and the column is a filtered subset of
  `src/data/graphDemo.ts`, never a redrawing of it.
- **No sentence over the comparison.** `A name is not a symbol.` was cut, along
  with the veil it needed and the centre band that was reserved for it. Re-adding
  a sentence here means re-adding both, and the objection that retired it — that
  it did not read as a result of the comparison under it — applies to any
  replacement. The comparison is the argument; nothing states it in words.
- **The transition into the split comes from the content.** The graph flattens out
  of itself and the split forms around it; the rig straightens as part of that
  move, not in place of it. Never a wipe, spin, page curl or generic transition
  (`STORYBOARD.md` §27).
- **The contraction is a subtraction and it is settled at 1316, fourteen frames
  before the cut.** The callers leave; the surviving node does not move, rescale
  or lose its accent. Scene 06 inherits its position and apparent size and moves
  it from there.
- **The build's terms are not compressed again.** Twenty-frame windows spaced
  twelve apart, and the sixty-frame stand behind them. Both exist so the counted
  terms can be counted; tightening either back to the old eighteen-and-ten takes
  the scene's reading time, not its slack.
- **Frame 1224 works as a still image.**

## Flexible elements

Safe to change without altering the scene's purpose:

- exact frames of the left build and the right resolve, provided both are complete
  and both counters are legible by roughly 1228, provided no build window is
  narrower than twenty frames or spaced closer than twelve, and provided the left
  side arrives as an unordered burst while the right arrives deliberately;
- exact row height, column padding and list alignment on the left;
- exact layout of the right column's two relationships;
- exact divider colour choice between `border` `#22262b` and `borderStrong`
  `#413a42`;
- exact easing, as long as it stays non-elastic;
- exact type scale of the side labels and counters, above the small-text floor of
  `STORYBOARD.md` §7;
- exact split ratio, if a slight asymmetry reads better than exactly 50/50;
- the flatten's exact pixels per world unit and column offset, provided every
  surviving label stays above the small-text floor;
- whether the flatten stays a true R3F flatten or falls back to the cross-fade to
  DOM — a decision to be re-taken on evidence from a render rather than an open
  preference (see `## Three.js` and `## Current compromises`).

## Technical notes

- Component: `src/scenes/SemanticScene.tsx`.
- Global scene boundaries live only as inline `<Sequence>` literals in
  `src/Composition.tsx` (`from={850}`, `durationInFrames={200}`), so Remotion
  Studio can trim them. There is no timing module; do not introduce one and do not
  restate 1130/1330 inside the scene. The scene animates in scene-local frames.
- Pieces involved during the flatten, as the graph scenes ship them:
  `src/components/GraphWorld.tsx` draws the graph from a `GraphVisualState` and is
  shared by every graph scene; `src/three/GraphNode.tsx` is a node — an extruded
  rounded plate with a hairline contour on its front face;
  `src/three/GraphEdge.tsx` is a relationship — a tube along a Catmull-Rom curve
  whose radius steps between `0.026` while it resolves and `0.022` once it is
  structure; `src/three/graphFrame.ts` is the spatial contract (the single world
  em, the per-shell look, plate metrics, `edgeRadius`); `src/three/projection.ts`
  maps world to screen; `src/three/CameraRig.tsx` applies the pose; and each
  scene's own state module says what is on screen at a given frame. Nothing in the
  graph is drawn as SVG, there are no rings, and there is no geometry for a
  repository at all.
- Labels are DOM and the bodies are WebGL, and they agree by construction: both
  are placed by `projectPoint` from the same pose. The flatten is therefore not a
  purely 3D move — it has to keep two renderers together, which is why every
  position goes through the single `world()` expression that scales `z` by
  `1 - flatten`.
- The left column and the counters are DOM composited over the canvas, like Scene
  04's card. The rows are data, not markup: they come from `nameMatches` in
  `src/data/graphDemo.ts`, so the list cannot drift from the `2 matches` counter.
- The right column's symbol and its two relationships are the same dataset the 3D
  scenes use, filtered rather than re-drawn, so the flatten preserves identity
  instead of approximating it.
- Tokens: `src/brand/tokens.ts`. Fonts: `src/brand/fonts.ts` (`"Geist"`,
  `"JetBrains Mono"`). Fonts load deterministically from `public/fonts/*.woff2`; late
  loading must not reflow the list, which would be visible on a key
  frame.
- The hand-over at 1330 is a cross-component contract, and it is a position and an
  apparent size rather than a rect. This scene leaves `withRetry()` where the
  right column drew it; Scene 06 reads that and animates from it to the prompt's
  token, which is exported from `src/components/AgentPrompt.tsx` as `tokenRect`
  and, once the prompt's grow has settled, as `selectedTokenRect` — the same rect
  `graphOffset` in `src/three/graphFrame.ts` was derived from at the 0630 cut, so
  the return closes that loop rather than repeating it. Inspect 1329 and 1330 as a
  pair on every change to either scene (`AGENTS.md` §9, §11).
- Performance: the flatten animates camera plus per-node depth and opacity while a
  DOM list fades in. Reuse geometry and materials; avoid stacked postprocessing
  (`AGENTS.md` §35, §36).
- Iterate with Remotion Studio plus small range renders over roughly 1000–1340.
  Scrub forward, backward, forward across both seams (1129/1130 and 1329/1330) and
  confirm identical rendering (`AGENTS.md` §40).

## Current compromises

- **Implemented.** `src/three/semanticState.ts` holds the scene's state — the
  flatten, the rig's straightening, the surviving subgraph, the card's fade and
  the column schedules — and `src/scenes/SemanticScene.tsx` composes it. There are
  no veil or copy channels: `veilOpacity` and `copyOpacity` were deleted when the
  sentence was cut. Everything the flatten operates on shipped with Scenes 03 and
  04: `src/data/graphDemo.ts`, `src/three/graphFrame.ts`,
  `src/three/projection.ts`, `src/components/GraphWorld.tsx`,
  `src/three/GraphNode.tsx` and `src/three/GraphEdge.tsx`. The dataset and the
  spatial contract this scene flattens are real code, not a plan.
- **The counters were conceptual and are now counted.** `STORYBOARD.md` marks the
  right-hand side *"Ejemplo conceptual"*, and an earlier draft printed a `3` on
  that licence. The licence covers the illustration, not an invented figure: the
  fixture gives `withRetry` two direct callers, so the counter is `2` and it is
  derived from `edges`. The invariant that the counter agrees both with the column
  and with the dataset is now satisfiable, which it was not before. If real
  measured figures ever replace these, the change goes through `STORYBOARD.md`
  first (`AGENTS.md` §14, §29).
- **The right column being a subset is not a compromise.** It is the argument: a
  resolution returns one symbol and what genuinely reaches it, and the emptiness
  around it is what separates it from the left column's list. It is also the only
  version that can be read — the whole cascade in half a frame puts every label at
  about 11 px.
- **Ownership of the contraction is an open decision resolved here.**
  `STORYBOARD.md` SCENE 07 now specifies the tail as this scene implements it —
  the build completing at `1228`, the sixty-frame stand, one exit window
  `1048–1076` and the settle to the cut — while SCENE 08 still places "el grafo se
  contrae hacia el nodo seleccionado" at the first frame of the agent answer, which
  is unreachable, because that frame is `AgentAnswerScene`'s first and the graph no
  longer exists there. Resolution agreed with `06-agent-answer.md`: `SemanticScene`
  owns the contraction, and the storyboard's "se contrae hacia el nodo
  seleccionado" is realised as everything else leaving rather than as a collapse
  travelling toward the node. This used to shorten the literal hold the storyboard
  specified, and the note here asked for a revisit if the cut read better with a
  longer hold and a faster contraction. The first 2026-08-25 grow is that revisit:
  the hold is sixty frames and the exit twenty-eight, and the second grow left both
  alone and spent its frames on the build instead.
- **Internal beat frames are this document's proposal.** The storyboard fixes the
  transition, the build to `1228`, the stand, the exit window `1048–1076` and the
  settle to the cut; its centred copy at what is now `1224` was cut, so that beat
  no longer constrains anything. The flatten window, the left build and the right
  resolve windows in `## Timeline` are derived from the critical frames `1130`,
  `1190`, `1224` and `1329`.
- **The flatten technique is decided, and it is decided as an experiment.** The
  first implementation is a true R3F flatten with the canvas kept alive. It was
  not chosen for being the better renderer; it was chosen for being the cheaper
  experiment. If flat, head-on plates read as grey rectangles, that render is the
  evidence for switching to the cross-fade to DOM, and one render is what it costs
  to find out. Building two renderers before knowing that one of them is
  insufficient is the wrong order. The fallback remains acceptable only if its
  seam is genuinely invisible, because `AGENTS.md` §23 forbids hiding poor
  continuity behind an effect; record the switch here if it is taken.
- **The left side is now two rows where it was seven, and the layout has not been
  re-composed for it.** The split view was designed around a seven-row column
  balancing a single node. Two rows carrying a language and a path are a different
  shape: wider, shorter, denser per row. The counts and the copy are correct; the
  vertical rhythm of the left column has not been re-authored and should be, in the
  same task that first renders this scene.
- **Typography split is a project-level open decision.** `AGENTS.md` §27 assigns
  sans to headings/UI/marketing while the Kivgraph web is mono-dominant. This
  document resolves it as graph-attached and technical text in mono,
  viewer-addressed narrative lines in sans, and the rule must be applied
  identically across every scene document.
- **Sound is absent.** No sound design is specified for this scene, and none is
  required.

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
- Scene 02 (Problem / Not Alone) deleted; its widen-and-dim folded into the
  agent scene. Documents renumbered: this is now scene 06, realising storyboard
  SCENE 07. Every master frame moved −120; beats, durations and scene-local
  frames are unchanged.
- Storyboard citation now names the heading only; line ranges go stale.
```

```text
2026-08-23
- Scene 01 shortened from 210 to 120 frames; its staggered beats merged into one
  simultaneous transition. Every master frame in this document moved −90; the
  master is now 1410 frames (23.5 s). Beats, durations and scene-local frames
  are unchanged.
```

```text
2026-08-23
- The left side went from seven invented contexts to the two real homonyms the
  published benchmark actually contains: withRetry() in
  libraries/library-shared/src/utils/retry.ts (TypeScript) and in
  services/api-db-go/internal/infrastructure/postgres/retry.go (Go).
- Reason: the scene argues that Kivgraph is exact. Demonstrating that with a
  fabricated fixture is self-defeating, and the seven contexts were invented.
  Two languages sharing nine characters proves the point; a seventh row does
  not add proof, only width. Counter 7 matches -> 2 matches.
- The entries live in nameMatches in src/data/graphDemo.ts, outside the graph:
  they are not nodes and have no edges, and hanging them off the blast radius
  would dirty a topology four scenes depend on.
- Rows now carry the declaring path and its extension, because .ts versus .go
  is the argument.
- The impact metric quoted from scene 05 is now 7 affected symbols.
- Known gap: the split view was composed for a seven-row column and has not
  been re-authored for two taller rows. Recorded in Current compromises.
```

```text
2026-08-23
- Corrected for the scene 03 redesign, which made the graph concentric: the
  camera looks straight down -Z for all of scene 03 and never rotates, so the
  flatten is depth and translation only, not a rotation to frontal, and the
  sequence spends none of its angular budget.
- The accented symbol is accentText on the label, not accent behind it: scene 03
  removed node plates.
- The shell rings and the two cluster labels retire during the flatten, because a
  radius means hop distance and a two-column comparison has no radius.
- Module list replaced with what scene 03 actually ships; src/three/ and
  src/data/graphDemo.ts now exist, so only SemanticScene.tsx is missing.
- Left column: the leftover seven invented contexts finally went from the
  composition text too; it now names the two languages the rows really carry.
- Recorded that "3 real relationships" disagrees with the two edges the dataset
  gives withRetry; copy left alone, decision deferred.
```

```text
2026-08-24
- Corrected four claims that described a version of scene 03 which no longer
  exists.
- The camera is a rig, an eye and a point it looks at, and it ends scene 03 at
  eye (7.0, 3.2, 10.0) looking at (8.0, 0.0, -2.4) - roughly 15 degrees off -Z,
  exported as restLook from src/three/crossRepoState.ts. Scene 04 translates eye
  and target together and returns to it; scene 05 never moves it. The
  storyboard's "la camara vuelve frontal" step is therefore not spent:
  straightening the rig is part of the flatten, and it spends the same 15 degrees
  of angular budget scene 03's rise spent, which this document had assumed was
  free.
- There are no shell rings and no RepositoryCluster; both were built and
  deleted, as was the base plane that replaced them. What retires during the
  flatten is depth itself plus the two floating cluster labels.
- A node is a DOM label over an extruded rounded plate with a hairline contour
  (src/three/GraphNode.tsx), not bare accented type on the field. The
  consequence is recorded too: the flatten has to decide what a plate means
  head-on, and the answer taken is that the extrusion goes with the depth - 18%
  of its thickness at full flatten - while the contour stays.
- An edge is a Catmull-Rom tube with real thickness (src/three/GraphEdge.tsx),
  radius stepping between 0.026 resolving and 0.022 settled, not a line
  primitive. A line primitive was never available: linewidth is ignored by every
  WebGL platform that matters.
- Counter: 3 real relationships -> 2 real relationships, counted from the edges
  whose callee is selectedSymbolId. 3 was invented; the fixture gives withRetry
  exactly two direct callers, and a scene whose subject is exactness cannot print
  a number it does not have. The digit collision with scene 05's 3 dependency
  paths disappears, and the asymmetry the scene shows is the storyboard's own
  2 matches against 1 symbol. The invariant and the compromise bullet that
  defended the invented 3 went with it.
- Recorded that the right column showing a subset is the argument rather than a
  compromise, and that the whole cascade would render at about 11 px in half a
  frame.
- Flatten technique decided: a true R3F flatten with the canvas kept alive,
  chosen as the cheaper experiment rather than as the better renderer. The
  cross-fade to DOM stays as the fallback, to be taken on evidence from a render.
- The graph's lifetime is not one function. Each scene owns a state module and
  the later ones sample the previous at its handover frame; the proposal to
  extend getGraphState with an offset is replaced.
- Initial state now matches veilOpacity in src/three/semanticState.ts: the
  inherited 0.72 is spent across the flatten and a second veil rises to 0.58 for
  the sentence at 0950. The rule kept is one veil per sentence, never two inside
  twenty frames.
- Contract change with scene 07, not a bug fix. The contraction is a subtraction:
  the two callers and their tubes leave over local 139-149 and withRetry() is left
  where the right column drew it, settled, still, at 152 px per world unit. The
  old contract required the node to already sit on selectedTokenRect at 0989,
  which had it backwards - a match cut means the shape is in the same place across
  the cut, so 06 delivering the node pre-placed on the token would be 06 doing
  07's work, in ten frames, under a sentence already holding. Returning the symbol
  to the prompt token closes the loop the 0330 cut opened, since graphOffset is
  derived from selectedTokenRect, and it is scene 07's beat to make from wherever
  06 leaves the node. Scene 07 now inherits a position and an apparent size;
  07-agent-answer.md still states the old contract and needs that sentence changed.
```

```text
2026-08-25
- The cross-repository scene was cut from the film. This document is renumbered
  06 → 05 and realises storyboard SCENE 07 at a two-scene offset rather than one.
  Every master frame moved −90: the scene spans 0750–0900 (12.5 s – 15.0 s), its
  key visual frame is 0860, and the contraction settles at 0899. The master is now
  1320 frames (22 s). Beats, durations and scene-local frames are unchanged.
- `A name is not a symbol.` was cut. It did not read as a result of the comparison
  underneath it and did not explain itself — the same objection that retired
  `Exact symbols. Not name matches.` in Scene 04. `copyOpacity` is gone.
- Both veils went with both sentences, so this scene now has none at all. It used
  to inherit `0.72` from Scene 04 and spend it across the flatten, then raise a
  second veil to `0.58` for the centre copy; Scene 04 no longer raises one and
  there is no sentence to darken a frame for, so `veilOpacity` is deleted. The
  "one veil per sentence, never two inside twenty frames" rule survives with
  nothing to govern, and `STORYBOARD.md` § Frase sobre el cuadro is kept for
  storyboard scenes 08–11 while governing nothing implemented. The comparison is
  lit identically on both sides for its whole life, which is what it needed
  anyway: the asymmetry now reads as data rather than as emphasis.
- The centre band reserved for the sentence is released, and key frame 0860 now
  carries the two-column asymmetry alone rather than a headline over it. The
  "layout must never reflow on a key frame" rule is satisfied by there being
  nothing left to arrive.
- The inherited frame changed with the scene before it: Scene 04 hands over its
  settled graph at full presence with the impact card and nothing else, and
  `ImpactReport` is the card alone now that the claim line is gone. The 0749/0750
  seam is pixel-identical.
- Camera provenance corrected. The pose used to be imported as `restLook` from
  `src/three/crossRepoState.ts`; that module went with the scene. This scene reads
  `inherited.look` from `getBlastState(120)` instead, so it still reads what it
  inherits rather than restating it. The 15° figure and the two-moves-against-one-
  budget reasoning are unchanged.
- The contract with the agent-answer scene is unchanged in substance and now
  agreed on both sides: it inherits a position and an apparent size, not the token
  rect. `06-agent-answer.md` has been corrected; the note in the 2026-08-24 entry
  above asking for that sentence to be changed is discharged.
- Every counted figure is untouched: `2 matches`, `1 symbol`,
  `2 real relationships`, the two real `nameMatches` entries with their paths, the
  152 px per world unit, the 11 px whole-cascade measurement and the 35–45 px
  surviving labels.
```

```text
2026-08-25
- The blast radius was trimmed from 120 to 100 frames, so every master frame in
  this document moved −20: the scene spans 0730–0880 (12.17 s – 14.67 s), its key
  visual frame is 0840, and the contraction settles at 0879. The master is now
  1300 frames (21.7 s). Beats, durations and scene-local frames are unchanged —
  the contraction still runs local 139–149.
- The trim was the previous scene's, not this one's: with `Exact symbols. Not name
  matches.` and its veil gone, nothing animated in the blast radius' tail and 41
  of its last frames were pixel-identical. Twenty came off, leaving it a 21-frame
  hold.
- The settle frame is corrected as well as shifted. This document said the
  contraction settles at 0899 and, before the cross-repository cut, at 0989; the
  source comment had been stale through both shifts and is now 0879.
- Seams re-measured: the inherited boundary is 0729/0730 and it is
  pixel-identical, and 880 mounted frames render with no black frame and no
  single-frame anomaly. `getSemanticState` samples `getBlastState(100)` rather
  than `getBlastState(120)`, which is the same "sample one past the previous
  scene's last local frame" rule at the shorter duration.
- Every counted figure is untouched: `2 matches`, `1 symbol`,
  `2 real relationships`, the 152 px per world unit, the 11 px whole-cascade
  measurement and the 35–45 px surviving labels.
```

```text
2026-08-25
- The tail was retimed twice in one pass, both on direct art direction, and both
  changes fit inside the same 150 frames.
- The withdrawal was too fast and sat too long on its least interesting image.
  Measured before: 61 frames holding the settled comparison, then a 10-frame
  fade. It now begins at local 112, as the left column finishes dimming, and
  runs 28 frames. The dead 13-frame hold at master 857-869 is gone.
- The cause was the curve, not the duration. The project's
  `bezier(0.22, 1, 0.36, 1)` is front-loaded - right for an arrival, wrong for a
  departure - and had the fade 85% done in six frames. Everything that leaves in
  this scene's tail now runs on a symmetric `bezier(0.4, 0, 0.6, 1)`, defined
  once as `leaving`. Measured: the tube's blue falls 120 to 0 over 24 frames
  instead of 6.
- Retracting the tubes into the anchor was built and abandoned. `edges` is the
  drawn fraction of a run and it does shorten the tube, but the half it removes
  is the half nearest the caller, which on this layout sits against the caller's
  own plate - so the shortening is not legible until the plate has already gone.
  One channel doing one thing beat a cleverer gesture the frame cannot show.
- The comparison chrome now leaves before the cut, on one window at local
  118-142: left column, divider, `Semantic resolution`, both counters. This
  reverses the old "never to zero" requirement, and `## Final state` records why.
- `columnOffsetPx.x` 472 -> 425. At 472 `Policy.Do()`'s plate reached x 1869,
  50 px from the frame edge and well inside the 96 px margin the rest of the film
  keeps. It now reaches 1822, margin 98 px.
- Verified: 970 frames, no black frame. The 0729/0730 seam is still
  pixel-identical, the frame is pixel-identical from 0872, and 0879/0880 measures
  28.7 dB whole-frame with 41.4 dB on the symbol region - the shape holds, the
  context arrives.
```

```text
2026-08-25
- The scene grew from 150 to 180 frames on direct art direction: it now spans
  0730-0910 (12.17 s - 15.17 s), its scene-local range is 0000-0180, and the
  master is 1330 frames (22.2 s). Every master frame at or after 0910 moved +30.
  This scene's own start, its key visual frame 0840, its build beats and the
  0729/0730 seam are untouched; only the tail was re-authored. Three scenes have
  now changed duration - scene 01, the blast radius, and this one.
- Two complaints, one cause. Things were leaving the frame on three different
  windows - the right column's counters at local 112-130, the nodes and tubes at
  112-140, the comparison chrome at 118-142 - so the frame emptied in three waves
  and read as pieces being switched off one after another. And the whole exit
  began only 27 frames after the comparison finished building, which is not long
  enough to read two columns.
- Both are fixed by one window, later. Everything now leaves on local 145-173,
  twenty-eight frames wide, ending seven frames before the cut, so the shape the
  match cut needs is at rest before the cut lands. The comparison completes at
  local 85 and stands for 60 frames - a full second - before anything moves. That
  extra reading time is the only reason the scene grew.
- Verified: 1000 frames render with no black frame, and the only frame the anomaly
  scan flags is 0909, which is the cut itself. The read hold is 35 frames
  byte-identical at 0841-0875, inside the 60-frame stand. The exit runs 0875-0903
  and the frame is pixel-identical from 0903 to 0909. 0909/0910 measures 41.4 dB
  on the symbol region - the shape holds across the cut while the context arrives.
  The 0729/0730 seam is unaffected and still pixel-identical.
- Every counted figure is untouched: 2 matches, 1 symbol, 2 real relationships,
  the two real nameMatches entries with their paths, the 11 px whole-cascade
  measurement and the 35-45 px surviving labels.
```

```text
2026-08-25
- The left column's pre-dim is deleted. It took the left side to `0.18` over
  local 84-112, long before the exit, so when the single exit window arrived the
  right half travelled `1 -> 0` and the left `0.18 -> 0`. On screen that read as
  the right vanishing and the left going separately - the exact fault the single
  window had been built to fix.
- Two things cannot read as leaving together if they start from different
  opacities. That is now an invariant, not a note.
- The dim's original reason had already been cut: it existed so the left side
  would recede under the centred sentence. After that sentence went it acquired a
  second justification in this document - that the still at 0840 needed the
  asymmetry - which does not hold. The asymmetry is `2 matches` against
  `1 symbol` and `2 real relationships`, and that is content.
- It also cost the scene the thing the stand exists for: at `0.18` the left
  column was not comfortably readable, so the sixty frames of reading time were
  being spent on a column the viewer had to squint at.
- Measured after the removal, peak luminance as a percentage of frame 0875 across
  the exit: left `87 / 53 / 18 / 8`, right column label `88 / 54 / 20 / 8`. The
  stand is now byte-identical for 65 frames, master 0811-0875, up from 35.
- Verified: 1000 frames, no black frame, the only flagged frame is 0909 which is
  the cut. `leftColumn.dim` is renamed `leftColumn.presence`, since it no longer
  dims anything.
```

```text
2026-08-25
- Shifted and grown in one pass. Scene 04 grew from 100 to 140 frames, so this
  scene's start moved +40; this scene then grew from 180 to 200, so every master
  frame from 0970 onward moved +70 in total. It now spans 0770-0970
  (12.83 s - 16.17 s), its scene-local range is 0000-0200, and the master is 1480
  frames (24.7 s). It is the longest scene in the film.
- The twenty frames went to the *build*, not to the tail, and a measurement chose
  the target. The pass that produced this entry made "too fast in the last scenes"
  objective by measuring **dwell time** - how long a readable thing stays on screen
  after it has finished arriving - and this scene's counters were not the worst
  offender. Scene 04's impact card had 0.42 s and scene 06's path sentence 0.57 s;
  this scene's counters already had the sixty-frame stand, 1.00 s, which is why the
  stand was left exactly as it was.
- What was wrong here was upstream of the stand. Every build window was eighteen
  frames wide and spaced ten apart, which delivered the left column's label, both
  rows and its counter inside 48 frames: a row was still arriving while the next
  one started, and the counter under them landed before either had been held. A
  comparison whose whole subject is counting cannot deliver its terms faster than
  they can be counted.
- Every build window is now twenty frames wide and spaced twelve apart: left label
  34-54, rows 42-62 and 54-74, left counter 70-90; right label 64-84, right counter
  78-98. The flatten runs 0-48 and the divider 14-52. The comparison completes at
  local 98 rather than 85.
- The tail is unchanged in shape and moved wholesale: one exit window, local
  158-186, twenty-eight frames, ending fourteen frames before the cut instead of
  seven, and the sixty-frame stand in front of it.
- Measured: 1150 mounted frames render with no black frame. The stand is
  byte-identical for 65 frames at master 0864-0928, and the settle to the cut is 14
  frames at 0956-0969. The 0769/0770 seam is still pixel-identical. 0969/0970
  measures 41.35 dB on the symbol region - the shape holds across the cut while the
  context arrives - and the anomaly scan flags 0969 and 0970, the two sides of that
  cut, and nothing else.
- The key visual frame moved 0840 -> 0864, and it is now stated as a definition
  rather than a number: it is the first frame of the stand's measured
  byte-identical run.
- `getSemanticState` now samples `getBlastState(140)` where it sampled
  `getBlastState(100)`; the principle - read the inherited frame rather than
  restate it - is unchanged.
- Two stale claims went with the retime. `## Visual composition`'s hierarchy said
  the left side was "already fading" at the still and `## Flexible elements` still
  offered "exact opacity the left side settles at": both were left over from the
  pre-dim deleted in the entry above, and nothing dims in this scene.
- Every counted figure is untouched: `2 matches`, `1 symbol`,
  `2 real relationships`, the two real `nameMatches` entries with their paths, the
  152 px per world unit, the 11 px whole-cascade measurement and the 35-45 px
  surviving labels.
```

```text
2026-08-27
- The left column's count is verified rather than asserted. Both `withRetry`
  declarations in `nameMatches` were looked up through the MCP server against
  snapshot 87, built 2026-08-26T15:12:00Z, resolver 0.7.0:
      src/utils/retry.ts                          135-163  function, exported
      internal/infrastructure/postgres/retry.go    49-78   func, unexported
  Two declarations, two repositories, two languages - which is exactly what this
  scene's left column counts and what its right column resolves to one symbol.
- Nothing in the scene changed. What changed is that `graphDemo.ts`'s claim that
  "two is the number the corpus actually contains" now rests on the graph rather
  than on a comment. Re-run the lookup if the corpus is re-indexed: a fixture
  that was true once is not the same as a fixture that is true.
- Noted in `graphDemo.ts` and worth repeating: the `find_by_intent`
  documentation's own example returns `withRetry` at 135-163, which is the first
  of these two exactly, with its repository and path anonymised. The tool's
  canonical demonstration and this film's fixture point at the same code.
```

