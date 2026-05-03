import React from "react";

const NmapBtn = ({ onOpen }) => {
  const neon = "#ff0033";

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 font-mono">

      {/* BACKGROUND GLOW AURA */}
      <div
        className="absolute w-[340px] h-[340px] blur-3xl rounded-full animate-pulse"
        style={{ backgroundColor: `${neon}1a` }}
      />

      {/* MAIN BUTTON WRAPPER */}
      <button
        onClick={onOpen}
        className="
          relative px-16 py-7
          text-xl tracking-[0.4em] uppercase font-bold
          bg-black/80

          border-2
          transition-all duration-200

          hover:scale-110 active:scale-95
          overflow-hidden
        "
        style={{
          color: neon,
          borderColor: neon,
          boxShadow: `0 0 25px ${neon}66`,
        }}
      >
        {/* SCANLINE EFFECT */}
        <span
          className="absolute inset-0 animate-pulse"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent,
              ${neon}1a,
              transparent
            )`,
          }}
        />

        {/* TEXT */}
        START NMAP SIMULATION
      </button>

      {/* SUBTITLE */}
      <div
        className="mt-6 text-[12px] tracking-[0.5em] uppercase animate-pulse"
        style={{ color: `${neon}aa` }}
      >
        ▓ Secure Network Exploration Game ▓
      </div>

      {/* SMALL HINT */}
      <div
        className="mt-2 text-[10px] tracking-widest"
        style={{ color: `${neon}66` }}
      >
        Click to enter system environment
      </div>

    </div>
  );
};

export default NmapBtn;