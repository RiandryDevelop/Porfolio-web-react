import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, ButtonsWrapper } from "./HeroStyles";
import { useTranslation } from "next-i18next";

const Hero = () => {
 const { t } = useTranslation("common");


  return(
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        {t("hero.title")}
      </SectionTitle>

      <SectionText>
       {t("hero.subtitle")}
      </SectionText>

      <ButtonsWrapper>
        <Button primary>
          <a href="#projects">{t("hero.ctaProjects")}</a>
        </Button>

        <Button>
          <a
            href="/images/RiandryConnorCV_EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
           {t("hero.ctaCV")}
          </a>
        </Button>
      </ButtonsWrapper>
    </LeftSection>
  </Section>
  );
};

export default Hero;
