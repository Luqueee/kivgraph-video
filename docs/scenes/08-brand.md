# Scene 08 — Brand

## Purpose

This scene attaches everything the viewer just understood to the name.

For twenty-two seconds the video has been about a behaviour: code that
looked isolated, relationships that were real, a boundary that was crossed, an
impact that was computed, an answer that was cheap and correct. None of that is
attached to an identity yet. The name itself has already been glimpsed once, in
the agent scene's tool line at master frame `0270` (`kivgraph /
get_blast_radius`), but only as the name of a tool being called. This is the
narrative step `Kivgraph` in `STORYBOARD.md` §3 — the moment the concept acquires
a mark and a lockup rather than only a call site.

It is placed after the benchmark rather than before it on purpose. Showing the
logo first would make the video an advertisement with a demonstration attached.
Showing it last makes the name the conclusion of an argument.

The convergence animation exists for one reason: to carry the video's own visual
language — relationships arriving at a symbol — into the lockup, so the brand
reads as a consequence of the story rather than a card pasted onto the end.

## Viewer takeaway

> The thing that does all of that is called Kivgraph.

Secondary, from the tagline: it is for coding agents, and its claim is exactness.

## Narrative context

Immediately before: `07-benchmark.md` has stated four measured facts and faded
out over `1348`–`1360`. Per `STORYBOARD.md` §27 the metrics-to-logo path is
`fade → silence → brand reveal`, and scene 07 now hands that silence over
explicitly: its last rendered frame `1359` is one frame short of black, so the
black is this scene's own opening ten frames.

Immediately after: `09-outro.md` gives the viewer one action. This scene must
therefore end on a frame the outro can build on rather than one that has to be
cleared away.

## Timeline

Storyboard source: `STORYBOARD.md` SCENE 10 — BRAND REVEAL.

The storyboard scene number runs two ahead of the document number from
`04-blast-radius.md` onward, because storyboard SCENE 03 and SCENE 04 are
implemented as a single component and storyboard SCENE 05 — CROSS-REPOSITORY was
cut from the film. Storyboard SCENE 10 is document 08. See
`docs/scenes/README.md`.

- Global frames: `1360`–`1530`
- Scene-local frames: `0000`–`0170` (last rendered frame `0169` / master `1529`)
- Time: 22.67 s – 25.5 s
- Duration: 170 frames / 2.83 s at 60 fps
- Remotion component: `src/scenes/BrandScene.tsx`

Beats, all fixed by the storyboard. Only the hold at the end changed when the
scene grew from the drafted 90 frames to 170: everything still arrives on the
frame the storyboard names, and the scene then stands for 90 frames rather than
ten.

Beats:

| Master        | Local         | Beat                                                     |
| ------------- | ------------- | -------------------------------------------------------- |
| `1360`        | `0000`        | Everything is gone. Black. Intentional silence.           |
| `1370`        | `0010`        | A single node appears.                                    |
| `1370`–`1410` | `0010`–`0050` | Thin lines arrive from outside the frame toward that node. |
| `1400`–`1430` | `0040`–`0070` | The relationships converge.                               |
| `1430`        | `0070`        | `kivgraph` reads.                                         |
| `1440`        | `0080`        | `Exact code intelligence for coding agents.` reads.        |
| `1440`–`1530` | `0080`–`0170` | Settled. Nothing moves.                                   |

## Initial state

At `1360` the frame is empty and dark: `background` `#0a0b0d`, edge to edge.
Nothing else. The ten frames from `1360` to `1370` are deliberately empty — this
is the `silence` in the §27 transition and it is doing work. It separates
measurement from identity.

The storyboard says *negro*. Use the brand background `#0a0b0d`, not pure
`#000000`. A drop to true black and a return to `#0a0b0d` for the outro would
read as a levels change on OLED displays and on aggressively compressed embedded
players, which is a technical artefact, not a creative beat.

## Final state

At `1529` the frame holds the settled Kivgraph lockup and its tagline, centred
on `x = 960`:

- the mark and the wordmark, complete, and the mark back at `0°`;
- `Exact code intelligence for coding agents.` beneath;
- the convergence lines fully resolved — they dim out, and no fragment of them
  survives past `1424`, twenty-five frames before this;
- nothing in motion.

This frame is the poster candidate for the whole piece and must be exportable as
a still with nothing mid-transition in it.

## Visual composition

Centred, symmetrical, almost empty.

The single node at `1370` **is the mark itself**, at the centre line of the
frame. Everything the relationships arrive at is the logo; nothing is drawn that
has to be cleared away for the logo to appear.

Which mark was the scene's largest open question, and it is now resolved: **the
shipped raster mark**, the one that is the favicon, the app icon and the icon an
MCP client shows. Kivgraph has two real marks and this document used to name
only the other one. The web header lockup —
`kivgraph/landing/src/components/landing/TopBar.astro`, an 8 × 8 px
`bg-graph-repository` `#2563eb` square beside the lowercase mono wordmark — is
real and is still what the site draws. The raster is what the product is
recognised by everywhere the site is not, and it is what this scene resolves to.

The consequences are not cosmetic and are recorded in the compromises below
rather than absorbed quietly. The mark carries no `accent`, so the film has no
brand blue on screen at all after `1430`. It carries an off-white `#e9e2dc` and
a teal `#56818a`, neither of which is in `src/brand/tokens.ts`, so the logo is
the one surface in the film that does not come out of the tokens. And the
scene's original argument — that the node and the mark are the same square, so
no logo had to be invented — no longer holds.

What the scene falls back to is what the storyboard says literally, and it is a
better fit than the argument it replaced. SCENE 10: *«No hacer literalmente un
grafo como logo si no corresponde con el logotipo actual. La animación
simplemente sirve como transición.»* Converging on the real logotype obeys that
sentence more exactly than converging on a square ever did — the convergence is
the transition, and the thing it delivers is the mark the product actually
ships.

The arriving lines are thin — `1.8 px` while travelling, `1.1 px` once landed —
straight, in `edgeCross` `#94a3b8` and `edgeLocal` `#4b5563` at low opacity, the
same edge vocabulary used by the graph scenes and not a new one. Five of them,
entering from distinct directions beyond the frame edge, matching the storyboard
sketch:

