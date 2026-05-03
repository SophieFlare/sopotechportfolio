import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaServer, FaWifi, FaNetworkWired } from "react-icons/fa";
import { MdLan } from "react-icons/md";

const nodes = [
  { id: "CORE", type: "core", x: 50, y: 15 },
  { id: "ROUTER-1", type: "router", x: 30, y: 40 },
  { id: "ROUTER-2", type: "router", x: 70, y: 40 },
  { id: "LAN-A", type: "lan", x: 20, y: 70 },
  { id: "LAN-B", type: "lan", x: 40, y: 70 },
  { id: "LAN-C", type: "lan", x: 60, y: 70 },
  { id: "LAN-D", type: "lan", x: 80, y: 70 },
  { id: "WIFI-1", type: "wifi", x: 10, y: 90 },
  { id: "WIFI-2", type: "wifi", x: 90, y: 90 },
];

const connections = [
  ["CORE", "ROUTER-1"],
  ["CORE", "ROUTER-2"],
  ["ROUTER-1", "LAN-A"],
  ["ROUTER-1", "LAN-B"],
  ["ROUTER-2", "LAN-C"],
  ["ROUTER-2", "LAN-D"],
  ["LAN-A", "WIFI-1"],
  ["LAN-D", "WIFI-2"],
];

const iconMap = {
  core: FaServer,
  router: FaNetworkWired,
  lan: MdLan,
  wifi: FaWifi,
};

const NetworkMap = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [packets, setPackets] = useState([]);

  // node glow activity
  useEffect(() => {
    const interval = setInterval(() => {
      const rand = nodes[Math.floor(Math.random() * nodes.length)];
      setActiveNode(rand.id);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // packet generator
  useEffect(() => {
    const interval = setInterval(() => {
      const [from, to] =
        connections[Math.floor(Math.random() * connections.length)];

      setPackets((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          from,
          to,
          type: Math.random() > 0.5 ? "TCP" : "UDP",
          progress: 0,
        },
      ]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  // packet movement
  useEffect(() => {
    const interval = setInterval(() => {
      setPackets((prev) =>
        prev
          .map((p) => ({ ...p, progress: p.progress + 0.04 }))
          .filter((p) => p.progress < 1)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const getNode = (id) => nodes.find((n) => n.id === id);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden bg-transparent pointer-events-none"
      initial={{
        opacity: 0,
        scale: 1.05,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.4,
        ease: "easeOut",
      }}
    >
      {/* FLASH OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-white/5 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{ duration: 1.2 }}
      />

      {/* ===================== */}
      {/* BIG LOGO */}
      {/* ===================== */}
<motion.div
  className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
  initial={{ opacity: 0, scale: 0.7, y: 0 }}
  animate={{ opacity: 1, scale:  0.9, y: -30 }}
  transition={{ duration: 1.2 }}
>
        <img
          src="/silknetlogo.png"
          alt="logo"
          className="w-[55%] h-[55%] object-contain"
        />
      </motion.div>

      {/* ===================== */}
      {/* CONNECTIONS */}
      {/* ===================== */}
      <motion.svg
        className="absolute inset-0 w-full h-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        {connections.map(([a, b], i) => {
          const n1 = getNode(a);
          const n2 = getNode(b);

          return (
            <line
              key={i}
              x1={`${n1.x}%`}
              y1={`${n1.y}%`}
              x2={`${n2.x}%`}
              y2={`${n2.y}%`}
              stroke="#38bdf8"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.7"
              filter="drop-shadow(0 0 6px #38bdf8)"
            />
          );
        })}

        {packets.map((p) => {
          const n1 = getNode(p.from);
          const n2 = getNode(p.to);

          const x = n1.x + (n2.x - n1.x) * p.progress;
          const y = n1.y + (n2.y - n1.y) * p.progress;

          return (
            <circle
              key={p.id}
              cx={`${x}%`}
              cy={`${y}%`}
              r="3"
              fill={p.type === "TCP" ? "#38bdf8" : "#60a5fa"}
            />
          );
        })}
      </motion.svg>

      {/* ===================== */}
      {/* NODES */}
      {/* ===================== */}
      {nodes.map((node, i) => {
        const Icon = iconMap[node.type];

        return (
          <motion.div
            key={node.id}
            className="absolute flex items-center justify-center z-30"
            style={{
             top: `calc(${node.y}% - 4%)`,
              left: `calc(${node.x}% - 2%)`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <div
              className={`
                w-16 h-16 rounded-full
                bg-[#06121f]/80 backdrop-blur-md
                border border-[#38bdf8]
                flex flex-col items-center justify-center
                text-[#38bdf8]
                shadow-[0_0_12px_rgba(56,189,248,0.5)]
                transition-all duration-150
                ${
                  activeNode === node.id
                    ? "scale-110 border-white text-white shadow-[0_0_25px_#38bdf8]"
                    : ""
                }
              `}
            >
              <Icon size={18} />
              <span className="text-[8px] mt-[2px]">{node.id}</span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default NetworkMap;