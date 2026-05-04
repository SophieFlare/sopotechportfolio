import React from "react";
import Devices from "./Devices";
import SoposTl from "../../components/layout/terminal/SoposTl";

const TNet = () => {
  return (
    <div className="w-full h-screen flex flex-col font-mono">

      {/* TOP BLUE HEADER */}
      <div className="w-full h-10 flex items-center px-4 border-b border-sky-400/20 text-sky-400 text-xs tracking-widest bg-black/60">
        NETWORK VISUALIZATION :: LIVE NODE ANALYSIS
      </div>

      {/* CONTENT AREA */}
      <div className="flex w-full h-[calc(100vh-2.5rem)]">

        {/* LEFT 50% */}
        <div className="w-1/2 h-full border-r border-sky-400/10 overflow-hidden">
          <Devices />
        </div>

        {/* RIGHT 50% */}
        <div className="w-1/2 h-full overflow-hidden">
          <SoposTl />
        </div>

      </div>
    </div>
  );
};

export default TNet;