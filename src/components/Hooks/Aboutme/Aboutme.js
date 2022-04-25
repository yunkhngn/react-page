import React from 'react'
import { Template } from '../../TemplateWebsite'
import { useThemeState } from "../../../store";
import { Div , Row, Col, Text, Button, Image} from 'atomize'
import './Aboutme.css'
import Img from '../../../assets/Image/work-4.jpg' 

const Aboutme = () => {
  const [state] = useThemeState();
  const theme = state === 'light'
  return (
    <Template>
      <Image src={Img} m={{xs:{b:'1em'}, md:null}} d={{md:'none'}}/>
      <Div p={{t:'1em', b:'1em'}}>
      <Row>
        <Col size={{ xs: 12, lg: 4 }}>
        <Div
          bgImg={Img}
          bgSize="cover"
          bgPos="center"
          h="100%"
          m={{r:'1em'}}
          d={{xs:'none', lg:'flex'}}
        />
        </Col>
        <Col size={{ xs: 12, lg: 8 }}>
          <Div m={{l:'1em'}}>
            <Div textColor={theme ? "white" : "dark"} m="auto" justify="center">
              <Div textColor={theme ? "white" : "dark"} textAlign="left" fontFamily="Lora" textSize={{md:"display3", xs:"3em"}} textWeight="400">
                <div className="spacing">
                "Software <span className={"highlight"+state}>Developer</span>,<br/>Front-end <span className={"highlight"+state}>Developer.</span><br/>Graphic, UX/UI,<br/>
                3D Model <span className={"highlight"+state}>Designer</span>,<br/>Founder of <span className={"highlight"+state}>The Okyo</span>."</div>
              </Div>
              <Text textAlign="left" fontFamily="Poppins, Arial, sans-serif" textWeight="450" textSize="subheader" m={{t:'1em', r:{md:'2em'}}}>
              As <strong>a Senior Designer and a Front-end Developer</strong>, I started my career as a freelancer at <strong>Facebook and Glints</strong>. After experiencing a lot by working independently, I've decided to take part in a new direction. 
              That's how I've been leading my professional path in <strong>the last five years</strong> alongside talented people on both agency and client sides.<br/>
               I'm highly motivated when translating the <strong>business objectives - and challenges - into a robust, consistent, and valuable digital endeavor. </strong>
              I'm at my best when involved from briefing to planning, brand to demand, optimization to evaluation.
              </Text>
              <Text textAlign="left" fontFamily="Poppins, Arial, sans-serif" textWeight="450" textSize="subheader" m={{t:'1em', r:{md:'2em'}}}>
                <strong>Experience & Skills:</strong>
                <br/>
                - 5 years of experience driving Designing - Developing by being a Freelancer.
                <br/>
                - Led web, app, social & media projects, liaising with stakeholders at all senior levels and 3rd parties.
                <br/>
                - Developing responsive websites, web apps, social media, and 3D models, films/videos, VFX.
                <br/>
                - Implemented content strategy & media plans ensuring adherence to brand identity, TOV, personas, look and feel, and business goals.
              </Text>
            </Div>
            <Button m={{t:'3em'}} bg={theme ? "warning800" : "#fdcb6e"} textWeight="700" textColor={theme ? "white" : "#333333"} hoverTextColor={theme ? "#333333" : "white"} onClick={() => {window.open("https://m.me/yun.khngn", "_blank");}}>Get in touch</Button>
          </Div>
        </Col>
      </Row>
      </Div>
    </Template>
  )
}

export default Aboutme