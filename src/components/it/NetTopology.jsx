import React from "react";
import { motion } from "framer-motion";

export default function NetTopology() {
  return (
    <div className="w-[420px] p-4 bg-black/40 border border-sky-400/20 rounded-md backdrop-blur-md font-mono text-sky-400">

      {/* TITLE */}
      <div className="text-xs tracking-[0.35em] text-sky-300 mb-4">
        NETWORK TOPOLOGY
      </div>

      {/* FLOW */}
      <div className="relative flex flex-col gap-6">

        {/* LAN */}
        <div className="flex items-center gap-4">
          <motion.div
            className="w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_15px_#38bdf8]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <div>
            <div className="text-sm tracking-widest">LAN</div>
            <div className="text-xs opacity-60">
              Local Area Network | Internal Device Communication
            </div>
          </div>
        </div>

        {/* ROUTER */}
        <div className="flex items-center gap-4">
          <motion.div
            className="w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_20px_#38bdf8]"
            animate={{
              boxShadow: [
                "0 0 5px #38bdf8",
                "0 0 20px #38bdf8",
                "0 0 5px #38bdf8",
              ],
            }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <div>
            <div className="text-sm tracking-widest">ROUTER</div>
            <div className="text-xs opacity-60">
              Traffic Director | LAN ↔ WAN Bridge
            </div>
          </div>
        </div>

        {/* WAN */}
        <div className="flex items-center gap-4">
          <motion.div
            className="w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_15px_#38bdf8]"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <div>
            <div className="text-sm tracking-widest">WAN</div>
            <div className="text-xs opacity-60">
              Wide Area Network | ISP → Internet Backbone
            </div>
          </div>
        </div>

        {/* FLOW LINE */}
        <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-sky-400/10" />

      </div>
    </div>
  );
}