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

const Skills = ({onClose}) => {
  const [folder, setFolder] = useState(null);

  const renderSkills = (skills) => (
    <div className="space-y-4 mt-4">
      {skills.map((skill, i) => (
        <div key={i}>
          <div className="flex justify-between text-xs mb-1 text-gray-700">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          {/* BAR BACKGROUND */}
          <div className="w-full h-[7px] bg-gray-200 rounded-full overflow-hidden border border-gray-300">
            <div
              className="h-full bg-gray-900 transition-all duration-500"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full h-full font-mono bg-white text-gray-900 p-4">

      {/* MAIN FOLDERS */}
      {!folder && (
        <div className="flex gap-10 items-start justify-center mt-6">

          {/* WEB */}
          <div
            onClick={() => setFolder("web")}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
          >
            <div className="text-5xl">📁</div>
            <div className="text-xs mt-2 text-center text-gray-700">
              Web Development
            </div>
          </div>

          {/* NETWORK */}
          <div
            onClick={() => setFolder("network")}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
          >
            <div className="text-5xl">🌐</div>
            <div className="text-xs mt-2 text-center text-gray-700">
              Networking & IT
            </div>
          </div>

          {/* MICROSOFT */}
          <div
            onClick={() => setFolder("microsoft")}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
          >
            <div className="text-5xl">🪟</div>
            <div className="text-xs mt-2 text-center text-gray-700">
              Microsoft Environment
            </div>
          </div>

        </div>
      )}

      {/* BACK BUTTON */}
      {folder && (
        <button
          onClick={() => setFolder(null)}
          className="text-xs mb-3 text-gray-500 hover:text-gray-900 transition"
        >
          ← back
        </button>
      )}

      {/* WEB */}
      {folder === "web" && renderSkills(webDevSkills)}

      {/* NETWORK */}
      {folder === "network" && renderSkills(networkSkills)}

      {/* MICROSOFT */}
      {folder === "microsoft" && renderSkills(microsoftSkills)}

    </div>
  );
};

export default Skills;