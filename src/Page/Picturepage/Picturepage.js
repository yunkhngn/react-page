import React from 'react'
import MetaTags from 'react-meta-tags';
import { Div, Row, Col } from "atomize";
import PostProps from '../../components/PostProps/PostProps';
import Spacer from '../../components/Spacer/Spacer';
import AnimationTag from '../../components/AnimatedPage/AnimationTag';

const Picturepage = () => {
  return (
    <AnimationTag>
    <Div>
      <MetaTags>
            <title>Khoa Nguyễn - Pictures</title>
            <meta id="meta-description" name="description" content="Website vippzo nhất hệ mặt trời!" />
            <meta id="og-title" property="og:title" content="Khoa Nguyễn - Pictures" />
            <meta id="og-image" property="og:image" content="../../assets/macos-big-sur.jpg" />
      </MetaTags>
      <Div
      m={{b: "2rem" }}
      bg="gray200"
      h="auto"
      p={{b:'1em'}}
      >
        <Div
        bg='white'
        w='90%'
        m={{t:'1em', l:'auto', r:'auto'}}
        p="2em"
        h="100%"
        border="1px solid"
        borderColor="gray300"
        rounded="xl"
        >
          <Row>
            <Col size={{ xs: 12, md: 6 }}>
              <PostProps/>
              <Div d={{md:'none'}}>
                <Spacer/>
              </Div>
            </Col>
            <Col size={{ xs: 12, md: 6 }}>
              <PostProps/>
              <Div d={{md:'none'}}>
                <Spacer/>
              </Div>
            </Col>
          </Row>
          <Spacer/>
          <Row>
            <Col size={{ xs: 12, md: 6 }}>
              <PostProps/>
              <Div d={{md:'none'}}>
                <Spacer/>
              </Div>
            </Col>
            <Col size={{ xs: 12, md: 6 }}>
              <PostProps/>
              <Div d={{md:'none'}}>
                <Spacer/>
              </Div>
            </Col>
          </Row>
        </Div>  
      </Div>
    </Div>
    </AnimationTag>
  )
}

export default Picturepage