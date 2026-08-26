# Scene 06 — Agent Answer

## Purpose

This scene closes the loop the video opened.

Scene 02 asked a question inside a coding agent. Everything between that question
and this scene was structure: a graph whose edges already cross repository
boundaries, a propagation that travels across one of them, a distinction between
a name and a symbol. None of that is the product's value on its own. The value
is that the structure becomes **an answer the agent can act on**.

This is the narrative step `Resultado medible` in `STORYBOARD.md` §3. The viewer
returns to exactly where they started and finds the question answered, in
concrete quantities, with the path named.

The scene must feel like a resolution, not like a new claim.

## Viewer takeaway

> The agent now knows what breaks — seven symbols, two repositories, and the exact
> path between them.

The takeaway is not "Kivgraph is powerful". It is that a question a developer
actually asks now has a precise, checkable answer.

## Narrative context

Immediately before: `05-semantic-resolution.md` (storyboard SCENE 07 —
NAME ≠ SYMBOL) has flattened the graph into a split view, dimmed the
name-matching side, and left `withRetry()` alone in the right column — settled,
still, no centred sentence and no veil. The viewer has just seen why the seven
textual matches were wrong and the one resolved symbol was right: the comparison
makes the point, so nothing has to state it.

This scene converts that authority into a result.

Immediately after: `07-benchmark.md` replaces the answer with the evidence that
producing it is also cheap. The benchmark only means something because the viewer
has just seen what was produced.

## Timeline

Storyboard source: `STORYBOARD.md` SCENE 08 — RETURN TO AGENT.

The storyboard scene number and the document number differ by two from here on:
storyboard SCENE 03 and SCENE 04 are implemented as the single
`GraphRevealScene` component, and storyboard SCENE 05 — CROSS-REPOSITORY was cut
from the film, so storyboard SCENE 08 is document 06. Read the mapping table in
`docs/scenes/README.md` before comparing frame numbers between the two files.

- Global frames: `0970`–`1150`
- Scene-local frames: `0000`–`0180` (last rendered frame `0179` / master `1149`)
- Time: 16.17 s – 19.17 s
- Duration: 180 frames / 3.0 s at 60 fps
- Remotion component: `src/scenes/AgentAnswerScene.tsx`

Beats:

| Master        | Local         | Beat                                                             |
| ------------- | ------------- | ---------------------------------------------------------------- |
| `0970`        | `0000`        | Match cut lands. Prompt layer is back, question still on screen.  |
| `0970`–`0994` | `0000`–`0024` | The symbol travels 201 px left and 74 px up to the token slot.    |
| `0994`–`1000` | `0024`–`0030` | Cross-fade: the travelling symbol becomes the prompt's token.     |
| `1000`–`1016` | `0030`–`0046` | Block 1: `Changing withRetry() affects:`                          |
| `1016`–`1032` | `0046`–`0062` | Block 2: `7 symbols` / `across 2 repositories.`                   |
| `1034`–`1050` | `0064`–`0080` | Block 3: the `checkout-service` path sentence                     |
| `1050`–`1064` | `0080`–`0094` | Label `Answered with Kivgraph` arrives and reads.                 |
| `1064`–`1150` | `0094`–`0180` | Hold. Nothing moves; the render measures 87 frames identical from `1063`. The frame is settled for the hard cut, and the hold is where the answer is read. |

Only `0970` and `1064` are fixed. The three block windows are the documented
rhythm, not a requirement, but they are **late and measured**: they may shift as
long as the blocks remain three distinct beats, the scene is fully settled by
`1064`, and no block loses dwell time against the figures in `## Motion` →
**The hold, and why the scene is 180 frames**.

## Initial state

At `0970` the frame is the agent prompt layer from `02-agent.md`, in the same
position and at the same scale it had there:

- **no terminal panel.** Scene 02 never draws one, and neither does this scene:
  the layer is a 1 px `borderStrong` `#333a42` rule, a `❯` glyph, one monospace
  row and one tool line, over `background` `#0a0b0d`. Its geometry is exported
  from `src/components/AgentPrompt.tsx` as `promptLayout`; read it rather than
  re-laying the row out;
