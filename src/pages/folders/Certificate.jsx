import React, { useState } from "react";

const Certificate = ({ onClose }) => {
  const images = [
    "/assets/certificate/fcc_certificate.jpg",
    "/assets/certificate/sololearn_certificate.jpg", // add your second one here
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div id="certificate" className="fixed inset-0 flex items-center justify-center z-[9999]">

      {/* WINDOW */}
      <div className="w-[700px] bg-black border border-[#ff0033] shadow-[0_0_30px_#ff0033] relative font-mono">

        {/* TOP BAR */}
        <div className="flex justify-between items-center px-3 py-2 border-b border-[#ff0033]/30 bg-black">
          <span className="text-[#ff0033] text-sm">
            CERTIFICATES.exe ({index + 1}/{images.length})
          </span>

          <button
            onClick={onClose}
            className="text-[#ff0033] hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4 flex flex-col items-center">

          {/* IMAGE VIEWER */}
          <div className="relative w-full border border-[#ff0033]/40 bg-black">

            {/* LEFT ARROW */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-[#ff0033] text-xl hover:text-white"
            >
              &lt;
            </button>

            {/* IMAGE */}
            <img
              src={images[index]}
              alt="certificate"
              className="w-full h-auto max-h-[450px] object-contain"
            />

            {/* RIGHT ARROW */}
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#ff0033] text-xl hover:text-white"
            >
              &gt;
            </button>

          </div>

          {/* LABEL */}
          <p className="text-xs text-[#ff0033]/60 mt-3 text-center">
            VERIFIED DIGITAL CERTIFICATE ARCHIVE
          </p>

        </div>

      </div>
    </div>
  );
};

export default Certificate;