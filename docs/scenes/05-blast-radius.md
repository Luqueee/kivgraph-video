# Scene 05 — Blast Radius

## Purpose

This scene turns **structure into consequence**.

Up to this point the video has shown that relationships exist and that they cross
repositories. Structure alone is interesting but inert. This scene answers the
question the agent asked in `02-agent.md` — *What breaks if I change withRetry()?*
— by showing a change originate at one symbol, travel outward along real
relationships, stop, and be counted.

The cascade in depth makes that argument shorter. Depth *is* hop distance from
the change, so the blast radius is already laid out along the axis it will travel
before this scene begins. The propagation is therefore not a metaphor laid over
the picture; it is the picture being filled in from the front of the frame
backwards, one hop at a time. This scene never has to teach the viewer what the
distance on screen means. It only has to run it.

It is the narrative step:

```text
Calcula impacto
```

from `STORYBOARD.md` §3.

Three things must land, in this order:

1. impact is **computed** — it propagates from a cause, hop by hop, along
   edges that were already on screen;
2. impact is **bounded** — the propagation stops at hop 3 because there is no
   hop 4; it does not consume the graph. Bounded is not the same as small: the
   last hop lands in a different repository, 3.4 units deeper into the frame than
   the change and at the far end of the sixteen world units the graph spans;
3. impact is **countable** — a card states the result as three numbers.

The scene also carries the video's first explicit product claim,
`Exact symbols. Not name matches.`, which Scene 06 then proves.

## Viewer takeaway

> Changing this one symbol has a known, finite, measurable effect — and something
> already knows what it is.

## Narrative context

**Immediately before.** Scene 04 (`04-cross-repo.md`, frames 0630–0720) named the
cross-repository relationship and then subtracted everything else, leaving the
three crossings at full presence — the two hop-2 nodes `Client.Charge()` and
`Client.Refund()`, the three `checkout-service` consumers at hop 3, and
`withRetry()` at the head of the cascade as the subject — with hop 1, the
`internal/retry` pair `Policy.Do()` and `Once()`, and every local edge dimmed.

**This scene.** Uses that clean frame. A single pulse establishes cause; the
propagation establishes reach; the card establishes measurement.

**What it prepares.** Scene 06 (`06-semantic-resolution.md`) proves why these
numbers can be trusted — because they are symbols, not name matches. Scene 07
(`07-agent-answer.md`) hands the same numbers back to the agent in prose
(`7 symbols`, `across 2 repositories.`). Scene 08 then quantifies the cost of
obtaining them. This scene is the hinge: the numbers on this card are the numbers
the rest of the video refers to.

## Timeline

- Storyboard coverage: **`STORYBOARD.md` SCENE 06 — BLAST RADIUS**.
  Note the numbering offset: storyboard scenes 03 and 04 collapse into the single
  component `GraphRevealScene`, so every document number from 03 onward is one
  lower than its storyboard scene number.
- Global frames: **0720–0840**
- Scene-local frames: **0000–0120**
- Time: **12.0 s – 14.0 s**
- Duration: **120 frames / 2.0 s** at 60 fps
- Remotion component: `src/scenes/BlastRadiusScene.tsx`
- Boundary source: the inline `<Sequence name="05 Blast Radius" from={720} durationInFrames={120}>`
  literal in `src/Composition.tsx`

Beats (scene-local = master − 720):

| Master      | Local       | Beat                                                                                     |
| ----------- | ----------- | ---------------------------------------------------------------------------------------- |
| `0720–0740` | `0000–0020` | `withRetry()` pulses **once**: seven frames up, thirteen down, back to zero.              |
| `0728–0752` | `0008–0032` | Hop 1. The relation lifts at 0008, `Policy.Do()` and `Once()` are marked from 0014.       |
| `0748–0772` | `0028–0052` | Hop 2, the public bridge: `Client.Charge()` and `Client.Refund()`.                        |
| `0768–0800` | `0048–0080` | Hop 3, the three `checkout-service` consumers, four frames apart.                         |
| `0775–0795` | `0055–0075` | The impact card: `opacity 0 → 1`, `x +24 → 0`, no overshoot.                              |
| `0800`      | `0080`      | Propagation complete, card settled. **Key visual frame.**                                 |
| `0814–0830` | `0094–0110` | The veil rises to `0.72` over the whole frame and holds.                                  |
| `0820–0832` | `0100–0112` | `Exact symbols. Not name matches.` fades in on it, below the card.                        |
| `0832–0840` | `0112–0120` | Hold. Nothing moves; the frame exists to be read.                                         |

Every relation lifts six frames before the node it reaches, for the reason scene
03 drew an edge before the plate at its end: the shot travels a relationship and
then shows what is at the end of it. Reversed, the node lights and the edge
explains it afterwards, which reads as highlighting rather than as propagation.
The three hop windows overlap by four frames each — separated they read as three
events, overlapped they read as one thing moving.

## Initial state

At master frame 0720 (local 0000) the frame is **visually identical** to master
frame 0719, inheriting Scene 04's camera and graph exactly:

