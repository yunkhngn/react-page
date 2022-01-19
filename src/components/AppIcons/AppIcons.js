import React from "react";

import "./AppIcons.css";

const AppIcons = ({ icon, theme, clickHandler }) => {
  return (
    <div onClick={clickHandler}>
      <span className={icon + " AppIcon" + theme}></span>
    </div>
  );
};

export default AppIcons;
