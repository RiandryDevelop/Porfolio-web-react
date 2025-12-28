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

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
            "He trabajado con una variedad de tecnologías en el desarrollo web y móvil,
            incluyendo frameworks de front-end como React y Angular, así como tecnologías de back-end como Node.js y .Net.
            También tengo experiencia en el desarrollo de aplicaciones móviles utilizando Kotlin para Android y React Native para aplicaciones híbridas.
            Además, estoy familiarizado con herramientas de diseño UI/UX como Figma para crear interfaces de usuario atractivas y funcionales."
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
            Experiencia con<br />
            Reactjs,Angular
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
            Experiencia con <br />
            Nodejs,.Net
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
            Experiencia con <br />
            herramientas como Figma
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
         Experiencia con <br />
         Kotlin(android)/ReactNative(Hibrid) 
         </ListParagraph>
         </ListContainer>
       </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
