# Scene 01 — Symbol

## Purpose

Open inside a real codebase and make one symbol matter.

The scene plants `withRetry` as the anchor of the entire video and creates
curiosity about it. It deliberately does **not** verbalise anything: there is no
question, no annotation, no label, no headline. The video's question is spoken
later, by the agent, in Scene 03. Scene 01 is the first step of the narrative
chain in `STORYBOARD.md` §3 — `Código → Cambio aparentemente pequeño` — and it
stops short of `Pregunta`.

It also establishes the visual grammar for everything after it: the camera lives
inside the material, hierarchy is luminance, depth is parallax, UI appears only
when it carries narrative meaning, and there is exactly one spatial world that
scenes 02 and 03 continue moving through.

## Viewer takeaway

"That is a function in a real codebase, and it has been singled out."

The viewer should leave the scene wanting to know why — not having been told.

## Narrative context

Nothing precedes it. This is the first frame of the video.

It prepares Scene 02, which picks the same camera up from rest, widens out of
this shot, takes the light out of the code, and lets the agent type the question
out loud inside the same frame.

## Timeline

- Storyboard scene: `STORYBOARD.md` — SCENE 01 THE SYMBOL
- Global frames: `0000–0120`
- Time: 0.0 s – 2.0 s
- Duration: 120 frames (2.0 s)
- Remotion component: `src/scenes/SymbolScene.tsx`
- Registration: `<Sequence name="01 Symbol" durationInFrames={120}>` (the `from`
  prop is omitted because 0 is the default)
- Scene-local frames equal master frames, because the scene starts at 0.

| Frames | Beat |
| --- | --- |
| `0000–0028` | Already inside the code, very close to the symbol. The camera is pulling back; nothing else is happening. |
| `0028–0080` | The whole scene, in one transition: the code rises to its readable luminance, `withRetry` takes the accent, a 1px line resolves under it exactly the width of the symbol, the file caption arrives, and the camera lands. |
| `0080–0119` | Motionless. Byte-identical frames. Nothing has been said about the symbol, and that is what is unresolved. |

## Initial state

Frame `0000` already carries visual information — there is no black opening and
no element that fades in from nothing. The camera sits at zoom 2.35 on the
signature line: `withRetry` is roughly 90 px tall and the surrounding code is
cropped by every frame edge. The depth bed is off in the lower-right corner and
effectively invisible at 9% opacity, which is correct: at this distance there is
nothing but the symbol. No caption, no annotation, no mark.

## Final state

Frame `0119` is the settled composition, held dead still: zoom 1.12, the code at
its readable ladder, the caption top right, and the accent underline under
`withRetry` exactly as wide as the symbol. Nothing is mid-animation and nothing
is dimming. What is unresolved is not the camera but the claim: a symbol has been
singled out and the video has not yet said why. Scene 02 answers by taking the
world away.

## Visual composition

- **No editor.** No title bar, no traffic lights, no tabs, no minimap, no status
  bar, no panel border, no card. The code is the composition and is cropped by
  the frame on the top, right and bottom edges.
- **Two planes.** The camera plane is `payments-api/internal/retry/retry.go` at
  38 px / 60 px line height. Behind it, at depth 0.70, is
  `payments-api/paymentService/client.go` — blurred 4 px, never legible. It is a
  depth bed, not information. What it is, though, is the public bridge out of
  the repository — the file `checkout-service` reaches this symbol through — and
  scene 03 puts its two methods on screen by name. Nobody reads it here, but the
  continuity is real: the texture behind the opening becomes a named node later.
- **One pinned point.** `withRetry` is world origin `(0, 0)` and the camera
  targets it, projecting it to screen `x 620, y 662` — the lower-left third —
  for all 210 frames while the zoom changes around it. The symbol is the fixed
  thing; the codebase is what moves.
- **No text at all except the file path.** No sentence, no question, no
  annotation, no label, no marketing line, no large type. `withRetry` is the sole
  narrative focus and it carries the scene without words.
- **Negative space stays empty.** The left margin and the upper right hold
  nothing but the dimmed file path. The emptiness is the composition, not a gap
  waiting to be filled — this is the single most common way to break this scene.
- **Hierarchy by luminance, one hue.** Every code token is the same colour and
  differs only in opacity. Settled ladder: symbol 100%, its signature 55%,
  implementation 38%, package/import/context 22%, bed 16%. There is no syntax
  highlighting: the Kivgraph web ships no syntax theme, and colour is reserved
  for meaning.
