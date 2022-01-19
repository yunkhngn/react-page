import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";

const socialMedia = [
  {
    name: "Facebook",
    icon: "fab fa-facebook icon seperate",
    link: "https://www.facebook.com/khoa.nguyen.9",
  },
  {
    name: "Instagram",
    icon: "fab fa-instagram icon",
    link: "https://instagram.com/_youngboicoder",
  },
  {
    name: "Github",
    icon: "fab fa-github icon",
    link: "https://github.com/youngboiCoder",
  },
];

const websiteOptions = [
  {
    name: "Projects",
    icon: "fas fa-lightbulb icon",
    url: "/projects",
  },
  {
    name: "Contact",
    icon: "fas fa-address-card icon",
    url: "/contact",
  },
  {
    name: "Picture",
    icon: "fas fa-camera icon",
    url: "/picture",
  },
];

function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    console.log("Chaning theme");
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className={"App App" + theme}>
      <h1 className="test">Khoa's profile</h1>
      <AppBar
        websiteOptions={websiteOptions}
        socialMedia={socialMedia}
        theme={theme}
        changeTheme={changeTheme}
      />
    </div>
  );
}

export default App;
