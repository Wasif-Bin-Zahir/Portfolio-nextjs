import React from 'react';
import { DiDatabase, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
  <SectionDivider></SectionDivider>
  <br/>
  <SectionTitle>Services We Provide</SectionTitle>
  <SectionText>
    We worked with a range of technologies in the web development world. From Back-end To Design
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem"></DiReact>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem"></DiFirebase>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Node.js and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size="3rem"></DiZend>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br/>
          tools like Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>

 </Section>
);

export default Technologies;
