import React from 'react'
import { Div, Text, Image, Button, Icon
        } from "atomize";
import Avatar from '../../assets/avatar.png';
import Spacer from '../../components/Spacer/Spacer';

const Homepage = () => {
  return (
      <Div
      m={{b: "2rem" }}
      bg="gray200"
      >
        <Spacer/>
        <Div
        bg='white'
        w='90%'
        m='auto'
        p="2em"
        border="1px solid"
        borderColor="gray300"
        rounded="xl"
        shadow="1"
        >
          <Image className="image" src={Avatar} w={{ xs: "60%", md: "20%" }} shadow="1" rounded="circle"/>
          <Text textSize="heading" textWeight="600">Khoa Nguyễn</Text>
          <Text textSize="caption" textColor="gray800">Front-end Developer</Text>
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
              >Message</Button>
          </Div>
        </Div>
        <Spacer/>
        <Div
        bg='white'
        w='90%'
        m='auto'
        p="2em"
        border="1px solid"
        borderColor="gray300"
        rounded="xl"
        shadow="1"
        >
          Website đang trong giai đoạn phát triển!
        </Div>
        <Spacer/>
      </Div>
    )
}

export default Homepage