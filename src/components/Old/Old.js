import React from 'react'
import { Div, Button,  Icon} from "atomize";
const Old = () => {
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
  )
}

export default Old