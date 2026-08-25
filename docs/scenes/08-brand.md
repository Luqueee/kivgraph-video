# Scene 08 — Brand

## Purpose

This scene attaches everything the viewer just understood to the name.

For twenty seconds the video has been about a behaviour: code that
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
out. Per `STORYBOARD.md` §27 the metrics-to-logo path is `fade → silence → brand
reveal`, so this scene opens on the silence.

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

- Global frames: `1110`–`1200`
- Scene-local frames: `0000`–`0090` (last rendered frame `0089` / master `1199`)
- Time: 18.5 s – 20.0 s
- Duration: 90 frames / 1.5 s at 60 fps
- Remotion component: `src/scenes/BrandScene.tsx`

Beats, all fixed by the storyboard:

| Master        | Local         | Beat                                                     |
| ------------- | ------------- | -------------------------------------------------------- |
| `1110`        | `0000`        | Everything is gone. Black. Intentional silence.           |
| `1120`        | `0010`        | A single node appears.                                    |
| `1120`–`1160` | `0010`–`0050` | Thin lines arrive from outside the frame toward that node. |
| `1150`–`1180` | `0040`–`0070` | The relationships converge.                               |
| `1180`        | `0070`        | `Kivgraph` reads.                                         |
| `1190`        | `0080`        | `Exact code intelligence for coding agents.` reads.        |
| `1190`–`1200` | `0080`–`0090` | Settled. Nothing moves.                                   |

## Initial state

At `1110` the frame is empty and dark: `background` `#0a0b0d`, edge to edge.
Nothing else. The ten frames from `1110` to `1120` are deliberately empty — this
is the `silence` in the §27 transition and it is doing work. It separates
measurement from identity.

The storyboard says *negro*. Use the brand background `#0a0b0d`, not pure
`#000000`. A drop to true black and a return to `#0a0b0d` for the outro would
read as a levels change on OLED displays and on aggressively compressed embedded
players, which is a technical artefact, not a creative beat.

## Final state

At `1199` the frame holds the settled Kivgraph lockup and its tagline, centred:

- the mark and the wordmark, complete;
- `Exact code intelligence for coding agents.` beneath;
- the convergence lines fully resolved — dimmed out or absorbed into the mark, in
  any case no longer readable as a diagram;
- nothing in motion.

This frame is the poster candidate for the whole piece and must be exportable as
a still with nothing mid-transition in it.

## Visual composition

Centred, symmetrical, almost empty.

The single node at `1120` should be the mark itself: a small solid square in
`accent` `#2563eb`, at the centre of the frame. The real Kivgraph lockup is an
8 × 8 px `#2563eb` square plus the lowercase monospace wordmark `kivgraph`, so
the node the relationships converge on **is** the logo mark, scaled for the
frame. That correspondence is the whole idea of the scene: the video's node
vocabulary and the brand mark are the same shape, so no invented logo is
required.

The arriving lines are thin (1 px at final scale), straight or very gently
curved, in `edgeCross` `#94a3b8` and `edgeLocal` `#4b5563` at low opacity —
the same edge vocabulary used by the graph scenes, not a new one. Four to six of
them, entering from distinct directions beyond the frame edge, matching the
storyboard sketch:

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

Accent is confined to the mark, and briefly to the arriving relationships. Nothing
else in the frame is blue. On a near-empty dark frame a single accent square is
already a strong focal point — anything else competing with it wastes the moment.

Content stays centred so 1:1, 4:5, and 9:16 variants remain possible later
(`STORYBOARD.md` §2).

## Motion

Three gestures: arrival, convergence, naming.

**Arrival (`1120`–`1160`).** Each line is drawn from outside the frame toward the
node as a progress value `0 → 1` along its own path, staggered so they do not all
land together. Even speed, controlled easing, no acceleration flourish, no
travelling glow. `STORYBOARD.md` §12 permits a very subtle energy point along an
edge; it does not permit electricity, sparks, or particles.

**Convergence (`1150`–`1180`).** The lines complete, meet at the node, and then
resolve — dimming out or retracting into the mark. The node may take a single,
very small scale settle as they land. One settle, not a pulse, and never a loop.

**Naming (`1180` and `1190`).** The wordmark appears beside or beneath the mark,
then the tagline. Both by opacity with a minimal upward settle. The wordmark does
not type itself in, does not assemble from fragments, and does not slide: this is
the one moment in the video that must feel inevitable rather than animated.

Storyboard frame numbers mark when a beat **reads**, not when its ramp starts.
This is a hard constraint here, because `1190` is a designated still-image key
frame in `AGENTS.md`. The tagline's entrance must therefore *conclude* at
`1190`, not begin there, and every line must be fully resolved before `1180`. If
anything is still moving at `1190`, the key frame is unusable.