```text
↘
 → ● ←
↗
```

The wordmark is `JetBrains Mono` in `textPrimary` `#f5f5f5`. The tagline is beneath
it in `textSecondary` `#d4d4d4` at the body-to-heading range (26–52 px). The
tagline is prose, which is `AGENTS.md` §27's case for the brand sans (`Geist`);
the wordmark is not prose and stays mono. Weights 400 and 500 only. Radius 0
everywhere; no shadows.

Accent `#2563eb` now appears **only** on the arriving relationships, and only
while they are arriving. Nothing else in the frame is blue and nothing is blue at
all once the lines are gone. That is a direct consequence of the mark decision,
and `STORYBOARD.md` §12 is what makes it legible rather than a loss: *«El accent
se gasta en establecer la relación, no en tenerla»*. Each line arrives in
`accent`, turns neutral as it lands, and leaves. The last accent in the film is
spent on a relationship being established, which is the only thing the accent is
ever supposed to mean.

Each line also carries a **trail** while it travels — a glow behind its head that
is extinguished as it lands. That is an override of the storyboard and of
`AGENTS.md`, on direct art direction, and it is recorded in the compromises
below.

Content stays centred so 1:1, 4:5, and 9:16 variants remain possible later
(`STORYBOARD.md` §2).

## Motion

Three gestures: arrival, convergence, naming.

**Arrival (`1370`–`1410`).** Each line is drawn from outside the frame toward the
node as a progress value `0 → 1` along its own path, staggered so they do not all
land together. Even speed, controlled easing, no acceleration flourish.

As built, *even speed* is literal and is enforced by construction rather than
asserted. The draw is linear — no easing at all — at a single constant
`30 px/frame` shared by all five lines, so each line's **duration** is derived
from its own length instead of being written down. Change an angle and the timing
follows it. The five start at scene-local `0012`, `0010`, `0011`, `0019` and
`0028` and land at `0036`, `0043`, `0047`, `0052` and `0056`, which is master
`1370`–`1416`.

Each line carries a **trail**: a halo behind its head, brightest at the head and
gone `230 px` behind it, wider than the line's own core. It is not the *punto de
energía muy sutil* §12 permits; it is more than that, on direct art direction,
and it is recorded as an override in the compromises below. What it is not is
electricity, sparks or particles: nothing is emitted and nothing is simulated,
and there is no bloom pass anywhere in the render.

**Convergence (`1400`–`1430`).** The lines complete, meet at the node, and then
resolve. Three things happen together over the last twelve frames of each line's
travel, and they are one gesture rather than three: the colour goes `accent` →
neutral, the core thins from `1.8 px` to `1.1 px`, and the trail is extinguished.
That is `STORYBOARD.md` §12 exactly — the accent and the glow are spent
establishing the relationship, and a relationship that has landed has neither.

All five then leave together over local `0058`–`0068`, rather than each leaving
after its own landing: a staggered exit would restate the arrival backwards and
there would never be a frame with the complete figure in it. The last line lands
at `0056`, so `1416`–`1418` is the complete figure, measured byte-identical for
three frames. Measured, no line fragment survives past `1424` — four frames
inside the requirement.

The node takes one settle, on its own entrance — scale `0.86 → 1` over local
`0009`–`0019`. The storyboard permits a second small settle as the lines land and
it was not taken: that plus the turn below would be two gestures on the mark in
the same ten frames.

**Naming (`1430` and `1440`).** The wordmark appears beneath the mark, then the
tagline. Both by opacity with a minimal upward settle. The wordmark does not type
itself in, does not assemble from fragments, and does not slide.

**The turn (`1420`–`1436`).** One full revolution of the mark, starting with the
wordmark's entrance and concluding sixteen frames later. It is an override, on
direct art direction, of this document's own sentence that the naming is the one
moment in the video that must feel inevitable rather than animated, and of
`AGENTS.md`'s *avoid dramatic spins*. It is recorded in the compromises below.

**Its end frame is the constraint and is not negotiable by a later edit.** `1440`
is a still-image key frame; a logo caught mid-rotation there is an unusable
poster. Ending at `1436` leaves the frame static from `1438`, which is where it
was static before the turn existed. It is a single turn that stops. It is never a
loop, and nothing turns after `1436` — scene 09 renders the lockup at `0°`.

Storyboard frame numbers mark when a beat **reads**, not when its ramp starts.
This is a hard constraint here, because `1440` is a designated still-image key
frame in `AGENTS.md`. The tagline's entrance must therefore *conclude* at
`1440`, not begin there, and every line must be fully resolved before `1430`. If
anything is still moving at `1440`, the key frame is unusable.

Nothing moves between `1440` and `1530`. Measured, the frame is actually static
from `1438` — the entrance easing is within one 255th of its final value two
frames before its nominal end — so `1438`–`1529` is one image repeated ninety-two
times.

## Three.js

**Used, for the arriving relationships only, and it is an override rather than a
derivation.**

`@react-three/fiber` + `@remotion/three`, in `src/three/BrandTrail.tsx`. Five
quads, one shared geometry, one shader program, five sets of uniforms. It exists
because the trails were asked for directly, and the honest record is that the
project's own rules argue against it: `AGENTS.md` holds that Three.js explains
Kivgraph's structure and *is not decorative*, and five lines converging on a logo
explain nothing the viewer has not already understood by `1360`.

**The lockup is not in the canvas.** That part of the 2D argument was not
overridden and must not be: the mark has to hold its exact screen position across
`1530` into a DOM scene 09, and matching a projected 3D position to a DOM layout
across a scene boundary is the continuity risk `AGENTS.md` warns about — it
produces a mark that shifts a pixel at a scene change, which reads as a rendering
fault in the last two seconds of the film. `BrandLogo` stays DOM. Only the lines
moved into R3F, and the proof that the split worked is that the settled frame
`1440` came out of the canvas build byte-identical to the render from before the
canvas existed. It moved later, by a few levels on the mark's antialiased edges,
and for an unrelated reason — see the determinism note in `## Technical notes`.

