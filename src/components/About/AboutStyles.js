import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: ${({ theme }) => theme.space[9]};
  align-items: start;

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[7]};
  }
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};

  p {
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    color: ${({ theme }) => theme.colors.textSecondary};
    max-width: 62ch;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

export const ProfileCard = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
  padding: ${({ theme }) => theme.space[5]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const Portrait = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  /* Keeps the portrait from becoming a full-width slab once the grid
     collapses to a single column. */
  max-height: 44rem;
  margin-inline: auto;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceRaised};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Bias upward so the face stays centred when the crop is tight. */
    object-position: center 28%;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 32rem;
  }
`;

/* Placeholder shown until a real portrait is added. */
export const PortraitFallback = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes.display};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.border};
  background: radial-gradient(
    120% 120% at 50% 0%,
    ${({ theme }) => theme.colors.surfaceHover} 0%,
    ${({ theme }) => theme.colors.surfaceRaised} 70%
  );
`;

export const Details = styled.dl`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.space[3]};
  }

  dt {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.overline};
    letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  dd {
    font-size: ${({ theme }) => theme.fontSizes.bodySm};
    color: ${({ theme }) => theme.colors.text};
    text-align: right;
  }

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

/* ------------------------------------------------------------------- stats */

export const Stats = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[9]};
  padding-top: ${({ theme }) => theme.space[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.space[5]};
  }
`;

export const Stat = styled.div`
  dt {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: ${({ theme }) => theme.fontSizes.h2};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    letter-spacing: ${({ theme }) => theme.letterSpacings.tighter};
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: ${({ theme }) => theme.space[1]};
  }

  dd {
    /* Never drops below 13px - the old layout shrank this to 10px on phones. */
    font-size: ${({ theme }) => theme.fontSizes.caption};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
