import React from 'react'
import { Div, Text, Button } from 'atomize'
import { Link } from 'react-router-dom'
import MetaTags from 'react-meta-tags';

const Notfound = () => {
  return (
    <Div textAlign="center" p='2em' bg="white" m={{b:'1em', r:"auto", l:'auto', t:'1em'}} w={{md:"40%", xs:"90%"}} rounded='md' border="1px solid" borderColor="gray300">
      <MetaTags>
            <title>Khoa Nguyễn - 404 Not found</title>
            <meta id="meta-description" name="description" content="Website vippzo nhất hệ mặt trời!" />
            <meta id="og-title" property="og:title" content="Khoa Nguyễn - 404 Not found" />
            <meta id="og-image" property="og:image" content="../../assets/macos-big-sur.jpg" />
      </MetaTags>
      <Text textSize="display3" textWeight="700"  m="auto">Oops!</Text>
      <Text textSize="subheader" textWeight="500" textColor="dark" w="15em" m="auto">We can't seem to find the page you are looking for!</Text>
      <Text m="auto" textWeight="500">Error code: 404</Text>
      <Text m={{t:'2em', b:"1em"}} textWeight="500">Click below to go back to the homepage</Text>
      <Button m='auto' textColor="white" bg="info300" hoverBg="info400"><Link to='/'>Go back</Link></Button>
    </Div>
  )
}

export default Notfound