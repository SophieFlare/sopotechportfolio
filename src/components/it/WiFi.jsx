import React from "react";
import { motion } from "framer-motion";

export default function WiFi() {
  return (
    <div className="w-[420px] p-4 bg-black/40 border border-sky-400/20 rounded-md backdrop-blur-md font-mono text-sky-400">

      {/* TITLE */}
      <div className="text-xs tracking-[0.35em] text-sky-300 mb-4">
        NETWORK CONTROL CENTER
      </div>

      {/* MAIN GRID */}
      <div className="flex flex-col gap-6">

        {/* ================= WIFI SECTION ================= */}
        <div className="relative flex items-center justify-center h-[140px] border border-sky-400/10 rounded-md">

          {/* ROUTER CORE */}
          <div className="w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_20px_#38bdf8] z-10" />

          {/* SIGNAL WAVES */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute border border-sky-400 rounded-full"
              animate={{
                scale: [1, 3],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                width: `${40 + i * 30}px`,
                height: `${40 + i * 30}px`,
              }}
            />
          ))}

          {/* DEVICE */}
          <motion.div
            className="absolute bottom-3 w-5 h-5 bg-white rounded-sm shadow-[0_0_10px_white]"
            animate={{
              y: [0, -8, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
          />

        </div>

        {/* ================= STATUS PANEL ================= */}
        <div className="p-3 border border-sky-400/10 rounded-md bg-sky-400/5 text-xs space-y-1">

          <div className="text-sky-300 tracking-[0.2em] mb-2">
            SYSTEM STATUS
          </div>

          <div>✓ WIFI CONNECTED</div>
          <div>✓ ROUTER ONLINE</div>
          <div>✓ ISP LINK STABLE</div>
          <div>✓ PACKET LOSS: 0%</div>
          <div>✓ LATENCY: 11ms</div>

        </div>

        {/* ================= SIGNAL BARS ================= */}
        <div className="flex items-end gap-2 h-[60px]">

          {[20, 40, 60, 80, 100].map((h, i) => (
            <motion.div
              key={i}
              className="w-4 bg-sky-400/70 rounded-sm shadow-[0_0_10px_#38bdf8]"
              style={{ height: `${h}%` }}
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

        </div>

      </div>
    </div>
  );
}