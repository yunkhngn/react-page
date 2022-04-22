import React from 'react'
import { motion} from 'framer-motion/dist/framer-motion'

const animation = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 50,
    }
  }

const AnimationTag = ({children}) => {
  return (
    <motion.div
    variants={animation}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{duration: 1, ease: [0.6, 0.05, -0.01, 0.9]}}
    >{children}</motion.div>
  )
}

export default AnimationTag