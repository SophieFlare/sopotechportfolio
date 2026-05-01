import { motion } from "framer-motion";

export default function ArrowGuide({
  x = 0,
  y = 0,
  text = "",
  direction = "down", // up | down | left | right
  visible = true,
}) {
  if (!visible) return null;

  const rotateMap = {
    up: "rotate-180",
    down: "rotate-0",
    left: "-rotate-90",
    right: "rotate-90",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="fixed z-[999999] pointer-events-none"
      style={{ left: x, top: y }}
    >
      {/* TEXT */}
      <div className="mb-2 px-3 py-1 bg-black text-sky-400 text-xs font-mono border border-sky-400 shadow-[0_0_10px_#38bdf8] rounded">
        {text}
      </div>

      {/* ARROW */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className={`text-sky-400 text-2xl ${rotateMap[direction]}`}
      >
        ↓
      </motion.div>
    </motion.div>
  );
}