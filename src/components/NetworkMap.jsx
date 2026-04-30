import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = nodes[Math.floor(Math.random() * nodes.length)];
      setActiveNode(rand.id);
    }, 700);

    return () => clearInterval(interval);
  }, []);

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
<div className="absolute inset-0 overflow-hidden bg-transparent pointer-events-none">

      {/* 🔷 CENTER HERO LOGO */}
  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
  <svg
    width="1820"
    height="1820"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_0_60px_rgba(56,189,248,0.6)]"
  >
    <path
      d="M298.074,473.47c-1.749,3.355-7.26,5.039-11.922,2.19-6.286-3.84-6.633-11.617-6.115-15.507a22.7,22.7,0,0,1,4.872.153c-2.224,7.326.086,11.476,2.2,12.764,1.862,1.132,5.72,1.766,7.815-1.5-.223.078-3.167,1.126-4.861-.7-1.494-1.612-.745-6.174,1.171-8.849,6.527,2.755,8.847,7.6,6.835,11.454m-8.4-20.2a17,17,0,0,0-2.35,2.592,35.076,35.076,0,0,0-5.727-.262c2.438-3.733,6.75-3.5,8.076-2.33m9.2-3.574a13.249,13.249,0,0,0-8.623,3.082c-4.016-5.329-14.586-5.023-16.559,4.677-6.507,3.489-3.651,10.625,1.7,12.657-2.479-1.5-3.9-4.357-2.387-6.942a3.552,3.552,0,0,1,.536-.689c.837,5.584,5.006,11.751,11.416,14.88,9.326,4.554,18.948.585,20.249-5.847,1.214-6-2.676-10.761-9.378-13.5,3.643-2.243,6.625-2.117,8.417-1.117,2.718,1.516,2.042,5.846,2.042,5.846a8.066,8.066,0,0,0,1.6-3.4c.815-4.533-2.437-9.576-9.013-9.657"
      fill="#38bdf8"
    />
  </svg>
</div>

      {/* CONNECTIONS + PACKETS */}
      <svg className="w-full h-full absolute z-20">
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
      </svg>

      {/* NODES */}
      {nodes.map((node) => {
        const Icon = iconMap[node.type];

        return (
          <div
            key={node.id}
            className="absolute flex items-center justify-center z-30"
            style={{
              top: `${node.y}%`,
              left: `${node.x}%`,
              transform: "translate(-50%, -50%)",
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
              <span className="text-[8px] mt-[2px] text-center">
                {node.id}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NetworkMap;