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

**Immediately before.** Scene 04 (`04-blast-radius.md`, frames 0630–0750)
propagated a change through the graph and counted it on a card
(`7 affected symbols`, `3 dependency paths`, `2 repositories`). The graph is
accent-marked, at rest and at full presence, and the card is the only flat
surface in the frame.

**This scene.** Stops being a graph for a moment and becomes a comparison. The 3D
representation is retired here — deliberately, and by flattening rather than by
cutting away — because the argument being made is not spatial. It is a difference
in count.

**What it prepares.** Scene 06 (`06-agent-answer.md`, frames 0900–0990) returns
to the agent prompt, where the agent states the answer in prose. That return is a
match cut on a symbol that does not move across it: this scene ends with
`withRetry()` alone in the right column, settled and still, and Scene 06 opens on
it in that same place at that same apparent size. Carrying it back to the prompt's
token — closing the loop the 0330 cut opened — is Scene 06's move, made in its own
ninety frames. This scene owns the contraction that leaves the symbol alone and
must have it fully settled at 0899.

## Timeline

- Storyboard coverage: **`STORYBOARD.md` SCENE 07 — NAME ≠ SYMBOL**.
  Note the numbering offset: storyboard scenes 03 and 04 collapse into the single
  component `GraphRevealScene`, and storyboard SCENE 05 — CROSS-REPOSITORY was
  cut, so every document number from `04-blast-radius.md` onward is **two** lower
  than its storyboard scene number. `docs/scenes/README.md` § Scene numbering
  holds the whole mapping.
- Global frames: **0750–0900**
- Scene-local frames: **0000–0150**
- Time: **12.5 s – 15.0 s**
- Duration: **150 frames / 2.5 s** at 60 fps
- Remotion component: `src/scenes/SemanticScene.tsx`
- Boundary source: the inline `<Sequence name="05 Semantic Resolution" from={750} durationInFrames={150}>`
  literal in `src/Composition.tsx`

Beats (scene-local = master − 750):

| Master      | Local       | Beat                                                                                             |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------ |
| `0750–0790` | `0000–0040` | The rig straightens, depth collapses, the graph flattens into the right half, split view forms. The impact card fades out. |
| `0780–0820` | `0030–0070` | Left side builds: label `Name matching`, two `withRetry()` entries under two languages, both highlighted. |
| `0805–0835` | `0055–0085` | Right side resolves: label `Semantic resolution`, the symbol and the two relationships that reach it. |
| `0835`      | `0085`      | Both counters settled: `2 matches` left, `1 symbol` and `2 real relationships` right.              |
| `0840–0880` | `0090–0130` | Left side loses opacity. Right side stays clear. `0860` is the key visual frame. |
| `0880–0889` | `0130–0139` | Hold.                                                                                              |
| `0889–0899` | `0139–0149` | The two callers and their tubes leave; `withRetry()` alone, settled and still at 0899 for the match cut. |

The internal beat frames between 0750 and 0835 are this document's proposal; the
storyboard fixes only the transition, the `0840–0880` fade and the hold. Its
centred copy at what is now 0860 was cut, so the key visual frame is the
comparison itself rather than a sentence over it. See `## Flexible elements` and
`## Current compromises`.

## Initial state

At master frame 0750 (local 0000) the frame is **visually identical** to master
frame 0749: the 3D graph as Scene 04 left it, at rest and accent-marked, at full
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