- **Accent budget.** Brand colour appears on exactly two things, both semantic:
  `withRetry` in `accentText` (`#bfdbfe`) and its semantic mark — a 1 px
  underline in `accentText`, exactly the width of the symbol, sitting 2 px below
  the text so it reads as a layer over the code rather than as typography.
- **Depth without surfaces.** Parallax between the planes plus a radial
  luminance falloff centred on the anchor. No shadow, no border, no gradient
  decoration, no glow.
- **Typography.** JetBrains Mono for the code field and for the file caption,
  which is 20 px in `textMuted` (`#a3a3a3`) at 80% opacity. Geist, the brand
  sans, does not appear in this scene at all. Reading order is symbol,
  signature, remaining code, file path.

## Motion

The scene has one camera move and one transition, and they land on the same
frame. It does not animate elements one by one, and it never reverses anything.

- **The dolly** carries the whole scene: zoom 2.35 → 1.12 over 80 frames on a
  long soft curve, `Easing.bezier(0.33, 0.05, 0.2, 1)`, deliberately not the
  project's `bezier(0.22, 1, 0.36, 1)`, which front-loads too hard to read as a
  camera. Then it stops, and the scene is over.
- **There is no push-in at the end.** An earlier cut leaned back in from 1.12 to
  1.19 over the last 30 frames so the ending would feel unresolved. Scene 02
  opens by pulling back, so the camera made a gesture and undid it half a second
  later; it read as a wobble. The ending is unresolved because a symbol has been
  marked and nothing has been said, not because the lens is moving.
- **One window, one curve.** `resolve`, a single 0 → 1 ramp over `0028–0080` on
  `bezier(0.22, 1, 0.36, 1)`, drives every non-camera value in the scene: the
  four opacity ramps, the symbol's colour, the underline and the caption. They
  cannot drift apart, because there is only one of them.
- **Nothing in this scene dims.** Luminance rises to its settled ladder and holds
  there. Scene 02 owns the whole fall, so every ramp in the opening runs in one
  direction.
- **The bed** is not animated independently. Its apparent scale and screen
  position are consequences of the shared camera and its depth, so the parallax
  is a property of the world rather than a second hand-tuned ramp.
- **The symbol** shifts from `textPrimary` to `accentText` on that same window.
  Nothing about it moves; it changes state.
- **Frames `0080` to `0119` are byte-identical.** Not "almost still" — identical.
  If a render ever shows a difference there, something has acquired an
  independent ramp and must be put back on `resolve`.
- **No bounce, no spring, no overshoot, no floating.**

## Three.js

Not used.

The scene needs layered depth and a controlled dolly, both of which a 2.5D DOM
composition delivers exactly and deterministically. Mounting R3F to move
typography would add cost and risk without improving understanding, focus,
narrative, brand or transition. Continuity with the later 3D graph comes from the
spatial language — a projected camera, depth planes, parallax, a node-shaped mark
— not from sharing a renderer.

## Transition in

None. First frame of the video.

## Transition out

Scene 02 continues this camera outward, without a cut. The contract it inherits
at `0119`:

- the shared camera at `zoom 1.12`, targeting world `(0, 0)` and projecting it to
  screen `x 620, y 662` — no jump in position or apparent scale across the
  `0119/0120` boundary;
- the code field with no chrome, at its settled ladder (signature 0.55, body
  0.38, context 0.22, bed 0.16) — **not** a dimmed value: Scene 02 starts from
  these and takes the light out itself;
- the file caption top right at 80% opacity;
- the semantic underline at full strength under `withRetry`, exactly as wide as
  the symbol, which Scene 02 simply keeps;
- zero velocity. This scene is motionless at the cut, so Scene 02's opening
  easing is `bezier(0.4, 0, 0.2, 1)`, which starts from rest. An easing with a
  non-zero initial slope reads as a jerk against a still frame.

The camera never changes direction across the two scenes: this one moves outward
and stops, Scene 02 resumes outward. The boundary is a beat, not a reversal.

There used to be a third scene in the opening, between this one and the agent.
It was deleted; `02-agent.md` records why, and this scene's handoff now goes
straight to the agent scene.

## Copy

