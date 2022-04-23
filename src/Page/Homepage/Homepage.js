import React from 'react'
import { Div, ThemeProvider
} from "atomize";

import Old from '../../components/Old/Old'
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Spacer from '../../components/Spacer/Spacer';
import Contact from '../../components/Contact/Contact';
import AnimationTag from '../../components/AnimatedPage/AnimationTag';
import MetaTag from '../../components/MetaTag/MetaTag';
import Navbutton from '../../components/Navbutton/Navbutton';

const Homepage = () => {
  return (
    <AnimationTag>
    <MetaTag titlePage="Home"/>
    <ThemeProvider> 
    <Div
      m={{b: "2rem" }}
      bg="gray200"
      h="auto"
      p={{b:'1em'}}
      >
        <Spacer/>
          <ProfileCard/>
        <Spacer/>
          <Old/>
        <Spacer/>
          <Contact/>
        <Spacer/>
          <Navbutton/>
      </Div>
    </ThemeProvider>
    </AnimationTag>
    )
}

export default Homepage