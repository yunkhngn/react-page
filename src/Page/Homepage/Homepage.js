import React from 'react'

import { ProfileCard, Contact, OldPage } from '../../components/Hooks';
import { PageTemplate, AnimationTag, MetaTag } from '../../components/TemplateWebsite';

const Homepage = () => {
  return (
    <AnimationTag>
      <MetaTag titlePage="Home"/>
      <PageTemplate>
          <ProfileCard/>
          <OldPage/>
          <Contact/>
      </PageTemplate>
    </AnimationTag>
    )
}

export default Homepage