import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaWifi,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTools,
  FaNetworkWired,
  FaBug
} from "react-icons/fa";

const stepsList = [
  "Checking network adapter...",
  "Resetting network interface...",
  "Scanning for available networks...",
  "Testing router connection...",
  "Checking DNS resolution..."
];

const NetworkPanel = ({ theme, onClose }) => {
  const [showDiagnose, setShowDiagnose] = useState(false);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  // STEP ANIMATION (feels real OS)
  useEffect(() => {
    if (!showDiagnose) return;

    setStep(0);
    const interval = setInterval(() => {
      setStep((s) => {
        if (s >= stepsList.length) {
          clearInterval(interval);
          return s;
        }
        return s + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [showDiagnose]);

  return (
    <>
      {/* MAIN PANEL */}
      <div className={`fixed bottom-12 right-2 w-[320px] bg-black border ${theme.borderSoft} ${theme.glow} z-[10000] flex flex-col font-mono`}>

        {/* HEADER */}
        <div className={`flex justify-between p-2 border-b ${theme.borderSoft} ${theme.text}`}>
          <span>NETWORK</span>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="p-3 space-y-3 text-sm">

          {/* ❌ NOT CONNECTED STATUS */}
          <div className={`border ${theme.borderSoft} p-3 flex items-center gap-2`}>
            <FaExclamationTriangle className="text-red-500" />
            <div>
              <div className="text-red-400 font-bold">Not Connected</div>
              <div className="text-xs opacity-60">No Internet Access</div>
            </div>
          </div>

          {/* NETWORK NAME (FAKE) */}
          <div className={`border ${theme.borderSoft} p-2 flex items-center gap-2`}>
            <FaWifi className={theme.text} />
            <span className="text-white/80">Home_Network_5G</span>
          </div>

          {/* SPEED TEST */}
          <div className={`border ${theme.borderSoft} p-2`}>
            <div className="opacity-70 text-xs mb-1 flex items-center gap-1">
              <FaNetworkWired /> SPEED TEST
            </div>
            <button
              className={`w-full border ${theme.borderSoft} px-2 py-1 ${theme.hoverBg}`}
              onClick={() => alert("Running speed test...")}
            >
              Run Speed Test
            </button>
          </div>

          {/* DIAGNOSE */}
          <div className={`border ${theme.borderSoft} p-2`}>
            <div className="opacity-70 text-xs mb-1 flex items-center gap-1">
              <FaTools /> DIAGNOSE
            </div>
            <button
              className={`w-full border ${theme.borderSoft} px-2 py-1 ${theme.hoverBg}`}
              onClick={() => setShowDiagnose(true)}
            >
              Fix Network Issues
            </button>
          </div>

        </div>
      </div>

      {/* 🔥 DIAGNOSTIC MODAL */}
      {showDiagnose && (
        <div className="fixed inset-0 z-[20000] flex items-center justify-center bg-black/80">

          <div className={`w-[520px] bg-black border ${theme.border} ${theme.glow} font-mono`}>

            {/* HEADER */}
            <div className={`flex justify-between p-2 border-b ${theme.borderSoft} ${theme.text}`}>
              <span className="flex items-center gap-2">
                <FaBug /> Network Diagnostics
              </span>
              <button onClick={() => setShowDiagnose(false)}>✕</button>
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-4 text-sm">

              {/* PROGRESS BAR */}
              <div className="h-1 bg-white/10">
                <div
                  className="h-1 bg-green-400 transition-all duration-500"
                  style={{ width: `${(step / stepsList.length) * 100}%` }}
                />
              </div>

              {/* STEPS */}
              <div className="space-y-2">
                {stepsList.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    {i < step ? (
                      <FaCheckCircle className="text-green-400" />
                    ) : i === step ? (
                      <div className="w-2 h-2 bg-yellow-400 animate-pulse rounded-full" />
                    ) : (
                      <div className="w-2 h-2 bg-white/20 rounded-full" />
                    )}
                    <span className={i <= step ? "text-white" : "text-white/40"}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>

              {/* RESULT */}
              {step >= stepsList.length && (
                <div className="border-t border-white/10 pt-3 text-xs text-red-400">
                  ⚠ Unable to automatically fix all issues.
                </div>
              )}

              {/* CONTACT */}
              {step >= stepsList.length && (
                <button
                  onClick={() => {
                    setShowDiagnose(false);
                    onClose();
                    navigate("/pages/contact");
                  }}
                  className={`w-full border ${theme.borderSoft} px-2 py-2 ${theme.hoverBg} ${theme.text}`}
                >
                  Contact Support
                </button>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NetworkPanel;