- the prompt row `❯ What breaks if I change …?` in place, in `JetBrains Mono` at
  30 px, `textPrimary` `#f5f5f5` — every glyph of it except the token;
- the token slot `withRetry()` **empty**, its span holding its layout box at
  `tokenOpacity` `0`. The symbol that belongs there is still on its way: it
  arrives from the previous scene 201 px to the right and 74 px above, and a row
  drawn complete would put the same word on screen twice for twenty-four frames.
  The box is held rather than collapsed so the trailing `?` never moves and the line
  does not reflow when the token lands;
- the tool invocation line `kivgraph / get_blast_radius` present, its 7 px square
  marker in `accent` `#2563eb`, the text in `textSecondary` / `textMuted`;
- no answer text yet;
- the graph reduced to that single travelling symbol, drawn by the same renderer
  that drew it at `0969` so the cut matches; no other residue of the split view,
  and no divider or left column.

The code world behind the prompt returns. It starts at the exact levels scene 05
holds — anything else steps the background at the cut — and rises to the levels
scene 02 held while it asked the question, over the same twenty-four frames as the
symbol's travel. This was an open decision and the two frames either side of the
cut settled it; see `## Current compromises`.

The first frame must look like the prompt was always there and simply waited for
its symbol to come back.

## Final state

At `1149` the prompt layer holds the complete answer:

- the three answer blocks, all fully legible;
- the quantities `7` and `2` carrying the only accent in the block;
- `checkout-service` and `payments-api/paymentService` rendered as identifiers,
  not prose;
- the small `Answered with Kivgraph` label settled;
- nothing in motion.

The scene ends static on purpose. `07-benchmark.md` opens on a hard cut, and a
hard cut out of a moving frame reads as an editing accident.

## Visual composition

Single centred panel, mono-dominant, no decoration.

Hierarchy, strongest to weakest:

1. the quantities `7 symbols` / `across 2 repositories.` — the answer;
2. the lead-in `Changing withRetry() affects:` — the framing;
3. the path sentence naming `checkout-service` and
   `payments-api/paymentService` — the proof;
4. the question and tool lines carried over from `02-agent.md` — context;
5. the `Answered with Kivgraph` label — attribution, deliberately quiet.

Typography follows `AGENTS.md` §27 and `STORYBOARD.md` §7. Everything in this
scene is agent output, so everything is `JetBrains Mono`. Weights 400 and 500
only. The answer sits at the code scale (20–28 px); the quantities may rise to
the body scale (26–34 px) to carry the hierarchy above; the attribution label
sits at the label scale (16–20 px). No text smaller than 16 px.

Colour, per `AGENTS.md` §26:

- prose in `textSecondary` `#d4d4d4`;
- identifiers (`withRetry()`, `checkout-service`,
  `payments-api/paymentService`) in `textPrimary` `#f5f5f5`;
- the numerals `7` and `2` in `accent` `#2563eb`, or `accentText` `#bfdbfe` if
  measured contrast over `surface` `#101215` proves insufficient at the final
  size;
- the attribution label in `textFaint` `#737373`;
- everything else neutral.

The accent budget for the scene is the tool marker square, the retained selection
on `withRetry()`, and the two numerals. That is the whole of it — the accent here
means "important result", which is exactly what those numerals are.

Depth comes from the prompt rule and from luminance. There is no surface step,
no panel, no shadow, no glow and no rounded corner: `02-agent.md` establishes
that the agent is a layer over the world, not a window in it.

Answer text is left-aligned to the prompt's text column (`promptLayout.row.x`).
Agent output that does not share the prompt's left edge stops reading as output.

## Motion

The whole scene is three entrances, one label, and a hold.

The answer enters in **blocks**. Never letter by letter. This is explicit in the
storyboard and it is a meaning decision, not a taste decision: character-by-
character typing would read as the agent *composing prose*, which is a
chat-product gesture. Blocks read as a *result being returned*, which is what
Kivgraph does. The typing in `02-agent.md` belongs to the human; the output here
belongs to the tool, and the two must not use the same motion vocabulary.

