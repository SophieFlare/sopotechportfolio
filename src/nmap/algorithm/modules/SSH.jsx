import React, { useState } from "react";

const COMMAND = "ssh sopo@terminal";

const SSHOverlay = ({ onClose, onNext }) => {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("AWAITING CONNECTION...");
  const [logs, setLogs] = useState([]);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasPasted, setHasPasted] = useState(false);

  const pushLog = (text) => {
    setLogs((prev) => [...prev.slice(-10), text]);
  };

  const fakeIP = () =>
    `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput(text);
      setHasPasted(true);
      pushLog("[CLIPBOARD] injected ✔");
      pushLog("[AUTH] key loaded");
    } catch {
      pushLog("[CLIPBOARD] access denied ⃠");
    }
  };

  const handleConnect = () => {
    if (loading || !hasPasted) return;

    setLoading(true);
    setStatus("[INITIALIZING] secure channel...");
    pushLog("[PACKET] injection started...");

    setTimeout(() => {
      if (input.trim() !== COMMAND) {
        pushLog("[HANDSHAKE] rejected");
        setStatus("[ACCESS DENIED] ❌");
        setLoading(false);
        return;
      }

      pushLog("[KEY] validated ✔");
      setStatus("[AUTH] verifying...");

      setTimeout(() => {
        pushLog(`[ROUTE] node ${fakeIP()}`);
        pushLog(`[ROUTE] node ${fakeIP()}`);
        setStatus("[FIREWALL] bypassing...");

        setTimeout(() => {
          pushLog("[FIREWALL] bypass complete");
          pushLog("[TUNNEL] encrypting channel...");
          setStatus("[LINK] establishing...");

          setTimeout(() => {
            setConnected(true);
            pushLog("[LINK] secure channel established ✔");
            setStatus("[ONLINE] CONNECTION ACTIVE ✔");
            setLoading(false);
          }, 900);
        }, 900);
      }, 800);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black text-purple-300 font-mono flex items-center justify-center overflow-hidden">

      {/* BACKGROUND GRID (PURPLE) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-[1px] h-full left-1/2 bg-purple-500 animate-pulse" />
        <div className="absolute w-full h-[1px] top-1/2 bg-purple-500 animate-pulse" />
      </div>

      {/* WINDOW */}
      <div className="w-[1000px] h-[600px] border border-purple-700 bg-black/90 backdrop-blur-xl shadow-[0_0_100px_rgba(168,85,247,0.35)] flex flex-col">

        {/* HEADER */}
        <div className="flex justify-between px-4 py-2 border-b border-purple-800 text-xs tracking-widest">
          <span>SSH://QUANTUM_TUNNEL_INTERFACE</span>
          <button onClick={onClose} className="hover:text-purple-200">
            ✕
          </button>
        </div>

        <div className="flex flex-1">

          {/* LEFT NODE */}
          <div className="w-1/4 flex flex-col items-center justify-center gap-3 border-r border-purple-900">
            <div className="w-32 h-32 rounded-full border border-purple-500 flex items-center justify-center text-6xl shadow-[0_0_35px_rgba(168,85,247,0.6)] animate-pulse">
              🖳
            </div>
            <div className="text-xs opacity-60">LOCAL NODE</div>
          </div>

          {/* CENTER */}
          <div className="flex-1 p-6 flex flex-col gap-4">

            {/* STATUS */}
            <div className="text-sm">
              <span className={connected ? "text-white" : "text-purple-300"}>
                {status}
              </span>
            </div>

            {/* STATE */}
            <div className={`text-4xl font-bold transition-all ${
              connected ? "text-white" : "text-purple-400 animate-pulse"
            }`}>
              {connected ? "LINK ESTABLISHED" : "LOCKED"}
            </div>

            {/* INPUT */}
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading || connected}
              placeholder="enter secure command..."
              className="bg-black border border-purple-700 px-4 py-3 w-full text-center outline-none"
            />

            {/* PASTE STATUS */}
            <div className="text-[11px] text-center">
              {!hasPasted ? (
                <span className="text-gray-500">
                  &gt; STEP 1 REQUIRED: PASTE AUTH KEY
                </span>
              ) : (
                <span className="text-purple-300">
                  &gt; AUTH KEY LOADED ✔ SYSTEM UNLOCKED
                </span>
              )}
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3">

              <button
                onClick={handleConnect}
                disabled={loading || connected || !hasPasted}
                className={`flex-1 py-3 border transition
                  ${
                    !hasPasted
                      ? "border-gray-700 text-gray-600 opacity-40 cursor-not-allowed"
                      : loading
                      ? "border-purple-400 text-purple-300"
                      : "border-purple-500 hover:bg-purple-500 hover:text-black"
                  }
                `}
              >
                {!hasPasted
                  ? "INITIATE LINK (LOCKED)"
                  : loading
                  ? "CONNECTING..."
                  : "INITIATE LINK"}
              </button>

              <button
                onClick={handlePaste}
                disabled={connected}
                className={`border px-6 transition
                  ${
                    hasPasted
                      ? "border-white text-white"
                      : "border-purple-700 hover:bg-purple-700 hover:text-black"
                  }
                `}
              >
                {hasPasted ? "PASTED ✔" : "PASTE"}
              </button>

            </div>

            {/* LOGS */}
            <div className="flex-1 border border-purple-900 p-3 text-[11px] overflow-hidden bg-black/40 space-y-1">
              {logs.map((l, i) => (
                <div key={i}>&gt; {l}</div>
              ))}
            </div>

            {/* NEXT */}
            {connected && (
              <button
                onClick={onNext}
                className="border border-white text-white py-3 hover:bg-white hover:text-black transition"
              >
                DNS:53 ▶ NEXT NODE
              </button>
            )}

          </div>

          {/* RIGHT NODE */}
          <div className="w-1/4 flex flex-col items-center justify-center gap-3 border-l border-purple-900">
            <div className="w-32 h-32 rounded-full border border-purple-500 flex items-center justify-center text-6xl shadow-[0_0_40px_rgba(168,85,247,0.7)] animate-pulse">
              🖧
            </div>
            <div className="text-xs opacity-60">REMOTE SERVER</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SSHOverlay;