import React from 'react'
import MetaTag from '../../components/MetaTag/MetaTag';
import AnimationTag from '../../components/AnimatedPage/AnimationTag';
import Navbutton from '../../components/Navbutton/Navbutton';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

const Picturepage = () => {
  return (
    <AnimationTag>
    <MetaTag titlePage="Pictures"/>
      <PageTemplate>
        This is the Picture gallery page.
        <Navbutton/>
      </PageTemplate>
    </AnimationTag>
  )
}

export default Picturepage