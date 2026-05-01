import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaDesktop, FaEnvelope, FaTerminal, FaSearch } from "react-icons/fa";
import SoposTerminal from "../../pages/itsupport/SoposTerminal";
import FileExplorer from "../../pages/FileExplorer";

const WindowsBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [startOpen, setStartOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState(null);

  const [position, setPosition] = useState({ x: 500, y: 120 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const location = useLocation();
  const isDesktop = location.pathname === "/pages/desktop";

  const theme = {
    text: isDesktop ? "text-[#ff0033]" : "text-sky-400",
    border: isDesktop ? "border-[#ff0033]" : "border-sky-400",
    borderSoft: isDesktop ? "border-[#ff0033]/40" : "border-sky-400/40",
    glow: isDesktop
      ? "shadow-[0_0_25px_#ff0033]"
      : "shadow-[0_0_25px_#38bdf8]",
    hoverBg: isDesktop ? "hover:bg-[#ff003315]" : "hover:bg-sky-400/10",
    iconGlow: isDesktop
      ? "drop-shadow-[0_0_8px_#ff0033]"
      : "drop-shadow-[0_0_8px_#38bdf8]",
  };

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString([], { month: "short", day: "numeric" });

  const openApp = (name) => {
    setActiveWindow(name);
    setSearchOpen(false);
    setStartOpen(false);
  };

  const closeWindow = () => setActiveWindow(null);

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

  const handleMouseUp = () => setDragging(false);

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
      <div className={`fixed bottom-0 left-0 w-full h-12 bg-black border-t ${theme.border} flex items-center font-mono ${theme.text} z-[9999]`}>

        {/* LEFT */}
        <div className="flex items-center h-full relative">

          {/* START */}
          <div
            onClick={() => setStartOpen(!startOpen)}
            className={`w-12 h-full flex items-center justify-center ${theme.text} text-lg ${theme.iconGlow} hover:text-white cursor-pointer`}
          >
            ⊞
          </div>

          {/* START MENU */}
          {startOpen && (
            <div className={`absolute bottom-12 left-0 w-52 bg-black border ${theme.borderSoft} ${theme.glow} text-sm z-[10000]`}>

              <div className={`p-2 border-b ${theme.borderSoft} text-xs opacity-70`}>
                SYSTEM MENU
              </div>

              <div className="flex flex-col text-sm">

                <Link to="/" onClick={() => setStartOpen(false)}
                  className={`px-3 py-2 flex items-center gap-2 ${theme.text} ${theme.hoverBg}`}>
                  <FaHome /> Home
                </Link>
      <Link to="/pages/itsupport" onClick={() => setStartOpen(false)}
                  className={`px-3 py-2 flex items-center gap-2 ${theme.text} ${theme.hoverBg}`}>
                  <FaDesktop /> CV
                </Link>

                <Link to="/pages/desktop" onClick={() => setStartOpen(false)}
                  className={`px-3 py-2 flex items-center gap-2 ${theme.text} ${theme.hoverBg}`}>
                  <FaDesktop /> Desktop
                </Link>

                <Link to="/pages/contact" onClick={() => setStartOpen(false)}
                  className={`px-3 py-2 flex items-center gap-2 ${theme.text} ${theme.hoverBg}`}>
                  <FaEnvelope /> Contact
                </Link>

                <div onClick={() => openApp("terminal")}
                  className={`px-3 py-2 flex items-center gap-2 ${theme.text} ${theme.hoverBg} cursor-pointer`}>
                  <FaTerminal /> Terminal
                </div>

              </div>
            </div>
          )}

          {/* SEARCH */}
          <div
            onClick={() => setSearchOpen(true)}
            className={`w-12 h-full flex items-center justify-center ${theme.hoverBg} cursor-pointer`}
          >
            <FaSearch className={`${theme.text} ${theme.iconGlow}`} />
          </div>
        </div>

        <div className="flex-1" />

        {/* CLOCK */}
        <div className={`flex items-center gap-4 pr-3 text-xs ${theme.text}/80`}>
          <span>{time}</span>
          <span className="text-[10px] opacity-70">{date}</span>
        </div>
      </div>

      {/* SEARCH WINDOW */}
      {searchOpen && (
        <div className={`fixed bottom-12 left-0 w-[420px] h-[520px] bg-black border ${theme.borderSoft} ${theme.glow} z-[10000] flex flex-col font-mono`}>

          <div className={`flex justify-between p-2 border-b ${theme.borderSoft} ${theme.text}`}>
            <span>SYSTEM SEARCH</span>
            <button onClick={() => setSearchOpen(false)}>✕</button>
          </div>

          <div className="p-3">
            <input
              autoFocus
              placeholder="Search apps..."
              className={`w-full bg-black border ${theme.borderSoft} px-2 py-1 ${theme.text} outline-none`}
            />
          </div>

          <div className="flex-1 px-3 space-y-2">
            <SearchItem label="📁 FILE EXPLORER" onClick={() => openApp("explorer")} theme={theme} />
            <SearchItem label="⌨ TERMINAL" onClick={() => openApp("terminal")} highlight theme={theme} />
          </div>
        </div>
      )}

      {/* DRAG WINDOW */}
      {activeWindow && (
        <div className="fixed z-[99999]" style={{ left: position.x, top: position.y }}>
          <div className={`w-[620px] h-[620px] bg-[#05070d] border ${theme.border} ${theme.glow} flex flex-col font-mono`}>

            <div
              onMouseDown={handleMouseDown}
              className={`flex justify-between items-center px-3 py-2 border-b ${theme.borderSoft} ${theme.text} cursor-grab`}
            >
              <span>{activeWindow.toUpperCase()}</span>
              <button onClick={closeWindow}>✕</button>
            </div>

            <div className="flex-1 overflow-hidden">
              {activeWindow === "explorer" && <FileExplorer />}
              {activeWindow === "terminal" && <SoposTerminal />}
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default WindowsBar;

/* SEARCH ITEM */
function SearchItem({ label, onClick, highlight, theme }) {
  return (
    <div
      onClick={onClick}
      className={`
        px-3 py-2 cursor-pointer border ${theme.borderSoft}
        ${theme.hoverBg} hover:text-white transition
        ${highlight ? `${theme.text} ${theme.glow}` : "text-white/70"}
      `}
    >
      {label}
    </div>
  );
}