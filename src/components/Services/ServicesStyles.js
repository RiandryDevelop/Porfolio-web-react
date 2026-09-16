import styled from 'styled-components';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: ${({ theme }) => theme.space[4]};
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[6]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  transition: border-color ${({ theme }) => theme.transitions.base},
    background ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentBorder};
    background: ${({ theme }) => theme.colors.surfaceRaised};
  }
`;

export const CardIcon = styled.span`
  display: grid;
  place-items: center;
  width: 4.4rem;
  height: 4.4rem;
  margin-bottom: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accentSubtle};
  border: 1px solid ${({ theme }) => theme.colors.accentBorder};
  border-radius: ${({ theme }) => theme.radii.md};
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
`;

export const CardText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.bodySm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Bullets = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.space[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  li {
    display: flex;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space[2]};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.caption};
    color: ${({ theme }) => theme.colors.textMuted};
  }

  svg {
    flex: none;
    margin-top: 0.15em;
    color: ${({ theme }) => theme.colors.accent};
  }
`;
