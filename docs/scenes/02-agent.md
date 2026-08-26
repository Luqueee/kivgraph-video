# Scene 02 — Agent

## Purpose

Say the question out loud, for the first and only time, and introduce Kivgraph as
the thing that answers it.

Scene 01 built the question without stating it: a symbol was singled out inside a
real file and marked as having consequences. This scene widens out of that shot,
takes the light out of the code, and lets a developer type what the viewer is by
now ready to ask — `What breaks if I change withRetry()?`. The agent reaches for a
tool, `kivgraph / get_blast_radius`. That single line is the first mention of the
product in the video. It is deliberately small, technical and undramatic, because
Kivgraph's positioning is credibility, not spectacle.

The scene also has a mechanical job: by frame 0329 the token `withRetry()` must be
sitting in a known screen position at a known apparent scale, selected and
slightly enlarged, so that scene 03 can turn that exact glyph into a 3D graph node
without a visible jump.

In `STORYBOARD.md` §3 this is the narrative step:

```text
Cambio aparentemente pequeño
  ↓
Pregunta
  ↓
Kivgraph comprende el símbolo
```

Two storyboard steps land in one scene because the beat between them — *the world
is bigger than this file* — turned out not to need a scene of its own. See
`## Why this scene absorbed its predecessor`.

## Viewer takeaway

> The agent doesn't guess. It calls Kivgraph.

Secondary, carried by the framing rather than by copy: this is how a developer
already works — they ask their agent, and the agent uses tools.

## Narrative context

**Before.** Scene 01 (`01-symbol.md`, frames 0000–0120) ends settled and
motionless: the camera stopped at zoom 1.12, `withRetry` accented at screen
`x 620, y 662` with a 1 px accent underline exactly as wide as it, and the file
caption `payments-api/internal/retry/retry.go` in the upper right. What is
unresolved there is the claim, not the camera — a symbol has been marked and
nothing has been said about it.

**After.** Scene 03 (`03-graph-reveal.md`, frames 0330–0630) match-cuts out of
this frame: `withRetry()` stops being HTML text and becomes the central node of a
Three.js graph.

**Later.** Scene 06 (`06-agent-answer.md`, frames 0970–1150) match-cuts _back_
into this prompt row to deliver the answer. This scene therefore defines a
reusable geometry, not a one-off layout: the rule, the row and the token positions
established here must be reproducible 640 frames later, which is why they are
exported constants rather than inline numbers.

## Why this scene absorbed its predecessor

There used to be a scene between scene 01 and this one — `ProblemScene.tsx`,
storyboard `SCENE 02 — THE LIMITATION`, 150 frames. It was deleted rather than
merged, and the reasoning belongs here because this scene inherited its frames.

Its job had been to deliver two lines of copy, `Your agent can read this file.`
and `But what depends on it?`. The 150 frames existed so two sentences could be
read one after the other. When the opening dropped all explanatory text, the copy
went and nothing was left for the scene to do. What replaced it — neighbouring
package files revealing that `withRetry` already appears elsewhere — stated
something obvious (code lives in a codebase) and spent, in grey and 200 frames
early, the reveal that scenes 03 to 05 exist to deliver.

The limitation it was meant to establish is now carried by the question itself. If
a developer has to ask what breaks, they cannot see it; the cost of not seeing it
is paid in numbers in `07-benchmark.md`. Nothing needs to say it out loud.

What survives is the movement: the widen-and-dim is now the first 70 frames of
this scene, where it is a transition rather than a statement.

## Timeline

- Storyboard scene: `STORYBOARD.md` — SCENE 02 ASK THE AGENT
- Global frames: 0120–0330
- Scene-local frames: 0000–0210
- Time: 2.0 s – 5.5 s
- Duration: 210 frames (3.5 s at 60 fps)
- Remotion component: `src/scenes/AgentScene.tsx`
- Registration: `<Sequence name="02 Agent" from={120} durationInFrames={210}>`
- The global boundary lives inline in `src/Composition.tsx`. The component
  animates in scene-local frames.

