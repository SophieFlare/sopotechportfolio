import React, { useState } from "react";
import CvRP from "./CvRP";
import SoposTerminal from "./SoposTerminal";

export default function CvViewer() {
  const [open, setOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          relative w-full max-w-[260px]
          flex items-center justify-center gap-2
          px-5 py-2.5
          text-white font-semibold tracking-wide
          bg-[#2b75ae]
          rounded-lg
          border border-[#6bb7ff]/40
          shadow-[0_0_18px_rgba(43,117,174,0.55)]
          hover:shadow-[0_0_35px_rgba(43,117,174,0.95)]
          transition-all duration-300
          overflow-hidden group
          active:scale-95
        "
      >
        <span className="
          absolute inset-0 rounded-lg
          border border-[#6bb7ff]
          opacity-40
          group-hover:opacity-80
          blur-[1px]
        " />

        <span className="
          absolute inset-0
          bg-gradient-to-r from-transparent via-white/25 to-transparent
          -translate-x-full
          group-hover:translate-x-full
          transition-transform duration-700
        " />

        <span className="relative z-10 flex items-center gap-2">
          📄 CV გახსნა
        </span>
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex z-[9999]">

          {/* MAIN WRAPPER */}
          <div className="flex w-[50%] h-full">

            {/* LEFT PDF */}
            <div className="flex-1 flex flex-col bg-[#266698]">

              {/* HEADER */}
              <div className="h-12 flex items-center justify-between px-4 bg-gradient-to-r from-[#2b75ae] to-[#225e8b] text-white">
                <span className="font-semibold">📄 CV Viewer</span>

                <button
                  onClick={() => setOpen(false)}
                  className="hover:rotate-90 transition text-xl"
                >
                  ✕
                </button>
              </div>

              {/* PDF */}
              <div className="flex-1 overflow-y-auto bg-black">
                <iframe
                  src="/Sopo_IT_CV.pdf"
                  className="w-full h-[200vh]"
                  title="CV PDF"
                />
              </div>
            </div>

            {/* GAP AREA (ONLY BUTTON HERE) */}
       {/* GAP AREA (ONLY BUTTON HERE) */}
<div className="w-[90px] relative flex items-end justify-end pl-6 pb-16 translate-x-[10%]">

  {/* TECH SQUARE BUTTON */}
  <button
    onClick={() => setTerminalOpen((p) => !p)}
    className="
      w-20 h-20

      bg-[#0a0f1c]
      border border-[#2b75ae]

      text-[#2b75ae]
      font-mono text-xs

      tracking-widest

      shadow-[0_0_18px_rgba(43,117,174,0.55)]
      hover:shadow-[0_0_30px_rgba(43,117,174,0.95)]

      hover:scale-110
      active:scale-95

      transition-all duration-300

      relative overflow-hidden
    "
  >
    {/* glow scan line */}
    <span className="
      absolute inset-0
      bg-gradient-to-r from-transparent via-[#2b75ae]/30 to-transparent
      -translate-x-full
      hover:translate-x-full
      transition-transform duration-700
    " />

    <span className="relative z-10">
      TERM
    </span>
  </button>

  {/* TERMINAL FLOATING PANEL */}
  {terminalOpen && (
    <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-[9999]">

      <div className="
        w-[420px]
        h-[70vh]

        bg-black
        border border-[#2b75ae]

        shadow-[0_0_35px_rgba(43,117,174,0.6)]
        rounded-xl

        overflow-hidden
      ">
        <SoposTerminal onClose={() => setTerminalOpen(false)} />
      </div>

    </div>
  )}

</div>

            {/* RIGHT PANEL */}
            <CvRP />

          </div>
        </div>
      )}
    </>
  );
}