# Scene 00 — Intent

## Purpose

This scene stops the film assuming its own answer.

Everything after it opens on `withRetry` already singled out, which quietly
claims the agent knew what the symbol was called. It usually does not. A real
session starts from a behaviour — *where do we retry failed requests* — and the
name, the file, the package and the repository are all things it has to find.
`find_by_intent` is the tool for that step, and without it the film says
Kivgraph is useful once you already know where to look.

### The visual metaphor: a short stack of heterogeneous code candidates

The scene is a **result stack** — a few rows of code metadata floating in the
Kivgraph field, each one a different kind of Go declaration:

```text
FUNC     withRetry()
CONST    maxAttempts
METHOD   Policy.Do()
```

That second column is the scene's whole argument, and it demonstrates something
the previous build could not say at all. `find_by_intent` retrieves **relevant
code context, not only function names** — a retry helper, the budget it counts
against and the method that goes through it are three different kinds of thing,
and all three are useful places to start reading. Three function names could not
have made that point, because three functions are one kind of thing.

It is deliberately **not** a search UI. No box, no field, no cards, no result
panel, no columns, no score. A vertical editorial list of typography in the same
dark field the rest of the film lives in.

## Viewer takeaway

> Describe the behaviour and Kivgraph hands you places to start reading — and
> they are not all functions.

Secondary: what comes back is a **candidate**, a place to start, not a proof.

The second half of that first line is the whole reason the scene was rebuilt. A
list of three function names cannot say it, because three functions are one kind
of thing. Three rows reading `FUNC`, `CONST`, `METHOD` say it before a viewer has
read a single name.

## Timeline

- Global frames: `0120`–`0370`
- Scene-local frames: `0000`–`0250` (last rendered frame `0249` / master `0369`)
- Time: 2.0 s – 6.17 s
- Duration: 250 frames / 4.17 s at 60 fps
- Remotion component: `src/scenes/IntentScene.tsx`
- Data: `src/data/intentCandidates.ts`
- Registration: `<Sequence name="00 Intent" from={120} durationInFrames={250}>`

| Master        | Local         | Beat                                                                       |
| ------------- | ------------- | -------------------------------------------------------------------------- |
| `0120`–`0128` | `0000`–`0008` | Empty. The silence the cold open hands over.                               |
| `0128`–`0166` | `0008`–`0046` | **Beat 1, the question**, at the `❯` scene 02 also uses.                   |
| `0174`–`0198` | `0054`–`0078` | **Beat 2, the invocation.** `kivgraph / find_by_intent`.                   |
| `0190`–`0210` | `0070`–`0090` | The header: `payments-api · 3 candidates`, over the rows it heads.         |
| `0200`–`0220` | `0080`–`0100` | **Beat 3.** Row 1 — `FUNC` · `withRetry()`.                                |
| `0212`–`0232` | `0092`–`0112` | Row 2 — `CONST` · `maxAttempts`.                                           |
| `0224`–`0244` | `0104`–`0124` | Row 3 — `METHOD` · `Policy.Do()`.                                          |
| `0244`–`0296` | `0124`–`0176` | **Beat 4.** The stack complete. Measured byte-identical, 53 frames.        |
| `0296`–`0320` | `0176`–`0200` | **Beat 5.** The other two recede to 30 %; the selected row sheds metadata. |
| `0320`–`0328` | `0200`–`0208` | The selected candidate alone at full strength, the other two still there.  |
| `0328`–`0356` | `0208`–`0236` | Everything except the name leaves.                                         |
| `0332`–`0366` | `0212`–`0246` | The name scales onto the source symbol. It never travels.                  |
| `0370`        | `0250`        | Match cut into `01-symbol.md` frame 0.                                     |

Every window lives in one `beat` object in `IntentScene.tsx`, so this table and
the code cannot drift.

