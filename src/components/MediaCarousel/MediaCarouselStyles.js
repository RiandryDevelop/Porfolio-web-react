import styled from 'styled-components';

export const Figure = styled.figure`
  margin-top: ${({ theme }) => theme.space[7]};
`;

export const Frame = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.sm} {
    border-radius: ${({ theme }) => theme.radii.lg};
  }
`;

export const Slide = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  visibility: ${({ $active }) => ($active ? 'visible' : 'hidden')};
  transition: opacity ${({ theme }) => theme.transitions.slow},
    visibility ${({ theme }) => theme.transitions.slow};

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const ExpandButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.space[3]};
  right: ${({ theme }) => theme.space[3]};
  z-index: 2;
  display: grid;
  place-items: center;
  width: 3.4rem;
  height: 3.4rem;
  color: ${({ theme }) => theme.colors.text};
  background: rgba(8, 9, 12, 0.7);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  backdrop-filter: blur(8px);
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(8, 9, 12, 0.92);
    border-color: ${({ theme }) => theme.colors.accentBorder};
  }
`;

export const Control = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === 'left' ? 'left: 1.2rem;' : 'right: 1.2rem;')}
  z-index: 2;
  display: grid;
  place-items: center;
  width: 4rem;
  height: 4rem;
  color: ${({ theme }) => theme.colors.text};
  background: rgba(8, 9, 12, 0.7);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  backdrop-filter: blur(8px);
  transition: background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(8, 9, 12, 0.92);
    border-color: ${({ theme }) => theme.colors.accentBorder};
  }
`;

export const Caption = styled.figcaption`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[3]};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Dots = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
`;

export const Dot = styled.button`
  width: ${({ $active }) => ($active ? '2.4rem' : '0.8rem')};
  height: 0.8rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.accent : theme.colors.surfaceHover};
  transition: width ${({ theme }) => theme.transitions.base},
    background ${({ theme }) => theme.transitions.base};

  &:hover {
    background: ${({ theme, $active }) =>
      $active ? theme.colors.accentHover : theme.colors.borderStrong};
  }
`;

/* ---------------------------------------------------------------- lightbox */

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.space[5]};
  background: rgba(4, 5, 7, 0.92);
  backdrop-filter: blur(6px);
`;

export const OverlayContent = styled.div`
  position: relative;
  max-width: min(140rem, 100%);
  max-height: 100%;

  img,
  video {
    max-width: 100%;
    max-height: 85vh;
    width: auto;
    height: auto;
    border-radius: ${({ theme }) => theme.radii.md};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -5rem;
  right: 0;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    top: -4.4rem;
  }
`;

/* Shown on case studies whose media has not been uploaded yet. */
export const Pending = styled.div`
  display: grid;
  place-items: center;
  gap: ${({ theme }) => theme.space[2]};
  margin-top: ${({ theme }) => theme.space[7]};
  aspect-ratio: 16 / 7;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
`;
