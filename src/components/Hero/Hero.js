import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome to <br/>
      Martify360
    </SectionTitle>
    <SectionText>
      Martify360 is a digital solution for all of your need.We make everything you desire for your business.To know more email us.
    </SectionText>
    <Button onClick={()=>window.location = 'https://google.com'}>Email Us</Button>
  </LeftSection>
 </Section>
);

export default Hero;