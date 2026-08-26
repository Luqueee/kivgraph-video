# Scene 09 — Outro

## Purpose

This scene gives the viewer exactly one thing to do and one thing to remember.

The name landed in `08-brand.md`. Everything left is conversion, and conversion
fails by addition: a second URL, a third link, a features list, an install
command that turns into a wall of characters. Each of those splits the single
action into a choice, and a choice at the end of a video over twenty-seven
seconds long is not taken at all.

The integrations line exists for one reason: the video has been talking about
coding agents for twenty-five seconds without saying which ones. Naming
`Claude Code · Codex · OpenCode · Oh My Pi` converts an abstract claim into
something the viewer can locate in their own setup.

The final hold exists because a URL that is only on screen while something else
is moving does not get read.

## Viewer takeaway

> It works with the agent I already use, and I can find it at one address.

## Narrative context

Immediately before: `08-brand.md` resolved the convergence into the Kivgraph
lockup and its tagline, and settled completely by `1440`.

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

- Global frames: `1850`–`1970`
- Scene-local frames: `0220`–`0340` (last rendered frame `0339` / master `1969`)
- Time: 27.17 s – 29.17 s
- Duration: 120 frames / 2.0 s at 60 fps
- Remotion component: `src/scenes/OutroScene.tsx`

Beats, all fixed by the storyboard:

| Master        | Local         | Beat                                                       |
| ------------- | ------------- | ---------------------------------------------------------- |
| `1850`–`1880` | `0000`–`0030` | Integrations: `Claude Code · Codex · OpenCode · Oh My Pi`.   |
| `1880`        | `0030`        | CTA reads.                                                  |
| `1900`        | `0050`        | Install line, **only if** it stays short (see below).        |
| `1910`–`1970` | `0060`–`0120` | Full hold. Nothing animates. Roughly the final second is pure reading time. |

The hold is 60 frames — exactly one second at 60 fps — and it is the largest
single uninterrupted block in the video.

## Initial state

At `1850` the frame is what `08-brand.md` left at `1849`: the Kivgraph lockup and
the tagline `Exact code intelligence for coding agents.`, settled, on
`background` `#0a0b0d`, with the lockup in the position both scenes share.

That position is no longer a plan. `src/components/BrandLogo.tsx` exists and
owns it, and it was authored to **this** scene's column rather than to scene
08's own frame: the mark's centre is `960, 360`, the vertical centre line at the
upper third, so that the full column below it ends up optically centred. Scene
08 therefore settles above centre on purpose. Read every number this scene
builds under from `brandLockup` rather than copying any of them here: a second
copy is exactly the disagreement the shared component exists to prevent.

The mark is the shipped raster — the favicon and app icon — and not the 8 × 8 px
`#2563eb` square this document's sibling used to describe. See `08-brand.md`
`## Current compromises`.

Nothing changes at the boundary. There is no cut and no fade — the previous scene
simply stops animating and this one starts adding beneath it. See
`## Transition in`. This was an open decision in both documents and is now
resolved in favour of persistence; `## Current compromises` records it.

## Final state

At `1969` the frame holds, static:

- the Kivgraph lockup;
- the tagline;
- `Claude Code · Codex · OpenCode`;
- one destination URL;
- the install line, if the decision was to show it.

`1969` is the last frame of the master and is the natural poster frame for the
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

- `Claude Code · Codex · OpenCode · Oh My Pi` in `Geist` at the UI-to-body range
  (20–34 px), `textMuted` `#a3a3a3`, with the `·` separators in `textFaint`
  `#737373` so the four names read as four items rather than one string. These
  are product names inside a prose-adjacent line, which is the brand sans's case;
  if they read better in mono alongside the URL, that is an acceptable
  alternative, but the two must not be mixed within the line.

  Measured at 24 px: the line runs `984` to `1534`, so it is 511 px wide — 27 %
  of the frame, centred on 959 — and clears a 1080-wide crop with 280 px either
  side. That measurement is what "if there is space" means here; take it again
  before adding a fifth name.
- the URL in `JetBrains Mono`, above the body tier and at or below the heading tier of
  `STORYBOARD.md` §7 (34–52 px), `textPrimary`
  `#f5f5f5`. A URL is a technical value and belongs in mono; monospace also makes
  it look typed-in rather than advertised.
