import React, {useState} from 'react'
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaServer,
  FaWifi,
  FaDesktop,
  FaMobileAlt,
  FaNetworkWired,
} from "react-icons/fa";

const NetMap = () => {


  const [hovered, setHovered] = useState(null);
  const getNode = (id) => nodes.find((n) => n.id === id);

  const nodes = [
  { id: "internet", label: "INTERNET (WAN)", x: "50%", y: "5%", info: "Global network" },
  { id: "isp", label: "📡 silknet", x: "50%", y: "17%", info: "ispisp isp" },

  { id: "modem", label: "MODEM / ONT", x: "50%", y: "30%", info: "Signal converter" },
  { id: "firewall", label: "FIREWALL", x: "50%", y: "43%", info: "Security layer" },
  { id: "router", label: "ROUTER", x: "50%", y: "57%", info: "Traffic controller" },

  { id: "switch", label: "🔌 SWITCH", x: "25%", y: "68%", info: "LAN distributor" },
  { id: "wifi", label: "WIFI (AP)", x: "75%", y: "68%", info: "Wireless access" },

  { id: "pc", label: "PC", x: "15%", y: "85%", info: "Client device" },
  { id: "server", label: "🖥 SERVER", x: "35%", y: "85%", info: "Server node" },

  { id: "phone", label: "PHONE", x: "65%", y: "85%", info: "Mobile device" },
  { id: "laptop", label: "LAPTOP", x: "85%", y: "85%", info: "Wireless client" },
];


const iconMap = {
  internet: <FaGlobe />,
  isp: <FaServer />,
  modem: <FaNetworkWired />,
  firewall: <FaNetworkWired />,
  router: <FaNetworkWired />,
  switch: <FaNetworkWired />,
  wifi: <FaWifi />,
  pc: <FaDesktop />,
  server: <FaServer />,
  phone: <FaMobileAlt />,
  laptop: <FaDesktop />,
};
const lines = [
  ["internet", "modem"],
 ["internet", "isp"],
  ["modem", "firewall"],
  ["firewall", "router"],

  ["router", "switch"],
  ["router", "wifi"],

  ["switch", "pc"],
  ["switch", "server"],

  ["wifi", "phone"],
  ["wifi", "laptop"],
];


  return (
<div className="w-full min-h-screen bg-black relative overflow-y-auto flex items-center justify-center">
      {/* GRID */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#38bdf8_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* LINES */}
      <svg className="absolute w-full h-full">
        {lines.map(([a, b], i) => {
          const n1 = getNode(a);
          const n2 = getNode(b);

          return (
            <motion.line
              key={i}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="#38bdf8"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: i * 0.15 }}
            />
          );
        })}
      </svg>

      {/* CIRCLES (CENTERED ON CONNECTION POINTS) */}
   {nodes.map((node, i) => (
  <motion.div
    key={node.id}
    className="absolute flex items-center gap-3"
    style={{
      top: `calc(${node.y} - 4%)`,
      left: `calc(${node.x} - 2%)`,
      transform: "translate(-50%, -50%)",
    }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: i * 0.12 }}
    onMouseEnter={() => setHovered(node)}
    onMouseLeave={() => setHovered(null)}
  >
    {/* ================= NODE GLOW CORE ================= */}
    <div className="relative w-16 h-16 flex items-center justify-center">

      {/* outer glow pulse */}
      <div className="absolute w-20 h-20 rounded-full bg-sky-400/10 blur-xl animate-pulse" />

      {/* ring */}
      <div className="absolute w-16 h-16 rounded-full border border-sky-400/60 shadow-[0_0_20px_#38bdf8]" />

      {/* core */}
      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-[0_0_25px_#38bdf8]">
        <div className="text-sky-300 text-lg drop-shadow-[0_0_6px_#38bdf8]">
          {iconMap[node.id]}
        </div>
      </div>
    </div>

    {/* ================= LABEL (RIGHT SIDE) ================= */}
    <div className="flex flex-col leading-tight">
      <div className="text-[11px] tracking-widest text-sky-300">
        {node.label}
      </div>
      <div className="text-[9px] opacity-40">
        NODE ID: {node.id.toUpperCase()}
      </div>
    </div>
  </motion.div>
))}

      {/* HOVER BOX */}
{/* HOVER HUD (TOP RIGHT PANEL) */}
{hovered && (
  <motion.div
    className="absolute top-6 right-6 w-[260px]
    bg-black/80 border border-sky-400/40
    backdrop-blur-md shadow-[0_0_30px_#38bdf8]
    text-sky-300 font-mono text-sm"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
  >
    {/* HEADER */}
    <div className="px-4 py-2 border-b border-sky-400/20 flex justify-between items-center">
      <span className="text-xs tracking-widest text-sky-200">
        NODE INFO
      </span>
      <span className="text-[10px] text-green-400 animate-pulse">
        ● LIVE
      </span>
    </div>

    {/* CONTENT */}
    <div className="p-4 space-y-2">

      <div className="text-sky-200 font-bold tracking-widest text-sm">
        {hovered.label}
      </div>

      <div className="text-xs opacity-70 leading-relaxed">
        {hovered.info}
      </div>

      {/* fake system stats */}
      <div className="mt-3 text-[10px] space-y-1 opacity-60">
        <div>STATUS: ACTIVE</div>
        <div>PACKETS: FLOWING</div>
        <div>LATENCY: LOW</div>
        <div>SECURITY: OK</div>
      </div>

    </div>

    {/* GLOW LINE */}
    <div className="h-[2px] w-full bg-sky-400/30 shadow-[0_0_10px_#38bdf8]" />
  </motion.div>
)}
</div>
  )
}

export default NetMap