| Text | Role | Type |
| --- | --- | --- |
| `payments-api/internal/retry/retry.go` | file caption, upper right | JetBrains Mono 20 px, `textMuted`, 80% |
| `func withRetry(ctx context.Context, fn func() error) error {` … | the Go file, 27 lines | JetBrains Mono 38 px, one hue, opacity ladder |

That is all the copy in the scene, and the caption is metadata, not narration.

**Nothing is explained here.** Earlier versions of this scene carried
`What breaks if you change this?`, then `What breaks if this changes?`, then a
`CHANGE IMPACT` margin annotation. All three are gone. The video's only sentence
in this half is the agent's prompt in `02-agent.md`, which gives the sequence a
cleaner progression:

```text
withRetry is selected
  → the world around it turns out to be larger
  → the agent asks "What breaks if I change withRetry()?"
  → Kivgraph reveals the relationships
```

`CHANGE IMPACT` still exists in the video, but only once: as the heading of the
impact card in `04-blast-radius.md`. It is no longer a callback to this scene.

## Key frames

```text
frame 0000 — inside the code. Symbol dominant, edges cropped, no caption, no mark, code below its final luminance.
frame 0028 — the transition has not started; the camera is already moving.
frame 0055 — mid-transition: code lifting, accent landing, underline drawing, caption arriving, all at once.
frame 0080 — everything has landed together. Full composition, settled. STILL-IMAGE KEY FRAME.
frame 0100 — byte-identical to 0080.
frame 0119 — byte-identical to 0080. The handoff frame.
```

The still-image key frame is `0080`. The project's still-image list reads `0080`,
`0620`, `0710`, `0860`, `1030`, `1190`.

## Invariants

- `withRetry` never leaves its screen anchor, and it is the only coloured token
  in the code. A second coloured token dilutes the anchor of the whole video.
- **No explanatory text of any kind.** No sentence, no question, no annotation,
  no label, no uppercase margin note, no marketing line, no large type. The file
  caption is the only string on screen. If the scene ever needs words to work,
  the composition has failed.
- No card, pill, box, border, plate, callout, bubble or connector, anywhere, for
  anything.
- Hierarchy order is fixed: `withRetry`, the function signature, the remaining
  code, the file path.
- No editor chrome, and no floating panel or card. The code is the composition.
- Frame `0000` is never empty. The scene does not open on black and nothing
  fades up from nothing.
- The scene never resolves its claim. It ends settled and still, having marked a
  symbol and said nothing about it; Scene 02 is what resolves that. Stillness at
  the end is correct — a camera move at the end is not.
- No graph, no callers, no repository names, no relationship is drawn. The
  semantic mark never leaves the symbol: it is exactly as wide as `withRetry`
  and must never extend, point, or terminate in a node. The neighbouring files
  of the shared world are not rendered in this scene at all (`neighbours={0}`) —
  a second legible file here would create a second focal point.
- No logo and no product name. Kivgraph is not introduced until Scene 02's tool
  line, and not as a brand until Scene 10.
- Hierarchy is carried by opacity and scale, never by syntax colour.
- Camera moves are dolly only, in one direction: no orbit, no rotation, no
  handheld, no continuous float, and no reversal. `0080–0119` is genuinely
  motionless — verified byte-identical.
- Deterministic: every value derives from `useCurrentFrame()`. No timers, no
  randomness, no CSS transitions or keyframes.

## Flexible elements

- Exact camera values (2.35 / 1.12) and the easing curves.
- The bed's world position, depth, blur and opacity, as long as it never becomes
  legible and never competes with the anchor.
- The implementation lines below the signature, as long as the file still reads
  as plausible Go and the signature line is unchanged.
- Thickness and opacity of the semantic underline, and the frames over which it
  resolves — as long as it never becomes wider than the symbol.

## Technical notes

- `src/scenes/SymbolScene.tsx` owns every interpolation and nothing else.
  `src/components/CodeWorld.tsx` owns the spatial layout of the whole opening;
  `src/components/CodePlane.tsx` is pure and dumb — it receives a world position,
  a depth, the camera, an opacity per role, a symbol colour, a blur, and the
  semantic mark.
