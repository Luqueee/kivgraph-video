import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { symbolAnchor, symbolOpeningZoom } from "./SymbolScene";
import { world } from "../components/CodeWorld";
import {
  candidates,
  intent,
  selectedCandidate,
  sharedRepository,
} from "../data/intentCandidates";
import { fontMono, fontSans } from "../brand/fonts";
import { brand } from "../brand/tokens";

/**
 * Scene 00 - intent (master 0120-0420, scene-local 0000-0300).
 *
 * The scene that stops the film assuming its own answer. Everything after it
 * opens on `withRetry` already singled out, which quietly claims the agent knew
 * what the symbol was called. It usually does not.
 *
 * ## The visual metaphor: a short stack of heterogeneous candidates
 *
 * The scene is a **result stack** — three rows, three different kinds of Go
 * declaration, in the field the rest of the film lives in. Not a table, not a
 * card, not a search panel: a vertical editorial list where each row is a piece
 * of code metadata floating in the frame.
 *
 * The whole argument is in the second column of that stack:
 *
 * ```text
 *   FUNC     withRetry()
 *   CONST    maxAttempts
 *   METHOD   Policy.Do()
 * ```
 *
 * A viewer who reads nothing else has already learned the thing the scene
 * exists to teach — *describe the behaviour, get places to start reading, and
 * they are not all functions*. The previous build showed three function names
 * and could not make that point at all, because a list of three functions is a
 * list of one kind of thing.
 *
 * ## One idea, five beats
 *
 * `describe what I need` -> `Kivgraph answers` -> `the answers are different
 * kinds of code` -> `I pick an entry point` -> `we enter its source`.
 *
 * The first build did the opposite. It showed three candidates of equal weight,
 * each with a repository, a package and a `match` value, and asked the viewer to
 * infer the tool's purpose from a ranking they had to parse first. Technically
 * accurate and unreadable at a glance.
 *
 * ## The distinction this scene must not blur
 *
 * `find_by_intent` matches text, not edges, and its own documentation is blunt:
 *
 * > `match` is `lexical` when the candidate matched text alone, and
 * > `lexical+calls` when it was also credited for the terms its callees carry.
 * > Neither is an edge this tool resolved. A row here is a *candidate* [...]:
 * > plausible and not proven.
 *
 * So the stack is headed `candidates`, in the tool's own compact-view idiom of
 * hoisting into a header what every row shares, and every row carries its
 * `match`. There is still **no score**, because the tool publishes none:
 *
 * > No score travels [...] publishing it would invite a reader to treat it as a
 * > confidence this layer cannot claim.
 *
 * The selected row is the one with the *plainer* provenance — `lexical` against
 * `Policy.Do()`'s `lexical+calls` — and that is derived from the fixture rather
 * than arranged. It is the clearest available demonstration that `match` is not
 * a ranking: the row the film opens is not the row with the richer match.
 *
 * ## Where the type comes from
 *
 * Nothing here is typed. `src/data/intentCandidates.ts` derives every row from
 * `src/code/payments.ts` — the Go the camera flies into two seconds later — and
 * from `graphDemo.ts`'s edges, and throws if a candidate stops being declared in
 * the source the film renders.
 *
 * ## Glyphs, and why there is no glyph column
 *
 * A leading type glyph per row was the obvious design and it is not here, for a
 * measured reason: the self-hosted mono face carries **229 characters**, Latin-1
 * and no more. `ƒ`, `◆`, `■` and `T`-in-a-box are all absent from it, so a glyph
 * column would render in whatever the browser falls back to — a different face,
 * at a different width, in the one column whose whole job is to align. (The
 * `❯` on the intent line is already such a fallback. It is one character, on its
 * own, at the left margin, and it has never had to line up with anything.)
 *
 * The kind label does the glyph's job instead: a hanging left gutter, uppercase
 * and tracked, in the film's metadata register. It is one piece of information
 * where a glyph plus a label would have been two encodings of the same thing.
 *
 * See `docs/scenes/00-intent.md` for intent, beats and invariants.
 */

/**
 * Every window in the scene, in scene-local frames, in one place.
 *
 * The scene is 300 frames and did not change length when it was rebuilt as a
 * stack, which is the reason nothing else in the film moved. What changed is
 * where the frames go: the top half lands 30 frames earlier than it used to, so
 * a stack of three rows can finish arriving and then stand still.
 */
