# Scene 09 — Outro

## Purpose

This scene gives the viewer exactly one thing to do and one thing to remember.

The name landed in `08-brand.md`. Everything left is conversion, and conversion
fails by addition: a second URL, a third link, a features list, an install
command that turns into a wall of characters. Each of those splits the single
action into a choice, and a choice at the end of a video nearly twenty-five
seconds long is not taken at all.

The integrations line exists for one reason: the video has been talking about
coding agents for twenty-two seconds without saying which ones. Naming
`Claude Code · Codex · OpenCode` converts an abstract claim into something the
viewer can locate in their own setup.

The final hold exists because a URL that is only on screen while something else
is moving does not get read.

## Viewer takeaway

> It works with the agent I already use, and I can find it at one address.

## Narrative context

Immediately before: `08-brand.md` resolved the convergence into the Kivgraph
lockup and its tagline, and settled completely by `1350`.

This scene prepares for nothing. It is the end of the piece. Its only obligations
are to name the integrations, present one destination, and then stop moving so
the destination can be read.

## Timeline

Storyboard source: `STORYBOARD.md` SCENE 11 — CTA.

The storyboard scene number runs two ahead of the document number from
`04-blast-radius.md` onward, because storyboard SCENE 03 and SCENE 04 are
implemented as a single component and storyboard SCENE 05 — CROSS-REPOSITORY was
cut from the film. Storyboard SCENE 11 is document 09. See
`docs/scenes/README.md`.

- Global frames: `1360`–`1480`
- Scene-local frames: `0000`–`0120` (last rendered frame `0119` / master `1479`)
- Time: 22.67 s – 24.67 s
- Duration: 120 frames / 2.0 s at 60 fps
- Remotion component: `src/scenes/OutroScene.tsx`

Beats, all fixed by the storyboard:

| Master        | Local         | Beat                                                       |
| ------------- | ------------- | ---------------------------------------------------------- |
| `1360`–`1390` | `0000`–`0030` | Integrations: `Claude Code · Codex · OpenCode`.              |
| `1390`        | `0030`        | CTA reads.                                                  |
| `1410`        | `0050`        | Install line, **only if** it stays short (see below).        |
| `1420`–`1480` | `0060`–`0120` | Full hold. Nothing animates. Roughly the final second is pure reading time. |

The hold is 60 frames — exactly one second at 60 fps — and it is the largest
single uninterrupted block in the video.

## Initial state

At `1360` the frame is what `08-brand.md` left at `1359`: the Kivgraph lockup and
the tagline `Exact code intelligence for coding agents.`, settled, on
`background` `#0a0b0d`, with the lockup in the position both scenes share.

Nothing changes at the boundary. There is no cut and no fade — the previous scene
simply stops animating and this one starts adding beneath it. See
`## Transition in` and the open decision in `## Current compromises`.

## Final state

At `1479` the frame holds, static:

- the Kivgraph lockup;
- the tagline;
- `Claude Code · Codex · OpenCode`;
- one destination URL;
- the install line, if the decision was to show it.

`1479` is the last frame of the master and is the natural poster frame for the
piece (`STORYBOARD.md` §34). It must be a legitimate standalone image: name,
claim, compatibility, address.

## Visual composition

One centred column, vertically ordered by what the viewer needs in what order:

1. the lockup — who;
2. the tagline — what;
3. the integrations — whether it applies to me;
4. the URL — where to go;
5. the install line, if shown — how, and it is deliberately last and quietest.

The URL is the visual anchor of the lower half. It should be the largest thing
below the tagline, not a footnote under the integrations.

Typography (`AGENTS.md` §27, `STORYBOARD.md` §7):

- `Claude Code · Codex · OpenCode` in `Geist` at the UI-to-body range
  (20–34 px), `textMuted` `#a3a3a3`, with the `·` separators in `textFaint`
  `#737373` so the three names read as three items rather than one string. These
  are product names inside a prose-adjacent line, which is the brand sans's case;
  if they read better in mono alongside the URL, that is an acceptable
  alternative, but the two must not be mixed within the line.
- the URL in `JetBrains Mono`, above the body tier and at or below the heading tier of
  `STORYBOARD.md` §7 (34–52 px), `textPrimary`
  `#f5f5f5`. A URL is a technical value and belongs in mono; monospace also makes
  it look typed-in rather than advertised.
- the install line, if shown, in `JetBrains Mono` at the code range (20–28 px),
  `textMuted` `#a3a3a3` — subordinate to the URL by both size and weight.

