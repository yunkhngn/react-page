import React from 'react'
import MetaTag from '../../components/MetaTag/MetaTag';
import AnimationTag from '../../components/AnimatedPage/AnimationTag';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

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