Each block: opacity `0 → 1` with a short upward settle (8 px), over 16 frames, on
the storyboard's controlled curve (`Easing.bezier(0.22, 1, 0.36, 1)`) or a heavily
damped spring. No stagger inside a block — a block is one gesture. No bounce, no
overshoot, no blur.

The block windows are contiguous — local `30–46`, `46–62` and `64–80` — so each
block begins arriving as the previous one lands and the three beats read as one
cascade with internal structure rather than as three separate events. The answer
should feel returned in one motion.

Storyboard frame numbers mark the frame at which a beat **reads**, not the frame
at which its opacity ramp starts. The `Answered with Kivgraph` label therefore
*finishes* on `1064` rather than beginning there, so the reviewed frame `1064`
shows it legible.

The caret may rest after the question. It must not blink and must not retype
anything: the human is done, and a blinking caret during the hold would break the
settled final frame.

Nothing moves between `1064` and `1150`.

**The hold, and why the scene is 180 frames.** This scene ran 90 frames, and the
number that doubled it is **dwell time**: how long a readable thing stays on
screen after it has finished arriving.

At 90 frames the path sentence — `checkout-service consumes the symbol through
payments-api/paymentService.`, 73 characters, the proof the whole film builds
toward — settled with 34 frames left. That is **0.57 s, or 129 characters per
second**, against the 25–40 characters per second at which on-screen technical
text can actually be read. The payload of the entire video was the fastest thing
in it, and the film was accelerating into its own payoff.

The windows are therefore late and the hold behind them is long. Measured on the
180-frame cut, each element's dwell is:

| Element                                     | Settles at local | Dwell               |
| ------------------------------------------- | ---------------: | ------------------- |
| `Changing withRetry() affects:`             |               46 | 134 frames / 2.23 s |
| `7 symbols` / `across 2 repositories.`      |               62 | 118 frames / 1.97 s |
| the `checkout-service` path sentence        |               80 | 100 frames / 1.67 s |
| `Answered with Kivgraph`                    |               94 |  86 frames / 1.43 s |

The path sentence now reads at **44 characters per second**, inside the band. The
hold from local 94 to 180 is not padding and it is not a settled frame waiting for
a cut: it is the only place in the scene where the answer is read. All 86 of its
frames sit inside the 87-frame run the render measures identical, which starts one
frame earlier at `1063` because the label's easing is front-loaded and its last
frame moves less than one level of eight-bit grey.

The order of the dwell figures is deliberate and it is the reverse of the arrival
order. The lead-in has the longest dwell and needs the least of it; the label has
the shortest and is the quietest thing in the frame. What matters is that the two
load-bearing blocks — the quantities and the path — both clear a second and a
half.

## Three.js

Used for 30 of the scene's 180 frames, and only to finish the return trip.

`## Transition in` is the reason: this scene inherits a position and an apparent
size, *not* the token rect, so the symbol arrives 201 px right and 74 px below
where it belongs, on a plate carrying a node's padding rather than the prompt's
line box. Moving a shape the 3D renderer drew is work
for that renderer — a DOM reproduction of a lit plate would be an approximation
of a continuity match, and `AGENTS.md` §23 forbids covering a continuity failure
with an effect.

It is not new geometry. `graphFrame.ts` already defines the pose that lands the
anchor on `selectedTokenRect` and already defines `grow`, which at `0` makes the
plate exactly that rectangle; `answerState.ts` lerps the rig to that pose and
`grow` to `0`. The reveal in scene 03 ran those same two parameters the other
way. The canvas is unmounted once the DOM token has taken over, so the remaining
150 frames pay nothing for it.

## Transition in

This is the inverse of the video's most important transition. `03-graph-reveal.md`
turned a source-code token into a graph node; this scene turns the graph back
into a token.

`STORYBOARD.md` §27 specifies it as:

```text
graph contracts into selected symbol
↓
match cut into prompt text
```

