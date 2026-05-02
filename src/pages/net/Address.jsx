import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const panels = {
  ip: {
    title: "🌐 IP ADDRESS",
    content: `IP address is a unique identifier for a device.

Types:
- IPv4: 192.168.1.1
- IPv6: 2001:0db8::1

Used for routing data across networks.`,
  },

  mac: {
    title: "💻 MAC ADDRESS",
    content: `MAC address is a hardware identifier.

Format:
00:1A:2B:3C:4D:5E

It is unique per network card.`,
  },

  subnet: {
    title: "🧩 SUBNET MASK",
    content: `Subnet mask separates network and host.

Example:
IP:   192.168.1.10
Mask: 255.255.255.0`,
  },
};

export default function Address() {
  const [open, setOpen] = useState({
    ip: false,
    mac: false,
    subnet: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full h-full bg-black text-sky-400 font-mono relative overflow-hidden border border-sky-400">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#38bdf8_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* HEADER */}
      <div className="relative z-10 flex justify-between items-center px-3 py-2 border-b border-sky-400 text-xs">
        <span>ADDRESS SYSTEM</span>
      </div>

      {/* BUTTONS */}
      <div className="relative z-10 flex gap-2 p-2 flex-wrap border-b border-sky-400">
        {Object.keys(panels).map((key) => (
          <button
            key={key}
            onClick={() => toggle(key)}
            className="text-[10px] px-2 py-1 border border-sky-400 hover:bg-sky-400/10"
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      {/* CONTENT WINDOWS */}
      <div className="relative z-10 p-2">

        <AnimatePresence>
          {Object.keys(open).map((key) =>
            open[key] ? (
              <motion.div
                key={key}
                className="border border-sky-400 bg-black p-3 mb-3 text-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <div className="text-sm mb-1">
                  {panels[key].title}
                </div>

                <div className="opacity-80 whitespace-pre-line leading-relaxed">
                  {panels[key].content}
                </div>

                <button
                  onClick={() => toggle(key)}
                  className="mt-2 text-[10px] border border-sky-400 px-2 py-1"
                >
                  CLOSE
                </button>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {!Object.values(open).some(Boolean) && (
          <div className="text-xs opacity-50 p-2">
            Click a panel to view network address data
          </div>
        )}

      </div>
    </div>
  );
}