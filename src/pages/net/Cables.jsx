import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cableData = [
  {
    key: "ethernet",
    title: "Ethernet Cable (RJ-45)",
    short: "Most common LAN cable",
    info: "Ethernet cables transmit data using electrical signals over twisted copper pairs.",
  },
  {
    key: "fiber",
    title: "Fiber Optic Cable",
    short: "High-speed light-based transmission",
    info: "Uses light pulses instead of electricity. Extremely fast and immune to interference.",
  },
  {
    key: "coax",
    title: "Coaxial Cable",
    short: "Old but still used",
    info: "Used in TV and internet systems.",
  },
  {
    key: "usb",
    title: "USB Network Cable",
    short: "Device connectivity cable",
    info: "Used for direct device communication.",
  },
];

const Cables = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full h-full bg-black font-mono text-sky-400 relative overflow-hidden border border-sky-400">

      {/* GRID */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#38bdf8_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* HEADER */}
      <div className="relative z-10 flex justify-between items-center px-3 py-2 border-b border-sky-400 text-xs">
        <span>CABLE SYSTEM</span>

        <button
          onClick={() => setOpen(!open)}
          className="text-[10px] border border-sky-400 px-2 py-1 hover:bg-sky-400/10"
        >
          {open ? "CLOSE" : "OPEN"}
        </button>
      </div>

      {/* BODY */}
      <div className="relative z-10 p-2 flex flex-col gap-2">

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-2">
          {cableData.map((c, i) => (
            <button
              key={c.key}
              onClick={() => setActive(i)}
              className={`text-[10px] px-2 py-1 border border-sky-400 ${
                active === i ? "bg-sky-400/10" : ""
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border border-sky-400 p-3 text-xs bg-black"
            >
              <div className="text-sm mb-1">
                {cableData[active].title}
              </div>

              <div className="opacity-70 mb-2">
                {cableData[active].short}
              </div>

              <div className="leading-relaxed">
                {cableData[active].info}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!open && (
          <div className="text-xs opacity-50">
            Click OPEN to explore cable technologies
          </div>
        )}

      </div>
    </div>
  );
};

export default Cables;