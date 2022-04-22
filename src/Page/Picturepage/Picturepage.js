import React from 'react'
import MetaTag from '../../components/MetaTag/MetaTag';
import { Div, Row, Col } from "atomize";
import PostProps from '../../components/PostProps/PostProps';
import Spacer from '../../components/Spacer/Spacer';
import AnimationTag from '../../components/AnimatedPage/AnimationTag';

const Picturepage = () => {
  return (
    <AnimationTag>
    <MetaTag titlePage="Pictures"/>
    <Div>
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