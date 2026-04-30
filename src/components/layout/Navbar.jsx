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
          {toggle && (
            <div className="absolute top-16 right-0 w-48
                            bg-white/90 backdrop-blur-md
                            border border-sky-300
                            rounded-2xl shadow-xl
                            p-4 flex flex-col gap-3">

              <button onClick={() => go("/")} className="text-left text-sky-700 hover:text-sky-500">
                // HOME
              </button>

              <button onClick={() => go("/pages/cv")} className="text-left text-sky-700 hover:text-sky-500">
                // CV
              </button>

              <button onClick={() => go("/pages/itsupport")} className="text-left text-sky-700 hover:text-sky-500">
                // IT Support
              </button>

              <button onClick={() => go("/pages/contact")} className="text-left text-sky-700 hover:text-sky-500">
                // Contact
              </button>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;