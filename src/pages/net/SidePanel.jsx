import React from "react";

const SidePanel = ({ onOpen }) => {
  return (
    <div className="fixed right-0 top-0 h-full w-20 bg-black/80 border-l border-sky-400/20 backdrop-blur-md z-[9998] flex flex-col items-center pt-20 gap-4">

      <PanelButton label="LAB" onClick={() => onOpen("lab")} />
      <PanelButton label="OSI" onClick={() => onOpen("models")} />
      <PanelButton label="PRT" onClick={() => onOpen("protocol")} />

    </div>
  );
};

const PanelButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="w-14 h-14 border border-sky-400/30 text-xs text-sky-300 hover:bg-sky-400/10 transition"
  >
    {label}
  </button>
);

export default SidePanel;