- the install line, if shown, in `JetBrains Mono` at the code range (20–28 px),
  `textMuted` `#a3a3a3` — subordinate to the URL by both size and weight.

Colour: this scene is **fully** neutral apart from the logo's own two colours.

That is a change, and it is worth stating rather than leaving as an absence.
This document used to say the only accent `#2563eb` in the frame was the
lockup's mark. That is now false: scene 08 resolves to the shipped raster mark,
which carries an off-white `#e9e2dc` and a teal `#56818a` and no blue at all, so
there is no `#2563eb` anywhere in the last two seconds of the film. The film's
last accent is spent at `1748`, on a relationship arriving.

The consequence for this scene is that nothing may be added to compensate. The
URL is **not** accented. Colouring the URL blue would read as a hyperlink and,
worse, would spend the accent on something that is not a semantic relationship,
a result, or a Kivgraph invocation (`AGENTS.md` §26) — and it would now be the
only blue in the frame, which makes it louder still. The mark's off-white and
teal belong to the mark; no text, rule or separator in this scene may borrow
them.

No panel, no card, no button, no rounded rectangle around the URL. Radius 0, no
shadows, and depth only from the surface (`AGENTS.md` §25 house style). A CTA
button would make this the one frame in the video that looks like an ad.

Content stays centred so 1:1, 4:5, and 9:16 variants remain possible
(`STORYBOARD.md` §2, `AGENTS.md` §38).

## Motion

Two entrances, then stillness.

**Integrations (`1850`–`1880`).** Opacity `0 → 1` with a small upward settle.
A slight per-name stagger is acceptable and makes the line read as an enumeration;
a large one turns it into a bullet list animation. Built at three frames per
name, which is what four names fit into the window: they land at local `0240`,
`0243`, `0246` and `0249`, one frame before the URL. A stagger running past
`0250` would put a name still arriving under a URL that is supposed to be
legible.

**CTA (`1880`).** Opacity `0 → 1` with a minimal settle, concluding promptly.
Storyboard frame numbers mark when a beat **reads**, not when its ramp starts, so
the URL is legible at `1880` rather than starting to appear there.

**Install line (`1900`), if shown.** The quietest entrance in the video. Opacity
only, no travel. It must not pull attention off the URL.

**Hold (`1910`–`1970`).** Nothing animates. This is a hard requirement, not a
pacing preference — the viewer is reading a URL, and any motion anywhere in the
frame steals the fixation. In particular:

- no blinking caret (a terminal-style caret next to the install line is the most
  likely accidental violation);
- no pulsing, breathing, or glowing mark;
- no slow drift, zoom, or parallax on anything;
- no looping shimmer on the URL;
- no residual easing still resolving into `1911`.

Every element must have reached its final value by `1910`.

## Three.js

Not used.

## Transition in

There is no transition at `1850`. The frame continues.

`08-brand.md` settles at `1440` and holds through `1849`; this scene inherits that
exact frame and adds to it. The lockup and tagline do not move, re-enter, fade, or
re-scale — a mark that repositions itself between two adjacent scenes reads as a
rendering fault.

This depends on the derived continuity decision recorded in `08-brand.md`
`## Transition out`: the lockup persists across the boundary. The storyboard does
not state it, but the storyboard's own requirement for this scene — that the final
hold lets the viewer *remember the name* and *locate the URL* — needs the name to
still be on screen. Both documents recorded it as an open decision until
2026-08-26, when it was resolved in favour of persistence and built; they still
must agree.

Practical consequence, and it is now a fact rather than a plan: the lockup's
screen position is a shared constant between `BrandScene` and `OutroScene` —
`brandLockup` in `src/components/BrandLogo.tsx` — and it was chosen with this
scene's full column in mind. The lockup therefore sits above centre, not at the
exact centre of the frame — the mark's centre is `960, 360` — and `08-brand.md`
was authored to that position from the start.

## Transition out

None. `1969` is the last frame of the master.

The video ends on a static frame rather than fading to black. Fading out would
remove the URL at exactly the moment a viewer who decided to act reaches for it,
and it would also destroy the poster frame. If the piece is looped by a player,
the cut from `1969` back to `0220` is acceptable — `STORYBOARD.md` §34 requires
the master to play correctly with looping disabled, and the outro is authored for
that case.

## Copy

