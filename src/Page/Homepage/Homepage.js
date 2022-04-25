import React from 'react'
import { ProfileCard, Contact, OldPage, Experience, Aboutme } from '../../components/Hooks';
import { PageTemplate, AnimationTag, MetaTag } from '../../components/TemplateWebsite';

const Homepage = () => {
  return (
    <AnimationTag>
      <MetaTag titlePage="Home"/>
      <PageTemplate>
        <ProfileCard/>
        <OldPage/>
        <Aboutme/>
        <Experience/>
        <Contact/>
      </PageTemplate>
    </AnimationTag>
    )
}

export default Homepage