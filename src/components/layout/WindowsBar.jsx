import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaDesktop, FaEnvelope, FaTerminal, FaSearch  } from "react-icons/fa";
import SoposTerminal from "../../pages/itsupport/SoposTerminal";
import FileExplorer from "../../pages/FileExplorer";

const WindowsBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [startOpen, setStartOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState(null);

  // 🟢 DRAG STATE
  const [position, setPosition] = useState({ x: 500, y: 120 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

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

  // 🟢 DRAG HANDLERS
  const handleMouseDown = (e) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <>
      {/* TASKBAR */}
      <div className="fixed bottom-0 left-0 w-full h-12 bg-black border-t border-sky-400 flex items-center font-mono text-sky-400 z-[9999]">

        {/* LEFT SIDE */}
        <div className="flex items-center h-full relative">

          {/* START BUTTON */}
<div
  onClick={() => setStartOpen(!startOpen)}
  className="w-12 h-full flex items-center justify-center text-sky-400 text-lg drop-shadow-[0_0_8px_#38bdf8] hover:text-white transition cursor-pointer"
>
  ⊞
</div>

          {/* START MENU */}
          {startOpen && (
            <div className="absolute bottom-12 left-0 w-52 bg-black border border-sky-400/40 shadow-[0_0_20px_#38bdf8] text-sm z-[10000]">

              <div className="p-2 border-b border-sky-400/30 text-xs opacity-70">
                SYSTEM MENU
              </div>

              <div className="flex flex-col text-sm">

                <Link
                  to="/"
                  onClick={() => setStartOpen(false)}
                  className="px-3 py-2 flex items-center gap-2 text-sky-400 hover:bg-sky-400/10"
                >
                  <FaHome /> Home
                </Link>

                <Link
                  to="/pages/desktop"
                  onClick={() => setStartOpen(false)}
                  className="px-3 py-2 flex items-center gap-2 text-sky-400 hover:bg-sky-400/10"
                >
                  <FaDesktop /> Desktop
                </Link>

                <Link
                  to="/pages/contact"
                  onClick={() => setStartOpen(false)}
                  className="px-3 py-2 flex items-center gap-2 text-sky-400 hover:bg-sky-400/10"
                >
                  <FaEnvelope /> Contact
                </Link>

                <div
                  onClick={() => openApp("terminal")}
                  className="px-3 py-2 flex items-center gap-2 text-sky-400 hover:bg-sky-400/10 cursor-pointer"
                >
                  <FaTerminal /> Terminal
                </div>

         

              </div>
            </div>
          )}

          {/* SEARCH BUTTON */}
  <div
  onClick={() => setSearchOpen(true)}
  className="w-12 h-full flex items-center justify-center hover:bg-sky-400/10 cursor-pointer"
>
 <FaSearch className="text-sky-400 text-lg drop-shadow-[0_0_8px_#38bdf8] hover:text-white transition" />
</div>

        </div>

        <div className="flex-1" />

        {/* CLOCK */}
        <div className="flex items-center gap-4 pr-3 text-xs text-sky-400/80">
          <span>{time}</span>
          <span className="text-[10px] opacity-70">{date}</span>
        </div>
      </div>

      {/* SEARCH WINDOW */}
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

      {/* DRAGGABLE WINDOW */}
      {activeWindow && (
        <div
          className="fixed z-[99999]"
          style={{ left: position.x, top: position.y }}
        >
          <div className="w-[620px] h-[620px] bg-[#05070d] border border-sky-400 shadow-[0_0_30px_#38bdf8] flex flex-col font-mono">

            {/* HEADER (DRAG AREA) */}
            <div
              onMouseDown={handleMouseDown}
              className="flex justify-between items-center px-3 py-2 border-b border-sky-400/30 text-sky-400 cursor-grab active:cursor-grabbing select-none"
            >
              <span>{activeWindow.toUpperCase()}</span>
              <button onClick={closeWindow} className="hover:text-white">
                ✕
              </button>
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