Nothing moves between `1190` and `1200`.

## Three.js

**Undecided — see `## Current compromises`.**

The geometry this scene needs is a point and four to six straight lines
converging on it. That is simple enough for either implementation, and the
storyboard does not require 3D here.

If implemented in R3F (`@react-three/fiber` + `@remotion/three`):

- **Why 3D would be justified:** only continuity. The graph scenes are 3D, and
  arriving lines with slight depth parallax would make the brand reveal feel like
  the same space collapsing into the mark rather than a separate 2D end card.
  That is a real narrative argument, but it is the only one — per `AGENTS.md` §19
  and §52, "it would look nicer in 3D" is not sufficient.
- **Topology:** one node at the origin; four to six line geometries whose far
  endpoints begin outside the camera frustum.
- **Camera intent:** effectively static. A very small dolly-in (well inside the
  15–20° / minimal-translation budget of `STORYBOARD.md` §13) is the most that is
  permitted. No orbit, no roll, no drift. The mark must be dead centre and
  perfectly still by `1180`, because the frame is a logo.
- **Lighting and materials:** flat and unlit. This is UI materialised, not a
  physical object (`STORYBOARD.md` §14). No specular, no metal, no rim light, no
  bloom. A logo with a highlight on it is not a logo.
- **Determinism:** every position, opacity, and line progress derives from
  `useCurrentFrame()` (`AGENTS.md` §18). No `useFrame` deltas, no seeded drift,
  no randomised line angles at render time — the angles are constants.
- **Screen-space parity:** if 3D is chosen, the mark's final screen position and
  apparent size must match what `09-outro.md` expects, since the lockup carries
  across the `1200` boundary. Matching a projected 3D position to a DOM layout
  across a scene boundary is precisely the kind of continuity risk `AGENTS.md`
  §23 warns about, and it is the strongest argument for doing this scene in 2D.

If implemented in 2D, an inline SVG with stroked paths (line progress via
`stroke-dasharray`) plus DOM text is sufficient and removes the parity risk
entirely.

## Transition in

`STORYBOARD.md` §27: `fade → silence → brand reveal`.

`07-benchmark.md` fades its four statements out together, landing on an empty
frame at `1110`. This scene then holds that emptiness for ten frames before the
node appears at `1120`.

Those ten frames are the transition. They are not dead air and must not be
shortened to "tighten the pacing" — the reveal only lands because the frame was
emptied first.

## Transition out

At `1200` the composition continues into `09-outro.md`.

**Derived continuity decision, not literal in the storyboard:** the lockup stays
on screen across the `1200` boundary, in the same position and at the same scale,
and `09-outro.md` composes the integrations and the CTA around it. The storyboard
does not state this, but SCENE 11 asks the final hold to let the viewer *remember
the name* and *locate the URL*, which requires the name to still be there. A
version where the lockup exits at `1200` and the outro is only integrations plus a
URL loses the name at exactly the moment it is meant to stick.

Consequences the implementation must honour:

- there is no fade or cut at `1200` — the lockup simply does not move;
- the lockup's screen position is a shared constant between `BrandScene` and
  `OutroScene`, and it is chosen with the outro's layout already in mind, so the
  mark may sit above centre rather than at the exact centre of the frame;
- nothing about the mark animates at the boundary.

This is recorded as an open decision in `## Current compromises` and mirrored in
`09-outro.md`. Both documents must agree.

## Copy

Verbatim:

```text
Kivgraph
```

```text
Exact code intelligence for coding agents.
```

The tagline is one of the five high-priority phrases in `STORYBOARD.md` §32 and
is the video's closing message (§4). The full stop belongs to it.

The wordmark string is written `Kivgraph` in the storyboard, while the real
lockup's wordmark is the lowercase monospace `kivgraph`. See
`## Current compromises` — this is unresolved and must not be silently decided.

No other text. No `by`, no version, no slogan, no `Get started`.

## Key frames

```text
frame 1110 — empty frame; the intentional silence
frame 1160 — relationships mid-arrival, converging on the mark
frame 1190 — complete lockup plus tagline, fully settled; STILL-IMAGE KEY FRAME
frame 1199 — unchanged from 1190; the frame the outro inherits
```

`1190` is on `AGENTS.md`'s still-image key frame list and `STORYBOARD.md` §28's
must-work-as-a-still list. It is the brand still for landing page, README,
social, and thumbnail use, and it is the most likely single frame from this video
to be seen outside the video. Export it as a PNG and inspect it; do not rely on
the Studio scrubber.

