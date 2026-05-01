import React, { useEffect, useState } from "react";

/* ---------------- HASH SYSTEM ---------------- */

const COMMAND = "ssh sopo@terminal";

const hash = (t) =>
  btoa(t.split("").reverse().join(""));

const decode = (h) =>
  atob(h).split("").reverse().join("");

const HASHED = hash(COMMAND);

/* ---------------- CHAOS ---------------- */

const CHAOS =
  "!@#$%^&*()_+=-<>?/[]{}|~░▒▓█0123456789abcdefghijklmnopqrstuvwxyz";

/* ---------------- COMPONENT ---------------- */

const Decrypt = ({ onClose, onNext }) => {
  const [progress, setProgress] = useState(0);
  const [output, setOutput] = useState("");
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setProgress(0);
    setOutput("");
    setSuccess(false);
    setCopied(false);

    const real = decode(HASHED);

    let p = 0;

    const interval = setInterval(() => {
      p += 2.5;

      const revealCount = Math.floor((p / 100) * real.length);

      const mixed =
        real
          .slice(0, revealCount)
          .split("")
          .map((ch) =>
            Math.random() > 0.6
              ? CHAOS[Math.floor(Math.random() * CHAOS.length)]
              : ch
          )
          .join("") +
        CHAOS[Math.floor(Math.random() * CHAOS.length)].repeat(
          real.length - revealCount
        );

      setOutput(mixed);
      setProgress(p);

      if (p >= 100) {
        clearInterval(interval);
        setOutput(real);
        setProgress(100);

        setTimeout(() => {
          setSuccess(true);
        }, 300);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COMMAND);
      setCopied(true);
    } catch {
      setCopied(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center font-mono">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-[1px] h-full left-1/2 bg-purple-500 animate-pulse" />
        <div className="absolute w-full h-[1px] top-1/2 bg-purple-500 animate-pulse" />
      </div>

      {/* WINDOW */}
      <div className="w-[460px] border border-purple-700 bg-black/90 p-6 shadow-[0_0_70px_rgba(168,85,247,0.35)]">

        {/* HEADER */}
        <div className="text-purple-300 mb-3 tracking-widest animate-pulse">
          DECRYPTION ENGINE // QUANTUM STREAM
        </div>

        {/* PROGRESS */}
        <div className="w-full h-2 bg-purple-950 mb-4 overflow-hidden">
          <div
            className="h-2 bg-purple-500 transition-all shadow-[0_0_12px_rgba(168,85,247,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* OUTPUT */}
        <div className="text-purple-200 text-sm min-h-[80px] leading-relaxed tracking-wider">
          {output}
          <span className="animate-pulse text-purple-400">▍</span>
        </div>

        {/* STATUS */}
        <div className="text-[10px] text-purple-300 mt-3 opacity-70">
          {success
            ? copied
              ? "✔ command copied • ready for SSH injection"
              : "⚠ copy command to proceed"
            : "quantum entropy stream active • reconstructing packet memory"}
        </div>

        {/* ACTION BAR */}
        <div className="mt-5 flex justify-between items-center">

          {/* COPY BUTTON */}
        {/* COPY BUTTON */}
<button
  onClick={handleCopy}
  disabled={!success}
  className={`
    border px-4 py-2 transition text-xs
    ${
      !success
        ? "border-purple-900 opacity-40 cursor-not-allowed text-purple-900"
        : copied
        ? "border-white text-white"
        : "border-white text-white hover:bg-white hover:text-black"
    }
  `}
>
  {copied ? "COPIED ✔" : "COPY COMMAND"}
</button>


      <button
  onClick={onNext}
  disabled={!success || !copied}
  className={`
    border px-4 py-2 transition
    ${
      success && copied
        ? "border-white text-white hover:bg-white hover:text-black"
        : "border-purple-900 opacity-40 cursor-not-allowed text-purple-900"
    }
  `}
>
  SSH:22 ▶
</button>

        </div>

      </div>
    </div>
  );
};

export default Decrypt;