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

  const neon = "#ff0033";

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine((p) => (p > 100 ? 0 : p + 2));

      const port = Math.floor(Math.random() * 9000 + 20);
      const status = Math.random() > 0.5 ? "OPEN" : "FILTERED";

      setPorts((prev) => [`PORT ${port} → ${status}`, ...prev.slice(0, 6)]);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(${neon} 1px, transparent 1px),
            linear-gradient(90deg, ${neon} 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* SCAN LINE */}
      <div
        className="absolute left-0 w-full h-[2px] blur-sm"
        style={{
          top: `${scanLine}%`,
          backgroundColor: neon,
          opacity: 0.35,
        }}
      />

      <div className="flex h-full">

        {/* LEFT PANEL */}
        <div
          className="w-[220px] h-full border-r pt-12 pb-4 px-3 text-[10px] flex flex-col justify-between"
          style={{ borderColor: `${neon}33` }}
        >
          <div>
            <div style={{ color: neon, marginBottom: 12, letterSpacing: 2 }}>
              // SYSTEM
            </div>

            <div className="space-y-1 opacity-70 text-white">
              <div>HOST: 192.168.0.{Math.floor(Math.random() * 255)}</div>
              <div>MODE: ACTIVE SCAN</div>
              <div>THREADS: 128</div>
              <div>LATENCY: {Math.floor(Math.random() * 90)}ms</div>
            </div>

            <div
              className="border-t my-3"
              style={{ borderColor: `${neon}33` }}
            />

            <div style={{ color: neon, marginBottom: 8, letterSpacing: 2 }}>
              // PORT STREAM
            </div>

            <div className="space-y-[2px] h-[200px] overflow-hidden text-white">
              {ports.map((p, i) => (
                <div
                  key={i}
                  style={{
                    color: p.includes("OPEN") ? neon : "rgba(255,255,255,0.3)",
                  }}
                >
                  {p}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3">
              <div style={{ color: neon, marginBottom: 4 }}>
                // SCAN PROGRESS
              </div>

              <div className="w-full h-[4px]" style={{ background: `${neon}33` }}>
                <div
                  className="h-full animate-pulse"
                  style={{
                    width: `${Math.random() * 100}%`,
                    backgroundColor: neon,
                  }}
                />
              </div>
            </div>

            <div
              className="relative w-full h-24 border overflow-hidden"
              style={{ borderColor: `${neon}33` }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle, ${neon} 1px, transparent 1px)`,
                  backgroundSize: "10px 10px",
                }}
              />

              <div
                className="absolute w-full h-[2px] origin-left animate-[spin_3s_linear_infinite]"
                style={{ backgroundColor: neon }}
              />

              <div className="absolute bottom-1 left-1 text-[8px] opacity-50 text-white">
                RADAR ACTIVE
              </div>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex-1 flex flex-col items-center justify-center gap-12">

          {levels.map((level, i) => (
            <div key={i} className="flex flex-col items-center gap-4">

              <div
                className="tracking-[0.5em] text-xs opacity-80"
                style={{ color: neon }}
              >
                {level.lvl}
              </div>

              <div className="flex gap-10 relative">

                <div
                  className="absolute top-1/2 left-0 right-0 h-[2px] opacity-30"
                  style={{ backgroundColor: neon }}
                />

                {level.nodes.map((node, idx) => {
                  const isUnlocked =
                    node.id === "boot" ||
                    allUnlocked ||
                    unlocked.includes(node.id);

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
                        ${isUnlocked ? "cursor-pointer hover:scale-110" : "cursor-not-allowed"}
                        ${isActive ? "scale-110" : ""}
                      `}
                      style={{
                        border: `1px solid ${
                          isUnlocked ? neon : `${neon}33`
                        }`,
                        color: isUnlocked ? neon : `${neon}55`,
                        boxShadow: isActive
                          ? `0 0 35px ${neon}`
                          : "none",
                      }}
                    >
                      {node.name}

                      {!isUnlocked && (
                        <div
                          className="absolute bottom-1 text-[8px]"
                          style={{ color: `${neon}55` }}
                        >
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