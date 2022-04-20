import React from 'react'
import {Div, Button, Text} from 'atomize'

const Playground = () => {
  const scrollToTop = () =>{
    console.log('scrollToTop')
    window.scrollTo(0, 0);
  };  
  return (
    <Div>
      <Text>Click to scroll</Text>
      <Div h='200vh'></Div>
      <Button m='auto' onClick={scrollToTop}>Click to scroll</Button>
    </Div>
  )
}

export default Playground