Verbatim:

```text
Claude Code · Codex · OpenCode · Oh My Pi
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
frame 1850 — inherited brand frame; integrations begin to arrive
frame 1910 — everything present and settled; the hold begins
frame 1969 — final frame of the master; poster frame candidate
```

All three are on the manual review list in `STORYBOARD.md` §28. None is a
designated still-image key frame in `AGENTS.md`, but `1969` will be used as a
poster frame in practice and should be inspected as an exported image.

Check `1911` specifically: it is the frame that proves nothing is still easing
into place after the hold begins.

## Invariants

- **Nothing animates during the hold `1910`–`1970`.** No exceptions, including
  carets, pulses, and slow drifts.
- **The URL is the last thing standing** and the strongest element below the
  tagline. Everything else in the lower half is subordinate to it.
- **Exactly one destination is on screen.** Never `kivgraph.dev` and
  `github.com/luqueee/kivgraph` together. Two addresses is two decisions, and the
  scene exists to present one.
- **No marketing copy is added.** The scene's text is the integrations line, one
  URL, and optionally the install command. Nothing else.
- The lockup and tagline do not move at the `1850` boundary.
- The install line is shown only if it stays short enough not to look noisy. If in
  doubt, omit it — `STORYBOARD.md` is explicit that the URL takes priority.
- If an install command is shown, it is the real, working, complete command. A
  truncated or prettified command that does not run is worse than no command, and
  it would be a fabricated product fact.
- No button, no card, no accent on the URL, no link styling.
- Readable in a small embedded player without audio (`AGENTS.md` §37). The URL is
  the single most important string in the video to survive compression.
- The video does not fade out. `1969` is a usable still.

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
- Shared component, and it exists: `src/components/BrandLogo.tsx`, the same
  lockup component `BrandScene` uses, so the two scenes cannot render slightly
  different marks. It exports `BrandLogo`, `BrandTagline`, the two copy strings
  and `brandLockup` — the screen position, as one shared constant both scenes
  read. Do not lay this scene's column out independently and do not re-declare a
  single one of those numbers here; the whole point of the component is that the
  `1850` boundary cannot drift.
- Render it with no props. `BrandLogo` and `BrandTagline` default every
  animation input to its settled value — including `markRotation`, which defaults
  to `0` — so `<BrandLogo />` and `<BrandTagline />` reproduce frame `1849`
  exactly, which is what this scene must inherit. Scene 08 turns the mark once as
  its wordmark enters and that turn concludes at `1756`; nothing in this scene
  turns, and nothing here may reintroduce it.
- Global scene boundaries live inline in `src/Composition.tsx` as
  `<Sequence name="09 Outro" from={1850} durationInFrames={120}>` literals, because
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
  1350 px at 20 px and roughly 1600 px at 24 px — that is, 56 % to 67 % of the
  1920 px frame width. It fits in 16:9, but it is the widest single element in the
  entire video, it visually outweighs the URL it is supposed to support, and it
  cannot survive a 1080-wide crop at a readable size (`AGENTS.md` §38). These are
  estimates from a nominal advance width and should be confirmed by measuring the
  rendered text before the decision is finalised.

## Current compromises

- **There is no accent in this scene.** Recorded here as a compromise rather
  than a fact because it was not chosen for this scene — it follows from scene
  08's mark decision, and if that is ever reversed this scene's
  `## Visual composition` reverts with it.
- **The column sits 18 px below the frame's centre.** It runs `520` to `1096`, so
  its centre is `778` against `760`. It is not corrected, because correcting it
  would mean moving the mark and the mark is required to be motionless across
  `1850`. Same instruction as `STORYBOARD.md` §29 gives for the `1510` still: a
  frame that needs optical centring is cropped, not re-laid-out. At 1.7 % of the
  frame it is below the threshold at which anyone would call it off-centre.
- **Nothing moves after `1880`, not `1910`.** Omitting the install line removed
  the only beat between the CTA and the hold, so the frame is static for the last
  90 frames rather than 60. That is more reading time for the URL and it is not a
  problem, but it does mean the last third of the film is one image: if a beat is
  ever added back, it goes before `1880`, never inside the hold.
