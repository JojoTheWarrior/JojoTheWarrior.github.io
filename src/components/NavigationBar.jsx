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

  const [homeIsHovered, setHomeIsHovered] = useState(false);
  const [projectsIsHovered, setProjectsIsHovered] = useState(false);
  const [contactIsHovered, setContactIsHovered] = useState(false);

  return (
    <>
      <link rel="stylesheet" href="/static/css/NavigationBar.css"></link>
      <div id="navigation-bar">
        <a href="/">
          <div className="icon-section" onMouseEnter={() => setHomeIsHovered(true)} onMouseLeave = {() => setHomeIsHovered(false)}>
            <div id="home-nav" className="icon">
              {props.active === "home" || homeIsHovered ? <AiFillHome size={35}/> : <AiOutlineHome size={35}/>}
            </div>
            <p className={"nav-elem " + (props.active === "home" || homeIsHovered ? "active" : "")}>Home</p>
          </div>
        </a>
        <a href="/projects">
          <div className="icon-section" onMouseEnter={() => setProjectsIsHovered(true)} onMouseLeave = {() => setProjectsIsHovered(false)}>
            <div id="home-nav" className="icon">
              {props.active === "projects" || projectsIsHovered ? <AiFillProject size={35} /> : <AiOutlineProject size={35}/>}    
            </div>
            <p className={"nav-elem " + (props.active === "projects" || projectsIsHovered ? "active" : "")}>Projects</p>
          </div>
        </a>
        <a href="/contact">
          <div className="icon-section" onMouseEnter={() => setContactIsHovered(true)} onMouseLeave = {() => setContactIsHovered(false)}>
            <div id="home-nav" className="icon">
              {props.active === "contact" || contactIsHovered ? <AiFillFolderOpen size={35} /> : <AiOutlineFolderOpen size={35}/>}
            </div>
            <p className={"nav-elem " + (props.active === "contact" || contactIsHovered ? "active" : "")}>Contact Me</p>
          </div>
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