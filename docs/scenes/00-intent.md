# Scene 00 — Intent

## Purpose

This scene stops the film assuming its own answer.

Everything after it opens on `withRetry` already singled out, which quietly
claims the agent knew what the symbol was called. It usually does not. A real
session starts from a behaviour — *where do we retry failed requests* — and the
name, the file, the package and the repository are all things it has to find.
`find_by_intent` is the tool for that step, and without it the film says
Kivgraph is useful once you already know where to look.

## Viewer takeaway

> The agent does not need to know the symbol name before using Kivgraph.

Secondary: what it gets back is a place to start, not a proof.

## Timeline

- Global frames: `0000`–`0220`
- Scene-local frames: `0000`–`0220` (they are master frames; the scene starts at 0)
- Time: 0.0 s – 3.67 s
- Duration: 220 frames / 3.67 s at 60 fps
- Remotion component: `src/scenes/IntentScene.tsx`
- Registration: `<Sequence name="00 Intent" durationInFrames={220}>`

| Master        | Local         | Beat                                                        |
| ------------- | ------------- | ----------------------------------------------------------- |
| `0000`–`0008` | `0000`–`0008` | Empty. The same opening silence discipline as `08-brand.md`. |
| `0008`–`0048` | `0008`–`0048` | **Beat 1, the problem.** Two lines, the second the punch.    |
| `0052`–`0084` | `0052`–`0084` | **Beat 1, the behaviour**, described.                        |
| `0088`–`0110` | `0088`–`0110` | **Beat 2, the tool**, and in plain language what it does.    |
| `0112`–`0142` | `0112`–`0142` | **Beat 3, the result.** One dominant name; two quiet others. |
| `0186`–`0210` | `0186`–`0210` | Everything except the name leaves.                           |
| `0190`–`0214` | `0190`–`0214` | The name scales onto the source symbol. It never travels.    |
| `0220`        | `0220`        | Match cut into `01-symbol.md` frame 0.                        |

## Three beats, one idea

The idea is *describe what the code does; Kivgraph finds where to start*, and the
scene is built so that idea arrives before any mechanics do.

The first build did the opposite: three candidates of equal weight, each with a
repository, a package and a `match` value, asking the viewer to infer the tool's
purpose from a ranking they had to parse first. Technically accurate and
unreadable at a glance.

**Beat 1 — the problem.** `You know what the code does.` / `Not where it lives.`
Sans, because it is addressed to the viewer. Then the behaviour itself, in mono.

**There is no `❯` on it.** The prompt glyph promises a command or a question
typed at a shell and this is neither — it is a description of what some code
does, which is exactly what the tool's `intent` argument takes. The glyph was
continuity with scene 02's question, and it was continuity bought against the one
thing this scene has to make obvious: that you say what the code *does*, not what
it is called.

**Beat 2 — the tool.** `find_by_intent`, and under it `Finds where to start
reading`. Both that and *finds likely code entry points* are accurate; the second
is the documentation's register and the first is a person's. "Entry point" is a
term you have to already hold, and the sentence exists precisely for a viewer who
does not.

**Beat 3 — the result.** One name at 44 px, its file under it, and the authority
marker under that. `Policy.Do()` and `Once()` stay at low contrast so the frame
is honest that there was more than one plausible answer, and never compete with
the one being opened.

## Invariants

These are the ones that must survive future edits. They are not stylistic.

- **Candidates are plausible, not proven.** The tool's own documentation:
  *«Neither is an edge this tool resolved. A row here is a candidate [...]:
  plausible and not proven.»* Nothing in this scene may read as a resolved
  relationship.
- **No score or confidence exists, so none may be shown.** The tool publishes
  none, deliberately: *«No score travels [...] publishing it would invite a
  reader to treat it as a confidence this layer cannot claim.»* No bars, no
  percentages, no stars, no green and amber, no confidence indicator.
- **`match` stays visible on every row**, in the product's own vocabulary —
  `lexical` and `lexical+calls` — because every row of the real answer carries
  it and it is the field that says *this is text that looked alike*. It is
  metadata about **why a row appeared**, never about how much to believe it, and
  it is set at the label scale in `textFaint` so it can never read as a verdict.
- **The candidate rows come from the real fixture.** They are derived from
  `graphDemo.ts` nodes, never typed, so they cannot outlive the dataset the rest
  of the film draws. `graphDemo.ts` carries the rule this scene is squarely
  inside: *«a video selling exactness cannot illustrate it with a fabricated
  fixture»*.
