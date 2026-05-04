import React, { useState } from "react";

const CMD = ({ onClose }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState([
    "Microsoft Windows [Version 10.0.22000]",
    "(c) System Terminal. All rights reserved.",
    "",
    "Type 'help' to start",
  ]);

  const handleLogin = () => {
    if (password === "admin123") {
      setLoggedIn(true);
      setLogs((p) => [...p, "✔ ADMIN ACCESS GRANTED"]);
    } else {
      setLogs((p) => [...p, "✖ ACCESS DENIED"]);
    }
  };

  const runCommand = (cmd) => {
    let output = "";

    switch (cmd.toLowerCase()) {
      case "help":
        output = "Commands: help, ip, clear, whoami";
        break;
      case "ip":
        output = "Client IP: 185.203.116.42";
        break;
      case "whoami":
        output = "admin@system";
        break;
      case "clear":
        setLogs([]);
        return;
      default:
        output = `'${cmd}' not recognized`;
    }

    setLogs((p) => [...p, `> ${cmd}`, output]);
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-black font-mono">

      {/* WINDOW */}
      <div className="
        w-[420px] h-[520px]
        bg-black/70 backdrop-blur-md
        border border-[#ff0033]/40
        shadow-[0_0_35px_rgba(255,0,51,0.25)]
        flex flex-col text-white rounded-md overflow-hidden
      ">

        {/* HEADER */}
        <div className="
          h-10 flex items-center justify-between px-3
          border-b border-[#ff0033]/30
          text-xs tracking-widest text-gray-300
        ">
          <span className="text-white/80">admin@cmd://secure-shell</span>

          <span className="text-[#ff0033] animate-pulse">
            ● ARMED
          </span>
        </div>

        {/* LOGIN */}
        {!loggedIn && (
          <div className="p-4 border-b border-[#ff0033]/20">

            <div className="text-xs text-gray-300 mb-3 tracking-widest">
              ADMIN AUTH REQUIRED
            </div>

            <input
              type="password"
              placeholder="enter password"
              className="
                bg-black w-full px-2 py-2 text-sm
                border border-[#ff0033]/40
                text-white outline-none
                focus:border-[#ff0033]
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="
                mt-3 w-full py-2 text-sm
                border border-[#ff0033]/40
                text-[#ff0033]
                hover:bg-[#ff0033]/10
                transition
              "
            >
              AUTHENTICATE
            </button>
          </div>
        )}

        {/* TERMINAL */}
        {loggedIn && (
          <>
            <div className="flex-1 p-3 overflow-auto text-xs space-y-1">

              {logs.map((l, i) => (
                <div key={i} className="flex gap-2">

                  <span className="text-gray-500 w-[70px]">
                    [{new Date().toLocaleTimeString().slice(0, 8)}]
                  </span>

                  <span className="text-[#ff0033]">&gt;</span>

                  <span className="text-white/90">{l}</span>

                </div>
              ))}

            </div>

            {/* INPUT */}
            <div className="border-t border-[#ff0033]/30 p-2 flex items-center">

              <span className="text-[#ff0033] mr-2">&gt;</span>

              <input
                className="
                  bg-black flex-1 outline-none
                  text-white text-sm
                "
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    runCommand(input);
                    setInput("");
                  }
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CMD;