| Master | Local | Beat |
| -----: | ----: | ---- |
| 0120 | 0000 | Scene 01's last image, unchanged. The camera picks up from rest and begins to widen. |
| 0126 | 0006 | The inherited file caption starts leaving. |
| 0134 | 0014 | The two package siblings begin resolving out of the falloff. |
| 0150 | 0030 | The prompt rule starts drawing. |
| 0156 | 0036 | The `❯` glyph resolves; the caption is gone. |
| 0165 | 0045 | Typing begins. |
| 0172 | 0052 | The code has reached its held luminance — before the first word is legible. |
| 0178 | 0058 | The prompt rule is fully drawn. |
| 0190 | 0070 | The camera has finished widening at zoom 0.66. |
| 0210 | 0090 | Mid-typing, around `What breaks if`. |
| 0245 | 0125 | Typing complete, including the `?`. |
| 0255 | 0135 | Enter. The caret retires and the `❯` gains weight. |
| 0270 | 0150 | `kivgraph / get_blast_radius` begins to appear. |
| 0300 | 0180 | Tool line settled. Both `withRetry` occurrences begin to be selected; the push-in starts. |
| 0329 | 0209 | Last frame; the match-cut contract frame. |
| 0330 | — | Scene 03 takes over the same glyph. |

## Initial state

At master frame 0120 (local 0000) the previous image is still on screen, exactly.
There is no cut:

- the camera at `zoom 1.12`, targeting world `(0, 0)` and projecting it to screen
  `x 620, y 662`, and **at rest** — scene 01 stopped moving 40 frames ago;
- the chromeless code field at scene 01's settled ladder, signature 0.55 / body
  0.38 / context 0.22, the blurred bed at 0.16. These are lit values, not dimmed
  ones: scene 01 never dims, so the whole fall belongs to this scene;
- `withRetry` in `brand.accentText` `#bfdbfe` with its 1 px accent underline,
  exactly as wide as the symbol;
- the file caption `payments-api/internal/retry/retry.go` top right at 80%;
- the neighbouring columns at zero luminance, so they are not rendered;
- no rule, no prompt, no glyph, no caret, no tool line, no scrim.

The scene has to begin looking like nothing has happened yet. Everything it adds
arrives in the following 60 frames.

## Final state

At master frame 0329 (local 0209):

- the code world widened to `zoom 0.70` and dimmed to a texture, with `withRetry`
  at `x 712, y 356`;
- the completed prompt row `❯ What breaks if I change withRetry()?`, with
  `withRetry()` selected — a `brand.selection` `#1e3a8a` field behind it, the
  token in `brand.accentText` `#bfdbfe`, scaled to 1.08 about its own centre;
- `withRetry` **in the code above carrying the same selection field**, at 70% of
  the prompt's strength;
- the tool invocation line `■ kivgraph / get_blast_radius` settled and quiet
  below;
- the caption gone.

The selected token is the brightest, most forward thing in frame. That is the
state scene 03 inherits.

## Visual composition

**There is no terminal.** No window, no panel, no surface step, no border box, no
title bar, no traffic lights, no tab strip, no chat bubble, no assistant panel.
The video never leaves the code environment, so the agent arrives as the smallest
interface that can carry a prompt:

```text
a 1px rule
+
a ❯ glyph
+
one monospace line
+
one tool line
```

That is the entire UI. A terminal card dropped over the code would make the agent
read as a different product in a different shot, which is exactly the failure this
design exists to avoid.

**The prompt geometry** is exported from `src/components/AgentPrompt.tsx` as
`promptLayout` and `tokenRect`, because scenes 03 and 07 consume it:

```text
rule   x 440,  y 604,  width 900
row    x 500,  y 632,  30 px / 44 px line height
tool   x 500,  y 712,  20 px
```

The `withRetry()` token therefore sits at `x 968–1166`, centred at
`x 1067, y 654` — inside the 9:16 safe crop with room to spare, close enough to
the optical centre for scene 03 to grow a graph out of it.

At the match-cut frame the token is scaled by `settledGrow` (1.08) about
`growOrigin`, which is 55% down the line box rather than its centre, so the
scaled rectangle is not simply the one above times 1.08. Scene 03 reads
`selectedTokenRect` — `213.84 × 47.52 px` centred on `(1067, 653.82)` — and does
not apply the scale itself. That rectangle has been measured against a render:
the selection field in frame `0329` agrees with it to within half a pixel.

**Hierarchy.**

