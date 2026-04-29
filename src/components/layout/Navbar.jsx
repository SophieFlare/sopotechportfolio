import React, { useState } from "react";
import GlitchText from "../atoms/GlitchText";
import sLogo from "/assets/silknet_logoo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="w-full fixed top-0 left-0 right-0 z-[9999] px-6 py-4
                 bg-sky-200/60 backdrop-blur-md
                 border-b border-sky-300
                 shadow-md"
    >
      {/* ✨ GLOW LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[2px]
                      bg-sky-400
                      shadow-[0_0_10px_#38bdf8,0_0_20px_#38bdf8,0_0_40px_#38bdf8]" />

      <div className="flex justify-between items-center w-full">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={sLogo} className="w-10 h-10" />
          <p className="text-sky-700 text-xl font-bold">
            <GlitchText>Silknet</GlitchText>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 relative">

          {/* GRID BUTTON */}
          <button className="w-12 h-12 flex items-center justify-center
                             bg-white rounded-full
                             border border-sky-400
                             shadow-md
                             hover:scale-110 transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"
                stroke="#0284c7"
                strokeWidth="2"
              />
            </svg>
          </button>

          {/* PLAY BUTTON */}
          <button className="w-12 h-12 flex items-center justify-center
                             bg-white rounded-full
                             border border-sky-400
                             shadow-md
                             hover:scale-110 transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill="#0284c7" />
            </svg>
          </button>

          {/* MENU BUTTON */}
          <button
            onClick={() => setToggle(!toggle)}
            className="w-12 h-12 flex items-center justify-center
                       bg-white rounded-full
                       border border-sky-400
                       shadow-md
                       hover:scale-110 transition-all duration-300"
          >
            <div className="flex flex-col gap-1">
              <span className="w-5 h-[2px] bg-sky-600"></span>
              <span className="w-5 h-[2px] bg-sky-600"></span>
              <span className="w-5 h-[2px] bg-sky-600"></span>
            </div>
          </button>

          {/* DROPDOWN */}
          {toggle && (
            <div className="absolute top-16 right-0 w-48
                            bg-white/90 backdrop-blur-md
                            border border-sky-300
                            rounded-2xl shadow-xl
                            p-4 flex flex-col gap-3">

              <button className="text-left text-sky-700 hover:text-sky-500">
                Home
              </button>
              <button className="text-left text-sky-700 hover:text-sky-500">
                Dashboard
              </button>
              <button className="text-left text-sky-700 hover:text-sky-500">
                Support
              </button>
              <button className="text-left text-sky-700 hover:text-sky-500">
                Contact
              </button>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;