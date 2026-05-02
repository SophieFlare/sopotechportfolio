import React, { useState } from "react";
import { motion } from "framer-motion";

const Devices = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [index, setIndex] = useState(0);
 
const devices = [
  { name: "📡 Hub", label: "Legacy Network Signal Distributor" },
  { name: "🔥 Router  ", label: "Traffic Routing Gateway (LAN ↔ WAN)" },
  { name: "🌐 Gateway", label: "Internet Service Provider Bridge" },
  { name: "📶 NIC   x", label: "Network Interface Controller (Device Adapter)" },
  { name: "📡 Modem", label: "ISP Signal Converter (Digital ↔ Analog)" },
  { name: "📡 Repeater", label: "Signal Range Extender" },
  { name: "📶 WAP", label: "Wireless Access Point (WiFi Distribution)" },
  { name: "🛡️ Firewall  x", label: "Network Security Filter & Traffic Monitor" },
  { name: "🔍 IDPS  x", label: "Intrusion Detection & Prevention System" },
  { name: "🔐 VPN     x", label: "Encrypted Secure Tunnel (Private Network Access)" },
];
 const next = () => setIndex((prev) => (prev + 1) % devices.length);
const prev = () => setIndex((prev) => (prev - 1 + devices.length) % devices.length);
 
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center font-mono">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#38bdf8_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* MAIN CENTER DEVICE */}
    <div className="flex flex-col items-center justify-center text-sky-400 z-10">

  {/* DEVICE DISPLAY */}
  <motion.div
    className="w-[20vw] h-[20vw] max-w-[260px] max-h-[260px] border border-sky-400 bg-black flex items-center justify-center shadow-[0_0_40px_#38bdf8] rounded-xl"
    key={index}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="w-1/2 h-1/2 bg-sky-400/20 rounded-full flex items-center justify-center text-xs text-center">
      {devices[index].name}
    </div>
  </motion.div>

  {/* TEXT */}
  <div className="mt-6 text-center space-y-1">
    <div className="text-lg tracking-widest">{devices[index].name}</div>
    <div className="text-xs opacity-70">{devices[index].label}</div>
  </div>

  {/* BUTTON + ARROWS (your requested line layout) */}
  <div className="mt-6 flex items-center gap-3">

    {/* LEFT ARROW */}
    <button
      onClick={prev}
      className="px-3 py-2 border border-sky-400 text-sky-400 hover:bg-sky-400/10"
    >
      {"<"}
    </button>

    {/* MAIN BUTTON */}
    <button
      onClick={() => setPanelOpen(true)}
      className="px-4 py-2 border border-sky-400 text-sky-400 hover:bg-sky-400/10 shadow-[0_0_15px_#38bdf8]"
    >
      OPEN CONTROL
    </button>

    {/* RIGHT ARROW */}
    <button
      onClick={next}
      className="px-3 py-2 border border-sky-400 text-sky-400 hover:bg-sky-400/10"
    >
      {">"}
    </button>

  </div>
</div>

      {/* RIGHT SLIDING PANEL */}
      <motion.div
        className="absolute top-0 right-0 h-full w-[320px] bg-black border-l border-sky-400 shadow-[0_0_40px_#38bdf8] font-mono z-20"
        initial={{ x: "100%" }}
        animate={{ x: panelOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 120 }}
      >

        {/* HEADER */}
        <div className="p-4 border-b border-sky-400 flex justify-between items-center text-sky-400">
          <span>ROUTER PANEL</span>
          <button onClick={() => setPanelOpen(false)}>✕</button>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-4 text-sm text-sky-400">

          <div className="border border-sky-400 p-3">
            🔌 Status: ONLINE
          </div>

          <div className="border border-sky-400 p-3">
            📡 Connections: 12 devices
          </div>

          <div className="border border-sky-400 p-3">
            🌐 Bandwidth: 300 Mbps
          </div>

          <div className="border border-sky-400 p-3">
            🔥 Firewall: ACTIVE
          </div>

        </div>
      </motion.div>

    </div>
  );
};

export default Devices;