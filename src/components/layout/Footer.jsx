import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";

export default function Footer({ onAction }) {

  const handleClick = (item) => {
    if (item.type === "action") {
      onAction && onAction(item);
    }
  };

  const navItems = navLinks.filter(item => item.type === "route");
  const systemItems = navLinks.filter(item => item.type === "action");

  return (
    <footer className="w-full mt-24 font-mono text-sky-400 bg-black border-t border-sky-400/20 shadow-[0_-10px_40px_rgba(56,189,248,0.25)]">

      <div className="px-[6%] py-[5%]">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6%]">

          {/* BRAND */}
          <div>
            <div className="text-[1.2vw] tracking-[0.4em] text-white mb-4">
              NETCAT SYSTEM
            </div>

            <p className="text-[1vw] opacity-60 leading-relaxed">
              ACTIVE NODE INTERFACE<br />
              STATUS: ONLINE<br />
              CONNECTION: SECURE
            </p>
          </div>

          {/* NAV */}
          <div className="flex flex-col gap-3 text-[1.1vw]">
            <div className="text-[1.2vw] tracking-[0.3em] text-white mb-2">
              NAVIGATION
            </div>

            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-sky-400 hover:text-white hover:scale-[1.03] transform-gpu transition-transform duration-200"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* SYSTEM */}
          <div className="flex flex-col gap-3 text-[1.1vw]">
            <div className="text-[1.2vw] tracking-[0.3em] text-white mb-2">
              SYSTEM
            </div>

            {systemItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item)}
                className="text-left text-sky-400 hover:text-white hover:scale-[1.03] transform-gpu transition-transform duration-200"
              >
                {item.title}
              </button>
            ))}
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex justify-between text-[0.9vw] text-white/40 border-t border-sky-400/10 pt-4">
          <div>© NETCAT 2026</div>
          <div className="text-sky-400">SIGNAL: STABLE</div>
        </div>

      </div>
    </footer>
  );
}