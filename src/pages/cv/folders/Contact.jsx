import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col font-mono text-[#ff0033] overflow-hidden">



      {/* ================= HEADER ================= */}
      <div className="px-3 py-2 border-b border-[#ff0033]/30 text-xs tracking-[0.3em]">
        CONTACT PROTOCOL // SECURE NODE
      </div>

      {/* ================= CONTENT ================= */}
      <div className=" p-4 flex flex-col justify-center gap-4 relative z-10">

        {/* STATUS */}
        <div className="text-xs space-y-2">

          <div className="flex justify-between text-white/70">
            <span>NODE</span>
            <span className="text-[#ff0033]">ONLINE</span>
          </div>

          <div className="flex justify-between text-white/70">
            <span>ENCRYPTION</span>
            <span className="text-[#ff0033]">ACTIVE</span>
          </div>

          <div className="flex justify-between text-white/70">
            <span>CONNECTION</span>
            <span className="text-[#ff0033]">STABLE</span>
          </div>

        </div>

        {/* SIGNAL */}
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span className="text-[#ff0033]">●</span>
          SIGNAL FLOW ACTIVE
          <span className="animate-pulse">▮▮▮▮▮</span>
        </div>

        {/* LOG */}
        <div className="border border-[#ff0033]/30 p-3 text-xs text-white/60 leading-5">
          &gt; initializing... <br />
          &gt; handshake complete <br />
          &gt; secure channel ready
        </div>

        {/* BUTTON */}
        <div className="flex justify-between items-center mt-2">

          <div className="text-[10px] text-white/40">
            READY FOR TRANSMISSION
          </div>

          <Link
            to="/pages/contact"
            className="px-3 py-1 border border-[#ff0033] text-[#ff0033]
                       hover:bg-[#ff0033] hover:text-black transition"
          >
            OPEN CONTACT →
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Contact;