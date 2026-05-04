import React, { useEffect, useState } from "react";

const SopoDesktop = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    `➤ TCP Handshake Failed  
SYN → ❌  
ACK → ❌  
Connection Timeout`,

    `➤ Restart network`
  ];

  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setMessageIndex(0);
    }, 3000);

    const switchTimer = setTimeout(() => {
      setMessageIndex(1);
    }, 6000); // switch to 2nd message

    return () => {
      clearTimeout(bootTimer);
      clearTimeout(switchTimer);
    };
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

      {/* MESSAGE BOX */}
      <div className="absolute bottom-[44vh] right-[8%] z-30 font-mono">
        <div className="relative bg-black border border-[#ff0033] text-[#ff0033] px-4 py-3 shadow-[0_0_20px_#ff0033] max-w-[290px] animate-pulse">

          <p className="text-s tracking-wider whitespace-pre-line">
            {messages[messageIndex]}
          </p>

          {/* triangle pointer */}
          <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-black border-r border-b border-[#ff0033] rotate-45" />
        </div>
      </div>

    </div>
  );
};

export default SopoDesktop;