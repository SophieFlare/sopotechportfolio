import React, { useState } from "react";
import SoposTerminal from "../../pages/itsupport/SoposTerminal";
import FileExplorer from "../../pages//FileExplorer";

const WindowsBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [startOpen, setStartOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState(null);

  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = now.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });

  const openApp = (name) => {
    setActiveWindow(name);
    setSearchOpen(false);
    setStartOpen(false);
  };

  const closeWindow = () => setActiveWindow(null);

  return (
    <>
      {/* TASKBAR */}
      <div className="fixed bottom-0 left-0 w-full h-12 bg-black border-t border-sky-400 flex items-center font-mono text-sky-400 z-[9999]">

        <div className="flex items-center h-full">
          <div
            onClick={() => setStartOpen(!startOpen)}
            className="w-12 h-full flex items-center justify-center hover:bg-sky-400/10 cursor-pointer"
          >
            ⊞
          </div>

          <div
            onClick={() => setSearchOpen(true)}
            className="w-12 h-full flex items-center justify-center hover:bg-sky-400/10 cursor-pointer"
          >
            🔍
          </div>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-4 pr-3 text-xs text-sky-400/80">
          <span>{time}</span>
          <span className="text-[10px] opacity-70">{date}</span>
        </div>
      </div>

      {/* SEARCH */}
      {searchOpen && (
        <div className="fixed bottom-12 left-0 w-[420px] h-[520px] bg-black border border-sky-400/40 shadow-[0_0_25px_#38bdf8] z-[10000] flex flex-col font-mono">

          <div className="flex justify-between p-2 border-b border-sky-400/30 text-sky-400">
            <span>SYSTEM SEARCH</span>
            <button onClick={() => setSearchOpen(false)}>✕</button>
          </div>

          <div className="p-3">
            <input
              autoFocus
              placeholder="Search apps..."
              className="w-full bg-black border border-sky-400/30 px-2 py-1 text-sky-400 outline-none"
            />
          </div>

          <div className="flex-1 px-3 space-y-2">

            <SearchItem label="📁 FILE EXPLORER" onClick={() => openApp("explorer")} />
            <SearchItem label="⌨ TERMINAL" onClick={() => openApp("terminal")} highlight />

          </div>
        </div>
      )}

      {/* WINDOWS */}
      {activeWindow && (
        <div className="fixed inset-0 flex items-start justify-end pt-5 pr-[20%] z-[99999]">

          <div className="w-[620px] h-[620px] bg-[#05070d] border border-sky-400 shadow-[0_0_30px_#38bdf8] flex flex-col font-mono">

            {/* HEADER */}
            <div className="flex justify-between items-center px-3 py-2 border-b border-sky-400/30 text-sky-400">
              <span>{activeWindow.toUpperCase()}</span>
              <button onClick={closeWindow} className="hover:text-white">✕</button>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-hidden">

              {activeWindow === "explorer" && (
                <FileExplorer onClose={closeWindow} />
              )}

              {activeWindow === "terminal" && (
                <SoposTerminal onClose={closeWindow} />
              )}

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default WindowsBar;


/* SEARCH ITEM */
function SearchItem({ label, onClick, highlight }) {
  return (
    <div
      onClick={onClick}
      className={`
        px-3 py-2 cursor-pointer border border-sky-400/20
        hover:bg-sky-400/10 hover:text-white transition
        ${highlight ? "text-sky-300 shadow-[0_0_10px_#38bdf8]" : "text-white/70"}
      `}
    >
      {label}
    </div>
  );
}