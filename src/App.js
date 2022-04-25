// Libraries
import React, {Suspense, useEffect, useState } from "react";
import "./App.css";
import { Div } from "atomize";
import { BrowserRouter } from "react-router-dom";
// Assets
import Maintenance from './Page/Maintenance/Maintenance'
import Audio from "./assets/audio/tayto.mp3";
// Hook viết sẵn ở components
import { Bar, Header, Footer, Spacer } from "./components/Hooks";
import { AnimatedPage } from "./components/TemplateWebsite";
import { useThemeState } from "./store";
// Social links for Bar
const socialMedia = [
  {
    id: 4,
    name: "Facebook",
    icon: "Facebook",
    link: "https://www.facebook.com/yun.khngn",
  },
  {
    id: 5,
    name: "Instagram",
    icon: "Instagram",
    link: "https://instagram.com/yun.khngn_",
  },
  {
    id: 6,
    name: "Github",
    icon: "Github",
    link: "https://github.com/yunkhngn",
  },
  {
    id: 7,
    name: "Behance",
    icon: "Behance",
    link: "https://www.behance.net/yunkhngn",
  },
];
//Website options
const websiteOptions = [
  {
    id: 1,
    name: "About",
    icon: "UserCircle",
    url: "/about",
  },
  {
    id: 2,
    name: "Projects",
    icon: "Draft",
    url: "/projects",
  },
  {
    id: 3,
    name: "Picture",
    icon: "CameraSolid",
    url: "/pictures",
  },
];
// Checking performance
function someMethodIThinkMightBeSlow() {
  const startTime = performance.now();
  const duration = performance.now() - startTime;
  console.log(`Loading methods took ${duration}ms`);
}
// Main function
function App() {
  // Constances
  const [theme, setTheme] = useState('light');
  const [state, dispatch] = useThemeState();
  const url = Audio;
  const themeStatement = state === 'light'
  // Checking theme status
  useEffect(() => {
    someMethodIThinkMightBeSlow();
    var themeCheck = sessionStorage.getItem("themeCheck");
    if (themeCheck == null) {
      themeCheck = "light";
      setTheme("light");
      document.body.classList.remove();
      document.body.classList.add("Applight");
      dispatch({ type: "dark" });
    }
    else if (themeCheck === "light") {
      themeCheck = "light";
      setTheme("light");
      document.body.classList.remove();
      document.body.classList.add("Applight");
      dispatch({ type: "dark" });
    } 
    else {
      themeCheck = "dark";
      setTheme("dark");
      document.body.classList.remove();
      document.body.classList.add("Appdark");
      dispatch({ type: "light" });
    }
    sessionStorage.setItem("themeCheck", themeCheck);
    setTheme(themeCheck)
  }, [dispatch]);
  //Change theme between light and dark
  const changeTheme = () => {
    if (theme === "light") {
      document.body.classList.remove();
      document.body.classList.add("Appdark");
      setTheme("dark");
      sessionStorage.setItem("themeCheck", "dark");
      dispatch({ type: "light" });
    } else {
      document.body.classList.remove();
      document.body.classList.add("Applight");
      setTheme("light");
      sessionStorage.setItem("themeCheck", 'light');
      dispatch({ type: "dark" });
    }
  };
  // Return if we are on maintenance
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
            <Div bg={themeStatement ? "#212121" : "gray200"} rounded='10px'>
              <div className={"HeaderPage Header"+theme} id="top">
                <div className="dotnav"/>
                <div className="dotnav yellow"/>
                <div className="dotnav green"/>
              </div>

              <div className="ContainerText">
                <AnimatedPage/>
              </div>

              <Div
                bg={themeStatement ? "#212121" : "gray200"}
                h="100%"
                justify="center"
                align="center"
                rounded={{b: "10px"}}
                p={{b: "10px"}}>
                <Footer/>
              </Div>
            </Div>
          </div>
        </Suspense>
        <Header theme={theme}/>
        <Bar
        websiteOptions={websiteOptions}
        socialMedia={socialMedia}
        theme={theme}
        changeTheme={changeTheme}
        url={url}/>
        <Spacer/>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
