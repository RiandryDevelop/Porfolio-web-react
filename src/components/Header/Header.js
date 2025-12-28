import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { useSearch } from "../../context/SearchContext";


import {
  Container,
  Logo,
  NavMenu,
  NavItem,
  NavLink,
  SearchWrapper,
  SearchInput,
  Actions,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => {

  const { query, setQuery } = useSearch();

  return (

<Container>
    {/* Logo */}
    <Logo>
      <Link href="/">
        <a>
          <DiCssdeck size="2.6rem" />
          <span>Riandry Connor</span>
        </a>
      </Link>
    </Logo>

    {/* Navigation */}
    <NavMenu>
      <NavItem>
        <Link href="#projects" passHref>
          <NavLink>Projectos</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="#tech" passHref>
          <NavLink>Tecnologias</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="#about" passHref>
          <NavLink>Sobre Mi</NavLink>
        </Link>
      </NavItem>

      {/* 🔍 Search */}
      <SearchWrapper>
      <SearchInput
      placeholder="Buscar estudios de caso..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
      </SearchWrapper>
    </NavMenu>

    {/* Social / Actions */}
    <Actions>
      <SocialIcons
        href="https://github.com/RiandryDevelop"
        target="_blank"
        aria-label="GitHub"
      >
        <AiFillGithub size="2.4rem" />
      </SocialIcons>

      <SocialIcons
        href="https://www.linkedin.com/in/riandry-connor-b71275209/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <AiFillLinkedin size="2.4rem" />
      </SocialIcons>
    </Actions>
  </Container>
  );
};

export default Header;
