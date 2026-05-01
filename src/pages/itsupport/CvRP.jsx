import React, { useState, useEffect } from "react";

function MessageBox({ sections }) {
  const keys = Object.keys(sections);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  const currentKey = keys[index];
  const currentText = sections[currentKey];

 useEffect(() => {
  const currentText = sections[currentKey];

  // ✅ HARD SAFETY CHECK (this is what you’re missing)
  if (typeof currentText !== "string") return;

  setText("");

  let i = 0;

  const interval = setInterval(() => {
    if (i >= currentText.length) {
      clearInterval(interval);
      return;
    }

    const char = currentText.charAt(i); // safer than [i]

    setText((prev) => prev + char);
    i++;
  }, 20);

  return () => clearInterval(interval);
}, [index, sections]);

  return (
    <div className="bg-black rounded-xl border border-sky-400/40 p-3 flex flex-col h-[250px] font-mono text-white">

      {/* HEADER */}
      <div className="text-[10px] text-sky-400 mb-2">
        SYSTEM // {currentKey.toUpperCase()}
      </div>

      {/* TEXT */}
      <div className="flex-1 overflow-hidden whitespace-pre-line text-white/90">
        {"> " + text}
        <span className="animate-pulse text-sky-400">▍</span>
      </div>

      {/* NAV */}
      <div className="flex justify-between text-sky-400 text-xs mt-2">

        <button
          onClick={() => setIndex((p) => Math.max(0, p - 1))}
          disabled={index === 0}
          className="hover:text-white disabled:opacity-30"
        >
          {"< PREV"}
        </button>

        <span className="text-white/40">
          {index + 1}/{keys.length}
        </span>

        <button
          onClick={() => setIndex((p) => Math.min(keys.length - 1, p + 1))}
          disabled={index === keys.length - 1}
          className="hover:text-white disabled:opacity-30"
        >
          {"NEXT >"}
        </button>

      </div>
    </div>
  );
}

export default function CvRP() {
  const sections = {
    about:
      " სალამი ★ მე ვარ სოფო  \n > ტექნოლოგიებზე შეყვარებული ადამიანი.\n > მიყვარს სისტემების დაშლა, პრობლემების დიაგნოსტიკა და ქსელების კვლევა ⚡︎",
    skills:
      "• Windows OS (User & Basic Admin)\n• Linux (Basic CLI & Navigation)\n• Networking Basics (TCP/IP, OSI)\n• Command Line / Terminal\n• System Troubleshooting\n• Hardware Fundamentals",
    experience:
      "მაქვს გამოცდილება IT Support-ის პოზიციაზე კიბერ-სპორტ არენაში, სადაც ვუზრუნველყოფდი:  კომპიუტერის Hard|Soft-ware სისტემების & ინტერნეტის სტაბილურობას",
    contact:
      "გაეცანით CV-ს\n > მეტი დეტალური ინფორმაციის სანახავად გახსენით File_Explorer",
  };

  return (
 <div className="fixed top-0 right-0 h-screen w-[320px] z-[9999] flex flex-col bg-black border border-sky-400">
      <div className="flex-1 flex flex-col gap-4 p-4 overflow-hidden">

        <MessageBox sections={sections} />

      {/* USER CARD */}
<div className="flex flex-col items-center gap-2 bg-black rounded-xl border border-sky-400/40 p-3 flex-1 min-h-0">

  {/* HEADER ROW */}
  <div className="w-full flex items-center justify-between text-xs">

    <div className="text-white font-semibold tracking-wide">
     <span className="text-skye-400">⚡︎</span>  SOPO TECHIE GIRL 
    </div>

    <div className="text-sky-400 flex items-center gap-1">
      <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
      ONLINE
    </div>

  </div>

  {/* IMAGE */}
  <div className="w-full h-full overflow-hidden rounded-lg border border-sky-400/40 mt-2">
    <img
      src="/cv/ss.jpg"
      alt="Sopo"
      className="w-full h-full object-cover"
    />
  </div>

</div>
   

      </div>
    </div>
  );
}