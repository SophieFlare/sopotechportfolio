import React, { useEffect, useState } from "react";

const generateBinary = () =>
  Array.from({ length: 80 }, () =>
    Math.random() > 0.5 ? "1" : "0"
  ).join("");

const stages = [
  "BIOS CHECK: CPU OK / RAM OK / GPU OK",
  "INITIALIZING KERNEL MODULES...",
  "MOUNTING FILE SYSTEM...",
  "STARTING NETWORK STACK...",
  "SYNCING MQTT CHANNEL :1883...",
  "ENCRYPTION LAYER READY",
  "SYSTEM ONLINE"
];

const Boot = ({ onClose, onNext }) => {
  const [logs, setLogs] = useState([]);
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const binInterval = setInterval(() => {
      setLogs((prev) => [...prev.slice(-12), generateBinary()]);
    }, 80);

    const stageInterval = setInterval(() => {
      setStage((s) => {
        if (s < stages.length - 1) return s + 1;
        clearInterval(stageInterval);
        return s;
      });
    }, 900);

    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);

          setTimeout(() => {
            setSuccess(true);
          }, 300);

          return 100;
        }
        return p + 2;
      });
    }, 60);

    return () => {
      clearInterval(binInterval);
      clearInterval(stageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black text-purple-300 font-mono flex items-center justify-center overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-[1px] h-full left-1/2 bg-purple-500 animate-pulse" />
        <div className="absolute w-full h-[1px] top-1/2 bg-purple-500 animate-pulse" />
      </div>

      {/* WINDOW */}
      <div className="w-[520px] border border-purple-700 bg-black/90 backdrop-blur-xl p-4 shadow-[0_0_60px_rgba(168,85,247,0.35)]">

        {/* HEADER */}
        <div className="text-xs opacity-60 mb-2 tracking-widest text-purple-300">
          SYSTEM BOOT SEQUENCE // QUANTUM CORE INITIALIZATION
        </div>

        {/* STAGE */}
        <div className="text-sm mb-2 text-purple-200">
          {stages[stage]}
        </div>

        {/* PROGRESS */}
        <div className="w-full h-2 bg-purple-950 mb-3 overflow-hidden">
          <div
            className="h-2 bg-purple-500 transition-all shadow-[0_0_10px_rgba(168,85,247,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* BINARY STREAM */}
        <div className="h-[180px] overflow-hidden text-[10px] leading-3 opacity-80 mb-3 text-purple-200">
          {logs.map((l, i) => (
            <div key={i}>&gt; {l}</div>
          ))}
        </div>

        {/* STATUS */}
        <div className="text-xs mb-3">
          <span
            className={`transition-all ${
              success
                ? "text-white animate-pulse"
                : "text-purple-300 opacity-60"
            }`}
          >
            {success
              ? "✔ SYSTEM READY — ACCESS GRANTED"
              : "INITIALIZING QUANTUM MODULES..."}
          </span>
        </div>

        {/* ACTION BAR */}
        <div className="flex justify-end">

          <button
            onClick={onNext}
            disabled={!success}
            className={`
              border px-4 py-2 transition
              ${
                success
                  ? "border-purple-500 hover:bg-purple-500 hover:text-black"
                  : "border-purple-900 opacity-40 cursor-not-allowed"
              }
            `}
          >
            TLS:443 ▶
          </button>

        </div>

      </div>
    </div>
  );
};

export default Boot;