What the exception does **not** extend to:

- **no postprocessing.** No bloom pass, and `postprocessing` is not a dependency
  — it was installed, measured and removed once already, and its final pass
  re-encodes an already-sRGB render. The glow is per-fragment inside each line's
  own material, so nothing downstream of the render touches the frame.
- **no particles, sparks or lightning.** The trail is a falloff behind the head
  of a line that is being drawn. Nothing is emitted and nothing is simulated.
- **no `uTime`.** Every uniform is a function of `useCurrentFrame()`, passed down
  as a prop. No `useFrame`, no clock, no seeded drift. A trail shader is exactly
  the kind of effect that invites a time uniform; this one does not have one.
- **no camera.** Orthographic at `zoom: 1`, so one world unit is one frame pixel
  and the line geometry is the same screen-space arithmetic it was in 2D. It
  never moves — no orbit, no dolly, no parallax, because there is no depth here
  to reveal.
- **no lighting and no materials in the physical sense.** One `ShaderMaterial`,
  flat and unlit. This is UI materialised, not a physical object
  (`STORYBOARD.md` §14). A logo with a highlight on it is not a logo.

Canvas settings follow `GraphWorld` exactly: tone mapping off, sRGB out. R3F
defaults to ACES Filmic, this frame lives in the bottom of the range where ACES
compresses hardest, and the video is authored in sRGB from
`src/brand/tokens.ts`.

The scene mounts a canvas, so its `<Sequence>` carries `premountFor={30}` like
the graph scenes. It matters less here than anywhere else in the film and that is
worth knowing rather than rediscovering: the scene opens on ten deliberately
empty frames, so played forward the context has ten frames to warm before the
first line is drawn at `1370`. The premount is for the scrubber, not for the
playthrough, and as always it is gated on `!isRendering`, so no rendered frame
changes. `postmountFor` becomes due the moment scene 09 exists.

The 2D build this replaced was an inline SVG with `stroke-dasharray` progress. It
is worth knowing why it was not simply kept for the lines as well: a 1 px core
drawn as a shader gradient lands between fragment centres and renders as nothing,
which MSAA does not fix because it antialiases geometry edges and this edge is
inside the shader. The shader therefore antialiases analytically, in pixels. The
browser's own path antialiasing had been doing that for free.

## Transition in

`STORYBOARD.md` §27: `fade → silence → brand reveal`.

`07-benchmark.md` fades its four statements out together over `1348`–`1360`,
landing on an empty frame at `1360`. Its last rendered frame is `1359`, one frame
short of black, so scene 07 does not render the silence itself — it hands it over.
This scene then holds that emptiness for ten frames, scene-local `0000`–`0010` /
master `1360`–`1370`, before the node appears at `1370`.

The silence belongs to this scene. It is ten frames this scene owns and renders,
not a hole in the timeline and not a gap between two Sequences: `BrandScene`
mounts at `1360` and paints the brand background across them.

Those ten frames are the transition. They are not dead air and must not be
shortened to "tighten the pacing" — the reveal only lands because the frame was
emptied first.

## Transition out

At `1530` the composition continues into `09-outro.md`.

**Derived continuity decision, not literal in the storyboard, and now built that
way.** The lockup stays on screen across the `1530` boundary, in the same
position and at the same scale, and `09-outro.md` composes the integrations and
the CTA around it. The storyboard does not state this, but SCENE 11 asks the
final hold to let the viewer *remember the name* and *locate the URL*, which
requires the name to still be there. A version where the lockup exits at `1530`
and the outro is only integrations plus a URL loses the name at exactly the
moment it is meant to stick.

The decision is no longer open: `src/components/BrandLogo.tsx` exists and owns
the lockup and its position, and it was authored to the outro's column rather
than to this scene's own frame. The mark's centre is `960, 360` — the vertical
centre line at the upper third — because scene 09's full column is what has to
end up optically centred. This scene therefore settles about 80 px above centre,
and that is deliberate. It is the same compromise `STORYBOARD.md` §29 records for
the `1190` still, with the same instruction: a still that needs optical centring
is cropped, not re-laid-out, because re-laying it out would move a mark that is
required to be motionless.

Consequences the implementation must honour:

- there is no fade or cut at `1530` — the lockup simply does not move;
- the lockup's screen position is a shared constant between `BrandScene` and
  `OutroScene`, and it is chosen with the outro's layout already in mind, so the
  mark may sit above centre rather than at the exact centre of the frame;
- nothing about the mark animates at the boundary.

This is recorded as an open decision in `## Current compromises` and mirrored in
`09-outro.md`. Both documents must agree.

## Copy

Verbatim:

```text
kivgraph
```

```text
Exact code intelligence for coding agents.
```

The tagline is one of the five high-priority phrases in `STORYBOARD.md` §32 and
is the video's closing message (§4). The full stop belongs to it.

**The wordmark is lowercase, and this was decided rather than inherited.**
`STORYBOARD.md` SCENE 10 wrote `Kivgraph`; the real lockup is the lowercase mono
`kivgraph`, and both `TopBar.astro` and `Footer.astro` set it that way. The real
lockup won, so per `AGENTS.md` the storyboard was updated in the same task and
now reads `kivgraph`.

The deciding argument was not fidelity but the film's own consistency. The video
already carries both forms under a rule: prose takes the capital — `Answered with
Kivgraph`, scene 06's attribution — and an identifier takes the lowercase — the
`kivgraph` column head of scene 07's table. The match cut at `1149`/`1150` hands
the word from one register to the other. So a lowercase reveal rhymes with the
column head the viewer read 200 frames earlier; a capitalised one would have
introduced a third register in the last shot.

No other text. No `by`, no version, no slogan, no `Get started`.

## Key frames

```text
frame 1360 — empty frame; the intentional silence
frame 1410 — relationships mid-arrival, converging on the mark
frame 1440 — complete lockup plus tagline, fully settled; STILL-IMAGE KEY FRAME
frame 1529 — unchanged from 1440; the frame the outro inherits, after ninety
            frames of holding it
```

