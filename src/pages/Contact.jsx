import React from "react";
import Navbar from "../layouts/Navbar";
import CForm from "./contact/CForm";
import CSH from "./contact/CSH";
import StarsBgContact from "../atoms/StarsBgC"

const Contact = ({}) => {
  return (
    <>
   <section id="contact">     <Navbar  />

      {/* FULL SCREEN WRAPPER */}
      <div className="relative w-full min-h-screen pt-24 overflow-hidden flex items-center justify-center bg-terminal">
 <div className="">
      <StarsBgC/>
        {/* BACKGROUND VISUAL (CSH) */}
        <div className="absolute inset-0 z-0">
          <CSH />
        </div>

        {/* CENTER FORM */}
        <div className="relative z-10">
          <CForm />
        </div>
       </div>
      </div>
      </section>

    </>
  );
};

export default Contact;