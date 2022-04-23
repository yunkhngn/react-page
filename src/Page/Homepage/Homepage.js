import React from 'react'
import Old from '../../components/Old/Old'
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Contact from '../../components/Contact/Contact';
import AnimationTag from '../../components/AnimatedPage/AnimationTag';
import MetaTag from '../../components/MetaTag/MetaTag';
import Navbutton from '../../components/Navbutton/Navbutton';

const Homepage = () => {
  return (
    <AnimationTag>
      <MetaTag titlePage="Home"/>
      <PageTemplate>
          <ProfileCard/>
          <Old/>
          <Contact/>
          <Navbutton/>
      </PageTemplate>
    </AnimationTag>
    )
}

export default Homepage