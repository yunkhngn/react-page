import React from 'react'
import { Div } from 'atomize'
import { useThemeState } from "../../../store";
import { useLocation } from 'react-router-dom'
import { Navbutton } from '../../Hooks/';

const PageTemplate = ({children}) => {
  const [state] = useThemeState();
  const theme = state === 'light'
  
  const location = useLocation()
  const path = location.pathname
  const displayNav = path === '/' || path === '/about' || path === '/projects' || path === '/pictures'
  return (
    <Div
    bg={theme ? "#212121" : "gray200"}
    h="auto"
    p={{t:'1em'}}
    textColor={theme ? "#b9b9b9" : "dark"}
    >
    {children}
    <Div d={displayNav ? null : "none"}>
      <Navbutton/>
    </Div>
    </Div>
  )
}

export default PageTemplate