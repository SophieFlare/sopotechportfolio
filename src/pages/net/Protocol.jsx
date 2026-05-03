import React, { useState } from "react";
import { motion } from "framer-motion";
import protocols from "./protocols";


const layers = ["All", "Application", "Transport", "Network", "Security"];

const ProtocolExplorer = () => {
  const [activeLayer, setActiveLayer] = useState("All");
  const [selected, setSelected] = useState(protocols[0]);

  const filtered =
    activeLayer === "All"
      ? protocols
      : protocols.filter((p) => p.layer === activeLayer);

  return (
   <section className="w-full min-h-screen flex gap-10 px-16 py-32 bg-black text-white relative z-10">
      {/* LEFT SIDE */}
      {/* LEFT SIDE */}
<div className="w-1/2 flex flex-col gap-4">

  {/* LAYER BUTTONS */}
  <div className="flex gap-3 flex-wrap">
    {layers.map((layer) => (
      <button
        key={layer}
        onClick={() => setActiveLayer(layer)}
        className={`px-4 py-2 border rounded-md text-sm transition ${
          activeLayer === layer
            ? "bg-sky-400/20 border-sky-400 text-sky-300"
            : "border-white/20 hover:border-sky-400"
        }`}
      >
        {layer}
      </button>
    ))}
  </div>

  {/* TABLE WRAPPER */}
  <div className="flex flex-col border border-white/10 rounded-md">

    {/* HEADER (sticky) */}
    <div className="grid grid-cols-3 text-xs text-white/50 border-b border-white/10 p-3 sticky top-0 bg-black z-10">
      <div>PROTOCOL</div>
      <div>FULL NAME</div>
      <div>PORTS</div>
    </div>

    {/* SCROLLABLE TABLE */}
    <div className="h-[420px] overflow-y-auto space-y-2 p-2">

      {filtered.map((p) => (
        <div
          key={p.name}
          onClick={() => setSelected(p)}
          className={`grid grid-cols-3 p-3 rounded-md cursor-pointer transition text-sm ${
            selected.name === p.name
              ? "bg-sky-400/10 border border-sky-400/40"
              : "hover:bg-white/5 border border-transparent"
          }`}
        >
          <div className="tracking-widest">{p.name}</div>
          <div className="opacity-70">{p.full}</div>
          <div className="text-sky-400">{p.ports}</div>
        </div>
      ))}

    </div>
  </div>
</div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex flex-col gap-6">

        {/* INFO BOX */}
        <motion.div
          key={selected.name}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 border border-sky-400/20 rounded-md bg-black/40"
        >
          <h1 className="text-2xl tracking-[0.3em] text-sky-300">
            {selected.name}
          </h1>

          <p className="mt-1 text-sm opacity-60">
            {selected.full}
          </p>

          <p className="mt-4 text-sm opacity-80">
            {selected.desc}
          </p>

          <div className="mt-4 text-sky-400 text-sm">
            PORTS: {selected.ports}
          </div>
        </motion.div>

        {/* IMAGE */}
        <div className="border border-purple-400/20 rounded-md overflow-hidden bg-black/40">
          <img
            src={selected.img}
            alt={selected.name}
            className="w-full h-[260px] object-cover opacity-80"
          />
        </div>

      </div>

    </section>
  );
};

export default ProtocolExplorer;