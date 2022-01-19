import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";

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

const websiteOptions = [
  {
    id: 1,
    name: "About",
    icon: "fas fa-address-card icon",
    url: "/contact",
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

function App() {
  const [theme, setTheme] = useState("light");

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
