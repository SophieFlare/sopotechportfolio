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
      setLogs((p) => [...p, "✔ Admin access granted"]);
    } else {
      setLogs((p) => [...p, "✖ Access denied"]);
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
        output = `'${cmd}' is not recognized`;
    }

    setLogs((p) => [...p, `> ${cmd}`, output]);
  };

  return (

  <div className="w-full h-full bg-black text-green-400 font-mono flex flex-col">
      {/* LOGIN */}
      {!loggedIn && (
        <div className="p-4 border-b border-green-500">
          <div className="text-sm mb-2">ADMIN LOGIN REQUIRED</div>

          <input
            type="password"
            placeholder="Enter password"
            className="bg-black border border-green-500 px-2 py-1 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="mt-2 px-2 py-1 border border-green-500"
          >
            LOGIN
          </button>
        </div>
      )}

      {/* TERMINAL */}
      {loggedIn && (
        <>
          <div className="flex-1 p-2 overflow-auto text-xs">
            {logs.map((l, i) => (
              <div key={i}>{l}</div>
            ))}
          </div>

          <div className="border-t border-green-500 p-2 flex">
            <span>&gt;</span>
            <input
              className="bg-black flex-1 outline-none ml-2"
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
  );
};

export default CMD;