import Link from "next/link";
import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br />
          my Web React Portfolio
        </SectionTitle>
        <SectionText>
          I'm Riandry Connor , and the purpose of this portfolio is to show to
          the viewers of which kind of things I am able, like you will see in
          the projects
        </SectionText>
        <Button>
          <a
            href="https://riandrydevelop.github.io/Porfolio-web-design/assets/RiandryConnor(%20CV).pdf"
            target="_blank"
          >
            CV
          </a>
        </Button>
        <Button>
          <a
            href="https://riandrydevelop.github.io/Porfolio-web-design/"
            target="_blank"
          >
            Go to my web design portfolio
          </a>
        </Button>
        <Button>
          <a
            href="https://riandrydevelop.github.io/Certifications/"
            target="_blank"
          >
            My Certifications
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
