import React, { useState } from "react";
import { motion } from "framer-motion";
import devices from "./deviceData";

const Devices = () => {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState("idle");

  const next = () => {
    setMode("idle");
    setIndex((p) => (p + 1) % devices.length);
  };

  const prev = () => {
    setMode("idle");
    setIndex((p) => (p - 1 + devices.length) % devices.length);
  };

  const scanDevice = () => {
    setMode("scanning");
    setTimeout(() => setMode("analyzed"), 1200);
  };

  const device = devices[index];


return (
  <div className="w-full h-full bg-black text-sky-400 font-mono flex">
      {/* ================= LEFT PANEL ================= */}
      <div className="w-full h-full border-r border-sky-400/20 p-8 flex flex-col justify-between">

        {/* HEADER */}
        <div>
          <div className="text-xs tracking-[0.3em] opacity-40">
            NETWORK DEVICE TERMINAL
          </div>

          <div className="mt-6 text-2xl tracking-widest">
            {device.name}
          </div>

          <div className="text-sm opacity-60 mt-1">
            {device.label}
          </div>

          {/* IMAGE */}
          <motion.div
            key={index}
            className="mt-6 w-full h-[200px] flex items-center justify-center border border-sky-400/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src={device.img}
              alt={device.name}
              className="max-h-full object-contain"
            />

            {mode === "scanning" && (
              <motion.div
                className="absolute w-full h-[2px] bg-sky-400"
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* DESCRIPTION */}
          <div className="mt-6 text-sm opacity-70">
            {device.desc}
          </div>
        </div>

        {/* STATUS + LEARNING */}
        <div className="text-sm">

          <div className="mb-3">
            STATUS:{" "}
            <span className="opacity-80">
              {mode === "idle" && "IDLE"}
              {mode === "scanning" && "SCANNING..."}
              {mode === "analyzed" && "ANALYZED"}
            </span>
          </div>

          {mode === "analyzed" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              <div className="text-xs opacity-80">
                {device.learn}
              </div>

              <div className="text-xs opacity-40">
                {device.extra}
              </div>
            </motion.div>
          )}
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col gap-4 pb-10">

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="flex-1 py-2 border border-sky-400/40 hover:bg-sky-400/10"
            >
              ◀ PREV
            </button>

            <button
              onClick={next}
              className="flex-1 py-2 border border-sky-400/40 hover:bg-sky-400/10"
            >
              NEXT ▶
            </button>
          </div>

          <button
            onClick={scanDevice}
            className="py-3 border border-sky-400 shadow-[0_0_20px_#38bdf8] hover:bg-sky-400/10 tracking-widest"
          >
            INITIATE SCAN
          </button>

        </div>
      </div>

      {/* RIGHT SIDE (EMPTY FOR NOW) */}
      <div className="w-[40%]" />

    </div>
  );
};

export default Devices;