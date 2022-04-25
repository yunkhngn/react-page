import React from 'react'
import { Template } from '../../TemplateWebsite'
import { Div, Text, Image } from 'atomize'
import { useThemeState } from "../../../store";

import Icon1 from '../../../assets/Icon/1.svg'
import Icon2 from '../../../assets/Icon/2.svg'
import Icon3 from '../../../assets/Icon/3.svg'
import Icon4 from '../../../assets/Icon/4.svg'

const Skills = () => {
  const [state] = useThemeState();
  const theme = state === 'light'

  return (
    <Template>
     <Text textColor={theme ? "#99999" : "black"} textSize="display1" textWeight="600" m={{b:'1em'}}>Experiences</Text>
     <Div
        d={{xs:"block",md:"flex"}}
      justify="space-around"
      textAlign="left"
      >
        <Div w="100%" h="auto" p={{t:"5em",b:"6em", l:"1rem", r:"1rem"}} bg={theme ? "#1c1c21" : "white"} textColor={theme ? "white" : "dark"} hoverBg={theme ? null : "#fdcb6e"} transition order={{ xs: 4, md: 1 }}>
          <Image src={Icon2} w="20%" m={{b:"1em"}} h="auto" />
          <Text fontFamily="Playfair Display" textSize="heading" w="70%" m={{b:'1em'}}>Front-end Developer</Text>
          <Text fontFamily="Segoe UI" textSize="subheader" textWeight="400">I can develop web applications using HTML, CSS, JavaScript, React, Redux, Typescript, Nextjs, Node.js, Express, MongoDB, and more.</Text>
        </Div>
        <Div w="100%" h="auto" p={{t:"5em",b:"6em", l:"1rem", r:"1rem"}} bg={theme ? "gray300" : "#1E1E1E"} textColor={theme ? "dark":"white"} hoverBg="#fdcb6e" transition order={{ xs: 3, md: 2 }}>
          <Image src={Icon1} w="20%" m={{b:"1em"}} h="auto" />
          <Text fontFamily="Playfair Display" textSize="heading" w="70%" m={{b:'1em'}}>Software Developer</Text>
          <Text fontFamily="Segoe UI" textSize="subheader" textWeight="400">
            I can develop desktop applications using Python, C#, and .NET. I also have experience in developing mobile applications using React Native.
          </Text>
        </Div>
        <Div w="100%" h="auto" p={{t:"5em",b:"6em", l:"1rem", r:"1rem"}} bg={theme ? "#1c1c21" : "white"} textColor={theme ? "white" : "dark"} hoverBg={theme ? null : "#fdcb6e"} transition order={{ xs: 2, md: 3 }}>
          <Image src={Icon3} w="20%" m={{b:"1em"}} h="auto" />
          <Text fontFamily="Playfair Display" textSize="heading" w="70%" m={{b:'1em'}}>Graphic Designer</Text>
          <Text fontFamily="Segoe UI" textSize="subheader" textWeight="400">
            I can design logos, banners, and other graphics using Photoshop, Illustrator, and InDesign. I also have experience in video editing using Premiere Pro and After Effect.
          </Text>
        </Div>
        <Div w="100%" h="auto" p={{t:"5em",b:"6em", l:"1rem", r:"1rem"}} bg={theme ? "gray300" : "#fdcb6e"} textColor="dark" hoverBg={theme ? "#fdcb6e" : null} transition order={{ xs: 1, md: 4 }}>
          <Image src={Icon4} w="20%" m={{b:"1em"}} h="auto" />
          <Text fontFamily="Playfair Display" textSize="heading" w="70%" m={{b:'1em'}}>UX/UI Designer</Text>
          <Text fontFamily="Segoe UI" textSize="subheader" textWeight="400">
            I can design user interfaces using Figma, Sketch, and Adobe XD. I also have experience in designing wireframes using Balsamiq.
          </Text>
        </Div>
      </Div>
    </Template>
  )
}

export default Skills