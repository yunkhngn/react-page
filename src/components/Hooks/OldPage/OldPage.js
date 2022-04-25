import React from 'react'
import {Button,  Icon, Div} from "atomize";
import { useThemeState } from "../../../store";
import {Template} from '../../TemplateWebsite'
import { Link } from 'react-router-dom';

const OldPage = () => {
  const [state] = useThemeState();
  const theme = state === 'light'
  const page = ["/",'/about',"/projects","/pictures"]
  const redirect = page[Math.floor(Math.random() * page.length)];
  return (
    <Template>
          Website is currently under development. If you are looking for my old portfolio.<br/>Check this out! Or just want to discover something here, feel free!
          <Div d="flex" m="auto" justify="center">
          <Button m={{t:"1em", r:"1em"}}  p="1em" w="10em" bg={theme ? "danger800":"danger700"} hoverBg={theme ? "danger900":"danger800"} prefix={
          <Icon
            name="LongLeft"
            size="16px"
            color="white"
            m={{ r: "1rem" }}
          />}
          onClick={() => { window.open('https://yunkhngn.github.io/portfolio/', '_blank') }}
          >Portfolio</Button>

          <Link to={redirect}><Button m={{t:"1em"}}  p="1em" w="10em" bg={theme ? "danger800":"danger700"} hoverBg={theme ? "danger900":"danger800"} suffix={
          <Icon
            name="LongRight"
            size="16px"
            color="white"
            m={{ l: "1rem" }}
          />}
          >Discorver</Button></Link>
          </Div>
    </Template>
  )
}

export default OldPage