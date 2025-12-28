import React, { useMemo } from "react"; // 1. Importamos useMemo
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

const Projects = () => {
  const { query } = useSearch();

  const filteredProjects = useMemo(() => {
    const searchTrimmed = (query || "").trim().toLowerCase();

    if (!searchTrimmed) {
      return projects;
    }

    return projects.filter((project) => {
      const title = (project.title || "").toLowerCase();
      const tags = (project.tags || []).join(" ").toLowerCase();
      
      return title.includes(searchTrimmed) || tags.includes(searchTrimmed);
    });
  }, [query]);

  const isSearching = query && query.trim() !== "";

  return (
    <Section nopadding id="projects">
      <SectionTitle main>Casos de estudio</SectionTitle>

      {isSearching && (
        <p style={{ color: "#9cc9e3", marginBottom: "2rem" }}>
          Resultados para “{query}”
        </p>
      )}

      {/* Mensaje de no resultados corregido */}
      {filteredProjects.length === 0 && (
        <p style={{ opacity: 0.6, textAlign: 'center', marginTop: '2rem' }}>
          No se encontraron casos de estudio que coincidan con "{query}".
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
                <Img src={p.image} alt={p.title} />
                <TitleContent>
                  <HeaderThree title>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>
                  <strong>Problema:</strong> {p.problem}
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