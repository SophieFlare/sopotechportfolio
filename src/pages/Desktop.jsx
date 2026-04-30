import React, { useState } from "react";
import KaliDesktop from "./cv/KaliDesktop";
import WindowsBar from "./cv/WindowsBar";

import Sopo from "./cv/folders/Sopo";
import Contact from "./cv/folders/Contact";
import Certificate from "./cv/folders/Certificate";
import Skills from "./cv/folders/Skills";
import Experience from "./cv/folders/Experience";
import Network from "./cv/folders/Network";
const Desktop = () => {
  const [openFolder, setOpenFolder] = useState(null);

  /* ================= DESKTOP ICONS ================= */
  const items = [
    { id: "sopo", label: "SOPØ", icon: "📁", x: 4, y: 35 },
    { id: "skills", label: "TECH SKILLS", icon: "📁", x: 3, y: 45 },
    { id: "certificate", label: "CERTIFICATES", icon: "📁", x: 2.5, y: 55 },
    { id: "experience", label: "EXPERIENCE", icon: "📁", x: 3, y: 65 },
    { id: "contact", label: "CONTACT", icon: "📁", x: 3.5, y: 75 },
  ];

  const systemItems = [
    { id: "trash", label: "Recycle Bin", icon: "🗑️", x: 3, y: 25 },
    { id: "thispc", label: "This PC", icon: "💻", x: 4, y: 5 },
    { id: "network", label: "Network", icon: "🌐", x: 4, y: 15 },
  ];

  const allItems = [...items, ...systemItems];

  /* ================= VALID WINDOWS ================= */
  const validWindows = [
    "sopo",
    "skills",
    "certificate",
    "experience",
    "contact",
    "trash",
    "thispc",
    "network",
  ];

  return (
    <div
      className="w-full h-screen relative overflow-hidden font-mono"
      style={{
        backgroundImage: `url(/cv/kalli_desktop.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* DESKTOP */}
      <KaliDesktop items={allItems} onOpen={setOpenFolder} />

      {/* TASKBAR */}
      <WindowsBar />

      {/* ================= SOPØ ================= */}
      {openFolder === "sopo" && (
        <Window title="SOPØ" onClose={() => setOpenFolder(null)}>
          <Sopo />
        </Window>
      )}

      {/* ================= SKILLS ================= */}
      {openFolder === "skills" && (
        <Window title="SKILLS" onClose={() => setOpenFolder(null)}>
          <Skills />
        </Window>
      )}

      {/* ================= CERTIFICATE ================= */}
      {openFolder === "certificate" && (
        <Window title="CERTIFICATES" onClose={() => setOpenFolder(null)}>
          <Certificate onClose={() => setOpenFolder(null)} />
        </Window>
      )}

      {/* ================= EXPERIENCE ================= */}
      {openFolder === "experience" && (
        <Window title="EXPERIENCE" onClose={() => setOpenFolder(null)}>
          <Experience />
        </Window>
      )}

      {/* ================= CONTACT ================= */}
     {openFolder === "contact" && (
  <Window title="CONTACT" onClose={() => setOpenFolder(null)}>
    <Contact />
  </Window>
)}

      {/* ================= SYSTEM WINDOWS ================= */}
      {openFolder === "trash" && (
        <Window title="Recycle Bin" onClose={() => setOpenFolder(null)}>
          <p className="text-white/70">Trash is empty.</p>
        </Window>
      )}

      {openFolder === "thispc" && (
        <Window title="This PC" onClose={() => setOpenFolder(null)}>
          <p className="text-white/70">Local drives not found (simulated system).</p>
        </Window>
      )}

      {openFolder === "network" && (
        <Window title="Network" onClose={() => setOpenFolder(null)}>
        <Network/>
        </Window>
      )}

      {/* ================= FALLBACK ================= */}
      {openFolder && !validWindows.includes(openFolder) && (
        <Window title={openFolder} onClose={() => setOpenFolder(null)}>
          <p className="text-white/70 text-sm">Content not linked yet.</p>
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
   <div className="w-[650px] max-h-[80vh] min-h-[300px] bg-black border border-[#ff0033] shadow-[0_0_30px_#ff0033] flex flex-col">
        {/* TOP BAR */}
        <div className="flex justify-between p-2 border-b border-[#ff0033] text-[#ff0033]">
          <span>{title}</span>
          <button onClick={onClose}>✕</button>
        </div>

        {/* CONTENT */}
        <div className="h-full overflow-auto p-3">
          {children}
        </div>

      </div>
    </div>
  );
};