import React from 'react'
import { Div
        } from "atomize";

import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Spacer from '../../components/Spacer/Spacer';

const Homepage = () => {
  return (
      <Div
      m={{b: "2rem" }}
      bg="gray200"
      h="200vh"
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
      </Div>
    )
}

export default Homepage