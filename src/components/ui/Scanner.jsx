import { useState } from "react";

const Scanner = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      {/* VERTICAL SCAN LINE */}
      {active && (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          <div className="w-full h-[2px] bg-sky-400 shadow-[0_0_15px_#38bdf8] animate-[scan_1.5s_linear_infinite]" />
        </div>
      )}

      {/* HORIZONTAL SCAN LINE */}
      {active && (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          <div className="h-full w-[2px] bg-sky-400 shadow-[0_0_15px_#38bdf8] animate-[scanHorizontal_2s_linear_infinite]" />
        </div>
      )}

      {/* SCANNER UI */}
      <div
        onClick={() => setActive(!active)}
        className="fixed bottom-10 right-10 z-[9999] cursor-pointer"
      >
        <div className="relative w-[140px] h-[140px] rounded-full border border-sky-400 bg-black/30 backdrop-blur-md shadow-[0_0_20px_#38bdf8] flex items-center justify-center">

          {/* outer pulse ring */}
          <div className="absolute inset-0 rounded-full border border-sky-400 animate-ping opacity-30" />

          {/* inner spin ring */}
          <div className="absolute inset-4 rounded-full border border-sky-400 animate-spin opacity-50" />

          {/* label */}
          <p className="text-sky-400 font-mono text-xs tracking-widest z-10">
            DEVICE SCANNER
          </p>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }

        @keyframes scanHorizontal {
          0% { transform: translateX(-100vw); }
          100% { transform: translateX(100vw); }
        }
      `}</style>
    </>
  );
};

export default Scanner;