- **Domain — resolved 2026-08-26: `kivgraph.dev`.** Verified in the product
  rather than taken on trust: `landing/astro.config.mjs` bakes
  `https://kivgraph.dev` in as the production fallback for `site`, which is the
  origin CI builds every canonical and every sitemap entry against, and
  `landing/AGENTS.md` states that the origin is the apex of `kivgraph.dev` and
  that the previous origin `kivgraph.luqueeee.dev` redirects to it route by
  route. It is also the string `STORYBOARD.md` already named, so nothing in the
  storyboard changed.

  The account-spelling trap the old note warned about is still live and still
  worth keeping: `luqueee` in the storyboard's GitHub URL, `luqueeee` in the
  retired hostname, `Luqueee` in the real install URL. None of those three is on
  screen, because the GitHub URL is not the one that shipped.
- **Install line — resolved 2026-08-26: omitted**, which is what this document
  already recommended. The decision rests on the measured length above. `STORYBOARD.md` shows the shorthand
  `curl -fsSL ... | sh`, which is not a real command; the real published command
  is `curl -fsSL https://github.com/Luqueee/kivgraph/releases/latest/download/install.sh | bash`
  — 89 characters, and `| bash` rather than `| sh`. It is considerably longer than
  the storyboard's shorthand implies. Current recommendation: **omit it.** The
  storyboard's own condition ("only if the line stays short enough", "if it looks
  visually noisy, do not show it") is not met by an 89-character line placed next
  to the URL it is meant to support. Revisit only if a genuinely short published
  alias exists; never shorten the command by hand to make it fit.
- **Lockup persistence across `1850` — resolved 2026-08-26 in favour of
  persistence, and built.** The lockup and tagline carry over from
  `08-brand.md` unchanged. The storyboard neither states nor forbids it, but its
  own requirement for this scene — that the final hold lets the viewer remember
  the name and locate the URL — needs the name to still be there.
  `BrandLogo.tsx` enforces it: one component, one position, consumed by both
  scenes. Mirrored in `08-brand.md` `## Transition out`.
- **Integration names — verified 2026-08-26.** `kivgraph mcp install` has five
  targets: `claude-code`, `claude-desktop`, `codex`, `opencode` and `oh-my-pi`,
  per `landing/src/content/docs/kivgraph-faq.md` and
  `landing/src/components/landing/clients.ts`, which is also where the exact
  labels come from — and `clients.ts` derives from
  `internal/integrations/integrations.go`, which is the only place that decides
  what the CLI offers. All four names on screen are real, and they are spelled
  the way the product spells them: `Oh My Pi`, not the `oh-my-pi` `--target`
  value.

  `Claude Desktop` is the one supported client still absent, and it is the right
  one to leave out if only one can be: `clients.ts` marks it *user scope only,
  and the one target with no local skill install*, so it is the narrowest of the
  five. `STORYBOARD.md` names three and allows further compatible integrations
  *«si hay espacio»*, and the space was measured rather than judged — see
  `## Visual composition`.

  Re-check this list at release: an integration that is dropped and left on
  screen is the same fabricated product fact as one that never existed.
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

```text
2026-08-26
- Scene 07 (Benchmark) was implemented at 170 frames rather than the 120 it was
  drafted at, so every master frame in this document moved +50: the scene now
  spans `1410`–`1530`, its final frame is `1529`, and it closes a 1530-frame,
  25.5 s master. Beats, durations and scene-local frames are unchanged, including
  the 60-frame hold.
- The growth was upstream and it was measured. At 120 frames the benchmark's last
  statement had 0.17 s of reading time — this document's own argument about
  reading time, applied one scene earlier — so 50 frames were added there and
  everything after it followed. `08-brand.md` now settles at `1400` and holds
  through `1409`, which is the frame this scene inherits.
- Two of this document's own sentences moved with the length: the video is now
  over twenty-five seconds long rather than nearly twenty-five, and it has been
  talking about coding agents for twenty-three seconds rather than twenty-two
  when this scene names them. The poster frame is now `1529`.
```

