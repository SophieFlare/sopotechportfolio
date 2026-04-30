import React, { useState } from "react";

const Experience = () => {
  const [activeFolder, setActiveFolder] = useState(null);
  const [error, setError] = useState(null);

  const structure = {
    "Cyber Lab Internship": true,
    "Frontend Projects": true,
    "UI Experiments": true,
    "Freelance Work": true,
  };

  const handleOpenFolder = (folder) => {
    // block access
    setError(`"${folder}" is currently under development...`);
    setTimeout(() => setError(null), 2500);
  };

  return (
    <div className="w-full h-full font-mono text-[#ff0033] relative">

      {/* ================= FILE EXPLORER ================= */}
      {!activeFolder && (
        <div className="grid grid-cols-2 gap-6 p-6">

          {Object.keys(structure).map((folder, i) => (
            <div
              key={i}
              onClick={() => handleOpenFolder(folder)}
              className="flex flex-col items-center cursor-pointer hover:scale-110 transition"
            >
              <div className="text-5xl">📁</div>
              <div className="text-xs mt-2 text-white/80 text-center">
                {folder}
              </div>
            </div>
          ))}

        </div>
      )}

      {/* ================= ERROR POPUP ================= */}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/60">

          <div className="w-[320px] bg-black border border-[#ff0033] shadow-[0_0_25px_#ff0033] p-4 text-center">

            <div className="text-white text-sm mb-3">
              ⚠ ACCESS DENIED
            </div>

            <div className="text-xs text-[#ff0033]/80">
              {error}
            </div>

            <button
              onClick={() => setError(null)}
              className="mt-4 px-3 py-1 border border-[#ff0033] text-xs hover:bg-[#ff0033] hover:text-black transition"
            >
              OK
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Experience;