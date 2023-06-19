import * as React from 'react';
import { BsSunFill, BsMoon } from "react-icons/bs";
import { AiOutlineHome, AiFillHome, AiOutlineFolderOpen, AiFillFolderOpen, AiFillProject, AiOutlineProject, AiFillCamera, AiOutlineCamera } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';

export const NavigationBar = (props) => {
  function addHover(elem, currentActive){
    console.log(elem + ", " + currentActive);
  }

  return (
    <>
      <link rel="stylesheet" href="/static/css/NavigationBar.css"></link>
      <div id="navigation-bar">
        <a href="/">
          <div className="icon-section">
            <div id="home-nav" className="icon">
              {props.active === "home" ? <AiFillHome size={35}/> : <AiOutlineHome size={35}/>}
            </div>
            <p className={"nav-elem " + (props.active === "home" ? "active" : "")}>Home</p>
          </div>
        </a>
        <a href="/projects">
          <div className="icon-section">
            <div id="home-nav" className="icon">
            {props.active === "projects" ? <AiFillProject size={35} /> : <AiOutlineProject size={35}/>}    
            </div>
            <p className={"nav-elem " + (props.active === "projects" ? "active" : "")}>Projects</p>
          </div>
        </a>
        <a href="/portfolio">
          <div className="icon-section">
          {props.active === "portfolio" ? <AiFillFolderOpen size={35} /> : <AiOutlineFolderOpen size={35}/>}
          </div>
          <p className={"nav-elem " + (props.active === "portfolio" ? "active" : "")}>ICS4U_Portfolio</p>
        </a>
        {/* I'll put you back in... someday
        <a href="/photos">
          <div className="icon-section">
          {props.active === "photos" ? <AiFillCamera size={35} /> : <AiOutlineCamera size={35}/>}
          </div>
          <p className={"nav-elem " + (props.active === "photos" ? "active" : "")}>Photos</p>
        </a>
        */}
      </div>
    </>
  );
}

export default NavigationBar;