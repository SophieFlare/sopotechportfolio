import React from "react";

const NmapMsgBox = ({ unlocked, hoverMsg }) => {
  return (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-[260px] border border-red-900 bg-black/70 p-3 text-[11px] text-red-400 font-mono">

      {/* HEADER */}
      <div className="mb-2 text-red-500 tracking-widest">
        // SYSTEM LOG
      </div>

      {/* LIVE INFO */}
      <div className="space-y-2 opacity-80">

        <div className="text-red-300">
          {hoverMsg || "Hover node to inspect packet route..."}
        </div>

        <div className="mt-2">
          STATUS: ACTIVE SCAN RUNNING
        </div>

      </div>

      {/* UNLOCKED LIST */}
      <div className="mt-3 border-t border-red-900 pt-2 text-[10px] opacity-70">
        <div className="mb-1 text-red-500">// UNLOCKED NODES</div>

        {unlocked.map((u, i) => (
          <div key={i}>✔ {u}</div>
        ))}
      </div>

    </div>
  );
};

export default NmapMsgBox;