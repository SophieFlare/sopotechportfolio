import React from "react";
import sopo from "/cv/sopo_cvv.jpg";

const Profile = () => {
  return (
    <div className="w-full h-full flex flex-col font-mono text-sky-200 bg-[#05070d]">

    

      {/* CONTENT */}
      <div className="flex flex-1">

        {/* IMAGE SIDE */}
        <div className="w-1/2 flex items-center justify-center border-r border-sky-400/20 p-4">
          <div className="relative">
            <img
              src={sopo}
              alt="SOPØ"
              className="
                w-[220px] h-[220px]
                object-cover rounded-lg
                border border-sky-400/40
                shadow-[0_0_20px_rgba(56,189,248,0.4)]
              "
            />

            <div className="absolute inset-0 rounded-lg border border-sky-400/20 blur-sm" />
          </div>
        </div>

        {/* INFO SIDE */}
        <div className="w-1/2 p-4 flex flex-col justify-center gap-4">

          <div>
            <h1 className="text-xl text-white tracking-wide">
              SOPØ GURGENIDZE
            </h1>

            <p className="text-xs text-sky-300 mt-1">
              TECH SYSTEM EXPLORER / DEVELOPER
            </p>
          </div>

          {/* SYSTEM INFO */}
          <div className="text-xs space-y-2 border-l border-sky-400/20 pl-3 text-sky-200">
            <p>STATUS: <span className="text-white">AVAILABLE</span></p>
            <p>LOCATION: <span className="text-white">TBILISI</span></p>
            <p>MODE: <span className="text-white">SELF-TAUGHT DEV</span></p>
            <p>FOCUS: <span className="text-white">SYSTEMS / NETWORKS</span></p>
          </div>

          {/* STACK */}
          <div className="text-xs border-l border-sky-400/20 pl-3">
            <p className="text-sky-400 mb-2">STACK</p>

            <div className="flex flex-wrap gap-2 text-white/80">
              <span className="px-2 py-1 border border-sky-400/20 rounded">
                JavaScript
              </span>
              <span className="px-2 py-1 border border-sky-400/20 rounded">
                React
              </span>
              <span className="px-2 py-1 border border-sky-400/20 rounded">
                Node
              </span>
              <span className="px-2 py-1 border border-sky-400/20 rounded">
                Linux
              </span>
              <span className="px-2 py-1 border border-sky-400/20 rounded">
                Networking
              </span>
            </div>
          </div>

          {/* QUOTE */}
          <div className="text-xs text-white/60 italic border-l border-sky-400/20 pl-3">
            “Building systems, not just UI — understanding how things actually work.”
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="px-4 py-2 border-t border-sky-400/20 text-[10px] text-white/40 flex justify-between">
        <span>FILE: PROFILE.sys</span>
        <span>STATUS: LOADED</span>
      </div>

    </div>
  );
};

export default Profile;