1. the typed question, and within it `withRetry()` from 0300;
2. `withRetry` in the code above, which never stops being the anchor;
3. the tool invocation line;
4. the code world, which is now texture.

**The neighbouring columns.** As the camera widens, `backoff.go` and `policy.go`
resolve at the frame edges and stay there at ~7% luminance. They are never the
subject and are never legible enough to read as an argument. They exist so the
frame has material at its edges and so the examined file is visibly not the whole
world — the residue of the deleted scene, reduced to the one thing about it that
was worth keeping.

**The tool line.** `kivgraph / get_blast_radius` in `JetBrains Mono` at 20 px. The
bullet is a 7 px square in `brand.accent` `#2563eb` — the same shape as the node
square in scene 01 and as the graph nodes later, not a round `●`, because the
square is the brand's mark. `kivgraph` sits in `brand.textSecondary`, the
separator in `brand.textFaint`, the tool name in `brand.textMuted`. The restraint
is the point: the product announces itself the way a real tool call appears in a
real agent transcript.

**Colour.** Neutral, with accent on exactly three things, all of them the same
idea: the selected token in the prompt, the same symbol in the code, and the
invocation square.

**Typography.** `JetBrains Mono` throughout — code, prompt, tool line. This scene
has no marketing copy, so `Geist` does not appear.

**Depth.** The shared camera plus two falloffs: the radial one that has been
running since scene 01, which follows the camera's screen point, and a vertical
gradient that takes the light out of the lower half so the prompt reads against
near-darkness. That gradient stops at 72% on purpose — the code stays faintly
present under the prompt, because the video never leaves it.

## Motion

**The widen (0120–0190 / local 0000–0070).** The same camera that has been moving
since frame 0000 of scene 01, resumed. Scene 01 pulled back to 1.12 and stopped;
this scene picks the world up from rest and keeps going in the same direction, on
`bezier(0.4, 0, 0.2, 1)` — zero initial velocity, because an easing with a slope
at frame 0 reads as a jerk against a still frame. There is no reversal anywhere
in the opening: the camera moves outward, pauses, and moves outward again. It
opens to 0.66 — enough to admit the package around the file and to clear the
lower half of the frame — and the anchor travels from `x 620, y 662` to
`x 712, y 356`, carried by the camera, never re-laid-out.

**The world loses light faster than the camera moves**, falling from scene 01's
settled ladder to its held one by 0172, before the first typed word is legible,
so the question never has to compete with a line of code sitting next to it.
Scene 01 hands over lit values and this scene takes every step of the light down.
`withRetry` keeps its accent throughout: the world recedes, the symbol does not.

**The mark does not move.** The underline scene 01 resolved under `withRetry`
is inherited at full strength and held, unchanged, through the whole scene. It is
exactly as wide as the symbol and never extends: nothing is connected to anything
before scene 03.

**The caption leaves (0126–0156 / local 0006–0036).** The frame stops labelling
where we are and starts carrying what is being asked.

**The prompt layer emerges (0150–0178 / local 0030–0058).** The rule draws from
its left end on `bezier(0.22, 1, 0.36, 1)`; the `❯` glyph fades in behind it; the
vertical falloff comes up over 0136–0170. Nothing slides, nothing scales, nothing
bounces.

The rule finishes drawing after typing has begun, on purpose. The prompt is not
presented and then filled; it resolves while the first word is already arriving,
which is what keeps it from reading as a UI that was introduced.

**Typing (0165–0245 / local 0045–0125).** Revealed in groups, never at a uniform
per-character rate — uniform typing reads as a machine printing a string, grouped
typing with unequal pauses reads as a person thinking:

```text
What
What breaks
What breaks if
What breaks if I change
What breaks if I change withRetry()
What breaks if I change withRetry()?
```

The number of groups is a rhythm decision. What is not flexible is that the reveal
is grouped and irregular and that it finishes by 0245, so there is a beat of
stillness before Enter. The caret blinks on a period derived from the frame, never
from a timer.

**Enter (0255 / local 0135).** The caret disappears and the `❯` glyph gains weight
over ten frames. No flash, no ripple, no sound dependency. The gap 0245–0255 is
intentional: the question sits complete and uncommitted for ten frames, which is
what makes pressing Enter feel like a decision.

