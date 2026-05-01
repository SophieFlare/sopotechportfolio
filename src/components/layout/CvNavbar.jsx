import React, { useState } from "react";
import { FaUser, FaBriefcase, FaTools, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState(null);

  const menu = {
    about: {
      title: "ჩემს შესახებ",
      items: [
        "Network Systems Enthusiast",
        "Frontend + Cyber UI Developer",
        "Silknet Technical Support Path",
      ],
    },
    experience: {
      title: "გამოცდილება",
      items: [
        "Junior Support - 1 წელი",
        "Networking diagnostics",
        "Customer troubleshooting",
      ],
    },
    skills: {
      title: "უნარები",
      items: [
        "Windows / Linux basics",
        "Networking (ping, traceroute)",
        "React / UI development",
      ],
    },
    contact: {
      title: "კონტაქტი",
      items: [
        "Email: sopo.gurgenidze3@gmail.com",
        "Phone: +995 593 833 833",
        "Location: Tbilisi",
      ],
    },
  };

  const icons = {
    about: FaUser,
    experience: FaBriefcase,
    skills: FaTools,
    contact: FaPhone,
  };

  return (
    <>
      {/* 🔵 NAVBAR */}
      <div className="shadow-md border-b border-[#266698] bg-[#266698]">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
{/* LOGO (ICON + WORDMARK) */}
<div className="flex items-center gap-2">
  
  {/* ICON LOGO */}
  <img
    src="/assets/Silknet_Logo.png"
    alt="Silknet Icon"
    className="w-48 h-48 object-contain"
  />


</div>
          {/* PHONE */}
          <div className="flex items-center gap-2 text-white font-mono">
            <FaPhone className="text-white" />
            593833833
          </div>

        </div>
      </div>

      {/* ⚪ WHITE MENU BOX */}
      <div className="flex justify-center mt-[3px]">
        <div className="flex items-center justify-start font-geo border-2 border-[#39648a] w-[62%] h-20 bg-white rounded-md px-4">

          {/* MENU */}
          <div className="flex gap-6 textm text-gray-700 items-center h-full relative">

            {Object.entries(menu).map(([key, data]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActive(key)}
                onMouseLeave={() => setActive(null)}
              >
                {/* BUTTON WITH ICON */}
                <button className="flex items-center gap-2 hover:text-[#266698] transition">
                  {React.createElement(icons[key], { size: 14 })}
                  {data.title}
                </button>

                {/* DROPDOWN */}
                {active === key && (
                  <div className="
                    absolute top-8 left-1/2 -translate-x-1/2
                    w-56 bg-white border border-[#266698]
                    shadow-[0_0_20px_rgba(38,102,152,0.25)]
                    rounded-lg p-3 text-xs text-gray-700
                    animate-fadeIn
                  ">
                    {data.items.map((item, i) => (
                      <div
                        key={i}
                        className="py-1 border-b last:border-none border-gray-100"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.15s ease-out forwards;
          }
        `}
      </style>
    </>
  );
}