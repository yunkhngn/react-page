import React, {useState} from 'react'
import { Div, Text, Input, Row, Col, Button, Textarea
} from "atomize";
import PostProps from '../PostProps/PostProps';
import Template from '../Template/Template'

const Contact = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState(true);
    
    const setStateOfInput = () => {
      setIsValid(false);
        setTimeout(() => {
          setIsValid(true);
        }, 2000);
    }    
    const submit = () => {

      if (name === '' || email === '' || phone === '' || subject === '' || message === '') {
        setStateOfInput();
        
      }
      else if (email.indexOf('@') === -1) {
        setStateOfInput();
        
      }
      else if (phone.length !== 10) {
        setStateOfInput();
        
      }
      else if (message.length < 10) {
        setStateOfInput();
        
      }
      else {
       
        setIsValid(true);
      const data = {
        name,
        email,
        phone,
        subject,
        message,
      }
      console.log(data);
      }
    }
  return (
    <Template>
    <Text textSize="heading" textWeight="600" m={{b:'1em'}}>Contact me</Text>
    <Row>
    <Col size={{ xs: 12, lg: 3 }}>
      <Div>
        <Input borderColor={isValid ? "gray500" : "brand900"} value={name} onInput={e => setName(e.target.value)} placeholder="Name" m={{b:'1em'}}></Input>
        <Input borderColor={isValid ? "gray500" : "brand900"} value={email} onInput={e => setEmail(e.target.value)} placeholder="Email" m={{b:'1em'}}></Input>
        <Input borderColor={isValid ? "gray500" : "brand900"} value={phone} onInput={e => setPhone(e.target.value)} placeholder="Phone" m={{b:'1em'}}></Input>
        <Button onClick={submit} d={{xs:"none", lg:"flex"}} w="100%" m={{b:'0.5em'}} bg="danger300" hoverBg="danger400" textColor="danger700">Submit</Button>
        <Text d={{xs:"none", lg:"flex"}} textSize="caption">This function is working properly. So don't spam my email. Thank you!</Text>
      </Div>
    </Col>
    <Col size={{ xs: 12, lg:5}}>
      <Div>
      <Input borderColor={isValid ? "gray500" : "brand900"} value={subject} onInput={e => setSubject(e.target.value)} placeholder="Subject" m={{b:'1em'}}></Input>
      <Textarea borderColor={isValid ? "gray500" : "brand900"} value={message} onInput={e => setMessage(e.target.value)} placeholder="Message" m={{b:'1em'}} overflow="hidden" h="15em" maxH="15em" minH="15em"></Textarea>
      <Button onClick={submit} d={{lg:"none"}} w="100%" m={{b:'0.5em'}} bg="danger300" hoverBg="danger400" textColor="danger700">Submit</Button>
       <Text d={{lg:"none"}} textSize="caption" m={{b:'0.5em'}}>This function is working properly. So don't spam my email. Thank you!</Text>
      </Div>
    </Col>
    <Col size={{ xs: 12, lg: 4 }}>
      <PostProps />
    </Col>
    </Row>
    </Template>
  )
}

export default Contact