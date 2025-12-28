import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  background: rgba(15, 22, 36, 0.85);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const Logo = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;
  }

  span {
    letter-spacing: 0.4px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #9cc9e3;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  color: white;
  width: 180px;

  &:focus {
    outline: none;
    border-color: #9cc9e3;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const SocialIcons = styled.a`
  color: white;
  padding: 6px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(156, 201, 227, 0.15);
    transform: translateY(-1px);
  }
`;


export const LangSwitcher = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-left: 1rem;
`;

export const LangButton = styled.button`
  background: ${({ active }) =>
    active ? "rgba(156, 201, 227, 0.25)" : "transparent"};
  color: ${({ active }) => (active ? "#9cc9e3" : "white")};
  border: 1px solid rgba(156, 201, 227, 0.3);
  border-radius: 10px;
  padding: 0.3rem 0.7rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(156, 201, 227, 0.15);
  }
`;
