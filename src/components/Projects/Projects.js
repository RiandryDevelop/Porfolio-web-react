import React, { useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useDebounce } from "../../hooks/useDebounce";
import highlightText from "../../hooks/highlightText";
import { useRouter } from "next/router";

import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  HeaderArea,
  SearchHint,
  Hr,
  Tag,
  TagList,
  TitleContent,
  Img,
  SearchWrapper,
  SearchInput
} from "./ProjectsStyles";
import Link from "next/link";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { cardVariants } from "../../styles/animations/variants";
import { projects } from "../../constants/constants";
import { useSearch } from "../../context/SearchContext";
import { useTranslation } from "next-i18next";

const Projects = () => {
const { query, setQuery } = useSearch();
const debouncedQuery = useDebounce(query, 300);
const sectionRef = useRef(null);
const searchRef = useRef(null);
const router = useRouter();
const { q } = router.query;



useEffect(() => {
  if (typeof q === "string" && q !== query) {
    setQuery(q);
  }
}, [q]);

useEffect(() => {
  const search = query?.trim();

  router.replace(
    {
      pathname: router.pathname,
      query: search ? { q: search } : {},
    },
    undefined,
    { shallow: true }
  );
}, [query]);

useEffect(() => {
  if (q && searchRef.current) {
    searchRef.current.focus();
  }
}, []);

useEffect(() => {
  if (!debouncedQuery) return;

  sectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, [debouncedQuery]);

useEffect(() => {
  const handleKeyDown = (e) => {
    const isInput =
      document.activeElement?.tagName === "INPUT" ||
      document.activeElement?.tagName === "TEXTAREA";

    // "/" enfoca el buscador
    if (e.key === "/" && !isInput) {
      e.preventDefault();
      searchRef.current?.focus();
    }

    // ESC limpia búsqueda
    if (e.key === "Escape" && query) {
      setQuery("");
      searchRef.current?.blur();
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [query, setQuery]);

const { t } = useTranslation("common");

  const filteredProjects = useMemo(() => {
  const searchTrimmed = (query || "").trim().toLowerCase();

  if (!searchTrimmed) return projects;

  return projects.filter((p) => {
    const title = t(`Projects.items.${p.slug}.title`).toLowerCase();
    const problem = t(`Projects.items.${p.slug}.problem`).toLowerCase();
    const tags = p.tags.join(" ").toLowerCase();

    return (
      title.includes(searchTrimmed) ||
      problem.includes(searchTrimmed) ||
      tags.includes(searchTrimmed)
    );
  });
}, [debouncedQuery, t]);


  const isSearching = query && query.trim() !== "";

  return (
    <Section nref={sectionRef} nopadding id="projects">
  <HeaderArea>
    <SectionTitle main>{t("caseStudies.title")}</SectionTitle>

    <SearchWrapper>
      <SearchInput
        ref={searchRef}
        placeholder={t("nav.searchPlaceholder")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchHint>
        {t("Projects.Press")} <kbd>/</kbd> {t("Projects.ToSearch")} ·{" "}
        <kbd>ESC</kbd> {t("Projects.EscClear")}
      </SearchHint>
    </SearchWrapper>
  </HeaderArea>


      {isSearching && (
        <p style={{ color: "#9cc9e3", marginBottom: "2rem" }}>
          {t("caseStudies.resultsFor")} “{query}”
        </p>
      )}

      {/* Mensaje de no resultados corregido */}
      {filteredProjects.length === 0 && (
        <p style={{ opacity: 0.6, textAlign: 'center', marginTop: '2rem' }}>
          {t("caseStudies.noResults")} "{query}".
        </p>
      )}

      <GridContainer
        as={motion.section}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {filteredProjects.map((p) => (
          <div key={p.id}>
            <Link href={`/case-studies/${p.slug}`} passHref>
              <BlogCard
                as={motion.div}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <Img src={p.image} alt={t(`Projects.items.${p.slug}.title`)} />
                <TitleContent>
                  <HeaderThree $isTitle>
                  {highlightText(
                   t(`Projects.items.${p.slug}.title`),
                  debouncedQuery
                  )}
                  </HeaderThree>

                  <Hr />
                </TitleContent>
<CardInfo>
  <strong>{t("caseStudies.problem")}:</strong>{" "}
  {highlightText(
    t(`Projects.items.${p.slug}.problem`),
    debouncedQuery
  )}
</CardInfo>

                <TagList>
                 {p.tags.map((tag, i) => (
  <Tag key={i}>
    {highlightText(tag, debouncedQuery)}
  </Tag>
))}
                </TagList>
              </BlogCard>
            </Link>
          </div>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;