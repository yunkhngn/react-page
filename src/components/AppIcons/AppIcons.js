import React from "react";
import styled from "styled-components";

import "./AppIcons.css";

const AppIcons = ({ icon, theme, clickHandler }) => {
  const [bounce, setBounce] = React.useState(false);

  const changeHandler = () => {
    setBounce(true);
    setTimeout(() => {
      setBounce(false);
    }, 750);
  };

  return (
    <div className="IconContainer">
      <div onClick={clickHandler} className={bounce ? "bounce" : null}>
        <span className={icon + " AppIcon" + theme} onClick={changeHandler} />
      </div>
      <span class="fas fa-circle dot" />
    </div>
  );
};

export default AppIcons;
