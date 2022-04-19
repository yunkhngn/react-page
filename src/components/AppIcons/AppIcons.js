import React from "react";

import "./AppIcons.css";


const AppIcons = ({ icon, name, theme, showDot, setShowDot, clickHandler, url, onClicked}) => {
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
        onClick={() => setShowDot()}
        className={bounce ? "bounce icon2" : "icon2"}
      >
        <span
          className={icon + " AppIcon" + theme}
          onClick={() => {
            changeHandler();
            onClicked();
            clickHandler();
            if(url) {
            window.history.pushState(null, null, url);
            window.location.reload();
            }
          }}
        />
      </div>
      {showDot && <span className="fas fa-circle dot" />}
    </div>
  );
};

export default AppIcons;

