import { useEffect, useState } from "react";
import React, {lazy, Suspense} from "react";
import "./App.css";
import { Div } from "atomize";

import AppBar from "./components/AppBar/AppBar";
import AppHeader from "./components/AppHeader/AppHeader";
import Footer from "./components/Footer/Footer";
import Maintenance from "./components/Maintenance/Maintenance";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Spacer from "./components/Spacer/Spacer";

const Homepage = lazy(() => import("./Page/Homepage/Homepage"));
const Aboutpage = lazy(() => import("./Page/Aboutpage/Aboutpage"));
const Picturepage = lazy(() => import("./Page/Picturepage/Picturepage"));
const Projectpage = lazy(() => import("./Page/Projectpage/Projectpage"));
const Notfound = lazy(() => import("./Page/Notfound/Notfound"));
const Playground = lazy(() => import("./Page/Playground/Playground"));

const socialMedia = [
  {
    id: 4,
    name: "Facebook",
    icon: "fab fa-facebook icon seperate",
    link: "https://www.facebook.com/yun.khngn",
  },
  {
    id: 5,
    name: "Instagram",
    icon: "fab fa-instagram icon",
    link: "https://instagram.com/yun.khngn_",
  },
  {
    id: 6,
    name: "Github",
    icon: "fab fa-github icon",
    link: "https://github.com/yunkhngn",
  },
  {
    id: 7,
    name: "Behance",
    icon: "fab fa-behance icon",
    link: "https://www.behance.net/yunkhngn",
  },
];

function someMethodIThinkMightBeSlow() {
  const startTime = performance.now();

  // Do the normal stuff for this function

  const duration = performance.now() - startTime;
  console.log(`Loading methods took ${duration}ms`);
}

function App() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    someMethodIThinkMightBeSlow();
    //Hàm này vào trang check xem session của cái theme đang là gì, null thì gán vào là light, light là light, dark là dark
    var themeCheck = sessionStorage.getItem("themeCheck");
    if (themeCheck == null) {
      themeCheck = "light";
      setTheme("light");
      document.body.classList.remove();
      document.body.classList.add("Applight");
    }
    else if (themeCheck === "light") {
      themeCheck = "light";
      setTheme("light");
      document.body.classList.remove();
      document.body.classList.add("Applight");
    } 
    else {
      themeCheck = "dark";
      setTheme("dark");
      document.body.classList.remove();
      document.body.classList.add("Appdark");
    }
    sessionStorage.setItem("themeCheck", themeCheck);
    setTheme(themeCheck)
  }, []);

  const websiteOptions = [
    {
      id: 1,
      name: "About",
      icon: "fas fa-address-card icon",
      url: "/about",
    },
    {
      id: 2,
      name: "Projects",
      icon: "fas fa-lightbulb icon",
      url: "/projects",
    },
    {
      id: 3,
      name: "Picture",
      icon: "fas fa-camera icon",
      url: "/picture",
    },
  ];

  const changeTheme = () => {

    if (theme === "light") {
      document.body.classList.remove();
      document.body.classList.add("Appdark");
      setTheme("dark");
      sessionStorage.setItem("themeCheck", "dark");
    } else {
      document.body.classList.remove();
      document.body.classList.add("Applight");
      setTheme("light");
      sessionStorage.setItem("themeCheck", 'light');
    }
  };

  const getMaintenanceStatus = () => {
    var data = require('./Json/isMaintenanceOrNot.json')
    if (data.is_on_maintenance === true) {
      return "production";
    }
  }
  if (process.env.NODE_ENV === getMaintenanceStatus()){
    return <Maintenance/> 
  }
  else{
  return (
    <div className={"App App" + theme}>
      <div className="AppPage">
      <Div bg="gray200" rounded='10px'>
        <div className="HeaderPage" id="top">
          <div className="dotnav"/>
          <div className="dotnav yellow"/>
          <div className="dotnav green"/>
        </div>

        <div className="ContainerText">
        
        <BrowserRouter>
        <Suspense fallback={<Div>Loading page...</Div>}>
        <Routes>
          <Route exact path='*' element={<Notfound />} />
          <Route path="/" element={<Homepage/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/about"   element={<Aboutpage/>} />
          <Route path="/picture" element={<Picturepage/>} />
          <Route path="/projects" element={<Projectpage/>} />
          <Route path="/playground" element={<Playground/>} />
        </Routes>
        </Suspense>
      </BrowserRouter>
        </div>
        <Div
        bg='gray200'
        h="100%"
        justify="center"
        align="center"
        rounded={{b: "10px"}}
        p={{b: "10px"}}
        >
        <Footer/>
        </Div>
        </Div>
      </div>
      <AppHeader/>
      <AppBar
        websiteOptions={websiteOptions}
        socialMedia={socialMedia}
        theme={theme}
        changeTheme={changeTheme}
      />
      <Spacer/>
    </div>
  );
  }
}

export default App;
