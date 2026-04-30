import React, { useState } from "react";
import { Link } from "react-router-dom";

const WindowsBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [startOpen, setStartOpen] = useState(false);

  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = now.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });

  return (
    <>
      {/* TASKBAR */}
      <div className="fixed bottom-0 left-0 w-full h-12 bg-black border-t border-sky-400 flex items-center font-mono text-sky-400 z-[9999]">

        {/* LEFT SIDE */}
        <div className="flex items-center h-full">

          {/* START BUTTON */}
          <div
            onClick={() => setStartOpen(!startOpen)}
            className="w-12 h-full flex items-center justify-center hover:bg-sky-400/10 cursor-pointer relative"
          >
            ⊞

            {/* START MENU */}
            {startOpen && (
              <div className="absolute bottom-12 left-0 w-48 bg-black border border-sky-400/40 shadow-[0_0_20px_#38bdf8] text-sm">
                
                <div className="p-2 border-b border-sky-400/30 text-xs opacity-70">
                  SYSTEM MENU
                </div>

                <div className="flex flex-col text-sm">

                  <Link
                    to="/"
                    onClick={() => setStartOpen(false)}
                    className="px-3 py-2 flex items-center gap-2 text-sky-400 hover:bg-sky-400/10 hover:text-white transition"
                  >
                    HOME
                  </Link>

                  <Link
                    to="/pages/itsupport"
                    onClick={() => setStartOpen(false)}
                    className="px-3 py-2 flex items-center gap-2 text-sky-400 hover:bg-sky-400/10 hover:text-white transition"
                  >
                    IT PANEL
                  </Link>

                  <Link
                    to="/pages/contact"
                    onClick={() => setStartOpen(false)}
                    className="px-3 py-2 flex items-center gap-2 text-sky-400 hover:bg-sky-400/10 hover:text-white transition"
                  >
                    CONTACT
                  </Link>

                  <button
                    onClick={() => {
                      setStartOpen(false);
                      window.dispatchEvent(
                        new CustomEvent("navigate", { detail: "terminal" })
                      );
                    }}
                    className="px-3 py-2 flex items-center gap-2 text-sky-400 hover:bg-sky-400/10 hover:text-white transition text-left"
                  >
                    TERMINAL
                  </button>

                </div>
              </div>
            )}
          </div>

          {/* SEARCH ICON */}
          <div
            onClick={() => setSearchOpen(true)}
            className="w-12 h-full flex items-center justify-center hover:bg-sky-400/10 cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
            </svg>
          </div>

        </div>

        {/* MIDDLE */}
        <div className="flex-1" />

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 pr-3 text-xs text-sky-400/80">
          <span>ENG</span>
          <span>🌐</span>

          <div className="text-right leading-tight">
            <div>{time}</div>
            <div className="text-[10px] opacity-70">{date}</div>
          </div>
        </div>
      </div>

      {/* SEARCH PANEL */}
      {searchOpen && (
        <div className="fixed bottom-12 left-0 w-[420px] h-[500px] bg-black border border-sky-400/40 shadow-[0_0_25px_#38bdf8] z-[10000] font-mono">
          
          <div className="flex justify-between p-2 border-b border-sky-400/30 text-sky-400">
            <span>Search</span>
            <button onClick={() => setSearchOpen(false)}>✕</button>
          </div>

          <div className="p-3">
            <input
              autoFocus
              placeholder="Type here to search"
              className="w-full bg-black border border-sky-400/30 px-2 py-1 text-sky-400 outline-none"
            />
          </div>

          <div className="px-3 text-white/60 text-sm space-y-2">
            <div>📁 SOPØ</div>
            <div>📁 Skills</div>
            <div>📁 Certificates</div>
            <div>⚙ System Settings</div>
          </div>
        </div>
      )}
    </>
  );
};

export default WindowsBar;