`1110`, `1160`, and `1190` are all on the manual review list in
`STORYBOARD.md` §28.

## Invariants

- **Do not fabricate a graph-shaped logo that does not correspond to the real
  logotype.** The convergence is a transition, not a logo. The real Kivgraph
  lockup is an 8 × 8 px `#2563eb` square plus the lowercase monospace wordmark
  `kivgraph`, and that is what the frame must resolve to. A pretty node-and-edge
  glyph left standing as if it were the brand mark is the single worst failure
  this scene can produce.
- The arriving lines are gone, or unmistakably decorative-free residue, by the
  time the wordmark is on screen. They never remain as part of the mark.
- The mark is the same square that the relationships converged on. The video's
  node vocabulary and the brand mark are deliberately the same shape.
- Frame `1190` works as a still image: complete lockup, complete tagline, nothing
  mid-animation.
- The frame is static from `1190` to `1200`.
- The `1110`–`1120` emptiness is preserved.
- No orbit, no camera spin, no floating, no looping pulse, no glow build-up, no
  particles, no lens flare (`AGENTS.md` §19, `STORYBOARD.md` §30).
- Accent `#2563eb` is confined to the mark and the arriving relationships.
- The scene works muted. Per `STORYBOARD.md` §17 the whole video must, and this
  scene is the one most tempted to lean on an audio hit.
- The tagline text is exact and unaccompanied. No second line of marketing is
  added beneath it.

## Flexible elements

- The number of arriving lines (four to six), their entry angles, and their
  stagger.
- Whether the lines are straight or gently curved, and whether a very subtle
  energy point travels along them.
- Whether the lines dim out or retract into the mark.
- The mark's size on screen and the wordmark's size relative to it, provided the
  lockup's own proportions are respected.
- Whether the wordmark sits beside the mark or beneath it.
- The exact tagline size within the 26–52 px range.
- Easing of all three gestures.
- Whether the mark takes a single small settle as the lines land.

## Technical notes

- Component: `src/scenes/BrandScene.tsx`.
- Shared component expected: `BrandLogo.tsx`, owning the real lockup — mark plus
  wordmark and their relative proportions — so that this scene, `09-outro.md`,
  and any future poster frame cannot render three slightly different logos.
- Global scene boundaries live inline in `src/Composition.tsx` as
  `<Sequence name="08 Brand" from={1110} durationInFrames={90}>` literals, because
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
- No logo asset exists in `public/` yet. When one is added it must be local
  (SVG preferred) and deterministic; the render may not depend on any network
  resource (`AGENTS.md` §34).
- If the square mark is drawn geometrically rather than from an asset, its colour
  is `accent` `#2563eb` from the tokens, and its proportions must match the real
  8 × 8 lockup mark.

## Current compromises

- **Not implemented yet.** This document is the specification the implementation
  must satisfy; no `BrandScene.tsx` and no `BrandLogo.tsx` exist at the time of
  writing.
- **Open decision — R3F or 2D.** Undecided. The geometry (one node, a handful of
  converging lines) is simple enough for either. R3F buys continuity with the
  graph scenes and depth on the arriving lines; plain 2D SVG/DOM buys exact
  screen-space control, which matters because the lockup must hold its position
  across the `1200` boundary into `09-outro.md`. Decide it against a rendered
  frame `1190`, and update `## Three.js` in the same task.
- **Open decision — wordmark capitalisation.** `STORYBOARD.md` renders the
  reveal as `Kivgraph`, while the real lockup uses the lowercase monospace
  wordmark `kivgraph`. These are different marks. The real lockup should win, but
  that contradicts the storyboard text, so per `AGENTS.md` §14 the storyboard must
  be updated in the same task if it is overruled. Not silently resolved here.
- **Open decision — lockup persistence across `1200`.** See
  `## Transition out`. This document assumes the lockup carries into
  `09-outro.md` unchanged, which the storyboard neither states nor forbids.
  Mirrored in `09-outro.md`. If it is rejected, both documents change together.
- **No logo asset.** `public/` contains no Kivgraph mark. Until one exists, the
  mark can be drawn as a token-coloured square, which is faithful to the real
  lockup, but the wordmark's exact letterforms cannot be verified against the
  real logotype.
- **Sound absent.** `STORYBOARD.md` §18 asks for a *very soft impact* on the logo,
  around `1180`. Nothing is authored yet. Per §17 the sound may never be required
  to understand the piece and the whole video must work muted, so this scene must
  be judged with audio off; a soft impact is an enhancement, never load-bearing.

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
