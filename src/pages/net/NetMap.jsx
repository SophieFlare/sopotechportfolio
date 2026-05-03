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
  { id: "internet", label: "🌍 INTERNET (WAN)", x: "50%", y: "0%", info: "Global network" },
  { id: "isp", label: "📡 silknet", x: "50%", y: "10%", info: "ispisp isp" },

  { id: "modem", label: "📡 MODEM / ONT", x: "50%", y: "22%", info: "Signal converter" },
  { id: "firewall", label: "🔥 FIREWALL", x: "50%", y: "36%", info: "Security layer" },
  { id: "router", label: "📡 ROUTER", x: "50%", y: "57%", info: "Traffic controller" },

  { id: "switch", label: "🔌 SWITCH", x: "25%", y: "68%", info: "LAN distributor" },
  { id: "wifi", label: "📶 WIFI (AP)", x: "75%", y: "68%", info: "Wireless access" },

  { id: "pc", label: "💻 PC", x: "15%", y: "85%", info: "Client device" },
  { id: "server", label: "🖥 SERVER", x: "35%", y: "85%", info: "Server node" },

  { id: "phone", label: "📱 PHONE", x: "65%", y: "85%", info: "Mobile device" },
  { id: "laptop", label: "💻 LAPTOP", x: "85%", y: "85%", info: "Wireless client" },
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
          className="absolute flex flex-col items-center"
          style={{
  top: node.y,
  left: node.x,
  transform: "translate(-50%, -50%)"
}}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.15 }}
          onMouseEnter={() => setHovered(node)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* CIRCLE */}
          <div className="w-16 h-16 rounded-full border border-sky-400 bg-black flex items-center justify-center shadow-[0_0_20px_#38bdf8] hover:shadow-[0_0_35px_#38bdf8] transition">
            {/* IMAGE PLACEHOLDER */}
          <div className="text-white text-xl">
  {iconMap[node.id]}
</div>  </div>

          {/* LABEL */}
          <div className="mt-2 text-[10px] text-sky-400 font-mono text-center">
            {node.label}
          </div>
        </motion.div>
      ))}

      {/* HOVER BOX */}
      {hovered && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black border border-sky-400 px-4 py-2 text-sm text-sky-400 shadow-[0_0_20px_#38bdf8] font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <strong>{hovered.label}</strong>
          <div className="text-xs opacity-80 mt-1">{hovered.info}</div>
        </motion.div>
      )}
</div>
  )
}

export default NetMap