```text
2026-08-26
- The second retime of this document in one day, and the same scene caused both.
  Scene 07 (Benchmark) was rebuilt as a two-column comparison table - two arms as
  column heads, four measured rows, one hairline under the heads - and grew from
  170 to 210 frames, so every master frame in this document moved a further +40 on
  top of this morning's +50: the scene now spans `1450`-`1570`, its final frame is
  `1569`, and it closes a 1570-frame, 26.17 s master. Beats, durations and
  scene-local frames are unchanged, including the 60-frame hold, which is now
  `1510`-`1570`. The +50 was not re-applied; this pass started from the numbers
  already in the file.
- The growth was upstream and it was art direction rather than measurement: the
  benchmark was asked for as a comparison table with more data in it, and a table
  that names both arms above its figures needs more rows and more arrival time
  than the four statements it replaced.
- `Time:` re-derived against 60 fps: 24.17 s - 26.17 s, from `1450` and `1570`.
  `Duration: 120 frames / 2.0 s` is unchanged, because the scene did not.
- Two of this document's own sentences moved with the length again: the video is
  now over twenty-six seconds long rather than over twenty-five, and it has been
  talking about coding agents for twenty-four seconds rather than twenty-three
  when this scene names them.
- `08-brand.md` now settles at `1440` and holds through `1449`, which is the frame
  this scene inherits. The install-line beat is now `1500`, the frame that proves
  nothing is still easing into place after the hold begins is now `1511`, and the
  poster frame is now `1569`.
- Every code-fenced literal was checked rather than trusted, because the sibling
  document was caught earlier today carrying a rotted `from={1120}` through two
  shifts. `## Technical notes` now reads
  `<Sequence name="09 Outro" from={1450} durationInFrames={120}>`; the key-frame
  block is `1450` / `1510` / `1569`. The copy blocks, the two `curl` blocks and
  the install-line measurements (89 characters, roughly 1070 px and 1280 px in a
  1920 px frame) carry no master frames and are unchanged.
- Checked against `src/Composition.tsx`, which now records `1450-1570 Outro` in
  its map and a 1570-frame master. This scene is still unimplemented;
  `mountedFrames` is 1360, so the last 210 frames of the master - this scene and
  all of `08-brand.md` - are still deliberately unrendered.
```

```text
2026-08-26
- Scene 08 was implemented, so three things this document asserted about the
  frame it inherits changed, and none of them moved a frame number. The timeline
  is untouched: master 1570, this scene 1450-1570, its final frame 1569, the
  60-frame hold 1510-1570.
- BrandLogo.tsx exists. It owns the mark, the wordmark, the tagline and the
  lockup's screen position, and it was authored to this scene's column rather
  than to scene 08's own frame - the mark's centre is 960, 360, so that the full
  column below it is what ends up optically centred. ## Initial state and
  ## Technical notes now say to read the numbers from `brandLockup` instead of
  restating them, because a second copy is the drift the component exists to
  prevent.
- The mark is not the 8 x 8 #2563eb square. On direct art direction scene 08
  resolves to the shipped raster mark - favicon, app icon, MCP client icon -
  which carries an off-white #e9e2dc and a teal #56818a and no blue. So the
  sentence "The only accent #2563eb in the frame is the lockup's mark" was
  false and has been rewritten: there is no #2563eb in this scene at all, the
  film's last accent is spent at 1428 on an arriving relationship, and nothing
  may be added here to compensate.
- mountedFrames went 1360 -> 1450, so this scene is now the only unrendered part
  of the master. That is also why scene 08's tagline has ten frames of reading
  time today instead of the 129 it was authored for - 2.15 s, 19.5 characters
  per second - and this scene is what pays it back. Recorded in
  ## Current compromises.
- Unchanged and still open: the final domain, whether to show the install line
  (recommendation still omit), and the integration names.
```

```text
2026-08-26
- Retimed +80 with no change of its own. Scene 08 grew from 90 frames to 170
  after being watched at the drafted length, so this scene now spans 1530-1650,
  its final frame is 1649 and it closes a 1650-frame, 27.5 s master. Beats,
  durations and scene-local frames are unchanged, including the 60-frame hold,
  which is now 1590-1650.
- The frame this scene inherits is unchanged in content and has been on screen
  for 90 frames rather than ten by the time it arrives. That removes this
  document's own note that the tagline's reading time depended on this scene
  existing: it no longer does. What this scene now adds is 120 more frames on top
  of 90, so the tagline will end with 210 - 3.5 s. Judge that against this
  scene's own dwell when it is built rather than trimming scene 08 pre-emptively.