The contraction converges on the `withRetry()` node, and this scene inherits **a
position and an apparent size**, not the token rect. `SemanticScene` leaves the
node where its right column drew it — 152 master pixels per world unit — and the
cut at `0970` lands on a shape that is already exactly there. Carrying that shape
back onto the `withRetry()` token inside the prompt row is *this* scene's beat,
made over its own hundred and eighty frames: `graphOffset` in
`src/three/graphFrame.ts` is
derived from `selectedTokenRect`, so the graph began on that rect and the film
closes the loop by putting the symbol back on it. An earlier version of this
document had the previous scene deliver the node pre-placed on the token, which
had it backwards — that would be the previous scene doing this scene's work, and a
match cut needs the shape in the same place on both sides of the cut, not already
moved.

Because Remotion `Sequence` boundaries at `0970` do not overlap, the contraction
is authored as the **tail of `SemanticScene`**, complete at frame `0956` and at
rest through `0969`. A match cut requires the outgoing shape to be settled at the
cut; if the contraction were still running at `0970` there would be nothing to
match. Agreed division with `05-semantic-resolution.md`: the comparison stands
`0868`–`0928`, everything leaves on one window `0928`–`0956`, and the frame is
pixel-identical from `0956` to `0969`. See `## Current compromises` for the
storyboard tension this resolves.

No wipe, no flash, no zoom blur (`STORYBOARD.md` §27). The transition is the
shape correspondence and nothing else. Per `AGENTS.md` §23, poor continuity must
not be hidden behind an effect: if the positions do not match, fix the positions.

## Transition out

Hard cut at `1150` into `07-benchmark.md`.

The answer is on screen, static, fully readable, and then it is simply gone,
replaced by typography on bare background. The cut is unsoftened on purpose: the
benchmark is a change of register, from "here is the answer" to "and here is what
it cost". A crossfade would blend the two into one continuous claim and weaken
both.

Nothing about this scene needs to survive the cut. No element carries over.

## Copy

New in this scene, verbatim:

```text
Changing withRetry() affects:

7 symbols
across 2 repositories.

checkout-service consumes the symbol through
payments-api/paymentService.
```

```text
Answered with Kivgraph
```

Carried over from `02-agent.md` and visible from frame `0970`, not new copy:

```text
❯ What breaks if I change withRetry()?
```

```text
■ kivgraph / get_blast_radius
```

The line break inside the `checkout-service` sentence is the storyboard's, and it
is a wrap point, not two sentences. Keep the sentence intact; where it breaks may
change with the final measured line width.

`payments-api/paymentService` is the public Go package that owns
`Client.Charge()` and `Client.Refund()`, and it is the only place the impact can
cross the repository boundary: `withRetry()` lives in
`payments-api/internal/retry`, which Go's `internal/` rule forbids
`checkout-service` from importing. The sentence is therefore not a restatement of
the graph — it names the one package the answer had to travel through.

No other text appears in this scene. No summary line, no call to action, no
"powered by", no feature name. `AGENTS.md` §28 and `STORYBOARD.md` §30 apply: the
scene communicates through the result, not around it.

## Key frames

```text
frame 0970 — match cut lands; prompt restored, question still on screen, no answer yet
frame 1000 — token landed, code bed back up, first block arriving
frame 1064 — full answer plus the "Answered with Kivgraph" label; the resolved frame
frame 1149 — settled final frame immediately before the hard cut
```

`0970` and `1064` are on the manual review list in `STORYBOARD.md` §28. `1064` is
*defined* as the frame the attribution label finishes on, which is also the frame
the scene goes static, so a retime moves it to wherever `labelOpacity`'s window
now ends. Neither is a designated still-image key frame (`AGENTS.md`'s
still-image key frame list is `0080`, `0629`, `0718`, `0864`, `1064`, `1190`,
`1350` — `1064` is on it because this retime put it there), but `1064` is the
frame that proves the loop closed and must be inspected as if it were a still.

## Invariants

- The prompt layer reappears at the **same position and the same scale** it had
  in `02-agent.md`, read from `promptLayout`. If it drifts, the match cut stops
  being a match cut and the scene becomes an unrelated shot of a prompt.
