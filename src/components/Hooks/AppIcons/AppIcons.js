import React from "react";
import "./AppIcons.css";
import { useLocation } from "react-router-dom";
import {Icon} from 'atomize'

const AppIcons = ({icon, name, theme, clickHandler, url, alt}) => {
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
    <div className="IconContainer" alt={alt}>
      {false && <span className="AppIcon--label">{name}</span>}
      <div
        className={bounce ? "bounce icon2" : "icon2"}
      >
        <span
          className={"icon AppIcon" + theme}
          onClick={() => {
            changeHandler();
            if (clickHandler) {
              clickHandler();
            }
          }}
        >
          <Icon name={bounce ? "Loading" : icon} color={changeColor ? "#212121" : "gray300"} size="20px"/>
        </span>
      </div>
      <Icon d={displayNav ? null : "none" } name="Dot" m="auto" color={changeColor ? "gray300" : "#212121"} size="10px"/>
    </div>
  );
};

export default AppIcons;

