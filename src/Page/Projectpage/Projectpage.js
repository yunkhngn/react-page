import React from 'react'

import { PageTemplate, AnimationTag, MetaTag, Template } from '../../components/TemplateWebsite';
import { OldPage } from '../../components/Hooks';

const Projectpage = () => {
  return (
    <AnimationTag>
    <MetaTag titlePage="Projects"/>
      <PageTemplate>
        <Template>
          This is the Projects gallery page.<br/>I haven't done it yet! But I will soon!
        </Template>
        <OldPage/>
      </PageTemplate>
    </AnimationTag>
  )
}

export default Projectpage