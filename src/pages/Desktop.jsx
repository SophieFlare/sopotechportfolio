import React, { useState } from "react";
import KaliDesktop from "./cv/KaliDesktop";
import WindowsBar from "../components/layout/WindowsBar";
import FileExplorer from "./FileExplorer";
import Network from "./cv/folders/Network";
import Nmap from "../nmap/algorithm/Nmap";

const Desktop = () => {
  const [openFolder, setOpenFolder] = useState(null);

  const systemItems = [
    { id: "trash", label: "Recycle Bin", icon: "🗑️", x: 3, y: 25 },
    { id: "thispc", label: "This PC", icon: "💻", x: 4, y: 5 },
    { id: "network", label: "Network", icon: "🌐", x: 4, y: 15 },
    { id: "nmap", label: "Nmap", icon: "📁", x: 4, y: 85 },
    { id: "sopo", label: "SOPØ", icon: "📁", x: 4, y: 35 },
  ];

  // 🔴 RED THEME (DESKTOP MODE)
  const theme = {
    border: "border-[#ff0033]",
    text: "text-[#ff0033]",
    glow: "shadow-[0_0_25px_#ff0033]",
    bgOverlay: "bg-[#ff0033]/10",
    softText: "text-[#ff0033]/70",
  };

  return (
    <div
      className="w-full h-screen relative overflow-hidden font-mono"
      style={{
        backgroundImage: `url(/cv/kali.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔴 RED OVERLAY */}
      <div
        className={`absolute inset-0 ${theme.bgOverlay} backdrop-brightness-50`}
      />

      {/* DESKTOP ICONS */}
      <KaliDesktop items={systemItems} onOpen={setOpenFolder} />

      {/* TASKBAR */}
      <WindowsBar />

      {/* ================= SOPØ ================= */}
      {openFolder === "sopo" && (
        <Window
          title="SOPØ File Explorer"
          theme={theme}
          onClose={() => setOpenFolder(null)}
        >
          <FileExplorer />
        </Window>
      )}

      {/* ================= TRASH ================= */}
      {openFolder === "trash" && (
        <Window
          title="Recycle Bin"
          theme={theme}
          onClose={() => setOpenFolder(null)}
        >
          <p className={theme.softText}>Trash is empty.</p>
        </Window>
      )}

      {/* ================= THIS PC ================= */}
      {openFolder === "thispc" && (
        <Window
          title="This PC"
          theme={theme}
          onClose={() => setOpenFolder(null)}
        >
          <p className={theme.softText}>
            Local drives not found (simulated system).
          </p>
        </Window>
      )}

      {/* ================= NETWORK ================= */}
      {openFolder === "network" && (
        <Window
          title="Network"
          theme={theme}
          onClose={() => setOpenFolder(null)}
        >
          <Network />
        </Window>
      )}

      {/* ================= NMAP ================= */}
      {openFolder === "nmap" && (
        <Window
          title="NMAP"
          theme={theme}
          onClose={() => setOpenFolder(null)}
        >
          <Nmap />
        </Window>
      )}
    </div>
  );
};

export default Desktop;
const Window = ({ title, onClose, children, theme }) => {
  // fallback (prevents crash)
  const t = theme || {
    border: "border-sky-400",
    text: "text-sky-400",
    glow: "shadow-[0_0_25px_#38bdf8]",
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-40">
      <div className={`w-[650px] max-h-[80vh] min-h-[300px] bg-black border ${t.border} ${t.glow} flex flex-col`}>

        {/* HEADER */}
        <div className={`flex justify-between p-2 border-b ${t.border} ${t.text}`}>
          <span>{title}</span>
          <button onClick={onClose}>✕</button>
        </div>

        {/* CONTENT */}
        <div className="p-3 overflow-auto h-full">
          {children}
        </div>

      </div>
    </div>
  );
};