import styled from 'styled-components';

export const Wrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: ${({ theme }) => theme.space[9]};
`;

export const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin-inline: auto;
  padding: ${({ theme }) => `${theme.space[8]} ${theme.layout.gutter} ${theme.space[6]}`};
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[7]};

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[6]};
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
  align-items: flex-start;

  a {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[3]};
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: ${({ theme }) => theme.fontSizes.bodySm};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    /* Was 14px shrinking to 8px on phones; now it never drops below 13px. */
    font-size: ${({ theme }) => theme.fontSizes.bodySm};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    color: ${({ theme }) => theme.colors.textMuted};
    max-width: 40ch;
  }
`;

export const Column = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};

  h2 {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.overline};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[2]};
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes.bodySm};
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    flex: none;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.space[8]};
  padding-top: ${({ theme }) => theme.space[5]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  p {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.caption};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const BackToTop = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
