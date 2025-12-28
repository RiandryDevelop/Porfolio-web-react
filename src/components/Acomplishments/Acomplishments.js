import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: +3, text: "años de experiencia" },
  { number: +6, text: "proyectos con empresas" },
  { number: +8, text: "Colaboraciones con otros desarrolladores" },
  { number: +8, text: "Certificaciones en diferentes tecnologías" },
  { number: +8, text: "Proyectos de desarrollo full-stack" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Logros Profesionales</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
