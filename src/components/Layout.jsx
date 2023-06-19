import * as React from 'react';
import { BsSunFill, BsMoon } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";
import 'materialize-css/dist/css/materialize.min.css';

export const Layout = () => {
  const [active, setActive] = useState("home");
  const navPath = useLocation().pathname;

  useEffect(() => {
    if (navPath.length > 1){
      setActive(navPath.substring(1));
    }
  }, [])

  return (
    <>
      <NavigationBar active={active} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;