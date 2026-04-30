import { useState } from "react";

const Scanner = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      {/* FULL SCREEN SCAN (VERTICAL) */}
      {active && (
        <div className="full-screen-scan bg-white opacity-80"></div>
      )}

      {/* FULL SCREEN SCAN (HORIZONTAL) */}
      {active && (
        <div className="full-screen-scan-horizontal bg-white opacity-80"></div>
      )}

      {/* SCANNER UI */}
      <div
        className="device-scanner mt-[11%]  ml-[7%]  border-white shadow-[0_0_20px_white]"
        onClick={() => setActive(!active)}
      >
        <div className="radar border-white"></div>

        <p className="device-label font-mono text-white tracking-widest">
          DEVICE SCANNER
        </p>
      </div>

      {/* LOCAL STYLE FIXES */}
      <style>
        {`
          /* REMOVE ANY COLOR MIXING */
          .full-screen-scan,
          .full-screen-scan-horizontal {
            mix-blend-mode: normal !important;
          }

          /* OPTIONAL: CLEAN WHITE GLOW */
          .device-scanner {
            background: rgba(255,255,255,0.03);
            backdrop-filter: blur(2px);
          }

          .radar {
            box-shadow: 0 0 15px white, 0 0 30px rgba(255,255,255,0.4);
          }
        `}
      </style>
    </>
  );
};

export default Scanner;