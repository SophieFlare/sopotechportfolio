import React from "react";
import { motion } from "framer-motion";

const osiLayers = [
  { name: "APPLICATION", desc: "HTTP / FTP / UI Layer" },
  { name: "PRESENTATION", desc: "Encryption / Compression" },
  { name: "SESSION", desc: "Session Control" },
  { name: "TRANSPORT", desc: "TCP / UDP Segmentation" },
  { name: "NETWORK", desc: "IP Routing / Packets" },
  { name: "DATA LINK", desc: "MAC / Frames" },
  { name: "PHYSICAL", desc: "Signals / Bits / Cable" },
];

export default function OSI() {
  return (
    <div className="absolute bottom-10 right-1 w-[420px] z-30 text-sky-400 font-mono">

      {/* container */}
      <div className="relative p-6 bg-black/40 border border-sky-400/20 backdrop-blur-md rounded-md shadow-[0_0_40px_rgba(56,189,248,0.18)]">

        {/* TITLE */}
        <div className="text-[14px] tracking-[0.3em] text-sky-300 mb-5">
          OSI MODEL STACK
        </div>

        {/* CENTRAL LINE */}
        <div className="absolute left-6 top-14 bottom-6 w-[2px] bg-sky-400/10" />

        {/* LAYERS */}
        <div className="flex flex-col gap-5 pl-8">

          {osiLayers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="relative"
            >

              {/* node dot */}
              <div className="absolute -left-[22px] top-3 w-3 h-3 bg-sky-400 rounded-full shadow-[0_0_14px_#38bdf8]" />

              {/* box */}
              <div className="px-4 py-3 rounded-sm bg-sky-400/5 hover:bg-sky-400/10 transition-all duration-300">

                <div className="text-[13px] tracking-widest">
                  {layer.name}
                </div>

                <div className="text-[11px] opacity-60">
                  {layer.desc}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}