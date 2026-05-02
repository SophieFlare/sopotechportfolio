import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const topologies = [
  {
    key: "bus",
    name: "BUS TOPOLOGY",
    short: "Single backbone connection",
    info: "All devices are connected to a single central cable (backbone). Data travels in both directions, and if the main cable fails, the whole network goes down.",
  },
  {
    key: "star",
    name: "STAR TOPOLOGY",
    short: "Central hub-based network",
    info: "All devices connect to a central switch or router. If one device fails, the network still works. If the central device fails, everything stops.",
  },
  {
    key: "ring",
    name: "RING TOPOLOGY",
    short: "Circular data flow",
    info: "Each device connects to two others, forming a circle. Data travels in one direction (or dual in modern systems). One break can affect the network unless dual ring is used.",
  },
  {
    key: "mesh",
    name: "MESH TOPOLOGY",
    short: "Fully interconnected network",
    info: "Every device connects to every other device. Highly reliable and redundant but expensive and complex.",
  },
];

const Topology = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full h-screen bg-black text-sky-400 font-mono relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#38bdf8_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* MAIN WINDOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

        <div className="w-[850px] h-[420px] border border-sky-400 bg-black shadow-[0_0_40px_#38bdf8] flex flex-col">

          {/* TOP BAR */}
          <div className="flex justify-between items-center px-3 py-2 border-b border-sky-400">
            <span className="text-xs tracking-widest">
              NETWORK TOPOLOGY LAB
            </span>

            <button
              onClick={() => setOpen(!open)}
              className="text-xs border border-sky-400 px-2 py-1 hover:bg-sky-400/10"
            >
              {open ? "CLOSE" : "OPEN"}
            </button>
          </div>

          {/* BODY */}
          <div className="flex flex-1">

            {/* LEFT - VISUAL AREA */}
            <div className="w-1/2 border-r border-sky-400 flex items-center justify-center relative">

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >

                  {/* SIMPLE VISUAL PLACEHOLDER */}
                  <div className="w-40 h-40 border border-sky-400 rounded-full flex items-center justify-center shadow-[0_0_25px_#38bdf8]">
                    <span className="text-xs">
                      {topologies[active].key.toUpperCase()}
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

            {/* RIGHT - INFO PANEL */}
            <div className="w-1/2 p-4 flex flex-col justify-center">

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {topologies.map((t, i) => (
                  <button
                    key={t.key}
                    onClick={() => setActive(i)}
                    className={`text-[10px] px-2 py-1 border border-sky-400 hover:bg-sky-400/10 ${
                      active === i ? "bg-sky-400/10" : ""
                    }`}
                  >
                    {t.key.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* CONTENT */}
              <AnimatePresence mode="wait">
                {open && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="border border-sky-400 p-4"
                  >

                    <div className="text-sm mb-2">
                      {topologies[active].name}
                    </div>

                    <div className="text-xs opacity-70 mb-2">
                      {topologies[active].short}
                    </div>

                    <div className="text-xs leading-relaxed">
                      {topologies[active].info}
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

              {!open && (
                <div className="text-xs opacity-50">
                  Open panel to explore network topologies
                </div>
              )}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Topology;