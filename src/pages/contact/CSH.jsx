import React from "react";
import { motion } from "framer-motion";

const CSH = () => {
  return (
    <div className="w-full h-full relative text-sky-400 font-mono overflow-hidden">

      {/* TITLE */}
      <div className="absolute top-4 left-4 text-xs text-sky-300 opacity-80 tracking-widest">
        CLIENT → SERVER CONNECTION FLOW
      </div>

      {/* CLIENT (LEFT) */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col items-center z-10">
        <img
          src="/assets/net/client.png"
          alt="client"
          className="w-64 h-64 object-contain drop-shadow-[0_0_20px_#38bdf8]"
        />
        <div className="text-[10px] mt-1 text-sky-300">
          192.168.1.2
        </div>
      </div>

      {/* SERVER (RIGHT) */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 flex flex-col items-center z-10">
        <img
          src="/assets/net/server.png"
          alt="server"
          className="w-64 h-64 object-contain drop-shadow-[0_0_20px_#38bdf8]"
        />
        <div className="text-[10px] mt-1 text-white opacity-70">
          10.0.0.1 : 22 (SSH)
        </div>
      </div>

      {/* PACKETS */}
      <div className="absolute top-1/2 left-0 w-full flex items-center justify-between px-36">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]"
            initial={{ opacity: 0.2, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default CSH;