import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cableData = [
  {
    key: "ethernet",
    title: "Ethernet Cable (RJ-45)",
    short: "Most common LAN cable",
    info: "Ethernet cables transmit data using electrical signals over twisted copper pairs. Used in LAN networks for stable and fast connections.",
  },
  {
    key: "fiber",
    title: "Fiber Optic Cable",
    short: "High-speed light-based transmission",
    info: "Uses light pulses instead of electricity. Extremely fast, long-distance, immune to EMI (electromagnetic interference). Used in ISPs and backbone networks.",
  },
  {
    key: "coax",
    title: "Coaxial Cable",
    short: "Old but still used",
    info: "Used in TV and some internet systems. Has a central copper wire with shielding to reduce interference.",
  },
  {
    key: "usb",
    title: "USB Network Cable",
    short: "Device connectivity cable",
    info: "Used for direct device communication and some networking hardware setups.",
  },
];

const Cables = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full h-screen bg-black relative font-mono text-sky-400 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#38bdf8_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* MAIN WINDOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

        <div className="w-[520px] border border-sky-400 bg-black shadow-[0_0_40px_#38bdf8]">

          {/* TOP BAR */}
          <div className="flex justify-between items-center px-3 py-2 border-b border-sky-400">
            <span className="text-xs tracking-widest">CABLE SYSTEM</span>

            <button
              onClick={() => setOpen(!open)}
              className="text-xs border border-sky-400 px-2 py-1 hover:bg-sky-400/10"
            >
              {open ? "CLOSE" : "OPEN"}
            </button>
          </div>

          {/* BODY */}
          <div className="p-4">

            {/* SELECT BAR BUTTONS */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cableData.map((c, i) => (
                <button
                  key={c.key}
                  onClick={() => setActive(i)}
                  className={`text-[10px] px-2 py-1 border border-sky-400 hover:bg-sky-400/10 transition ${
                    active === i ? "bg-sky-400/10" : ""
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>

            {/* CONTENT PANEL (OPEN / CLOSE STYLE WINDOW) */}
            <AnimatePresence mode="wait">
              {open && (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="border border-sky-400 p-4 bg-black"
                >

                  <div className="text-sm mb-2">
                    {cableData[active].title}
                  </div>

                  <div className="text-xs opacity-70 mb-3">
                    {cableData[active].short}
                  </div>

                  <div className="text-xs leading-relaxed opacity-90">
                    {cableData[active].info}
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

            {/* WHEN CLOSED */}
            {!open && (
              <div className="text-xs opacity-50">
                Click OPEN to explore cable technologies
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cables;