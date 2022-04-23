import { useEffect, useState } from "react";
import React, {Suspense} from "react";
import "./App.css";
import { Div } from "atomize";

import AppBar from "./components/AppBar/AppBar";
import AppHeader from "./components/AppHeader/AppHeader";
import Footer from "./components/Footer/Footer";
import Maintenance from "./components/Maintenance/Maintenance";
import {BrowserRouter} from "react-router-dom";
import Spacer from "./components/Spacer/Spacer";
import AnimatedPage from "./components/AnimatedPage/AnimatedPage";
import Audio from "./assets/audio/tayto.mp3";

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
      icon: "fas fa-user icon",
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
      url: "/pictures",
    },
  ];
  const url = Audio;
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
    <BrowserRouter>
    <div className={"App App" + theme}>
      <Suspense fallback={null}>
      <div className="AppPage">
      <Div bg="gray200" rounded='10px'>
        <div className="HeaderPage" id="top">
          <div className="dotnav"/>
          <div className="dotnav yellow"/>
          <div className="dotnav green"/>
        </div>

        <div className="ContainerText">
          {/* Tất cả route các thứ nằm ở components này do có animation */}
          <AnimatedPage/>
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
      </Suspense>
      <AppHeader theme={theme}/>
      <AppBar
        websiteOptions={websiteOptions}
        socialMedia={socialMedia}
        theme={theme}
        changeTheme={changeTheme}
        url={url}
      />
      <Spacer/>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
