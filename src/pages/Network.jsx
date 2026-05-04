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
    <div className="w-full min-h-screen bg-black text-white relative overflow-x-hidden">

      {/* TASKBAR (ALWAYS TOP LAYER) */}
      <WindowsBar onOpenPanel={setActivePanel} />

      {/* ================= SCENE SECTION ================= */}
      <section className="relative w-full h-screen z-0">
        
        {/* BACKGROUND NETWORK SCENE */}
    <div className="absolute inset-0 z-0">
  <NetMap />
  <Devices />
</div>

      </section>



      {/* ================= OVERLAY PANELS ================= */}
  {activePanel && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[99999] flex items-center justify-center">
          {/* CLOSE BUTTON */}
          <button
            onClick={closePanel}
            className="absolute top-6 right-6 text-white text-xl z-[9001]"
          >
            ✕
          </button>

          {/* CONTENT */}
          <div className="w-full h-full overflow-auto">
            {activePanel === "netcorelab" && <NetCoreLab />}
            {activePanel === "models" && <NetModelss />}
            {activePanel === "protocol" && <Protocol />}
          </div>

        </div>
      )}

    </div>
  );
}