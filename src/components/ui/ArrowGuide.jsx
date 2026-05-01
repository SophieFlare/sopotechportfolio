import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ArrowGuide({
  x = 0,
  y = 0,
  text = "View complete candidate profile inside File Explorer system...",
  direction = "down",
  visible = true,
}) {
  const [displayText, setDisplayText] = useState("");
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (!visible || closed) return;

    let i = 0;
    setDisplayText("");

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, [text, visible, closed]);

  if (!visible || closed) return null;

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
      className="fixed z-[999999] pointer-events-auto"
   style={{
  left: "2%",
  bottom: "14%",
}}
    >
      {/* ROW CONTAINER */}
      <div className="flex items-center gap-3">

        {/* ARROW */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        className={`text-sky-400 text-[12rem] ${rotateMap[direction]}`}
        >
          ↓
        </motion.div>

        {/* TEXT BOX */}
    <div className="
  flex items-center gap-4
  px-5 py-3
  bg-black/90
  text-sky-300 text-base font-mono
  border border-sky-400
  shadow-[0_0_20px_#38bdf8]
  rounded-md
  min-w-[320px]
">
          <span className="whitespace-nowrap">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setClosed(true)}
            className="
              text-sky-400 hover:text-white
              ml-2
              transition
              pointer-events-auto
            "
          >
            ✕
          </button>
        </div>

      </div>
    </motion.div>
  );
}