- The settled cascade in depth: `withRetry()` nearest the camera at `z 0.0`,
  hop 1 at `-0.8`, hop 2 at `-1.9`, hop 3 at `-3.4`, every hop stepping `+x` as
  well. The camera is at rest on the pose the graph sequence ends on — the
  `lookAt` rig at eye `(7.0, 3.2, 10.0)` looking at `(8.0, 0.0, -2.4)`, its view
  direction 15° off `-Z`. Scene 04's small drift translates the whole rig and
  eases back into rest before 0720, so this scene inherits that exact pose with
  zero velocity.
- `withRetry()` accent-lit at the head of the cascade: the largest label, the
  brightest plate and the only accent in the frame.
- The three crossings, `Client.Charge()` and `Client.Refund()` at hop 2, and the
  three `checkout-service` consumers at hop 3, at full presence.
- Hop 1 — the `internal/retry` pair, `Policy.Do()` and `Once()` — dimmed, along
  with the local edges that reach them. The propagation's first step is what
  lifts them.
- Cluster labels visible: `payments-api` below the near group,
  `checkout-service` above the far one.
- No caption. Scene 04 no longer hands one over: its word is read on a veil over
  local 28–78 and is gone by master 0708, and the veil itself is back to zero by
  0718. This scene therefore inherits an undimmed, textless frame, and the card
  it introduces is the only caption in it.
- No card. No new copy.

The pulse on `withRetry()` begins on this frame.

## Final state

At master frame 0840 (local 0120, the boundary frame handed to
`SemanticScene.tsx`):

- Every affected node carries the Kivgraph accent, all the way back to the last
  hop. Unaffected structure stays neutral and suppressed.
- The 2D impact card sits in the frame's top-left, fully settled, reading
  `CHANGE IMPACT`, `7 affected symbols`, `3 dependency paths`, `2 repositories`.
- `Exact symbols. Not name matches.` sits below the card on its left edge.
- The camera has not moved at all; the graph is still, propagation finished.

Nothing is mid-animation at 0840. The next scene begins by flattening this exact
frame.

## Visual composition

**Layout.** One graph and one flat report block, and the block is **top-left**.

The storyboard puts the card on the right, and the first render is why it is not
there. The graph runs from `withRetry()` at the front of the frame back and to
the right, out to the three `checkout-service` consumers, so its weight is a
diagonal into depth — which means the right column *is* hop 3. Rendered there,
the card covered `ReconciliationJob.Run()` and the crossing arriving at
`CheckoutService.PlaceOrder()`: the two objects that are the evidence for the
numbers printed on it, in the one still that has to show the count and the
evidence together. Measured on that render, the frame has exactly one free
rectangle large enough for the card, a gap and the claim line — the top-left,
which the cascade leaves empty because it starts low and travels up and away. It
is also the `payments-api` side and the reading corner, so the report sits with
the change it is about rather than over the consumers it counts. The `x +24`
settle is kept: it is a settle, not an entrance from a frame edge. Recorded as a
deviation in `## Current compromises`.

Card at `left: 96, top: 72`; the claim line at `left: 96, top: 400`, on the
card's own left edge.

**The card.** A flat surface panel, not a floating glass object: `surfaceElevated`
`#171a1f` fill, 1px `border` `#22262b` hairline, radius 0, no shadow. Depth comes
from the surface step against the `background` `#0a0b0d` scene behind it, exactly
as the Kivgraph web does it. It lives in `src/components/MetricCard.tsx` so scene
08 can report the benchmark in the same surface language.

**Card typography.** All monospace (JetBrains Mono) — these are technical values.
`CHANGE IMPACT` as a small uppercase, letter-spaced heading in `textMuted`
`#a3a3a3`. The three value lines in `textPrimary` `#f5f5f5` at UI/Body scale
(`STORYBOARD.md` §7), one per line, numbers aligned. Weights 400/500 only.

**Card colour restraint.** The card's numbers stay neutral. Accent in this scene
is spent entirely on the propagation — the affected nodes and the edges the change
travels along. Colouring the numbers as well would double-spend the 10–15% accent
budget (`AGENTS.md` §26) and would weaken the one thing accent means here:
*this symbol is affected*.

**Graph state.** Affected node labels take accent *as text* — `accentText`
`#bfdbfe`, the same mark `withRetry()` already wears — and the edges carrying the
propagation lift toward `accent` `#2563eb`, their tube radius stepping from the
settled `0.022` back toward the resolving `0.026`; everything unaffected stays on
the neutral tokens (`graph.edgeLocal` `#4b5563` for local edges,
`graph.edgeCross` `#94a3b8` for the three crossings) at low opacity. Because a
node's affected state is the load-bearing information, it must also be visible
without colour (`AGENTS.md` §37) — through opacity and through the luminance
step, and *not* through a scale step. A node's apparent size is a consequence of
its depth, so scaling an affected node would state that it had moved to a
different hop.

**The claim line.** `Exact symbols. Not name matches.` is a narrative statement
addressed to the viewer, so it is Geist sans (the project rule: graph-attached
text is mono, viewer-addressed narrative is sans). Colour `textPrimary`
`#f5f5f5`, weight 500. It sits below the card, aligned to the card's left edge. It
may break across two lines between the two sentences to fit the column. Sized as
large as the column allows — 40 px on one line as shipped, which clears
`Client.Charge()` by 160 px, and never below the Body scale (26 px)
(`STORYBOARD.md` §7, `AGENTS.md` §37).

