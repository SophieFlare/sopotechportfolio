import React, { useState } from "react";
import NetMap from "./net/NetMap";
import TNet from "./net/TNet";
import WindowsBar from "../components/layout/WindowsBar";

import NetCoreLab from "./net/NetCoreLab";
import NetModelss from "./net/NetModelss";
import Protocol from "./net/Protocol";

export default function Network() {
  const [activePanel, setActivePanel] = useState(null);

  const closePanel = () => setActivePanel(null);

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-x-hidden">

      {/* TASKBAR */}
      <WindowsBar onOpenPanel={setActivePanel} />

      {/* ================= SCENE (NOW SCROLLS NATURALLY) ================= */}
      <div className="relative w-full">

        {/* SECTION 1 - VISUAL MAP */}
        <section className="relative w-full h-screen">
          <NetMap />
          <TNet />
        </section>

        {/* SECTION 2 - EXTRA SPACE (THIS CREATES SCROLL) */}
        <section className="relative w-full min-h-screen bg-black border-t border-sky-400/10">
          <div className="w-full h-full flex items-center justify-center text-sky-400 opacity-40">
            NETWORK LAB CONTINUES BELOW...
          </div>
        </section>

      </div>

      {/* ================= OVERLAY PANELS ================= */}
      {activePanel && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[99999] flex items-center justify-center">

          <button
            onClick={closePanel}
            className="absolute top-6 right-6 text-white text-xl z-[9001]"
          >
            ✕
          </button>

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