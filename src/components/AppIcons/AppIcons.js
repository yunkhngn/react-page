import React from "react";

import "./AppIcons.css";

const AppIcons = ({ icon, name, theme, clickHandler, dotLocation }) => {
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
      {dotLocation === name && <span className="fas fa-circle dot" />}
    </div>
  );
};

export default AppIcons;
