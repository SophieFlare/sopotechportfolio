import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CV from "../pages/CV";
import Contact from "../pages/Contact";
import ITSupport from "../pages/ITSupport";

const Router = () => {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* CV */}
      <Route path="/pages/cv" element={<CV />} />

      {/* CONTACT */}
      <Route path="/pages/contact" element={<Contact />} />

      {/* FORM */}
      <Route path="/pages/itsupport" element={<ITSupport />} />
    </Routes>
  )
}

export default Router