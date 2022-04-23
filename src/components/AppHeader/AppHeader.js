import React from "react";
import "./AppHeader.css";

const getTimeAndDate = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDay();
  const daynumber = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (minutes < 10) {
    return {
      days: days[day],
      daynumber: daynumber,
      months: months[month],
      year: year,
      hours: hours,
      minutes: "0" + minutes,
    };
  } else {
    return {
      days: days[day],
      daynumber: daynumber,
      months: months[month],
      year: year,
      hours: hours,
      minutes: minutes,
    };
  }
};

const AppHeader = () => {
  const [fullTime, setFulltime] = React.useState(getTimeAndDate());
  const [showDropdown, setShowDropdown] = React.useState(false);

  React.useEffect(() => {
    setFulltime(getTimeAndDate());
    const interval = setInterval(() => {
      setFulltime(getTimeAndDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="AppHeader noselect">
      <div className="left">
        <span className="fab fa-apple apple-logo"></span>
        <span
          className="menus active noselect"
          onClick={() => setShowDropdown(() => !showDropdown)}
        >
          Finder
        </span>
        <span className="menus hide noselect">File</span>
        <span className="menus hide noselect">Edit</span>
        <span className="menus hide noselect">View</span>
        <span className="menus hide noselect">Go</span>
        <span className="menus hide noselect">Window</span>
        <span className="menus hide noselect">Help</span>
      </div>

      {showDropdown && (
        <div className="drop-down" onMouseOver="dropDown">
          <ul>
            <li>Home</li>
            <hr></hr>
            <li>About</li>
            <hr></hr>
            <li>Projects</li>
            <hr></hr>
            <li>Pictures</li>
          </ul>
        </div>
      )}

      <div className="right">
        <div className="menu-time">
          {fullTime.days +
            " " +
            fullTime.daynumber +
            " " +
            fullTime.months +
            " " +
            fullTime.year +
            ""}
          <span className="active time margin">
            {fullTime.hours + ":" + fullTime.minutes}
          </span>
        </div>
      </div>
    </div>
  );
};
export default AppHeader;
