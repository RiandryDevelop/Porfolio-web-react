import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, ButtonsWrapper } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        Construyo productos web <br />
        escalables y APIs listas <br />
        para producción
      </SectionTitle>

      <SectionText>
        Soy <strong>Riandry Connor</strong>, Full-Stack Developer con experiencia
        creando aplicaciones web, backends robustos y soluciones móviles
        para startups y empresas que necesitan crecer sin problemas técnicos.
      </SectionText>

      <ButtonsWrapper>
        <Button primary>
          <a href="#projects">Ver proyectos</a>
        </Button>

        <Button>
          <a
            href="/images/RiandryConnorCV_EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
        </Button>
      </ButtonsWrapper>
    </LeftSection>
  </Section>
);

export default Hero;
