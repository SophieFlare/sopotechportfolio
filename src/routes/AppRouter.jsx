import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Desktop from "../pages/Desktop";
import Contact from "../pages/Contact";
import ITSupport from "../pages/ITSupport";

import ScrollToTop from "./ScrollToTop";
import Network from "../pages/Network";
const AppRouter = () => {
  return (
    <>
      {/* AUTO SCROLL RESET ON NAVIGATION */}
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* DESKTOP */}
        <Route path="/pages/desktop" element={<Desktop />} />

        {/* CONTACT */}
        <Route path="/pages/contact" element={<Contact />} />
        <Route path="/pages/network" element={<Network />} />


        {/* IT SUPPORT */}
        <Route path="/pages/itsupport" element={<ITSupport />} /> 
      </Routes>
    </>
  );
};

export default AppRouter;