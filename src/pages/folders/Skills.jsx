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
    <div className="space-y-4 mt-6">

      {skills.map((skill, i) => (
        <div key={i} className="group">

          {/* LABEL */}
          <div className="flex justify-between text-[11px] mb-1 text-sky-300/80 tracking-wide">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          {/* BAR BACKGROUND */}
          <div className="w-full h-[8px] bg-black/60 border border-sky-400/20 rounded-full overflow-hidden shadow-[0_0_10px_rgba(56,189,248,0.05)]">

            {/* FILL */}
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-cyan-300 transition-all duration-700 shadow-[0_0_12px_#38bdf8]"
              style={{ width: `${skill.level}%` }}
            />
          </div>

        </div>
      ))}

    </div>
  );

  return (
    <div className="w-full h-full font-mono bg-black text-sky-400 p-5">

      {/* HEADER */}
      <div className="text-xs tracking-[0.3em] text-sky-300 mb-6 border-b border-sky-400/20 pb-2">
        SKILL MATRIX // SYSTEM PROFILE
      </div>

      {/* MAIN FOLDERS */}
      {!folder && (
        <div className="flex gap-10 items-start justify-start mt-10">

          {[
            { id: "web", label: "Web Dev", icon: "📁" },
            { id: "network", label: "Networking", icon: "🌐" },
            { id: "microsoft", label: "Microsoft", icon: "🪟" },
          ].map((f) => (
            <div
              key={f.id}
              onClick={() => setFolder(f.id)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="text-5xl group-hover:scale-110 transition">
                {f.icon}
              </div>

              <div className="text-[10px] mt-2 text-sky-300/70 group-hover:text-sky-300">
                {f.label}
              </div>
            </div>
          ))}

        </div>
      )}

      {/* BACK BUTTON */}
      {folder && (
        <button
          onClick={() => setFolder(null)}
          className="text-xs mb-4 text-sky-400/60 hover:text-sky-300 transition"
        >
          ← BACK TO ROOT
        </button>
      )}

      {/* CONTENT */}
      {folder === "web" && renderSkills(webDevSkills)}
      {folder === "network" && renderSkills(networkSkills)}
      {folder === "microsoft" && renderSkills(microsoftSkills)}

    </div>
  );
};

export default Skills;