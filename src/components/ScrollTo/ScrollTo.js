import React from 'react'
import { Div, Icon, scrollTo } from "atomize";

const ScrollTo = () => {
  return (
    <Div
    pos="absolute"
    bottom="15px"
    right="30px"
    bg="white"
    w="40px"
    h="40px"
    rounded="50%"
    shadow="0 16px 24px -2px rgba(0, 0, 0, 0.08)"
    border="1px solid rgba(255, 255, 255, 0.18);"
    justify="center"
    align="center"
    onClick={() => scrollTo("#top")}
    >
     <Icon name="UpArrow" color="black" size="20px"></Icon>
    </Div>
  )
}

export default ScrollTo