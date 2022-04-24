import React, {lazy} from 'react'
import {useLocation, Routes, Route} from "react-router-dom";
import {AnimatePresence} from 'framer-motion/dist/framer-motion'

const Homepage = lazy(() => import("../../../Page/Homepage/Homepage"));
const Aboutpage = lazy(() => import("../../../Page/Aboutpage/Aboutpage"));
const Picturepage = lazy(() => import("../../../Page/Picturepage/Picturepage"));
const Projectpage = lazy(() => import("../../../Page/Projectpage/Projectpage"));
const Notfound = lazy(() => import("../../../Page/Notfound/Notfound"));
const Playground = lazy(() => import("../../../Page/Playground/Playground"));

function AnimatedPage() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
              <Route exact path='*' element={<Notfound />} status={404}/>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/home" element={<Homepage/>}/>
              <Route path="/about"   element={<Aboutpage/>} />
              <Route path="/pictures" element={<Picturepage/>} />
              <Route path="/projects" element={<Projectpage/>} />
              <Route path="/playground" element={<Playground/>} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedPage