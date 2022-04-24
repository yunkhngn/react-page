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
              <Div textColor={theme ? "white" : "dark"} textAlign="left" fontFamily="Lora" textSize={{md:"display3", xs:"title"}} textWeight="400">
                <div className="spacing">
                "Software <span className={"highlight"+state}>Developer</span>,<br/>Front-end <span className={"highlight"+state}>Developer.</span><br/>Graphic, UX/UI,<br/>
                3D Model <span className={"highlight"+state}>Designer</span>,<br/>Founder of <span className={"highlight"+state}>The Okyo</span>."</div>
              </Div>
              <Text textAlign="left" fontFamily="Poppins, Arial, sans-serif" textWeight="450" textSize="subheader" m={{t:'1em'}}>
              Xin chào, mình là <strong>Khoa Nguyễn (yun.khngn)</strong>, mình đã có 5 năm kinh nghiệm và hiện tại đang là Founder/CEO của chuỗi thương hiệu <strong>The Okyo, 
              Software Developer, Graphic, UX/UI Designer, Front-end Developer!</strong> Mình chuyên về <strong>Công Nghệ Thông Tin, Đồ Hoạ, 3D</strong>, ngoài ra mình có chơi đàn Guitar, 
              có chút khiếu hội hoạ và chơi video games cũng như đang phát triển một tựa game đầu tay.
              </Text>
            </Div>
            <Button m={{t:'1em'}} bg={theme ? "warning800" : "#fdcb6e"} textWeight="700" textColor={theme ? "white" : "#333333"} hoverTextColor={theme ? "#333333" : "white"} onClick={() => {window.open("https://m.me/yun.khngn", "_blank");}}>Get in touch</Button>
          </Div>
        </Col>
      </Row>
      </Div>
    </Template>
  )
}

export default Aboutme