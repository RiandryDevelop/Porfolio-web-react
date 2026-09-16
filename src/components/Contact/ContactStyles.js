import styled, { css, keyframes } from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: ${({ theme }) => theme.space[9]};
  align-items: start;

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[7]};
  }
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
`;

export const DirectLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
`;

export const DirectLink = styled.li`
  a,
  button {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[3]};
    width: 100%;
    padding: ${({ theme }) => theme.space[4]};
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.bodySm};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    transition: border-color ${({ theme }) => theme.transitions.base},
      background ${({ theme }) => theme.transitions.base};
  }

  a:hover,
  button:hover {
    border-color: ${({ theme }) => theme.colors.accentBorder};
    background: ${({ theme }) => theme.colors.surfaceRaised};
  }

  svg {
    flex: none;
    color: ${({ theme }) => theme.colors.accent};
  }

  small {
    display: block;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.overline};
    letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 0.2rem;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[6]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.space[5]};
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};

  ${({ $full }) =>
    $full &&
    css`
      grid-column: 1 / -1;
    `}
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.overline};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const controlStyles = css`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.bodySm};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid
    ${({ theme, $invalid }) =>
      $invalid ? theme.colors.danger : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, $invalid }) =>
      $invalid ? theme.colors.danger : theme.colors.accentBorder};
  }
`;

export const Input = styled.input`
  ${controlStyles}
`;

export const Textarea = styled.textarea`
  ${controlStyles}
  min-height: 14rem;
  resize: vertical;
`;

export const FieldError = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.danger};
`;

/* Off-screen honeypot: real people never fill it, bots usually do. */
export const Honeypot = styled.div`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const Actions = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};
  flex-wrap: wrap;
`;

export const Consent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 38ch;
`;

const spin = keyframes`to { transform: rotate(360deg); }`;

export const Spinner = styled.span`
  display: inline-flex;
  animation: ${spin} 0.8s linear infinite;
`;

export const StatusMessage = styled.p`
  grid-column: 1 / -1;
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space[3]};
  font-size: ${({ theme }) => theme.fontSizes.bodySm};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  padding: ${({ theme }) => theme.space[4]};
  border-radius: ${({ theme }) => theme.radii.md};

  color: ${({ theme, $tone }) =>
    $tone === 'error' ? theme.colors.danger : theme.colors.success};
  background: ${({ $tone }) =>
    $tone === 'error' ? 'rgba(248, 113, 113, 0.1)' : 'rgba(74, 222, 128, 0.1)'};
  border: 1px solid
    ${({ $tone }) =>
      $tone === 'error' ? 'rgba(248, 113, 113, 0.3)' : 'rgba(74, 222, 128, 0.3)'};

  svg {
    flex: none;
    margin-top: 0.15em;
  }

  a {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;
