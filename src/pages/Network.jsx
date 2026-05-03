import React, { useState } from "react";
import NetMap from "./net/NetMap";
import Devices from "./net/Devices";
import WindowsBar from "../components/layout/WindowsBar";

import NetCoreLab from "./net/NetCoreLab";
import NetModelss from "./net/NetModelss";
import Protocol from "./net/Protocol";

export default function Network() {
  const [activePanel, setActivePanel] = useState(null);

  const closePanel = () => setActivePanel(null);

  return (
    <div className="w-full min-h-screen bg-black relative overflow-x-hidden">

      {/* WINDOWS BAR (PASS HANDLER) */}
      <WindowsBar onOpenPanel={setActivePanel} />

      {/* BASE CONTENT */}
      <div className="relative w-full min-h-screen">
        <NetMap />
        <Devices />
      </div>

      {/* OVERLAY */}
      {activePanel && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center">

          <button
            onClick={closePanel}
            className="absolute top-6 right-6 text-white text-xl"
          >
            ✕
          </button>

          <div className="w-full h-full overflow-auto">
            {activePanel === "lab" && <NetCoreLab />}
            {activePanel === "models" && <NetModelss />}
            {activePanel === "protocol" && <Protocol />}
          </div>

        </div>
      )}
    </div>
  );
}