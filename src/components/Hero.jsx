import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[15vh] flex flex-col items-center overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b z-0" />

      {/* TOP RIGHT TITLE */}
      <img
        src="/assets/Silknet_title.png"
        alt="title"
        className="absolute top-6 right-6 w-[260px] object-contain z-20"
      />

      {/* CENTER BLOCK */}
      <div className="z-10 flex flex-col items-center justify-center text-center">

        <img
          src="/assets/silknet_logoo.png"
          alt="silknet"
          className="w-[400px] h-[400px] object-contain"
        />

      </div>

      {/* BOTTOM BUTTON */}
      <div className="z-10 mt-auto mb-10 flex justify-center w-full">
        <button className="px-10 py-3 bg-sky-600 text-white font-semibold
                           border border-sky-300
                           shadow-[0_0_15px_rgba(56,189,248,0.4)]
                           hover:bg-sky-700 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]
                           transition duration-300
                           uppercase tracking-widest
                           clip-path-[polygon(10px_0%,100%_0%,100%_70%,90%_100%,0%_100%,0%_30%)]">
          GET STARTED
        </button>
      </div>

    </section>
  );
}