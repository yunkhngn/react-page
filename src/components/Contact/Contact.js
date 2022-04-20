import React, {useEffect, useState} from 'react'
import { Div, Text, Input, Row, Col, Button, Textarea, Image, Icon
} from "atomize";
import Sample from '../../assets/wall.png';
import Avatar from '../../assets/avatar.png';

const Contact = () => {
    const [isHearted, setIsHearted] = React.useState(false);
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState(true);

    const Hearted = () => {
    if (isHearted === false) {
        setIsHearted(true);
        console.log("I love you!!!")
    } else {
        setIsHearted(false);
        console.log("Oops!!!")
    }
    };

    const getCurrentDate = () => {
        const date = new Date();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        if (minutes < 10) {
          return `${hour}:0${minutes} | ${day}/${month}/${year}`;
        } else {
          return `${hour}:${minutes} | ${day}/${month}/${year}`;
        }

    }
    const [dateNow, setDateNow] = React.useState(getCurrentDate());

    useEffect (() => {
        setInterval(() => {
            setDateNow(getCurrentDate());
        }, 1000);
    }, [])
    
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
        date: dateNow
      }
      console.log(data);
      }
    }
  return (
    <Div
        bg='white'
        w='90%'
        m='auto'
        p="2em"
        border="1px solid"
        borderColor="gray300"
        rounded="xl"
    >
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
      <Div bg='white'
        w='100%'
        border="1px solid"
        borderColor="gray300"
        rounded="xl"
        >
            <Image src={Sample} rounded={{t:"xl"}} h='auto'></Image>
            <Div d="flex" m='auto' justify="space-between" align="center">
                <Div d="flex" justify="left" align="center">
                <Image src={Avatar} rounded={{t:"xl"}} w={{xs:"5%", lg:"10%"}} h={{xs:"5%", lg:"10%"}} m={{r:"1em", l:"1em", b:"0.5em"}}></Image>
                <Text textSize="paragraph" textWeight="500" m={{b:'0.5em'}} >Khoa Nguyễn</Text>
                </Div>
                <Icon name={isHearted ? "HeartSolid" : "Heart"} color={isHearted ? "danger700" : "gray800"} size="1em" m={{b:'0.5em',r:'0.5em'}} onClick={Hearted} disable={isHearted}></Icon>
            </Div>
      </Div>
      <Div 
      d="flex"
      justify="space-between" 
      align="center"
      bg='white'
      w='100%'
      border="1px solid"
      borderColor="gray300"
      rounded="xl"
      m={{t:'1em'}}
      p='0.5em'
      >
        <Div d="flex" justify="left" align="center">
          <Div>
              <Text textSize="paragraph" textWeight="500" m={{r:"1.5em"}} >Khoa Nguyễn</Text>
              <Text textSize="tiny" textWeight="500" textAlign="left" m={{l:"3em"}}>Published on {dateNow}</Text>
          </Div>
          </Div>
              <Icon name="Edit" color="gray800" size="1em" ></Icon>
          </Div>
    </Col>
    </Row>
    </Div>
  )
}

export default Contact