**The scene is 250 frames, and it was 300 until the opening couplet was cut.**
The fifty frames were returned to the film rather than spent inside the scene:
every window above moved by that same constant, so no element lost dwell and
nothing arrives faster than it did. The list and the match cut are untouched in
rhythm; the scene simply starts fifty frames later in its own story and fifty
frames earlier in the film's.

## Reading time is what the length is for

The stack has two tiers and they are read differently. The **kind and the name**
are read; the **path and the `match`** are scanned, exactly as `02-agent.md`'s
file caption is. Measured against the 25–40 characters per second the rest of
the film is timed by, with the top half leaving at local `0208` and the stack
committing at local `0176`:

```text
block                          read  settles   dwell    char/s   scanned
Where do we retry failed req?    34     0046   2.70 s     12.6        --
kivgraph / find_by_intent        25     0078   2.17 s     11.5        --
payments-api · 3 candidates      27     0090   1.97 s     13.7        --
FUNC   withRetry()               16     0100   1.27 s     12.6        30
CONST  maxAttempts               17     0112   1.07 s     15.9        30
METHOD Policy.Do()               18     0124   0.87 s     20.7        37
```

**These are the same figures the 300-frame cut measured**, to the decimal,
because the cut removed a block rather than compressing the ones that stayed.
Every read tier is inside the budget with room.

The rows arrive on a twelve-frame pitch, so by the time the third lands the
viewer has already read two kinds. That is what makes 0.87 s enough for the
third: `METHOD` is being contrasted with something, not learned cold.

### The couplet that used to open it

`You know what the code does.` / `Not where it lives.` ran for three builds and
cost fifty frames. It said in words what the stack now says in evidence, and the
brief that asked for the stack also asked that the tool be demonstrated rather
than described. Two further things made it removable rather than merely
redundant: the cold open puts a question in front of the viewer two seconds
earlier, so arriving on a second one is continuity rather than an abrupt start;
and the film is a promo, where fifty frames at the front are worth more than
fifty frames anywhere else.

It stays an approved phrase in `STORYBOARD.md` §32. Restoring it costs one block
and fifty frames.

## Five beats, one idea

`describe what I need` → `Kivgraph answers` → `the answers are different kinds of
code` → `I pick an entry point` → `we enter its source`.

**Beat 1 — the question.** The scene opens on it, in mono, at the `❯` scene 02
also uses. No box, no field, no terminal card: the glyph is the whole affordance.

**The glyph took three builds to earn.** It promises a command or a question
typed at a prompt. For three builds the line under it was the tool's documented
noun phrase, so the promise was false and the frame read wrong; removing the
glyph was worse, because then nothing said the line was something a person had
typed at all. The line is a question now, so the glyph is simply true.

**Beat 2 — the invocation.** `kivgraph / find_by_intent`, in the treatment
`02-agent.md` gives `kivgraph / get_blast_radius`: an accent square, the server,
a slash, the tool, at the size metadata gets. Reusing the form rather than
inventing one is the point — the viewer has to read the two as the same kind of
event.

**Beat 3 — the stack.** Three rows on a twelve-frame pitch, each opacity plus a
10 px upward settle, under a header that hoists what they share. Nothing bounces
and nothing springs.

**Beat 4 — the hold.** The render measures `0244`–`0296` byte-identical: 53
frames, 0.88 s, with the whole stack on screen and nothing moving. This is where
the scene's idea actually lands.

**Beat 5 — the commit.** The other two rows go to 30 % and scale to `0.97` and
`0.955` about their own left edges; the selected row loses its kind, its path and
its match until only `withRetry()` is left. Then everything else leaves and the
name opens into its own source.

### The subtitle that is no longer there

`Tells your agent where to read` sat under the tool name for three builds and is
gone. It was doing the stack's job with a sentence, and the stack does it with
evidence. It remains an approved phrase in `STORYBOARD.md` §32.

## Time to useful entry point — investigated, and not shown

The scene has a slot for a measured duration, at the right end of the
`payments-api · 3 candidates` header, and **it is empty on purpose**. This
section is why, so the question is not reopened from scratch.

