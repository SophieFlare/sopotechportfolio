import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlitchText from "./atoms/GlitchText";

const LoadingPage = ({ onFinish }) => {
  const fullText = "HELLO_WORLD";
  const paragraphText = "WELCOME TO SOPO'S NETWORK PORTAL";

  const [titleIndex, setTitleIndex] = useState(0);
  const [paraIndex, setParaIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (titleIndex < fullText.length) {
      const t = setTimeout(() => setTitleIndex((p) => p + 1), 140);
      return () => clearTimeout(t);
    }

    if (paraIndex < paragraphText.length) {
      const t = setTimeout(() => setParaIndex((p) => p + 1), 35);
      return () => clearTimeout(t);
    }

    if (paraIndex >= paragraphText.length) {
      const t = setTimeout(() => setShowButton(true), 800);
      return () => clearTimeout(t);
    }
  }, [titleIndex, paraIndex]);

  const typedTitle = fullText.slice(0, titleIndex);
  const typedPara = paragraphText.slice(0, paraIndex);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#06121f] overflow-hidden font-mono text-sky-400">

      {/* ================= GRID LINES ================= */}
      <div className="absolute inset-0 opacity-20">
        {/* vertical lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.15)_1px,transparent_1px)] bg-[size:80px_100%]" />
        {/* horizontal lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(56,189,248,0.12)_1px,transparent_1px)] bg-[size:100%_60px]" />
      </div>

      {/* ================= DIAGONAL SCAN BEAM ================= */}
      <motion.div
        className="absolute w-[200%] h-[2px] bg-sky-400/10 rotate-45 blur-sm"
        animate={{ y: ["-20%", "120%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* ================= GLOW ORBS ================= */}
      <motion.div
        className="absolute w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[140px]"
        animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* ================= GLITCH TITLE ================= */}
  <motion.h1
 className="text-[7rem] font-black tracking-widest drop-shadow-[0_0_35px_#38bdf8]" animate={{
    textShadow: [
      "0 0 10px #38bdf8",
      "0 0 25px #38bdf8",
      "0 0 10px #38bdf8",
    ],
  }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <GlitchText speed={200}>
  {typedTitle}
</GlitchText>
  <span className="ml-2 animate-pulse">█</span>
</motion.h1>

      {/* ================= PARAGRAPH ================= */}
      <p className="mt-6 text-center text-sky-200 text-lg md:text-xl max-w-md">
        {typedPara.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: i * 0.01, duration: 0.2 }}
          >
            {char}
          </motion.span>
        ))}
      </p>

      {/* ================= BUTTON ================= */}
   {/* ================= BUTTON ================= */}
<AnimatePresence>
  {showButton && (
    <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2">
     <motion.button
  onClick={onFinish}
  initial={{ opacity: 0, scale: 0.6 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0 }}
  whileHover={{
    scale: 1.05,
  }}
  whileTap={{ scale: 0.95 }}
className="
  relative px-10 py-5

  text-white uppercase tracking-[0.3em] text-base md:text-lg

  bg-white/5 backdrop-blur-md

  border border-sky-400/40

  shadow-[0_0_20px_rgba(56,189,248,0.25)]

  hover:shadow-[0_0_35px_rgba(56,189,248,0.6)]
  hover:border-sky-300/70

  transition-all duration-300

  overflow-hidden
  group
"
  
>
  {/* glass inner glow */}
  <span className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-white/5 to-sky-500/10 opacity-60" />

  {/* moving shine */}
  <span
    className="
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r from-transparent via-white/30 to-transparent
      group-hover:translate-x-full
      transition-transform duration-700
    "
  />

  {/* border glow pulse */}
  <span
    className="
      absolute inset-0 border border-sky-400/30
      shadow-[inset_0_0_12px_rgba(56,189,248,0.2)]
    "
  />

  {/* TEXT */}
  <span className="relative z-10">
    CONNECT:443
  </span>

  {/* corner accents */}
  <span className="absolute top-1 left-2 w-2 h-2 bg-sky-400/70 rotate-45" />
  <span className="absolute bottom-1 right-2 w-2 h-2 bg-sky-400/70 rotate-45" />
</motion.button>
    </motion.div>
  )}
</AnimatePresence>

      {/* animation */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;