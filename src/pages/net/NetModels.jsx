import React from "react";
import { motion } from "framer-motion";

const osiLayers = [
  { name: "APPLICATION", desc: "HTTP / FTP / SMTP / DNS" },
  { name: "PRESENTATION", desc: "Encryption / Compression / Encoding" },
  { name: "SESSION", desc: "Session Control / Auth" },
  { name: "TRANSPORT", desc: "TCP / UDP (Ports, Reliability)" },
  { name: "NETWORK", desc: "IP / Routing / ICMP" },
  { name: "DATA LINK", desc: "MAC / Ethernet / ARP" },
  { name: "PHYSICAL", desc: "Bits / Signals / Cable / WiFi" },
];

const tcpLayers = [
  { name: "APPLICATION", desc: "HTTP / FTP / SMTP / DNS", map: "7-6-5" },
  { name: "TRANSPORT", desc: "TCP / UDP", map: "4" },
  { name: "INTERNET", desc: "IP / ICMP / ARP", map: "3" },
  { name: "NETWORK ACCESS", desc: "Ethernet / WiFi", map: "2-1" },
];

export default function NetModels() {
  return (
    <div className="relative w-full flex justify-center gap-16 px-10">

      {/* ================= OSI ================= */}
      <div className="w-1/2 flex justify-center">
        <div className="relative w-[520px] p-8 bg-black/40 border border-sky-400/20 backdrop-blur-md rounded-md shadow-[0_0_60px_rgba(56,189,248,0.2)] text-sky-400">

          <div className="text-[16px] tracking-[0.35em] text-sky-300 mb-6">
            OSI MODEL STACK
          </div>

          <div className="absolute left-8 top-16 bottom-8 w-[2px] bg-sky-400/10" />

          <div className="flex flex-col gap-6 pl-10">
            {osiLayers.map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-[26px] top-4 w-3.5 h-3.5 bg-sky-400 rounded-full shadow-[0_0_16px_#38bdf8]" />

                <div className="px-5 py-4 rounded-sm bg-sky-400/5 hover:bg-sky-400/10 transition-all duration-300">
                  <div className="text-[14px] tracking-widest">
                    {layer.name}
                  </div>
                  <div className="text-[12px] opacity-60 mt-1">
                    {layer.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= TCP/IP ================= */}
      <div className="w-1/2 flex justify-center">
        <div className="relative w-[460px] p-8 bg-black/40 border border-purple-400/20 backdrop-blur-md rounded-md shadow-[0_0_60px_rgba(168,85,247,0.2)] text-purple-300">

          <div className="text-[16px] tracking-[0.35em] mb-6">
            TCP/IP STACK
          </div>

          <div className="absolute left-8 top-16 bottom-8 w-[2px] bg-purple-400/10" />

          <div className="flex flex-col gap-8 pl-10">
            {tcpLayers.map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative"
              >
                <div className="absolute -left-[26px] top-4 w-3.5 h-3.5 bg-purple-400 rounded-full shadow-[0_0_16px_#a855f7]" />

                <div className="px-5 py-4 rounded-sm bg-purple-400/5 hover:bg-purple-400/10 transition-all duration-300">
                  <div className="text-[14px] tracking-widest">
                    {layer.name}
                  </div>

                  <div className="text-[12px] opacity-60 mt-1">
                    {layer.desc}
                  </div>

                  <div className="text-[11px] mt-2 opacity-40">
                    OSI → {layer.map}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FLOW (NOW SAFE) ================= */}
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-center text-[12px] opacity-40 text-sky-300 tracking-widest whitespace-nowrap">
        PACKET FLOW → APPLICATION → TRANSPORT → NETWORK → DATA LINK → PHYSICAL → 🌐
      </div>

    </div>
  );
}