import React, { useState } from "react";
import NetworkMap from "../components/NetworkMap";
import Intro from "../components/ui/Intro";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen pt-[15vh] flex flex-col items-center overflow-hidden">

      {/* 🌐 NETWORK BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <NetworkMap />
      </div>

      {/* TOP RIGHT TITLE */}
      <img
        src="/Silknet_title.png"
        alt="title"
        className="absolute top-[10%] right-6 w-[260px] object-contain z-20"
      />

<div className="z-20 mt-auto mb-10 flex justify-center w-full">
  <button
    onClick={() => setOpen(true)}
    className="
      relative px-12 py-3

      text-white font-semibold uppercase tracking-[0.25em] text-sm

      bg-white/5 backdrop-blur-md

      border border-sky-400/40

      shadow-[0_0_20px_rgba(56,189,248,0.25)]

      hover:shadow-[0_0_35px_rgba(56,189,248,0.6)]
      hover:border-sky-300/70
      hover:scale-[1.03]

      active:scale-95

      transition-all duration-300

      overflow-hidden
      group
    "
  >
    {/* glass inner glow */}
    <span className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-white/5 to-sky-500/10 opacity-60" />

    {/* moving shine */}
    <span className="
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r from-transparent via-white/30 to-transparent
      group-hover:translate-x-full
      transition-transform duration-700
    " />

    {/* border glow pulse */}
    <span className="
      absolute inset-0 border border-sky-400/30
      shadow-[inset_0_0_12px_rgba(56,189,248,0.2)]
    " />

    {/* text */}
    <span className="relative z-10">
      START 
    </span>

    {/* corner tech accent */}
    <span className="absolute top-1 left-2 w-2 h-2 bg-sky-400/70 rotate-45" />
    <span className="absolute bottom-1 right-2 w-2 h-2 bg-sky-400/70 rotate-45" />
  </button>
</div>

      {/* MODAL */}
      <Intro open={open} onClose={() => setOpen(false)} />

    </section>
  );
}