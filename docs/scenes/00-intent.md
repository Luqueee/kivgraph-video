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

- Global frames: `0000`–`0180`
- Scene-local frames: `0000`–`0180` (they are master frames; the scene starts at 0)
- Time: 0.0 s – 3.0 s
- Duration: 180 frames / 3.0 s at 60 fps
- Remotion component: `src/scenes/IntentScene.tsx`
- Registration: `<Sequence name="00 Intent" durationInFrames={180}>`

| Master        | Local         | Beat                                                        |
| ------------- | ------------- | ----------------------------------------------------------- |
| `0000`–`0010` | `0000`–`0010` | Empty. The same opening silence discipline as `08-brand.md`. |
| `0010`–`0070` | `0010`–`0070` | The intent settles.                                          |
| `0070`–`0092` | `0070`–`0092` | `kivgraph / find_by_intent` arrives.                         |
| `0092`–`0134` | `0092`–`0134` | Three candidates arrive, staggered nine frames apart.        |
| `0126`–`0156` | `0126`–`0156` | The field quiets: question, invocation and metadata recede.  |
| `0148`–`0172` | `0148`–`0172` | `withRetry` travels and grows onto the source symbol's point. |
| `0180`        | `0180`        | Match cut into `01-symbol.md` frame 0.                        |

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
withRetry     payments-api · internal/retry     lexical+calls
Policy.Do     payments-api · internal/retry     lexical
Once          payments-api · internal/retry     lexical
```

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
candidate `0179`   ink x 382..855   y 626..711
source    `0180`   ink x 382..855   y 626..710
error              dx 0 / 0         dy 0 / +1
```

Zero on three edges; the one pixel is antialiasing on the descender of the `y`.
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
```