### What the published benchmark actually measures

`kivgraph/benchmarks/graph-tools-comparison` records an `ms` on every call and
an `ms_total` per arm. Reading them:

```text
arm            tokens   calls    ms_total
kivgraph        35,961      36      19.966
native         267,980     101       0.000
```

**The baseline arm is not timed at all, and never has been.** `ms_total` is
`0.000` for `native` in all nine `results*.json` files in that directory — 101
calls across 29 questions, not one of them with a non-zero `ms`. It is not that
`grep` was immeasurably fast: `measureNative` in `main.go` builds its
observations as `observation{Tool: "grep", Tokens: …}` and never sets the `MS`
field, while the MCP and subprocess arms set it from a `time.Since`. The number
does not exist.

Three further problems, each of which would sink the comparison on its own:

- **The two arms do different work in different processes.** The `native` arm's
  "grep" is `searchCorpus`, a `filepath.WalkDir` plus `regexp` scan **inside the
  harness**, and its "read" is `os.ReadFile`. Timing that would measure the
  harness's own warm-cache file I/O, not a tool an agent runs.
- **No index build cost is recorded anywhere.** `indexing` is `{}` in
  `results-all.json`. Kivgraph's `19.966 ms` is query latency against an
  already-published snapshot; `native` is recorded as *«nothing is indexed»*. A
  duration that counts one arm's queries and neither arm's setup is exactly the
  selective accounting a benchmark exists to prevent.
- **The metric a viewer would infer is model-dominated.** *Time to useful entry
  point* for an agent is mostly inference over whatever the search returned.
  Neither arm has a model in it, so neither measures the thing the number would
  appear to claim.

### The measurement taken here, and why it does not rescue the claim

For completeness, both halves were measured directly rather than argued about:

```text
grep -rw retry over the 53-repository corpus, warm page cache, Linux
  runs     89, 106, 157, 86, 88 ms
  median   89 ms
  returns  254 hit lines, 768,753 bytes

find_by_intent, one MCP round trip against snapshot 90
  the published benchmark's own per-call range, Apple M5 / macOS: 0.159–4.15 ms
```

Per call, the tool is one to three orders of magnitude faster, and it returns a
ranked page instead of 750 KB. **That still does not license a number on
screen.** The two figures come from different machines and different operating
systems, the fast one excludes the index build that made it possible, and the
slow one is a raw search rather than the workflow a viewer would picture. Two
true measurements that cannot be divided by each other are not a benchmark.

### What would make it publishable

A separate timing harness, not a column added to this one:

```text
metric        time to useful entry point, defined as first read of a symbol
              that the ground truth accepts
arms          find_by_intent -> get_source   |   search -> read candidate files
setup         index build timed for the arm that needs one, reported separately
runs          >= 20 per question, median and p95, cold and warm stated apart
machine       one machine for both arms, stated
model         either excluded from both arms and the metric renamed to tool
              time, or included in both with the model and version pinned
```

Until that exists, the film states token cost and exact answers, which are
measured, and says nothing about seconds. `07-benchmark.md`'s table gains no
time row for the same reason.

## Invariants

These must survive future edits. They are not stylistic.

- **Candidates are plausible, not proven.** The tool's own documentation:
  *«Neither is an edge this tool resolved. A row here is a candidate [...]:
  plausible and not proven.»* Nothing in this scene may read as a resolved
  relationship. The word `candidates` heads the stack, in the tool's own
  compact-view idiom of hoisting into a header what every row shares.
- **No score or confidence exists, so none may be shown.** The tool publishes
  none, deliberately: *«No score travels [...] publishing it would invite a
  reader to treat it as a confidence this layer cannot claim.»* No bars, no
  percentages, no stars, no green and amber, no confidence indicator, no
  checkmarks, no ordering that implies probability.
- **`match` stays visible on every row**, in the product's own vocabulary —
  `lexical` and `lexical+calls`. It is metadata about **why a row appeared**,
  never about how much to believe it, and it is set at the smallest size in the
  scene in `textFaint` so it can never read as a verdict.
