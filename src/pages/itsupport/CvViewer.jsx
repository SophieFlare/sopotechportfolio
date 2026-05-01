import React, { useState } from "react";
import CvRP from "./CvRP";

export default function CvViewer() {
  const [open, setOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
<button
  onClick={() => setOpen(true)}
  className="
    relative w-full max-w-[240px]
    mx-auto

    flex items-center justify-center gap-2

    px-4 py-2

    text-white font-semibold tracking-wide text-sm

    bg-gradient-to-r from-[#81c2f3] to-[#2b75ae]

    rounded-lg

    border border-[#81c2f3]/60

    shadow-[0_0_14px_rgba(43,117,174,0.45)]

    hover:shadow-[0_0_28px_rgba(43,117,174,0.8)]
    hover:scale-[1.03]

    transition-all duration-300

    overflow-hidden
    active:scale-95

    animate-pulse
  "
>
  {/* static glow ring */}
  <span className="
    absolute inset-0 rounded-lg
    border border-[#6bb7ff]
    opacity-40
  " />

  {/* 🔥 AUTO MOVING SHINE (NO HOVER REQUIRED) */}
  <span className="
    absolute inset-0
    bg-gradient-to-r from-transparent via-white/25 to-transparent
    animate-[shine_2.5s_linear_infinite]
  " />

  <span className="relative z-10 flex items-center gap-2">
    📄  CV ჩამოტვირთვა
  </span>

  {/* LOCAL KEYFRAMES */}
  <style>
    {`
      @keyframes shine {
        0% {
          transform: translateX(-120%);
        }
        100% {
          transform: translateX(120%);
        }
      }
    `}
  </style>
</button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex z-[9999]">

          {/* MAIN WRAPPER */}
        <div className="flex w-[43%] h-full border-2 border-sky-400 shadow-[0_0_20px_#38bdf8]">

            {/* LEFT PDF */}
            <div className="flex-1 flex flex-col bg-[#000000]">

              {/* HEADER */}
              <div className="h-12 flex items-center justify-between px-4 bg-gradient-to-r from-[#2b75ae] to-[#225e8b] text-white">
                <span className="font-semibold text-წჰიტე">📄 CV Viewer</span>

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


            {/* RIGHT PANEL */}
            <CvRP />

          </div>
        </div>
      )}
    </>
  );
}