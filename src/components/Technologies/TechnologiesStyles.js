import styled from 'styled-components';

export const Groups = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: ${({ theme }) => theme.space[4]};
`;

export const Group = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[5]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const GroupHead = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};

  h3 {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.overline};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.accent};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.bodySm};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Chips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  margin-top: auto;
`;

export const Chip = styled.li`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.surfaceRaised};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  transition: border-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  svg {
    flex: none;
    color: ${({ theme }) => theme.colors.textMuted};
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
