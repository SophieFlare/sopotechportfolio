import React from "react";

const SidePanel = ({ isOpen, onClose, onOpenSection }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[260px] bg-black border-l border-sky-400/30 
      transform transition-transform duration-300 z-[9998]
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* HEADER */}
      <div className="p-4 border-b border-sky-400/20 flex justify-between items-center">
        <span className="tracking-widest text-sky-300">SidePanel</span>
        <button onClick={onClose}>✕</button>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-3 text-sm">

        <button
          onClick={() => {
            onOpenSection("netcorelab");
            onClose();
          }}
          className="border border-white/20 px-3 py-2 hover:border-sky-400"
        >
          Core Lab
        </button>

        <button
          onClick={() => {
            onOpenSection("models");
            onClose();
          }}
          className="border border-white/20 px-3 py-2 hover:border-sky-400"
        >
          OSI / TCP Models
        </button>

        <button
          onClick={() => {
            onOpenSection("protocol");
            onClose();
          }}
          className="border border-white/20 px-3 py-2 hover:border-sky-400"
        >
          Protocols
        </button>

      </div>
    </div>
  );
};

export default SidePanel;