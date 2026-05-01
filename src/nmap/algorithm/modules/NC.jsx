import React, { useState } from "react";

const MESSAGES = [
  "DATA EXTRACTION COMPLETE. NMAP LEVEL SUCCESSFULLY BREACHED!",
  "EXECUTE THE ACQUIRED COMMAND KEYS IN YOUR TERMINAL TO UNLOCK SOPO'S PORTFOLIO!"
];

const FINAL = {
  command: "ssh sopo@terminal",
  password: "python80"
};

const NC = ({ onClose, onComplete  }) => {
  const [index, setIndex] = useState(0);
  const isLast = index === MESSAGES.length - 1;

  const next = () => {
    setIndex((p) => Math.min(p + 1, MESSAGES.length - 1));
  };

  const prev = () => {
    setIndex((p) => Math.max(p - 1, 0));
  };

  const handleTerminate = () => {
    if (!isLast) return;

    // GLOBAL EVENT
    window.dispatchEvent(new Event("nc:terminated"));
    onComplete?.();
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center font-mono text-purple-300">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-[1px] h-full left-1/2 bg-purple-500 animate-pulse" />
        <div className="absolute w-full h-[1px] top-1/2 bg-purple-500 animate-pulse" />
      </div>

      {/* WINDOW */}
      <div className="w-[560px] border border-purple-700 bg-black/90 p-6 shadow-[0_0_70px_rgba(168,85,247,0.3)]">

        {/* HEADER */}
        <div className="text-xs mb-4 flex justify-between text-purple-300 tracking-widest">
          <span>NETCAT://QUANTUM CORE ACCESS</span>
          <span className="animate-pulse text-purple-400">● LIVE</span>
        </div>

        {/* MESSAGE */}
        <div className="text-xl min-h-[120px] text-purple-200 tracking-wide">
          {MESSAGES[index]}
        </div>

        {/* NAV */}
        <div className="flex justify-between mt-6 border-t border-purple-900 pt-3 text-sm text-purple-300">
          <button onClick={prev} className="hover:text-purple-100">
            ◀ PREV
          </button>

          <span className="opacity-60">
            {index + 1} / {MESSAGES.length}
          </span>

          <button onClick={next} className="hover:text-purple-100">
            NEXT ▶
          </button>
        </div>

        {/* FINAL PAYLOAD */}
        {isLast && (
          <div className="mt-6 border border-purple-700 p-3 text-sm bg-black/40 shadow-[0_0_30px_rgba(168,85,247,0.2)]">

            <div className="text-white">
              ✔ {FINAL.command}
            </div>

            <div className="text-white">
              ✔ {FINAL.password}
            </div>

          </div>
        )}

        {/* TERMINATE */}
        <button
          onClick={handleTerminate}
          disabled={!isLast}
          className={`
            mt-5 w-full py-2 border tracking-widest transition
            ${
              isLast
                ? "border-white hover:bg-white hover:text-black"
                : "border-white opacity-40 cursor-not-allowed"
            }
          `}
        >
          TERMINATE SESSION
        </button>

      </div>
    </div>
  );
};

export default NC;