- **The camera is shared.** `src/world/camera.ts` projects
  `screen = cameraScreenPoint + (world − cameraTarget) × zoom × depth`, with
  apparent scale `zoom × depth`. Scenes 01–03 all drive that one camera, which is
  why the opening reads as a single continuous shot and why no scene can place a
  plane by hand. Two consequences are worth knowing before touching a camera
  value: pulling back makes planes at different depths converge (so lateral
  neighbours that must separate live at depth 1), and the camera targets the
  symbol, so the anchor cannot drift by accident.
- The anchor is expressed in `ch` units inside the plane: `left: calc(620px −
  9.5ch)` with `transform-origin: 9.5ch 750px`, where 9.5 is `col + width / 2`
  for `withRetry` (line 12, column 5, 9 characters). In a monospace face `1ch` is
  exactly one advance width, so the anchor needs no text measurement, survives a
  font-size change, and cannot drift out of sync with the glyphs.
- The code is stored as explicit token arrays with a `role` (`symbol`,
  `signature`, `body`, `context`) in `src/code/payments.ts`, not parsed at render
  time. No highlighter runs during the render and the anchored token is
  addressable by construction. The snippets moved out of this scene file when
  scenes 02 and 03 began consuming them.
- Fonts are self-hosted variable faces in `public/fonts` loaded through
  `@remotion/fonts` in `src/brand/fonts.ts`; `loadFont()` holds the render open
  until the faces are ready, so metrics match between Studio and a headless
  render and nothing depends on the network.
- Colours come from `src/brand/tokens.ts`. `brand.backgroundRgb` exists so the
  radial falloff can use alpha stops without scattering raw literals.
- Global frame boundaries live only in `src/Composition.tsx`.
- `Interactive.Div` wraps the caption so it stays editable in Remotion Studio.
  The camera and the hierarchy ramps are scene logic and are intentionally not
  exposed as editable inline styles.
- Verified: frames `0080`, `0100` and `0119` are byte-identical, which proves
  the settle window is motionless; frame `0120` of `KivgraphPromo` is
  byte-identical to frame `0000` of `Scene02Agent`, which proves the scene
  compositions and the master agree and that the render is deterministic.

## Current compromises

- **No sound.** The scene is silent and must stay understandable silent.
- **JetBrains Mono instead of Geist Mono.** The Kivgraph web ships Geist Mono;
  the video uses JetBrains Mono for all code, on explicit request, because code
  is the primary visual material at large sizes. This is a deliberate,
  documented divergence from the web's type stack. Its `==` ligature renders as
  a joined double bar in `err == nil`; kept, since that is the face's normal
  behaviour for the audience that reads it daily.
- **The left margin is now empty.** Removing the `CHANGE IMPACT` annotation left
  roughly 370 px of unused space left of the code. It reads as an intentional
  margin rather than a hole, and filling it with anything would reintroduce the
  problem the annotation was removed for. Accepted as-is.
- **The bed enters frame later than it used to.** With a true projected camera,
  a plane behind the camera plane is pushed outward when the camera is close, so
  at frame `0000` `client.go` is a sliver in the lower-right corner rather than
  a visible texture. At 9% opacity this is invisible either way, and the earlier
  behaviour was only possible because the two planes had independent, physically
  inconsistent scale ramps.
- **The symbol is not its own depth plane.** It lives in the camera plane so the
  line's kerning stays intact; foreground separation is carried by luminance and
  by the bed's parallax rather than by three literal planes.
- **Demo content.** `payments-api/internal/retry/retry.go` and its neighbours are
  written for the video, chosen to agree with the repository and symbol names of
  later scenes. Nothing is read from a real Kivgraph index.
- Scenes 01–05 are mounted, so `KivgraphPromo` is registered at `mountedFrames`
  (900) rather than the planned 1320. Frames `0900–1320` do not render at all
  yet, which is preferred over seven seconds of black.

## Modification history

