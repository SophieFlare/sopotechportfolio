import React, { useState, useRef, useEffect } from "react";
import { commands } from "./commands";
import HelpWindow from "./HelpWindow";

const Terminal = () => {
  const [helpOpen, setHelpOpen] = useState(false);
  const [input, setInput] = useState("");

  const [history, setHistory] = useState([
    "PowerShell v3.0 [CYBER MODE]",
    "Type 'help' for commands",
    "",
  ]);

  const bottomRef = useRef(null);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = () => {
    const cmd = input.toLowerCase().trim();

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output =
      commands[cmd] || `ERROR: Command not found → ${cmd}`;

    setHistory((prev) => [
      ...prev,
      `PS C:\\SYSTEM> ${cmd}`,
      output,
      "",
    ]);

    setInput("");
  };

  return (
    <div className="w-full h-full bg-black text-sky-400 font-mono flex flex-col p-3 relative">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center text-[10px] tracking-[0.3em] text-sky-300 border-b border-sky-400/20 pb-2 mb-2">

        <span>POWERSHELL // CYBER TERMINAL</span>

        {/* HELP BUTTON */}
        <button
          onClick={() => setHelpOpen(true)}
          className="text-sky-300 hover:text-white text-xs transition"
        >
          ?
        </button>

      </div>

      {/* ================= OUTPUT ================= */}
      <div className="flex-1 overflow-y-auto text-sm space-y-1 pr-1">

        {history.map((line, i) => (
          <pre key={i} className="whitespace-pre-wrap leading-5">
            {line}
          </pre>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* ================= INPUT ================= */}
      <div className="flex items-center gap-2 border-t border-sky-400/20 pt-2">

        <span className="text-sky-300">PS&gt;</span>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && runCommand()}
          className="flex-1 bg-transparent outline-none text-sky-200"
          placeholder="enter command..."
        />

        <button
          onClick={runCommand}
          className="px-3 py-1 border border-sky-400/40 hover:bg-sky-400/10 text-xs"
        >
          RUN
        </button>

      </div>

      {/* ================= HELP WINDOW ================= */}
      {helpOpen && (
        <HelpWindow onClose={() => setHelpOpen(false)} />
      )}

    </div>
  );
};

export default Terminal;