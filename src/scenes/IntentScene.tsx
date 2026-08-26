import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { symbolAnchor, symbolOpeningZoom } from "./SymbolScene";
import { world } from "../components/CodeWorld";
import { nodeById } from "../data/graphDemo";
import { fontMono } from "../brand/fonts";
import { brand } from "../brand/tokens";

/**
 * Scene 00 - intent (master 0000-0180, scene-local 0000-0180).
 *
 * The scene that stops the film assuming its own answer.
 *
 * Everything after this opens on `withRetry` already singled out, which quietly
 * claims that the agent knew what the symbol was called. It usually does not. A
 * real session starts from a behaviour - *where do we retry failed requests* -
 * and the name, the file, the package and the repository are all things it has
 * to find. `find_by_intent` is the tool for that step, and without it the film
 * says Kivgraph is useful once you already know where to look.
 *
 * ## The distinction this scene must not blur
 *
 * `find_by_intent` matches **text**, not edges. Its own documentation is blunt
 * about it, and the wording matters enough to keep here:
 *
 * > `match` is `lexical` when the candidate matched text alone, and
 * > `lexical+calls` when it was also credited for the terms its callees carry.
 * > Neither is an edge this tool resolved. A row here is a *candidate*, in the
 * > sense this project uses that word everywhere else: plausible and not proven.
 *
 * So the scene shows `match` on every row, because every row of the real answer
 * carries it and it is the field that says *this is text that looked alike*.
 * And it shows **no score**, because the tool deliberately publishes none:
 *
 * > No score travels: it orders candidates inside one answer and means nothing
 * > on its own [...] publishing it would invite a reader to treat it as a
 * > confidence this layer cannot claim.
 *
 * No bars, no percentages, no stars, no green and amber. `match` is metadata
 * about *why a row appeared*, never about how much to believe it.
 *
 * `Policy.Do` and `Once` are not wrong and are never marked wrong. They recede
 * in hierarchy while `withRetry` becomes the one being inspected, which is what
 * actually happens: you pick an entry point and go and look at it.
 */

const ease = Easing.bezier(0.22, 1, 0.36, 1);

const ramp = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

const entry = (frame: number, from: number, to: number) => {
  const progress = ramp(frame, from, to);

  return { opacity: progress, offsetY: 8 * (1 - progress) };
};

/**
 * The question, verbatim from the tool's own documented example.
 *
 * Not a variant written for the film. The documented example is
 * `retry a failed request with exponential backoff`, its top result is
 * `withRetry`, and it is therefore the one intent that makes this video
 * demonstrable against the product rather than merely plausible.
 */
export const intent = "retry a failed request with exponential backoff";

/**
 * The candidates, derived from the graph fixture rather than typed.
 *
 * `graphDemo.ts` carries a rule this scene is squarely inside: *«a video selling
 * exactness cannot illustrate it with a fabricated fixture»*, written after an
 * earlier scene showed seven invented contexts. So the rows name symbols that
 * exist in the dataset the rest of the film is built on, and their repository
 * and package are read off the same nodes the graph will later draw.
 *
 * Three, and only these three, because only these three have a term to match.
 * `internal/retry` is the package, so its three symbols are credited for the
 * path; `withRetry` alone also carries the term in its own name and is credited
 * for what its callees carry, which is exactly the difference between `lexical`
 * and `lexical+calls`. `Client.Charge` and `Client.Refund` live in
 * `paymentService` and have nothing to match, so they are absent - not filtered
 * out for tidiness, simply not candidates.
 *
 * The names are the tool's `qualified_name`, which is unparenthesised. The graph
 * parenthesises its labels per `STORYBOARD.md` typography; this surface is not
 * the graph, and the unparenthesised form is also what makes the match cut exact
 * - the nine glyphs of `withRetry` are the nine glyphs of `world.retry.origin`.
 */
const candidates = [
  { id: "payments.withRetry", match: "lexical+calls" },
  { id: "payments.policyDo", match: "lexical" },
  { id: "payments.once", match: "lexical" },
].map(({ id, match }) => {
  const node = nodeById(id);

  return {
    id,
    match,
    name: node.label.replace("()", ""),
    where: `${node.repository} · ${node.package}`,
  };
});

/** The one the agent goes and looks at. Its row becomes the source symbol. */
const winner = 0;

/**
 * The column, and it is the prompt's column.
 *
 * `500` is `promptLayout.row.x`, which scene 02 uses for the question and scene
 * 06 for the answer. Sharing it is the cheapest kind of continuity: three
 * different surfaces across thirty seconds, one left edge.
 */
const column = {
  x: 500,
  intentY: 300,
  intentSize: 30,
  toolY: 382,
  toolSize: 20,
  firstY: 486,
  pitch: 104,
  nameSize: 28,
  metaSize: 17,
} as const;

/**
 * Where the winning candidate has to end up, derived from `SymbolScene`.
 *
 * Not written down: `symbolAnchor` is the point the source symbol is pinned to
 * at every zoom, `symbolOpeningZoom` is the zoom frame 0 opens on, and
 * `world.retry` owns the type scale and the fact that the token is nine
 * characters. If any of those move, this follows.
 */
const target = {
  em: world.retry.fontSize * symbolOpeningZoom,
  glyphs: world.retry.origin.width,
};

