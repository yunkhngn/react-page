import React from 'react'
import { ProfileCard, OldPage } from '../../components/Hooks';
import { PageTemplate, AnimationTag, MetaTag } from '../../components/TemplateWebsite';

const Homepage = () => {
  return (
    <AnimationTag>
      <MetaTag titlePage="Home"/>
      <PageTemplate>
        <ProfileCard/>
        <OldPage/>
      </PageTemplate>
    </AnimationTag>
    )
}

export default Homepage