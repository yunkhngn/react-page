import React from 'react'
import { Div, ThemeProvider
} from "atomize";

import Old from '../../components/Old/Old'
import MetaTags from 'react-meta-tags';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Spacer from '../../components/Spacer/Spacer';
import Contact from '../../components/Contact/Contact';
import AnimationTag from '../../components/AnimatedPage/AnimationTag';

const Homepage = () => {
  return (
    <AnimationTag>
    <ThemeProvider>
    <MetaTags>
            <title>Khoa Nguyễn - Home</title>
            <meta id="meta-description" name="description" content="Khoa Nguyen is a software engineer in Hanoi, Vietnam. He enjoys building software with Reactjs and dealing with algorithms and data structures." />
            <meta id="og-title" property="og:title" content="Khoa Nguyễn - Home" />
            <meta id="og-image" property="og:image" content="../../assets/macos-big-sur.jpg" />
    </MetaTags>  
    <Div
      m={{b: "2rem" }}
      bg="gray200"
      h="auto"
      p={{b:'1em'}}
      transition="all 0.4s ease-in-out"
      >
        <Spacer/>
          <ProfileCard/>
        <Spacer/>
          <Old/>
        <Spacer/>
          <Contact/>
      </Div>
    </ThemeProvider>
    </AnimationTag>
    )
}

export default Homepage