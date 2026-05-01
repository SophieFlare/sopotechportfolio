import React, { useState } from "react";
import { Link } from "react-router-dom";

const Network = () => {
  const [step, setStep] = useState(0);

  const runDiagnostics = () => {
    setStep(1);

    setTimeout(() => setStep(2), 1200);
    setTimeout(() => setStep(3), 2400);
    setTimeout(() => setStep(4), 3600);
    setTimeout(() => setStep(5), 5000);
  };

  return (
    <div className="w-full h-full flex flex-col font-mono bg-black text-pink-400">

      {/* ================= HEADER ================= */}
      <div className="px-3 py-2 border-b border-pink-400/30 text-xs tracking-[0.3em] sticky top-0 bg-black z-10 text-pink-300">
        NETWORK DIAGNOSTIC TOOL // IT SUPPORT NODE
      </div>

      {/* ================= STATUS ================= */}
      <div className="p-4 space-y-4">

        <div className="text-xs text-white/60">
          STATUS:{" "}
          <span className="text-pink-500 font-semibold">
            NO INTERNET CONNECTION
          </span>
        </div>

        {/* ================= BUTTON ================= */}
        <button
          onClick={runDiagnostics}
          className="
            px-3 py-1
            border border-pink-400
            text-pink-300
            hover:bg-pink-400
            hover:text-black
            transition
            shadow-[0_0_10px_rgba(236,72,153,0.3)]
          "
        >
          RUN DIAGNOSTIC
        </button>

        {/* ================= LOG OUTPUT ================= */}
        <div className="border border-pink-400/30 p-3 text-xs leading-5 bg-black/60 text-pink-200">

          &gt; initializing network stack... <br />

          {step >= 1 && (
            <span>
              &gt; checking network adapter... ❌ disconnected<br />
            </span>
          )}

          {step >= 2 && (
            <span>
              &gt; ping gateway 192.168.1.1... ❌ no response<br />
            </span>
          )}

          {step >= 3 && (
            <span>
              &gt; DNS lookup google.com... ❌ failed<br />
            </span>
          )}

          {step >= 4 && (
            <span>
              &gt; checking ISP route... ❌ unreachable<br />
            </span>
          )}

          {step >= 5 && (
            <span className="text-pink-400 font-bold">
              &gt; DIAGNOSIS: NO INTERNET CONNECTION DETECTED
            </span>
          )}

        </div>

        {/* ================= FIX OPTIONS ================= */}
        {step >= 5 && (
          <div className="space-y-3 text-xs">

            <div className="text-pink-200/80">
              Suggested actions:
            </div>

            <button className="w-full text-left px-3 py-2 border border-pink-400/40 hover:bg-pink-400/10 text-pink-200">
              🔌 Restart network adapter
            </button>

            <button className="w-full text-left px-3 py-2 border border-pink-400/40 hover:bg-pink-400/10 text-pink-200">
              ⚙ Open system network settings
            </button>

            <button className="w-full text-left px-3 py-2 border border-pink-400/40 hover:bg-pink-400/10 text-pink-200">
              📡 Reset DNS configuration
            </button>

            <Link
              to="/pages/contact"
              className="
                block text-center px-3 py-2
                border border-pink-400
                text-pink-300
                hover:bg-pink-400
                hover:text-black
                transition
              "
            >
              🚨 ESCALATE TO SUPPORT
            </Link>

          </div>
        )}

        <div className="h-10" />

      </div>
    </div>
  );
};

export default Network;