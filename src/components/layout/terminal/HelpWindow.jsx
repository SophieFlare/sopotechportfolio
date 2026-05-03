import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const HelpWindow = ({ onClose }) => {

  
  const [pos, setPos] = useState({ x: 320, y: 140 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const startDrag = (e) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  };

  const onMove = (e) => {
    if (!dragging) return;
    setPos({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const stopDrag = () => setDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stopDrag);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stopDrag);
    };
  });

  return (
    <motion.div
      className="fixed z-[99999]"
      style={{ left: pos.x, top: pos.y }}
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
    >
      {/* WINDOW */}
      <div className="w-64 bg-black/85 backdrop-blur-md border border-sky-400/40 text-sky-300 font-mono shadow-[0_0_25px_rgba(56,189,248,0.2)]">

        {/* HEADER */}
        <div
          onMouseDown={startDrag}
          className="flex justify-between items-center px-3 py-2 border-b border-sky-400/20 cursor-grab"
        >
          <span className="text-xs tracking-widest">QUICK HELP</span>
          <button onClick={onClose} className="text-xs hover:text-white">
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-3 text-xs space-y-2">

          <p className="text-sky-200/70">
            CORE COMMANDS
          </p>

          <div className="space-y-1">
            <div>• ipconfig</div>
            <div>• whoami</div>
            <div>• get-process</div>
            <div>• netstat</div>
            <div>• tracert google.com</div>
          </div>

          <p className="mt-3 text-sky-400/60">
            type <span className="text-sky-200">help</span> for full system reference
          </p>

        </div>
      </div>
    </motion.div>
  );
};

export default HelpWindow;