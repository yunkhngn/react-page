import React from "react";

import "./AppIcons.css";

const AppIcons = ({ icon, theme, changeTheme }) => {
  return (
    <div onClick={changeTheme}>
      <span className={icon + " AppIcon" + theme}></span>
    </div>
  );
};

export default AppIcons;
