import React from 'react'
import MetaTag from '../../components/MetaTag/MetaTag';
import AnimationTag from '../../components/AnimatedPage/AnimationTag';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

const Projectpage = () => {
  return (
    <AnimationTag>
    <MetaTag titlePage="Projects"/>
      <PageTemplate>
        This is the Projects page.
      </PageTemplate>
    </AnimationTag>
  )
}

export default Projectpage