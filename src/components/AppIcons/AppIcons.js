import React from "react";
import {Icon} from 'atomize'
import "./AppIcons.css";
import { useLocation } from "react-router-dom";

const AppIcons = ({icon, name, theme, clickHandler, url}) => {
  const [bounce, setBounce] = React.useState(false);
  const changeHandler = (url) => {
    setBounce(true);
    setTimeout(() => {
      setBounce(false);
    }, 750);
  };
  const location = useLocation();
  const path = location.pathname;
  const displayNav = path === url
  const changeColor = theme === "light"
  return (
    <div className="IconContainer">
      {false && <span className="AppIcon--label">{name}</span>}
      <div
        className={bounce ? "bounce icon2" : "icon2"}
      >
        <span
          className={icon + " AppIcon" + theme}
          onClick={() => {
            changeHandler();
            if (clickHandler) {
              clickHandler();
            }
          }}
        />
      </div>
      <Icon d={displayNav ? null : "none" } name="Dot" m="auto" color={changeColor ? "gray300" : "dark"} size="10px"/>
    </div>
  );
};

export default AppIcons;

