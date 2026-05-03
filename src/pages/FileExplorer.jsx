import React, { useState } from "react";
import { FaUser, FaTools, FaBriefcase, FaCertificate, FaBook } from "react-icons/fa";

import Profile from "./folders/Profile";
import Skills from "./folders/Skills";
import Experience from "./folders/Experience";
import Certificate from "./folders/Certificate";
import Resources from "./folders/Resources";

const fileSystem = {
  name: "root",
  type: "folder",
  children: [
    { name: "პროფილი", type: "file", icon: <FaUser />, component: <Profile /> },
    { name: "უნარები", type: "file", icon: <FaTools />, component: <Skills /> },
    { name: "გამოცდილება", type: "file", icon: <FaBriefcase />, component: <Experience /> },
    { name: "სერთიფიკატი", type: "file", icon: <FaCertificate />, component: <Certificate /> },

    { 
      name: "რესურსები", 
      type: "file", 
      icon: <FaBook />, 
      component: <Resources /> 
    },
  ],
};

export default function FileExplorer() {
  const [history, setHistory] = useState([fileSystem]);
  const [current, setCurrent] = useState(fileSystem);
  const [activeFile, setActiveFile] = useState(null);

  const openItem = (item) => {
    if (item.type === "folder") {
      setHistory((prev) => [...prev, item]);
      setCurrent(item);
    } else {
      setActiveFile(item);
    }
  };

  const goBack = () => {
    if (activeFile) {
      setActiveFile(null);
      return;
    }

    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrent(newHistory[newHistory.length - 1]);
    }
  };

  return (
    <div className="w-full h-full flex flex-col font-mono bg-slate-200 text-black rounded-lg overflow-hidden shadow-xl border border-slate-300">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-2 bg-sky-800 text-white">

        <div className="flex items-center gap-3">
          <button
            onClick={goBack}
            className="px-2 py-1 rounded bg-black-700 hover:bg-slate-600 transition"
          >
            ←
          </button>

          <div className="text-xs text-slate-300">
            {activeFile
              ? activeFile.name
              : current.name !== "root"
              ? current.name
              : "Home"}
          </div>
        </div>

        <span className="text-xs tracking-widest opacity-70">
          FILE EXPLORER
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto bg-slate-100">

        {!activeFile ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {current.children.map((item, i) => (
              <div
                key={i}
                onClick={() => openItem(item)}
                className="group flex flex-col items-center cursor-pointer select-none"
              >

                <div className="
                  text-4xl
                  text-sky-700
                  drop-shadow-sm p-6
                  transition-all duration-200
                  group-hover:scale-110
                  group-hover:-translate-y-1
                  group-hover:text-blue-500
                  group-active:scale-95
                ">
                  {item.icon}
                </div>

                <div className="mt-2 text-sm text-center text-slate-700 group-hover:text-blue-600 transition">
                  {item.name}
                </div>

              </div>
            ))}

          </div>
        ) : (
          <div className="h-full flex flex-col">
            <div className="
              flex-1 overflow-y-auto
              border border-slate-300
              rounded-lg
            
              bg-white
              shadow-inner
            ">
              {activeFile.component}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}