`1440` is on `AGENTS.md`'s still-image key frame list and `STORYBOARD.md` §28's
must-work-as-a-still list. It is the brand still for landing page, README,
social, and thumbnail use, and it is the most likely single frame from this video
to be seen outside the video. Export it as a PNG and inspect it; do not rely on
the Studio scrubber.

`1360`, `1410`, and `1440` are all on the manual review list in
`STORYBOARD.md` §28.

## Invariants

- **Do not fabricate a graph-shaped logo that does not correspond to the real
  logotype.** The convergence is a transition, not a logo. The frame resolves to
  a mark Kivgraph actually ships, and to nothing else. A pretty node-and-edge
  glyph left standing as if it were the brand mark is the single worst failure
  this scene can produce.
- **The mark is an asset, not a drawing.** It comes from
  `public/brand/kivgraph-mark.png`, which is derived from the shipped raster.
  Nothing in this scene draws a logo, approximates one, or retouches one, and if
  the shipped mark changes the asset is regenerated rather than nudged.
- **The lockup is DOM.** Not in the R3F canvas, at any point, for any reason. Its
  screen position has to survive the `1530` boundary into a DOM scene 09, and a
  projected 3D position cannot guarantee that.
- The arriving lines are gone by the time the wordmark is on screen — measured,
  no fragment survives past `1424`. They never remain as part of the mark, and
  they never touch it: they stop at a radius clear of the glyph, because a line
  that met the logo would draw it as a junction in a diagram.
- **The turn ends by `1436`.** Whatever its shape, the mark is motionless before
  `1438`. `1440` is a still-image key frame and a logo caught mid-rotation there
  is an unusable poster.
- **One turn, and it stops.** Never a loop, never a second revolution, and
  nothing turns after `1436` — scene 09 inherits the mark at `0°`.
- The mark is what the relationships converged on. Whatever else changes, the
  thing at the centre at `1370` and the thing in the lockup at `1529` are the
  same object at the same position — it never cross-fades into a different one.
- Frame `1440` works as a still image: complete lockup, complete tagline, nothing
  mid-animation.
- The frame is static from `1440` to `1530`.
- The `1360`–`1370` emptiness is preserved.
- No orbit, no camera spin, no floating, no looping pulse, no glow build-up, no
  particles, no lens flare (`AGENTS.md` §19, `STORYBOARD.md` §30).
- Accent `#2563eb` is confined to the arriving relationships, and leaves with
  them. Nothing else in this scene is blue, and nothing is added later to "put
  the brand colour back" — the mark is the brand and it is not blue.
- The off-white and the teal of the mark belong to the mark. No other element in
  this scene or in `09-outro.md` may borrow them; everything that is not the logo
  comes from `src/brand/tokens.ts`.
- **No postprocessing.** No bloom pass, no `postprocessing` dependency. The glow
  is inside each line's own material and nothing downstream of the render touches
  the frame.
- **No `uTime` and no `useFrame`.** Every shader uniform is a function of
  `useCurrentFrame()`.
- The scene works muted. Per `STORYBOARD.md` §17 the whole video must, and this
  scene is the one most tempted to lean on an audio hit.
- The tagline text is exact and unaccompanied. No second line of marketing is
  added beneath it.

## Flexible elements

Still flexible, with what was chosen recorded so the next change is a decision
rather than a rediscovery:

- The number of arriving lines (four to six), their entry angles, and their
  stagger. **Built: five** — three from the left, two from the right, none
  vertical, which keeps the figure from reading as a compass rose. The angles are
  constants in `BrandScene.tsx`; the start points and durations are derived from
  them.
- Whether the lines are straight or gently curved. **Built: straight.**
- The trail's length and falloff. **Built: `230 px` behind the head, falling as
  `pow(t, 2.5)`, on a halo `16 px` wide against a core of `1.8 px`.** Chosen
  against the rendered frame. This is the parameter to reach for if the effect
  needs to be louder or quieter; do not reach for a bloom pass.
- Whether the lines dim out or retract into the mark. **Built: they dim,
  together.**
- The mark's size on screen and the wordmark's size relative to it. **Built: the
  mark 120 px tall, the wordmark 72 px** — the mark at 1.7× the wordmark, which
  is the proportion an app icon has over its own name. The mark is larger than
  the 8 × 8 web square would scale to and has to be: the square is solid and this
  glyph is mostly negative space, so matching by height would match by neither
  weight nor legibility.
- Whether the wordmark sits beside the mark or beneath it. **Built: beneath**,
  both centred on `x = 960`. Two harder constraints chose it: the relationships
  converge on the frame's centre line, so a horizontal lockup would push the mark
  off it; and a stacked centred column is what survives the 1:1, 4:5 and 9:16
  crops of `STORYBOARD.md` §2.
- The exact tagline size within the 26–52 px range. **Built: 34 px**, the top of
  the body tier.
- The turn's duration and easing, **provided it concludes by `1436`**. **Built:
  local `0060`–`0076`, one revolution on the project's easing.** The end frame is
  an invariant; everything else about it is not.
- Easing of the three entrances. **Built:** the project's
  `Easing.bezier(0.22, 1, 0.36, 1)` for every opacity ramp, and **no easing at
  all** on the line draw.
- Whether the mark takes a single small settle as the lines land. **Built: it
  does not** — its one settle is on its own entrance, and the turn is already a
  gesture on the mark in that window.

## Technical notes

- Components: `src/scenes/BrandScene.tsx` for the timing and the line geometry,
  `src/three/BrandTrail.tsx` for the R3F quad and its shader.
- Shared component, and it exists: `src/components/BrandLogo.tsx`, owning the
  real lockup — mark plus wordmark and their relative proportions — plus
  `BrandTagline` and the two copy strings, so that this scene, `09-outro.md` and
  any future poster frame cannot render three slightly different logos. It also
  owns the lockup's screen position, which is the shared constant the `1530`
  boundary depends on. Fourth such shared component after `MetricCard`,
  `ImpactReport` and `Attribution`.
