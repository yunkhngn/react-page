import React from 'react'
import { Div, Text, Image, Button, Icon} from "atomize";
import Avatar from '../../../assets/Image/avatar.png';
import CV from '../../../assets/Khoa Nguyen CV.pdf';

import { useThemeState } from "../../../store";
import { SocialLink } from '../';
import { Template } from '../../TemplateWebsite/'

const openFacebook = () => {
  window.open('https://www.facebook.com/yun.khngn', '_blank');
}

const downloadCV = () => {
  window.open(CV, '_blank');
  
}

const ProfileCard = () => {
  const [state] = useThemeState();
  const theme = state === 'light'
  const quotes = [
    {quote: '“Find out what you like doing best, and get someone to pay you for doing it.”', author: 'Katharine Whitehorn'},
    {quote: '“If opportunity doesn’t knock, build a door.”', author: 'Milton Berle'},
    {quote: '“The only way to do great work is to love what you do.”', author: 'Steve Jobs'},
    {quote: '“If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.”', author: 'Sheryl Sandberg'},
    {quote: '“The best time to plant a tree was 20 years ago. The second best time is now.”', author: 'Chinese Proverb'},
    {quote: '“A mind that is stretched by new experiences can never go back to its old dimensions.”', author: 'Oliver Wendell Holmes, JR.'},
    {quote: '“When the grass looks greener on the other side of the fence, it may be that they take better care of it there.”', author: 'Cecil Selig'},

  ]
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const author = quote.author;
  return (
    <Template>
          <Image src={Avatar} shadow="1" border="0.5em solid" borderColor={theme ? "#212121" : "gray200"} rounded="circle" m="auto" w={{ xs: "60%", md: "20%" }}/>
          <Text textSize="heading" textWeight="600">Khoa Nguyễn</Text>
          <Text textSize="caption" textColor={theme ? "#b3bac4" : "gray800"}>Senior Designer / Front-end Developer</Text>
          <Text textSize="paragraph" textColor={theme ? "#b3bac4" : "gray900"} overflow="" maxW="23em" m={{t:'1em', b:'auto',l:'auto', r:'auto'}} textWeight="500">{quote.quote}</Text>
          <Text textSize="paragraph" textColor={theme ? "#b3bac4" : "gray900"} overflow="" maxW="23em" m='auto' textWeight="400">- {author} -</Text>
          <Div
            d="flex"
            justify="center"
            m={{b:'1em',t:'1em'}}
          >
            <SocialLink />
          </Div>
          <Div
          d="flex"
          justify="center"
          m={{t: "1rem"}}
          > 
             <Button
              suffix={
              <Icon
              name="Plus"
              size="16px"
              color="white"
              m={{ l: "1rem" }}
              />
              } 
              bg={theme ? "info800":"info600"}
              hoverBg={theme? "info900":"info700"}
              rounded="circle"
              p={{ r: "1rem", l: "2rem" }}
              m={{ r: "0.5rem" }}
              onClick={openFacebook}
              >Follow</Button>
              <Button
              suffix={
              <Icon
              name="Download"
              size="16px"
              color="gray900"
              m={{ l: "1rem" }}
              />
              }
              textColor="gray900" 
              bg="transparent"
              hoverBg={theme? "#262626" : "gray300"}
              border="1px solid"
              borderColor={theme? "#616161" :"gray500"}
              rounded="circle"
              p={{ r: "1rem", l: "1rem" }}
              onClick={downloadCV}
              >Resume</Button>
          </Div>
    </Template>
  )
}

export default ProfileCard