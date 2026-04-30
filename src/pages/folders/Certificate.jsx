import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Certificate = ({ onClose }) => {
  const images = [
    "/assets/certificate/sololearn_certificate.jpg",
    "/assets/certificate/fcc_certificate.jpg",
    "/assets/certificate/khan_academy_certificate.jpg",
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full h-full flex flex-col font-mono text-white overflow-hidden">
      
      {/* CONTENT */}
      <div className="flex-1 relative flex items-center justify-center bg-black overflow-hidden">

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="
            absolute left-0 top-0 h-full w-16
            bg-gradient-to-r from-blue-600/40 via-blue-500/20 to-transparent
            hover:from-blue-400/70 hover:via-blue-300/30
            flex items-center justify-start pl-3
            text-blue-400
            opacity-80 hover:opacity-100
            transition duration-300
          "
        >
          <FaChevronLeft className="text-2xl drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
        </button>

        {/* IMAGE */}
        <img
          src={images[index]}
          alt="certificate"
          className="
            w-full h-full
            object-contain
            select-none
            pointer-events-none
          "
        />

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="
            absolute right-0 top-0 h-full w-16
            bg-gradient-to-l from-blue-600/40 via-blue-500/20 to-transparent
            hover:from-blue-400/70 hover:via-blue-300/30
            flex items-center justify-end pr-3
            text-blue-400
            opacity-80 hover:opacity-100
            transition duration-300
          "
        >
          <FaChevronRight className="text-2xl drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`
                h-2 w-2 rounded-full cursor-pointer transition
                ${
                  i === index
                    ? "bg-blue-400 shadow-[0_0_6px_rgba(59,130,246,0.9)] scale-125"
                    : "bg-white/30 hover:bg-white/60"
                }
              `}
            />
          ))}
        </div>

      </div>

      {/* FOOTER */}
      <div className="px-4 py-2 text-xs text-white/50 text-center border-t border-blue-400/10">
        VERIFIED DIGITAL CERTIFICATE ARCHIVE
      </div>
    </div>
  );
};

export default Certificate;