import React from 'react'
import { Div, Text, Input, Row, Col, Button, Textarea, Image, Icon
} from "atomize";
import Sample from '../../assets/wall.png';
import Avatar from '../../assets/avatar.png';

const Contact = () => {
    const [isHearted, setIsHearted] = React.useState(false);
    const Hearted = () => {
    setIsHearted(true);
    console.log('heart');
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
        <Input placeholder="Name" m={{b:'1em'}}></Input>
        <Input placeholder="Email" m={{b:'1em'}}></Input>
        <Input placeholder="Phone" m={{b:'1em'}}></Input>
        <Button d={{xs:"none", lg:"flex"}} w="100%" m={{b:'0.5em'}} bg="danger300" hoverBg="danger400" textColor="danger700">Submit</Button>
        <Text d={{xs:"none", lg:"flex"}} textSize="caption">This function is working properly. So don't spam my email. Thank you!</Text>
      </Div>
    </Col>
    <Col size={{ xs: 12, lg:5}}>
      <Div>
      <Input placeholder="Subject" m={{b:'1em'}}></Input>
      <Textarea placeholder="Message" m={{b:'1em'}} overflow="hidden" h="15em" maxH="15em" minH="15em"></Textarea>
      <Button d={{lg:"none"}} w="100%" m={{b:'0.5em'}} bg="danger300" hoverBg="danger400" textColor="danger700">Submit</Button>
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
                    <Text textSize="paragraph" textWeight="500" >Khoa Nguyễn</Text>
                    <Text textSize="tiny" textWeight="500" textAlign="left" m={{l:"1em"}}>Wrote on 18/04/2022</Text>
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