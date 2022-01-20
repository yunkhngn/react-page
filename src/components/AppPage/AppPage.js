import React from "react";
import Footer from "../Footer/Footer";
import "./AppPage.css";
import avatar from "./avatar.png";
import Draggable from "react-draggable";

const AppPage = ({ closePage }) => {
  return (
    <Draggable>
      <div className="AppPage">
        <div className="HeaderPage">
          <i className="fas fa-circle dotnav" onClick={closePage}></i>
          <i className="fas fa-circle dotnav yellow"></i>
          <i className="fas fa-circle dotnav green"></i>
        </div>
        <div className="ContainerText">
          <img
            src={avatar}
            alt="avatar"
            className="Avatar Display disableSelect"
          />
          <div className="Display TextDisplay">
            <h1 className="TitlePage">Khoa Nguyễn</h1>
            <h2 className="PrePara">
              <strong>Developer/Designer</strong>
            </h2>
            <hr className="Seperator" />
            <p className="TextPage">
              <strong>Dob:</strong> 12/04/2005
            </p>
            <p className="TextPage">
              <strong>Address:</strong> Hà Nội
            </p>
            <p className="TextPage">
              <strong>Phone:</strong> 0376971168
            </p>
            <p className="TextPage">
              <strong>Email:</strong> rogkhoa.mail@gmail.com{" "}
            </p>
          </div>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </Draggable>
  );
};

export default AppPage;
