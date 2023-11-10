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
          my Web Frameworks Portfolio
        </SectionTitle>
        <SectionText>
                    "I'm Riandry Connor, and this portfolio serves as a
                    showcase of my abilities and accomplishments,
                    as you'll witness in the showcased projects. My goal is to demonstrate years of expertise,
                    highlighting the scalability and sophistication of my portfolio's projects."
        </SectionText>
        <Button>
          <a
                        href="/images/Riandry Connor Fullstack Dev CV v0.2.pdf"
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
