import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useDebounce } from "../../hooks/useDebounce";

import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
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
    <Section nopadding id="projects">
      <GridContainer>
      <SectionTitle main>{t("caseStudies.title")}
      </SectionTitle>
            {/* 🔍 Search */}
            <SearchWrapper>
            <SearchInput
            placeholder={t("nav.searchPlaceholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
            </SearchWrapper>
      </GridContainer>


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
                  <HeaderThree $isTitle>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>
                  <strong>{t("caseStudies.problem")}:</strong> {t(`Projects.items.${p.slug}.problem`)}
                </CardInfo>
                <TagList>
                  {p.tags.map((t, i) => (
                    <Tag key={i}>{t}</Tag>
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