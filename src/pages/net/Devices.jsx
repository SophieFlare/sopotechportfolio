import React, { useState } from "react";
import { motion } from "framer-motion";

const Devices = () => {
  const [index, setIndex] = useState(0);
  const [learnMode, setLearnMode] = useState(false);

  const devices = [
    {
      key: "hub",
      name: "📡 Hub",
      label: "Signal Distributor",
      learn: "Broadcasts data to all devices without filtering.",
      img: "/net/hub.jpg",
    },
    {
      key: "router",
      name: "🔥 Router",
      label: "LAN ↔ WAN Gateway",
      learn: "Routes packets between different networks.",
      img: "/net/routerr.png",
    },
    {
      key: "gateway",
      name: "🌐 Gateway",
      label: "Protocol Bridge",
      learn: "Translates between different network systems.",
      img: "/net/gateway.gif",
    },
    {
      key: "nic",
      name: "📶 NIC",
      label: "Network Interface",
      learn: "Connects device to network.",
      img: "/net/nic_98.jpg",
    },
    {
      key: "modem",
      name: "📡 Modem",
      label: "Signal Converter",
      learn: "Converts digital ↔ analog signals.",
      img: "/net/modem.jpg",
    },
    {
      key: "repeater",
      name: "📡 Repeater",
      label: "Signal Booster",
      learn: "Extends network range.",
      img: "/net/repeaterr.jpg",
    },
    {
      key: "wap",
      name: "📶 WAP",
      label: "Wireless Access",
      learn: "Provides WiFi connectivity.",
      img: "/net/wap.jpg",
    },
    {
      key: "firewall",
      name: "🛡️ Firewall",
      label: "Security Filter",
      learn: "Blocks unauthorized traffic.",
      img: "/net/firewall.jpg",
    },
    {
      key: "idps",
      name: "🔍 IDPS",
      label: "Threat Detection",
      learn: "Detects & prevents attacks.",
      img: "/net/idps.jpg",
    },
    {
      key: "vpn",
      name: "🔐 VPN",
      label: "Secure Tunnel",
      learn: "Encrypts and hides traffic.",
      img: "/net/vpn.png",
    },
  ];

  const next = () => setIndex((prev) => (prev + 1) % devices.length);
  const prev = () => setIndex((prev) => (prev - 1 + devices.length) % devices.length);

  return (
    <div className="w-full h-screen bg-black text-sky-400 font-mono flex items-center justify-center">

      {/* MAIN CONTAINER */}
      <div className="w-[90%] max-w-[1200px] h-[80vh] grid grid-cols-2 gap-10">

        {/* ================= LEFT — DEVICE ================= */}
        <div className="flex flex-col items-center justify-center">

          {/* DEVICE CARD */}
          <motion.div
            key={index}
            className="w-[260px] h-[260px] border border-sky-400/40 rounded-xl 
            flex items-center justify-center bg-black
            shadow-[0_0_40px_#38bdf8]"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img
              src={devices[index].img}
              alt={devices[index].name}
              className="w-full h-full object-contain p-4"
            />
          </motion.div>

          {/* TITLE */}
          <div className="mt-6 text-center">
            <div className="text-xl tracking-widest">{devices[index].name}</div>
            <div className="text-xs opacity-60">{devices[index].label}</div>
          </div>

          {/* CONTROLS */}
          <div className="mt-8 flex items-center gap-4">

            <button
              onClick={prev}
              className="px-3 py-2 border border-sky-400/40 hover:bg-sky-400/10"
            >
              ◀
            </button>

            <button
              onClick={() => setLearnMode(!learnMode)}
              className="px-5 py-2 border border-sky-400 shadow-[0_0_15px_#38bdf8] hover:bg-sky-400/10"
            >
              {learnMode ? "HIDE INFO" : "LEARN MODE"}
            </button>

            <button
              onClick={next}
              className="px-3 py-2 border border-sky-400/40 hover:bg-sky-400/10"
            >
              ▶
            </button>

          </div>
        </div>

        {/* ================= RIGHT — INFO PANEL ================= */}
        <div className="flex items-center justify-center">

          <motion.div
            key={index + "-" + learnMode}
            className="w-full max-w-md h-full border border-sky-400/30 bg-black 
            shadow-[0_0_30px_#38bdf8] flex flex-col"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >

            {/* HEADER */}
            <div className="p-4 border-b border-sky-400/20 text-sm tracking-widest">
              DEVICE ANALYSIS
            </div>

            {/* CONTENT */}
            <div className="flex-1 p-6 flex flex-col justify-between">

              {learnMode ? (
                <>
                  <div>
                    <div className="text-lg mb-3">
                      {devices[index].name}
                    </div>

                    <div className="text-sm opacity-80 leading-relaxed">
                      {devices[index].learn}
                    </div>
                  </div>

                  <div className="mt-6 text-xs opacity-40">
                    STATUS: LEARNING MODE ACTIVE
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full opacity-50 text-sm">
                  ENABLE LEARN MODE TO VIEW DETAILS
                </div>
              )}

            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Devices;