import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const WSearch = ({ theme, openApp }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* SEARCH ICON (TASKBAR BUTTON) */}
      <div
        onClick={() => setSearchOpen(true)}
        className={`w-12 h-full flex items-center justify-center ${theme.hoverBg} cursor-pointer`}
      >
        <FaSearch className={`${theme.text} ${theme.iconGlow}`} />
      </div>

      {/* SEARCH WINDOW */}
      {searchOpen && (
        <div
          className={`fixed bottom-12 left-0 w-[420px] h-[520px] bg-black border ${theme.borderSoft} ${theme.glow} z-[10000] flex flex-col font-mono`}
        >
          <div
            className={`flex justify-between p-2 border-b ${theme.borderSoft} ${theme.text}`}
          >
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

          {/* APP LIST */}
          <div className="flex-1 px-3 space-y-2">

            <SearchItem
              label="📁 FILE EXPLORER"
              onClick={() => openApp("explorer")}
              theme={theme}
              setSearchOpen={setSearchOpen}
            />

            <SearchItem
              label="⌨ TERMINAL"
              onClick={() => openApp("terminal")}
              theme={theme}
              setSearchOpen={setSearchOpen}
              highlight
            />

            <SearchItem
              label="💻 CMD"
              onClick={() => openApp("cmd")}
              theme={theme}
              setSearchOpen={setSearchOpen}
            />

          </div>
        </div>
      )}
    </>
  );
};

export default WSearch;

/* SEARCH ITEM */
function SearchItem({ label, onClick, highlight, theme, setSearchOpen }) {
  return (
    <div
      onClick={() => {
        onClick();
        setSearchOpen(false);
      }}
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