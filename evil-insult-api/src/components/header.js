import React from "react";
import "./Header.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";

const Header = () => {
  return (
    <div className="header">
      <div className="header__info">
        <img src="http://clipart-library.com/images/6ip5BBKpT.png" alt="" />
        <h1>Insult GENERATOR</h1>
      </div>
      <div className="header__links">
        <a href="https://www.linkedin.com/in/sahil-y-356416b9/">
          <LinkedInIcon className="header__linkLogo hvr-grow" />
        </a>
        <a href="https://github.com/sahil-au7/Evil-Insult-Generator">
          <GitHubIcon className="header__linkLogo hvr-grow" />
        </a>
      </div>
    </div>
  );
};

export default Header;
