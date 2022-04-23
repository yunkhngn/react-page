import React from 'react'
import {Div} from 'atomize'
import Notfound from '../Notfound/Notfound'

const Playground = () => {
  if (process.env.NODE_ENV === 'production') {
    
    return <Notfound/> 
  }
  return (
    <Div>
     
    </Div>
  )
}

export default Playground