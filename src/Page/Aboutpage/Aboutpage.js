import React from 'react'
import { Div
} from "atomize";

import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Spacer from '../../components/Spacer/Spacer';
import Contact from '../../components/Contact/Contact';
import AnimationTag from '../../components/AnimatedPage/AnimationTag';
import MetaTag from '../../components/MetaTag/MetaTag';

const Aboutpage = () => {
  return (
    <AnimationTag>
      <MetaTag titlePage="About"/>
      <Div
      m={{b: "2rem" }}
      bg="gray200"
      h="auto"
      p={{b:'1em'}}
      >
        <Spacer/>
        <ProfileCard/>
        <Spacer/>
        <Div
        bg='white'
        w='90%'
        m='auto'
        p="2em"
        border="1px solid"
        borderColor="gray300"
        rounded="xl"
        >
          Website đang trong giai đoạn phát triển!
        </Div>
        <Spacer/>
        <Contact/>
      </Div>
      </AnimationTag>
  )
}

export default Aboutpage