**Hierarchy** at 0800, strongest first:

1. the accent-marked propagation, from `withRetry()` at the front back to the
   `checkout-service` consumers;
2. `withRetry()` as its origin;
3. the impact card;
4. cluster labels;
5. suppressed unaffected structure.

## Motion

**Rhythm.** Cause, spread, count, claim. Four events in two seconds, each
distinctly separated. No two events compete for attention.

**The pulse.** `withRetry()` pulses exactly **once** at 0720 — a single short
brightness swell that returns to rest. Brightness and not scale: apparent size in
this layout is depth, and a node that swells reads for a moment as having come
closer than the change itself. It is not a loop, not a heartbeat and not an
expanding shockwave ripple — a ring expanding out of the node is doubly wrong
here, because it would draw the one shape this design deliberately removed and it
would claim a radius where the picture means depth. One pulse reads as *an event
happened here*; a loop reads as decoration and would also break the
"state = f(frame)" clarity of the scene's opening frame.

**Propagation.** Strictly ordered in time, never simultaneous, and the order is
the hops:

```text
   hop 0   withRetry                                        z  0.0
     ↓
   hop 1   Policy.Do, Once                                  z -0.8
     ↓
   hop 2   Client.Charge, Client.Refund                     z -1.9
     ↓
   hop 3   ReconciliationJob.Run, CheckoutService.PlaceOrder,
           RefundHandler.Handle                             z -3.4
```

Each step begins after the previous one is legible. The ordering is the argument:
it shows that impact was *derived*, not merely highlighted. If all affected nodes
lit at once, the scene would look like a search result — which is precisely the
thing Scene 06 exists to discredit.

The layout makes that argument self-evidencing, which is why this scene can be
brief about it. Because depth already is hop distance, lighting one hop after
another *is* the impact travelling away from the viewer, and the final step from
hop 2 to hop 3 *is* the change leaving its own repository. Neither claim needs a
device invented for it.

Propagation along an edge may be shown as a very subtle energy point travelling
the edge (`STORYBOARD.md` §12). No electricity, no lightning, no sparks, no
particles.

**The card.** `opacity 0 → 1` and `x +24 → 0` px. Explicit interpolation eased
with `Easing.bezier(0.22, 1, 0.36, 1)`. **No bounce, no overshoot** — this is a
statement of measurement, and elasticity would make it feel playful and
therefore less credible. `STORYBOARD.md` §8 permits springs for small cards, but
only heavily damped ones; because "sin rebotes" is an explicit requirement here,
prefer plain interpolation and remove the risk.

The card arrives while the propagation is reaching the remote consumers, so the
numbers read as the *result* of what the viewer just watched, not as a caption
placed in advance.

**The veil, and then the claim line.** `STORYBOARD.md` § Frase sobre el cuadro is
a project rule: a sentence addressed to the viewer is read on a darkened frame.
So the frame darkens to `0.72` over local 94–110 and the line fades in six frames
later, at 0820, after the count, because it qualifies the count. No movement on
either.

`0.72` and not scene 04's `0.86` because two things have to survive it. The
propagation is the evidence for the numbers still on screen, and the card sits
*above* the veil — it gains contrast from it instead of being dimmed by it, which
is the whole reason the veil goes between the graph and the report rather than
over everything.

The rule does not reach the card. Its three lines are graph-attached technical
values whose job is to be read against the structure behind them, and key frame
0800 has to hold the count and the evidence in one image; darkening the graph
there would take away the reason to keep the receipt. So the veil arrives 14
frames *after* that still is safely rendered.

**Camera.** Static. Scene 04 returns the rig to rest before 0720, so this scene
holds the camera exactly where it inherits it and spends its whole motion budget
on the graph. It stays the `lookAt` rig at eye `(7.0, 3.2, 10.0)` looking at
`(8.0, 0.0, -2.4)`, 15° off `-Z`, `up` world up on every frame. No orbit, no roll,
no rotation, no shake, no dolly.

**Holds.** 0800 must be still enough to export as an image. 0820–0840 is a true
hold — the frame's job there is to be read.

## Three.js

**Why 3D is necessary.** Propagation is a spatial claim: the change has to be seen
*leaving* one repository and *arriving* in another. The cascade makes that claim
with depth, which is the one thing a flat diagram cannot borrow: hop 2 sits at `z`
`-1.9` and hop 3 at `-3.4`, so the propagation's final step travels 1.5 units
further from the viewer as well as roughly eight units along `x`, and it lands on
plates that are visibly smaller, dimmer and more foreshortened than the ones it
left. A drawn distance is reproducible in SVG; this one is not.

**Topology.** Unchanged from Scene 04. Eight nodes and seven edges from
`src/data/graphDemo.ts` across four hops, with the repository split falling
exactly on the boundary between hop 2 and hop 3; three crossings, every other
edge inside `payments-api`. No node is added, moved or removed by this scene; only
visual state changes.

