import { useState } from "react";

const Scanner = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      {/* SCAN LINES OVERLAY */}
      {active && (
        <div className="fixed inset-0 z-[9997] pointer-events-none overflow-hidden">

          {/* horizontal */}
          <div className="absolute w-full h-[2px] bg-sky-400 shadow-[0_0_15px_#38bdf8] animate-scanY" />

          {/* vertical */}
          <div className="absolute h-full w-[2px] bg-sky-400 shadow-[0_0_15px_#38bdf8] animate-scanX" />
        </div>
      )}

      {/* BUTTON (BELOW VIRUS POPUPS BUT STILL CLICKABLE) */}
      <div
        onClick={() => setActive((prev) => !prev)}
        className="fixed bottom-10 right-10 z-[9995] cursor-pointer select-none"
      >
        <div className="relative w-[120px] h-[120px] rounded-full border border-sky-400 bg-black/40 backdrop-blur-md shadow-[0_0_15px_#38bdf8] flex items-center justify-center">

          <div className="absolute inset-0 rounded-full border border-sky-400 animate-ping opacity-20" />
          <div className="absolute inset-3 rounded-full border border-sky-400 animate-spin opacity-40" />

          <p className="text-sky-400 font-mono text-[10px] tracking-widest z-10">
            SCANNER
          </p>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes scanY {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }

        @keyframes scanX {
          0% { transform: translateX(-100vw); }
          100% { transform: translateX(100vw); }
        }

        .animate-scanY {
          animation: scanY 2.0s linear infinite;
          will-change: transform;
        }

        .animate-scanX {
          animation: scanX 2.8s linear infinite;
          will-change: transform;
        }
      `}</style>
    </>
  );
};

export default Scanner;