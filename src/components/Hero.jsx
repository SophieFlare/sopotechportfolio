import React from "react";
import NetworkMap from "../components/NetworkMap";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[15vh] flex flex-col items-center overflow-hidden">

      {/* 🌐 NETWORK BACKGROUND (includes logo inside it) */}
      <div className="absolute inset-0 z-0">
        <NetworkMap />
      </div>

      {/* TOP RIGHT TITLE */}
      <img
        src="/Silknet_title.png"
        alt="title"
        className="absolute top-[10%] right-6 w-[260px] object-contain z-20"
      />

      {/* BUTTON */}
      <div className="z-20 mt-auto mb-10 flex justify-center w-full">
        <button className="px-10 py-3 bg-sky-600 text-white font-semibold
                           border border-sky-300
                           shadow-[0_0_15px_rgba(56,189,248,0.4)]
                           hover:bg-sky-700 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]
                           transition duration-300
                           uppercase tracking-widest">
          GET STARTED
        </button>
      </div>

    </section>
  );
}