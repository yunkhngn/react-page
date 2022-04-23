import React from 'react'
import { Div } from 'atomize'
import Navbutton from '../../components/Navbutton/Navbutton'

import {useLocation} from 'react-router-dom'

const PageTemplate = ({children}) => {
  const location = useLocation()
  const path = location.pathname
  const displayNav = path === '/' || path === '/about' || path === '/projects' || path === '/pictures'
  return (
    <Div
    m={{b: "2rem" }}
    bg="gray200"
    h="auto"
    p={{t:'1em'}}
    >
    {children}
    <Div d={displayNav ? null : "none"}>
      <Navbutton/>
    </Div>
    </Div>
  )
}

export default PageTemplate