import styled, { css } from 'styled-components';

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(8, 9, 12, 0.82)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(14px)' : 'none')};
  border-bottom: 1px solid
    ${({ theme, $scrolled }) => ($scrolled ? theme.colors.border : 'transparent')};
  transition: background ${({ theme }) => theme.transitions.base},
    border-color ${({ theme }) => theme.transitions.base};
`;

export const Inner = styled.div`
  height: ${({ theme }) => theme.layout.headerHeight};
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.layout.gutter};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[5]};
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes.bodySm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  color: ${({ theme }) => theme.colors.text};
  flex: none;

  svg {
    flex: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[1]};

  @media ${({ theme }) => theme.breakpoints.lg} {
    display: none;
  }
`;

export const NavLink = styled.a`
  position: relative;
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.bodySm};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.text : theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  /* Dot marks the section currently in view. */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0.2rem;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    transform: translateX(-50%) scale(${({ $active }) => ($active ? 1 : 0)});
    transition: transform ${({ theme }) => theme.transitions.base};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  flex: none;
`;

export const IconLink = styled.a`
  display: inline-grid;
  place-items: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceRaised};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: ${({ $hideOnMobile }) => ($hideOnMobile ? 'none' : 'inline-grid')};
  }
`;

export const LangSwitcher = styled.div`
  display: inline-flex;
  padding: 0.3rem;
  gap: 0.2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
`;

export const LangButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.overline};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[2]}`};
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.textInverse : theme.colors.textSecondary};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.accent : 'transparent'};
  transition: background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme, $active }) =>
      $active ? theme.colors.textInverse : theme.colors.text};
  }
`;

export const MenuToggle = styled.button`
  display: none;
  place-items: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media ${({ theme }) => theme.breakpoints.lg} {
    display: grid;
  }
`;

/* ------------------------------------------------------------ mobile drawer */

export const Drawer = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.drawer};
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.layout.gutter};
  overflow-y: auto;

  ${({ $open }) =>
    $open
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
        `}

  transition: opacity ${({ theme }) => theme.transitions.base},
    visibility ${({ theme }) => theme.transitions.base};

  @media ${({ theme }) => theme.breakpoints.up.lg} {
    display: none;
  }
`;

export const DrawerHead = styled.div`
  height: calc(${({ theme }) => theme.layout.headerHeight} - ${({ theme }) => theme.layout.gutter});
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.space[6]};
`;

export const DrawerLink = styled.a`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.space[4]};
  padding-block: ${({ theme }) => theme.space[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};

  small {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.overline};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const DrawerFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
  margin-top: ${({ theme }) => theme.space[8]};
  padding-bottom: ${({ theme }) => theme.space[6]};
`;

export const DrawerSocials = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
`;
