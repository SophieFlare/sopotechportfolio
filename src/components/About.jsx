import { useEffect, useState, useRef } from "react";
import akamePfp from "/silknet_logoo.png";
import Scanner from "./ui/Scanner";

const About = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [username, setUsername] = useState("");

  const [virusTriggered, setVirusTriggered] = useState(false);
  const [flash, setFlash] = useState(false);
  const [warningFlash, setWarningFlash] = useState(false);
  const [panelActivated, setPanelActivated] = useState(true);

  const [virusPopups, setVirusPopups] = useState([]);

  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  useEffect(() => {
    if (!virusTriggered) return;

    const chaos = [
      "!! SECURITY BREACH DETECTED !!",
      `Unauthorized user: ${username || "unknown"}`,
      "Injecting defense protocol...",
      "Bypassing firewall...",
      "Accessing kernel memory...",
      "SYSTEM ERROR",
      "Containment FAILED",
      "VIRUS.EXE EXECUTING",
      "Cleaning...",
      "System stabilized.",
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

  const handleAuthentication = () => {
    if (!username) return;

    setFlash(true);
    setWarningFlash(true);

    setTimeout(() => setFlash(false), 200);
    setTimeout(() => setWarningFlash(false), 800);

    setTimeout(() => {
      setTerminalOpen(true);
      setVirusTriggered(true);

      setVirusPopups([
        {
          id: 1,
          text: "WARNING: UNKNOWN PROCESS DETECTED",
          x: Math.random() * 70 + "%",
          y: 30 + Math.random() * 50 + "%",
        },
        {
          id: 2,
          text: "MALWARE SIGNATURE FOUND IN MEMORY",
          x: Math.random() * 70 + "%",
          y: 30 + Math.random() * 50 + "%",
        },
      ]);
    }, 1000);
  };

  const nodes = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 6 + 2,
  }));
const closePopup = (id) => {
  setVirusPopups((prev) => prev.filter((p) => p.id !== id));
};
  return (
    <section className="relative isolate w-full min-h-screen flex items-center justify-center overflow-hidden bg-terminal">

      {/* SCANNER (NOW INSIDE LAYER SYSTEM) */}
      <Scanner />

      {/* FLOATING NODES */}
      {nodes.map((n) => (
        <div
          key={n.id}
          className="absolute z-0 rounded-full bg-sky-400 opacity-40 shadow-[0_0_10px_#38bdf8]"
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
        <div className="fixed inset-0 bg-sky-400 opacity-50 pointer-events-none z-[40]" />
      )}

      {/* WARNING */}
      {warningFlash && (
        <div className="fixed inset-0 flex items-center justify-center z-[50] pointer-events-none">
          <div className="text-sky-400 text-7xl font-mono animate-pulse">
            ⚠
          </div>
        </div>
      )}

      {/* MAIN UI */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-start gap-12">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start gap-5 md:w-1/3">

          <img
            src={akamePfp}
            className="rounded-full w-52 h-52 border-4 border-sky-400 shadow-[0_0_20px_#38bdf8]"
          />

          <h1 className="text-5xl font-bold text-sky-400 tracking-wider">
            HELLO_WORLD.exe
          </h1>

          <div className="flex flex-col space-y-3">
            <p className="font-mono text-sky-400/80">→ Networking Systems Initialized</p>
            <p className="font-mono text-sky-400/80">→ Programming Modules Active</p>
            <p className="font-mono text-sky-400/80">→ Secure Channel Established</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="absolute right-10 top-20 flex flex-col items-center gap-6 w-[420px] z-20">

          {panelActivated && (
            <div className="w-full p-4 bg-black/40 backdrop-blur-md border border-sky-400 rounded-md shadow-[0_0_15px_#38bdf8]">
              <input
                className="w-full bg-black/40 border border-sky-400 text-sky-400 px-3 py-2 font-mono outline-none"
                placeholder="username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <button
                onClick={handleAuthentication}
                className="w-full mt-3 py-2 bg-sky-400/20 border border-sky-400 text-sky-400 font-mono hover:bg-sky-400/30 transition"
              >
                Authenticate
              </button>
            </div>
          )}
        </div>

        {/* TERMINAL */}
        {terminalOpen && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[600px] bg-black border border-sky-400 shadow-[0_0_20px_#38bdf8] font-mono text-sky-400 p-4 z-[60]">
            <div className="flex justify-between mb-2 text-xs">
              <span>root@system :: VIRUS.EXE</span>
              <button onClick={() => setTerminalOpen(false)}>✕</button>
            </div>

            <div ref={terminalRef} className="h-60 overflow-y-auto text-sm space-y-1">
              {terminalOutput.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        )}
{/* VIRUS POPUPS (TOP LAYER) */}
   {/* VIRUS POPUPS */}
      {virusPopups.map((p) => (
        <div
          key={p.id}
          className="fixed w-[240px] bg-black border border-sky-400 text-sky-400 p-3 z-[999]"
          style={{ top: p.y, left: p.x }}
        >
          <div className="flex justify-between mb-2">
            <span className="text-xs">WARNING</span>
            <button onClick={() => closePopup(p.id)}>✕</button>
          </div>
          <p className="text-sm">{p.text}</p>
        </div>
      ))}
      </div>
    </section>
  );
};

export default About;