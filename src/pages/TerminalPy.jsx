import React, { useEffect, useState, useRef } from "react";
import { runSystemCommand } from "../data/commands";

export default function TerminalPy({ isOpen, onClose }) {
  const [lines, setLines] = useState([
    "CYBER TERMINAL v3.0",
    "Microsoft Windows [Version 10.0.19045]",
    "(c) Terminal System. All rights reserved.",
    "",
    "Type 'help' to start..."
  ]);

  const [input, setInput] = useState("");
  const endRef = useRef(null);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input;
    setInput("");

    setLines((prev) => [...prev, `> ${command}`]);

    setTimeout(() => {
      const result = runSystemCommand(command);

      if (result === "CLEAR") {
        setLines([
          "CYBER TERMINAL v3.0",
          "Microsoft Windows [Version 10.0.19045]",
          "(c) Terminal System. All rights reserved.",
          "",
          "Type 'help' to start..."
        ]);
      } else if (Array.isArray(result)) {
        setLines((prev) => [...prev, ...result, ""]);
      } else {
        setLines((prev) => [...prev, result, ""]);
      }
    }, 120);
  };

  // ESC CLOSE
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // AUTO SCROLL
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  // 🔥 IMPORTANT FIX: FORCE FOCUS
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen, lines]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 w-screen h-screen z-[999999]
                 bg-black text-sky-400 font-mono flex flex-col
                 overflow-hidden"
      onClick={() => inputRef.current?.focus()} // click anywhere = focus
    >

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10
                      bg-[radial-gradient(#38bdf8_1px,transparent_1px)]
                      [background-size:30px_30px]" />

      {/* TOP BAR */}
      <div className="relative flex justify-between items-center px-4 py-3
                      border-b border-sky-400/30
                      bg-black/70 backdrop-blur-md
                      shadow-[0_0_15px_rgba(56,189,248,0.25)]">

        <div className="tracking-[0.3em] text-sm text-sky-300">
          WINDOWS POWERSHELL :: CYBER NODE
        </div>

        <button
          onClick={onClose}
          className="text-blue-400 hover:text-red-300 transition"
        >
          [X]
        </button>
      </div>

      {/* OUTPUT */}
      <div className="flex-1 p-4 overflow-y-auto text-sm space-y-1">
        {lines.map((line, i) => (
          <div
            key={i}
            className="text-sky-300 opacity-90 hover:text-white transition"
          >
            {line}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* INPUT */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center border-t border-sky-400/30
                   px-3 py-3 bg-black"
      >
        <span className="text-sky-400 mr-2 animate-pulse">&gt;</span>

        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-sky-200"
          placeholder="ping / netstat / ipconfig / help"
        />
      </form>

      {/* GLOW LINE */}
      <div className="h-[2px] w-full bg-sky-400 shadow-[0_0_20px_#38bdf8]" />
    </div>
  );
}