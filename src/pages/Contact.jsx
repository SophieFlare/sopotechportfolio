import React from "react";
import { motion } from "framer-motion";
import WindowsBar from "../components/layout/WindowsBar";
import CForm from "./contact/CForm";
import CSH from "./contact/CSH";
import StarsBgC from "../components/atoms/StarsBgC";

const text1 = "▓ მსურს კარიერული ზრდა და განვითარების შესაძლებლობა ▓";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section id="contact">
      <WindowsBar />

      <div className="relative w-full min-h-screen overflow-hidden bg-terminal">

        {/* BACKGROUND */}
        <StarsBgC />

        <div className="absolute bottom-[9%] inset-0 z-0">
          <CSH />
        </div>

        {/* FORM TOP */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-10 w-full flex justify-center">
          <CForm />
        </div>

        {/* TEXT BOTTOM CENTER */}
        <div className="absolute inset-0 z-20 flex items-end justify-center pb-14 text-center font-geo px-4">

          <motion.p
            className="text-sky-400 text-3xl font-bold tracking-[0.05em] uppercase leading-none"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {text1.split("").map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.p>

        </div>

        {/* 🖼️ PNG IMAGE BOTTOM RIGHT */}
        <div className="absolute bottom-3 right-0 z-30">
          <img
            src="/happy_sopo.png"
            alt="overlay"
            className="w-96  h-96 object-contain drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
          />
        </div>

      </div>
    </section>
  );
};

export default Contact;