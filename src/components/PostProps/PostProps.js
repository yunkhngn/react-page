import React from 'react'
import { Div, Text, Image, Icon
} from "atomize";
import Sample from '../../assets/wall.png';
import Avatar from '../../assets/Illustrate.svg';
import {  useThemeState } from "../../store";

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

const PostProps = () => {
    const [isHearted, setIsHearted] = React.useState(false);
    const dateNow = getCurrentDate();

    const [state] = useThemeState();
    const theme = state === 'light'

    const Hearted = () => {
        setIsHearted(!isHearted);
    };

    return (
    <Div>
        <Div bg={theme ? "#1c1c21":'white'}
        w='100%'
        border="1px solid"
        borderColor={theme ? "#262626":'gray300'}
        rounded="xl"
        >
            <Image src={Sample} rounded={{t:"xl"}} h='auto'></Image>
            <Div d="flex" m='auto' justify="space-between" align="center">
                <Div d="flex" justify="left" align="center">
                <Image src={Avatar} rounded={{t:"xl"}} w={{xs:"7%", lg:"10%"}} h={{xs:"5%", lg:"10%"}} m={{r:"1em", l:"1em", b:"0.5em"}}></Image>
                <Text textColor={theme ? "#b9b9b9" : "dark"} textSize="paragraph" textWeight="500" m={{b:'0.5em'}} >A rainy day...</Text>
                </Div>
                <Icon name={isHearted ? "HeartSolid" : "Heart"} color={isHearted ? "danger700" : "gray800"} size="1em" m={{b:'0.5em',r:'0.5em'}} onClick={Hearted}></Icon>
            </Div>
      </Div>
      <Div 
      d="flex"
      justify="space-between" 
      align="center"
      bg={theme ? "#1c1c21":'white'}
      w='100%'
      border="1px solid"
      borderColor={theme ? "#262626":'gray300'}
      rounded="xl"
      m={{t:'1em'}}
      p='0.5em'
      >
        <Div d="flex" justify="left" align="center">
          <Div>
              <Text textColor={theme ? "#b9b9b9" : "dark"} textSize="paragraph" textWeight="500" m={{r:"1.5em"}} >Khoa Nguyễn</Text>
              <Text textColor={theme ? "#b9b9b9" : "dark"} textSize="tiny" textWeight="500" textAlign="left" m={{l:"3em"}}>Published on {dateNow}</Text>
          </Div>
          </Div>
              <Icon name="Edit" color="gray800" size="1em" ></Icon>
          </Div>
    </Div>
  )
}

export default PostProps