**Camera intent.** Hold. This scene spends its motion budget on the graph, not the
camera. The rig is held for all 120 frames, so this scene's angular variation is
zero and the 15–20° per-sequence budget (`STORYBOARD.md` §13, `AGENTS.md` §22) is
satisfied trivially rather than narrowly — Scene 03 already spent that budget
arriving at 15° off `-Z`.

**Nodes.** A node is its label on an extruded rounded plate
(`src/three/GraphNode.tsx`); the label itself is DOM text, placed by
`projectPoint` from the same camera pose the canvas uses. Affected state is accent
text plus an opacity lift. Kind is not expressed by a five-colour palette
(`STORYBOARD.md` §10), and it is not expressed by shape or scale either: every
plate shares one orientation, one corner radius and one world em, and apparent
size is depth. See `## Current compromises`.

**Edges.** Catmull-Rom tubes (`src/three/GraphEdge.tsx`), each bowed toward the
camera and slightly to one side. Tubes carrying the propagation lift to accent and
step from the settled radius `0.022` back toward the resolving `0.026`, in the hop
order given above; edges outside the blast radius stay neutral and low.

The two groups do not land on the same value, and the first render is why. Taking
every edge to full accent marked all seven at one weight, so the three crossings
— which arrive already lifted from scene 04, and which are the most important
edges in the video — became indistinguishable from the four local ones, and most
of the frame's width turned blue. A local edge therefore stops at `edgeSettle`
`0.34`: unmistakably inside the blast radius, still visibly its quieter half. A
crossing goes to `0`. One consequence of the shipped look to respect: the radial
luminance falloff sits over the geometry and under the labels, so a lit crossing
near the frame edge is crushed while its node label is not. Accent at hop 3 is
therefore carried by the labels at least as much as by the tubes — `nodeAccent`
lifts an affected label out of its shell's luminance step toward full presence,
which is what makes the far group legible at 0800.

**Repository presence.** There are no cluster meshes, no base surfaces and nothing
drawn around a group. A repository is carried by depth, by distance and by one
floating label each: `payments-api` below the near group, `checkout-service` above
the far one. Both labels carry over from Scene 04 at the presence it left them at.
A base plane was built, rendered once and deleted — correctly exposed it is a
rectangle with four corners around each cluster, which is a container, and a
repository must not be one here. Never a box (`STORYBOARD.md` §11).

**Lighting.** The graph is lit, and this scene does not touch the rig: soft
ambient, one key from above and to the camera's left, and a dim fill from behind
so a plate's far edge separates from the background instead of dissolving into it.
The pulse is therefore a change to one node's own label colour and plate
luminance — never a light animation, which would disturb the whole frame for a
local event. Any lit geometry added later stays very soft: objects should feel
like UI materialised in 3D, not physical objects.

**2D over 3D.** The impact card is DOM, composited above the R3F canvas inside the
same sequence. It is deliberately not a 3D panel: it is Kivgraph UI reporting a
result about the graph, and keeping it flat preserves that distinction.

**Deterministic animation.** All of it is `state = f(frame)` — pulse, per-node
`active`, per-edge `progress`, card `opacity`/`x` (`AGENTS.md` §17, §18, §21;
`STORYBOARD.md` §21, §22). The inherited layout comes from `getGraphState` in
`src/three/graphState.ts` over the spatial contract in
`src/three/graphFrame.ts`, sampled past the end of Scene 03's local range so it
returns the settled state and the held camera pose. The propagation is this
scene's own pure function of its own local frame, and it should live in one
readable place so the hop order can be checked without reading render code. No
`useFrame` mutation, no `Date.now()`, no unseeded randomness, no force simulation
at render time.

## Transition in

Hard sequence boundary at 0720, and it is **pixel-identical**: frames 0719 and
0720 render at PSNR = inf, not merely "visually continuous". Getting there found
an off-by-one in scene 04 — its camera drift returned to rest on scene-local 90,
a frame that scene never renders, so the last rendered frame was still 0.022 of
the way out of rest and the handoff measured 47.9 dB. Scene 04's drift now lands
on local 89 and this scene reads the settled value, so the camera is provably
still for all 120 frames.

Scene 04 handed over a frame in which the crossing was already at full presence
and everything else dimmed, which is exactly the frame this scene needs in order
to make one pulse readable. Hop 1 arrives *suppressed* — scene 04 pushed
`Policy.Do()` and `Once()` down to 0.22 to make room for the claim — so the
first step of the propagation is what brings it back. That is the one place where
presence and the affected mark move together; for every other node the mark is
carried by `nodeAccent` alone, because six of the eight are already at full
presence by the time the blast radius runs.

The first thing that changes after the cut is the pulse. Nothing enters, nothing
re-frames.

The inherited layout comes from the curve shared with Scenes 03 and 04, and that
curve is parameterised on **Scene 03's** local frame with every ramp clamped at
both ends. This scene therefore samples it at `localFrame + 390`, which is past
300 for every frame of the scene and returns exactly the settled state, while
animating the pulse, the propagation, the card and the copy in its own
scene-local frames.

Nothing trails in from Scene 04. Its caption and its veil are both back to zero
before 0719, so the pulse lands on a clean frame.

