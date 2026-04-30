import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import OSI from "./OSI";
import WiFi from "./WiFi";
import NetTopology from "./NetTopology";
import nodes from "../../data/imgs";

export default function NetworkMap() {
  return (
    <div className="relative w-full h-[340vh] text-sky-400 overflow-hidden">

      {/* LEFT SYSTEM MAP */}
      <div className="absolute left-0 top-0 w-[60%] pl-16 z-10">
        <div className="flex flex-col gap-24 relative">
          {nodes.map((n, i) => (
            <Node key={i} {...n} />
          ))}
        </div>
      </div>

      {/* CENTER SHINING NODE FIELD */}
      <div className="absolute left-[6%] top-0 h-full w-[120px] pointer-events-none z-0">

        {[...Array(90)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${i * 55}px` }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.4, 0.7],
              filter: [
                "drop-shadow(0 0 4px #38bdf8)",
                "drop-shadow(0 0 14px #38bdf8)",
                "drop-shadow(0 0 4px #38bdf8)"
              ]
            }}
            transition={{
              duration: 1.8 + (i % 5) * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-2.5 h-2.5 bg-sky-400 rounded-full shadow-[0_0_18px_#38bdf8]" />
          </motion.div>
        ))}

      </div>

      {/* RIGHT SYSTEM PANEL */}
      <div className="absolute right-[10%] top-0 h-full flex flex-col items-center gap-48 font-mono">

        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">

          {/* core line */}
          <div className="w-[4px] h-full bg-sky-400" />

          {/* glow layers */}
          <div className="absolute inset-0 w-[8px] -left-[2px] bg-sky-400 blur-md opacity-70" />
          <div className="absolute inset-0 w-[16px] -left-[6px] bg-sky-400 blur-xl opacity-40" />

          {/* STAR NODE */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-sky-400 text-xl drop-shadow-[0_0_10px_#38bdf8]">
            ✦
          </div>

        </div>

        <div className="w-[300px] flex justify-center">
          <NetTopology />
        </div>

        <div className="w-[300px] flex justify-center">
          <WiFi />
        </div>

        <div className="w-[300px] flex justify-center ">
          <OSI />
        </div>

      </div>

    </div>
  );
}

/* ================= NODE ================= */
function Node({ img, label, info }) {
  return (
   <div className="flex items-center gap-24 h-[300px]">
      {/* IMAGE WITH PLANET EFFECT (LARGER) */}
      <div className="relative flex items-center justify-center">

        {/* OUTER GLOW (bigger aura) */}
        <div className="absolute w-[260px] h-[260px] rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute w-[210px] h-[210px] rounded-full bg-sky-400/30 blur-2xl" />

        {/* MAIN CIRCLE CONTAINER (INCREASED SIZE) */}
        <div
          className="
            relative w-[220px] h-[220px]
            rounded-full overflow-hidden
            border border-sky-400/40
            shadow-[0_0_35px_rgba(56,189,248,0.6)]
            hover:shadow-[0_0_70px_rgba(56,189,248,1)]
            transition-all duration-300
          "
        >
          <img
            src={img}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

      </div>

      {/* TEXT */}
      <div className="node-text">
        {label}
        <div className="text-[10px] opacity-70">{info}</div>
      </div>

    </div>
  );
}
/* ================= STYLE ================= */
const style = `
.node-text {
  font-family: monospace;
  font-size: 12px;
  letter-spacing: 2px;
  color: rgba(56, 189, 248, 0.9);
  text-transform: uppercase;
  text-shadow: 0 0 8px rgba(56,189,248,0.5);
  padding: 6px 10px;
  border-left: 2px solid rgba(56,189,248,0.4);
  background: rgba(56,189,248,0.03);
  white-space: nowrap;
}

.node-text::before {
  content: ">> ";
  color: rgba(56, 189, 248, 0.7);
}
`;

if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = style;
  document.head.appendChild(styleTag);
}