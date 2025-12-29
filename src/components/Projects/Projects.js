import React, { useMemo } from "react";
import { motion } from "framer-motion";
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
} from "./ProjectsStyles";
import Link from "next/link";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { cardVariants } from "../../styles/animations/variants";
import { projects } from "../../constants/constants";
import { useSearch } from "../../context/SearchContext";
import { useTranslation } from "next-i18next";

const Projects = () => {
  const { query } = useSearch();
   const { t } = useTranslation("common");

  const filteredProjects = useMemo(() => {
    const searchTrimmed = (query || "").trim().toLowerCase();

    if (!searchTrimmed) {
      return projects;
    }

    return projects.filter((project) => {
      // const title = (project.title || "").toLowerCase();
      // const tags = (project.tags || []).join(" ").toLowerCase();
      const title = t(`Projects.items.${p.slug}.title`);
const problem = t(`Projects.items.${p.slug}.problem`);

      
      return title.includes(searchTrimmed) || tags.includes(searchTrimmed);
    });
  }, [query]);

  const isSearching = query && query.trim() !== "";

  return (
    <Section nopadding id="projects">
      <SectionTitle main>{t("caseStudies.title")}</SectionTitle>

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
                  <HeaderThree title>{t(`Projects.items.${p.slug}.title`)}</HeaderThree>
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