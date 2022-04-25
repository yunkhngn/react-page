import React from 'react'
import {TimelineHook} from '../'
import { Template } from '../../TemplateWebsite'
import { Div, Text, Row, Col } from 'atomize'
import Img from '../../../assets/Image/work-2.jpg'

const ExperienceRoad = [
    {
      id: 1,
      yearStart: "2016/04/12",
      title: "Graphic Designer",
      subtitle: "Freelancer",
      description: "I can design logos, banners, and other graphics using Photoshop, Illustrator, and InDesign.",
    },
    {
      id: 2,
      yearStart: "2019/12/07",    
      title: "UX/UI Designer",
      subtitle: "Freelancer",
      description: "I can design user interfaces using Figma, Sketch, and Adobe XD.",
    },
    {
      id: 3,
      yearStart: "2020/09/18",    
      title: "Media - Designer",
      subtitle: "Don News Agency",
      description: "I work for a club in school as a graphic designer. I helps publishing books, magazines and other media per year.",
    },
    {
      id: 4,
      yearStart: "2021/04/01",    
      title: "Software Engineer",
      subtitle: "Glints Vietnam",
      description: "I work on publishing web app for Glints Vietnam. I can develop web application using React, NodeJS, and MongoDB.",
    },
    {
      id: 5,
      yearStart: "2022/06/12",  
      title: "Founder/CEO",
      subtitle: "The Okyo",
      description: "I founded The Okyo, a company that sells designed clothes.",
    },
  ];

const CareerRoad = () => {
  return (
    <Template>
        <Text textSize="display1" textWeight="600" m={{b:'1em'}}>Career Road</Text>
        <Row>
          <Col size={{xs:'100%', md:'4'}}>
            <Div
            bgImg={Img}
            bgSize="cover"
            bgPos="center"
            h="100%"
            m={{r:'1em'}}
            d={{xs:'none', lg:'flex'}}
          />
          </Col>
          <Col size={{xs:'100%', md:'8'}}>
            <Div textAlign="left" w={{xs:"100%",md:"100%"}} m="auto" p={{t:"1em", b:"1em"}}>
                <TimelineHook ExperienceRoad={ExperienceRoad} />
            </Div>
          </Col>
        </Row>
    </Template>
  )
}

export default CareerRoad