**Tool invocation (0270–0300 / local 0150–0180).** The line fades in with an 8 px
upward settle, damped and mechanical. It arrives as *information*, not as an
event. No spinner, no progress bar, no streaming dots, no "thinking" animation —
Kivgraph resolving a symbol is not a wait state in this video.

**Selection and push-in (0300–0330 / local 0180–0210).** Four things happen
together and must read as one:

1. `withRetry()` in the prompt takes the selection field and `accentText`;
2. `withRetry` in the code takes the same selection field at 70% strength;
3. the prompt token scales to 1.08 about its own centre;
4. the camera pushes back in from 0.66 to 0.70.

The second of those is the scene's whole idea about Kivgraph, stated visually:
**one symbol, in two places.** No line, arrow or connector is drawn between the
code and the prompt, and none is needed — the identical treatment is the
connection.

The push-in is slow and only just perceptible. It is not a zoom to a close-up; it
is the first 30 frames of a 60-frame move that scene 03 finishes with a real
Three.js camera.

**Rhythm.** Widen → emerge → type → pause → commit → tool → focus. Each beat lands
before the next begins; only the last four overlap, deliberately.

## Three.js

Not used.

This scene is DOM only. The push-in that starts at 0300 is a 2.5D camera move, and
the handoff to the Three.js camera happens at the scene boundary. See
`## Transition out`.

## Transition in

Continuous. No cut, no dissolve, no wipe. Scene 01 hands over its exact final
image and this scene widens out of it while subtracting light.

An earlier plan had a hard cut into a terminal here, on the argument that the
preceding scene was a map and this one is a conversation. That argument was wrong
for this film: the map and the conversation are the same place, and cutting
between them made the agent look like a separate product demo spliced into a code
film. The rhythm change the cut was buying is now bought by the prompt layer
arriving instead.

## Transition out

Match cut at 0330 into `03-graph-reveal.md`. This is the transition
`STORYBOARD.md` §27 names `Code → Graph`:

```text
symbol text
↓
same symbol as graph node
```

**The contract.** At 0329 this scene owes scene 03:

- the token's screen rectangle: `x 968–1166`, centre `x 1067, y 654`, scaled 1.08
  about that centre — available programmatically as `tokenRect` and
  `promptLayout` from `src/components/AgentPrompt.tsx`, so neither scene has to
  hard-code it;
- the font (`JetBrains Mono`), 30 px;
- the token colour `brand.accentText` and the selection field `brand.selection`
  behind it;
- the camera's velocity and direction at 0329, so the R3F camera starting at
  `Z: 9` reads as a continuation rather than a new move;
- the fact that what dissolves after 0330 is the *prompt layer and the code
  world*, not a terminal panel;
- **the image itself.** `AgentFrame` is exported alongside `AgentScene`: it is
  this scene's body with the frame as a prop, and scene 03 renders
  `<AgentFrame frame={209} />` underneath its canvas and fades it out. The cross
  fade is between the same pixels rather than between an image and a
  reconstruction of it, which is why master `0329` and `0330` render
  byte-identical. Any change to this scene's last frame therefore changes scene
  03's first frame, automatically and by construction.

Changing `promptLayout`, the token's scale or the push-in curve **requires
updating `03-graph-reveal.md` and `06-agent-answer.md` in the same task.**

## Copy

Verbatim, in order of appearance:

```text
payments-api/internal/retry/retry.go
```

```text
❯
```

```text
What breaks if I change withRetry()?
```

```text
kivgraph / get_blast_radius
```

Notes on the copy:

- The file caption is inherited from scene 01 and leaves in the first 36 frames.
  It is metadata, not narration.
- The question is typed with the final `?`. The storyboard's typing-group list
  stops at `withRetry()` because it enumerates group boundaries, not the final
  string.
- **This scene owns the question.** Scene 01 carries no sentence at all. The first
  and only time the video states the question is here, typed by a developer. The
  question belongs to a person, not to a caption over the code, which is why the
  opening stays silent and this scene types it.
- The tool line is a tool name, not a sentence: lowercase `kivgraph`, snake_case
  `get_blast_radius`, no punctuation, no explanation appended. The leading mark is
  a drawn square, not a text bullet.
- No other text appears. No model name, no timestamps, no token counts, no
  "thinking…", no logo.

## Key frames

