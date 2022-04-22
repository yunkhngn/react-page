import React from 'react'
import MetaTag from '../../components/MetaTag/MetaTag';
import { Div } from "atomize";
import AnimationTag from '../../components/AnimatedPage/AnimationTag';

const Projectpage = () => {
  return (
    <AnimationTag>
    <MetaTag titlePage="Projects"/>
    <Div>
      This is the projects page!
    </Div>
    </AnimationTag>
  )
}

export default Projectpage