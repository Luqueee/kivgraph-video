import React from "react";
import { Img, staticFile } from "remotion";
import { fontMono, fontSans } from "../brand/fonts";
import { brand } from "../brand/tokens";

/**
 * The Kivgraph lockup — the mark, the wordmark, and the one tagline that sits
 * under them.
 *
 * ## Why this is a component and not a block inside scene 08
 *
 * Because two scenes draw it and neither of them is allowed to draw it
 * differently. Scene 08 resolves the convergence into it; scene 09 inherits it
 * across `1450` unchanged and composes its integrations, URL and hold beneath.
 * There is no cut and no fade at that boundary — the lockup simply does not
 * move — so a one-pixel disagreement between the two scenes would not read as a
 * design variation, it would read as a rendering fault in the last two seconds
 * of the film. One definition makes that impossible.
 *
 * Same reason `Attribution` is shared by scenes 06 and 07, and `ImpactReport`
 * by 04 and 05.
 *
 * ## Kivgraph has two real marks, and this is the other one
 *
 * `docs/scenes/08-brand.md` describes the lockup as an 8 x 8 px `accent` square
 * plus the wordmark, and that description is correct — of the *web header*.
 * `kivgraph/landing/src/components/landing/TopBar.astro` renders exactly that:
 * `<span class="h-2 w-2 bg-graph-repository">` beside `kivgraph`.
 *
 * The mark used here is the other one: the raster app icon that is also the
 * favicon and the icon the MCP client shows. It was chosen deliberately over
 * the square, and the consequences are real and are recorded in
 * `08-brand.md` `## Current compromises` rather than hidden:
 *
 * - the mark no longer carries `accent` `#2563eb`, so from `1430` to the end of
 *   the film there is no brand blue on screen at all. `09-outro.md` says the
 *   lockup's mark is the only accent in its frame; that is now false and the
 *   document says so;
 * - the mark introduces two colours that are in no token — an off-white
 *   `#e9e2dc` and a teal `#56818a` — so this is the one surface in the film
 *   that does not come out of `src/brand/tokens.ts`. A logo is allowed to be
 *   its own colour; nothing else in the frame may borrow them;
 * - the scene's original argument — that the node the relationships converge on
 *   *is* the mark, because the film's node vocabulary and the brand square are
 *   the same shape — no longer holds. What the scene falls back to is what
 *   `STORYBOARD.md` SCENE 10 actually says: *«La animación simplemente sirve
 *   como transición»*, and, immediately before it, *«No hacer literalmente un
 *   grafo como logo si no corresponde con el logotipo actual»*. Converging on
 *   the real logotype obeys that sentence more literally than converging on a
 *   square did.
 *
 * ## The asset is derived, and the two files must not drift
 *
 * `public/brand/kivgraph-mark.png` is **not** a file from the Kivgraph
 * repository. The shipped mark is a raster on an opaque background — see
 * `kivgraph/landing/AGENTS.md`, *«No hay marca vectorial: la fuente es un
 * ráster»* — and that background is `#0e1015` carrying about two levels of
 * dither, which is close to this film's `#0a0b0d` but not equal to it. Dropped
 * on the frame unmodified it is a slightly paler rectangle sitting behind the
 * logo, which is the same defect `landing/AGENTS.md` records for `og.png` and
 * the maskable icon.
 *
 * So the asset here is the shipped mark with that background keyed to alpha and
 * cropped to the glyph. The background was measured as the modal colour rather
 * than read off a corner (the corner is `#101218`, two levels off the field),
 * coverage is a ramp between 6 and 34 levels of distance from it, and the
 * colour is un-premultiplied against the same measurement. Source
 * `1254 x 1254`, glyph `755 x 766` at 60.2 % x 61.2 % of the tile — which
 * matches the 60.9 % `landing/AGENTS.md` reports measuring.
 *
 * **When the mark changes, this file is regenerated, and nothing in the build
 * will say so if it is not.** Re-run the extraction against the new source; do
 * not scale, retouch or re-cut it by hand.
 */

