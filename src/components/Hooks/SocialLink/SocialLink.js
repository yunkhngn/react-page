import React from 'react'
import {Div, Button, Icon} from 'atomize'
import { useThemeState } from "../../../store";

const SocialLink = () => {
  const [state] = useThemeState();
  const theme = state === 'light'
  return (
    <Div
    d="flex"
    m="auto"
    justify="center"
    >
        <Button
              h="2.5rem"
              w="2.5rem"
              bg={theme ? "#212121":"info300"}
              hoverBg={theme ? "#333333" : "info400"}
              rounded="circle"
              m={{ l: "0.5rem" }}
              onClick={ () => {window.open('https://www.facebook.com/yun.khngn', '_blank')} }
              >
              <Icon name="Facebook" size="20px" color="info700" />
             </Button>
              <Button
              h="2.5rem"
              w="2.5rem"
              bg={theme ? "#212121":"brand300"}
              hoverBg={theme ? "#333333" : "brand400"}
              rounded="circle"
              m={{ l: "0.5rem" }}
              onClick={ () => {window.open('https://www.instagram.com/yun.khngn_', '_blank')} }
              >
              <Icon name="Instagram" size="20px" color="brand700" />
             </Button>
              <Button
              h="2.5rem"
              w="2.5rem"
              bg={theme ? "#212121":"gray300"}
              hoverBg={theme ? "#333333" : "gray400"}
              rounded="circle"
              m={{ l: "0.5rem" }}
              onClick={ () => {window.open('https://github.com/yunkhngn', '_blank')} }
              >
              <Icon name="Github" size="20px" color="gray900" />
             </Button>
             <Button
              h="2.5rem"
              w="2.5rem"
              bg={theme ? "#212121":"warning300"}
              hoverBg={theme ? "#333333" : "warning400"}
              rounded="circle"
              m={{ l: "0.5rem" }}
              onClick={ () => {window.open('https://www.behance.net/yunkhngn', '_blank')} }
              >
              <Icon name="Behance" size="20px" color="warning700" />
             </Button>
             <Button
              h="2.5rem"
              w="2.5rem"
              bg={theme ? "#212121":"success300"}
              hoverBg={theme ? "#333333" : "success400"}
              rounded="circle"
              m={{ l: "0.5rem" }}
              onClick={ () => {window.open('https://m.me/yun.khngn', '_blank')} }
              >
              <Icon name="Message" size="20px" color="success700" />
             </Button>
    </Div>
  )
}

export default SocialLink