const beat = {
  problem: [6, 42],
  problemPitch: 10,
  intent: [58, 96],
  tool: [104, 128],
  rows: [130, 150],
  rowPitch: 12,
  focus: [226, 250],
  parens: [250, 274],
  leave: [258, 286],
  open: [262, 296],
} as const;

/**
 * Why the back half is spaced the way it is.
 *
 * The stack completes at `0174` and the scene has 126 frames left to hold it,
 * commit to one row, strip that row and open it. The first build overlapped the
 * commit and the exit by ten frames and the recede never read: the other two
 * rows went from full to 30 % and straight on to nothing, so the frame that says
 * *inspect this one, the others are still fine* existed for about three frames.
 *
 * Now `focus` closes at `0250` and `leave` does not start until `0258`, so there
 * is a short beat where the selected candidate stands at full strength with the
 * other two at exactly 30 % beside it. That beat is the whole of the scene's
 * fifth idea and it is cheap: eight frames, taken from a hold that had 60.
 */

const ease = Easing.bezier(0.22, 1, 0.36, 1);

const ramp = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

const entry = (frame: number, from: number, to: number, lift = 8) => {
  const progress = ramp(frame, from, to);

  return { opacity: progress, offsetY: lift * (1 - progress) };
};

/** Beat 1. The problem, addressed to the viewer, so it is sans. */
const problem = [
  "You know what the code does.",
  "Not where it lives.",
] as const;

/** Beat 2. The tool, in the invocation language `AgentPrompt` already uses. */
const tool = "find_by_intent";

/** The size the selected name arrives at, before it becomes the source symbol. */
const nameSize = 44;

/**
 * Where the selected candidate's name has to end up, derived from
 * `SymbolScene`: `world.retry` owns the type scale and the fact that the token
 * is nine characters, `symbolAnchor` is the point the source symbol is pinned to
 * and `symbolOpeningZoom` is the zoom frame 0 opens on.
 */
const target = {
  em: world.retry.fontSize * symbolOpeningZoom,
  glyphs: world.retry.origin.width,
};

/**
 * Sub-pixel corrections between a DOM line box and the code plane's baseline,
 * measured with the ink centroid rather than with a bounding box.
 *
 * A bounding box rounds, so two glyphs a pixel apart can share one: it agreed to
 * the pixel while the seam still measured 234 levels of difference. The centroid
 * is sub-pixel and found the real error. With both applied the offset is
 * `dx +0.03, dy -0.01` and the ink mass ratio is `1.0005`, which is the proof
 * that the size and weight were always right and only the placement was not.
 *
 * **These survived the rebuild untouched, and so did the frame they describe.**
 * The stack is laid out *around* the anchor rather than the anchor being placed
 * to suit the stack — see `stackLeft` and `row.top`.
 */
const targetTopBias = 1.51;
const targetLeftBias = -0.2;

/** The column the whole film shares: `promptLayout.row.x`. */
const columnX = 500;

/**
 * The composition, in master pixels.
 *
 * **The stack is built outward from the match cut, not the other way round.**
 * `stackLeft` is the left edge the selected name already has at 44 px when its
 * nine glyphs are centred on `symbolAnchor`, and `row.top` is the top of that
 * same line box. Every other row aligns to them. So the selected candidate is
 * standing on its target from the first frame it exists, it still only *scales*
 * and never travels, and the measured seam is unchanged by a redesign of
 * everything around it.
 *
 * `stackLeft` resolves to `501.2`, one pixel off the `500` the intent and the
 * tool line sit on. That is not a coincidence worth removing: the stack reads as
 * hanging from the same column as the text above it, and the one-pixel
 * difference is the price of the anchor being exact instead of the column being
 * tidy.
 *
 * The kind gutter hangs to the *left* of that column, which is the editorial
 * convention for a label that belongs to a block rather than sitting inside it,
 * and it gives the stack a hard scannable edge that the ragged symbol names
 * cannot.
 *
 * Row rhythm: 58 px from a symbol to its path, 24 more to its match, 112 between
 * rows. The gap between rows is therefore larger than any gap inside one, which
 * is the only thing making three rows read as three rows. The first draft had
 * the path 6 px higher and it sat inside the name's descenders.
 */
const stackLeft = symbolAnchor.x - (target.glyphs * 0.6 * nameSize) / 2;

