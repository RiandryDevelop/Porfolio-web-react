/**
 * Design tokens.
 *
 * Everything visual in the app resolves to one of these values. Components must
 * never hardcode a colour, a spacing step or a font size — if something is
 * missing here, add it here first.
 */

// Raw palette. Only this block holds literal colours; the rest of the theme
// refers to these names so a rebrand touches one place.
const palette = {
  ink950: "#08090C",
  ink900: "#0B0D12",
  ink850: "#0E1015",
  ink800: "#14171D",
  ink700: "#1C2028",
  ink600: "#262B35",

  paper100: "#F2F3F5",
  paper200: "#D7DAE1",
  paper300: "#A8AEBB",
  paper400: "#7D8494",

  amber300: "#F3D08A",
  amber400: "#E9B949",
  amber500: "#D4A32F",

  // Reserved for state feedback (form validation, toasts).
  green400: "#4ADE80",
  red400: "#F87171",
};

const colors = {
  // Surfaces, from furthest back to closest to the reader.
  background: palette.ink950,
  surface: palette.ink850,
  surfaceRaised: palette.ink800,
  surfaceHover: palette.ink700,

  // Text. `muted` sits at 5.3:1 on `background`, so it stays AA for body copy.
  text: palette.paper100,
  textSecondary: palette.paper300,
  textMuted: palette.paper400,
  textInverse: palette.ink950,

  accent: palette.amber400,
  accentHover: palette.amber300,
  accentPressed: palette.amber500,
  accentSubtle: "rgba(233, 185, 73, 0.12)",
  accentBorder: "rgba(233, 185, 73, 0.32)",

  border: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.16)",

  success: palette.green400,
  danger: palette.red400,

  // Focus ring colour — kept separate so it can be tuned without touching accent.
  focus: palette.amber400,
};

const fonts = {
  display: '"Bricolage Grotesque", "Space Grotesk", system-ui, sans-serif',
  body: 'Inter, system-ui, -apple-system, "Segoe UI", sans-serif',
  mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
};

// Fluid type scale. Each step interpolates between its mobile and desktop size
// across the 360px–1280px viewport range, so there are no jumps at breakpoints.
const fontSizes = {
  display: "clamp(3.2rem, 1.6rem + 7vw, 7.2rem)",
  h1: "clamp(2.8rem, 1.6rem + 5vw, 5.2rem)",
  h2: "clamp(2.4rem, 1.6rem + 3vw, 3.6rem)",
  h3: "clamp(1.9rem, 1.6rem + 1.2vw, 2.4rem)",
  h4: "clamp(1.7rem, 1.5rem + 0.6vw, 1.9rem)",
  bodyLg: "clamp(1.7rem, 1.5rem + 0.8vw, 2.1rem)",
  body: "1.6rem",
  bodySm: "1.45rem",
  caption: "1.3rem",
  overline: "1.2rem",
};

const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

const lineHeights = {
  tight: 1.05,
  snug: 1.2,
  normal: 1.5,
  relaxed: 1.7,
};

const letterSpacings = {
  tighter: "-0.03em",
  tight: "-0.015em",
  normal: "0",
  wide: "0.04em",
  wider: "0.12em",
};

// 4px base step. Named by step index, not by intent, so the scale stays obvious.
const space = {
  0: "0",
  1: "0.4rem",
  2: "0.8rem",
  3: "1.2rem",
  4: "1.6rem",
  5: "2.4rem",
  6: "3.2rem",
  7: "4rem",
  8: "4.8rem",
  9: "6.4rem",
  10: "8rem",
  11: "10.4rem",
  12: "12.8rem",
};

const radii = {
  sm: "0.6rem",
  md: "1rem",
  lg: "1.4rem",
  xl: "2rem",
  pill: "999px",
};

const shadows = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.4)",
  md: "0 8px 24px rgba(0, 0, 0, 0.35)",
  lg: "0 24px 60px rgba(0, 0, 0, 0.5)",
  glow: "0 0 0 1px rgba(233, 185, 73, 0.25), 0 16px 48px rgba(233, 185, 73, 0.08)",
};

const transitions = {
  fast: "140ms cubic-bezier(0.4, 0, 0.2, 1)",
  base: "220ms cubic-bezier(0.4, 0, 0.2, 1)",
  slow: "420ms cubic-bezier(0.16, 1, 0.3, 1)",
};

const layout = {
  maxWidth: "116rem",
  narrowWidth: "78rem",
  gutter: space[5],
  headerHeight: "7.2rem",
};

const zIndex = {
  base: 1,
  sticky: 100,
  drawer: 200,
  modal: 300,
};

// `max-width` queries are kept for backwards compatibility with existing styles;
// `up` holds the `min-width` equivalents for new mobile-first work.
const breakpoints = {
  sm: "screen and (max-width: 640px)",
  md: "screen and (max-width: 768px)",
  lg: "screen and (max-width: 1024px)",
  xl: "screen and (max-width: 1280px)",
  up: {
    sm: "screen and (min-width: 641px)",
    md: "screen and (min-width: 769px)",
    lg: "screen and (min-width: 1025px)",
    xl: "screen and (min-width: 1281px)",
  },
};

export default {
  palette,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  space,
  radii,
  shadows,
  transitions,
  layout,
  zIndex,
  breakpoints,
};
