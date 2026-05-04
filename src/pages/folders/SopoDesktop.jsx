import React, { useEffect, useState } from "react";

const SopoDesktop = () => {
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMsg(true);
    }, 800); // delay for "boot effect"

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">

      {/* IMAGE PANEL */}
      <div className="absolute bottom-0 right-0 h-[50vh] w-[20%] z-20 flex items-center justify-center overflow-hidden">
        <img
          src="/cv/pixel_sopo.png"
          className="w-full h-full object-cover object-center"
          alt="system panel"
        />
      </div>

      {/* SOPØ MESSAGE BOX */}
      {showMsg && (
        <div className="absolute bottom-[44vh] right-[8%] z-30 font-mono">
          
          {/* speech bubble */}
          <div className="relative bg-black border border-[#ff0033] text-[#ff0033] px-4 py-3 shadow-[0_0_20px_#ff0033] max-w-[260px] animate-pulse">

            <p className="text-s tracking-wider">
              ▓ SYSTEM ACTIVE ▓<br />
              SOPØ.<br />
              PS➤ gateway.local : offline
            </p>

            {/* triangle pointer */}
            <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-black border-r border-b border-[#ff0033] rotate-45" />
          </div>

        </div>
      )}

    </div>
  );
};

export default SopoDesktop;