import React from 'react'
import {Div} from 'atomize'
import Notfound from '../Notfound/Notfound'

const Playground = () => {
  if (process.env.NODE_ENV === 'production') {
    
    return <Notfound/> 
  }
  else{
    return (
      <Div>
        Lol who found this?
      </Div>
    )
  }
}
export default Playground