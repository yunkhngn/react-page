import React from 'react'
import { Div } from 'atomize'
import Spacer from '../Spacer/Spacer'

const Template = ({children}) => {
  return (
    <div>
    <Div
    bg='white'
    w='90%'
    m='auto'
    p="2em"
    border="1px solid"
    borderColor="gray300"
    rounded="xl"
    > 
    {children}
    </Div>
    <Spacer/>
    </div>
  )
}

export default Template