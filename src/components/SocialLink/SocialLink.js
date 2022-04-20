import React from 'react'
import {Div, Button, Icon} from 'atomize'

const SocialLink = () => {
  return (
    <Div
    d="flex"
    >
        <Button
              h="2.5rem"
              w="2.5rem"
              bg="info300"
              hoverBg="info400"
              rounded="circle"
              m={{ l: "0.5rem" }}
              onClick={ () => {window.open('https://www.facebook.com/yun.khngn', '_blank')} }
              >
              <Icon name="Facebook" size="20px" color="info700" />
             </Button>
              <Button
              h="2.5rem"
              w="2.5rem"
              bg="warning300"
              hoverBg="warning400"
              rounded="circle"
              m={{ l: "0.5rem" }}
              onClick={ () => {window.open('https://www.instagram.com/yun.khngn_', '_blank')} }
              >
              <Icon name="Instagram" size="20px" color="warning700" />
             </Button>
              <Button
              h="2.5rem"
              w="2.5rem"
              bg="gray300"
              hoverBg="gray400"
              rounded="circle"
              m={{ l: "0.5rem" }}
              onClick={ () => {window.open('https://github.com/yunkhngn', '_blank')} }
              >
              <Icon name="Github" size="20px" color="gray900" />
             </Button>
             <Button
              h="2.5rem"
              w="2.5rem"
              bg="brand300"
              hoverBg="brand400"
              rounded="circle"
              m={{ l: "0.5rem" }}
              onClick={ () => {window.open('https://www.behance.net/yunkhngn', '_blank')} }
              >
              <Icon name="Behance" size="20px" color="brand700" />
             </Button>
             <Button
              h="2.5rem"
              w="2.5rem"
              bg="success300"
              hoverBg="success400"
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