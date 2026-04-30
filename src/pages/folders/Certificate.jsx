import React, { useState } from "react";

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
    <div className="w-full h-full flex flex-col font-mono text-white">

   

      {/* CONTENT */}
      <div className="flex-1 relative flex items-center justify-center bg-black">

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="
            absolute left-0 top-0 h-full w-14
            bg-gradient-to-r from-sky-500/30 to-transparent
            hover:from-sky-500/50
            flex items-center justify-center
            text-white text-2xl
            transition
          "
        >
          ‹
        </button>

        {/* IMAGE */}
        <img
          src={images[index]}
          alt="certificate"
          className="w-full h-full object-contain"
        />

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="
            absolute right-0 top-0 h-full w-14
            bg-gradient-to-l from-sky-500/30 to-transparent
            hover:from-sky-500/50
            flex items-center justify-center
            text-white text-2xl
            transition
          "
        >
          ›
        </button>

      </div>

      {/* FOOTER */}
      <div className="px-4 py-2 text-xs text-white/50 text-center border-t border-sky-400/10">
        VERIFIED DIGITAL CERTIFICATE ARCHIVE
      </div>

    </div>
  );
};

export default Certificate;