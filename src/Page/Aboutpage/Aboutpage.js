import React from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Contact from '../../components/Contact/Contact';
import AnimationTag from '../../components/AnimatedPage/AnimationTag';
import MetaTag from '../../components/MetaTag/MetaTag';
import Old from '../../components/Old/Old';
import Navbutton from '../../components/Navbutton/Navbutton';
import Aboutme from '../../components/Aboutme/Aboutme';

const Aboutpage = () => {
  return (
    <AnimationTag>
      <MetaTag titlePage="About"/>
      <PageTemplate>
        <ProfileCard/>
        <Old/>
        <Aboutme/>
        <Contact/>
        <Navbutton/>
      </PageTemplate>
    </AnimationTag>
  )
}

export default Aboutpage