- Global scene boundaries live inline in `src/Composition.tsx` as
  `<Sequence name="08 Brand" from={1360} durationInFrames={170} premountFor={30}>`
  literals, because
  Remotion Studio can only trim inline literals. There is no timing module. The
  component animates in scene-local frames: `useCurrentFrame()` inside the
  Sequence starts at `0`.
- Colours from `src/brand/tokens.ts`; fonts from `src/brand/fonts.ts`. No raw hex,
  no fallback font family — a late font swap on the wordmark is a brand error, not
  a layout wobble.
- All state derives from the frame (`AGENTS.md` §17, §18). Line angles are
  constants in the source, never generated at render time.
- If R3F is used, keep the R3F subtree mounted only for this scene's duration and
  reuse geometry and materials across the lines (`AGENTS.md` §35). No
  postprocessing — a bloom pass on a logo is exactly the "cinematic effect stack"
  §36 rules out.
- **The logo asset is `public/brand/kivgraph-mark.png`, and it is derived.** It
  is not a file from the Kivgraph repository and must not be assumed to be one.
  The shipped mark is a raster on an opaque background —
  `kivgraph/landing/AGENTS.md`: *«No hay marca vectorial: la fuente es un
  ráster»* — and that background is `#0e1015` carrying about two levels of
  dither. Dropped on this frame unmodified it is a paler rectangle behind the
  logo, which is the same defect `landing/AGENTS.md` records for `og.png` and the
  maskable icon.

  So the asset here is the shipped mark with that background keyed to alpha and
  cropped to the glyph. The background was **measured** as the modal colour
  rather than read off a corner — the corner is `#101218`, two levels off the
  field — coverage is a ramp between 6 and 34 levels of distance from it, and the
  colour is un-premultiplied against the same measurement. Source
  `1254 × 1254`, glyph `755 × 766`, which is 60.2 % × 61.2 % of the tile and
  matches the 60.9 % `landing/AGENTS.md` reports measuring.

  **When the shipped mark changes this file is regenerated, and nothing in the
  build will say so if it is not.** Re-run the extraction against the new source;
  do not scale, retouch or re-cut it by hand. The extraction is documented in
  `BrandLogo.tsx`.
- **The mark carries `will-change: transform`, for determinism and not for
  performance, and removing it reintroduces a measured bug.** Chrome picks a
  raster scale for a transformed image from compositing state that accumulates
  across frames, so while the turn was running the *same frame* came out
  differently depending on where the render started (the ranges below end on
  `1449` because that was the scene's last frame when it was measured; it is
  `1529` now): `remotion render
  --frames=1420-1449` and `--frames=1340-1449` disagreed at `1425`, `1430` and
  `1436`, while two renders of the same range were byte-identical to each other.
  `AGENTS.md` requires that the same frame always produce the same visual result,
  and that failed. Promoting the mark to its own layer removes the choice;
  verified after, `remotion still`, a 1340-start render and a 1420-start render
  agree byte for byte on every frame of the turn.

  The cost, recorded rather than hidden: edges resample differently on a promoted
  layer, so `1440` moved by up to 35 levels on 6 % of the subpixels inside the
  mark — 43.6 dB over the mark's region, 60.8 dB over the whole frame. Shape,
  position and size are untouched and the two are indistinguishable at 3×
  nearest-neighbour. This is a general hazard of rotating a raster in DOM, not a
  quirk of this asset: any future scene that transforms an image should assume it
  until it has measured otherwise.
- It is loaded with Remotion's `<Img>` and `staticFile()`, not a bare `<img>`:
  `<Img>` holds the render open until the image has decoded, for the same reason
  `fonts.ts` uses `loadFont()`, so a headless render cannot produce a frame with
  the logo missing. The render depends on no network resource.

## Current compromises

Four of these are overrides taken on direct art direction. They are written as
overrides rather than as derivations, because a future agent reading only the
result would reconstruct the opposite reasoning and be wrong.

- **Override — the mark is the raster, and the two marks now disagree.**
  Kivgraph ships two real marks. The web header lockup is an 8 × 8 px `#2563eb`
  square beside the lowercase mono wordmark — `TopBar.astro`, and `Footer.astro`
  repeats it. The raster used here is the favicon, the app icon, the maskable
  icon and the icon an MCP client shows. The film's closing frame and the site's
  own header therefore do not show the same mark. That is a live inconsistency
  and it is not this document's to resolve: whichever way it is settled, the
  loser changes and the other document changes with it.
- **Override — R3F and a trail shader for the relationships.** `AGENTS.md` lists
  **«Partículas, `Trail`, estelas»** among the things rejected up front *«para
  que no vuelva a proponerse»*, citing `STORYBOARD.md` §12 — *«No utilizar
  electricidad, rayos ni partículas»* — and §30 lists `40 partículas`, `bloom`
  and `neón` under what the video must not do. §12 permits *un punto de energía
  muy sutil*; this is more than that. The override was bounded rather than open:
  no postprocessing, no particles, no `uTime`, no camera, and **no logo in the
  canvas**. See `## Three.js`.
- **Override — the mark turns once.** This document's own `## Motion` says the
  naming is the one moment in the video that must feel inevitable rather than
  animated, and `AGENTS.md` lists dramatic spins among what to avoid. The
  override was bounded by the still frame: the turn concludes at `1436` and
  `1438`–`1529` is one static image. It was not free, though, and the cost is the
  determinism note in `## Technical notes`: stabilising a rotating raster
  required promoting the mark to its own compositing layer, which resamples its
  edges. `1440` is unchanged in content, position and size, and moved by up to
  35 levels on 6 % of the subpixels inside the mark.
- **Override consequence — the film has no accent after `1430`.** `#2563eb` is
  spent entirely on the arriving relationships and leaves with them.
  `09-outro.md` used to state that the lockup's mark is the only accent in its
  frame; that sentence was false and that document now records it.