## Transition out

At 0840 `SemanticScene.tsx` takes over and the transition comes from the content
(`STORYBOARD.md` §27, *Graph → Semantic comparison*): the graph flattens and the
frame becomes a split view. The camera does not straighten up first, and it should
not: the graph sequence ends 15° off `-Z`, and the flatten resolves that oblique
view into a flat one, so what the viewer reads is a change of representation
rather than a camera move.

Consequences this scene must respect:

- the graph must be **at rest** at 0840 — a flatten applied to a still frame reads
  as a deliberate change of representation; applied to a moving frame it reads as a
  glitch;
- the accent state produced here carries into the right-hand side of the split, so
  the flatten feels like the same graph being re-presented rather than a new
  graphic appearing;
- the card and the claim line leave during the flatten as a short fade, not a wipe
  or a slide-out, and the veil under them leaves with them.
  `Exact symbols. Not name matches.` and Scene 06's `A name is not a symbol.` are
  the same argument, so the first must clear before the second lands. Exact fade
  frames are flexible; both must be gone before
  0950.

## Copy

Impact card, exactly:

```text
CHANGE IMPACT

7 affected symbols
3 dependency paths
2 repositories
```

The three value lines are not typed into the card. They are read at render time
from the `impactSummary` export in `src/data/graphDemo.ts`, which counts them off
the fixture's own nodes and derived paths. The card therefore cannot outlive the
graph it describes.

`CHANGE IMPACT` appears exactly once in the video, here. An earlier version of
`01-symbol.md` posed the same string as a small uppercase margin annotation next
to `withRetry` so that this card would read as its answer; that annotation was
removed when scene 01 dropped all explanatory text, so the callback no longer
exists and this label now has to work on its own. It does: the card is the first
and only place the video quantifies impact.

Below the card, from 0820:

```text
Exact symbols. Not name matches.
```

Inherited and still visible from earlier scenes:

```text
payments-api
checkout-service
withRetry()
```

No other text. No explanatory sentence, no legend, no sub-caption.

## Key frames

Frames to inspect manually (`STORYBOARD.md` §28):

```text
0720 — single pulse on withRetry(); frame otherwise identical to 0719
0760 — propagation mid-flight, ordering clearly readable
0800 — KEY VISUAL: full blast radius plus impact card
0830 — hold with the claim line on its veil, the graph dimmed behind it
```

**Frame 0800 is a key visual frame** (`STORYBOARD.md` §29, and `AGENTS.md`'s list
of frames that must remain intentional as stills: 0080, 0620, 0800, 0950, 1120, 1280),
earmarked for the README. It must work as a still image, which means at 0800:

- the propagation is complete and every affected node is unambiguously marked;
- the card is fully settled, not mid-entry, and all four of its lines are legible;
- the card occludes nothing: not `withRetry()`, not a crossing, not one of the
  three `checkout-service` consumers. This is why it is top-left and not in the
  right column the storyboard asks for;
- hop 3 is legible in spite of the radial falloff. This is the hardest part of the
  still: the propagation's last step lands where the falloff is strongest, on the
  smallest and dimmest plates in the frame;
- nothing is mid-fade or mid-pulse; the only softness in the frame is the code
  world still receding underneath and the falloff at the periphery;
- the image is readable when downscaled to README width.

Inspect it as an exported still, not only by scrubbing.

## Invariants

Preserve unless the creative direction is explicitly changed:

- **One pulse, not a loop.** `withRetry()` pulses exactly once at 0720. No
  repeating pulse, no heartbeat, no expanding ring.
- **Strict propagation order.** Hop 0 → hop 1 → hop 2 → hop 3; that is
  `withRetry` → its direct callers → the public bridge → the remote consumers.
  Never simultaneous, never reordered, never reversed. The order is the proof
  that impact was computed.
- **Bounded propagation.** The blast radius stops, and it stops because there is
  no hop 4. It never grows to fill the graph, and unaffected structure must
  remain visibly unaffected.
- **Depth means hop distance, so nothing moves and nothing is scaled for
  emphasis.** A node's position and apparent size are its distance from the
  change. Emphasis is accent and opacity only; moving or scaling an affected node
  would state a false hop count.
- **Nothing is drawn around anything.** No rings, no circles, no repository
  boxes, regions, containers or walls. Grouping is position, depth and light, and
  a repository is one floating label.
- **The three numbers come from the real demo dataset.** `7 affected symbols`,
  `3 dependency paths`, `2 repositories` are derived from `src/data/graphDemo.ts`
  (`STORYBOARD.md` §19, `AGENTS.md` §29) and must be read from it rather than
  hardcoded in the card. Metrics are never adjusted for visual convenience and
  never fabricated.
- **The numbers stay consistent across scenes.** `07-agent-answer.md` states
  `7 symbols` and `across 2 repositories.` from the same dataset. If the demo graph
  changes, every reference changes together: this card, Scene 07's answer text,
  and the propagation actually drawn on screen. A number on the card that the
  viewer cannot count in the graph is a defect.
- **`3 dependency paths` and Scene 06's `3 real relationships` are different
  quantities.** They must not be conflated, unified or "corrected" into each
  other by a future edit.
