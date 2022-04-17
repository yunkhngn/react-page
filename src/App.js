import { useEffect, useState } from "react";
import React from "react";
import "./App.css";

import AppBar from "./components/AppBar/AppBar";
import AppHeader from "./components/AppHeader/AppHeader";
import Footer from "./components/Footer/Footer";

import Homepage from "./Page/Homepage/Homepage";
import Aboutpage from "./Page/Aboutpage/Aboutpage";
import Picturepage from "./Page/Picturepage/Picturepage";
import Projectpage from "./Page/Projectpage/Projectpage";
import Notfound from "./Page/Notfound/Notfound";
import Maintenance from "./components/Maintenance/Maintenance";

import {BrowserRouter, Routes, Route} from "react-router-dom";

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

function App() {
  const [theme, setTheme] = useState('light');
  const [page, setPage] = useState(true);
  const [dotLocation, setDotLocation] = useState("Home");
  const [showAboutDot, setShowAboutDot] = useState(false);
  const [showProjectsDot, setShowProjectsDot] = useState(false);
  const [showPictureDot, setShowPictureDot] = useState(false);

  useEffect(() => {
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

  console.log(page)
  const showAboutDotHandler = () => {
    setShowAboutDot(true);
    setShowProjectsDot(false);
    setShowPictureDot(false);
    setDotLocation("About");
  };

  const showProjectsDotHandler = () => {
    setShowAboutDot(false);
    setShowProjectsDot(true);
    setShowPictureDot(false);
    setDotLocation("Projects");
  };

  const showPictureDotHandler = () => {
    setShowAboutDot(false);
    setShowProjectsDot(false);
    setShowPictureDot(true);
    setDotLocation("Picture");
  };

  const websiteOptions = [
    {
      id: 1,
      name: "About",
      icon: "fas fa-address-card icon",
      url: "/about",
      open: () => setPage(true),
      showDot: showAboutDot,
      setShowDot: showAboutDotHandler,
    },
    {
      id: 2,
      name: "Projects",
      icon: "fas fa-lightbulb icon",
      url: "/projects",
      open: () => console.log("Projects"),
      showDot: showProjectsDot,
      setShowDot: showProjectsDotHandler,
    },
    {
      id: 3,
      name: "Picture",
      icon: "fas fa-camera icon",
      url: "/picture",
      open: () => console.log("Picture"),
      showDot: showPictureDot,
      setShowDot: showPictureDotHandler,
    },
  ];

  const changeTheme = () => {
    if (theme === "light") {
      document.body.classList.remove();
      document.body.classList.add("Appdark");
      setTheme("dark");
      sessionStorage.setItem("themeCheck", 'dark');
    } else {
      document.body.classList.remove();
      document.body.classList.add("Applight");
      setTheme("light");
      sessionStorage.setItem("themeCheck", 'light');
    }
  };

  const getMaintenanceStatus = () => {
    var data = require('./Json/isMaintenanceOrNot.json')
    console.log(data.is_on_maintenance)
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

        <div className="HeaderPage" id="#top">
          <div className="dotnav"/>
          <div className="dotnav yellow"/>
          <div className="dotnav green"/>
        </div>

        <div className="ContainerText">
        
        <BrowserRouter>
        <Routes>
          <Route path='*' element={<Notfound/>} />
          <Route path="/" element={<Homepage/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/about" element={<Aboutpage/>} />
          <Route path="/picture" element={<Picturepage/>} />
          <Route path="/projects" element={<Projectpage/>} />
        </Routes>
      </BrowserRouter>

        </div>
          <Footer className="Footer" />
      </div>
      <AppHeader/>
      <AppBar
        websiteOptions={websiteOptions}
        socialMedia={socialMedia}
        theme={theme}
        changeTheme={changeTheme}
        dotLocation={dotLocation}
        setDotLocation={setDotLocation}
      />
    </div>
  );
  }
}

export default App;
