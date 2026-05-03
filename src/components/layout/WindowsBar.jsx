import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaDesktop, FaEnvelope, FaTerminal, FaSearch, FaNetworkWired } from "react-icons/fa";
import { MdOutlineFolder, MdOutlineDesktopWindows , MdComputer } from "react-icons/md";
import { GiButterfly } from "react-icons/gi";
import FileExplorer from "../../pages/FileExplorer";
import CMD from "./terminal/CMD";
import NetworkPanel from "./NetworkPanel";
import Terminal from "./terminal/Terminal";

const WindowsBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [startOpen, setStartOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState(null);
  const [networkOpen, setNetworkOpen] = useState(false);

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

        {/* LEFT SIDE */}
        <div className="flex items-center h-full relative">

          {/* START */}
          <div
            onClick={() => setStartOpen(!startOpen)}
            className={`w-12 h-full flex items-center justify-center ${theme.text} text-lg ${theme.iconGlow} hover:text-white cursor-pointer`}
          >
            ⊞
          </div>

          {/* SEARCH BUTTON */}
          <div
            onClick={() => setSearchOpen(true)}
            className={`w-12 h-full flex items-center justify-center ${theme.hoverBg} cursor-pointer`}
          >
            <FaSearch />
          </div>

          {/* START MENU */}
          {startOpen && (
            <div className={`absolute bottom-12 left-0 w-52 bg-black border uppercase ${theme.borderSoft} ${theme.glow} text-sm z-[10000]`}>
              <div className={`p-2 border-b ${theme.borderSoft} text-xs opacity-70`}>
                SYSTEM MENU
              </div>

              <div className="flex flex-col text-sm">
                <Link to="/" className={`px-3 py-2 flex items-center gap-2 ${theme.hoverBg}`}>
                  <FaHome /> Home
                </Link>

                <Link to="/pages/itsupport" className={`px-3 py-2 flex items-center gap-2 ${theme.hoverBg} drop-shadow-[0_0_6px_pink]`}>
                  <GiButterfly /> CV
                </Link>

                <Link to="/pages/network" className={`px-3 py-2 flex items-center gap-2 ${theme.hoverBg}`}>
                  <FaNetworkWired /> Network
                </Link>
    <Link to="/pages/desktop" className={`px-3 py-2 flex items-center gap-2 ${theme.hoverBg}`}>
                  <MdOutlineDesktopWindows /> Desktop
                </Link>

                <Link to="/pages/contact" className={`px-3 py-2 flex items-center gap-2 ${theme.hoverBg}`}>
                  <FaEnvelope /> Contact
                </Link>

                <div onClick={() => openApp("terminal")} className={`px-3 py-2 flex items-center gap-2 ${theme.hoverBg} cursor-pointer`}>
                  <FaTerminal /> Terminal
                </div>
              </div>
            </div>
          )}
        </div>

         SPACER 
        <div className="flex-1" />

        {/* RIGHT SIDE */}
        <div className={`flex items-center gap-3 pr-3 text-xs ${theme.text}/80`}>

          {/* NETWORK */}
          <div
            onClick={() => setNetworkOpen(!networkOpen)}
            className={`cursor-pointer ${theme.hoverBg} px-2 py-1`}
          >
            📶
          </div>

          {/* TIME */}
          <div className="flex flex-col items-end leading-tight">
            <span>{time}</span>
            <span className="text-[10px] opacity-70">{date}</span>
          </div>
        </div>
      </div>

      {/* NETWORK PANEL */}
      {networkOpen && (
        <NetworkPanel theme={theme} onClose={() => setNetworkOpen(false)} />
      )}

      {/* SEARCH WINDOW */}
      {searchOpen && (
        <div className={`fixed bottom-12 left-0 w-[420px] h-[520px] bg-black border ${theme.borderSoft} ${theme.glow} z-[10000] flex flex-col font-mono`}>

          <div className={`flex justify-between p-2 border-b ${theme.borderSoft}`}>
            <span>SEARCH</span>
            <button onClick={() => setSearchOpen(false)}>✕</button>
          </div>

          <div className="p-3">
            <input
              autoFocus
              placeholder="Search apps..."
              className={`w-full bg-black border ${theme.borderSoft} px-2 py-1 outline-none`}
            />
          </div>

          <div className="flex-1 px-3 space-y-2">

            <SearchItem icon={<MdOutlineFolder />} label="File Explorer" onClick={() => openApp("explorer")} />

            <SearchItem icon={<FaTerminal />} label="Terminal" onClick={() => openApp("terminal")} />

            <SearchItem icon={<MdComputer />} label="CMD" onClick={() => openApp("cmd")} />

          </div>
        </div>
      )}

      {/* WINDOW */}
      {activeWindow && (
        <div className="fixed z-[99999]" style={{ left: position.x, top: position.y }}>
          <div className={`w-[620px] h-[620px] bg-[#05070d] border ${theme.border} ${theme.glow} flex flex-col`}>

            <div
              onMouseDown={handleMouseDown}
              className={`flex justify-between px-3 py-2 border-b ${theme.borderSoft} cursor-grab`}
            >
              <span>{activeWindow.toUpperCase()}</span>
              <button onClick={closeWindow}>✕</button>
            </div>

            <div className="flex-1 bg-black">
              {activeWindow === "explorer" && <FileExplorer />}
            {activeWindow === "terminal" && <Terminal />}
              {activeWindow === "cmd" && <CMD />}
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default WindowsBar;


/* SEARCH ITEM */
function SearchItem({ icon, label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 border border-white/10 hover:bg-white/10 cursor-pointer"
    >
      {icon}
      {label}
    </div>
  );
}