- The `withRetry()` token in the prompt is the anchor the incoming contraction
  converges on. Its position is a shared constant, not two independent layouts.
- The answer enters in blocks. Never letter by letter.
- The quantities are `7 symbols` and `across 2 repositories.` and they must agree
  with the impact card in `04-blast-radius.md` (`7 affected symbols`,
  `2 repositories`). Both read the same demo dataset. If the dataset changes,
  both change together, or the video contradicts itself on screen.
- No copy is invented here. Every string in this scene comes from
  `STORYBOARD.md` SCENE 08 or is carried over from `02-agent.md`.
- The scene is readable without audio and legible as a still (`AGENTS.md` §37).
  The answer is the payload of the entire video; it may never depend on motion,
  sound, or colour alone to be understood.
- Accent marks only the result and the Kivgraph invocation. The scene stays
  ≥ 85 % neutral.
- The frame is static from `1064` to `1150`, and that hold is the answer's reading
  time rather than slack. The path sentence's dwell is 100 frames — 1.67 s, 44
  characters per second. Shortening the scene, or moving any block later, spends
  reading time on the payload of the entire film; the measurement that set these
  numbers is in `## Motion`.
- No 3D in this scene. The contraction belongs to the previous scene.

## Flexible elements

- The exact block entrance windows, easing, and travel distance, provided every
  block keeps the dwell recorded in `## Motion`.
- Whether the quantities use `accent` `#2563eb` or `accentText` `#bfdbfe`, decided
  by measured contrast at the final type size.
- Whether `7 symbols` and `across 2 repositories.` are two lines or one, and the
  wrap point of the `checkout-service` sentence.
- The precise placement of the `Answered with Kivgraph` label (beneath the answer,
  or bottom-aligned inside the panel).
- Whether the label is preceded by the 8 × 8 `#2563eb` mark from the real
  Kivgraph lockup. Permitted because it is the actual mark; not required.
- The vertical gaps between the answer blocks.
- Whether the tool invocation line remains at full strength or is slightly
  de-emphasised once the answer arrives.

## Technical notes

- Component: `src/scenes/AgentAnswerScene.tsx`.
- Shared component: `src/components/AgentPrompt.tsx`, which owns the rule, the
  `❯` glyph, the prompt row, the tool line, and the exported `promptLayout` /
  `tokenRect` geometry. There is no `Terminal.tsx` and no `ToolInvocation.tsx`:
  scene 02 draws no terminal window, and the tool line is one line rather than a
  reusable piece.
- The prompt geometry — row origin, font size, line height, token rectangle —
  is defined once in that module and consumed by both `AgentScene` and
  `AgentAnswerScene`. Two independent layouts that happen to look similar will
  drift the moment either is touched, and the invariant above is exactly what
  drifts.
- Global scene boundaries live inline in `src/Composition.tsx` as
  `<Sequence name="06 Agent Answer" from={970} durationInFrames={180}>`
  literals, because Remotion Studio can only trim inline literals. There is no
  timing module. The component animates in scene-local frames:
  `useCurrentFrame()` inside the Sequence starts at `0`. It reads the frame it
  inherits by sampling `getSemanticState(200)`, past the end of that scene's local
  range, so every ramp in it has clamped.
- The quantities should be derived from `src/data/graphDemo.ts` (count of
  affected symbols, count of distinct repositories) rather than typed as string
  literals, so the answer, the blast-radius impact card, and the graph cannot
  disagree. See `AGENTS.md` §20 and §29.
- Fonts are loaded deterministically from `src/brand/fonts.ts`
  (`"Geist"`, `"JetBrains Mono"`, local `.woff2` via `@remotion/fonts`). Do not
  introduce a fallback family here: a late font swap inside the prompt row
  shifts every glyph and destroys the match cut.
- Colours from `src/brand/tokens.ts`. No raw hex in the component.
- All state derives from the frame (`AGENTS.md` §17). No timers, no
  `Math.random()`, no typing simulation driven by anything but `frame`.
- Cheap scene: 2D text on a panel. No performance concerns.

