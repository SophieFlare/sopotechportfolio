import React, { useState, useEffect } from "react";
import NmapCore from "./NmapCore";
import LvlCenter from "./core/LvlCenter";
import NC from "./modules/NC";

const NmapRm = ({ onClose }) => {
  const [hoverMsg, setHoverMsg] = useState("");
  const [activeNode, setActiveNode] = useState(null);

  const [unlocked, setUnlocked] = useState(() => {
    const saved = sessionStorage.getItem("nmap_unlocked");
    return saved ? JSON.parse(saved) : ["boot"];
  });

  const [allUnlocked, setAllUnlocked] = useState(() => {
    return sessionStorage.getItem("nmap_all") === "true";
  });

  const [netcatOpen, setNetcatOpen] = useState(false);

  // 💀 FIXED: NC completion now unlocks EVERYTHING
  const handleNcComplete = () => {
    const fullUnlock = ["boot", "level1", "level2", "level3", "netcat"];

    setUnlocked(fullUnlock);
    setAllUnlocked(true);
    setNetcatOpen(false);

    sessionStorage.setItem("nmap_unlocked", JSON.stringify(fullUnlock));
    sessionStorage.setItem("nmap_all", "true");
  };

  const handleUnlock = (next) => {
    if (!next) return;

    setUnlocked((prev) =>
      prev.includes(next) ? prev : [...prev, next]
    );

    if (next === "netcat") {
      setNetcatOpen(true);
    }
  };

  // persist unlock changes
  useEffect(() => {
    sessionStorage.setItem("nmap_unlocked", JSON.stringify(unlocked));
  }, [unlocked]);

  return (
    <div className="fixed inset-0 bg-black z-[9999] font-mono text-[ff0033] overflow-hidden">

      {/* CORE SYSTEM */}
      <NmapCore
        unlocked={unlocked}
        allUnlocked={allUnlocked}
        activeNode={activeNode}
        setActiveNode={setActiveNode}
        setHoverMsg={setHoverMsg}
      />

      {/* EXIT */}
      <div className="absolute bottom-[26%] left-[1%] z-50">
        <button
          onClick={onClose}
          className="px-16 py-3 border border-red-500 text-red-400 tracking-[0.4em] text-sm hover:bg-red-600 hover:text-black"
        >
          EXIT
        </button>
      </div>

      {/* STATUS */}
      {allUnlocked && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-green-400 text-xs tracking-widest animate-pulse">
          ROOT ACCESS GRANTED
        </div>
      )}

      {/* LEVEL CONTROLLER */}
      <LvlCenter
        activeNode={activeNode}
        setActiveNode={setActiveNode}
        onUnlock={handleUnlock}
      />

      {/* NC TERMINAL */}
      {netcatOpen && (
        <NC
          onClose={() => setNetcatOpen(false)}
          onComplete={handleNcComplete}
        />
      )}

    </div>
  );
};

export default NmapRm;