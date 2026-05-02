import React from "react";
import Topology from "./Topology";
import Cables from "./Cables";
import Address from "./Address";

const NetCoreLab = () => {
  return (
    <div className="w-full h-screen bg-black text-sky-400 font-mono relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#38bdf8_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* TITLE */}
      <div className="relative z-10 text-center pt-4 text-xs tracking-widest opacity-70">
        NETWORK ENGINEERING LAB
      </div>

      {/* MAIN LAYOUT */}
      <div className="relative z-10 flex gap-6 p-6 h-[calc(100vh-40px)]">

        {/* LEFT SIDE (25% + 25% stacked) */}
        <div className="w-1/2 flex flex-col gap-4">

          {/* IP / ADDRESS */}
          <div className="h-1/2 border border-sky-400 overflow-hidden">
            <Address />
          </div>

          {/* CABLES */}
          <div className="h-1/2 border border-sky-400 overflow-hidden">
            <Cables />
          </div>

        </div>

        {/* RIGHT SIDE (50% width topology full height) */}
        <div className="w-1/2 border border-sky-400 overflow-hidden">
          <Topology />
        </div>

      </div>
    </div>
  );
};

export default NetCoreLab;