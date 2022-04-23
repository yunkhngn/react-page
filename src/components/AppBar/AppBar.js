import React, {useState, useEffect} from "react";
import AppIcons from "../AppIcons/AppIcons";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "./AppBar.css";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => { setPlaying(!playing); };

  useEffect(() => {
    audio.volume = 0.3;
    playing ? audio.play() : audio.pause();
    },
    [playing, audio]
  );
  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const openURL = (url) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 750);
};

const AppBar = ({
  websiteOptions,
  socialMedia,
  theme,
  changeTheme,
  url,
}) => {
  const [playing, toggle] = useAudio(url);
  
  return (
    <div className="container">
      <div className="AppBar">
        <div>
          <Link to="/" className="section">
          <AppIcons
            icon="fas fa-home icon"
            name="Home"
            theme={theme}
            clickHandler={() => {window.history.pushState(null, null, "/"); window.location.reload();}}
          />
          </Link>
        </div>

        <Spacer />
        <div className="section ">
          {websiteOptions.map((item) => (
            <Link key={item.id} to={item.url} className="section">
            <AppIcons
              icon={item.icon}
              name={item.name}
              key={item.id}
              theme={theme}
            />
            </Link>
          ))}
        </div>

        <Spacer />

        <div className="section ">
          {socialMedia.map((item) => (
            <AppIcons
              icon={item.icon}
              name={item.name}
              key={item.id}
              theme={theme}
              clickHandler={() => openURL(item.link)}
            />
          ))}
        </div>

        <Spacer />

        <div className="section ">
          <AppIcons
            icon="fas fa-adjust icon"
            name="Change Theme"
            theme={theme}
            clickHandler={changeTheme}
          />
        </div>
        <div className="section">
          <AppIcons
            icon={playing ? "fas fa-volume icon" : "fas fa-volume-slash icon"}
            name="Menu"
            theme={theme}
            clickHandler={toggle}
          />
        </div>
      </div>
    </div>
  );
};

const Spacer = styled.div`
  height: 40px;
  border-right: 1.7px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;

  margin: 0px 5px;
`;

export default AppBar;
