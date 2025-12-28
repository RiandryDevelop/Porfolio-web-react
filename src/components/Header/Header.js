import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { useSearch } from "../../context/SearchContext";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";



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
  LangSwitcher,
  LangButton
} from "./HeaderStyles";

const Header = () => {

  const { query, setQuery } = useSearch();
  const { t } = useTranslation("common");

  const router = useRouter();
const { locale, asPath } = router;

const changeLanguage = (lng) => {
  router.push(asPath, asPath, { locale: lng });
};



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
          <NavLink>{t("nav.projects")}</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="#tech" passHref>
          <NavLink>{t("nav.tech")}</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="#about" passHref>
          <NavLink>{t("nav.about")}</NavLink>
        </Link>
      </NavItem>

      {/* 🔍 Search */}
      <SearchWrapper>
      <SearchInput
      placeholder={t("nav.searchPlaceholder")}
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
    <LangSwitcher>
  <LangButton
    active={locale === "es"}
    onClick={() => changeLanguage("es")}
  >
    ES
  </LangButton>

  <LangButton
    active={locale === "en"}
    onClick={() => changeLanguage("en")}
  >
    EN
  </LangButton>
</LangSwitcher>

  </Container>
  );
};

export default Header;
