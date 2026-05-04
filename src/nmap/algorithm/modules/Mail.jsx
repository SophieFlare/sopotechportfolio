import React, { useState } from "react";

const Mail = ({ onClose, onNext }) => {
  const [sent, setSent] = useState(false);

  const payload = {
    command: "ssh sopo@terminal",
    password: "python80",
  };

  const handleSend = () => {
    setSent(true);

    setTimeout(() => {
      // progression hook
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center font-mono">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-[1px] h-full left-1/2 bg-purple-500 animate-pulse" />
        <div className="absolute w-full h-[1px] top-1/2 bg-purple-500 animate-pulse" />
      </div>

      {/* WINDOW */}
      <div
        className={`
          w-[460px] border bg-black/90 backdrop-blur-xl transition-all duration-300
          ${
            sent
              ? "border-purple-500 shadow-[0_0_70px_rgba(168,85,247,0.35)]"
              : "border-purple-700 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
          }
        `}
      >

        {/* HEADER */}
        <div
          className={`
            px-4 py-2 text-xs flex justify-between tracking-widest border-b
            ${
              sent
                ? "border-purple-700 text-purple-300"
                : "border-purple-900 text-purple-400"
            }
          `}
        >
          <span>MQTT://QUANTUM NODE :1883</span>
          <span className={sent ? "animate-pulse text-ssh sopo@terminal" : ""}>
            {sent ? "TRANSMITTING ACTIVE ✔" : "READY"}
          </span>
        </div>

        {/* BODY */}
        <div className="p-5 space-y-4 text-sm">

          <div className="text-xs opacity-60 tracking-widest text-purple-300">
            MESSAGE PAYLOAD
          </div>

          <div
            className={`
              border p-3 transition-all duration-300
              ${
                sent
                  ? "border-purple-500 text-purple-200 bg-purple-950/20 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                  : "border-purple-800 text-purple-300 bg-black/40"
              }
            `}
          >
            <div>COMMAND: {payload.command}</div>
            <div>PASSWORD: {payload.password}</div>
          </div>

          <div
            className={`text-[11px] transition-all ${
              sent
                ? "text-white"
                : "text-purple-300 opacity-60 animate-pulse"
            }`}
          >
            {sent
              ? "✔ packet injected • mqtt stream active • inbox synced"
              : "waiting for transmission handshake..."}
          </div>

        </div>

        {/* ACTIONS */}
        <div
          className={`
            border-t p-3 flex justify-end transition-all
            ${sent ? "border-purple-700" : "border-purple-900"}
          `}
        >

          {!sent ? (
           <button
  onClick={handleSend}
  className="
    px-4 py-2 border border-white text-white
    hover:bg-white hover:text-black
    transition-all
  "
>
  TRANSMIT
</button>
          ) : (
            <button
              onClick={onNext}
              className="
                px-4 py-2 border border-white text-white
                hover:bg-white hover:text-black
                transition-all animate-pulse
              "
            >
              NMAP:8080 ▶
            </button>
          )}

        </div>

      </div>
    </div>
  );
};

export default Mail;