/** The derived asset's own pixel size. The lockup's proportions come from it. */
const markAsset = { width: 755, height: 766 } as const;

/**
 * The mark's height on a 1080 frame.
 *
 * Larger than the 8 x 8 web square scales to, and it has to be: the square is
 * solid and this glyph is mostly negative space, so matching it by height would
 * match it by neither weight nor legibility. 120 px puts the glyph at 1.7x the
 * wordmark's size, which is the proportion an app icon has over its own name.
 */
const markHeight = 120;
const markWidth = Math.round((markHeight * markAsset.width) / markAsset.height);

/**
 * ## The vertical position is scene 09's, not scene 08's
 *
 * The mark's centre is `960, 360` — the vertical centre line at the upper
 * third. It is placed there so that scene 09's full column (lockup, tagline,
 * integrations, URL) is optically centred, which leaves scene 08's own settled
 * frame sitting above centre. That is deliberate and is the same compromise
 * `STORYBOARD.md` §29 records for the `1190` still: a still that needs optical
 * centring is cropped, not re-laid-out, because re-laying it out would move a
 * mark that is required to be motionless.
 *
 * The wordmark sits *beneath* the mark rather than beside it, which
 * `08-brand.md` lists as a flexible element and which two harder constraints
 * choose for us: the convergence node is at the centre of the frame and the
 * relationships land on the mark, so a horizontal lockup would push it off
 * centre; and a stacked, centred column is what survives the 1:1, 4:5 and 9:16
 * crops of `STORYBOARD.md` §2.
 */
export const brandLockup = {
  /** Vertical axis of the whole lockup. Everything below is centred on it. */
  centerX: 960,
  markWidth,
  markHeight,
  markTop: 300,
  wordmarkTop: 456,
  wordmarkSize: 72,
  taglineTop: 584,
  taglineSize: 34,
} as const;

/**
 * Where the relationships of scene 08 converge, and where the mark stays for
 * the rest of the film. `360` is the upper third of a 1080 frame.
 */
export const markCenter = {
  x: brandLockup.centerX,
  y: brandLockup.markTop + brandLockup.markHeight / 2,
} as const;

/**
 * The wordmark, lowercase.
 *
 * `kivgraph`, not `Kivgraph`. `TopBar.astro` and `Footer.astro` both set it
 * lowercase, and the film already carries the two forms under a rule: prose
 * takes the capital (`Answered with Kivgraph`, scene 06), an identifier takes
 * the lowercase (the `kivgraph` column head of scene 07's table). The reveal is
 * the identifier, so it rhymes with the column head the viewer read 200 frames
 * earlier rather than introducing a third register. `STORYBOARD.md` SCENE 10
 * wrote `Kivgraph` and was updated in the same task.
 */
export const wordmark = "kivgraph";

/**
 * `STORYBOARD.md` §32 high-priority phrase and the closing message of the
 * film (§4). The full stop belongs to it.
 */
export const tagline = "Exact code intelligence for coding agents.";

const centeredRow = {
  position: "absolute",
  left: 0,
  width: "100%",
  textAlign: "center",
  lineHeight: 1,
  whiteSpace: "pre",
} as const;

type LogoProps = {
  /** 0 -> 1 presence of the mark. Scene 08 ramps it; scene 09 inherits it at 1. */
  markOpacity?: number;
  /** One settle as the mark arrives. */
  markScale?: number;
  /** Degrees. Scene 08 turns the mark once as the wordmark enters. */
  markRotation?: number;
  /** 0 -> 1 presence of the wordmark. */
  wordmarkOpacity?: number;
  /** Minimal upward settle on the wordmark's entrance, in px. */
  wordmarkOffsetY?: number;
};

