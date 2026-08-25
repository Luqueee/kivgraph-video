/**
 * Kivgraph brand tokens.
 *
 * Mirrored 1:1 from the shipped web design system
 * (`kivgraph/landing/src/styles/global.css`, the Tailwind v4 `@theme` block).
 * The site is dark-only, so there is exactly one value per token.
 *
 * Rules that travel with these tokens:
 * - border radius is 0 everywhere;
 * - there are no shadows, depth is a surface step plus a 1px hairline;
 * - 85-90% neutral / 10-15% accent, and the accent must always mean something
 *   (selected symbol, active relationship, propagation, Kivgraph invocation).
 */
export const brand = {
  /** --color-shell, page background */
  background: "#0a0b0d",
  /** `background` as an rgb triplet, for gradients that need an alpha stop. */
  backgroundRgb: "10, 11, 13",
  /** --color-panel, lifted block: editor, terminal, card */
  surface: "#101215",
  /** --color-raise, highest surface: inline code, pressed control */
  surfaceElevated: "#171a1f",

  /** gray-100, headings and primary text */
  textPrimary: "#f5f5f5",
  /** gray-300, body and code */
  textSecondary: "#d4d4d4",
  /** gray-400, labels and captions */
  textMuted: "#a3a3a3",
  /** gray-500, decoration only */
  textFaint: "#737373",

  /** accent-600, brand fill: logo square, active marker */
  accent: "#2563eb",
  /** accent-200, accent as text: links, active symbol */
  accentText: "#bfdbfe",
  /** accent-950, softest accent surface */
  accentSoft: "#172554",
  /** accent-900, the ::selection background of the web */
  selection: "#1e3a8a",
  /** `selection` as an rgb triplet, for fields that fade in and out. */
  selectionRgb: "30, 58, 138",

  /** --color-rule, default hairline */
  border: "#22262b",
  /** --color-rule-strong, deliberate edge */
  borderStrong: "#333a42",
  /** --color-graph-exact, shell prompt and success */
  success: "#16a34a",
} as const;

/**
 * Node and edge colours of the Kivgraph graph viewer.
 * Kept separate from `brand` because they carry graph semantics, not UI roles.
 */
export const graph = {
  repository: "#2563eb",
  package: "#7c3aed",
  file: "#059669",
  symbol: "#ea580c",
  edgeContainment: "#475569",
  edgeLocal: "#4b5563",
  edgeCross: "#94a3b8",
} as const;
