import { useEffect, useState, useRef } from "react";
import akamePfp from "/silknet_logoo.png";
import Scanner from "./ui/Scanner";

import "../styles/intro.css";
import logo from "/silknet_logoo.png";



const About = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [username, setUsername] = useState("");

  const [virusTriggered, setVirusTriggered] = useState(false);
  const [flash, setFlash] = useState(false);
  const [warningFlash, setWarningFlash] = useState(false);

  const [virusPopups, setVirusPopups] = useState([]);

  const terminalRef = useRef(null);

  /* AUTO SCROLL */
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  /* VIRUS TERMINAL CHAOS */
  useEffect(() => {
    if (!virusTriggered) return;

    const chaos = [
      ">> SCANNING NETWORK...",
      `>> USER: ${username || "UNKNOWN"}`,
      ">> ESTABLISHING CONNECTION...",
      ">> ACCESS GRANTED",
      ">> RUNNING PACKET TRACE...",
      ">> DETECTING ANOMALIES...",
      ">> WARNING: SUSPICIOUS TRAFFIC",
      ">> ISOLATING NODE...",
      ">> FIREWALL ACTIVE",
      ">> SYSTEM STABLE",
    ];

    let i = 0;
    setTerminalOutput([]);

    const interval = setInterval(() => {
      if (i < chaos.length) {
        setTerminalOutput((prev) => [...prev, chaos[i]]);
        i++;
      } else clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, [virusTriggered, username]);

  /* AUTH CLICK */
  const handleAuthentication = () => {
    if (!username) return;

    setFlash(true);
    setWarningFlash(true);

    setTimeout(() => setFlash(false), 200);
    setTimeout(() => setWarningFlash(false), 800);

    setTimeout(() => {
      setTerminalOpen(true);
      setVirusTriggered(true);

      // POPUPS
      setVirusPopups([
        {
          id: 1,
          text: "NETWORK ANOMALY DETECTED",
          x: Math.random() * 70 + "%",
          y: 30 + Math.random() * 50 + "%",
        },
        {
          id: 2,
          text: "UNAUTHORIZED ACCESS BLOCKED",
          x: Math.random() * 70 + "%",
          y: 30 + Math.random() * 50 + "%",
        },
      ]);
    }, 800);
  };

  /* FLOATING PARTICLES */
  const nodes = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 6 + 2,
  }));

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* FLOATING BLUE PARTICLES */}
      {nodes.map((n) => (
        <div
          key={n.id}
          className="absolute rounded-full bg-sky-400 opacity-40 shadow-[0_0_10px_#38bdf8]"
          style={{
            top: `${n.top}%`,
            left: `${n.left}%`,
            width: `${n.size}px`,
            height: `${n.size}px`,
          }}
        />
      ))}

      {/* FLASH */}
      {flash && (
        <div className="fixed inset-0 bg-sky-400 opacity-40 z-[9998]" />
      )}

      {/* WARNING */}
      {warningFlash && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <div className="text-sky-400 text-7xl font-mono animate-pulse">
            ⚠
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-start gap-12 relative z-10">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start gap-5 md:w-1/3">
          <img
            src={akamePfp}
            className="rounded-full w-52 h-52 border-4 border-sky-400 shadow-[0_0_20px_#38bdf8]"
          />

         <h1 className="glitch text-5xl font-bold text-sky-400">
  HELLO_WORLD.exe
</h1>

<div className="flex flex-col space-y-3">
  <p className="font-mono text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
    → Networking Systems Initialized
  </p>
  <p className="font-mono text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
    → Programming Modules Active
  </p>
  <p className="font-mono text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
    → Secure Channel Established
  </p>
</div>
        </div>

        {/* RIGHT PANEL */}
        <div className="absolute right-10 top-20 flex flex-col items-center gap-6 w-[420px]">
          <div className="w-full p-4 bg-[#020617]/80 border border-sky-400 rounded-md">
            <input
              className="w-full bg-black/40 border border-sky-400 text-sky-400 px-3 py-2 font-mono"
              placeholder="username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <button
              onClick={handleAuthentication}
              className="w-full mt-3 py-2 bg-sky-400/20 border border-sky-400 text-sky-400 font-mono hover:bg-sky-400/30"
            >
              Authenticate
            </button>
          </div>
        </div>

        {/* TERMINAL */}
        {terminalOpen && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[600px] bg-black border border-sky-400 shadow-[0_0_20px_#38bdf8] font-mono text-sky-400 p-4 z-[10000]">
            <div className="flex justify-between mb-2 text-xs">
              <span>root@system :: scanner.exe</span>
              <button onClick={() => setTerminalOpen(false)}>✕</button>
            </div>

            <div
              ref={terminalRef}
              className="h-60 overflow-y-auto text-sm space-y-1"
            >
              {terminalOutput.map((line, i) => (
                <p key={i} className="animate-pulse">
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* SCANNER */}
        <Scanner />

        {/* POPUPS */}
        {virusPopups.map((p) => (
          <div
            key={p.id}
            className="fixed w-[260px] bg-black border border-sky-400 text-sky-400 font-mono p-3 shadow-[0_0_20px_#38bdf8] z-[99999]"
            style={{ top: p.y, left: p.x }}
          >
            <div className="flex justify-between text-xs mb-2">
              <span>SCAN_ALERT.exe</span>
              <button
                onClick={() =>
                  setVirusPopups((prev) =>
                    prev.filter((x) => x.id !== p.id)
                  )
                }
              >
                ✕
              </button>
            </div>

            <p className="text-sm animate-pulse">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;