```text
2026-08-23
- Initial scene specification and implementation: centred code editor card,
  selection highlight, headline below the card.
- Selection band made to recede as the accent landed, because an opaque
  #1e3a8a band swallowed the accent beat on the symbol.

2026-08-23
- Rejected and redesigned from first principles. The editor card, the centred
  layout, the headline below it and fade+scale as the dominant motion language
  are gone.
- The camera now lives inside the code: two parallax planes, no chrome,
  hierarchy by luminance, radial falloff, and withRetry pinned to a fixed
  screen anchor while the camera dollies around it.
- Duration 90 -> 210 frames. Every later scene shifted +120 and the master grew
  to 1620 frames (27 s).
- Code face changed to JetBrains Mono on request; Geist stays the brand sans.
- The scene now ends unresolved, pushing in on the symbol with a semantic line
  reaching out, instead of holding a finished layout.

2026-08-23
- Visual direction approved. Two failed attempts at placing the question as
  on-screen type: an upper-right hero block, then a 40 px annotation in the
  code's gutter. Both read as marketing type dropped onto the shot.
- The question was removed from this scene entirely. It is now spoken only by
  the agent in 02-agent.md as "What breaks if I change withRetry()?".
- Added CHANGE IMPACT as a small uppercase margin annotation on the symbol's
  axis, which also gives the previously empty left margin a purpose.

2026-08-23
- CHANGE IMPACT removed as well. The scene now carries no explanatory text of
  any kind; the file caption is the only string on screen. Reason: even a small
  uppercase margin label verbalises the scene's idea, and the whole point of
  the opening is that the symbol is established without being explained.
- The semantic mark was split into two beats. The underline resolves at
  0080-0112 and the reach plus node square now start at 0175 with the push-in,
  which both makes the mark read as deliberate rather than decorative and
  restores the motionless 0150-0175 settle window the earlier 0165 reach broke.
- The scene moved onto the shared projected camera in src/world/camera.ts and
  the shared spatial layout in src/components/CodeWorld.tsx, so the opening is
  literally one camera move through one world. The far plane's independent
  scale ramp is gone; its parallax is now a consequence of depth.
- Code snippets moved to src/code/payments.ts now that the agent scene
  consumes them.

2026-08-23
- The scene that used to follow this one (ProblemScene, storyboard SCENE 02)
  was deleted, so this scene now hands over directly to the agent scene. This
  scene's own frames, camera, hierarchy and content are unchanged; only the
  Transition out section and the references to what comes next moved.
- Master 1620 -> 1500 frames (25 s). Scene 01 keeps 0000-0210.

2026-08-23
- The semantic mark lost its reach and its node square. It is now a 1px accent
  underline exactly as wide as withRetry, resolved at 0080-0112 and held for the
  rest of the scene.
- Reason: a hairline running 210px out of the word and ending in a square read
  as decoration pointing at nothing. The mark's job is to say "this one is
  selected"; a line that leaves the word claims a direction the video has not
  earned yet. The scene still ends unresolved - the camera leaning in does that
  on its own.
- CodePlane's SemanticMark type is gone with it; `mark` is now a single 0-1
  scalar and the 2px lift is a constant.

2026-08-23
- Duration 210 -> 120 frames (2.0 s). Master 1500 -> 1410 frames (23.5 s); every
  later scene shifted -90. Still-image key frame 0150 -> 0080.
- The four staggered beats (hierarchy, caption, accent, underline) were merged
  into a single 0028-0080 window on one curve, driven by one `resolve` scalar.
  Reason: the scene read as a sequence of announcements rather than an arrival,
  and it was too slow.
- The closing push-in 1.12 -> 1.19 was deleted, and with it the dim-out that
  rode on it. Scene 02 opens by pulling back, so the push-in was a direction
  change undone half a second later - a wobble, not a gesture. The scene now
  makes one move outward and stops; 0080-0119 is byte-identical.
- Scene 02 consequently inherits zoom 1.12 and the *settled* luminance ladder
  (0.55 / 0.38 / 0.22, bed 0.16) instead of a pre-dimmed one, and its opening
  easing became bezier(0.4, 0, 0.2, 1) so it starts from rest.

2026-08-23
- The depth bed changed identity: payments-api/internal/payments/service.go ->
  payments-api/paymentService/client.go, exported from src/code/payments.ts as
  clientGo rather than serviceGo. Camera, frames, luminance and composition are
  unchanged.
- Reason: the old bed was `package payments` calling the unexported withRetry
  from `package retry`, which cannot compile. Nobody could see it - the bed is
  blurred and far behind - but the graph scenes were about to promote that
  relationship to a labelled node and put an impossible call on screen.
- The bed is no longer described as a caller of withRetry; it does not name the
  symbol at all. It is the public bridge out of the repository - Client.Charge
  goes through retry.Policy.Do, Client.Refund through retry.Once - and scene 03
  puts both methods on screen by name.
```
