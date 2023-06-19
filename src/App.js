import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Layout from "./components/Layout";
import Photos from "./components/Photos";
import * as React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/*TODO: add a NoPage page*/}
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="projects" element={<Projects />} />
          <Route path="photos" element={<Photos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
