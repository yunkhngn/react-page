import React from 'react'
import {Button,  Icon} from "atomize";
import Template from '../Template/Template';
import {  useThemeState } from "../../store";

const Old = () => {
  const [state] = useThemeState();
  const theme = state === 'light'
  return (
    <Template>
          Website đang trong giai đoạn phát triển!
          Nếu muốn tìm portfolio cũ của tớ thì nó ở đây:
          <Button m={{t:"1em", l:"auto", r:"auto"}}  p="1em" w="10em" bg={theme ? "danger800":"danger700"} hoverBg={theme ? "danger900":"danger800"} suffix={
      <Icon
        name="LongRight"
        size="16px"
        color="white"
        m={{ l: "1rem" }}
      />
    }
    onClick={() => { window.open('https://yunkhngn.github.io/portfolio/', '_blank') }}
    >Ở đây này</Button>
    </Template>
  )
}

export default Old