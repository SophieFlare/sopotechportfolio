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
 <div className="w-full h-full flex flex-col font-mono bg-black text-[#ff0033]">
      {/* ================= HEADER ================= */}
      <div className="px-3 py-2 border-b border-[#ff0033]/30 text-xs tracking-[0.3em] sticky top-0 bg-black z-10">
        NETWORK DIAGNOSTIC TOOL // IT SUPPORT NODE
      </div>

      {/* ================= STATUS ================= */}
      <div className="p-4 space-y-4">

        <div className="text-xs text-white/60">
          STATUS: <span className="text-red-500">NO INTERNET CONNECTION</span>
        </div>

        {/* ================= BUTTON ================= */}
        <button
          onClick={runDiagnostics}
          className="px-3 py-1 border border-[#ff0033] hover:bg-[#ff0033] hover:text-black transition"
        >
          RUN DIAGNOSTIC
        </button>

        {/* ================= LOG OUTPUT ================= */}
        <div className="border border-[#ff0033]/30 p-3 text-xs leading-5 bg-black/60">

          &gt; initializing network stack... <br />

          {step >= 1 && (
            <span>&gt; checking network adapter... ❌ disconnected<br /></span>
          )}

          {step >= 2 && (
            <span>&gt; ping gateway 192.168.1.1... ❌ no response<br /></span>
          )}

          {step >= 3 && (
            <span>&gt; DNS lookup google.com... ❌ failed<br /></span>
          )}

          {step >= 4 && (
            <span>&gt; checking ISP route... ❌ unreachable<br /></span>
          )}

          {step >= 5 && (
            <span className="text-red-400">
              &gt; DIAGNOSIS: NO INTERNET CONNECTION DETECTED
            </span>
          )}

        </div>

        {/* ================= FIX OPTIONS ================= */}
        {step >= 5 && (
          <div className="space-y-3 text-xs">

            <div className="text-white/70">
              Suggested actions:
            </div>

            <button className="w-full text-left px-3 py-2 border border-[#ff0033]/40 hover:bg-[#ff003315]">
              🔌 Restart network adapter
            </button>

            <button className="w-full text-left px-3 py-2 border border-[#ff0033]/40 hover:bg-[#ff003315]">
              ⚙ Open system network settings
            </button>

            <button className="w-full text-left px-3 py-2 border border-[#ff0033]/40 hover:bg-[#ff003315]">
              📡 Reset DNS configuration
            </button>

            <Link
              to="/pages/contact"
              className="block text-center px-3 py-2 border border-[#ff0033] hover:bg-[#ff0033] hover:text-black"
            >
              🚨 ESCALATE TO SUPPORT
            </Link>

          </div>
        )}

        {/* ================= FOOTER SCROLL SPACER ================= */}
        <div className="h-10" />

      </div>
    </div>
  );
};

export default Network;