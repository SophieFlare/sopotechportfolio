import React, { useState } from "react";

export default function CvViewer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔥 PREMIUM BUTTON */}
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
  {/* animated glow border */}
  <span className="
    absolute inset-0 rounded-lg
    border border-[#6bb7ff]
    opacity-40
    group-hover:opacity-80
    blur-[1px]
  " />

  {/* scanning light effect */}
  <span className="
    absolute inset-0
    bg-gradient-to-r from-transparent via-white/25 to-transparent
    -translate-x-full
    group-hover:translate-x-full
    transition-transform duration-700
  " />

  {/* top highlight */}
  <span className="
    absolute top-0 left-0 right-0 h-[40%]
    bg-white/10
    rounded-t-lg
  " />

  {/* pulse ring */}
  <span className="
    absolute inset-0
    rounded-lg
    animate-pulse
    bg-[#3a8fd1]/10
  " />

  {/* content */}
  <span className="relative z-10 flex items-center gap-2">
    📄 CV გახსნა
  </span>
</button>

      {/* 🔥 MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">

          <div className="w-[85%] h-[90%] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_.2s_ease-in]">

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
            <iframe
              src="/Sopo_IT_CV.pdf"
              className="flex-1 w-full"
              title="CV PDF"
            />
          </div>
        </div>
      )}
    </>
  );
}