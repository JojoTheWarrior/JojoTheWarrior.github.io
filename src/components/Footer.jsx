import * as React from 'react';
import { BsSunFill, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';

export const Footer = () => {
  return (
    <>
      <link rel="stylesheet" href="/static/css/Footer.css"></link>
      <div id="footer">
        <div className="logos">
          <span className="title-spans">Socials and Links</span>
          <div className="links">
            <a href="https://github.com/JojoTheWarrior" target="_blank">
              <img src="./static/img/github.png"></img>
            </a>
            <a href="https://dmoj.ca/user/JojoTheWarrior" target="_blank">
              <img src="./static/img/dmoj.png"></img>
            </a>
            <a href="https://www.linkedin.com/in/joshua-wang-938056269/" target="_blank">
              <img src="./static/img/linkedin.png"></img>
            </a>
            <a href="https://devpost.com/JojoTheWarrior" target="_blank">
              <img src="./static/img/devpost.png"></img>
            </a>
            <a href="https://www.youtube.com/channel/UCLlzCu-1UbTbLCwoS9eJU_g" target="_blank">
              <img src="./static/img/youtube.png"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;