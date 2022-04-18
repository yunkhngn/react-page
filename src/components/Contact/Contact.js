import React from 'react'
import { Div, Text, Input, Row, Col, Button, Textarea, Image, Icon
} from "atomize";
import Sample from '../../assets/sample.jpg';
import Avatar from '../../assets/avatar.png';
const Contact = () => {
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
        <Input placeholder="Name" m={{b:'1em'}}></Input>
        <Input placeholder="Email" m={{b:'1em'}}></Input>
        <Input placeholder="Phone" m={{b:'1em'}}></Input>
        <Button d={{xs:"none", md:"flex"}} w="100%" m={{b:'0.5em'}} bg="danger300" hoverBg="danger400" textColor="danger700">Submit</Button>
        <Text d={{xs:"none", md:"flex"}} textSize="caption">This function is working properly. So don't spam my email. Thank you!</Text>
      </Div>
    </Col>
    <Col size={{ xs: 12, md:5}}>
      <Div >
      <Input placeholder="Subject" m={{b:'1em'}}></Input>
      <Textarea placeholder="Message" h="14em" m={{b:'1em'}}></Textarea>
      <Button d={{md:"none"}} w="100%" m={{b:'0.5em'}} bg="danger300" hoverBg="danger400" textColor="danger700">Submit</Button>
       <Text d={{md:"none"}} textSize="caption" m={{b:'0.5em'}}>This function is working properly. So don't spam my email. Thank you!</Text>
      </Div>
    </Col>
    <Col size={{ xs: 12, lg: 4 }}>
      <Div bg='white'
        w='100%'
        border="1px solid"
        borderColor="gray300"
        rounded="xl"
        >
            <Image src={Sample} rounded={{t:"xl"}}></Image>
            <Div d="flex" m='auto' justify="space-between" align="center">
                <Div d="flex" justify="left" align="center">
                <Image src={Avatar} rounded={{t:"xl"}} w="10%" h="10%" m={{r:"1em", l:"1em", b:"0.5em"}}></Image>
                <Text textSize="paragraph" textWeight="500" m={{b:'0.5em'}} >Khoa Nguyễn</Text>
                </Div>
                <Icon name="Heart" size="1em" m={{b:'0.5em',r:'0.5em'}}></Icon>
            </Div>
      </Div>
    </Col>
    </Row>
    </Div>
  )
}

export default Contact