import React, { useState } from "react";
import { motion } from "framer-motion";

const Devices = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [index, setIndex] = useState(0);

const devices = [
  {
    key: "hub",
    name: "📡 Hub",
    label: "Legacy Network Signal Distributor",
    learn: "Hub broadcasts data to all devices in the network without filtering.",
    img: "/net/hub.jpg",
  },
  {
    key: "router",
    name: "🔥 Router",
    label: "Traffic Routing Gateway (LAN ↔ WAN)",
    learn: "Router connects different networks and directs data packets efficiently.",
    img: "/net/routerr.png",
  },
  {
    key: "gateway",
    name: "🌐 Gateway",
    label: "ISP Bridge",
    learn: "Gateway acts as a bridge between different network protocols and systems.",
    img: "/net/gateway.gif",
  },
  {
    key: "nic",
    name: "📶 NIC",
    label: "Network Interface Controller",
    learn: "NIC allows a device to connect to a network via Ethernet or WiFi.",
    img: "/net/nic_98.jpg",
  },
  {
    key: "modem",
    name: "📡 Modem",
    label: "Signal Converter",
    learn: "Modem converts digital data into signals for ISP communication.",
    img: "/net/modem.jpg",
  },
  {
    key: "repeater",
    name: "📡 Repeater",
    label: "Signal Extender",
    learn: "Repeater boosts weak signals to extend network range.",
    img: "/net/repeaterr.jpg",
  },
  {
    key: "wap",
    name: "📶 WAP",
    label: "Wireless Access Point",
    learn: "WAP provides wireless network access for devices.",
    img: "/net/wap.jpg",
  },
  {
    key: "firewall",
    name: "🛡️ Firewall",
    label: "Security Filter",
    learn: "Firewall monitors and blocks unauthorized network traffic.",
    img: "/net/firewall.jpg",
  },
  {
    key: "idps",
    name: "🔍 IDPS",
    label: "Intrusion Prevention",
    learn: "Detects and prevents malicious network activities.",
    img: "/net/idps.jpg",
  },
  {
    key: "vpn",
    name: "🔐 VPN",
    label: "Secure Tunnel",
    learn: "VPN encrypts traffic and creates secure private connections.",
    img: "/net/vpn.png",
  },
];
const learningImages = {
  hub: "/net/hubb.webp",
  router: "/net/routerrr.png",
  gateway: "/net/gateway.png",
  nic: "/net/nic.png",
  modem: "/net/modemm.png",
  repeater: "/net/repeater.png",
  wap: "/net/wappp.jpg",
  firewall: "/net/firewalll.png",
  idps: "/net/idpss.png",
  vpn: "/net/vpnnn.png",
};
  const next = () => setIndex((prev) => (prev + 1) % devices.length);
  const prev = () => setIndex((prev) => (prev - 1 + devices.length) % devices.length);

  return (
    <div className="w-full h-screen bg-black flex font-mono text-sky-400">

      {/* GRID */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#38bdf8_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* LEFT SIDE */}
      <div className="w-1/2 flex items-center justify-center relative">

        <div className="flex flex-col items-center z-10">

          {/* DEVICE DISPLAY */}
          <motion.div
            key={index}
            className="w-[20vw] h-[20vw] max-w-[260px] max-h-[260px] border border-sky-400 bg-black flex items-center justify-center shadow-[0_0_40px_#38bdf8] rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center text-xs px-2">
          <img
  src={devices[index].img}
  alt={devices[index].name}
  className="w-full h-full object-contain"
/>
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="mt-6 text-center space-y-1">
            <div className="text-lg tracking-widest">{devices[index].name}</div>
            <div className="text-xs opacity-70">{devices[index].label}</div>
          </div>

          {/* CONTROLS */}
          <div className="mt-6 flex items-center gap-3">

            <button
              onClick={prev}
              className="px-3 py-2 border border-sky-400 hover:bg-sky-400/10"
            >
              {"<"}
            </button>

            <button
              onClick={() => setPanelOpen(true)}
              className="px-4 py-2 border border-sky-400 shadow-[0_0_15px_#38bdf8] hover:bg-sky-400/10"
            >
              OPEN PANEL
            </button>

            <button
              onClick={next}
              className="px-3 py-2 border border-sky-400 hover:bg-sky-400/10"
            >
              {">"}
            </button>

          </div>
        </div>
      </div>
 <div>
        📘 Network Devices
        </div> 
      {/* RIGHT SIDE - LEARNING PANEL */}
  {/* RIGHT SIDE - LEARNING PANEL */}
<div className="w-1/2 flex items-center justify-center px-10">

  <motion.div
    key={index}
    className="w-full max-w-md h-[70vh] border border-sky-400 bg-black shadow-[0_0_40px_#38bdf8] flex flex-col"
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  >

    {/* TOP 50% - TEXT */}
    <div className="h-1/2 p-6 border-b border-sky-400 flex flex-col justify-center">

      <div className="text-lg uppercase mb-3 border-b border-sky-400 pb-2 flex-row ">
      
         <div className="text-xl mb-2">
        {devices[index].name}
      </div>
      </div>

     

      <div className="text-sm opacity-80 leading-relaxed">
        {devices[index].learn}
      </div>

      <div className="mt-4 text-xs opacity-50">
       qweq
      </div>

    </div>

    {/* BOTTOM 50% - IMAGE AREA */}
    <div className="h-1/2 flex items-center justify-center relative">

      {/* IMAGE FRAME */}
      <div className="">

        {/* IMAGE PLACEHOLDER */}
   <div className="">
 
<img
  src={learningImages[devices[index].key] || devices[index].img}
  alt={devices[index].name}
  className="w-full h-full object-contain"
/>
</div>

      </div>

     
    </div>

  </motion.div>
</div>
    </div>
  );
};

export default Devices;