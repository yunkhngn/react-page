import React from 'react'
import { Div } from 'atomize'
import { useThemeState } from "../../../store";
import { Spacer } from '../../Hooks/'

const Template = ({children}) => {
  const [state] = useThemeState();
  const theme = state === 'light'
  
  return (
    <div>
    <Div
    bg={ theme ? '#1c1c21' : 'white'}
    w='90%'
    m='auto'
    p="2em"
    border="1px solid"
    borderColor={theme ? '#1c1c21' : 'gray200'}
    rounded="xl"
    > 
    {children}
    </Div>
    <Spacer/>
    </div>
  )
}

export default Template