- **Two colours in the film come from no token.** The mark's off-white `#e9e2dc`
  and teal `#56818a` are not in `src/brand/tokens.ts` and cannot be, because the
  tokens mirror the web design system and the mark is a raster. `AGENTS.md` asks
  for centralized brand tokens rather than arbitrary colours spread across
  components, and a logo is the one legitimate exception — but it is an
  exception, and it is the only one.
- **The scene's original argument is gone.** It used to be that the node the
  relationships converge on *is* the brand mark, because the film's node
  vocabulary and the brand square are the same shape, so no logo had to be
  invented. With a raster mark that is no longer true; the convergence is now a
  transition that delivers a logo, which is what `STORYBOARD.md` SCENE 10 asks
  for literally but is a weaker idea than the one it replaced.
- **The logo asset is derived and can silently rot.** See `## Technical notes`.
  If the shipped mark is replaced and `public/brand/kivgraph-mark.png` is not
  regenerated, the film keeps showing the old mark and nothing in the build
  fails. It is the same trap `kivgraph/landing/AGENTS.md` records for a stale
  `favicon.svg`, and the same trap `src/brand/fonts.ts` records for the
  `.woff2` / `.ttf` pair.
- **The mark is a raster in a 1920 × 1080 film.** It is drawn at 120 px from a
  755 px source, so there is headroom for any reasonable resize — but there is no
  vector, so a scene that ever wants the mark full-frame does not have the
  artwork for it.
- **Sound absent.** `STORYBOARD.md` §18 asks for a *very soft impact* on the
  logo, around `1430`. Nothing is authored yet. Per §17 the sound may never be
  required to understand the piece and the whole video must work muted, so this
  scene must be judged with audio off; a soft impact is an enhancement, never
  load-bearing.
- **The tagline's total dwell is now 210 frames, and that is worth a decision
  rather than a shrug.** This scene was drafted at 90 frames, which left the
  tagline ten after it settled; it was watched at that length and it could not be
  read, so the scene went to 170 and the tagline got 90 frames of its own — 1.5 s,
  28 characters per second, inside the 25–40 budget. `OutroScene.tsx` then landed
  and inherits the lockup at `1530`, holding it to `1649`, so the line is on
  screen for 210 frames end to end.

  3.5 s is long for one sentence, and it was watched at that length and confirmed
  on 2026-08-26 rather than left as an open question. It stands because the second
  half of it is not spent on the tagline: the outro adds the integrations and the URL
  underneath, and the tagline is context by then rather than the thing being
  read. If the ending is ever felt to drag, the frames to take are this scene's,
  not the outro's — the outro's hold is a URL being read and is the one block in
  the film that may not be trimmed.

### Resolved, and what they were

Kept because the reasoning is the record, not because the questions are open.

- **R3F or 2D — resolved twice.** First in favour of 2D, on the argument that the
  lines explain no structure and that the lockup must hold its screen position
  across `1530`. Then overridden for the lines only, on direct art direction,
  with the lockup kept in DOM so the second half of that argument still stands.
  See `## Three.js`.
- **Wordmark capitalisation — resolved in favour of `kivgraph`.** See `## Copy`.
  `STORYBOARD.md` SCENE 10 was updated in the same task.
- **Lockup persistence across `1530` — resolved in favour of persistence.** See
  `## Transition out`. `BrandLogo.tsx` owns the position and was authored to
  scene 09's column, which is why this scene settles above centre.

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
  from 10 to 09 and every master frame in it moved −120. It now realises
  storyboard SCENE 10 — BRAND REVEAL. Beats, durations and scene-local frames
  are unchanged; the still-image key frame is now `1370`.
```

```text
2026-08-23
- Scene 01 was shortened from 210 to 120 frames, so every master frame in this
  document moved −90; the master is now 1410 frames (23.5 s). Beats, durations
  and scene-local frames are unchanged; the still-image key frame is now `1280`.
```

```text
2026-08-25
- Scene 04 (Cross Repository) was deleted, so this document was renumbered from
  09 to 08 and every master frame in it moved −90; the master is now 1320 frames
  (22.0 s). It still realises storyboard SCENE 10 — BRAND REVEAL, but document
  numbers now run two behind storyboard numbers because storyboard SCENE 05 is a
  cut scene. Beats, durations and scene-local frames are unchanged; the
  still-image key frame is now `1190`, and the lockup persistence boundary shared
  with `09-outro.md` is now `1200`.
```

```text
2026-08-25
- The blast radius scene was trimmed from 120 to 100 frames, so every master
  frame in this document moved −20; the master is now 1300 frames (21.7 s). Beats,
  durations and scene-local frames are unchanged; the still-image key frame is now
  `1170`, and the lockup persistence boundary shared with `09-outro.md` is now
  `1180`.
- The trim happened upstream and for a measured reason: with `Exact symbols. Not
  name matches.` and its veil cut, nothing animated in the blast radius' tail and
  41 of its last frames were pixel-identical, so twenty came off and everything
  after 0730 followed. Nothing in this scene's own choreography changed.
```

```text
2026-08-25
- Scene 05 (Semantic Resolution) grew from 150 to 180 frames, so every master
  frame in this document moved +30; the master is now 1330 frames (22.2 s). The
  scene spans `1120`–`1210`. Beats, durations and scene-local frames are
  unchanged; the still-image key frame is now `1200`, and the lockup persistence
  boundary shared with `09-outro.md` is now `1210`.
- The growth happened upstream and it added time rather than removing it, which
  is a first for this film: the semantic scene's two-column comparison now stands
  for a full second and leaves on a single window, so everything from 0910
  onward moved later. Nothing in this scene's own choreography changed.
```

```text
2026-08-25
- A pacing pass on scenes 04, 05 and 06 moved every master frame in this document
  +150: scene 04 grew from 100 to 140 frames, scene 05 from 180 to 200 and scene 06
  from 90 to 180. The master is now 1480 frames (24.7 s) and this scene spans
  `1270`–`1360`. Beats, durations and scene-local frames are unchanged; the
  still-image key frame is now `1350`, and the lockup persistence boundary shared
  with `09-outro.md` is now `1360`.