Colour: this scene is near-fully neutral. The only accent `#2563eb` in the frame
is the lockup's mark, inherited from `08-brand.md`. The URL is **not** accented.
Colouring the URL blue would read as a hyperlink and, worse, would spend the
accent on something that is not a semantic relationship, a result, or a Kivgraph
invocation (`AGENTS.md` §26).

No panel, no card, no button, no rounded rectangle around the URL. Radius 0, no
shadows, and depth only from the surface (`AGENTS.md` §25 house style). A CTA
button would make this the one frame in the video that looks like an ad.

Content stays centred so 1:1, 4:5, and 9:16 variants remain possible
(`STORYBOARD.md` §2, `AGENTS.md` §38).

## Motion

Two entrances, then stillness.

**Integrations (`1360`–`1390`).** Opacity `0 → 1` with a small upward settle.
A slight per-name stagger is acceptable and makes the line read as an enumeration;
a large one turns it into a bullet list animation.

**CTA (`1390`).** Opacity `0 → 1` with a minimal settle, concluding promptly.
Storyboard frame numbers mark when a beat **reads**, not when its ramp starts, so
the URL is legible at `1390` rather than starting to appear there.

**Install line (`1410`), if shown.** The quietest entrance in the video. Opacity
only, no travel. It must not pull attention off the URL.

**Hold (`1420`–`1480`).** Nothing animates. This is a hard requirement, not a
pacing preference — the viewer is reading a URL, and any motion anywhere in the
frame steals the fixation. In particular:

- no blinking caret (a terminal-style caret next to the install line is the most
  likely accidental violation);
- no pulsing, breathing, or glowing mark;
- no slow drift, zoom, or parallax on anything;
- no looping shimmer on the URL;
- no residual easing still resolving into `1421`.

Every element must have reached its final value by `1420`.

## Three.js

Not used.

## Transition in

There is no transition at `1360`. The frame continues.

`08-brand.md` settles at `1350` and holds through `1359`; this scene inherits that
exact frame and adds to it. The lockup and tagline do not move, re-enter, fade, or
re-scale — a mark that repositions itself between two adjacent scenes reads as a
rendering fault.

This depends on the derived continuity decision recorded in `08-brand.md`
`## Transition out`: the lockup persists across the boundary. The storyboard does
not state it, but the storyboard's own requirement for this scene — that the final
hold lets the viewer *remember the name* and *locate the URL* — needs the name to
still be on screen. Both documents record it as an open decision; they must agree.

Practical consequence: the lockup's screen position is a shared constant between
`BrandScene` and `OutroScene`, and it is chosen with this scene's full column in
mind. The lockup therefore probably sits above centre, not at the exact centre of
the frame, and `08-brand.md` must be authored to that position from the start.

## Transition out

None. `1479` is the last frame of the master.

The video ends on a static frame rather than fading to black. Fading out would
remove the URL at exactly the moment a viewer who decided to act reaches for it,
and it would also destroy the poster frame. If the piece is looped by a player,
the cut from `1479` back to `0000` is acceptable — `STORYBOARD.md` §34 requires
the master to play correctly with looping disabled, and the outro is authored for
that case.

## Copy

Verbatim:

```text
Claude Code · Codex · OpenCode
```

The CTA, one of these two and never both:

```text
kivgraph.dev
```

```text
github.com/luqueee/kivgraph
```

`STORYBOARD.md` states the priority plainly — prioritise `kivgraph.dev`. The
GitHub URL is the fallback if the domain is not confirmed before render. See
`## Current compromises`: neither string is settled.

The install line, shown only under the condition below. The storyboard writes it
as shorthand:

```bash
curl -fsSL ... | sh
```

The real published command is:

```bash
curl -fsSL https://github.com/Luqueee/kivgraph/releases/latest/download/install.sh | bash
```

The separator in the integrations line is the middle dot `·`, not a hyphen, pipe,
or bullet. `STORYBOARD.md` allows further compatible integrations "if there is
space"; there is not, and adding them would dilute the three names that matter.

Nothing else appears. No `Get started`, no `Free and open source`, no `Star us on
GitHub`, no `Learn more`, no docs link, no social handles. `AGENTS.md` §28 and
`STORYBOARD.md` §30 apply with full force here, because the end of a video is
where marketing copy is most tempting.

## Key frames

```text
frame 1360 — inherited brand frame; integrations begin to arrive
frame 1420 — everything present and settled; the hold begins
frame 1479 — final frame of the master; poster frame candidate
```

All three are on the manual review list in `STORYBOARD.md` §28. None is a
designated still-image key frame in `AGENTS.md`, but `1479` will be used as a
poster frame in practice and should be inspected as an exported image.

Check `1421` specifically: it is the frame that proves nothing is still easing
into place after the hold begins.

## Invariants

