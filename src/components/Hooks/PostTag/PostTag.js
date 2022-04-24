import React from 'react'
import { Tag } from 'atomize'

const PostTag = ({name , text}) => {
  return (
    <Tag
    bg={`${name}100`}
    border="1px solid"
    borderColor={`${name}500`}
    textColor={`${name}800`}
    m={{ r: "0.5rem", b: "0.5rem" }}
    align="left"
    >
    {text}
    </Tag>
  )
}

export default PostTag