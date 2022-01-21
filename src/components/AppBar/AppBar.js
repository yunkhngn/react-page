import React from "react";
import AppIcons from "../AppIcons/AppIcons";
import styled from "styled-components";

import "./AppBar.css";

const openURL = (url) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 750);
};

const AppBar = ({
  websiteOptions,
  socialMedia,
  theme,
  changeTheme,
  dotLocation,
  setDotLocation,
}) => {
  const changePage = (page) => {
    setTimeout(() => {
      setDotLocation(page);
    }, 750);
  };

  return (
    <div className="container">
      <div className="AppBar">
        <div className="section ">
          <AppIcons
            icon="fas fa-home icon"
            name="Home"
            theme={theme}
            dotLocation={dotLocation}
            clickHandler={() => changePage("Home")}
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
              dotLocation={dotLocation}
              clickHandler={() => {
                changePage(item.name);
                item.open();
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
              dotLocation={dotLocation}
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