const layout = {
  problem: { top: 250, fontSize: 34, pitch: 48 },
  intent: { top: 408, fontSize: 30 },
  tool: { top: 478, fontSize: 20 },
  header: { top: 598, fontSize: 16 },
  row: {
    top: symbolAnchor.y - nameSize / 2,
    pitch: 112,
    kindLeft: 358,
    kindTop: 15,
    pathTop: 58,
    matchTop: 82,
    kindSize: 22,
    pathSize: 17,
    matchSize: 15,
  },
} as const;

/**
 * How far a candidate that is not being opened recedes.
 *
 * `0.30`, which is the bottom of the brief's 25-35 % band, and a scale of
 * `0.97` and `0.955` for the two of them - the 2.5D depth stated as the only
 * thing a DOM layer can state it as. The first build used `0.985` and `0.975`
 * and the separation did not read at all against the opacity change; this is
 * still under a twentieth and it is visible. It is deliberately the *others* that move
 * back rather than the selected one coming forward: the selected row is
 * standing on the match cut's anchor at an exact size, and anything that scaled
 * it would move the seam.
 *
 * They are never marked wrong. No cross, no strike-through, no red. Receding is
 * what picking an entry point looks like; being a mistake is not.
 */
const recede = { opacity: 0.3, scale: [1, 0.97, 0.955] } as const;

type RowProps = {
  candidate: (typeof candidates)[number];
  index: number;
  /** 0 -> 1 arrival of this row. */
  arrive: { opacity: number; offsetY: number };
  /** 0 -> 1 as the scene commits to the selected candidate. */
  focus: number;
  /** 0 -> 1 presence of everything that is not the selected symbol. */
  context: number;
  /** The selected row draws its symbol elsewhere, anchored. */
  selected: boolean;
};

/**
 * One candidate: a kind in the gutter, a name, a path, a provenance.
 *
 * Four pieces of information and four type sizes, in one hierarchy the eye can
 * take in an order: the name at 44 px is read first, the kind at 19 tells you
 * what sort of thing it is, and the path and match at 17 and 15 are scanned
 * rather than read. Nothing is boxed, ruled, filled or badged.
 */
const CandidateRow: React.FC<RowProps> = ({
  candidate,
  index,
  arrive,
  focus,
  context,
  selected,
}) => {
  const top = layout.row.top + index * layout.row.pitch;
  const dim = selected ? 1 : 1 - (1 - recede.opacity) * focus;
  const scale = selected ? 1 : 1 + (recede.scale[index] - 1) * focus;
  /** The selected row keeps its name and loses its metadata; the others keep both. */
  const meta = selected ? 1 - focus : 1;

  const common = {
    position: "absolute",
    fontFamily: fontMono,
    lineHeight: 1,
    whiteSpace: "pre",
    translate: `0px ${arrive.offsetY}px`,
  } as const;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: arrive.opacity * dim * context,
        scale: `${scale}`,
        transformOrigin: `${stackLeft}px ${top}px`,
        willChange: "transform",
      }}
    >
      {/**
       * The kind, hanging in the left gutter. Uppercase and tracked, at the
       * label scale, in `textMuted` - the same treatment every other piece of
       * metadata in the film gets. It is the closest thing the row has to a
       * glyph and it is deliberately not inside a pill: `STORYBOARD.md` §6 keeps
       * the frame 85-90 % neutral, and a filled badge per kind is the rainbow
       * palette the brief rules out, one container at a time.
       */}
      <div
        style={{
          ...common,
          left: layout.row.kindLeft,
          top: top + layout.row.kindTop,
          fontSize: layout.row.kindSize,
          letterSpacing: "0.14em",
          color: brand.textMuted,
          opacity: meta,
        }}
      >
        {candidate.kind.toUpperCase()}
      </div>

      {!selected && (
        <div
          style={{
            ...common,
            left: stackLeft,
            top,
            fontSize: nameSize,
            color: brand.textPrimary,
          }}
        >
          {candidate.label}
        </div>
      )}

      <div
        style={{
          ...common,
          left: stackLeft,
          top: top + layout.row.pathTop,
          fontSize: layout.row.pathSize,
          color: brand.textFaint,
          opacity: meta,
        }}
      >
        {candidate.path}
      </div>

      {/**
       * `match`, and the row's last line because it is the row's smallest claim.
       * It is metadata about **why this row appeared**, never about how much to
       * believe it, so it is set at the smallest size in the scene, in
       * `textFaint`, where it can never read as a verdict.
       */}
      <div
        style={{
          ...common,
          left: stackLeft,
          top: top + layout.row.matchTop,
          fontSize: layout.row.matchSize,
          letterSpacing: "0.02em",
          color: brand.textFaint,
          opacity: meta,
        }}
      >
        {candidate.match}
      </div>
    </div>
  );
};

