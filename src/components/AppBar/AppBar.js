import React from "react";
import AppIcons from "../AppIcons/AppIcons";
import styled from "styled-components";

import "./AppBar.css";

const openURL = (url) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 750);
};

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};


const AppBar = ({
  websiteOptions,
  socialMedia,
  theme,
  changeTheme,
}) => {
  return (
    <div className="container">
      <div className="AppBar">
        <div className="section">
          <AppIcons
            icon="fas fa-home icon"
            name="Home"
            theme={theme}
            clickHandler={() => {window.history.pushState(null, null, "/"); window.location.reload();}}
          />
        </div>

        <Spacer />
        <div className="section ">
          {websiteOptions.map((item) => (
            <AppIcons
              icon={item.icon}
              name={item.name}
              key={item.id}
              theme={theme}
              url = {item.url}
              clickHandler={() => {
                window.history.pushState("", "", item.url);;
              }}
            />
          ))}
        </div>

        <Spacer />

        <div className="section ">
          {socialMedia.map((item) => (
            <AppIcons
              icon={item.icon}
              name={item.name}
              key={item.id}
              theme={theme}
              clickHandler={() => openURL(item.link)}
            />
          ))}
        </div>

        <Spacer />

        <div className="section ">
          <AppIcons
            icon="fas fa-adjust icon"
            name="Change Theme"
            theme={theme}
            clickHandler={changeTheme}
          />
        </div>
        <div className="section">
          <AppIcons
            icon="fas fa-angle-up icon"
            name="Menu"
            theme={theme}
            clickHandler={scrollToTop}
          />
        </div>
      </div>
    </div>
  );
};

const Spacer = styled.div`
  height: 40px;
  border-right: 1.7px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;

  margin: 0px 5px;
`;

export default AppBar;
