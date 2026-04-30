import React, { useState, useEffect } from "react";

export default function SoposTerminal() {
  const [log, setLog] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setLog(["SOPOS TERMINAL v1.0", "type 'help' to start..."]);
  }, []);

  const handleCommand = (cmd) => {
    let response = "";

    switch (cmd.toLowerCase()) {
      case "help":
        response = "commands: about / skills / clear / status";
        break;
      case "about":
        response = "Sopo AI Terminal: interactive CV subsystem online.";
        break;
      case "skills":
        response = "Windows, Linux, Networking, CLI, Troubleshooting";
        break;
      case "status":
        response = "SYSTEM: ONLINE ● ALL MODULES ACTIVE";
        break;
      case "clear":
        setLog([]);
        return;
      default:
        response = `unknown command: ${cmd}`;
    }

    setLog((prev) => [...prev, `> ${cmd}`, response]);
  };

  return (
    <div className="
      w-[320px] h-full
      bg-[#05070d]
      border-l border-[#2b75ae]
      flex flex-col
      text-[#00ff9c]
      font-mono text-xs
    ">

      {/* HEADER */}
      <div className="h-10 px-3 flex items-center justify-between bg-[#0a0f1c] border-b border-[#2b75ae]">
        <span className="text-[#2b75ae]">SOPOS TERMINAL</span>
      </div>

      {/* OUTPUT */}
      <div className="flex-1 p-2 overflow-y-auto whitespace-pre-line">
        {log.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

      {/* INPUT */}
      <div className="p-2 border-t border-[#2b75ae] flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="
            flex-1 bg-black
            text-[#00ff9c]
            outline-none
            px-2 py-1
            border border-[#2b75ae]/40
          "
          placeholder="type command..."
        />

        <button
          onClick={() => {
            handleCommand(input);
            setInput("");
          }}
          className="text-[#2b75ae] hover:text-white"
        >
          run
        </button>
      </div>

    </div>
  );
}