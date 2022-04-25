import React from 'react'

import { PageTemplate, AnimationTag, MetaTag, Template } from '../../components/TemplateWebsite';
import { OldPage } from '../../components/Hooks';

const Picturepage = () => {
  return (
    <AnimationTag>
    <MetaTag titlePage="Pictures"/>
      <PageTemplate>
        <Template>
          This is the Pictures gallery page.<br/>I haven't done it yet! But I will soon!
        </Template>
        <OldPage/>
      </PageTemplate>
    </AnimationTag>
  )
}

export default Picturepage