import React from 'react'
import { Div, Text, Button, Icon } from "atomize";

const Maintenance = () => {
  return (
    <Div className="Mainternance"
    bg="info300"
    h='100vh'>
    <Div
    justify="center"
    textAlign="center"
    m='auto'
    p='5em'
    bg='gray200'
    >
        <Text textSize="display1" textWeight="600">SITE ARE CURRENTLY UNDER MAINTENANCE</Text>
        <Text textSize="heading">Please go back later!</Text>
        <Text textSize="subheader" m={{t:'2em'}}>For more information, please contact me:</Text>
        <Button
        suffix={
          <Icon
          name="LongRight"
          size="16px"
          color="white"
          m={{ l: "1rem" }}
          />
        }
        shadow="3"
        hoverShadow="4"
        m='1em auto'
        bg="info700"
        onClick={() => window.open("https://www.facebook.com/yun.khngn", "_blank")}
        >
        Contact Me
        </Button>
    </Div>
    </Div>
  )
}

export default Maintenance