- The growth happened upstream and it was measured rather than felt. Dwell time -
  how long a readable thing stays on screen after it has finished arriving - put a
  number on "too fast in the last scenes": the blast radius card had 0.42 s and the
  agent's path sentence 0.57 s, which is 129 characters per second against the
  25-40 that on-screen technical text is actually read at. Nothing in this scene's
  own choreography changed, and the opening ten frames of silence it depends on are
  untouched.
- The scene's own opening line now says the video has been about a behaviour for
  twenty-one seconds rather than twenty, because it has.
```

```text
2026-08-26
- Scene 07 (Benchmark) was implemented at 170 frames rather than the drafted 120,
  so every master frame in this document moved +50; the master is now 1530 frames
  (25.5 s) and this scene spans `1320`–`1410`. Beats, durations and scene-local
  frames are unchanged; the still-image key frame is now `1400`, and the lockup
  persistence boundary shared with `09-outro.md` is now `1410`.
- The growth happened upstream and it was measured, not felt: at 120 frames the
  benchmark's last statement had 0.17 s of reading time, so the scene was built at
  170. Nothing in this scene's own choreography changed.
- Scene 07 now explicitly hands its silence to this scene, which is a fact this
  document previously left implicit. Scene 07 fades out over `1308`–`1320` and its
  last rendered frame `1319` is one frame short of black, so the ten frames of
  black at scene-local `0000`–`0010` / master `1320`–`1330` are rendered here.
  `## Transition in` now says so: the silence belongs to this scene and is not a
  hole in the timeline.
- The scene's own opening line now says the video has been about a behaviour for
  twenty-two seconds rather than twenty-one, because this scene now opens at
  exactly 22.0 s.
- Corrected out of band, and not part of the +50: `## Technical notes` showed
  `from={1120}` in its `src/Composition.tsx` `<Sequence>` example. `1120` was this
  scene's start before the 2026-08-25 pacing pass, and that pass updated every
  master frame in the prose but missed the literal, so `1120` + 50 would have been
  meaningless. It is now `from={1320}`, matching the current scene start;
  `durationInFrames={90}` was already right.
- Every other code literal in this document was then checked against the scene's
  current numbers, because a fenced literal is not read as prose and survives
  passes that fix everything around it. The key-frame block, the two copy blocks,
  the convergence sketch, the `90 frames / 1.5 s` duration line and the
  `BrandScene.tsx` / `BrandLogo.tsx` component names are all consistent. This
  document contains no `premountFor` or `postmountFor`.
```

```text
2026-08-26
- The second retime of this document in one day, and the same scene caused both.
  Scene 07 (Benchmark) was rebuilt as a two-column comparison table - two arms as
  column heads, four measured rows, one hairline under the heads - and grew from
  170 to 210 frames, so every master frame in this document moved a further +40 on
  top of this morning's +50. The master is now 1570 frames (26.17 s) and this
  scene spans `1360`-`1450`. Beats, durations and scene-local frames are
  unchanged; the still-image key frame is now `1440`, and the lockup persistence
  boundary shared with `09-outro.md` is now `1450`. The +50 was not re-applied:
  this pass started from the numbers already in the file.
- The growth was upstream and it was art direction rather than measurement: the
  benchmark was asked for as a comparison table with more data in it, and a table
  that names both arms above its figures needs more rows and more arrival time
  than the four statements it replaced. Nothing in this scene's own choreography
  changed.
- `Time:` re-derived against 60 fps: 22.67 s - 24.17 s, from `1360` and `1450`.
  `Duration: 90 frames / 1.5 s` is unchanged, because the scene did not.
- Scene 07's handover numbers moved with it. It now fades over `1348`-`1360` and
  its last rendered frame `1359` is still one frame short of black, so the ten
  frames of black at scene-local `0000`-`0010` / master `1360`-`1370` are still
  rendered here. The silence is untouched in length and still belongs to this
  scene.
- The opening line still says the video has been about a behaviour for twenty-two
  seconds. It opened at exactly 22.0 s before this pass and opens at 22.67 s now,
  so twenty-two full seconds have elapsed either way and the sentence stands.
- Every code-fenced literal was checked again rather than trusted, because this is
  the document that was caught earlier today carrying `from={1120}` through two
  shifts. `## Technical notes` now reads
  `<Sequence name="08 Brand" from={1360} durationInFrames={90}>`; the key-frame
  block is `1360` / `1410` / `1440` / `1449`; the two copy blocks, the convergence
  sketch and the `90 frames / 1.5 s` duration line carry no master frames and are
  unchanged. This document still contains no `premountFor` or `postmountFor`.
- Checked against `src/Composition.tsx`, which now records `1360-1450 Brand` in
  its map and a 1570-frame master. This scene is still unimplemented, and
  `mountedFrames` is 1360 - exactly this scene's start, so the film that renders
  today ends where this document begins.
```

```text
2026-08-26
- Implemented. `src/scenes/BrandScene.tsx` and `src/components/BrandLogo.tsx`
  exist, `src/Composition.tsx` mounts
  `<Sequence name="08 Brand" from={1360} durationInFrames={90} premountFor={30}>`
  and `mountedFrames` went 1360 -> 1450. Nothing in the timeline moved: the scene
  is the 90 frames this document has planned against since it was written, and
  the master is still 1570.
- All three open decisions resolved, and none of them silently. Lowercase
  `kivgraph` rather than `Kivgraph`, because the real lockup is lowercase and
  because the film already carries both forms under a rule - prose takes the
  capital, an identifier takes the lowercase - so the reveal rhymes with scene
  07's column head instead of adding a third register; STORYBOARD.md SCENE 10 was
  updated in the same task. The lockup persists across 1450, which BrandLogo.tsx
  now enforces by owning the position both scenes read. And 2D rather than R3F -
  which was then partly overridden, below.
- The mark is not what this document said it was. On direct art direction the
  scene resolves to the shipped raster mark - the favicon, the app icon, the icon
  an MCP client shows - and not to the 8 x 8 #2563eb square. Both are real: the
  square is the web header lockup and TopBar.astro still draws it. Four
  consequences are recorded in ## Current compromises rather than absorbed.