## Current compromises

- **Implemented.** `src/scenes/AgentAnswerScene.tsx` and `src/three/answerState.ts`
  exist and the scene renders. It consumes `src/data/graphDemo.ts` for its
  quantities and `AgentPrompt.tsx` for its geometry rather than rebuilding either.
  This bullet used to read "Not implemented yet" long after the scene had landed.
- **Storyboard tension, resolved.** `STORYBOARD.md` places the graph contraction
  at the agent answer's first frame while giving storyboard SCENE 07 a tail that
  stands complete to `0928` and then leaves on one window `0928`–`0956`. Both
  cannot be true at a non-overlapping Sequence boundary, and a contraction that
  begins at `0970` is unreachable inside `AgentAnswerScene` without making this a
  3D scene. Resolution agreed with `05-semantic-resolution.md`: `SemanticScene`
  owns the contraction — the stand `0868`–`0928`, the exit `0928`–`0956`, and the
  frame pixel-identical from `0956` to `0969`. Both documents record the same
  division. Do not let a future agent re-split it in only one of them.
- **Selection treatment, now decided.** `02-agent.md` owns how the selected
  `withRetry()` token looks and has settled on a `brand.selection` `#1e3a8a`
  field with the glyphs in `brand.accentText` `#bfdbfe`, scaled 1.08. This scene
  inherits that unchanged.
- **The code world behind the prompt: settled, and it comes back.** The bed starts
  at the exact levels scene 05 holds — anything else steps the background at the
  cut and the cut stops being a match — and rises to the levels scene 02 held while
  it asked the question, over the same twenty-four frames as the travel. This
  bullet used to record it as an open decision jointly owned with
  `05-semantic-resolution.md`; the two frames either side of the cut decided it.
- **Sound absent.** `STORYBOARD.md` §18 permits a very short digital click on
  tool invocation. Nothing is authored yet, and per §17 the piece must work
  muted, so this is a deliberate omission rather than a gap.

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
  from 08 to 07 and every master frame in it moved −120: the scene now spans
  `1080`–`1170` and realises storyboard SCENE 08. Beats, durations and
  scene-local frames are unchanged.
```

```text
2026-08-23
- Scene 01 was shortened from 210 to 120 frames, so every master frame in this
  document moved −90: the scene now spans `0990`–`1080` and the master is now
  1410 frames (23.5 s). Beats, durations and scene-local frames are unchanged.
```

```text
2026-08-23
- The demo graph was rebuilt so that its call chains compile: `withRetry()` is
  unexported, so its callers are `Policy.Do()` and `Once()`, and the impact can
  only reach `checkout-service` through the public `payments-api/paymentService`
  package. The answer is `7 symbols` across 2 repositories, not 6, and the
  `paymentService` sentence now records why that package is in the path. Frames,
  beats, motion and every other string are unchanged.
```

```text
2026-08-25
- Scene 04 (Cross Repository) was deleted, so this document was renumbered from
  07 to 06 and every master frame in it moved −90: the scene now spans
  `0900`–`0990` and the master is now 1320 frames (22 s). It still realises
  storyboard SCENE 08 — RETURN TO AGENT, but the document number now runs two
  behind the storyboard number rather than one. Beats, durations and scene-local
  frames are unchanged.
- `A name is not a symbol.` was cut from the film together with the veil that
  carried it, so the description of what the viewer has just seen before the
  match cut now names the settled split view itself instead of a sentence they
  were told. The previous scene's hold and contraction keep the same shape,
  renumbered to `0880`–`0889` and `0889`–`0899`, settled at `0899`.
```

```text
2026-08-25
- The blast radius was trimmed from 120 to 100 frames, so every master frame in
  this document moved −20: the scene now spans `0880`–`0970`, its last rendered
  frame is `0969`, and the master is now 1300 frames (21.7 s). It still realises
  storyboard SCENE 08 — RETURN TO AGENT at a two-scene offset. Beats, durations
  and scene-local frames are unchanged.
