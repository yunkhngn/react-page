import React from 'react'
import { Div
        } from "atomize";

import MetaTags from 'react-meta-tags';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Spacer from '../../components/Spacer/Spacer';
import Contact from '../../components/Contact/Contact';

const Homepage = () => {
  return (
      <Div
      m={{b: "2rem" }}
      bg="gray200"
      h="auto"
      p={{b:'1em'}}
      >
        <MetaTags>
            <title>Khoa Nguyễn - Home</title>
            <meta id="meta-description" name="description" content="Website vippzo nhất hệ mặt trời!" />
            <meta id="og-title" property="og:title" content="Khoa Nguyễn - Home" />
            <meta id="og-image" property="og:image" content="../../assets/macos-big-sur.jpg" />
        </MetaTags>
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
    )
}

export default Homepage