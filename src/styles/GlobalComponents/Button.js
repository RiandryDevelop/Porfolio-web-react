import styled, { css } from 'styled-components';

/**
 * One button, three looks.
 *
 * It renders a single element and a single copy of its children. Pass `as="a"`
 * (with an `href`) for links and leave it as a `<button>` for actions, so the
 * element always matches what it actually does.
 */

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textInverse};
    border-color: transparent;

    &:hover {
      background: ${({ theme }) => theme.colors.accentHover};
    }

    &:active {
      background: ${({ theme }) => theme.colors.accentPressed};
    }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.borderStrong};

    &:hover {
      background: ${({ theme }) => theme.colors.surfaceRaised};
      border-color: ${({ theme }) => theme.colors.accentBorder};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    border-color: transparent;
    padding-inline: ${({ theme }) => theme.space[3]};

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.surfaceRaised};
    }
  `,
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme, $size }) =>
    $size === 'sm' ? theme.fontSizes.bodySm : theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1;
  white-space: nowrap;

  padding: ${({ theme, $size }) =>
    $size === 'sm'
      ? `${theme.space[2]} ${theme.space[4]}`
      : `${theme.space[3]} ${theme.space[5]}`};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.pill};

  cursor: pointer;
  transition: background ${({ theme }) => theme.transitions.base},
    border-color ${({ theme }) => theme.transitions.base},
    color ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.fast};

  ${({ $variant = 'primary' }) => variants[$variant] || variants.primary}

  ${({ $full }) =>
    $full &&
    css`
      width: 100%;
    `}

  /* Icons sit optically with the label rather than on the text baseline. */
  svg {
    flex: none;
    font-size: 1.15em;
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled,
  &[aria-disabled='true'] {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none;
  }
`;

export default Button;
