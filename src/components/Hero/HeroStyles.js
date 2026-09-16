import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(0.82); }
`;

export const HeroSection = styled.section`
  position: relative;
  isolation: isolate;
  padding-block: ${({ theme }) => theme.space[11]} ${({ theme }) => theme.space[10]};
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding-block: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[8]};
  }
`;

/*
 * Backdrop: a faint dot grid that fades out downward, plus one warm glow behind
 * the headline. Decorative only, so it is hidden from assistive tech.
 */
export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      ${({ theme }) => theme.colors.border} 1px,
      transparent 1px
    );
    background-size: 32px 32px;
    mask-image: linear-gradient(to bottom, #000 0%, transparent 72%);
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, transparent 72%);
  }

  /*
   * Spread wide and kept faint. A small, blurred glow banded visibly against
   * the near-black background; stretching the same light over more pixels
   * keeps the falloff smooth.
   */
  &::after {
    content: "";
    position: absolute;
    top: -40%;
    left: -10%;
    width: 90rem;
    height: 90rem;
    max-width: 120%;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(233, 185, 73, 0.07) 0%,
      rgba(233, 185, 73, 0.03) 35%,
      transparent 70%
    );
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.layout.gutter};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
`;

export const Availability = styled.p`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.overline};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};

  &::before {
    content: "";
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.success};
    animation: ${pulse} 2.4s ease-in-out infinite;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.display};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tighter};
  max-width: 18ch;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Lead = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 58ch;
`;

export const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]};
  margin-top: ${({ theme }) => theme.space[2]};

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    align-items: stretch;
  }
`;

/* Facts strip under the fold-line: three short, scannable claims. */
export const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[5]};
  margin-top: ${({ theme }) => theme.space[8]};
  padding-top: ${({ theme }) => theme.space[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[4]};
  }
`;

export const Fact = styled.div`
  dt {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[1]};
  }

  dd {
    font-size: ${({ theme }) => theme.fontSizes.bodySm};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
