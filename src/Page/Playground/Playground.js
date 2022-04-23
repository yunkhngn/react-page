import React from 'react'
import {Button, Div, scrollTo} from 'atomize'
// import Notfound from '../Notfound/Notfound'

const Playground = () => {
  // if (process.env.NODE_ENV === 'production') {
    
  //   return <Notfound/> 
  // }
  // else{
  return (
    <Div>
      <Div h="100vh" bg="blue100" d="flex" align="center" justify="center">
        <Button
            id="blueButton"
            onClick={() => scrollTo("#yellowButton")}
            bg="info700"
          >
            Scroll To Yellow Button
        </Button>
      </Div>
      <Div h="100vh" bg="blue100" d="flex" align="center" justify="center">
        <Button
            id="yellowButton"
            onClick={() => scrollTo("#blueButton", 100, 0, 800)}
            bg="warning700"
          >
            Scroll To Blue Button
        </Button>
      </Div>
    </Div>
  )
}
// }
export default Playground