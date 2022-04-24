import React from 'react'
import { Text, Button } from 'atomize'
import { Link } from 'react-router-dom'

import { PageTemplate, AnimationTag, MetaTag } from '../../components/TemplateWebsite';

const Notfound = () => {
  return (
    <AnimationTag>
    <MetaTag titlePage="404 Not found"/>
      <PageTemplate>
        <Text textSize="display3" textWeight="700"  m="auto">Oops!</Text>
        <Text textSize="subheader" textWeight="500" textColor="dark" w="15em" m="auto">We can't seem to find the page you are looking for!</Text>
        <Text m="auto" textWeight="500">Error code: 404</Text>
        <Text m={{t:'2em', b:"1em"}} textWeight="500">Click below to go back to the homepage</Text>
        <Link to='/'><Button m='auto' textColor="info800" bg="info300" hoverBg="info400">Go back</Button></Link>
      </PageTemplate>
    </AnimationTag>
  )
}

export default Notfound