- **`match` is not a ranking, and the scene proves it.** The row the film opens
  carries the *plainer* provenance: `withRetry()` is `lexical` while
  `Policy.Do()` is `lexical+calls`. That is derived from `graphDemo.ts`'s edges,
  not arranged — `Policy.Do` calls `withRetry`, whose name carries `retry`, and
  the fixture models nothing that `withRetry` itself calls. Do not "fix" it by
  promoting the selected row.
- **The rows are heterogeneous by kind, and the kinds are real.** `func`,
  `const` and `method` are three of the seven `DefinitionKind` values Kivgraph's
  Go loader emits, displayed uppercased and otherwise unaltered. It is `FUNC`
  and not `FUNCTION` because `function` is the TypeScript kind string and this
  fixture is Go.
- **No comment row, ever.** `find_by_intent` indexes *«names, qualified names,
  kinds and paths, not prose»*, and its empty-answer guidance says it again:
  *«the index holds no prose»*. A `COMMENT` candidate would be an invented tool
  behaviour, which is worse than an invented fixture because a viewer can go and
  try it.
- **Every row is declared in the source the film renders.**
  `intentCandidates.ts` finds each candidate in `src/code/payments.ts` and throws
  if it is not there, so the stack cannot outlive the Go the camera flies into
  two seconds later. `graphDemo.ts` carries the rule this is under: *«a video
  selling exactness cannot illustrate it with a fabricated fixture»*.
- **The candidates that are not opened are never marked wrong.** No cross, no
  tick, no strike-through, no red. They recede to 30 % while one of them is
  opened, which is what picking an entry point is.
- **They recede to zero before the cut, not to a floor.** An earlier build held
  them at `0.182`: `withRetry` grows directly over where they sit, so they read
  through it as ghost type, and the frame handed to the match cut has to hold the
  symbol and nothing else.
- **The candidate → source match cut targets screen point `620, 662`**, at the
  em `world.retry.fontSize × symbolOpeningZoom`. Both come from
  `SymbolScene.tsx`; neither is written down here. **The stack is laid out
  outward from that anchor** — `stackLeft` and the first row's top are derived
  from it — so a redesign of the list cannot move the seam.
- **The empty upper third is the composition, not a gap to fill.** The block
  runs `y 408`–`955` and the top of the frame is deliberately bare. It looks like
  something is missing and nothing is: the couplet that used to sit there was cut
  on 2026-08-27 and the space it left was kept. Do not centre the block, do not
  move the question or the invocation down to close the gap, and above all do not
  move the anchor — the stack hangs off `symbolAnchor` and every pixel of the
  match cut depends on it. The frame reads top-down as one descending column,
  question → invocation → header → stack, and the air above it is what lets it.
- **No colour per kind.** `STORYBOARD.md` §6 keeps the frame 85–90 % neutral and
  the accent has three permitted meanings; a code kind is not one of them. Kinds
  are separated by label and position only, and the scene survives greyscale.
- The scene works muted, like every other.

## Copy

```text
❯  Where do we retry failed requests?

■ kivgraph / find_by_intent

payments-api  ·  3 candidates

FUNC     withRetry()
         internal/retry/retry.go
         lexical

CONST    maxAttempts
         internal/retry/retry.go
         lexical

METHOD   Policy.Do()
         internal/retry/policy.go
         lexical+calls
```

**The question is not the tool's documented example, and the departure is
deliberate.** The example is `retry a failed request with exponential backoff`;
it was used verbatim for three builds and kept failing for one reason.
*Exponential backoff* is exactly the jargon a viewer who needs this scene does
not have, and the whole sentence reads as a specification rather than as
something a person would say.

What replaces it is still inside the tool's contract, and arguably closer to it.
The documentation describes the argument as *«`intent` — The question, in plain
language»*; the canonical example happens to be a noun phrase, so a real question
honours the stated semantics even where it departs from the sample value.