- **Nothing animates during the hold `1420`–`1480`.** No exceptions, including
  carets, pulses, and slow drifts.
- **The URL is the last thing standing** and the strongest element below the
  tagline. Everything else in the lower half is subordinate to it.
- **Exactly one destination is on screen.** Never `kivgraph.dev` and
  `github.com/luqueee/kivgraph` together. Two addresses is two decisions, and the
  scene exists to present one.
- **No marketing copy is added.** The scene's text is the integrations line, one
  URL, and optionally the install command. Nothing else.
- The lockup and tagline do not move at the `1360` boundary.
- The install line is shown only if it stays short enough not to look noisy. If in
  doubt, omit it — `STORYBOARD.md` is explicit that the URL takes priority.
- If an install command is shown, it is the real, working, complete command. A
  truncated or prettified command that does not run is worse than no command, and
  it would be a fabricated product fact.
- No button, no card, no accent on the URL, no link styling.
- Readable in a small embedded player without audio (`AGENTS.md` §37). The URL is
  the single most important string in the video to survive compression.
- The video does not fade out. `1479` is a usable still.

## Flexible elements

- Whether the integrations line is sans or mono, provided it is internally
  consistent.
- The per-name stagger of the integrations entrance, or its absence.
- Exact sizes within the documented ranges, and the vertical gaps in the column.
- Whether the integrations line carries a quiet lead-in label — permitted only if
  it is not new marketing copy, and omission is the default.
- Easing of the two entrances.
- Whether the install line is present at all (see the decision below).
- Letter-spacing on the URL.

## Technical notes

- Component: `src/scenes/OutroScene.tsx`.
- Shared component expected: `BrandLogo.tsx`, the same lockup component used by
  `BrandScene`, so the two scenes cannot render slightly different marks. The
  lockup's screen position must come from one shared constant consumed by both
  scenes, not from two independent layouts.
- Global scene boundaries live inline in `src/Composition.tsx` as
  `<Sequence name="09 Outro" from={1360} durationInFrames={120}>` literals, because
  Remotion Studio can only trim inline literals. There is no timing module. The
  component animates in scene-local frames: `useCurrentFrame()` inside the
  Sequence starts at `0`.
- Colours from `src/brand/tokens.ts`; fonts from `src/brand/fonts.ts`. No raw hex,
  no fallback font family — the URL is the string that must not reflow on a late
  font swap.
- All state derives from the frame (`AGENTS.md` §17). The hold is implemented by
  interpolations that have already clamped, not by conditional rendering that
  might disagree with the frame on a re-render.
- The URL and integrations strings belong in one place in the source. The URL in
  particular is likely to change before release (see below) and must not be typed
  into more than one file.
- Cheapest possible scene: static text. Do not add anything expensive here to fill
  the two seconds.
- **Measured length of the install line.** The real command is 89 characters. In
  `JetBrains Mono`, whose advance width is approximately `0.6 em`, that is roughly
  1070 px at 20 px and roughly 1280 px at 24 px — that is, 56 % to 67 % of the
  1920 px frame width. It fits in 16:9, but it is the widest single element in the
  entire video, it visually outweighs the URL it is supposed to support, and it
  cannot survive a 1080-wide crop at a readable size (`AGENTS.md` §38). These are
  estimates from a nominal advance width and should be confirmed by measuring the
  rendered text before the decision is finalised.

## Current compromises

- **Not implemented yet.** This document is the specification the implementation
  must satisfy; no `OutroScene.tsx` and no `BrandLogo.tsx` exist at the time of
  writing.
- **Open decision — the final domain.** Not decided. `STORYBOARD.md` cites
  `kivgraph.dev`, while the live site is `kivgraph.luqueeee.dev`. The storyboard's
  domain may not be registered. Whatever ships must be a URL that actually
  resolves; a memorable address that 404s is worse than a long one that works. The
  three candidate strings — `kivgraph.dev`, `kivgraph.luqueeee.dev`, and
  `github.com/luqueee/kivgraph` — also disagree on the spelling of the account
  segment (`luqueee` in the storyboard's GitHub URL, `luqueeee` in the live
  hostname, `Luqueee` in the real install URL). Verify the exact spelling and
  casing against the real accounts before render; do not copy any of them on
  trust. If the shipped URL differs from `STORYBOARD.md`, update the storyboard in
  the same task (`AGENTS.md` §14).
