import React from "react";
import { DiFirebase, DiReact, DiAngularSimple, DiZend, DiAndroid, DiNetmagazine, DiNodejs } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { useTranslation } from "next-i18next";

const Technologies = () => {
const {t} = useTranslation("common");

 return(
 <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>{t("technologies.title")}</SectionTitle>
    <SectionText>
      {t("technologies.subtitle")}
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiAngularSimple size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            {t("technologies.frontendDesc")}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
                    <DiFirebase size="3rem" />
                    <DiNetmagazine size="3rem" />
                    <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            {t("technologies.backendDesc")}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            {t("technologies.uiuxDesc")}
          </ListParagraph>
        </ListContainer>
            </ListItem>
       <ListItem>
        <picture>
        <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
        <ListTitle>MOBILE</ListTitle>
        <ListParagraph>
         {t("technologies.mobileDesc")}
         </ListParagraph>
         </ListContainer>
       </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
 );
};

export default Technologies;
