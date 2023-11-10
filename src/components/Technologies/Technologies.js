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
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
            "I possess extensive experience working with a diverse array of technologies
            in the web development domain, encompassing both front-end, back-end,
            and design aspects, along with mobile development and the integration
            of DevOps practices."
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
            Experience with <br />
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
            Experience with <br />
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
            Experience with <br />
            tools like Figma
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
         Experience with <br />
         Kotlin(android)/ReactNative(Hibrid) 
         </ListParagraph>
         </ListContainer>
       </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
