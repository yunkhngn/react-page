import React from 'react'
import { Div, Text, Image, Button, Icon
} from "atomize";
import Avatar from '../../assets/avatar.png';

const openFacebook = () => {
  window.open('https://www.facebook.com/yun.khngn', '_blank');
}
const openMessenger = () => {
  window.open('https://m.me/yun.khngn', '_blank');
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
          <Text textSize="paragraph" maxW="25em" m="auto">Tương lai thuộc về những người tin vào vẻ đẹp trong chính những giấc mơ, hoài bão to lớn của mình...</Text>
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
              bg="info700"
              hoverBg="info600"
              rounded="circle"
              p={{ r: "1.5rem", l: "1rem" }}
              m={{ r: "0.5rem" }}
              onClick={openFacebook}
              >Follow</Button>
              <Button
              suffix={
              <Icon
              name="Message"
              size="16px"
              color="gray900"
              m={{ l: "1rem" }}
              />
              }
              textColor="gray900" 
              bg="white"
              hoverBg="gray100"
              border="1px solid"
              borderColor="gray500"
              rounded="circle"
              p={{ r: "1.5rem", l: "1rem" }}
              onClick={openMessenger}
              >Message</Button>
          </Div>
        </Div>
  )
}

export default ProfileCard