import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const panels = {
  ip: {
    title: "🌐 IP ADDRESS",
    content: `
An IP address is a unique identifier for a device on a network.

Types:
- IPv4: 192.168.1.1
- IPv6: 2001:0db8::1

Purpose:
- Identifies device location in a network
- Used for routing data across internet

Think of it like: HOME ADDRESS of your device
    `,
  },

  mac: {
    title: "💻 MAC ADDRESS",
    content: `
MAC (Media Access Control) address is a hardware identifier.

Format:
- 00:1A:2B:3C:4D:5E

Properties:
- Unique for every network card
- Permanent (burned into hardware)

Think of it like: DEVICE SERIAL NUMBER
Used inside local network only (LAN)
    `,
  },

  subnet: {
    title: "🧩 SUBNET MASK",
    content: `
Subnet mask divides IP into network + host part.

Example:
IP:        192.168.1.10
Mask:      255.255.255.0

Meaning:
- First part = Network
- Last part = Device

Used for:
- Splitting networks
- Organizing large systems
    `,
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
    <div className="w-full h-screen bg-black text-sky-400 font-mono relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#38bdf8_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* LEFT PANEL (BUTTONS) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">

        <button
          onClick={() => toggle("ip")}
          className="px-4 py-2 border border-sky-400 hover:bg-sky-400/10"
        >
          IP ADDRESS
        </button>

        <button
          onClick={() => toggle("mac")}
          className="px-4 py-2 border border-sky-400 hover:bg-sky-400/10"
        >
          MAC ADDRESS
        </button>

        <button
          onClick={() => toggle("subnet")}
          className="px-4 py-2 border border-sky-400 hover:bg-sky-400/10"
        >
          SUBNET MASK
        </button>
      </div>

      {/* FLOATING WINDOWS */}
      <AnimatePresence>
        {Object.keys(open).map((key) =>
          open[key] ? (
            <motion.div
              key={key}
              className="absolute top-20 left-1/3 w-[420px] bg-black border border-sky-400 shadow-[0_0_30px_#38bdf8]"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >

              {/* TITLE BAR */}
              <div className="flex justify-between items-center px-3 py-2 border-b border-sky-400">
                <span>{panels[key].title}</span>
                <button onClick={() => toggle(key)}>✕</button>
              </div>

              {/* CONTENT */}
              <div className="p-4 text-xs whitespace-pre-line opacity-90 leading-relaxed">
                {panels[key].content}
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

    </div>
  );
}