import React, { useState } from "react";
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
import { Section, SectionTitle} from "../../styles/GlobalComponents";
import CTAButton from "../../styles/GlobalComponents/CTAButton";
import { cardVariants } from "../../styles/animations/variants";
import CaseStudySEO from "../SEO/CaseStudySEO";
import { projects } from "../../constants/constants";
import Modal from "../Modal/Modal";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Section nopadding id="projects">
      <SectionTitle main>Case Studies</SectionTitle>

      <GridContainer
        as={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {projects.map((p, i) => (
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
        ))}
      </GridContainer>



<Modal isOpen={!!selected} onClose={() => setSelected(null)}>
  {selected && (
    <>
      <CaseStudySEO
      title={selected.title}
      description={selected.result}
      image={selected.image}
      slug={selected.slug}
    />
      <HeaderThree title>{selected.title}</HeaderThree>
      <Hr />

      <p><strong>Problema:</strong> {selected.problem}</p>
      <p><strong>Solución:</strong> {selected.solution}</p>
      <p><strong>Resultado:</strong> {selected.result}</p>

      <TagList>
        {selected.tags.map((t, i) => (
          <Tag key={i}>{t}</Tag>
        ))}
      </TagList>

<CTAButton
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href={`mailto:riandrydevsoffers@gmail.com?subject=Proyecto similar a ${selected.title}`}
>
  Quiero un proyecto similar
</CTAButton>

    </>
  )}
</Modal>

    </Section>
  );
};

export default Projects;
