import React, { useState } from "react";

import Profile from "./folders/Profile";
import Skills from "./folders/Skills";
import Experience from "./folders/Experience";
import Certificate from "./folders/Certificate";

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
    <div className="w-full h-full flex flex-col font-mono bg-sky-400 text-black border-2 border-black">

      {/* HEADER */}
      <div className="flex items-center justify-between px-3 py-2 border-b-2 border-black bg-white">

        <div className="flex items-center gap-2">

          <button
            onClick={goBack}
            className="
              px-2 py-1
              border border-black
              text-black
              hover:bg-black hover:text-white
              transition
            "
          >
            ←
          </button>

          <div className="text-xs text-sky-600">
            {activeFile
              ? activeFile.name
              : current.name !== "root"
              ? current.name
              : ""}
          </div>

        </div>

        <span className="text-xs tracking-widest text-sky-600">
          FILE EXPLORER
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-4 overflow-y-auto bg-white">

        {!activeFile ? (
          <div className="grid grid-cols-2 gap-4">

            {current.children.map((item, i) => (
              <div
                key={i}
                onClick={() => openItem(item)}
                className="
                  group
                  p-4 bg-white
                  border-2 border-black
                  hover:border-sky-500
                  hover:shadow-[0_0_10px_#38bdf8]
                  cursor-pointer
                  transition-all duration-200
                  rounded
                "
              >
                <div className="text-2xl text-sky-600 group-hover:scale-110 transition">
                  {item.type === "folder" ? "📁" : "📄"}
                </div>

                <div className="text-sm mt-2 text-black group-hover:text-sky-600">
                  {item.name}
                </div>
              </div>
            ))}

          </div>
        ) : (
          <div className="h-full flex flex-col">

            <div className="
              flex-1 overflow-y-auto
              border-2 border-black
              rounded
              p-3
              bg-white
              text-black
            ">
              {activeFile.component}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}