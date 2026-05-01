import React from "react";

const NmapBtn = ({ onOpen }) => {
  return (
<div className="fixed items-center justify-center z-50 font-mono drop-shadow-[0_0_15px_rgba(255,0,0,0.4)]"> 
      <button
        onClick={onOpen}
        className="
          px-10 py-5
          text-lg
          border-2 border-red-500
          text-red-400
          tracking-[0.3em]
          uppercase
          

          hover:scale-110
          hover:shadow-[0_0_30px_rgba(255,0,0,0.9)]
          transition-all duration-200

          animate-pulse
          bg-black/40
        "
      >
        Nmap
      </button>

      <div className="text-[11px] text-red-500 mt-2 opacity-70 text-center tracking-widest">
        SYSTEM FLOW MATRIX
      </div>

    </div>
  );
};

export default NmapBtn;