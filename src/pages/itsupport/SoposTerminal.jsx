import React, { useState, useEffect } from "react";

export default function SoposTerminal({ onClose }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "> SOPØ TERMINAL v1.0",
    "> system ready...",
    "> type HELP"
  ]);

  // ENTER key handling (fixed dependency bug)
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Enter") {
        runCommand();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [input]);

  const runCommand = () => {
    let res = "";

    switch (input.toLowerCase()) {
      case "help":
        res = "commands: about / skills / clear / exit";
        break;

      case "about":
        res = "SOPØ is a system explorer & tech learner.";
        break;

      case "skills":
        res = "Windows, Linux, Networking, CLI, Hardware";
        break;

      case "clear":
        setOutput([]);
        setInput("");
        return;

      case "exit":
        handleClose();
        return;

      default:
        res = "command not found";
    }

    setOutput((p) => [...p, "> " + input, res]);
    setInput("");
  };

  // ✅ SAFE CLOSE FUNCTION (IMPORTANT FIX)
  const handleClose = () => {
    setInput("");
    onClose?.(); // this actually closes parent state
  };

  return (
    <div className="
      fixed inset-0 bg-black/70 backdrop-blur-sm
      flex items-center justify-center
      z-[99999]
    ">

      <div className="
        w-[600px] h-[400px]
        bg-black
        border border-sky-400/40
        shadow-[0_0_25px_#38bdf8]
        flex flex-col
        font-mono
      ">

        {/* HEADER */}
        <div className="flex justify-between p-2 border-b border-sky-400/30 text-sky-400 text-xs">
          <span>SOPO TERMINAL</span>

          {/* ✅ FIXED CLOSE BUTTON */}
          <button
            onClick={handleClose}
            className="hover:text-white transition"
          >
            ✕
          </button>
        </div>

        {/* OUTPUT */}
        <div className="flex-1 p-3 text-sky-300 overflow-y-auto text-sm">
          {output.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        {/* INPUT */}
        <div className="border-t border-sky-400/30 p-2 flex">
          <span className="text-sky-400 mr-2">&gt;</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white"
          />
        </div>

      </div>
    </div>
  );
}