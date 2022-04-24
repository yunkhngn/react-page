import React from 'react'

import { PageTemplate, AnimationTag, MetaTag } from '../../components/TemplateWebsite';

const Picturepage = () => {
  return (
    <AnimationTag>
    <MetaTag titlePage="Pictures"/>
      <PageTemplate>
        This is the Picture gallery page.
      </PageTemplate>
    </AnimationTag>
  )
}

export default Picturepage