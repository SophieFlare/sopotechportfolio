import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro({ open, onClose }) {

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  // RESET + TYPE ON OPEN
  useEffect(() => {
    if (!open) return;

    setText1("");
    setText2("");
    setText3("");
    setText4("");

    const lines = [
      {
        text: "Welcome to SopoTech Network",
        setter: setText1,
        speed: 30,
      },
      {
        text: "> secure tunnel: ACTIVE",
        setter: setText2,
        speed: 25,
      },
      {
        text: "> nodes: SYNCED",
        setter: setText3,
        speed: 25,
      },
      {
        text: '$SOPO = "Born_For_Deep_Tech_Exploration"',
        setter: setText4,
        speed: 20,
      },
    ];

    let i = 0;

    const typeLine = (line, setter, speed, callback) => {
      let index = 0;

      const interval = setInterval(() => {
        setter(line.slice(0, index));
        index++;

        if (index > line.length) {
          clearInterval(interval);
          callback?.();
        }
      }, speed);
    };

    const run = () => {
      if (i >= lines.length) return;

      typeLine(lines[i].text, lines[i].setter, lines[i].speed, () => {
        i++;
        run();
      });
    };

    run();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">

          {/* ================= LEFT CHARACTER ================= */}
          <div className="fixed op-1/2 left-[15%] z-[9998] pointer-events-none">
            <div className="relative w-[410px] h-[570px]">
              <img
                src="/sopo_pixel.png"
                alt="character"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ================= CENTER WINDOW ================= */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[480px] bg-black border border-sky-400 shadow-[0_0_35px_rgba(56,189,248,0.5)] font-mono text-sky-300 overflow-hidden relative z-10"
          >

            {/* HEADER */}
            <div className="flex justify-between items-center px-4 py-2 border-b border-sky-400/30 text-xs tracking-widest">
              <span>NETWORK // SESSION ACTIVE</span>
              <button onClick={onClose} className="text-white hover:text-sky-300">
                ✕
              </button>
            </div>

            {/* BODY (TYPEWRITER) */}
            <div className="p-5 space-y-3 text-sm">

              <div className="text-green-400 uppercase"> ● CONNECTION ESTABLISHED
 </div>

              <div className="text-white/80">
                {text1}
              </div>

              <div className="text-white/60 space-y-1">
                <div>&gt; {text2}</div>
                <div>&gt; {text3}</div>
              </div>

              <div className="border border-sky-400/30 p-3 text-white/70 text-center">
                {text4}
              </div>

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