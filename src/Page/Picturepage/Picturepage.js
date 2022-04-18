import React from 'react'
import MetaTags from 'react-meta-tags';
import { Div } from "atomize";

const Picturepage = () => {
  return (
    <Div>
      <MetaTags>
            <title>Khoa Nguyễn - Pictures</title>
            <meta id="meta-description" name="description" content="Website vippzo nhất hệ mặt trời!" />
            <meta id="og-title" property="og:title" content="Khoa Nguyễn - Pictures" />
            <meta id="og-image" property="og:image" content="../../assets/macos-big-sur.jpg" />
      </MetaTags>
      This is the picture page!
    </Div>
  )
}

export default Picturepage