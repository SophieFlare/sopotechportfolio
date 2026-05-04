import React from "react";
import { motion } from "framer-motion";
import WindowsBar from "../components/layout/WindowsBar";
import CForm from "./contact/CForm";
import CSH from "./contact/CSH";
import StarsBgC from "../components/atoms/StarsBgC";

const text1 = "  ▓ მაქვს კარიერული ზრდის სურვილი";
const text2 = "და განვითარების შესაძლებლობა ▓";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 5 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <>
      <section id="contact">
        <WindowsBar />

        {/* FULL SCREEN WRAPPER */}
        <div className="relative w-full min-h-screen pt-24 overflow-hidden flex items-center justify-center bg-terminal">

          {/* BACKGROUND LAYERS */}
          <StarsBgC />

          <div className="absolute inset-0 z-0">
            <CSH />
          </div>

          {/* ANIMATED TITLE */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center font-geo">

            {/* LINE 1 */}
            <motion.p
              className="text-sky-400 text-4xl font-bold tracking-[0.05em] uppercase leading-none"
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

            {/* LINE 2 */}
            <motion.p
              className="text-sky-400] text-4xl font-bold tracking-[0.05em] uppercase mt-2 leading-none"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {text2.split("").map((char, i) => (
                <motion.span key={i} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.p>

          </div>

          {/* FORM */}
          <div className="relative z-10">
            <CForm />
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;