import styled, { css } from 'styled-components';

export const HeaderArea = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[8]};

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.space[5]};
  }
`;

export const HeaderCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  flex: none;
  width: 32rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
  }
`;

export const SearchField = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  /* Leading search glyph. */
  > svg {
    position: absolute;
    left: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.textMuted};
    pointer-events: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.bodySm};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: ${({ theme }) =>
    `${theme.space[3]} ${theme.space[9]} ${theme.space[3]} ${theme.space[8]}`};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accentBorder};
  }

  /* Hide the native clear affordance; there is a styled one. */
  &::-webkit-search-cancel-button {
    display: none;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.space[3]};
  display: grid;
  place-items: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
`;

export const SearchHint = styled.small`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  padding-left: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textMuted};

  kbd {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 1.1rem;
    line-height: 1;
    padding: 0.35rem 0.55rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    background: ${({ theme }) => theme.colors.surfaceRaised};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-bottom-width: 2px;
    border-radius: ${({ theme }) => theme.radii.sm};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

export const ResultCount = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.space[5]};
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
  text-align: center;
  padding: ${({ theme }) => `${theme.space[9]} ${theme.space[5]}`};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    max-width: 44ch;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[5]};

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

/*
 * The whole card is one anchor, so it is keyboard reachable, crawlable and
 * openable in a new tab - the old markup wrapped a <div> and lost all three.
 */
export const Card = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  transition: border-color ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentBorder};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const CardMedia = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  background: ${({ theme }) => theme.colors.surfaceRaised};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;

  /*
   * Phone screenshots are ~9:19.5, so cropping them to this box would leave a
   * useless horizontal sliver. Portrait covers are letterboxed instead, over a
   * blurred copy of themselves so the frame does not read as empty.
   */
  ${({ $portrait, $src }) =>
    $portrait &&
    $src &&
    css`
      &::before {
        content: "";
        position: absolute;
        inset: -10%;
        background: url(${$src}) center / cover no-repeat;
        filter: blur(28px) saturate(0.7) brightness(0.45);
      }
    `}

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: ${({ $portrait }) => ($portrait ? 'contain' : 'cover')};
    padding: ${({ theme, $portrait }) => ($portrait ? theme.space[3] : '0')};
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  ${Card}:hover & img {
    transform: scale(1.03);
  }
`;

/* Shown when a project has no cover image yet. */
export const MediaFallback = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textMuted};
  background: repeating-linear-gradient(
    -45deg,
    ${({ theme }) => theme.colors.surfaceRaised} 0 10px,
    ${({ theme }) => theme.colors.surface} 10px 20px
  );
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[5]};
  flex: 1;
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.overline};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};

  span + span::before {
    content: "·";
    margin-right: ${({ theme }) => theme.space[3]};
  }
`;

export const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[3]};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};

  svg {
    flex: none;
    color: ${({ theme }) => theme.colors.textMuted};
    transition: transform ${({ theme }) => theme.transitions.base},
      color ${({ theme }) => theme.transitions.base};
  }

  ${Card}:hover & svg {
    color: ${({ theme }) => theme.colors.accent};
    transform: translate(3px, -3px);
  }
`;

export const CardSummary = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.bodySm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.textSecondary};
  flex: 1;
`;

export const CardTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  margin-top: ${({ theme }) => theme.space[1]};
`;

export const CardTag = styled.li`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.2rem 0.7rem;
`;
