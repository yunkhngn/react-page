import React from "react";

import "./AppHeader.css"

const getTimeAndDate = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDay();
    const daynumber = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (minutes < 10) {
        return `${days[day]} ${daynumber} ${months[month]} ${year} ${hours}:0${minutes}`;
    } else {
        return `${days[day]} ${daynumber} ${months[month]} ${year} ${hours}:${minutes}`;
    }
};

const AppHeader  = () => {
    return (
        <div className="AppHeader">
            <div className="left">
                <span className="fab fa-apple apple-logo"></span>
                <span className="menus active">Finder</span>
                <span className="menus">File</span>
                <span className="menus">Edit</span>
                <span className="menus">View</span>
                <span className="menus">Go</span>
                <span className="menus">Window</span>
                <span className="menus">Help</span>
            </div>

            <div className="right">      
                <div className="active menu-time">{getTimeAndDate()}
                </div>
        </div>
    </div>
    );
};
export default AppHeader;