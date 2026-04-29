import React, { useState, useEffect, useRef } from "react";
import { runCommand } from "./terminalCommands";

export default function TerminalOverlay({ onClose }) {
  const [history, setHistory] = useState([
    "IT Support Terminal v1.0",
    "Type 'help' or click [?]",
  ]);

  const [input, setInput] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const bottomRef = useRef(null);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      if (!input.trim()) return;

      // show command first
      setHistory((prev) => [...prev, `> ${input}`]);

      // run command
      runCommand(input, setHistory);

      setInput("");
    }
  };

  // AUTO SCROLL TO BOTTOM
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="fixed inset-0 bg-black/95 z-[9999] flex flex-col p-6 text-red-500 font-mono">

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-4">
        <div>TERMINAL_ACTIVE</div>

        <div className="flex gap-4 items-center">

          {/* HELP BUTTON */}
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="border border-red-500 px-2 hover:bg-red-500 hover:text-black"
          >
            ?
          </button>

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="text-red-700 hover:text-red-400"
          >
            [X]
          </button>
        </div>
      </div>

      {/* HELP PANEL */}
      {showHelp && (
        <div className="mb-4 border border-red-500/30 p-3 bg-red-500/5 text-sm">
          <div className="mb-2 text-red-400">AVAILABLE COMMANDS</div>
          <div>ipconfig → show IP address</div>
          <div>ping → test connectivity</div>
          <div>tracert → trace route</div>
          <div>nslookup → DNS lookup</div>
          <div>netstat → active connections</div>
          <div>systeminfo → system details</div>
          <div>clear → clear terminal</div>
        </div>
      )}

      {/* TERMINAL BODY */}
      <div className="flex-1 overflow-y-auto border border-red-500/30 p-4 bg-black">

        {history.map((line, i) => (
          <div key={i} className="text-sm whitespace-pre-wrap">
            {line}
          </div>
        ))}

        <div ref={bottomRef} />

        <div className="flex mt-2">
          <span className="mr-2">{">"}</span>
          <input
            autoFocus
            className="bg-transparent outline-none flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
          />
        </div>

      </div>
    </div>
  );
}