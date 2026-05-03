import React from "react";
import { motion } from "framer-motion";

const resources = [
  "AI",  "MDN Web Docs",
  
  "FreeCodeCamp",
  "React Documentation",
  "Node.js Docs",
  "JavaScript (online-books)",
  "YouTube",
  "Roadmap.sh",
  "Git & GitHub Docs",
  "W3Schools (Basics reference)", "Wikipedia",
  

];

const Resources = () => {
  return (
    <div className="w-full h-full bg-black text-sky-400 font-mono p-4 overflow-y-auto">

      {/* HEADER */}
      <div className="mb-6 border-b border-sky-500/40 pb-2">
        <div className="text-lg tracking-widest">
          📁 LEARNING RESOURCES ARCHIVE
        </div>
        <div className="text-xs opacity-60">
          tools & references used during development journey
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

        {resources.map((item, i) => (
          <motion.div
            key={i}
            className="
              border border-sky-500/30
              bg-black/40
              p-3
              rounded-md
              text-sm
              hover:border-sky-400
              hover:shadow-[0_0_12px_rgba(56,189,248,0.2)]
              transition
            "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <span className="text-sky-300">▸</span> {item}
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Resources;