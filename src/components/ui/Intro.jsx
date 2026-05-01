import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">

          {/* WINDOW */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[480px] bg-black border border-sky-400 shadow-[0_0_35px_rgba(56,189,248,0.5)] font-mono text-sky-300 overflow-hidden"
          >

            {/* HEADER */}
            <div className="flex justify-between items-center px-4 py-2 border-b border-sky-400/30 text-xs tracking-widest">
              <span>NETWORK // SESSION ACTIVE</span>
              <button onClick={onClose} className="text-white hover:text-sky-300">
                ✕
              </button>
            </div>

            {/* BODY */}
            <div className="p-5 space-y-3 text-sm">

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-green-400"
              >
                ● CONNECTED
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white/80"
              >
                Welcome to SopoTechie Network
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="text-white/60 space-y-1"
              >
                <div>&gt; secure tunnel: ACTIVE</div>
                <div>&gt; nodes: SYNCED</div>
                <div>&gt; system latency: 12ms</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="border border-sky-400/30 p-3 text-white/70 text-center"
              >
                "You are inside the system"
              </motion.div>

            </div>

            {/* BINARY FOOTER */}
            <div className="text-[10px] text-sky-500/60 px-4 py-2 border-t border-sky-400/20 overflow-hidden whitespace-nowrap">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
              >
                01010110 01000001 01000011 01001111 01010010 00100000 01101110 01100101 01110100 01110111 01101111 01110010 01101011 00100000 01000011 01001111 01001110 01001110 01000101 01000011 01010100 01000101 01000100
              </motion.div>
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}