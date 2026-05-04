import React from "react";
import Devices from "./Devices";
import SoposTl from "../../components/layout/terminal/SoposTl";

const TNet = () => {
  return (
    <div className="w-full h-screen flex font-mono">

      {/* LEFT 50% */}
      <div className="w-1/2 h-full border-r border-sky-400/10 overflow-hidden">
        <Devices />
      </div>

      {/* RIGHT 50% */}
      <div className="w-1/2 h-full overflow-hidden">
        <SoposTl />
      </div>

    </div>
  );
};

export default TNet;;