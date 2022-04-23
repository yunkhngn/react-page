import React from "react";

import "./AppIcons.css";


const AppIcons = ({icon, name, theme, showDot}) => {
  const [bounce, setBounce] = React.useState(false);

  const changeHandler = (url) => {
    setBounce(true);
    setTimeout(() => {
      setBounce(false);
    }, 750);
  };

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
          }}
        />
      </div>
      {showDot && <span className="fas fa-circle dot" />}
    </div>
  );
};

export default AppIcons;