export const IntentScene: React.FC = () => {
  const frame = useCurrentFrame();

  const intentIn = entry(frame, beat.intent[0], beat.intent[1]);
  const toolIn = entry(frame, beat.tool[0], beat.tool[1]);
  const headerIn = entry(frame, beat.rows[0] - 10, beat.rows[1] - 10);
  const focus = ramp(frame, beat.focus[0], beat.focus[1]);
  /** The anchored name arrives on its own row's window, and with its lift. */
  const selectedIn = entry(frame, beat.rows[0], beat.rows[1], 10);

  /**
   * Everything that is not the selected name leaves, so the frame handed to the
   * match cut holds the symbol and nothing else.
   *
   * The first build floored the other candidates at `0.182` to say *receded, not
   * deleted*, and it was wrong twice: the name grows over where they sit, so
   * they read through it as ghost type, and a cut into a frame with three names
   * in it is a cut into a different image. Receding is what they do while they
   * are on screen; being absent at the cut is not a verdict on them.
   */
  const context = 1 - ramp(frame, beat.leave[0], beat.leave[1]);

  /**
   * The name becoming the source symbol.
   *
   * It only **scales**. Placing it so that the nine glyphs of `withRetry` are
   * already centred on `symbolAnchor` at 44 px means the cut is a pure zoom into
   * the candidate rather than a slide plus a zoom - which is also the clearest
   * possible reading of *we enter that source code*.
   */
  const open = ramp(frame, beat.open[0], beat.open[1]);
  const size = nameSize + (target.em - nameSize) * open;
  const width = target.glyphs * 0.6 * size;
  const selected = candidates[selectedCandidate];

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      {/** Beat 1 - the problem. */}
      {problem.map((line, index) => {
        const arrive = entry(
          frame,
          beat.problem[0] + index * beat.problemPitch,
          beat.problem[1] + index * beat.problemPitch,
        );

        return (
          <div
            key={line}
            style={{
              position: "absolute",
              left: columnX,
              top: layout.problem.top + index * layout.problem.pitch,
              fontFamily: fontSans,
              fontSize: layout.problem.fontSize,
              lineHeight: 1,
              whiteSpace: "pre",
              color: index === 0 ? brand.textMuted : brand.textPrimary,
              opacity: arrive.opacity * context,
              translate: `0px ${arrive.offsetY}px`,
            }}
          >
            {line}
          </div>
        );
      })}

      {/**
       * Beat 1 - the question.
       *
       * The `❯` earns its place now that the copy is a question. It did not when
       * the intent was the tool's documented noun phrase, and this comment used
       * to argue against the glyph for exactly that reason - a prompt glyph
       * promises something typed at a shell, and a noun phrase is not. A
       * question is. No search box, no field, no terminal card: the glyph is the
       * whole affordance.
       */}
      <div
        style={{
          position: "absolute",
          left: columnX,
          top: layout.intent.top,
          fontFamily: fontMono,
          fontSize: layout.intent.fontSize,
          lineHeight: 1,
          whiteSpace: "pre",
          color: brand.textSecondary,
          opacity: intentIn.opacity * context,
          translate: `0px ${intentIn.offsetY}px`,
        }}
      >
        <span style={{ color: brand.textFaint }}>{"❯  "}</span>
        {intent}
      </div>

      {/**
       * Beat 2 - the invocation, in the film's existing tool language.
       *
       * `AgentPrompt` draws `kivgraph / get_blast_radius` four scenes later with
       * a 7 px accent square, `kivgraph` in `textSecondary`, the slash in
       * `textFaint` and the tool name in `textMuted`. This is that line, with a
       * different tool in it. Two invocations of the same product that looked
       * different would be two products.
       *
       * The square is a `div` and not a glyph, which is why it is the one mark
       * in this scene that does not depend on the font's coverage.
       *
       * It is accent, and that is one of the three things §6 lets accent mean:
       * the active tool invocation. Nothing else in this scene is coloured.
       */}
      <div
        style={{
          position: "absolute",
          left: columnX,
          top: layout.tool.top,
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontFamily: fontMono,
          fontSize: layout.tool.fontSize,
          lineHeight: 1,
          letterSpacing: "0.02em",
          whiteSpace: "pre",
          opacity: toolIn.opacity * context,
          translate: `0px ${toolIn.offsetY}px`,
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 7,
            height: 7,
            backgroundColor: brand.accent,
          }}
        />
        <span style={{ color: brand.textSecondary }}>kivgraph</span>
        <span style={{ color: brand.textFaint }}>{" / "}</span>
        <span style={{ color: brand.textMuted }}>{tool}</span>
      </div>

      {/**
       * Beat 3 - the page header, over the stack it heads.
       *
       * This is the tool's compact view, implemented rather than imitated:
       * *«lifts into a header what every row shares»*. The repository is shared
       * by all three candidates, so it is stated once instead of three times,
       * and `sharedRepository` returns `null` the moment that stops being true —
       * at which point the rows carry it themselves and nothing here has to be
       * redesigned.
       *
       * `candidates` is the most important word in the scene. It is the
       * project's term for *plausible and not proven*, and it is the reason the
       * stack needs no other caption. Lowercase, where the kinds below it are
       * uppercase, and on the name column rather than in the gutter: both so it
       * cannot be read as a fourth kind.
       *
       * It sat on the invocation line for one build, right-aligned on the
       * question's right edge, and it collided with `find_by_intent` — 315 px of
       * header against a 320 px gap. The line over the stack was always the
       * better place; it costs no vertical space, because the rows start on an
       * anchor and the gap above them exists either way.
       *
       * **This is also the slot a timing figure would take**, at the right end
       * of this line, if the benchmark ever measured one comparably. It does not
       * today — see `docs/scenes/00-intent.md` → *Time to useful entry point* —
       * and nothing here may state a duration until it does.
       */}
      <div
        style={{
          position: "absolute",
          left: stackLeft,
          top: layout.header.top,
          fontFamily: fontMono,
          fontSize: layout.header.fontSize,
          lineHeight: 1,
          letterSpacing: "0.1em",
          whiteSpace: "pre",
          color: brand.textFaint,
          opacity: headerIn.opacity * context,
          translate: `0px ${headerIn.offsetY}px`,
        }}
      >
        {sharedRepository === null
          ? `${candidates.length} candidates`
          : `${sharedRepository}  ·  ${candidates.length} candidates`}
      </div>

      {/** Beat 3 - the stack, one row at a time on a twelve-frame pitch. */}
      {candidates.map((row, index) => (
        <CandidateRow
          key={row.label}
          candidate={row}
          index={index}
          arrive={entry(
            frame,
            beat.rows[0] + index * beat.rowPitch,
            beat.rows[1] + index * beat.rowPitch,
            10,
          )}
          focus={focus}
          context={context}
          selected={index === selectedCandidate}
        />
      ))}

      {/**
       * Beat 5 - the selected candidate's name, anchored.
       *
       * Drawn outside its own row because it is the only element in the scene
       * that survives the cut, and because its position is a measured contract
       * rather than a layout: nine glyphs centred on `symbolAnchor`, growing to
       * the source symbol's em without moving.
       *
       * The parentheses are a separate span and leave before the cut. The tool
       * returns an unparenthesised `qualified_name`; the film parenthesises a
       * symbol per `STORYBOARD.md` typography, and the source it cuts into
       * writes `func withRetry(ctx ...`, where the bracket belongs to the code
       * and not to the symbol. So they are right here and wrong one frame later,
       * and the nine glyphs that cross the cut are exactly the nine of
       * `world.retry.origin`.
       */}
      <div
        style={{
          position: "absolute",
          left: symbolAnchor.x - width / 2 + targetLeftBias * open,
          top: symbolAnchor.y - size / 2 + targetTopBias * open,
          fontFamily: fontMono,
          fontSize: size,
          lineHeight: 1,
          whiteSpace: "pre",
          color: brand.textPrimary,
          opacity: selectedIn.opacity,
          translate: `0px ${selectedIn.offsetY}px`,
        }}
      >
        {selected.label.replace("()", "")}
        <span
          style={{ opacity: 1 - ramp(frame, beat.parens[0], beat.parens[1]) }}
        >
          ()
        </span>
      </div>
    </AbsoluteFill>
  );
};
