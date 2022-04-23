import React from 'react'
import MetaTag from '../../components/MetaTag/MetaTag';
import { Div } from "atomize";
import AnimationTag from '../../components/AnimatedPage/AnimationTag';
import Spacer from '../../components/Spacer/Spacer';
import Navbutton from '../../components/Navbutton/Navbutton';

const Projectpage = () => {
  return (
    <AnimationTag>
    <MetaTag titlePage="Projects"/>
    <Div
    m={{b: "2rem" }}
    bg="gray200"
    h="auto"
    p={{b:'1em'}}
    >
      This is the projects page!
      <Spacer/>
        <Navbutton/>
    </Div>
    </AnimationTag>
  )
}

export default Projectpage