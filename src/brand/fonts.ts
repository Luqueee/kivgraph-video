import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

/**
 * Geist is the Kivgraph web's sans and is used here for narration: headlines,
 * labels, marketing copy.
 *
 * The mono face is JetBrains Mono, a deliberate deviation from the web, which
 * ships Geist Mono. It was chosen for the video because code is the primary
 * material of several scenes and JetBrains Mono holds up better at large sizes
 * and heavy crops. It is the single mono family of the project: code lines,
 * file paths, symbol names, terminal text.
 *
 * Both are self-hosted variable faces from `public/fonts`, so the render never
 * depends on a network resource. `loadFont()` holds the render open until the
 * face is ready, which keeps text metrics identical in Studio and in a
 * headless render.
 *
 * Metrics, not pixels: the same outlines at the same advances still rasterise
 * differently in Studio and in a render, because they go through different text
 * engines - macOS smoothing paints visibly wider and heavier than the FreeType
 * in headless Chrome. That difference is expected and is not a font mismatch.
 * The render is the artefact; Studio is a preview of it.
 */

/**
 * The names the faces are REGISTERED under, and the CSS stacks the DOM asks for.
 *
 * The registered names carry a ` Video` suffix on purpose. A bare `Geist` or
 * `JetBrains Mono` is the same string a machine may already have installed -
 * JetBrains Mono especially, which is a developer font and is on half the
 * laptops that will ever open this project - and a family name a local face can
 * also answer to is a family name that can resolve to different outlines in
 * Studio than in a headless render. The suffix makes the name ours: nothing but
 * the `loadFont()` calls below can claim it.
 *
 * The stacks end in a generic so a miss degrades to the right *kind* of face.
 * Without one, an unresolved family falls through to the browser's default,
 * which in headless Chrome is a SERIF: the narration would render in Times and
 * nothing in the build would say so. Verified by rendering a frame against a
 * deliberately absent family - the copy came back as Times, not as a near-miss
 * sans that could pass review.
 */
const sansFamily = "Geist Video";
const monoFamily = "JetBrains Mono Video";

export const fontSans = `"${sansFamily}", sans-serif`;
export const fontMono = `"${monoFamily}", monospace`;

/**
 * The same mono face, in the one format the SDF text renderer can read.
 *
 * troika parses fonts itself, with Typr, and Typr has no Brotli: give it a
 * `.woff2` and it throws `woff2 fonts not supported` from its own font parser.
 * So the graph's in-scene labels are served the decompressed sfnt of the very
 * file the browser is loading above - same outlines, same `unitsPerEm`, same
 * `1020 / -300` ascent and descent, same `0.6 em` advance - and DOM type and
 * scene type therefore lay out to the same metrics rather than to two fonts
 * that happen to share a name.
 *
 * It is still the variable face, and troika renders one instance of it: the
 * outlines in `glyf`, which are the `fvar` default, `wght 400`. That is the
 * weight every DOM label in the video already renders at, so nothing moved.
 *
 * **`public/fonts/` therefore carries this typeface twice, and the two files
 * must never drift.** `jetbrains-mono-variable.woff2` is the source and is
 * what every DOM surface loads; the `.ttf` is derived from it and is what
 * troika loads. The match cut at `0330` is a DOM glyph cross-fading into a
 * troika glyph in the same rectangle, so updating one file without the other
 * breaks the cut and nothing in the build will say so. Replace the `.woff2`,
 * then regenerate the `.ttf` in the same commit:
 *
 * ```sh
 * python3 -m pip install fonttools brotli
 * python3 -c "from fontTools.ttLib import TTFont; \
 * f = TTFont('public/fonts/jetbrains-mono-variable.woff2'); f.flavor = None; \
 * f.save('public/fonts/jetbrains-mono-variable.ttf')"
 * ```
 *
 * Decompression only - no subsetting, no instancing, no re-hinting - so the
 * `.ttf` is the `.woff2`'s own sfnt, byte for byte in every table Typr reads.
 */
export const fontMonoSdf = staticFile("fonts/jetbrains-mono-variable.ttf");

void loadFont({
  family: sansFamily,
  url: staticFile("fonts/geist-variable.woff2"),
  weight: "100 900",
  display: "block",
});

void loadFont({
  family: monoFamily,
  url: staticFile("fonts/jetbrains-mono-variable.woff2"),
  weight: "100 900",
  display: "block",
});