- Nothing about this scene caused the trim. The blast radius lost its claim line
  and veil, which left 41 pixel-identical frames in its tail; twenty came off and
  everything downstream of 0730 followed. The previous scene's hold and
  contraction keep the same shape, renumbered to `0860`–`0869` and
  `0869`–`0879`, settled at `0879` — a settle frame that was also corrected from
  the stale `0899` this document used to quote.
- The match cut is still a cut onto a settled shape: 880 mounted frames render
  with no black frame and no single-frame anomaly. The inherited position and
  apparent size, the answer copy and every quantity in it are unchanged.
```

```text
2026-08-25
- Implemented. `src/scenes/AgentAnswerScene.tsx` and `src/three/answerState.ts`
  exist; `mountedFrames` is 970 and the scene renders. Five things this document
  left open or stated wrongly are now settled by the implementation, and the
  sections above have been rewritten to match.
- **The scene uses Three.js, for 26 of its 90 frames.** `## Three.js` used to say
  "Not used" and `## Invariants` used to say "No 3D in this scene". Both were
  wrong, and the reason is in this document's own `## Transition in`: it inherits
  a position and an apparent size, *not* the token rect, so the shape has to
  travel 201 px left and 74 px up, and lose the plate's padding, to reach the
  token. The only
  exact way to move a shape the 3D renderer drew is that renderer. Reproducing a
  lit plate in DOM would be an approximation of a continuity match, which
  `AGENTS.md` §23 forbids. The canvas is unmounted once it has handed over.
- **The travel is the reveal run backwards, not new geometry.** `graphFrame.ts`
  already defines the pose at which `graphOffset` lands the anchor on
  `selectedTokenRect` — `cutDistance`, stated through that constant rather than
  the literal `9` — and already defines `grow`, which at `0` makes the anchor's
  plate exactly that rectangle. So `answerState.ts` lerps the rig to that pose
  and `grow` to `0` over 20 frames, and the landing is exact by construction
  rather than by tuning.
- **`## Initial state` contradicted `## Transition in` and has been corrected.**
  It claimed the prompt row was complete at `0880` with the token carrying its
  selection. It cannot be: the incoming symbol is 201 px away, so a complete row
  would put the word on screen twice for twenty frames. `AgentPrompt` gained a
  `tokenOpacity` prop; the row is complete except for the token, whose span keeps
  its layout box at `0` so the trailing `?` never moves and the line does not
  reflow when the symbol arrives. Measured: the symbol region across the cut is
  42.2 dB while the whole frame is 27.9 dB — the shape matches, the context
  swaps, which is what a match cut is.
- **The open decision about the code world is settled: it comes back.** The bed
  starts at the exact levels scene 05 holds, or the background steps at `0880`
  and the cut stops being a match; it then rises over the same twenty frames as
  the travel to the levels scene 02 held while it asked the question. Those
  levels were dimmed for a split view that filled the frame, and under a single
  prompt in the lower third they left the top half of the image dead for ninety
  frames. `symbol` tracks `signature` rather than scene 02's `1`: there the lit
  token was the subject, here it would compete with the answer.
- **Two cross-fades, both uneased.** Two eased ramps do not sum to one, so a
  cross-fade between two renderings of the same rectangle would dip or double
  halfway. The symbol hands over to the DOM token linearly over six frames, and
  the selection field settles from `1` to scene 02's `0.85` over twelve —
  `GraphWorld` draws that field at full opacity when `grow` is `0`, because scene
  03 needed it to cover the field the DOM was still drawing underneath, so
  running it backwards would step 15% darker in one frame on a 214 × 47 px block.
- Two `## Flexible elements` were exercised. The counts are **one line**, not
  two: at 32 px mono `7 symbols across 2 repositories.` is 576 px wide, so the
  break was a wrap point that is no longer needed, and one line makes the two
  quantities read as one fact. The path sentence is also one line at 22 px. The
  numerals are **`accentText` #bfdbfe, not `accent` #2563eb**: measured, `accent`
  on `background` is 3.83:1, which passes WCAG only as large text, and these two
  numerals are the payload of the entire film.
