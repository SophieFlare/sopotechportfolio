import React from "react";

const VirusPopup = ({ popup, onClose }) => {
  return (
    <div
      className="fixed w-[240px] bg-black border border-sky-400 text-sky-400 p-3 z-[999]"
      style={{ top: popup.y, left: popup.x }}
    >
      <div className="flex justify-between mb-2 text-xs">
        <span>WARNING</span>

        <button
          onClick={() => onClose(popup.id)}
          className="hover:text-white px-1"
        >
          ✕
        </button>
      </div>

      <p className="text-sm">{popup.text}</p>
    </div>
  );
};

export default VirusPopup;