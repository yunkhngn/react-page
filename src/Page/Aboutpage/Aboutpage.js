import React from 'react'

import { ProfileCard, Contact, OldPage, Aboutme, Experience } from '../../components/Hooks/';
import {PageTemplate, AnimationTag, MetaTag} from '../../components/TemplateWebsite';

const Aboutpage = () => {
  return (
    <AnimationTag>
      <MetaTag titlePage="About"/>
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

export default Aboutpage