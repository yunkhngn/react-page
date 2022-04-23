import React from 'react'
import { Div } from 'atomize'

const PageTemplate = ({children}) => {
  return (
    <Div
    m={{b: "2rem" }}
    bg="gray200"
    h="auto"
    p={{t:'1em'}}
    >
    {children}
    </Div>
  )
}

export default PageTemplate