**It is a demo phrasing and this section is the record of that.** It is not a
recorded tool response, and no frame of the scene claims it is.

It also buys something the example could not: the film now has two agent
questions and they bookend the discovery —
`Where do we retry failed requests?` and then, four scenes later,
`What breaks if I change withRetry()?`

Nothing above is typed into the scene. `src/data/intentCandidates.ts` assembles
every row, and `src/code/payments.ts` owns the two paths.

## The candidates

Three rows, three kinds, and two of them in the same file. **The shared file is
the point rather than an accident:** *these are different kinds of thing in the
same place*, which is what a retrieval that indexes more than function names can
tell you and a symbol search cannot.

| Row | Kind     | Declared in the film's own Go                                | `match`         |
| --- | -------- | ------------------------------------------------------------ | --------------- |
| 1   | `func`   | `retry.go` — `func withRetry(ctx context.Context, ...)`       | `lexical`       |
| 2   | `const`  | `retry.go` — `const maxAttempts = 5`                          | `lexical`       |
| 3   | `method` | `policy.go` — `func (p Policy) Do(ctx context.Context, ...)`   | `lexical+calls` |

All three are in the repository `payments-api`, so it is stated once in the
header rather than three times in the rows — **the tool's own unanimous-or-
nothing hoist**, and `sharedRepository` in `intentCandidates.ts` implements it
rather than assuming it. Add a candidate from another repository and it returns
`null`, and the rows carry the repository themselves.

The rows therefore print a **repository-relative** path, which is the shape
every row of this surface actually has: Kivgraph returns `repository` and
`file_path` as two fields and never joins them. The first build printed the
joined string, which was one string too many and hid the field the header is
allowed to hoist.

**Every one of those declarations is on screen two seconds later.** `retry.go` is
the plane the camera lives inside for scenes 01–03, and `const maxAttempts = 5`
is line 11 of it — the viewer who reads the stack and then reads the source finds
the same three things. `intentCandidates.ts` searches `src/code/payments.ts` for
each declaration at module load and throws if it is missing, so that cannot
quietly stop being true.

### Why the fixture had to grow

The previous build derived all three rows from `graphDemo.ts` nodes, and that
file holds only `function` and `method` — it is a *call* graph, so a constant has
no place in it. A scene whose whole point is that `find_by_intent` surfaces more
than function names could not be built from a fixture that contains only function
names. So the rows now come from both: the two that are symbols in the call graph
are looked up there, the constant is looked up in the source, and all three are
verified against the source.

Nothing was invented to get variety. `maxAttempts` and `Policy` were already in
`src/code/payments.ts` when this scene was written; they were simply never shown.

### Why these three and not others

`internal/retry` is the package, so everything in it is credited for the term
`retry` in its path; `withRetry` also carries it in its own name.
`Client.Charge` and `Client.Refund` live in `paymentService` and have nothing to
match, so they are absent — not filtered out for tidiness, simply not candidates.
`Once()` is a legitimate candidate and was one in the previous build; it is a
second `func` in `policy.go`, and a page of four rows carrying two kinds says
less than a page of three carrying three.

The order is the film's and not the tool's. The real ranking weights how rare
each term is across the corpus and breaks ties on symbol id; nothing here
reproduces it and no frame claims to.

### The names, and the parentheses

The names are the tool's `qualified_name`, which is unparenthesised. The graph
parenthesises its labels per `STORYBOARD.md` typography; this surface is not the
graph, and `maxAttempts` correctly has none.

`withRetry()`'s parentheses are a separate span and leave before the cut: the
source it cuts into writes `func withRetry(ctx ...`, where the bracket belongs to
the code and not to the symbol. They are right here and wrong one frame later.
The nine glyphs that cross the cut are exactly the nine of `world.retry.origin`.

## Visual composition

A **vertical editorial stack**, not a table and not a panel. No borders, no
cards, no fills, no rules, no badges, no columns of aligned values. Each row is a
piece of code metadata floating in the same dark field the rest of the film lives
in.