- **Accent marks only affected nodes and the edges the change travels.** Never
  decoration, never the card's numbers, never unaffected structure.
- **No bounce on the card.** `opacity 0 → 1`, `x +24 → 0`, no overshoot,
  no elastic easing.
- **The claim line is exact.** `Exact symbols. Not name matches.` — two sentences,
  that punctuation. It is one of the video's five allowed phrases
  (`STORYBOARD.md` §32).
- **Readable without audio and in a small embedded player.** The tick sequence
  suggested in `STORYBOARD.md` §18 may reinforce the propagation steps but must
  never be required to understand them.
- **Frame 0800 works as a still image.**

## Flexible elements

Safe to change without altering the scene's purpose:

- exact frames of the card's entry, provided it begins no earlier than the
  propagation being visibly under way and is fully settled before 0799;
- exact card dimensions, padding and line spacing;
- exact card position within the right side of the frame, subject to not
  occluding the three evidence objects and to sitting over the far end of the
  cascade quietly;
- exact scale of `Exact symbols. Not name matches.` and whether it sets on one or
  two lines;
- exact easing, as long as it stays non-elastic;
- exact per-step propagation durations and the small gaps between steps, as long
  as the order stays unambiguous and the propagation completes by 0800;
- exact opacity floor for unaffected structure;
- whether a subtle energy point travels each activating edge;
- whether the card's entry overlaps the last hop of the propagation.

## Technical notes

- Component: `src/scenes/BlastRadiusScene.tsx`.
- Global scene boundaries live only as inline `<Sequence>` literals in
  `src/Composition.tsx` (`from={720}`, `durationInFrames={120}`), so Remotion
  Studio can trim them. There is no timing module; do not introduce one and do not
  restate 720/840 inside the scene. The scene animates in scene-local frames, and
  offsets to absolute frames only where it samples the graph curve shared with
  Scenes 03 and 04.
- The card belongs in `src/components/MetricCard.tsx` (`AGENTS.md` §4, §31) so
  Scene 08 can reuse the same surface language for benchmark values, and the card
  plus the claim line under it are composed by
  `src/components/ImpactReport.tsx`, which this scene and Scene 06 both draw.
  Scene 06 inherits the whole block at 0840 and fades it out during the flatten,
  so the two scenes have to render it identically; the first version had this
  scene own the markup, Scene 06 simply not draw it, and the 0839/0840 seam
  measured 22 dB PSNR. It is now pixel-identical.
- Rendering pieces involved: `src/scenes/GraphRevealScene.tsx` is the reference
  implementation of this graph — extruded plates from `src/three/GraphNode.tsx`,
  Catmull-Rom tubes from `src/three/GraphEdge.tsx`, the camera pose written by
  `src/three/CameraRig.tsx`, every label DOM text placed by
  `src/three/projection.ts` — over `src/three/graphState.ts` (choreography) and
  `src/three/graphFrame.ts` (the one world em, the plate box, the `shellLook`
  ladder, the edge radii). The lighting rig is three lights inside
  `GraphRevealScene.tsx`. There is no `KivgraphScene`, `RepositoryCluster`,
  `RepositoryLabel` or `GraphLighting` component; `RepositoryCluster.tsx` existed
  and was deleted, and nothing should reintroduce it.
- Data: `src/data/graphDemo.ts`, static and deterministic. The three card values
  come from its `impactSummary` export (affected symbol count, distinct
  dependency paths, distinct repositories touched) rather than from literals in
  the card, so the card cannot drift from the graph it describes.
- Tokens: `src/brand/tokens.ts`. Fonts: `src/brand/fonts.ts` (`"Geist"`,
  `"JetBrains Mono"`). Fonts load deterministically from `public/fonts/*.woff2`; late
  loading must not reflow the card, which would show up as a visible jump on a
  key frame.
- Compositing a DOM card over an R3F canvas inside one Remotion sequence:
  the canvas and the DOM layer must share the same stacking context, and the card
  must not force a canvas resize at its entry frame.
- Performance: the propagation changes accent and opacity on eight DOM labels,
  eight plates and seven tubes. Labels cost nothing per node; the plates and
  tubes are real geometry rebuilt per frame, which is cheap at this count, and
  per-edge accent means each tube carries its own material. Avoid stacked
  postprocessing (`AGENTS.md` §35, §36).
- Iterate with Remotion Studio plus a small range render over roughly 0710–0850;
  scrub forward, backward, forward and confirm 0800 renders identically each time
  (`AGENTS.md` §40).

## Current compromises

- **The card is not where the storyboard puts it.** `STORYBOARD.md` SCENE 06 says
  the card appears on the right. It is top-left, because the right column is hop
  3 and the card covered `ReconciliationJob.Run()` and the crossing into
  `CheckoutService.PlaceOrder()` when it was rendered there — see
  `## Visual composition`. The storyboard has been reconciled rather than
  contradicted, but the position is the storyboard's to overrule: if the card
  must be on the right, the honest resolution is to move the *graph*, which is a
  layout-search change in `graphDemo.ts` affecting scenes 03 to 06, not to shrink
  the card until it fits between two labels.
