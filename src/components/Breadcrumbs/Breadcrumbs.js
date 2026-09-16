import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Crumb = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  /* Separator belongs to the following crumb so it never trails the last one. */
  & + &::before {
    content: "/";
    color: ${({ theme }) => theme.colors.border};
  }
`;

const Breadcrumbs = ({ items = [] }) => (
  <Nav aria-label="Breadcrumb">
    <List>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;

        return (
          <Crumb key={item.label}>
            {item.href && !isLast ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
            )}
          </Crumb>
        );
      })}
    </List>
  </Nav>
);

export default Breadcrumbs;