- **`withRetry` is selected for inspection, not declared the only correct
  result.** `Policy.Do` and `Once` are legitimate candidates and are never marked
  wrong — no cross, no tick, no strike-through, no red. They recede in hierarchy
  while one of them is opened, which is what picking an entry point is.
- **They recede to zero, not to a floor.** The first build held them at `0.182`
  to say *receded, not deleted*, and it was wrong twice: `withRetry` grows
  directly over where they sit, so they read through it as ghost type, and the
  frame handed to the match cut has to hold the symbol and nothing else. The
  receding is the thirty frames they spend losing light while still on screen;
  being absent at the cut is not a verdict on them. Measured at threshold 14,
  one level above the background: **zero pixels outside the token's own box** at
  `0165` and at `0179`.
- **The candidate → source match cut targets screen point `620, 662`**, at the
  em `world.retry.fontSize × symbolOpeningZoom`. Both come from
  `SymbolScene.tsx`; neither is written down here.
- The scene works muted, like every other.

## Copy

Verbatim, and it is the tool's own documented example rather than a variant
written for the film:

```text
retry a failed request with exponential backoff
```

That example's top result is `withRetry`, which is what makes this video
demonstrable against the product instead of merely plausible.

```text
kivgraph / find_by_intent
```

The invocation is in the same treatment `02-agent.md` gives
`kivgraph / get_blast_radius`: an accent square, the server, a slash, the tool,
at the size metadata gets. Reusing the form rather than inventing one is the
point — the viewer has to read the two as the same kind of event.

## The candidates

Three, and only these three, because only these three have a term to match.

```text
withRetry()
payments-api/internal/retry/retry.go
candidate · lexical+calls

Policy.Do()
Once()
```

The path is `symbolFile`, exported from `SymbolScene` — the same string scene 01
prints as its caption, so the film cannot offer one file and then open another.
The parentheses are a separate span and leave before the cut: the tool returns an
unparenthesised `qualified_name`, the film parenthesises a symbol per
`STORYBOARD.md` typography, and the source it cuts into writes
`func withRetry(ctx ...` where the bracket belongs to the code. They are right
here and wrong one frame later.

`internal/retry` is the package, so its three symbols are credited for the path;
`withRetry` alone also carries the term in its own name and is credited for what
its callees carry, which is exactly the difference between `lexical` and
`lexical+calls`. `Client.Charge` and `Client.Refund` live in `paymentService` and
have nothing to match, so they are absent — not filtered out for tidiness,
simply not candidates.

The names are the tool's `qualified_name`, which is unparenthesised. The graph
parenthesises its labels per `STORYBOARD.md` typography; this surface is not the
graph. The unparenthesised form is also what makes the match cut exact: the nine
glyphs of `withRetry` are the nine glyphs of `world.retry.origin`.

## Motion

Two gestures, deliberately not one.

First the field quiets over `0126`–`0156` — the question, the invocation and the
metadata lose luminance. Only then, from `0148`, does `withRetry` travel and
grow.

Doing both at once was the first build and it did not work: the winner was
already scaling while the rows were still arriving, so it collided with
`Policy.Do` and the frame read as a layout fault rather than as a choice.
Separating them also buys the beat the scene is about — three plausible
candidates stand together, and then one of them is the one being opened.

## Transition out

A match cut into `01-symbol.md` frame `0180`, and it is the film's third.

`withRetry` is the same object crossing representations: a row in a ranked answer
becomes the symbol in its own source. Nothing fades and nothing cuts to black.

Measured on the render rather than trusted to arithmetic, which is what the other
two match cuts already do:

```text
ink centroid, candidate `0179`   (609.30, 665.61)
ink centroid, source    `0180`   (609.27, 665.62)
offset                           dx +0.03 px   dy -0.01 px
ink mass ratio                   1.0005
```

**The bounding box was the wrong instrument and it hid a real error.** It agreed
to the pixel while the seam still measured 234 levels of difference on identical
boxes, which is what a sub-pixel offset looks like on high-contrast glyph edges:
a box rounds, so two glyphs a pixel apart can share one. The ink centroid is
sub-pixel and found `dy +0.99`; `targetTopBias` and `targetLeftBias` in
`IntentScene.tsx` are that measurement. The mass ratio is the proof that the size
and the weight were right all along and only the placement was not.

