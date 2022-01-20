import { useState } from "react";
import React from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import AppPage from "./components/AppPage/AppPage";
import AppHeader from "./components/AppHeader/AppHeader";

const socialMedia = [
  {
    id: 4,
    name: "Facebook",
    icon: "fab fa-facebook icon seperate",
    link: "https://www.facebook.com/youngboiCoder",
  },
  {
    id: 5,
    name: "Instagram",
    icon: "fab fa-instagram icon",
    link: "https://instagram.com/_youngboicoder",
  },
  {
    id: 6,
    name: "Github",
    icon: "fab fa-github icon",
    link: "https://github.com/youngboiCoder",
  },
  {
    id: 7,
    name: "Behance",
    icon: "fab fa-behance icon",
    link: "https://www.behance.net/youngboicoder",
  },
];

function App() {
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState(true);
  const [dotLocation, setDotLocation] = useState("Home");

  const websiteOptions = [
    {
      id: 1,
      name: "About",
      icon: "fas fa-address-card icon",
      url: "/contact",
      open: () => setPage(true),
    },
    {
      id: 2,
      name: "Projects",
      icon: "fas fa-lightbulb icon",
      url: "/projects",
      open: () => console.log("Projects"),
    },
    {
      id: 3,
      name: "Picture",
      icon: "fas fa-camera icon",
      url: "/picture",
      open: () => console.log("Picture"),
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
      <AppHeader />
      {page && (
        <AppPage
          closePage={() => {
            setPage(false);
            setDotLocation("Home");
          }}
        />
      )}
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
