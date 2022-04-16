import { useState } from "react";
import React from "react";
import "./App.css";

import AppBar from "./components/AppBar/AppBar";
import AppHeader from "./components/AppHeader/AppHeader";

import Homepage from "./Page/Homepage/Homepage";
import Aboutpage from "./Page/Aboutpage/Aboutpage";
import Picturepage from "./Page/Picturepage/Picturepage";
import Projectpage from "./Page/Projectpage/Projectpage";

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
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState(true);
  const [dotLocation, setDotLocation] = useState("Home");

  const [showAboutDot, setShowAboutDot] = useState(false);
  const [showProjectsDot, setShowProjectsDot] = useState(false);
  const [showPictureDot, setShowPictureDot] = useState(false);

  const websiteOptions = [
    {
      id: 1,
      name: "About",
      icon: "fas fa-address-card icon",
      url: "/contact",
      open: () => setPage(true),
      showDot: showAboutDot,
      setShowDot: setShowAboutDot,
    },
    {
      id: 2,
      name: "Projects",
      icon: "fas fa-lightbulb icon",
      url: "/projects",
      open: () => console.log("Projects"),
      showDot: showProjectsDot,
      setShowDot: setShowProjectsDot,
    },
    {
      id: 3,
      name: "Picture",
      icon: "fas fa-camera icon",
      url: "/picture",
      open: () => console.log("Picture"),
      showDot: showPictureDot,
      setShowDot: setShowPictureDot,
    },
  ];

  const changeTheme = () => {
    console.log("Chaning theme");
    if (theme === "light") {
      document.body.classList.remove();
      document.body.classList.add("Appdark");
      setTheme("dark");
    } else {
      document.body.classList.remove();
      document.body.classList.add("Applight");
      setTheme("light");
    }
  };

  return (
    <div className={"App App" + theme}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Homepage/>} />
          <Route path="/contact" element={<Aboutpage/>} />
          <Route path="/picture" element={<Picturepage/>} />
          <Route path="/projects" element={<Projectpage/>} />

        </Routes>
      </BrowserRouter>
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

export default App;