- Verified: 970 frames render with no black frame; the only frame the anomaly
  scan flags is `0880`, which is the cut itself — a step, not a spike. The frame
  is byte-identical from `0939`, one frame earlier than the `0940` the storyboard
  requires. Every earlier seam is unchanged despite `AgentPrompt` gaining a prop:
  `0329/0330` is still pixel-identical, `0629/0630` is 62.93 dB, `0729/0730` is
  pixel-identical.
```

```text
2026-08-25
- Scene 05 grew from 150 to 180 frames, so every master frame in this document
  moved +30: the scene now spans `0910`–`1000`, its last rendered frame is
  `0999`, and the master is now 1330 frames (22.2 s). It still realises
  storyboard SCENE 08 — RETURN TO AGENT at a two-scene offset. Beats, durations
  and scene-local frames are unchanged, and the label frame the storyboard fixes
  is now `0970`.
- Nothing about this scene caused the growth and nothing inside it changed. The
  previous scene's tail was re-authored rather than shifted: its comparison now
  stands 0815-0875, everything leaves on one window 0875-0903, and the frame is
  pixel-identical from 0903 to 0909. The old "hold 0860-0869, contraction
  0869-0879" division is superseded, and both documents record the new one.
- The match cut is still a cut onto a settled shape and it is now 0909/0910:
  41.4 dB over the symbol region while the context swaps. 1000 mounted frames
  render with no black frame, and the anomaly scan flags 0909 alone, which is the
  cut itself. This scene is static from 0969 through 0999, where it used to be
  static from 0939 - still one frame clear of the label frame. The inherited
  position and apparent size, the answer copy and every quantity in it are
  unchanged.
```

```text
2026-08-25
- The scene doubled, from 90 frames to 180, and a measurement is the whole reason.
  It now spans `0970`-`1150`, its last rendered frame is `1149`, its scene-local
  range is `0000`-`0180`, and the master is 1480 frames (24.7 s). Two upstream
  changes moved its start: scene 04 grew 100 -> 140 and scene 05 grew 180 -> 200,
  so `0910` became `0970`.
- The measurement is **dwell time** - how long a readable thing stays on screen
  after it has finished arriving - and this scene was the worst offender in the
  film. At 90 frames the path sentence settled with 34 frames left: 73 characters
  in 0.57 s, which is **129 characters per second**, against the 25-40 that
  on-screen technical text can actually be read at. The sentence names the one
  package the impact can legally travel through, it is the proof the whole film
  builds toward, and it was the fastest thing in the film.
- Windows retimed: travel `0-24` (was 0-20), cross-fade `24-30`, blocks at `30-46`,
  `46-62` and `64-80` (were 10, 25, 40), label `80-94` (was centred on local 60).
  The frame is static from local 94 to 180.
- Measured dwell after the change: lead `2.23 s`, counts `1.97 s`, path sentence
  `1.67 s` - **44 characters per second**, inside the band - and label `1.43 s`.
  The hold is 87 frames measured identical at master `1063-1149`, and it is not
  padding: it is the only place in the scene where the answer is read.
- The key frame moved `0970` -> `1064` and is now stated as a definition rather
  than a number: the frame the attribution label finishes on, which is also the
  frame the scene goes static. It joined `AGENTS.md`'s still-image list with this
  retime.
- Three.js now runs for 30 of 180 frames rather than 26 of 90; the travel is 24
  frames instead of 20, and the canvas is still unmounted once the DOM token has
  taken over, so the remaining 150 frames pay nothing.
- Measured: 1150 mounted frames render with no black frame. The match cut is now
  `0969/0970` and measures **41.35 dB** over the symbol region while the context
  swaps; the anomaly scan flags `0969` and `0970`, the two sides of that cut, and
  nothing else. `0629/0630` is still 62.93 dB and `0769/0770` is pixel-identical.
- Two stale compromises were corrected while the timing was: this scene was still
  described as "not implemented yet", and the code bed behind the prompt was still
  listed as an open decision although the entry above settles it. Neither survived.
- The inherited position and apparent size, the answer copy, every quantity in it
  and the block-not-typing rule are unchanged.
```