- **The claim line is one line, not two.** `STORYBOARD.md` renders it as a large
  heading; at 40 px it fits on one line here and clears `Client.Charge()` by 160
  px and `Policy.Do()` by ninety. A two-line version was tried first and put its
  second line against `Policy.Do()`'s plate. It carries `nowrap`, because a late
  font load that widened the line by 5% would otherwise reflow it into the graph.
- **The dataset exists and the count is settled at seven.** This used to be the
  scene's most important open item. `STORYBOARD.md` illustrated the propagation
  with symbol names that could not compile — `withRetry` is unexported, so nothing
  outside `package retry` can call it, and Go's `internal/` rule stops
  `checkout-service` importing `payments-api/internal/...` at all — plus an
  unnamed remote consumer, which did not add up to a countable total.
  `graphDemo.ts` now settles it with eight named nodes and no anonymous one: the
  selected `withRetry()` in `internal/retry`; its two in-package direct callers
  `Policy.Do()` and `Once()`; the public bridge `Client.Charge()` and
  `Client.Refund()` in `payments-api/paymentService`, which is how the impact
  legally leaves the `internal/` tree; and three leaves in `checkout-service` —
  `CheckoutService.PlaceOrder()`, `ReconciliationJob.Run()` and
  `RefundHandler.Handle()`. That is seven affected symbols, three dependency
  paths and two repositories, every node labelled on screen. `withRetry()` itself
  is not one of the seven — it is the selected symbol, counted on its own. The
  three paths are
  `withRetry → Policy.Do → Client.Charge → CheckoutService.PlaceOrder`,
  `withRetry → Policy.Do → Client.Charge → ReconciliationJob.Run` and
  `withRetry → Once → Client.Refund → RefundHandler.Handle`. Scenes 03, 04, 05
  and 07 share these labels; none of them may reintroduce an unlabelled node.
- **The digit `3` means three different things in this dataset**, which is why
  the card's line is worded `3 dependency paths` and nothing else. Re-checked
  against `impactSummary` in `src/data/graphDemo.ts`: `affected` is 7 (the eight
  nodes minus the selected one), `paths` is 3 (`impactPaths` walks the two routes
  through `Client.Charge()` plus the one through `Client.Refund()`) and
  `repositories` is 2 — so all three printed values are exact and derived. But
  only **two** edges touch `withRetry()` directly, and exactly **three** edges
  cross between repositories, so a future edit reading "3" off the picture can
  land on the wrong quantity. Scene 06's `3 real relationships` is the counter
  the fixture does not support; that discrepancy is recorded in
  `06-semantic-resolution.md` and is not resolved here.
- **Card entry frames are not specified by the storyboard.** It gives the motion
  (`opacity 0 → 1`, `x +24 → 0`) and the position (right) but no timing. The
  0775–0795 window in `## Timeline` is this document's proposal, constrained only
  by the invariant that the card is settled before key frame 0800.
- **The size of `Exact symbols. Not name matches.` is an unresolved tension.**
  `STORYBOARD.md` renders it as a large heading, but it is specified to sit below a
  right-side card, where Heading scale may not fit. Resolution here: as large as
  the column allows, never below Body scale, two lines permitted. Revisit once the
  card's real dimensions exist.
- **Node-kind colour is a narrower open decision than it was**, shared with
  `03-graph-reveal.md` and `04-cross-repo.md`: `tokens.ts` ships four graph kind
  colours while `STORYBOARD.md` §10 refuses a five-colour node palette and asks
  for shape and scale differentiation instead. Shape exists again now that nodes
  are plates, but it is deliberately not spent on kind: every plate shares one
  orientation, one corner radius and one em, because a common surface reads as one
  material in one space while per-kind shapes read as scattered cards. Scale is
  not available at all — apparent size is depth. What is left is state is colour,
  and kind is legible from the label itself and from the package its hop sits in.
- **Sound is absent.** The `tick tick tick` blast-radius sequence in
  `STORYBOARD.md` §18 is not specified in detail and is not required.
- **The card's clear space is now measured, and it cost the storyboard's
  position.** The cascade runs toward the right of the frame, so hop 3 lands
  exactly where the storyboard puts the card. Rendered there it covered
  `ReconciliationJob.Run()` and the crossing into `CheckoutService.PlaceOrder()`,
  so the card moved to the top-left — the frame's only free rectangle large
  enough for the card, a gap and the claim line. The occlusion constraint won
  over the position, which is the order this document already put them in, but
  the position was the storyboard's and overruling it is recorded above rather
  than absorbed.

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
- Scene 02 (Problem / Not Alone) was deleted; its widen-and-dim folded into the
  opening of the agent scene. This document is renumbered 06 → 05 and now
  realises storyboard SCENE 06. Every master frame moved −120: the scene spans
  0810–0930 (13.5 s – 15.5 s) and its key visual frame is 0890. Beats,
  durations and scene-local frames are unchanged.
```

```text
2026-08-23
- Scene 01 was shortened from 210 to 120 frames; its staggered beats now resolve
  together. Every master frame in this document moved −90: the scene spans
  0720–0840 (12.0 s – 14.0 s) and its key visual frame is 0800. The master is now
  1410 frames (23.5 s). Beats, durations and scene-local frames are unchanged.
