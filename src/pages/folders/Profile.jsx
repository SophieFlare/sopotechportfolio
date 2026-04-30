import React from 'react'
import sopo from "/cv/sopo_cvv.jpg"
const Profile = () => {
  return (
    <div id="profile" className="w-full h-full flex flex-col font-mono text-[#ff0033] bg-black">

      {/* ================= TOP HEADER BAR ================= */}
      <div className="w-full flex items-center justify-between px-4 py-2 border-b border-[#ff0033]/30 bg-black/60 backdrop-blur">
        <span className="text-xs tracking-widest text-white/70">
          USER PROFILE
        </span>

        <span className="text-[10px] text-[#ff0033]/60">
          /SOPØ/DESKTOP/PROFILE
        </span>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex flex-1">

        {/* LEFT IMAGE PANEL */}
        <div className="w-1/2 flex items-center justify-center border-r border-[#ff0033]/20 bg-black/40 p-6">

          <div className="relative">
            <img
              src={sopo}
              alt="SOPØ"
              className="w-[260px] h-[260px] object-cover rounded-md border border-[#ff0033] shadow-[0_0_25px_#ff0033]"
            />

            {/* glow frame effect */}
            <div className="absolute inset-0 border border-[#ff0033]/30 rounded-md blur-sm"></div>
          </div>

        </div>

        {/* RIGHT INFO PANEL */}
        <div className="w-1/2 p-6 flex flex-col justify-center gap-5">

          {/* NAME */}
          <div>
            <h1 className="text-2xl tracking-widest text-white">
              SOPØ GURGENIDZE
            </h1>

            <p className="text-xs text-[#ff0033]/80 mt-1">
              FULL-STACK DEVELOPER / SYSTEM THINKER
            </p>
          </div>

          {/* SYSTEM INFO BLOCK */}
          <div className="text-xs space-y-2 border-l border-[#ff0033]/30 pl-3">

            <p>STATUS: <span className="text-white/80">AVAILABLE</span></p>
            <p>LOCATION: <span className="text-white/80">TBILISI, GEORGIA</span></p>
            <p>PHONE: <span className="text-white/80">+995 593 833 833</span></p>
            <p>MODE: <span className="text-white/80">SELF-TAUGHT / PROJECT BASED</span></p>

          </div>

          {/* TECH STACK */}
          <div className="text-xs border-l border-[#ff0033]/30 pl-3">
            <p className="text-[#ff0033]/70 mb-2">CORE STACK:</p>

            <div className="flex flex-wrap gap-2 text-white/70">
              <span className="px-2 py-1 border border-[#ff0033]/20">JavaScript</span>
              <span className="px-2 py-1 border border-[#ff0033]/20">Python</span>
              <span className="px-2 py-1 border border-[#ff0033]/20">React</span>
              <span className="px-2 py-1 border border-[#ff0033]/20">Node</span>
              <span className="px-2 py-1 border border-[#ff0033]/20">Linux</span>
              <span className="px-2 py-1 border border-[#ff0033]/20">Networking</span>
            </div>
          </div>

          {/* QUOTE */}
          <div className="text-xs text-white/50 italic border-l border-[#ff0033]/20 pl-3">
            “Focused on building systems, not just UI — learning how real infrastructure works.”
          </div>

        </div>
      </div>

      {/* ================= STATUS BAR ================= */}
      <div className="w-full px-4 py-2 border-t border-[#ff0033]/30 text-[10px] text-white/40 flex justify-between">
        <span>FILE: SOPØ_PROFILE.sys</span>
        <span>STATUS: LOADED</span>
      </div>

    </div>
  );
};



export default Profile