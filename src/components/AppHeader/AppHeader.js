import React from "react";

import "./AppHeader.css"
import Time from "../Time/Time";

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
        return { days: days[day], daynumber: daynumber, months: months[month], year: year, hours: hours, minutes: "0" + minutes };
    } else {
        return { days: days[day], daynumber: daynumber, months: months[month], year: year, hours: hours, minutes: minutes };
    }
};
/* Sửa giúp t cái function này */
const AppHeader  = () => {
    return (
        <div className="AppHeader">
            <div className="left">
                <span className="fab fa-apple apple-logo"></span>
                <span className="menus active">Finder</span>
                <span className="menus hide">File</span>
                <span className="menus hide">Edit</span>
                <span className="menus hide">View</span>
                <span className="menus hide">Go</span>
                <span className="menus hide">Window</span>
                <span className="menus hide">Help</span>
            </div>

            <div className="right">      
                <Time data={getTimeAndDate()}/>
                
        </div>
    </div>
    );
};
export default AppHeader;