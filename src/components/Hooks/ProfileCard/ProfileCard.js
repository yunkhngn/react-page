import React from 'react'
import { Div, Text, Image, Button, Icon} from "atomize";
import Avatar from '../../../assets/Illustrate.svg';
import CV from '../../../assets/Khoa Nguyen CV.pdf';

import { useThemeState } from "../../../store";
import { SocialLink } from '../';
import { Template } from '../../TemplateWebsite/'

const openFacebook = () => {
  window.open('https://www.facebook.com/yun.khngn', '_blank');
}

const downloadCV = () => {
  window.open(CV, '_blank');
  
}

const ProfileCard = () => {
  const [state] = useThemeState();
  const theme = state === 'light'

  return (
    <Template>
          <Image src={Avatar} shadow="1" border="0.5em solid" borderColor={theme ? "#212121" : "gray200"} rounded="circle" m="auto" w={{ xs: "60%", md: "20%" }}/>
          <Text textSize="heading" textWeight="600">Khoa Nguyễn</Text>
          <Text textSize="caption" textColor={theme ? "#b3bac4" : "gray800"}>Senior Designer / Front-end Developer</Text>
          <Text textSize="paragraph" textColor={theme ? "#b3bac4" : "gray900"} overflow="" maxW="20em" m={{t:'1em', b:'auto',l:'auto', r:'auto'}} textWeight="500">Những ước mơ không chết chừng nào bạn còn nuôi dưỡng nó bằng niềm đam mê.</Text>
          <Div
            d="flex"
            justify="center"
            m={{b:'1em',t:'1em'}}
          >
            <SocialLink />
          </Div>
          <Div
          d="flex"
          justify="center"
          m={{t: "1rem"}}
          > 
             <Button
              suffix={
              <Icon
              name="Plus"
              size="16px"
              color="white"
              m={{ l: "1rem" }}
              />
              } 
              bg={theme ? "info800":"info600"}
              hoverBg={theme? "info900":"info700"}
              rounded="circle"
              p={{ r: "1rem", l: "1rem" }}
              m={{ r: "0.5rem" }}
              onClick={openFacebook}
              >Follow</Button>
              <Button
              suffix={
              <Icon
              name="Download"
              size="16px"
              color="gray900"
              m={{ l: "1rem" }}
              />
              }
              textColor="gray900" 
              bg="transparent"
              hoverBg={theme? "#262626" : "gray300"}
              border="1px solid"
              borderColor={theme? "#616161" :"gray500"}
              rounded="circle"
              p={{ r: "1rem", l: "1rem" }}
              onClick={downloadCV}
              >Resume</Button>
          </Div>
    </Template>
  )
}

export default ProfileCard