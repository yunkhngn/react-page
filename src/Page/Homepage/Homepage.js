import React from 'react'
import { Div, ThemeProvider, Button, Icon
        } from "atomize";

import MetaTags from 'react-meta-tags';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Spacer from '../../components/Spacer/Spacer';
import Contact from '../../components/Contact/Contact';

const themeSetup = {
  light: {
    bg:"gray200",
    textColor:"black",
  },
  dark: {
    bg:"gray900",
    textColor:"white",
  },
}

const Homepage = () => {

  const [themeSet, setThemeSet] = React.useState(themeSetup.light);
  
  return (
    <ThemeProvider theme={themeSetup}>
    <Div
      m={{b: "2rem" }}
      bg={themeSet.bg}
      h="auto"
      p={{b:'1em'}}
      >
        <MetaTags>
            <title>Khoa Nguyễn - Home</title>
            <meta id="meta-description" name="description" content="Website vippzo nhất hệ mặt trời!" />
            <meta id="og-title" property="og:title" content="Khoa Nguyễn - Home" />
            <meta id="og-image" property="og:image" content="../../assets/macos-big-sur.jpg" />
        </MetaTags>
        <Spacer/>
        <ProfileCard/>
        <Spacer/>
        <Div
        bg='white'
        w='90%'
        m='auto'
        p="2em"
        border="1px solid"
        borderColor="gray300"
        rounded="xl"
        >
          Website đang trong giai đoạn phát triển!
          Nếu muốn tìm portfolio cũ của tớ thì nó ở đây:
          <Button m={{t:"1em", l:"auto", r:"auto"}}  p="1em" w="10em" bg="danger700" hoverBg="danger800" suffix={
      <Icon
        name="LongRight"
        size="16px"
        color="white"
        m={{ l: "1rem" }}
      />
    }
    onClick={() => { window.open('https://yunkhngn.github.io/portfolio/', '_blank') }}
    >Ở đây này</Button>
        </Div>
        <Spacer/>
        <Contact/>
      </Div>
    </ThemeProvider>
    )
}

export default Homepage