import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
export default function Footer({ onAction }) {

  const navigate = useNavigate();

  const navItems = [
    { id: 1, title: "// HOME", path: "/" },
    { id: 2, title: "// CV", path: "/pages/itsupport" },
   { id: 5, title: "// NETWORK", path: "/pages/network" },
    
    { id: 3, title: "// DESKTOP", path: "/pages/desktop" },
    { id: 4, title: "// CONTACT", path: "/pages/contact" },
  ];

  const systemItems = [];

  return (
    <footer className="relative w-full  font-mono text-sky-400 bg-black border-t border-sky-400/20 shadow-[0_-10px_40px_rgba(56,189,248,0.25)]">

      <div className="px-[6%] py-[5%]">

        {/* MAIN GRID (UNCHANGED) */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-[3%]">

          {/* BRAND */}
          <div>
            <div className="text-[1.2vw] tracking-[0.4em] text-white mb-4">
              STG SYSTEM
            </div>

            <p className="text-[1vw] opacity-60 leading-relaxed">
              ACTIVE NODE INTERFACE<br />
              STATUS: ONLINE<br />
              CONNECTION: SECURE
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3 text-[1.1vw]">
            <div className="text-[1.2vw] tracking-[0.3em] text-white mb-2">
              NAVIGATION
            </div>

        {navItems.map((item) => {
  const isLocked = item.title.includes("DESKTOP") || item.title.includes("CONTACT");

  return (
    <div key={item.id} className="relative group">

      {/* LINK */}
      {isLocked ? (
        <div
          className="
            text-sky-400/40 cursor-not-allowed
            hover:text-white transition
          "
          onMouseEnter={() => console.log("LOCKED")}
        >
          {item.title}
        </div>
      ) : (
        <Link
          to={item.path}
          className="
            text-sky-400
            hover:text-white
            hover:scale-[1.03]
            transform-gpu transition-transform duration-200
          "
        >
          {item.title}
        </Link>
      )}

      {/* TOOLTIP */}
      {isLocked && (
        <div className="
          absolute left-0 -top-6
          text-[10px] text-white
          opacity-0 group-hover:opacity-100
          transition
          tracking-widest
        ">
          LOCKED
        </div>
      )}

    </div>
  );
})}
          </div>

          {/* SYSTEM (moved 5% LEFT) */}
          <div className="flex flex-col gap-3 text-[1.1vw] relative -left-[5%]">

  <div className="text-[1.2vw] tracking-[0.3em] text-white mb-2">
    SYSTEM
  </div>

  <div className="text-white/30 text-sm">
    NO SYSTEM MODULES
  </div>

</div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex justify-between text-[0.9vw] text-white/40 border-t border-sky-400/10 pt-4">
          <div>© SOPOTECHIEGIRL 2026</div>
          <div className="text-sky-400">SIGNAL: STABLE</div>
        </div>

      </div>

      {/* ================= CV BUTTON ================= */}
<button
  onClick={() => navigate("/pages/itsupport")}
  className="
    absolute right-10 top-[35%] -translate-y-1/2

    w-[400px] h-[240px]

    text-white

    bg-sky-500/10 backdrop-blur-sm

    border border-sky-400/40

    shadow-[0_0_25px_rgba(56,189,248,0.35)]

    hover:shadow-[0_0_70px_rgba(56,189,248,0.8)]
    hover:border-sky-300/80
    hover:scale-105

    transition-all duration-500 ease-out

    flex items-center justify-center gap-4

    tracking-[0.35em]

    overflow-hidden
    group
  "
>
  {/* glass inner glow */}
  <span className="
    absolute inset-0
    bg-gradient-to-br from-sky-500/10 via-white/5 to-sky-500/10
    opacity-60
  " />

  {/* moving shine */}
  <span className="
    absolute inset-0
    -translate-x-full
    bg-gradient-to-r from-transparent via-white/25 to-transparent
    group-hover:translate-x-full
    transition-transform duration-700
  " />

  {/* border glow layer */}
  <span className="
    absolute inset-0
    border border-sky-400/20
    shadow-[inset_0_0_20px_rgba(56,189,248,0.15)]
  " />

  {/* CV TEXT */}
  <span className="text-[72px] font-black leading-none relative z-10">
    CV
  </span>

  {/* arrow */}
  <FaAngleDoubleRight
    className="
      text-sky-300
      text-[42px]
      relative z-10
      transition-transform duration-500
      group-hover:translate-x-2
    "
  />

  {/* corner accents */}
  <span className="absolute top-3 left-3 w-2 h-2 bg-sky-400/70 rotate-45" />
  <span className="absolute bottom-3 right-3 w-2 h-2 bg-sky-400/70 rotate-45" />

</button>



    </footer>
  );
}