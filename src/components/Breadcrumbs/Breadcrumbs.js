import Link from "next/link";
import styled from "styled-components";

const BreadcrumbWrapper = styled.nav`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #9cc9e3;
`;

const Crumb = styled.span`
  a {
    color: #9cc9e3;
    text-decoration: none;
  }
  &:not(:last-child)::after {
    content: " / ";
    margin: 0 0.5rem;
  }
`;

const Breadcrumbs = ({ items }) => (
  <BreadcrumbWrapper aria-label="Breadcrumb">
    {items.map((item, i) => (
      <Crumb key={i}>
        {item.href ? (
          <Link href={item.href}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        )}
      </Crumb>
    ))}
  </BreadcrumbWrapper>
);

export default Breadcrumbs;