/**
 * The vertical correction between a `lineHeight: 1` DOM box and the glyphs the
 * code plane draws.
 *
 * Measured against the render rather than derived from font metrics, which is
 * what `AGENTS.md` asks for and what the other match cut already does: a number
 * arrived at by arithmetic is a number nobody has looked at.
 *
 * The arithmetic alone landed the candidate's ink at `x 382..855, y 623..708`
 * against the source's `x 382..855, y 626..710` - horizontally exact to the
 * pixel, three pixels high. `2.5` is that error, and it is here rather than
 * folded into `symbolAnchor` because it belongs to the difference between a DOM
 * line box and the code plane's baseline, not to the anchor.
 */
const targetTopBias = 2.5;

export const IntentScene: React.FC = () => {
  const frame = useCurrentFrame();

  const intentIn = entry(frame, 10, 70);
  const toolIn = entry(frame, 70, 92);

  /**
   * The narrowing.
   *
   * Two gestures, deliberately not one. First the field quiets - the question,
   * the invocation and the two other candidates lose luminance over `0126-0156`
   * - and only then, from `0148`, does `withRetry` travel and grow. Doing both
   * at once was the first build and it did not work: the winner was already
   * scaling while the rows were still arriving, so it collided with `Policy.Do`
   * and the frame read as a layout fault rather than as a choice.
   *
   * Separating them also buys the beat the scene is actually about. There is a
   * moment where three plausible candidates stand together, and then a moment
   * where one of them is the one being opened - which is what picking an entry
   * point is.
   *
   * Nothing is struck through and nothing is marked wrong. `find_by_intent` is
   * not certifying true and false, it is ordering plausible things, and the shot
   * has to say *this is the one we are going to look at* rather than *these were
   * the mistakes*. `Policy.Do` and `Once` are still perfectly good candidates
   * when they leave the frame; they simply are not the one being inspected.
   */
  const narrow = ramp(frame, 148, 172);

  /** Everything that is not the winner leaves the frame to it. */
  const context = 1 - ramp(frame, 126, 156);

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      {/**
       * The intent, in the prompt's own voice. `❯` is the glyph scene 02 uses,
       * so the question the agent asks here and the question it asks there are
       * visibly the same act.
       */}
      <div
        style={{
          position: "absolute",
          left: column.x,
          top: column.intentY,
          fontFamily: fontMono,
          fontSize: column.intentSize,
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
       * The invocation, in the same treatment scene 02 gives
       * `kivgraph / get_blast_radius`: an accent square, the server, a slash,
       * the tool. Agent tooling metadata, at the size metadata gets. Reusing the
       * form rather than inventing one is the point - the viewer has to read the
       * two as the same kind of event.
       */}
      <div
        style={{
          position: "absolute",
          left: column.x,
          top: column.toolY,
          fontFamily: fontMono,
          fontSize: column.toolSize,
          lineHeight: 1,
          letterSpacing: "0.02em",
          whiteSpace: "pre",
          color: brand.textMuted,
          opacity: toolIn.opacity * context,
          translate: `0px ${toolIn.offsetY}px`,
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 8,
            height: 8,
            marginRight: 14,
            marginBottom: 2,
            backgroundColor: brand.accent,
          }}
        />
        kivgraph <span style={{ color: brand.textFaint }}>/</span>{" "}
        find_by_intent
      </div>

      {candidates.map((candidate, index) => {
        const isWinner = index === winner;
        const arrive = entry(frame, 92 + index * 9, 116 + index * 9);
        const rowY = column.firstY + index * column.pitch;

        /**
         * The winner's name is the only element that leaves its row. It travels
         * to `symbolAnchor` and grows to the source's em; the others stay
         * exactly where they are and only lose light.
         */
        const size = isWinner
          ? column.nameSize + (target.em - column.nameSize) * narrow
          : column.nameSize;
        const width = target.glyphs * 0.6 * size;
        const startCx =
          column.x + (candidate.name.length * 0.6 * column.nameSize) / 2;
        const startCy = rowY + column.nameSize / 2;
        const cx = isWinner
          ? startCx + (symbolAnchor.x - startCx) * narrow
          : startCx;
        const cy = isWinner
          ? startCy + (symbolAnchor.y - startCy) * narrow
          : startCy;

        return (
          <React.Fragment key={candidate.id}>
            <div
              style={{
                position: "absolute",
                left: cx - width / 2,
                top: cy - size / 2 + targetTopBias * narrow,
                width,
                textAlign: "center",
                fontFamily: fontMono,
                fontSize: size,
                lineHeight: 1,
                whiteSpace: "pre",
                color: isWinner ? brand.textPrimary : brand.textSecondary,
                opacity:
                  arrive.opacity *
                  (isWinner ? 1 : 1 - 0.72 * narrow) *
                  (isWinner ? 1 : context * 0.35 + 0.65),
                translate: `0px ${isWinner ? 0 : arrive.offsetY}px`,
              }}
            >
              {candidate.name}
            </div>

            {/**
             * Repository, package, and `match`. One line, `textFaint`, at the
             * label scale - the same register the attribution and the source
             * note use. `match` sits at the end of it because that is what it
             * is: a note on why the row is here, not a verdict on it.
             */}
            <div
              style={{
                position: "absolute",
                left: column.x,
                top: rowY + 40,
                fontFamily: fontMono,
                fontSize: column.metaSize,
                lineHeight: 1,
                letterSpacing: "0.02em",
                whiteSpace: "pre",
                color: brand.textFaint,
                opacity:
                  arrive.opacity * context * (isWinner ? 1 : 1 - 0.5 * narrow),
                translate: `0px ${arrive.offsetY}px`,
              }}
            >
              {candidate.where}
              <span style={{ color: brand.border }}>{"   ·   "}</span>
              {candidate.match}
            </div>
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};