export const BrandLogo: React.FC<LogoProps> = ({
  markOpacity = 1,
  markScale = 1,
  markRotation = 0,
  wordmarkOpacity = 1,
  wordmarkOffsetY = 0,
}) => (
  <>
    {/**
     * Remotion's `<Img>` rather than a bare `<img>`, for the same reason
     * `fonts.ts` uses `loadFont()`: it holds the render open until the image has
     * decoded, so a headless render cannot produce a frame with the logo
     * missing. `staticFile` keeps it local — the render depends on no network
     * resource.
     */}
    <Img
      src={staticFile("brand/kivgraph-mark.png")}
      alt=""
      style={{
        position: "absolute",
        left: brandLockup.centerX - brandLockup.markWidth / 2,
        top: brandLockup.markTop,
        width: brandLockup.markWidth,
        height: brandLockup.markHeight,
        opacity: markOpacity,
        /**
         * `willChange` is here for determinism, not for performance, and
         * removing it reintroduces a measured bug.
         *
         * The mark is a raster displayed at 120 px from a 755 px source, and
         * scene 08 rotates it. Chrome picks a raster scale for a transformed
         * image from compositing state that accumulates across frames, so the
         * *same frame* came out differently depending on where the render
         * started: rendering `1420-1449` and `1340-1449` disagreed at 1425,
         * 1430 and 1436, while two renders of the same range were byte-identical
         * to each other. `AGENTS.md` requires that the same frame always produce
         * the same visual result, and that failed.
         *
         * Promoting the mark to its own compositing layer removes the choice.
         * Verified after: `remotion still`, a 1340-start render and a 1420-start
         * render agree byte for byte on every frame of the turn.
         *
         * It is not free and the cost is recorded rather than hidden: the mark's
         * antialiased edges resample differently on a promoted layer, so frame
         * 1440 moved by up to 35 levels on 6% of the subpixels inside the mark -
         * 43.6 dB over the mark's region, 60.8 dB over the whole frame. Compared
         * at 3x nearest-neighbour the two are indistinguishable, and the shape,
         * position and size are untouched. A wrong-but-stable frame would not be
         * acceptable; a differently-antialiased-but-stable one is.
         */
        willChange: "transform",
        /**
         * `rotate` and `scale` as standalone properties rather than one
         * `transform`, which is the form the rest of this project already uses.
         * They compose in the spec's order - translate, rotate, scale - so the
         * mark turns about its own centre and its position is untouched.
         *
         * Scene 09 renders this component with no props, so the lockup it
         * inherits is at `0deg` and stays there. Nothing turns after `1436`.
         */
        rotate: `${markRotation}deg`,
        scale: markScale,
      }}
    />

    {/**
     * The wordmark. Mono, because it is an identifier rather than prose, and
     * `500` rather than `400` because at 72 px on a near-empty dark frame the
     * regular weight reads as body copy that happens to be large. No tracking:
     * mono already has the sidebearings, and adding more at display size is the
     * gesture that makes a logotype look set rather than drawn.
     */}
    <div
      style={{
        ...centeredRow,
        top: brandLockup.wordmarkTop,
        fontFamily: fontMono,
        fontSize: brandLockup.wordmarkSize,
        fontWeight: 500,
        color: brand.textPrimary,
        opacity: wordmarkOpacity,
        translate: `0px ${wordmarkOffsetY}px`,
      }}
    >
      {wordmark}
    </div>
  </>
);

type TaglineProps = {
  opacity?: number;
  offsetY?: number;
};

/**
 * Separate from `BrandLogo` because it is not part of the lockup — it is the
 * film's closing sentence, which happens to live under it. Shared for the same
 * reason the lockup is: scene 09 inherits it at `1450` at exactly these values.
 *
 * Sans, because it is prose. `textSecondary` so it is subordinate to the
 * wordmark without being quiet enough to skip.
 */
export const BrandTagline: React.FC<TaglineProps> = ({
  opacity = 1,
  offsetY = 0,
}) => (
  <div
    style={{
      ...centeredRow,
      top: brandLockup.taglineTop,
      fontFamily: fontSans,
      fontSize: brandLockup.taglineSize,
      fontWeight: 400,
      color: brand.textSecondary,
      opacity,
      translate: `0px ${offsetY}px`,
    }}
  >
    {tagline}
  </div>
);
