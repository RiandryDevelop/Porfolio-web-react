import React, { useState } from "react";
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
import { Section, SectionTitle,CTAButton } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Modal from "../Modal/Modal";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Section nopadding id="projects">
      <SectionTitle main>Case Studies</SectionTitle>

      <GridContainer>
        {projects.map((p, i) => (
          <BlogCard key={i} onClick={() => setSelected(p)}>
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
        ))}
      </GridContainer>



<Modal isOpen={!!selected} onClose={() => setSelected(null)}>
  {selected && (
    <>
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
        href="mailto:riandrydevsoffers@gmail.com?subject=Proyecto similar a Case Study"
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
