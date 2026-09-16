import styled, { css } from 'styled-components';

/* ------------------------------------------------------------------ layout */

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme, $narrow }) =>
    $narrow ? theme.layout.narrowWidth : theme.layout.maxWidth};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.layout.gutter};
`;

export const Section = styled.section`
  position: relative;
  padding-block: ${({ theme, $tight }) => ($tight ? theme.space[8] : theme.space[10])};

  @media ${({ theme }) => theme.breakpoints.md} {
    padding-block: ${({ theme, $tight }) => ($tight ? theme.space[7] : theme.space[8])};
  }
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
  max-width: 68rem;
  margin-bottom: ${({ theme }) => theme.space[8]};

  ${({ $center }) =>
    $center &&
    css`
      align-items: center;
      text-align: center;
      max-width: 72rem;
      margin-inline: auto;
    `}
`;

/* -------------------------------------------------------------------- type */

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.overline};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};

  &::before {
    content: "";
    width: 1.8rem;
    height: 1px;
    background: currentColor;
    opacity: 0.6;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme, $main }) =>
    $main ? theme.fontSizes.display : theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme, $main }) =>
    $main ? theme.lineHeights.tight : theme.lineHeights.snug};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tighter};
  color: ${({ theme }) => theme.colors.text};
`;

export const SectionLead = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 62ch;
`;

/* -------------------------------------------------------------------- tags */

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
`;

export const Tag = styled.li`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.surfaceRaised};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  white-space: nowrap;
`;

/* --------------------------------------------------------- case study page */

export const CaseStudyWrapper = styled.article`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin-inline: auto;
  padding: ${({ theme }) =>
    `${theme.space[7]} ${theme.layout.gutter} ${theme.space[9]}`};
`;

export const CaseStudyHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  max-width: 82rem;
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const CaseStudyMeta = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: ${({ theme }) => theme.space[5]};
  padding-block: ${({ theme }) => theme.space[5]};
  border-block: 1px solid ${({ theme }) => theme.colors.border};

  dt {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.overline};
    letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: ${({ theme }) => theme.space[2]};
  }

  dd {
    font-size: ${({ theme }) => theme.fontSizes.bodySm};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: ${({ theme }) => theme.space[9]};
  margin-top: ${({ theme }) => theme.space[8]};
  align-items: start;

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[7]};
  }
`;

export const InfoBlock = styled.section`
  & + & {
    margin-top: ${({ theme }) => theme.space[7]};
  }

  h3 {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[3]};
    font-size: ${({ theme }) => theme.fontSizes.h3};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.space[3]};
  }

  h3::before {
    content: "";
    flex: none;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    color: ${({ theme }) => theme.colors.textSecondary};
    max-width: 68ch;
  }
`;

export const Sidebar = styled.aside`
  position: sticky;
  top: calc(
    ${({ theme }) => theme.layout.headerHeight} + ${({ theme }) => theme.space[5]}
  );
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};

  @media ${({ theme }) => theme.breakpoints.lg} {
    position: static;
  }
`;

export const SidebarTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.overline};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const CTASection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
  text-align: center;
  margin-top: ${({ theme }) => theme.space[10]};
  padding: ${({ theme }) => `${theme.space[9]} ${theme.space[5]}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: radial-gradient(
      120% 140% at 50% 0%,
      ${({ theme }) => theme.colors.accentSubtle} 0%,
      transparent 60%
    ),
    ${({ theme }) => theme.colors.surface};
`;

export const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[9]};
  padding-top: ${({ theme }) => theme.space[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
  padding: ${({ theme }) => theme.space[4]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: border-color ${({ theme }) => theme.transitions.base},
    background ${({ theme }) => theme.transitions.base};

  ${({ $align }) =>
    $align === 'end' &&
    css`
      align-items: flex-end;
      text-align: right;
    `}

  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.overline};
    letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  strong {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: ${({ theme }) => theme.fontSizes.h4};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentBorder};
    background: ${({ theme }) => theme.colors.surface};
  }
`;

/* Screen-reader-only text, for labelling icon-only controls. */
export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

/* Groups a sidebar heading with its content. */
export const SidebarBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
`;

/* Stacked full-width actions, used for the case study link buttons. */
export const ButtonStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`;
