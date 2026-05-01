import React from "react";
import { motion } from "framer-motion";
import WindowsBar from "../components/layout/WindowsBar";
const nodes = [
  { id: "internet", label: "INTERNET / WAN", x: "50%", y: "10%" },
  { id: "router", label: "ROUTER", x: "50%", y: "45%" },
  { id: "lan1", label: "LAN 1 - PC", x: "20%", y: "80%" },
  { id: "lan2", label: "LAN 2 - LAPTOP", x: "50%", y: "85%" },
  { id: "lan3", label: "LAN 3 - SERVER", x: "80%", y: "80%" },
];

const lines = [
  ["internet", "router"],
  ["router", "lan1"],
  ["router", "lan2"],
  ["router", "lan3"],
];

export default function Router() {
  const getNode = (id) => nodes.find((n) => n.id === id);

  return (
    <>
    <WindowsBar/>
    <div className="w-full h-screen bg-black relative overflow-hidden flex items-center justify-center">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />

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
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
            />
          );
        })}
      </svg>

      {/* NODES */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute text-center text-sky-400 font-mono"
          style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
        >
          <div className="px-3 py-2 border border-sky-400 bg-black shadow-[0_0_15px_#38bdf8]">
            {node.label}
          </div>
        </motion.div>
      ))}

      {/* CENTER ROUTER IMAGE */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-40 h-40 border border-sky-400 bg-black flex items-center justify-center shadow-[0_0_40px_#38bdf8]">
          <img
            src="/assets/net/router.png"
            alt="router"
            className="w-80 h-40"
          />
        </div>
      </motion.div>

    </div>
</>

);
}