```text
                ❯  Where do we retry failed requests?

                ■ kivgraph / find_by_intent

                candidates

     FUNC       withRetry()
                payments-api/internal/retry/retry.go
                lexical
```

Four pieces of information per row and four type sizes, so the eye takes them in
an order:

| Element  |  Size | Share | Colour           | Position                 |
| -------- | ----: | ----: | ---------------- | ------------------------ |
| name     | 44 px |  100% | `textPrimary`    | the stack's own column   |
| kind     | 22 px |   50% | `textMuted`      | hanging left gutter      |
| path     | 17 px |   39% | `textFaint`      | under the name           |
| `match`  | 15 px |   34% | `textFaint`      | under the path           |

The kind is at half the name's size rather than the 43 % of the first build.
It is the element that carries the scene's whole idea and it was the one under
its own weight; the gutter also moved 22 px left to keep the gap it hangs in.

**The stack is built outward from the match cut.** `stackLeft` is the left edge
the selected name already has at 44 px when its nine glyphs are centred on
`symbolAnchor`, and the first row's top is the top of that same line box; every
other row aligns to them. So the selected candidate stands on its target from the
first frame it exists, it still only *scales* and never travels, and the measured
seam is unchanged by a redesign of everything around it.

The kind hangs in a gutter to the left of the name column, which is the editorial
convention for a label belonging to a block rather than sitting inside it. It
gives the stack a hard scannable left edge that the ragged names cannot.

Row rhythm: 58 px from a name to its path, 24 more to its match, 112 between
rows. The gap between rows is larger than any gap inside one, which is the only
thing making three rows read as three rows.

### Why there is no type glyph

A leading `ƒ` / `◆` / `T` column was the obvious design and it is not here, for a
measured reason. **The self-hosted mono face carries 229 characters** — Latin-1
and no more. `ƒ` (U+0192), `◆` (U+25C6) and `■` (U+25A0) are all absent, so a
glyph column would render in whatever the browser falls back to: a different
face, at a different width, in the one column whose entire job is to align.

The kind label does the glyph's work instead, and it is one piece of information
where a glyph plus a label would have been two encodings of the same thing.

Two related notes for whoever touches this next. The `❯` on the intent line is
**already** a fallback glyph — it is one character, alone, at the left margin,
and it has never had to line up with anything. And the accent square on the
invocation is a `div`, not a glyph, which is why it is the one mark in the scene
that does not depend on the font at all.

## Motion

Three gestures, deliberately not one.

**Arrival.** Every element is opacity plus a small upward settle on the project's
easing — 8 px for the copy, 10 px for the rows. The stack arrives one row at a
time on a twelve-frame pitch, which is inside the 8–12 the design asked for and
at the top of it because three rows on a shorter pitch read as one block
appearing.

**The commit**, local `0176`–`0200`. The two rows that are not being opened go to
30 % and scale to `0.97` and `0.955` about their own left edge — the 2.5D depth
stated as the only thing a DOM layer can state it as. It is deliberately the
*others* that move back rather than the selected one coming forward: the selected
row is standing on the match cut's anchor at an exact size, and anything that
scaled it would move the seam. An earlier build used `0.985` and `0.975` and the
separation did not read at all against the opacity change.

At the same time the selected row sheds its kind, its path and its `match`, until
only `withRetry()` is left. That is the whole preparation for the cut — *remove
the metadata, keep the token fixed, let the source materialise around it* — and
it is why the transition is not a fade to a new scene.

**The exit**, local `0208`–`0236`, and then the open, `0212`–`0246`. Everything
except the name goes; the name scales.

There is no camera. `AGENTS.md` asks that a move answer a question the viewer is
currently asking, and in a DOM list there is none to answer — the parallax on the
receding rows is the whole of the depth here.

## Transition in

A dissolve out of the cold open, not a cut.

