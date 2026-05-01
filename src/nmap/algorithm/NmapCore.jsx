import React, { useEffect, useState } from "react";
import { levels } from "./data/lvls";

const NmapCore = ({
  unlocked,
  allUnlocked,
  activeNode,
  setActiveNode,
  setHoverMsg,
}) => {
  const [scanLine, setScanLine] = useState(0);
  const [ports, setPorts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine((p) => (p > 100 ? 0 : p + 2));

      const port = Math.floor(Math.random() * 9000 + 20);
      const status = Math.random() > 0.5 ? "OPEN" : "FILTERED";

      setPorts((prev) => [
        `PORT ${port} → ${status}`,
        ...prev.slice(0, 6),
      ]);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(red_1px,transparent_1px),linear-gradient(90deg,red_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* SCAN LINE */}
      <div
        className="absolute left-0 w-full h-[2px] bg-red-500 opacity-30 blur-sm"
        style={{ top: `${scanLine}%` }}
      />

      <div className="flex h-full">

        {/* LEFT PANEL */}
        <div className="w-[220px] h-full border-r border-red-900 pt-12 pb-4 px-3 text-[10px] flex flex-col justify-between">

          <div>
            <div className="text-red-400 mb-3 tracking-widest">
              // SYSTEM
            </div>

            <div className="space-y-1 opacity-70">
              <div>HOST: 192.168.0.{Math.floor(Math.random() * 255)}</div>
              <div>MODE: ACTIVE SCAN</div>
              <div>THREADS: 128</div>
              <div>LATENCY: {Math.floor(Math.random() * 90)}ms</div>
            </div>

            <div className="border-t border-red-900 my-3" />

            <div className="text-red-400 mb-2 tracking-widest">
              // PORT STREAM
            </div>

            <div className="space-y-[2px] h-[200px] overflow-hidden">
              {ports.map((p, i) => (
                <div
                  key={i}
                  className={p.includes("OPEN") ? "text-red-300" : "opacity-50"}
                >
                  {p}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3">
              <div className="text-red-400 mb-1">// SCAN PROGRESS</div>
              <div className="w-full h-[4px] bg-red-900">
                <div
                  className="h-full bg-red-500 animate-pulse"
                  style={{ width: `${Math.random() * 100}%` }}
                />
              </div>
            </div>

            <div className="relative w-full h-24 border border-red-900 overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,red_1px,transparent_1px)] bg-[size:10px_10px]" />

              <div className="absolute w-full h-[2px] bg-red-500 origin-left animate-[spin_3s_linear_infinite]" />

              <div className="absolute bottom-1 left-1 text-[8px] opacity-50">
                RADAR ACTIVE
              </div>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex-1 flex flex-col items-center justify-center gap-12">

          {levels.map((level, i) => (
            <div key={i} className="flex flex-col items-center gap-4">

              <div className="text-red-400 tracking-[0.5em] text-xs opacity-80">
                {level.lvl}
              </div>

              <div className="flex gap-10 relative">
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-red-700 opacity-30" />

                {level.nodes.map((node, idx) => {

                  // 🔒 FINAL LOCK LOGIC (BOOT ONLY UNLOCKED BY DEFAULT)
                  const isUnlocked =
                    node.id === "boot" || allUnlocked || unlocked.includes(node.id);

                  const isActive = activeNode === node.id;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoverMsg(node.msg)}
                      onMouseLeave={() => setHoverMsg("")}
                      onClick={() => isUnlocked && setActiveNode(node.id)}
                      className={`
                        relative z-10 w-32 h-32 flex items-center justify-center
                        text-[11px] tracking-widest text-center
                        transition-all duration-300 select-none

                        ${
                          isUnlocked
                            ? "border border-red-500 text-red-400 cursor-pointer hover:scale-110"
                            : "border border-red-900 opacity-20 text-red-900 cursor-not-allowed"
                        }

                        ${
                          isActive
                            ? "shadow-[0_0_35px_rgba(255,0,0,0.9)] scale-110"
                            : ""
                        }
                      `}
                    >
                      {node.name}

                      {!isUnlocked && (
                        <div className="absolute bottom-1 text-[8px]">
                          LOCKED
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default NmapCore;