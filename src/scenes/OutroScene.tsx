import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { BrandLogo, BrandTagline } from "../components/BrandLogo";
import { fontMono, fontSans } from "../brand/fonts";
import { brand } from "../brand/tokens";

/**
 * Scene 09 - outro (master 2050-2170, scene-local 0000-0120).
 *
 * The scene that gives the viewer one thing to do and one thing to remember.
 * The name landed in scene 08; everything left is conversion, and conversion
 * fails by addition - a second URL, a third link, a features list. Each of those
 * splits one action into a choice, and a choice at the end of a video over
 * twenty-seven seconds long is not taken at all.
 *
 * It is the cheapest scene in the film: static type, two entrances and a hold.
 * Nothing here is expensive and nothing should be added to fill the two seconds.
 *
 * See `docs/scenes/09-outro.md` for intent, beats and invariants.
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

  return { opacity: progress, offsetY: 6 * (1 - progress) };
};

/**
 * The column below the lockup.
 *
 * The lockup's own geometry is not restated here - it comes from `brandLockup`,
 * which scene 08 also reads, because the two scenes have to agree about it to
 * the pixel across `1530`. Only what this scene adds is declared.
 *
 * The gaps say what belongs to what. The tagline sits 56 px under the wordmark
 * because it is the lockup's own sentence; the integrations sit 82 px under the
 * tagline because they are a new thought, and a gap smaller than the lockup's
 * internal one would read them as a third line of the brand statement. The URL
 * then comes back to 48, because it is what the integrations were leading to.
 *
 * The column runs 300 to 816, so its centre is 558 against the frame's 540 - 18
 * px low, which is 1.7 % of the frame. It is not corrected: correcting it would
 * mean moving the mark, and the mark is required to be motionless across `1530`.
 * `STORYBOARD.md` §29 has the same instruction for the `1190` still - a frame
 * that needs optical centring is cropped, not re-laid-out.
 */
const column = {
  integrations: { y: 700, fontSize: 24 },
  url: { y: 772, fontSize: 44 },
} as const;

/**
 * The four names, verified against the product rather than copied from the
 * storyboard on trust.
 *
 * `kivgraph mcp install` has five targets, and the labels are the ones
 * `landing/src/components/landing/clients.ts` gives them - which is itself
 * derived from `internal/integrations/integrations.go`, the only place that
 * decides what the CLI offers. Naming an integration that does not exist would
 * be a fabricated product fact, which `AGENTS.md` rules out as firmly as it
 * rules out inventing a benchmark figure. So would spelling one differently
 * from the product: it is `Oh My Pi`, not `oh-my-pi`, which is the `--target`
 * value.
 *
 * `STORYBOARD.md` names three and allows further compatible integrations *«si
 * hay espacio»*. `Oh My Pi` was added on direct art direction and there is
 * space, measured rather than judged: the line runs `704` to `1214`, so it is
 * 511 px wide - 27 % of the frame, centred on 959 against the frame's 960 - and
 * clears a 1080-wide crop with 280 px either side.
 *
 * `Claude Desktop` is the one target still absent, and it is the one to leave
 * out if only one can be: `clients.ts` marks it *user scope only, and the one
 * target with no local skill install*, so it is the narrowest of the five.
 */
const integrations = ["Claude Code", "Codex", "OpenCode", "Oh My Pi"] as const;

/**
 * The one destination.
 *
 * `kivgraph.dev` is the apex origin `landing/astro.config.mjs` bakes in as the
 * production fallback, so it is the address that actually resolves rather than
 * the one that reads best. It is also what `STORYBOARD.md` names, so nothing in
 * the storyboard had to change for it.
 *
 * **Exactly one destination is on screen, ever.** Never this and the GitHub URL
 * together: two addresses is two decisions, and this scene exists to present
 * one.
 */
const url = "kivgraph.dev";