`cold-open.md` recedes its two token figures and its parity line, `35,961` last,
and hands over an empty `#0a0b0d` field at `0119`. This scene's own opening beat
is eight more empty frames, so the join is ten byte-identical frames of nothing —
the same opening silence `08-brand.md` uses — and then the question becomes
visible at `0129`.

**The join is what makes the teaser part of the film rather than an advert in
front of it.** The cold open leaves the viewer a question — *how?* — and the
first thing that arrives in the field it left is a second question, the one the
rest of the film answers.
Nothing restarts, nothing announces a beginning, and the background never
changes. The film's first cut is still the match cut, now at `0370`.

## Transition out

A match cut into `01-symbol.md` frame `0370`, and it is the film's third.

`withRetry` is the same object crossing representations: a row in a ranked answer
becomes the symbol in its own source. Nothing fades and nothing cuts to black.

Measured on the render rather than trusted to arithmetic, which is what the other
two match cuts already do:

```text
ink centroid, candidate `0369`   (609.31, 665.61)
ink centroid, source    `0370`   (609.28, 665.62)
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

- **The stack shows three rows, and the tool's default page is ten.** Three is
  what fits the frame and the reading budget; the film is not claiming the answer
  was three rows long. A real caller sees ten and narrows.
- **The order is the film's, not the tool's.** The rows are ordered so the one
  that gets opened is first, because that row is pinned to the match cut's
  anchor. The real ranking weights term rarity across the corpus and no frame
  reproduces it.
- **`unmatched_terms` is not shown.** The real answer would carry it — over this
  four-file world only `retry` matches, so `where`, `do`, `we`, `failed` and
  `requests` would all be listed — and it is an honest detail that would
  reinforce *candidate, not proof*. There is no room for it without crowding the
  stack, and it is the first thing to add if the scene ever grows.
- **The kinds are Go's, so they read `FUNC` and not `FUNCTION`.** That is
  correct and it is also slightly less legible to a viewer who has never written
  Go. The gutter position and the contrast between the three carry it.
- **The path and `match` tiers are not legible below about 640 px of playback.**
  The names and the kinds are, which is the tier that matters: at small sizes the
  metadata reads as *there is metadata here*, which is the right amount.
- **This scene is 4.17 s of a 35.33 s film.** It was 5.0 s until the opening
  couplet was cut. Trimming scene 01's 39-frame hold to pay for anything else was
  tested and rejected on a measurement: the file caption is 36 characters with
  0.65 s of dwell, which is already 55 characters per second against a 25–40
  budget.
- **Sound absent**, like the rest of the film. `STORYBOARD.md` §17 requires the
  piece to work muted and this scene is no exception.

## Modification history

```text
2026-08-27 (c)
- The opening couplet `You know what the code does. / Not where it lives.` was
  cut. The scene now opens on the question.
- Reason: the stack demonstrates the same idea in evidence, and the cold open
  already hands the viewer a question two seconds earlier, so a second one is
  continuity rather than an abrupt start.
- **300 -> 250 frames, and the fifty were returned to the film rather than
  redistributed inside the scene.** Every window moved by that constant: no
  element lost dwell, the twelve-frame row pitch is unchanged and the candidate
  -> source match cut is untouched. Master 2170 -> 2120 frames, 36.17 s ->
  35.33 s; every scene from 01 onward moved -50.

2026-08-27 (b)
- The repository is hoisted into the page header — `payments-api · 3
  candidates` — and the rows print a repository-relative path, which is the
  shape Kivgraph actually returns. `sharedRepository` implements the tool's
  unanimous-or-nothing hoist instead of assuming it.
- Kind labels 19 px -> 22 px, half the name's size, and the gutter moved 22 px
  left. They carry the scene's idea and were the element under their own weight.
- The recede on the two unopened rows went from `0.985`/`0.975` to
  `0.97`/`0.955`: at the first values the depth did not read against the opacity
  change.