At master frame 0900 (local 0150, the frame after this scene's last):

By 0899 the frame holds:

- the right side only, at full clarity: one symbol, the two relationships that
  reach it, `Semantic resolution`, `1 symbol`, `2 real relationships`;
- the left side reduced to a clearly subordinate presence — visible enough that the
  two-versus-one comparison still reads as a comparison, faint enough that it is
  no longer the subject;
- no centre copy and no veil; the comparison is the whole of the argument;
- the two callers and their tubes gone, leaving the single `withRetry()` node
  settled and still at the centre of the right column, at the apparent size the
  column drew it at — 152 master pixels per world unit — which is the position and
  the size `AgentAnswerScene.tsx` opens on at 0900.

Nothing is mid-animation at 0899. A match cut requires the outgoing shape to be at
rest at the cut.

## Visual composition

**Layout.** A 50/50 vertical split of the 1920×1080 frame, divided by a single 1px
hairline in `borderStrong` `#333a42`. Radius 0. No shadows. Both halves sit on
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

**Hierarchy** at 0860, strongest first:

1. the right side's single resolved symbol;
2. the left side's two matches, already fading;
3. the counters;
4. the side labels and the divider.

## Motion

**Rhythm.** Flatten, build, compare, subtract, hold, and leave one symbol. The
scene is 2.5 s long — the longest of this trio — because the comparison needs time
to be counted, not just seen. It used to state a conclusion between the subtraction
and the hold; with the sentence cut, the subtraction *is* the conclusion.

**The flatten.** Continuous, not a cut, and three things move as one gesture: the
rig straightens, the four hop planes collapse onto the anchor's, and the
surviving subgraph is carried into the right half of the frame while the divider
and the left column establish themselves. The rig arrives 15° off `-Z` and leaves
pointing exactly down it. The carry into the right half is done by aiming the rig
beside the cluster rather than by translating the graph, because a look-at camera
always projects its target to the centre of the frame, so an off-centre cluster
is a property of where the camera is pointed. Eased with
`Easing.bezier(0.22, 1, 0.36, 1)` across `0750–0790`. The impact card fades out
during this move — `reportFade` over local 0–36 — and it does not slide or wipe.
There is nothing else to clear.

**The left build.** The two entries arrive in a rapid, near-simultaneous burst,
like a find-all-matches list filling. This is a **deliberate contrast** with Scene
04's strictly ordered causal propagation: name matching dumps results in no
meaningful order, semantic resolution derives them in a causal one. The
highlighting of both is simultaneous — the point is that a name search cannot
distinguish between them, so nothing about their appearance may suggest ranking.

**The right resolve.** Slower and singular. One node settles, then the two
relationships that reach it. Where the left side arrives all at once, the right
side arrives deliberately.

**The subtraction.** `0840–0880` reduces the left side's opacity while the right
side holds. As in Scene 04, the scene makes its point by removing rather than by
adding. The left side must not vanish: the comparison has to remain a comparison
in the still at 0860, and with no sentence over that frame the asymmetry is the
only thing the still has to carry.

**The hold.** `0880` onward the frame is still and readable.

**The contraction.** In the final frames, local 139–149, the two callers and their
tubes leave and `withRetry()` is left alone. It is a subtraction, not a move: the
node holds its position, its apparent size and its accent, and the camera does not
travel for it. That is what a match cut needs — the outgoing shape has to be in
the same place on both sides of the cut, so the shape that survives is the one
that never moved. Carrying the symbol back to the prompt's token belongs to Scene
06, which has ninety frames for it; doing it here would mean two moves at once in
ten frames, one of them a snap.

**No elasticity anywhere.** No bounce, no overshoot, no playful easing
(`STORYBOARD.md` §8).

## Three.js

Three.js is used, and this scene is where it retires.

**Why 3D is involved at all.** The transition out of 3D must come from the content
(`STORYBOARD.md` §27, *Graph → Semantic comparison*: camera rotates to front →
graph flattens → split view). All three steps are real work here. An earlier
version of this document claimed the first was already spent because the camera
had looked straight down `-Z` since 0330; it never did. The camera is a rig — an
eye and a point it looks at — and Scene 03 steps it off the axis at its local 30
and leaves it, from its local 268 onward, at eye `(7.0, 3.2, 10.0)` looking at
`(8.0, 0.0, -2.4)`: roughly 15° off `-Z`. Scene 04 never moves it, and neither did
the cross-repository scene between them while it existed. That scene used to
export the pose as `restLook` from `src/three/crossRepoState.ts`; both are gone,
and this scene now reads the pose off the state it inherits — `inherited.look`,
from `getBlastState(120)` — instead of importing a named constant. It still reads
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
has built since frame 0330; flattening the actual graph proves that the
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
860 px the right half has to offer puts every label at about 11 px, under half
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
module over its own scene-local frames. Scene 04 samples `getGraphState(300)`
rather than restating Scene 03's settled numbers, because a whole graph state is
twenty-odd values and copying them would be a second source of truth that goes
stale the first time the scene before it is retuned. This scene follows the same
pattern: `getSemanticState` samples `getBlastState(120)`. Extending
`getGraphState` with an offset, which an earlier version of this document
proposed, would fight that pattern rather than follow it.

## Transition in

Hard sequence boundary at 0750, and it is **pixel-identical**: at 0750 the frame
equals 0749 — the accent-marked graph at rest at full presence, with the impact
card top-left and nothing else. Getting there mattered: the card and the claim
line under it used to be drawn by this scene and by Scene 04 from two different
places, and the 0749/0750 seam measured 22 dB. Both scenes now draw
`src/components/ImpactReport.tsx`, which since the claim line was cut is the card
alone.

The flatten then begins. Its preconditions, owed by Scene 04:

- the graph must be **at rest** at 0750, otherwise the flatten reads as a glitch
  rather than as a change of representation;
- the accent state must carry over unchanged, so the right column is recognisably
  the same symbol;
- the card must clear during the flatten. It is the only thing to clear: Scene 04
  ends with no claim line and no veil, and this scene raises neither.

The scene animates in scene-local frames, offsetting to absolute frames only where
it samples the graph curve shared with Scenes 03 and 04.

## Transition out

At 0900 `AgentAnswerScene.tsx` takes over with a **match cut** into the agent
prompt (`STORYBOARD.md` §27, *Graph → Agent*: graph contracts into selected
symbol → match cut into prompt text).

The contract with `06-agent-answer.md`:

- this scene owns the contraction, which is the two callers and their tubes
  leaving over local 139–149, and completes it at **0899**;
- at 0899 `withRetry()` is alone, settled and still, at the centre of the right
  column and at the apparent size the column drew it at;
- at 0900 Scene 06 opens on the symbol in that same place at that same size, and
  then carries it back to the prompt's token over its own duration.

Scene 06 therefore inherits **a position and an apparent size**, not the token
rect. It is not handed a shape already sitting on `selectedTokenRect`, and it must
not assume one: returning the symbol to the token is the beat that closes the loop
the 0330 cut opened — `graphOffset` in `src/three/graphFrame.ts` is derived from
`selectedTokenRect`, so the graph began on that rect and the film ends by putting
the symbol back on it — and that beat is Scene 06's to make.

A match cut only works if the shape is in the same place on both sides of it,
which is why nothing about the surviving node moves in the last ten frames and why
the contraction finishes a frame before the cut rather than on it.

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
frame from what is now 0860; it was cut, and nothing replaced it.

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
0750 — frame identical to 0749; flatten begins
0810 — split view established, both matches highlighted, right side resolving
0860 — KEY VISUAL: name matching vs semantic resolution, the asymmetry alone
0899 — contraction settled, ready for the match cut
```

**Frame 0860 is a key visual frame** (`STORYBOARD.md` §29 and `AGENTS.md`'s
still-image key frame list), earmarked for technical marketing. It must work as
a still image, which means at 0860:

- the two-versus-one asymmetry is countable at a glance;
- both counters (`2 matches`, `1 symbol`, `2 real relationships`) are legible;
- the frame carries the comparison **on its own**. It used to carry
  `A name is not a symbol.` across the middle, and that sentence was the still's
  headline; with it cut, the asymmetry is the only thing the image has to say, so
  it has to be unmistakable without a caption telling the viewer what to conclude;
- the left side is faded but still readable — a still in which the left side has
  effectively disappeared loses the comparison and therefore the point;
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
- **The contraction is a subtraction and it is settled at 0899.** The callers
  leave; the surviving node does not move, rescale or lose its accent. Scene 06
  inherits its position and apparent size and moves it from there.
- **Frame 0860 works as a still image.**

## Flexible elements

Safe to change without altering the scene's purpose:

- exact frames of the left build and the right resolve, provided both are complete
  and both counters are legible by roughly 0835, and provided the left side arrives
  as an unordered burst while the right arrives deliberately;
- exact row height, column padding and list alignment on the left;
- exact layout of the right column's two relationships;
- exact divider colour choice between `border` `#22262b` and `borderStrong`
  `#333a42`;
- exact easing, as long as it stays non-elastic;
- exact opacity the left side settles at, provided it stays readable at 0860;
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
  `src/Composition.tsx` (`from={750}`, `durationInFrames={150}`), so Remotion
  Studio can trim them. There is no timing module; do not introduce one and do not
  restate 0750/0900 inside the scene. The scene animates in scene-local frames.
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
- The hand-over at 0900 is a cross-component contract, and it is a position and an
  apparent size rather than a rect. This scene leaves `withRetry()` where the
  right column drew it; Scene 06 reads that and animates from it to the prompt's
  token, which is exported from `src/components/AgentPrompt.tsx` as `tokenRect`
  and, once the prompt's grow has settled, as `selectedTokenRect` — the same rect
  `graphOffset` in `src/three/graphFrame.ts` was derived from at the 0330 cut, so
  the return closes that loop rather than repeating it. Inspect 0899 and 0900 as a
  pair on every change to either scene (`AGENTS.md` §9, §11).
- Performance: the flatten animates camera plus per-node depth and opacity while a
  DOM list fades in. Reuse geometry and materials; avoid stacked postprocessing
  (`AGENTS.md` §35, §36).
- Iterate with Remotion Studio plus small range renders over roughly 0740–0910.
  Scrub forward, backward, forward across both seams (0749/0750 and 0899/0900) and
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
  `STORYBOARD.md` SCENE 07 asks for a hold across `0880–0900`, while SCENE 08
  places "el grafo se contrae hacia el nodo seleccionado" at frame `0900` — which
  is unreachable, because 0900 is the first frame of `AgentAnswerScene` and the
  graph no longer exists there. Resolution agreed with `06-agent-answer.md`:
  `SemanticScene` owns the contraction, the hold occupies roughly `0880–0889` and
  the contraction `0889–0899`, and the storyboard's "se contrae hacia el nodo
  seleccionado" is realised as everything else leaving rather than as a collapse
  travelling toward the node. This shortens the literal hold the storyboard
  specifies. Revisit if the match cut reads better with a longer hold and a faster
  contraction.
- **Internal beat frames are this document's proposal.** The storyboard fixes only
  the transition, the `0840–0880` fade and the hold; its centred copy at what is
  now `0860` was cut, so that beat no longer constrains anything. The flatten
  window, the left build and the right resolve windows in `## Timeline` are
  derived from the critical frames `0750`, `0810`, `0860` and `0899`.
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