- New asset public/brand/kivgraph-mark.png, derived rather than copied. The
  shipped mark is a raster on an opaque background and there is no vector; the
  background was measured as the modal colour - #0e1015, not the #101218 its
  corner reads - keyed to alpha over a 6-to-34-level ramp, colour
  un-premultiplied against the same measurement, cropped to the glyph. Source
  1254 x 1254, glyph 755 x 766 = 60.2% x 61.2%, against the 60.9% that
  kivgraph/landing/AGENTS.md reports measuring.
- Two further overrides, both on direct art direction and both bounded rather
  than open. The relationships were rebuilt in R3F with a trail shader, against
  AGENTS.md's own list of things rejected up front - which names estelas - but
  with no postprocessing, no particles, no uTime, no camera, and the lockup kept
  in DOM so the 1450 position guarantee survives. And the mark now turns once as
  the wordmark enters, against this document's own inevitable-rather-than-
  animated sentence, but concluding at 1436 so the still frame is untouched. The
  proof both were bounded correctly: frame 1440 is byte-identical to the render
  from before either existed.
- A defect in scene 07 was found by mounting this one and fixed in the same task.
  BenchmarkScene carried `opacity: fadeOut(frame)` on the same AbsoluteFill that
  painted the background, so the background faded out with the table and the
  frame reached pure #000000 at 1356 and held it to 1359. This document forbids
  that artefact by name - a drop to true black and a return to #0a0b0d reads as a
  levels change - and it had been invisible only because mountedFrames was 1360
  and the film ended there. The fade now lives on an inner fill. Verified
  byte-identical at 1190, 1300 and 1347; only 1348-1359 changed.
- Measured on the rendered range 1340-1449, on exported PNGs rather than the
  Studio scrubber. The 1359/1360 seam is pixel-identical, PSNR = inf, and the
  corner holds 10 11 13 across it. Identical runs: 1340-1348 the settled table,
  1358-1369 the silence - twelve frames, because the fade lands two frames early
  and scene 08's ten join it - 1416-1418 the complete convergence figure, and
  1438-1449 the settled lockup. 78 distinct images in 110 frames. Measured
  separately over a type-free band, no line fragment survives past 1424, which is
  four frames inside the requirement.
- Two beats land earlier than their nominal ramps, both by the same cause and
  both in the safe direction: the project's Easing.bezier(0.22, 1, 0.36, 1) is
  within one 255th of its final value about two frames before its end, so the
  wordmark is settled at 1428 rather than 1430 and the tagline at 1438 rather
  than 1440. The still-image key frame 1440 is therefore not merely settled, it
  has been settled for two frames.
- One timing correction found by exporting rather than by reading the code. The
  node's entrance ramp opened on local 0010, and an interpolate() is exactly 0 at
  the left edge of its range, so 1370 rendered pixel-identical to 1360 and the
  node did not appear until 1371 - the silence was eleven frames, not ten. The
  ramp now opens on 0009.
- One shader correction of the same kind. Ported from SVG, the line's core was a
  smoothstep in normalised width, and a 1 px feature expressed that way lands
  between fragment centres and renders as almost nothing - the settled lines were
  invisible in the exported frame while the travelling ones read fine. MSAA does
  not help: it antialiases geometry edges and this edge is inside the shader. The
  core is now antialiased analytically over one pixel.
- One determinism defect, found by rendering the same frame from two different
  start frames rather than by rendering it twice the same way. The turn made the
  mark's raster scale depend on accumulated compositing state, so 1425, 1430 and
  1436 differed between a 1340-start and a 1420-start render while two renders of
  the same range were byte-identical. `will-change: transform` on the mark fixes
  it; the note is in ## Technical notes because the hazard belongs to rotating a
  raster in DOM and not to this scene. Cost: 1440 moved by up to 35 levels on 6%
  of the subpixels inside the mark, 43.6 dB over its region, indistinguishable at
  3x. Content, position and size unchanged.
```

```text
2026-08-26
- Lengthened from 90 frames to 170, on direct art direction, after watching it:
  at 90 the tagline settled at 1440 with ten frames left and could not be read.
  The scene now spans 1360-1530, the master is 1650 frames (27.5 s), scene 09
  moves to 1530-1650 and mountedFrames goes 1450 -> 1530. Nothing else in the
  film moves - the growth is all tail.
- No beat moved. The silence is still 1360-1370, the node still appears at 1370,
  the relationships still land between 1370 and 1416, the wordmark still reads at
  1430 and the tagline at 1440. The still-image key frame is still 1440. What
  changed is the hold after it: 90 frames rather than ten.
- Dwell: 42 characters over 1.5 s is 28 characters per second, inside the 25-40
  budget the rest of the film is timed against. At the drafted length it was 252,
  which is why it was unreadable. The ## Current compromises entry that said the
  reading time depended on scene 09 is rewritten: it no longer does.
- Measured: frames 1440 and 1529 are byte-identical, so the whole 90-frame hold is
  one image. The last rendered frame is now 0169 / master 1529.
- This is the tenth master length and the first taken from a scene that had
  already shipped rather than from one arriving, and the first taken by watching
  rather than by counting characters.
```

```text
2026-08-26
- Scene 09 landed, so two things here changed without this scene being touched.
  Its `<Sequence>` gained `postmountFor={30}`: this scene mounts a ThreeCanvas and
  there is now a scene after it to scrub backwards from, which is the same reason
  scenes 03 and 04 carry theirs. And the ## Current compromises entry about the
  tagline's reading time is rewritten - it no longer depends on scene 09 existing,
  because the retime to 170 frames already gave the tagline 90 frames of its own.
- The line's total dwell is now 210 frames end to end, 3.5 s. Left as it is, with
  the reason written down: the second half of it is spent with the integrations
  and the URL on screen underneath, so the tagline is context by then rather than
  the thing being read. If the ending ever needs trimming, the frames to take are
  this scene's; the outro's hold is a URL being read and may not be trimmed.
- Measured: 1529 and 1530 are byte-identical, so the boundary this scene was
  authored for behaves exactly as `## Transition out` says - the lockup simply
  does not move.
```