- Two of this document's sentences moved with the length: the video is now over
  twenty-seven seconds long rather than over twenty-six, and it has been talking
  about coding agents for twenty-five seconds rather than twenty-four when this
  scene names them. The install-line beat is now 1580, the frame that proves
  nothing is still easing after the hold begins is 1591, and the poster frame is
  1649.
- Scene 06 was recentred in the same pass and this scene reads one constant that
  moved with it: attributionLayout.y, which scene 07 - not this one - inherits.
  Nothing here changed.
- Every code-fenced literal checked rather than trusted. ## Technical notes now
  reads `<Sequence name="09 Outro" from={1530} durationInFrames={120}>`; the key
  frame block is 1530 / 1590 / 1649. The copy blocks, the two curl blocks and the
  install-line measurements carry no master frames and are unchanged.
- Unchanged and still open: the final domain, whether to show the install line
  (recommendation still omit), and the integration names.
```

```text
2026-08-26
- Implemented. `src/scenes/OutroScene.tsx`, mounted at 1530-1650, 120 frames.
  Every scene in the film now exists, so `mountedFrames` was retired and
  `src/Composition.tsx` exports `masterFrames = 1650` instead. Nothing in the
  timeline moved.
- The two open decisions are closed, and both were verified in the product rather
  than chosen. The domain is `kivgraph.dev`: `landing/astro.config.mjs` bakes
  `https://kivgraph.dev` in as the production fallback for `site`, which is the
  origin CI builds every canonical against, and `landing/AGENTS.md` says the
  origin is the apex of that domain and that `kivgraph.luqueeee.dev` redirects to
  it route by route. It is the string STORYBOARD.md already named, so the
  storyboard did not change. The install line is omitted, which is what this
  document already recommended: 89 characters against a 12-character URL.
- The integration names are verified. `kivgraph mcp install` has five targets -
  claude-code, claude-desktop, codex, opencode, oh-my-pi - so all three on screen
  are real, and the labels come from landing/src/components/landing/clients.ts.
  Claude Desktop and Oh My Pi are deliberately absent: the storyboard allows more
  «si hay espacio» and there is not.
- Built exactly as specified. The lockup and tagline are `<BrandLogo />` and
  `<BrandTagline />` with no props, so they reproduce scene 08's frame 1529
  exactly - measured: 1529 and 1530 are byte-identical, so the boundary has no
  cut, no fade and no movement. The integrations enter on a four-frame per-name
  stagger concluding at local 0028 and the URL reads at local 0030 / master 1560.
- Two facts about the built scene that the spec did not predict, both recorded in
  ## Current compromises. The column sits 18 px below the frame's centre, because
  correcting it would mean moving a mark that has to be motionless across 1530.
  And nothing moves after 1560 rather than 1590: omitting the install line removed
  the only beat between the CTA and the hold, so the last 90 frames are one image
  instead of 60. Measured: 1560, 1590 and 1649 are byte-identical.
- The film renders end to end: 1650 frames, 27.5 s, 1920x1080 at 60 fps, no black
  frame anywhere. In the H.264 encode the final hold stays a hold - 87.9 dB
  between frames that are byte-identical in the source - and the poster frame
  measures 45.2 dB against its source PNG.
```

```text
2026-08-26
- `Oh My Pi` added to the integrations line, on direct art direction. It is a
  fourth real target - clients.ts, derived from
  internal/integrations/integrations.go - and the label is the product's own,
  `Oh My Pi` rather than the `oh-my-pi` --target value. STORYBOARD.md allows
  further compatible integrations «si hay espacio» and its copy block was updated
  in the same task, since the line it fixes verbatim is now four names.
- The space was measured rather than judged: the line runs 704 to 1214, so it is
  511 px wide, 27% of the frame, centred on 959 against the frame's 960, and it
  clears a 1080-wide crop with 280 px either side. Take that measurement again
  before a fifth name goes in.
- The per-name stagger went from four frames to three, which is what four names
  fit into the window: they land at local 0020, 0023, 0026 and 0029, one frame
  before the URL reads. A stagger running past 0030 would put a name still
  arriving under a URL that is supposed to be legible.
- Claude Desktop is the one supported client still off screen, and it is the right
  one to leave out: clients.ts marks it user scope only and the one target with no
  local skill install.
- Nothing else moved. 1529 and 1530 are still byte-identical, and 1560, 1590 and
  1649 are still one image - the hold is untouched.
```
