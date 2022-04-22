import React from 'react'
import MetaTags from 'react-meta-tags';
import { Div } from "atomize";
import {motion} from 'framer-motion/dist/framer-motion'

const Projectpage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <Div>
      <MetaTags>
            <title>Khoa Nguyễn - Projects</title>
            <meta id="meta-description" name="description" content="Website vippzo nhất hệ mặt trời!" />
            <meta id="og-title" property="og:title" content="Khoa Nguyễn - Projects" />
            <meta id="og-image" property="og:image" content="../../assets/macos-big-sur.jpg" />
      </MetaTags>
      This is the projects page!
    </Div>
    </motion.div>
  )
}

export default Projectpage