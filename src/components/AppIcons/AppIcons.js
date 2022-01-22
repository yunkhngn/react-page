import React from "react";

import "./AppIcons.css";

const AppIcons = ({ icon, name, theme, showDot, setShowDot, clickHandler }) => {
  const [bounce, setBounce] = React.useState(false);

  const changeHandler = () => {
    setBounce(true);
    clickHandler();
    setTimeout(() => {
      setBounce(false);
    }, 750);
  };

  return (
    <div className="IconContainer">
      <div
        onClick={() => setShowDot(true)}
        className={bounce ? "bounce icon2" : "icon2"}
      >
        <span className={icon + " AppIcon" + theme} onClick={changeHandler} />
      </div>
      {showDot && <span className="fas fa-circle dot" />}
    </div>
  );
};

export default AppIcons;
