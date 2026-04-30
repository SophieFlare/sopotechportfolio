import React, { useState } from "react";

import Profile from "./folders/Profile";
import Skills from "./folders/Skills";
import Experience from "./folders/Experience";
import Certificate from "./folders/Certificate";

/* 📁 FILE SYSTEM */
const fileSystem = {
  name: "root",
  type: "folder",
  children: [
    { name: "Profile", type: "file", component: <Profile /> },
    { name: "Skills", type: "file", component: <Skills /> },
    { name: "Experience", type: "file", component: <Experience /> },
    { name: "Certificates", type: "file", component: <Certificate /> },
  ],
};

export default function FileExplorer() {
  const [history, setHistory] = useState([fileSystem]);
  const [current, setCurrent] = useState(fileSystem);
  const [activeFile, setActiveFile] = useState(null);

  /* OPEN */
  const openItem = (item) => {
    if (item.type === "folder") {
      setHistory((prev) => [...prev, item]);
      setCurrent(item);
    } else {
      setActiveFile(item);
    }
  };

  /* BACK */
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
    <div className="w-full h-full flex flex-col font-mono text-white">

      {/* HEADER */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-sky-400/30 text-sky-400">

        <div className="flex items-center gap-2">

          {/* BACK */}
          <button
            onClick={goBack}
            className="
              px-2 py-1 border border-sky-400/30
              hover:bg-sky-400/10
              active:scale-95
              transition
            "
          >
            ←
          </button>

          {/* CURRENT VIEW NAME (NO ROOT) */}
          <div className="text-xs opacity-70">
            {activeFile ? activeFile.name : current.name !== "root" ? current.name : ""}
          </div>

        </div>

        <span className="text-xs tracking-widest opacity-70">
          FILE EXPLORER
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-4 overflow-y-auto">

        {!activeFile ? (
          <div className="grid grid-cols-2 gap-4">

            {current.children.map((item, i) => (
              <div
                key={i}
                onClick={() => openItem(item)}
                className="
                  group
                  p-4 border border-sky-400/20
                  hover:bg-sky-400/10
                  hover:border-sky-400/50
                  cursor-pointer
                  transition-all duration-200
                  rounded
                "
              >
                <div className="text-2xl group-hover:scale-110 transition">
                  {item.type === "folder" ? "📁" : "📄"}
                </div>

                <div className="text-sm mt-2 text-white/80 group-hover:text-white">
                  {item.name}
                </div>
              </div>
            ))}

          </div>
        ) : (
          <div className="h-full flex flex-col">



            {/* FILE CONTENT */}
            <div className="
              flex-1 overflow-y-auto
              border border-sky-400/20
              rounded
              p-3
              bg-black/30
              backdrop-blur
            ">
              {activeFile.component}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}