- **Open decision — whether to show the install line.** Undecided, and it depends
  on the measured length above. `STORYBOARD.md` shows the shorthand
  `curl -fsSL ... | sh`, which is not a real command; the real published command
  is `curl -fsSL https://github.com/Luqueee/kivgraph/releases/latest/download/install.sh | bash`
  — 89 characters, and `| bash` rather than `| sh`. It is considerably longer than
  the storyboard's shorthand implies. Current recommendation: **omit it.** The
  storyboard's own condition ("only if the line stays short enough", "if it looks
  visually noisy, do not show it") is not met by an 89-character line placed next
  to the URL it is meant to support. Revisit only if a genuinely short published
  alias exists; never shorten the command by hand to make it fit.
- **Open decision — lockup persistence across `1360`.** This document assumes the
  lockup and tagline carry over from `08-brand.md` unchanged. The storyboard
  neither states nor forbids it. Mirrored in `08-brand.md`
  `## Transition out`; if it is rejected, both documents change together and this
  scene's `## Initial state` and `## Visual composition` both need rewriting.
- **Integration names unverified against the shipped product.** `Claude Code`,
  `Codex`, and `OpenCode` come from `STORYBOARD.md`. They must match the
  integrations Kivgraph actually supports at release; naming an integration that
  does not exist is a fabricated product fact.
- **Sound absent.** `STORYBOARD.md` §18 specifies no sound for this scene, and
  §17 requires the piece to work muted. The silent hold is intentional.

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
- Scene 02 (Problem / Not Alone) was deleted from the master, so this document
  was renumbered from 11 to 10 and now realises storyboard SCENE 11 — CTA.
- Every master frame moved −120: the scene now spans `1380`–`1500`, its final
  frame is `1499`, and it closes a 1500-frame, 25 s master. Beats, durations and
  scene-local frames are unchanged.
```

```text
2026-08-23
- Scene 01 was shortened from 210 to 120 frames, so every master frame in this
  document moved −90: the scene now spans `1290`–`1410`, its final frame is
  `1409`, and it closes a 1410-frame, 23.5 s master. Beats, durations and
  scene-local frames are unchanged.
```

```text
2026-08-25
- Scene 04 (Cross Repository) was cut from the master, so this document was
  renumbered from 10 to 09 and now realises storyboard SCENE 11 — CTA at a
  storyboard offset of two rather than one.
- Every master frame moved −90: the scene now spans `1200`–`1320`, its final
  frame is `1319`, and it closes a 1320-frame, 22 s master. Beats, durations and
  scene-local frames are unchanged.
- Cross-references to the brand document retargeted to `08-brand.md`, which was
  renumbered from 09 to 08 in the same task.
```

```text
2026-08-25
- The blast radius scene was trimmed from 120 to 100 frames, so every master frame
  in this document moved −20: the scene now spans `1180`–`1300`, its final frame is
  `1299`, and it closes a 1300-frame, 21.7 s master. Beats, durations and
  scene-local frames are unchanged, including the 60-frame hold.
- The trim was upstream and measured. Cutting `Exact symbols. Not name matches.`
  and its veil left the blast radius with nothing animating in its tail: 41 of its
  last frames were pixel-identical, so twenty came off and everything after 0730
  followed. The poster frame is now `1299`.
```

```text
2026-08-25
- Scene 05 (Semantic Resolution) grew from 150 to 180 frames, so every master
  frame in this document moved +30: the scene now spans `1210`–`1330`, its final
  frame is `1329`, and it closes a 1330-frame, 22.2 s master. Beats, durations and
  scene-local frames are unchanged, including the 60-frame hold.
- The growth was upstream and it added time rather than removing it. The semantic
  scene's two-column comparison now stands for a full second before anything
  leaves the frame, on a single exit window, so everything from 0910 onward moved
  later. The poster frame is now `1329`.
```

```text
2026-08-25
- A pacing pass on scenes 04, 05 and 06 moved every master frame in this document
  +150: scene 04 grew from 100 to 140 frames, scene 05 from 180 to 200 and scene 06
  from 90 to 180. The scene now spans `1360`–`1480`, its final frame is `1479`, and
  it closes a 1480-frame, 24.7 s master. Beats, durations and scene-local frames
  are unchanged, including the 60-frame hold.
- The growth was upstream and it was measured, not felt. Dwell time - how long a
  readable thing stays on screen after it has finished arriving - showed the blast
  radius card settling with 0.42 s left and the agent's path sentence with 0.57 s,
  which is 129 characters per second against the 25-40 that on-screen technical
  text is actually read at. This scene has always been the film's argument for
  reading time; the retime applied the same argument to the three scenes that were
  hurrying.
- Two of this document's own sentences moved with the length: the video is now
  nearly twenty-five seconds rather than twenty-two, and it has been talking about
  coding agents for twenty-two seconds rather than twenty when this scene names
  them. The poster frame is now `1479`.
```
