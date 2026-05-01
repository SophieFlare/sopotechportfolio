import React, { useState } from "react";
import KaliDesktop from "./cv/KaliDesktop";
import WindowsBar from "../components/layout/WindowsBar";
import FileExplorer from "./FileExplorer";
import Network from "./cv/folders/Network";

const Desktop = () => {
  const [openFolder, setOpenFolder] = useState(null);

  const systemItems = [
    { id: "trash", label: "Recycle Bin", icon: "🗑️", x: 3, y: 25 },
    { id: "thispc", label: "This PC", icon: "💻", x: 4, y: 5 },
    { id: "network", label: "Network", icon: "🌐", x: 4, y: 15 },
    { id: "sopo", label: "SOPØ", icon: "📁", x: 4, y: 35 },
  ];

  return (
    <div
      className="w-full h-screen relative overflow-hidden font-mono"
      style={{
        backgroundImage: `url(/cv/windows.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* BLUE OVERLAY */}
      <div className="absolute inset-0 bg-sky-400/10 backdrop-brightness-50" />

      {/* DESKTOP ICONS */}
      <KaliDesktop items={systemItems} onOpen={setOpenFolder} />

      {/* TASKBAR */}
      <WindowsBar />

      {/* ================= SOPØ ================= */}
      {openFolder === "sopo" && (
        <Window title="SOPØ File Explorer" onClose={() => setOpenFolder(null)}>
          <FileExplorer />
        </Window>
      )}

      {/* ================= TRASH ================= */}
      {openFolder === "trash" && (
        <Window title="Recycle Bin" onClose={() => setOpenFolder(null)}>
          <p className="text-sky-300/70">Trash is empty.</p>
        </Window>
      )}

      {/* ================= THIS PC ================= */}
      {openFolder === "thispc" && (
        <Window title="This PC" onClose={() => setOpenFolder(null)}>
          <p className="text-sky-300/70">
            Local drives not found (simulated system).
          </p>
        </Window>
      )}

      {/* ================= NETWORK ================= */}
      {openFolder === "network" && (
        <Window title="Network" onClose={() => setOpenFolder(null)}>
          <Network />
        </Window>
      )}
    </div>
  );
};

export default Desktop;

/* ================= WINDOW COMPONENT ================= */

const Window = ({ title, onClose, children }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-40">
      <div className="w-[650px] max-h-[80vh] min-h-[300px] bg-black border border-sky-400 shadow-[0_0_25px_#38bdf8] flex flex-col rounded-md">

        {/* TOP BAR */}
        <div className="flex justify-between p-2 border-b border-sky-400 text-sky-400 bg-black/60">
          <span>{title}</span>
          <button className="hover:text-white transition" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="h-full overflow-auto p-3">
          {children}
        </div>

      </div>
    </div>
  );
};