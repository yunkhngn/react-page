import React from 'react'
import Old from '../../components/Old/Old'
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Contact from '../../components/Contact/Contact';
import AnimationTag from '../../components/AnimatedPage/AnimationTag';
import MetaTag from '../../components/MetaTag/MetaTag';

const Homepage = () => {
  return (
    <AnimationTag>
      <MetaTag titlePage="Home"/>
      <PageTemplate>
          <ProfileCard/>
          <Old/>
          <Contact/>
      </PageTemplate>
    </AnimationTag>
    )
}

export default Homepage