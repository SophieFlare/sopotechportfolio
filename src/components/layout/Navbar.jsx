import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlitchText from "../atoms/GlitchText";
import sLogo from "/silknet_logoo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    setToggle(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-[9999] px-6 py-4
                    bg-sky-200/60 backdrop-blur-md
                    border-b border-sky-300
                    shadow-md">

      {/* glow line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px]
                      bg-sky-400
                      shadow-[0_0_10px_#38bdf8,0_0_20px_#38bdf8,0_0_40px_#38bdf8]" />

      <div className="flex justify-between items-center w-full">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer"
             onClick={() => navigate("/")}>
          <img src={sLogo} className="w-10 h-10" />
          <p className="text-sky-700 text-xl font-bold">
            <GlitchText>SILKNET</GlitchText>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 relative">

          {/* MENU BUTTON */}
          <button
            onClick={() => setToggle(!toggle)}
            className="w-12 h-12 flex items-center justify-center
                       bg-white rounded-full
                       border border-sky-400
                       shadow-md"
          >
            <div className="flex flex-col gap-1">
              <span className="w-5 h-[2px] bg-sky-600"></span>
              <span className="w-5 h-[2px] bg-sky-600"></span>
              <span className="w-5 h-[2px] bg-sky-600"></span>
            </div>
          </button>

          {/* DROPDOWN */}
   {/* DROPDOWN */}
{toggle && (
  <div className="absolute top-16 right-0 w-32
                  bg-white/90 backdrop-blur-md
                  border border-sky-300
                   shadow-xl
                  p-4 flex flex-col gap-3">

    {/* HOME */}
    <button
      onClick={() => go("/")}
      className="text-left text-sky-700 hover:text-sky-500"
    >
      // HOME
    </button>

    {/* CV */}
    <button
      onClick={() => go("/pages/itsupport")}
      className="text-left text-sky-700 hover:text-sky-500"
    >
      // CV
    </button>

      {/* DESKTOP (LOCKED) */}
    <div className="relative group cursor-not-allowed text-sky-700">

      <div className="text-left hover:text-sky-500 transition">
        // DESKTOP
      </div>

      {/* tooltip BELOW */}
      <div className="
        absolute left-0 top-full mt-1
        text-[10px] text-white bg-black/80 px-2 py-[2px]
        rounded
        opacity-0 group-hover:opacity-100
        transition
        tracking-widest
      ">
        LOCKED
      </div>
    </div>

    {/* CONTACT (LOCKED) */}
    {/* CONTACT (LOCKED) */}
    <div className="relative group cursor-not-allowed text-sky-700">

      <div className="text-left hover:text-sky-500 transition">
        // CONTACT
      </div>

      {/* tooltip BELOW */}
      <div className="
        absolute left-0 top-full mt-1
        text-[10px] text-white bg-black/80 px-2 py-[2px]
        rounded
        opacity-0 group-hover:opacity-100
        transition
        tracking-widest
      ">
        LOCKED
      </div>
    </div>

  </div>
)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;