import React from 'react'
import { Div, Text, Image, Button, Icon
} from "atomize";
import Avatar from '../../assets/avatar.png';
import CV from '../../assets/Khoa Nguyen CV.pdf';

const openFacebook = () => {
  window.open('https://www.facebook.com/yun.khngn', '_blank');
}
const openMessenger = () => {
  window.open('https://m.me/yun.khngn', '_blank');
}
const downloadCV = () => {
  window.open(CV, '_blank');
  
}

const ProfileCard = () => {
  return (
    <Div
        bg='white'
        w='90%'
        m='auto'
        p="2em"
        border="1px solid"
        borderColor="gray300"
        rounded="xl"
        >
          <Image className="image" src={Avatar} w={{ xs: "60%", md: "20%" }} shadow="1" border="0.5em solid" borderColor="gray200" rounded="circle"/>
          <Text textSize="heading" textWeight="600">Khoa Nguyễn</Text>
          <Text textSize="caption" textColor="gray800">Senior Designer / Front-end Developer</Text>
          <Text textSize="paragraph" textColor="gray900"  maxW="25em" m={{t:'1em', b:'auto',l:'auto', r:'auto'}} textWeight="500">"Tương lai thuộc về những người tin vào vẻ đẹp trong chính những giấc mơ, hoài bão to lớn của mình..."</Text>
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
              bg="info600"
              hoverBg="info700"
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
              bg="white"
              hoverBg="gray00"
              border="1px solid"
              borderColor="gray500"
              rounded="circle"
              p={{ r: "1rem", l: "1rem" }}
              onClick={downloadCV}
              >Resume</Button>
              <Button
              h="2.5rem"
              w="2.5rem"
              bg="success300"
              hoverBg="success400"
              rounded="circle"
              m={{ l: "0.5rem" }}
              onClick={openMessenger}
              >
              <Icon name="MessageSolid" size="20px" color="success700" />
             </Button>
          </Div>
        </Div>
  )
}

export default ProfileCard