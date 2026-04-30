import React, { useState } from "react";

const webDevSkills = [
  { name: "JavaScript", level: 70 },
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 60 },
   { name: "NextJs", level: 80 },
   
   { name: "ThreeJs", level: 70 },
  { name: "Tailwind CSS", level: 92 },
  { name: "UI Systems Design", level: 95 },
];

const networkSkills = [
  { name: "TCP/IP & DNS", level: 65 },
  { name: "Windows OS Support", level: 80 },
  { name: "Linux Basics", level: 60 },
  { name: "Command Line Tools", level: 75 },
  { name: "Network Troubleshooting", level: 85 },
  { name: "System Administration", level: 70 },
  { name: "Microsoft Office Suite", level: 88 },
  { name: "Remote Support Tools", level: 55 },
];
const microsoftSkills = [
  { name: "Windows Administration", level: 85 },
  { name: "Microsoft Excel", level: 85 },
  { name: "Microsoft Word", level: 90 },
  { name: "Microsoft Outlook", level: 80 },
  { name: "System Configuration", level: 35 },
  { name: "User & Access Management", level: 40 },
  { name: "Remote Desktop (RDP)", level: 75 },
  { name: "Software Installation", level: 85 },
];

const Skills = () => {
  const [folder, setFolder] = useState(null);

  const renderSkills = (skills) => (
    <div className="space-y-4 mt-4">
      {skills.map((skill, i) => (
        <div key={i}>
          <div className="flex justify-between text-xs mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="w-full h-[6px] bg-black border border-[#ff0033]/40">
            <div
              className="h-full bg-[#ff0033] shadow-[0_0_10px_#ff0033]"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full h-full font-mono text-[#ff0033] p-2">

      {/* HEADER */}
      <div className="mb-4 border-b border-[#ff0033]/30 pb-2">
        <h1 className="text-white text-sm tracking-widest">
          SKILLS_DIRECTORY
        </h1>
        <p className="text-xs text-[#ff0033]/60">
          open module...
        </p>
      </div>

      {/* MAIN VIEW (2 REAL FOLDERS) */}
  {/* MAIN VIEW (3 REAL FOLDERS) */}
{!folder && (
  <div className="flex gap-10 items-start">

    {/* WEB */}
    <div
      onClick={() => setFolder("web")}
      className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
    >
      <div className="text-5xl">📁</div>
      <div className="text-xs mt-2 text-center text-white/80">
        Web Development
      </div>
    </div>

    {/* NETWORK */}
    <div
      onClick={() => setFolder("network")}
      className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
    >
      <div className="text-5xl">🌐</div>
      <div className="text-xs mt-2 text-center text-white/80">
        Networking & IT
      </div>
    </div>

    {/* MICROSOFT */}
    <div
      onClick={() => setFolder("microsoft")}
      className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
    >
      <div className="text-5xl">🪟</div>
      <div className="text-xs mt-2 text-center text-white/80">
        Microsoft Environment
      </div>
    </div>

  </div>
)}

      {/* WEB SKILLS */}
      {folder === "web" && (
        <>
          <button
            onClick={() => setFolder(null)}
            className="text-xs mb-3 text-white/50 hover:text-white"
          >
            ← back
          </button>

          {renderSkills(webDevSkills)}
        </>
      )}

      {/* NETWORK SKILLS */}
      {folder === "network" && (
        <>
          <button
            onClick={() => setFolder(null)}
            className="text-xs mb-3 text-white/50 hover:text-white"
          >
            ← back
          </button>

          {renderSkills(networkSkills)}
        </>
      )}
      {/* NETWORK SKILLS */}
      {folder === "microsoft" && (
        <>
          <button
            onClick={() => setFolder(null)}
            className="text-xs mb-3 text-white/50 hover:text-white"
          >
            ← back
          </button>

          {renderSkills(microsoftSkills)}
        </>
      )}
    </div>
  );
};

export default Skills;