Whole-frame PSNR across the seam went 34.5 → 45.0 dB as the two biases landed.
The 30.5 dB that remains over the token's own box is the irreducible difference
between two rendering paths — a `span` inside a laid-out code line, and a centred
`div` — at an offset of two hundredths of a pixel.

**The code field is scene 01's half of this cut, and it has to arrive.** Handing
over a frame that holds `withRetry` and nothing else, into a frame that holds
`withRetry` and an entire file, matched the token perfectly and switched a light
on around it. `01-symbol.md` now raises everything except the symbol from nothing
over its first twenty-six frames.
The arithmetic alone landed three pixels high, and `targetTopBias` in
`IntentScene.tsx` is that measured error — it belongs to the difference between
a DOM line box and the code plane's baseline, not to the anchor.

## Current compromises

- **The film is 32.17 s.** The new opening is 3.0 s on a film that was 29.17 s.
  Trimming scene 01's 39-frame hold was tested and rejected on a measurement,
  not a feeling: the file caption `payments-api/internal/retry/retry.go` is 36
  characters and settles at local `0080`, so the hold gives it 0.65 s — 55
  characters per second against the 25–40 budget the rest of the film is timed
  against. It is already under the minimum; any trim makes it worse.
- **The candidate list is a demo fixture, and says so.** It is derived from real
  fixture nodes, but the ranking it implies is the film's, not a recorded tool
  response. The tool's documented example ranks over a different corpus.
- **`unmatched_terms` is not shown.** The real answer would carry it — our
  fixture has no symbol for `exponential` or `backoff` — and it is an honest
  detail that would reinforce *candidate, not proof*. There is no room for it in
  three seconds without crowding the three rows.
- **Sound absent**, like the rest of the film. `STORYBOARD.md` §17 requires the
  piece to work muted and this scene is no exception.

## Modification history

```text
2026-08-27
- Initial scene specification, written with the implementation.
- Restructured into three beats, on direct art direction: the first build was
  technically accurate and unreadable at a glance. It showed three candidates of
  equal weight, each with a repository, a package and a `match` value, and asked
  the viewer to infer the tool's purpose from a ranking they had to parse first.
  Now: problem, tool, result - and the result has one dominant thing in it.
- New copy, all of it in STORYBOARD.md §32 in the same pass: `You know what the
  code does.` / `Not where it lives.` and the subtitle `Finds where to start
  reading`. The subtitle is the point of the restructure - purpose before
  mechanics - and it is a person's register rather than the documentation's:
  "entry point" is a term you have to already hold.
- The prompt glyph is gone from the intent line. `❯` promises a command or a
  question typed at a shell and the line is neither: it is a description of what
  some code does, which is exactly what the `intent` argument takes. It was
  continuity with scene 02's question, bought against the one thing this scene
  has to make obvious.
- The semantics survived the simplification rather than being traded for it. The
  word `candidate` is now on screen next to `lexical+calls`, which says it more
  plainly than three rows of metadata did; there is still no score; and the two
  other candidates are still present and still never marked wrong.
- 180 -> 220 frames, and the reason is measured. At 180 the film's own reading
  budget of 25-40 characters per second failed on three of five blocks: the
  intent at 52, the tool and its subtitle at 101, and the path and match at 1860
  - the last settling two frames before everything began to leave. Structure was
  the fix for *hard to parse*; it cannot also be the fix for *not on screen long
  enough*. At 220 everything a viewer must read to completion is inside budget,
  and only the path is above it, which is correct because a path is scanned.
- The name now only scales. Placing it so the nine glyphs of `withRetry` are
  already centred on `symbolAnchor` at 44 px makes the cut a pure zoom into the
  candidate, which is also the clearest reading of *we enter that source code*.
  Re-measured at the new boundary 0219/0220: dx +0.03, dy -0.01, ink mass ratio
  1.0005, zero residue outside the token, 45.0 dB across the seam.
- Master 1930 -> 1970 frames, 32.83 s.
- Two defects in the handover, both found by looking at a frame rather than at a
  number. The receding candidates were floored at 0.182 instead of reaching zero,
  so they read through `withRetry` as ghost type and the cut handed over three
  names; and the alignment was verified with a bounding box, which rounds, so a
  sub-pixel offset survived it. Re-measured with the ink centroid: dx +0.03,
  dy -0.01, mass ratio 1.0005, and the seam went 34.5 -> 45.0 dB whole-frame.
- The code field now arrives rather than appearing. That half of the fix lives in
  01-symbol.md.
```