```text
frame 0120 — scene 01's last image, unchanged; nothing has arrived yet
frame 0150 — mid-widen; the world is opening, the caption is going, the code is dimming
frame 0270 — the prompt layer is drawn and the code has receded; the question is starting
frame 0210 — mid-typing; the question is legibly forming
frame 0255 — Enter; the question is complete and committed
frame 0270 — the tool line appears
frame 0300 — both withRetry occurrences begin to be selected; push-in starts
frame 0329 — the match-cut contract frame; must be inspected together with frame 0330
```

Frame 0329 must always be inspected as a pair with frame 0330 of
`03-graph-reveal.md`; a discontinuity there is the most expensive visual error in
the video.

## Invariants

- **No terminal window and no panel.** No surface, no border box, no chrome, no
  window buttons, no tab bar, no rounded corners, no drop shadow. The prompt layer
  is a rule, a glyph, a line and a tool line, over the code world.
- **No cut into this scene.** The code world is continuous from frame 0000 of the
  video to frame 0330.
- **Do not visually imitate Claude Code** or any other specific agent product. No
  cloned chrome, no cloned colour scheme, no cloned status line, no cloned
  tool-result formatting.
- **The prompt geometry is a shared constant.** `06-agent-answer.md` rebuilds this
  row at frame 0970 and `03-graph-reveal.md` matches the token at 0330. All three
  read `promptLayout` / `tokenRect`; none of them re-derives the numbers.
- **Typing is grouped and irregular**, never a uniform per-character stream.
- **The tool invocation stays discreet.** One line, small, one accent square. It
  must never become a banner, a card, a badge or an animation.
- **The token's growth must not move anything before it.** It scales about its own
  centre and only the trailing `?` yields, via a margin that tracks the overhang.
  If the characters before the token ever shift, the match cut inherits a moving
  target.
- **`withRetry` in the code stays on screen and accented for the whole scene.**
  Losing it would sever the prompt from what it is about.
- **The two occurrences are treated identically at 0300.** That rhyme is the
  scene's argument; replacing it with a drawn connector would pre-empt scene 03.
- **The neighbouring columns stay texture.** They may never become legible enough
  to read as content, carry a label, or take accent. They are not an argument
  about the codebase; that argument was deleted with the scene that made it.
- **Accent is spent on exactly three things**: the prompt token, the code symbol,
  and the invocation square.
- **All motion is frame-derived**, including the caret blink.
- **The scene answers nothing.** No result, no impact list, no repository names,
  no graph. The tool is called and the scene ends.
- **The scene stays 2.5D.** The graph belongs to scene 03.

## Flexible elements

- the widen's exact destination (0.66) and the curve that gets there, as long as
  it starts at zero velocity, never moves inward, and the lower half of the frame
  is clear before typing is legible;
- the number and boundaries of the typing groups and the delays between them, as
  long as the reveal stays grouped and irregular and completes by 0245;
- the exact form of the Enter feedback;
- the rule's width and the vertical gaps between rule, row and tool line, as long
  as `tokenRect` is updated with them and the consuming scenes are checked;
- the caret style and blink period;
- how far the code world dims, and whether the neighbouring columns appear at all,
  as long as `withRetry` stays visible and accented and the prompt stays clearly
  dominant;
- easing details, within the project motion language.

Not flexible, because scenes 03 and 07 depend on them: the row's position, the
token's final apparent scale, and the push-in curve.

## Technical notes

- Pure DOM/React scene. Everything derives from `useCurrentFrame()` and
  `interpolate()`; no CSS keyframes, transitions or browser timers.
- Global scene boundaries live inline in `src/Composition.tsx` as
  `<Sequence name="02 Agent" from={120} durationInFrames={210}>`.
- Components: `src/components/AgentPrompt.tsx` (the prompt layer, its exported
  geometry and the tool line) and `src/components/CodeWorld.tsx` (the shared
  spatial layout, also used by scene 01). There is deliberately no `Terminal.tsx`
  and no `ToolInvocation.tsx`: there is no terminal, and the tool line is one
  line, not a reusable piece.
- The camera is shared with scene 01 — `src/world/camera.ts` projects
  `screen = cameraScreenPoint + (world − cameraTarget) × zoom × depth`. This scene
  animates the camera, five luminance scalars and the mark, and never places a
  plane.
