import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.space[9]};
  padding-top: ${({ theme }) => theme.space[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Heading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.overline};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

/*
 * A plain list with a rail drawn behind it. The previous version scrolled a
 * horizontal carousel using hardcoded scrollWidth maths, which broke whenever
 * the item count or viewport changed.
 */
export const List = styled.ol`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
  padding-left: ${({ theme }) => theme.space[6]};

  &::before {
    content: "";
    position: absolute;
    left: 0.55rem;
    top: 0.6rem;
    bottom: 0.6rem;
    width: 1px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.accentBorder},
      ${({ theme }) => theme.colors.border} 40%,
      transparent
    );
  }
`;

export const Item = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 7rem minmax(0, 1fr);
  gap: ${({ theme }) => theme.space[5]};
  align-items: baseline;

  &::before {
    content: "";
    position: absolute;
    left: calc(-${({ theme }) => theme.space[6]} + 0.2rem);
    top: 0.55rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${({ theme, $current }) =>
      $current ? theme.colors.accent : theme.colors.surfaceHover};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.background};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[1]};
  }
`;

export const Year = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.bodySm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $current }) =>
    $current ? theme.colors.accent : theme.colors.textMuted};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.bodySm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 68ch;
`;
