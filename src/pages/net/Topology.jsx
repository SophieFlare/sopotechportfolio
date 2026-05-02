import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const topologies = [
  {
    key: "bus",
    name: "BUS TOPOLOGY",
    short: "Single backbone connection",
    info: "All devices are connected to a single central cable (backbone). Data travels in both directions.",
  },
  {
    key: "star",
    name: "STAR TOPOLOGY",
    short: "Central hub-based network",
    info: "All devices connect to a central switch or router.",
  },
  {
    key: "ring",
    name: "RING TOPOLOGY",
    short: "Circular data flow",
    info: "Each device connects in a loop.",
  },
  {
    key: "mesh",
    name: "MESH TOPOLOGY",
    short: "Fully interconnected network",
    info: "Every device connects to every other device.",
  },
];

const Topology = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full h-full text-sky-400 font-mono flex flex-col">

      {/* MAIN PANEL */}
      <div className="h-full border border-sky-400 bg-black shadow-[0_0_30px_#38bdf8] flex flex-col">

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
        <div className="flex flex-1 overflow-hidden">

          {/* LEFT VISUAL */}
          <div className="w-1/2 flex items-center justify-center border-r border-sky-400">

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className="w-28 h-28 sm:w-40 sm:h-40 border border-sky-400 rounded-full flex items-center justify-center shadow-[0_0_20px_#38bdf8]">
                  <span className="text-xs">
                    {topologies[active].key.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* RIGHT INFO */}
          <div className="w-1/2 p-3 flex flex-col justify-center overflow-hidden">

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-2 mb-3">
              {topologies.map((t, i) => (
                <button
                  key={t.key}
                  onClick={() => setActive(i)}
                  className={`text-[10px] px-2 py-1 border border-sky-400 ${
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
                  className="border border-sky-400 p-3 text-xs overflow-auto"
                >
                  <div className="text-sm mb-2">
                    {topologies[active].name}
                  </div>

                  <div className="opacity-70 mb-2">
                    {topologies[active].short}
                  </div>

                  <div className="leading-relaxed">
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
  );
};

export default Topology;