- Typing is a substring of a constant string derived from the frame, not
  accumulated state: `question.slice(0, charsAtFrame(frame))`. Scrubbing backwards
  reproduces the same partial string.
- The prompt glyph is the literal character `❯` (U+276F). It is present in the
  loaded `JetBrains Mono` subset — verified in a render, not assumed.
- The token grows via a `scale` on an isolated inline-block span, never a
  font-size change, so the row does not re-layout. Its `marginRight` is
  `((grow − 1) × tokenRect.width) / 2 + select × 3`, i.e. exactly the overhang it
  creates, so the `?` yields smoothly instead of being overlapped.
- The selection field behind the code symbol is `CodePlane`'s `select` prop, a
  rectangle sized from the anchor's `ch` metrics and drawn under the text.
- Colours come from `src/brand/tokens.ts`; fonts from `src/brand/fonts.ts`. No
  hard-coded hex values in the scene.
- Verified: frame `0329` of `KivgraphPromo` is byte-identical to frame `0209` of
  the standalone `Scene02Agent` composition, and the full `0000–0329` opening
  renders without error.

## Current compromises

- **The match-cut contract is numeric but unverified against scene 03**, which
  does not exist yet. `tokenRect` gives scene 03 the exact rectangle, so the
  contract is machine-readable rather than prose — but frames 0329 and 0330 have
  not been inspected as a pair.
- **How scene 03 obtains this scene's final image is still open.** Recommendation,
  not a decision: keep the `Sequence` boundary clean and let scene 03 render
  `AgentPrompt` and `CodeWorld` in a static "0329" state that it fades out.
- **Scene 07's return is specified but not built.** Its document has been brought
  in line with this one — no panel, `promptLayout` as the shared geometry — but
  nothing has been rendered against it, and it still has one open decision:
  whether the dimmed code world returns behind the restored prompt.
- **The widen is doing two jobs.** It is both the transition out of scene 01 and
  the only remaining trace of the deleted scene. It reads as one gesture at 60 fps,
  but it is the part of this scene most likely to feel rushed if the opening is
  ever re-cut; 70 frames is the floor, not a target.
- **Sound is absent.** `STORYBOARD.md` §18 suggests very low typing sound and a
  short digital click on tool invocation. Neither is implemented; the scene must
  read without audio.

## Modification history

```text
2026-08-23
- Initial scene specification.

2026-08-23
- Retimed for the scene 01 redesign: every master frame moved +120. Beats,
  durations and scene-local frames unchanged.

2026-08-23
- Redesigned and implemented. The hard cut at the scene start and the terminal
  panel are gone.
- Reason: cutting from the code film to a bordered terminal card made the agent
  read as a separate product screenshot spliced in, which broke the one thing
  the opening is built on - that all of it is one continuous place.
- The scene now continues the camera. The code world dims and lifts, and a
  prompt layer - one rule, one glyph, one line, one tool line - emerges inside
  the same frame. Terminal.tsx and ToolInvocation.tsx are not built and are
  removed from the storyboard's component list.
- Added the selection rhyme: withRetry in the code takes the same selection
  field as withRetry() in the prompt. One symbol, two places, no connector.
- The tool line's bullet is a drawn accent square rather than the character
  ●, matching the Kivgraph mark and the graph nodes of later scenes.
- The match-cut geometry is now exported as promptLayout / tokenRect so the
  consuming scenes read it instead of re-deriving it.

2026-08-23
- The preceding scene (ProblemScene, storyboard SCENE 02) was deleted and this
  document renumbered 03 -> 02. Span 0360-0540 -> 0210-0420, duration 180 -> 210
  frames, master 1620 -> 1500 frames (25 s). Every scene after this one moved
  -120.
- Reason: that scene existed to deliver two lines of copy that no longer exist,
  and its replacement material pre-empted the graph reveal. See
  "Why this scene absorbed its predecessor".
- The widen-and-dim it performed became the first 70 frames of this scene. Every
  beat after the widen kept its rhythm and simply starts 30 frames later in
  scene-local time.

2026-08-23
- The inherited semantic mark lost its reach and node square, so this scene no
  longer retracts anything: it inherits a plain underline the width of the
  symbol and holds it. See 01-symbol.md for the reasoning.

2026-08-23
- Scene 01 was cut from 210 to 120 frames, so this document moved -90: span
  0210-0420 -> 0120-0330, master 1500 -> 1410 frames (23.5 s). Duration stays
  210 frames and every scene-local number is unchanged.
- The inherited state changed, not just its frame numbers. Scene 01 deleted its
  closing push-in and its dim-out, so this scene now starts at zoom 1.12 rather
  than 1.19 and at scene 01's *lit* ladder (0.55 / 0.38 / 0.22, bed 0.16) rather
  than a pre-dimmed one. It therefore performs the whole luminance fall itself.
- The opening easing changed from bezier(0.2, 0.35, 0.2, 1) to
  bezier(0.4, 0, 0.2, 1). Scene 01 is motionless at the cut, so the old non-zero
  initial slope - which existed to make the boundary a change of direction -
  would now read as a jerk. The boundary is a beat: outward, pause, outward.

2026-08-23
- Exported settledGrow, growOrigin and selectedTokenRect. The 1.08 lived in
  AgentScene while the geometry that depends on it lived here, so scene 03 would
  have had to re-derive the scaled rectangle - and would have got it slightly
  wrong, because the scale origin is 55% down the line box, not 50%.
- The rectangle was verified against a render of frame 0329 rather than trusted:
  measured x 958-1175, y 626-679 for the selection field, agreeing with the
  arithmetic to within half a pixel.

2026-08-23
- The inherited depth bed changed identity: internal/payments/service.go ->
  paymentService/client.go, exported from src/code/payments.ts as clientGo
  rather than serviceGo. This scene names neither file; the bed is still
  inherited at 0.16 and still never legible, so nothing else here changed.
- Reason: the old bed was `package payments` calling the unexported withRetry
  from `package retry`, which cannot compile. The new one goes through the
  exported surface and is the public bridge checkout-service reaches the symbol
  through. See 01-symbol.md.
```