/**
 * The install line is not here, and its absence is a decision rather than an
 * omission.
 *
 * The real published command is
 * `curl -fsSL https://github.com/Luqueee/kivgraph/releases/latest/download/install.sh | bash`
 * - 89 characters. In JetBrains Mono that is roughly 1070 px at 20 px and 1280 px
 * at 24 px, which is 56 % to 67 % of the frame: the widest single element in the
 * whole film, visually outweighing the URL it is meant to support, and unable to
 * survive a 1080-wide crop at a readable size. `STORYBOARD.md`'s own condition
 * is "only if the line stays short enough" and "if it looks visually noisy, do
 * not show it", and an 89-character line beside a 12-character URL does not meet
 * it.
 *
 * Never shorten the command by hand to make it fit. A truncated command that
 * does not run is worse than no command.
 */

const centeredRow = {
  position: "absolute",
  left: 0,
  width: "100%",
  textAlign: "center",
  lineHeight: 1,
  whiteSpace: "pre",
} as const;

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();

  /**
   * Two entrances, then stillness.
   *
   * Storyboard frame numbers mark when a beat **reads**, not when its ramp
   * starts, so both conclude on their beat rather than beginning there: the
   * integrations by local `0028` and the URL at `0030` - master `2080`.
   *
   * The per-name stagger is three frames, which is what four names fit into the
   * window: they start at local `0004`, `0007`, `0010` and `0013` and land at
   * `0020`, `0023`, `0026` and `0029`, one frame before the URL. It makes the
   * line read as an enumeration; a larger stagger would turn it into a
   * bullet-list animation, and a stagger that ran past `0030` would put a name
   * still arriving under a URL that is supposed to be legible.
   *
   * Everything has clamped long before the hold opens at local `0060`. That is
   * a hard requirement and not a pacing preference: the viewer is reading a URL,
   * and any motion anywhere in the frame steals the fixation.
   */
  const cta = entry(frame, 18, 30);

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      {/**
       * The inherited frame. No props: `BrandLogo` and `BrandTagline` default
       * every animation input to its settled value, so this reproduces scene
       * 08's frame `1529` exactly - including `markRotation` at `0`, because
       * scene 08's turn concluded at `1436` and nothing turns here.
       *
       * There is no fade and no cut at `1530`. The previous scene stops
       * animating and this one starts adding beneath it; a mark that
       * repositions itself between two adjacent scenes reads as a rendering
       * fault, not as a transition.
       */}
      <BrandLogo />
      <BrandTagline />

      {/**
       * `Claude Code · Codex · OpenCode`.
       *
       * The separator is the middle dot, and it is `textFaint` against the
       * names' `textMuted` so the line reads as three items rather than as one
       * string. Sans, because these are product names inside a prose-adjacent
       * line - and the whole line is sans, because `STORYBOARD.md` §7's split is
       * per line and not per word.
       */}
      <div
        style={{
          ...centeredRow,
          top: column.integrations.y,
          fontFamily: fontSans,
          fontSize: column.integrations.fontSize,
          color: brand.textMuted,
        }}
      >
        {integrations.map((name, index) => {
          const item = entry(frame, 4 + index * 3, 20 + index * 3);

          return (
            <span
              key={name}
              style={{
                display: "inline-block",
                opacity: item.opacity,
                translate: `0px ${item.offsetY}px`,
              }}
            >
              {index > 0 ? (
                <span style={{ color: brand.textFaint }}>{"  ·  "}</span>
              ) : null}
              {name}
            </span>
          );
        })}
      </div>

      {/**
       * The destination, and the last thing standing.
       *
       * Mono, because a URL is a technical value and monospace makes it look
       * typed-in rather than advertised. `textPrimary` and **not** accented:
       * colouring it blue would read as a hyperlink and would spend the accent
       * on something that is not a relationship, a result or a Kivgraph
       * invocation. It would also be the only blue in the frame, since scene
       * 08's mark carries none - which would make it louder still.
       *
       * No panel, no card, no button, no rounded rectangle. A CTA button would
       * make this the one frame in the video that looks like an ad.
       */}
      <div
        style={{
          ...centeredRow,
          top: column.url.y,
          fontFamily: fontMono,
          fontSize: column.url.fontSize,
          fontWeight: 500,
          color: brand.textPrimary,
          opacity: cta.opacity,
          translate: `0px ${cta.offsetY}px`,
        }}
      >
        {url}
      </div>
    </AbsoluteFill>
  );
};
