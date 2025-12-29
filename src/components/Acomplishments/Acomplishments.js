import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { useTranslation } from "next-i18next";



const Acomplishments = () => {
const {t} = useTranslation("common");
const data = [
  { number: +3, text: t("stats.years") },
  { number: +6, text: t("stats.projects") },
  { number: +8, text: t("stats.collabs") },
  { number: +8, text: t("stats.certs") },
];

return(
<Section>
    <SectionTitle>{t("stats.title")}</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>)
};

export default Acomplishments;