2026-08-23

- The component was split: `AgentFrame` holds the body and takes the frame as a
  prop, `AgentScene` is a one-line wrapper around `useCurrentFrame()`. Nothing
  about the image changed. Scene 03 needs this scene's last frame on screen
  while it dissolves, and re-deriving it would have made the match cut a
  near-match instead of an identity.

2026-08-25

- The blast radius scene was trimmed from 120 to 100 frames, so every master frame
  from 0730 onward shifted -20 and the master is now 1300 frames (21.7 s). This
  scene owns none of those frames, so its own frames, beats, geometry and copy are
  untouched. What changed here is the two references forward: the agent answer
  scene now spans 0880-0970 and rebuilds this prompt row 550 frames after the
  0330 match cut rather than 570.
- The trim's reason, for anyone tempted to give the blast radius its tail back:
  once its claim line and veil were cut, nothing in that tail animated and 41 of
  its last frames were pixel-identical.

2026-08-25

- Scene 05 grew from 150 to 180 frames, so every master frame from 0910 onward
  shifted +30 and the master is now 1330 frames (22.2 s). This scene owns none of
  those frames, so its own frames, beats, geometry and copy are untouched. What
  changed here is the two references forward: the agent answer scene now spans
  0910-1000 and rebuilds this prompt row 580 frames after the 0330 match cut
  rather than 550.
- The growth's reason, for anyone tempted to take the time back: the semantic
  scene's comparison used to start emptying 27 frames after it finished building,
  on three separate windows. It now stands complete for sixty frames and leaves
  on one.

2026-08-25

- A pacing pass grew the three implemented scenes after the graph reveal: the blast
  radius 100 -> 140 frames, the semantic resolution 180 -> 200, the agent answer
  90 -> 180. Every master frame from 0770 onward shifted and the master is now 1480
  frames (24.7 s). This scene owns none of those frames, so its own frames, beats,
  geometry and copy are untouched. What changed here is the two references forward:
  the agent answer scene now spans 0970-1150 and rebuilds this prompt row 640
  frames after the 0330 match cut rather than 580.
- The growth's reason, for anyone tempted to take the time back: it was measured.
  Dwell time - how long a readable thing stays on screen after it has finished
  arriving - gave the blast radius' impact card 0.42 s and the agent answer's path
  sentence 0.57 s, which is 129 characters per second against the 25-40 that
  on-screen technical text is actually read at. The scene that answers this scene's
  question was the fastest thing in the film.