```

```text
2026-08-23
- Retopologised against the implemented `graphDemo.ts`: the card now reads
  `7 affected symbols`, and the propagation runs through eight named nodes with
  no unnamed remote consumer. `retryPayment` and `paymentWorker` never existed in
  a legal call chain and are gone. `3 dependency paths` and `2 repositories` are
  unchanged, as are all frame numbers.
  Scene 04's 0720 handoff was re-lit at the same time: it now hands over the
  crossing at full presence with the `internal/retry` interior dimmed, so this
  scene's continuity bullets and occlusion list name those objects instead of a
  single source/edge/consumer triple.
```

```text
2026-08-23
- Corrected for the shipped Scene 03 redesign. The graph is concentric shells
  around `withRetry()`, not two lateral clusters, so the inherited frame,
  layout, hierarchy, topology, propagation diagram and invariants now speak of
  an inner disc (shells 0-2, `payments-api`), an outer ring (shell 3,
  `checkout-service`) and crossings that run outward from shell 2.
- The scene's argument got shorter rather than longer: radius already is hop
  distance, so propagation is literally the radius growing and the last hop is
  literally the change leaving its repository. Boundedness is now stated as
  "there is no shell 4", and a new invariant forbids moving or scaling anything
  for emphasis, because position and apparent size already mean hop count.
- Camera: static. Scene 04 now settles its lateral drift before 0720, so there
  is nothing to continue and nothing to settle here. The flatten into Scene 06
  no longer "returns to frontal" — the camera never left frontal.
- Grounded against the implementation: the affected mark is `accentText`
  `#bfdbfe` on a label rather than a fill on a plate, the pulse is brightness
  rather than scale, there are no lit surfaces and no cluster base surfaces, the
  shared curve is sampled at `localFrame + 390` in Scene 03's local frames, and
  the renderer component list was replaced with the files that ship.
- Frames, beats, durations, scene boundaries, the three card numbers and every
  visible string are unchanged.
```

```text
2026-08-23
- Corrected again for the shipped Scene 03: the concentric shells are gone.
  Layout is a cascade in depth - each hop steps +x and -z - so the inherited
  frame, layout, hierarchy, topology, propagation diagram, key-frame checklist
  and invariants now speak of hops at z 0.0 / -0.8 / -1.9 / -3.4 instead of an
  inner disc, an outer ring, 300/520/720 px screen radii and ring strokes.
- The blast radius is no longer described as a drawn radius. It is hop distance
  read as depth: the propagation fills the frame front to back, and the last
  step is the change leaving its repository because that hop is another 1.5
  units from the camera and a different codebase, not because it crosses a
  circle. A new invariant states that nothing is drawn around anything, which is
  the opposite of what this document used to require.
- Camera: the rig is a lookAt pair - eye and target - held at (7.0, 3.2, 10.0)
  looking at (8.0, 0.0, -2.4), 15 degrees off -Z, up world up. Scene 04 confirms
  it returns that exact pose at rest at 0720. The flatten into Scene 06 no
  longer "returns to frontal": the shot never was frontal, and the flatten
  resolves the oblique view instead.
- Grounded against the implementation: nodes are extruded plates carrying DOM
  labels, edges are Catmull-Rom tubes at radius 0.026 resolving and 0.022
  settled, there is a real three-light rig, and there is no repository geometry
  of any kind - RepositoryCluster.tsx was deleted. Removed the per-shell blur
  ladder, the `edgeContainment` ring stroke, the screen-radius numbers, the
  "band of shells" reading of a repository and the spoke vocabulary; the only
  radial device left is the frame's own luminance falloff.
- Counters re-checked against `impactSummary`: affected 7, paths 3,
  repositories 2, every one derived rather than authored. Recorded in
  `## Current compromises` that the digit 3 carries three different meanings in
  this dataset, and that Scene 06's `3 real relationships` is the counter the
  fixture does not support.
- Frames, beats, durations, scene boundaries, the three card numbers and every
  visible string are unchanged.
```

```text
2026-08-24
- Implemented. `src/scenes/BlastRadiusScene.tsx`, `src/three/blastState.ts` and
  `src/components/MetricCard.tsx`; mounted at `mountedFrames = 840` with
  `premountFor={30}`.
- `GraphVisualState` gained `nodeAccent` and `pulse`. The affected mark had to be
  its own channel: six of the eight nodes are already at full presence when the
  blast radius runs, so presence had nothing left to raise.
- The card is top-left, not in the right column. Rendered on the right it covered
  `ReconciliationJob.Run()` and the crossing into `CheckoutService.PlaceOrder()`,
  which are the evidence for its own numbers. Deviation from `STORYBOARD.md`
  SCENE 06, reconciled there.
- Local edges stop at `edgeSettle` 0.34 instead of 0. Taking all seven to full
  accent flattened the three crossings into the four local edges and turned most
  of the frame blue.
- Found and fixed an off-by-one in scene 04: its drift returned to rest on local
  90, a frame it never renders. 0719 and 0720 are now pixel-identical.
```
