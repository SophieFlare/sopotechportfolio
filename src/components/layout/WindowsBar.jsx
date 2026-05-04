import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaTerminal,
  FaSearch,
  FaNetworkWired,
} from "react-icons/fa";
import {
  MdOutlineFolder,
  MdOutlineDesktopWindows,
  MdComputer,
} from "react-icons/md";
import { GiButterfly } from "react-icons/gi";

import FileExplorer from "../../pages/FileExplorer";
import CMD from "./terminal/CMD";
import NetworkPanel from "./NetworkPanel";
import Terminal from "./terminal/Terminal";
import SidePanel from "../../pages/net/SidePanel";

const WindowsBar = ({ onOpenPanel }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [startOpen, setStartOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState(null);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);

  const [position, setPosition] = useState({ x: 500, y: 120 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const location = useLocation();
  const isDesktop = location.pathname === "/pages/desktop";
  const isNetwork = location.pathname === "/pages/network";

  const theme = {
    text: isDesktop ? "text-[#ff0033]" : "text-sky-400",
    border: isDesktop ? "border-[#ff0033]" : "border-sky-400",
    borderSoft: isDesktop ? "border-[#ff0033]/40" : "border-sky-400/40",
    glow: isDesktop
      ? "shadow-[0_0_25px_#ff0033]"
      : "shadow-[0_0_25px_#38bdf8]",
    hoverBg: isDesktop
      ? "hover:bg-[#ff003315]"
      : "hover:bg-sky-400/10",
    iconGlow: isDesktop
      ? "drop-shadow-[0_0_8px_#ff0033]"
      : "drop-shadow-[0_0_8px_#38bdf8]",
  };

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
    <div className={`fixed bottom-0 left-0 w-full h-12 bg-black border-t ${theme.border} flex pointer-events-auto items-center font-mono ${theme.text} z-[999999]`} >
        {/* LEFT SIDE */}
        <div className="flex items-center h-full relative">

          {/* START BUTTON */}
          <div
            onClick={() => setStartOpen(!startOpen)}
            className={`w-12 h-full flex items-center justify-center ${theme.iconGlow} cursor-pointer`}
          >
            ⊞
          </div>

          {/* SEARCH */}
          <div
            onClick={() => setSearchOpen(true)}
            className={`w-12 h-full flex items-center justify-center ${theme.hoverBg} cursor-pointer`}
          >
            <FaSearch />
          </div>

          {/* SIDE PANEL TAB (NETWORK ONLY) */}
          {isNetwork && (
            <div
              onClick={() => setSideOpen(!sideOpen)}
              className={`px-4 h-full flex items-center gap-2 border-l ${theme.borderSoft} ${theme.hoverBg} cursor-pointer`}
            >
              <FaNetworkWired />
              <span className="text-xs tracking-widest">SidePanel</span>
            </div>
          )}
        </div>

        <div className="flex-1" />

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 pr-3 text-xs">
          <div
            onClick={() => setNetworkOpen(!networkOpen)}
            className="cursor-pointer px-2 py-1"
          >
            📶
          </div>

          <div className="flex flex-col items-end">
            <span>{time}</span>
            <span className="text-[10px] opacity-70">{date}</span>
          </div>
        </div>
      </div>

      {/* START MENU */}
      {startOpen && (
        <div className={`absolute bottom-12 left-0 w-52 bg-black border ${theme.borderSoft} z-[10000]`}>
          <div className="p-2 border-b opacity-70 text-xs">SYSTEM MENU</div>

          <div className="flex flex-col text-sm uppercase">
            <Link to="/" className={`px-3 py-2 ${theme.hoverBg}`}>Home</Link>
            <Link to="/pages/network" className={`px-3 py-2 ${theme.hoverBg}`}>Network</Link>
            <Link to="/pages/desktop" className={`px-3 py-2 ${theme.hoverBg}`}>Desktop</Link>
           <Link to="/pages/contact" className={`px-3 py-2 ${theme.hoverBg}`}>Contact</Link>
           
          </div>
        </div>
      )}

      {/* SEARCH */}
      {searchOpen && (
        <div className={`fixed bottom-12 left-0 w-[420px] h-[520px] bg-black border ${theme.borderSoft} z-[10000]`}>
          <div className="p-2 border-b flex justify-between">
            <span>SEARCH</span>
            <button onClick={() => setSearchOpen(false)}>✕</button>
          </div>

          <div className="p-3 space-y-2">
            <SearchItem icon={<MdOutlineFolder />} label="File Explorer" onClick={() => openApp("explorer")} />
            <SearchItem icon={<FaTerminal />} label="Terminal" onClick={() => openApp("terminal")} />
            <SearchItem icon={<MdComputer />} label="CMD" onClick={() => openApp("cmd")} />
          </div>
        </div>
      )}

      {/* WINDOWS */}
      {activeWindow && (
        <div className="fixed z-[99999]" style={{ left: position.x, top: position.y }}>
          <div className={`w-[620px] h-[620px] bg-[#05070d] border ${theme.border} ${theme.glow} flex flex-col`}>
            <div
              onMouseDown={handleMouseDown}
              className={`flex justify-between px-3 py-2 border-b ${theme.borderSoft}`}
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

      {/* NETWORK PANEL */}
      {networkOpen && (
        <NetworkPanel theme={theme} onClose={() => setNetworkOpen(false)} />
      )}

      {/* SIDE PANEL */}
      {isNetwork && (
     <SidePanel
  isOpen={sideOpen}
  onClose={() => setSideOpen(false)}
  onOpenSection={(section) => {
    setSideOpen(false);      // close sidebar first
    onOpenPanel(section);    // open overlay in parent
  }}
/>
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