- **Time to useful entry point investigated and deliberately not shown.** The
  published benchmark does not time the baseline arm at all — `ms_total` is
  `0.000` for `native` in all nine result files, 101 calls, none timed — and no
  index build cost is recorded anywhere. See the section above for the direct
  measurements taken and for what a publishable timing benchmark would need.

2026-08-27
- Rebuilt as a result stack. Three rows of heterogeneous Go declarations —
  `FUNC withRetry()`, `CONST maxAttempts`, `METHOD Policy.Do()` — with the kind
  in a hanging gutter, the path and `match` under each name, and a `candidates`
  header over the page.
- Reason: the scene showed three function names, so it could not demonstrate the
  thing `find_by_intent` is actually for — surfacing relevant code context that
  is not only functions. A list of three functions is a list of one kind of
  thing.
- New fixture module `src/data/intentCandidates.ts`. Every row is verified
  against `src/code/payments.ts` at module load and throws if its declaration is
  gone; `lexical` versus `lexical+calls` is derived from `graphDemo.ts`'s edges
  rather than typed.
- No comment row, and there never can be one: `find_by_intent` indexes names,
  qualified names, kinds and paths, not prose.
- `Once()` left the page; `maxAttempts` took its place. Four rows of two kinds
  said less than three rows of three.
- The subtitle `Tells your agent where to read` was removed — the stack now does
  that job with evidence instead of a sentence.
- The invocation became `kivgraph / find_by_intent`, in `02-agent.md`'s existing
  tool-invocation treatment, so the film's two invocations read as one product.
- Beats 4 and 5 exist for the first time: 52 frames of the complete stack
  standing still, then a commit where the other two rows recede to 30 % and the
  selected row sheds its metadata.
- No glyph column. The self-hosted mono face carries 229 characters and has
  neither `ƒ` nor `◆`; a fallback face in the one column whose job is to align
  is worse than no column.
- **Length unchanged at 300 frames, so no other scene moved.** The top half
  lands 30 frames earlier and those frames went to the hold and the commit.
- The match cut is untouched and re-measured: `45.01 dB` whole-frame across
  `0369`/`0370`, ink centroid offset `dx 0.03 px`, `dy 0.01 px`. The stack is
  laid out outward from the anchor, which is why a redesign of everything around
  it moved the seam by nothing.

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
- The presentation of the intent line was wrong twice before it was right. With
  `❯` it read as a question that was not one; with nothing it read as a floating
  claim, which was worse, because the glyph had at least said *you typed this*.
  It is quoted now, under `So you describe it:`. The phrase itself is untouched -
  it is the documented example and the reason the film is demonstrable against
  the product; what was wrong was the presentation, not the words.
- Subtitle: `Tells your agent where to read`. It names who benefits, which is the
  film's subject, and it says *where to read* - a discovery claim, never a claim
  about what depends on what.
- 220 -> 300 frames, on direct art direction to be realistic about reading time.
  Every window now lives in one `beat` object so the table above and the code
  cannot drift. Every block a viewer must read to completion sits between 6 and
  29 characters per second; the only row above budget is the name, path and match
  at 72, which is correct because a path is scanned, and because that name does
  not stop at 0252 - it survives the cut and anchors the whole next scene.
- Match cut re-measured at its new boundary 0299/0300: dx +0.03, dy -0.01, ink
  mass ratio 1.0005, zero residue outside the token, 45.0 dB across the seam.
- Master 1970 -> 2050 frames, 34.17 s.
- Two defects in the handover, both found by looking at a frame rather than at a
  number. The receding candidates were floored at 0.182 instead of reaching zero,
  so they read through `withRetry` as ghost type and the cut handed over three
  names; and the alignment was verified with a bounding box, which rounds, so a
  sub-pixel offset survived it. Re-measured with the ink centroid: dx +0.03,
  dy -0.01, mass ratio 1.0005, and the seam went 34.5 -> 45.0 dB whole-frame.
- The code field now arrives rather than appearing. That half of the fix lives in
  01-symbol.md.
```
