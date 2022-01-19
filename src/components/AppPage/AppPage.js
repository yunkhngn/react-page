import React from "react";
import content from "./content";
import "./AppPage.css"

const title = content.title
const para = content.para

const AppPage  = () => {
    return (
        <div className="AppPage">
            <div className="HeaderPage">
                <i className="fas fa-circle dotnav"></i>
                <i className="fas fa-circle dotnav yellow"></i>
                <i className="fas fa-circle dotnav green"></i>
            </div>
            <div className="ContainerText">
                <h1 className="TitlePage">{title}</h1>
                <p className="TextPage">{para}</p>
            </div>
        </div>
    );
};

export default AppPage;