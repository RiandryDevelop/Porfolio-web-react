import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  /*
   * 62.5% makes 1rem === 10px, so every token in the theme reads as px/10.
   * It still scales with the reader's own font-size preference.
   */
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding-top: calc(${({ theme }) => theme.layout.headerHeight} + ${({ theme }) => theme.space[5]});
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-synthesis-weight: none;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    line-height: ${({ theme }) => theme.lineHeights.snug};
    letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  /*
   * One focus style for the whole app. :focus-visible keeps it off mouse
   * clicks, so nothing is lost by making it this loud.
   */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
    border-radius: ${({ theme }) => theme.radii.sm};
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textInverse};
  }

  /* Search hits. Underlined as well as tinted, so it never relies on colour alone. */
  mark {
    background: ${({ theme }) => theme.colors.accentSubtle};
    color: ${({ theme }) => theme.colors.accentHover};
    border-radius: 3px;
    padding: 0 0.2em;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  /* Skip link: visible only once it takes focus. */
  .skip-link {
    position: absolute;
    left: ${({ theme }) => theme.space[4]};
    top: -100%;
    z-index: ${({ theme }) => theme.zIndex.modal};
    padding: ${({ theme }) => `${theme.space[3]} ${theme.space[5]}`};
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textInverse};
    border-radius: ${({ theme }) => theme.radii.md};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    transition: top ${({ theme }) => theme.transitions.fast};
  }

  .skip-link:focus {
    top: ${({ theme }) => theme.space[4]};
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;
