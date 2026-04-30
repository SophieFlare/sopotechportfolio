import React, { useState, useEffect } from "react";

function MessageBox({ sections }) {
  const keys = Object.keys(sections);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  const currentKey = keys[index];
  const currentText = sections[currentKey];

  useEffect(() => {
    setText("");

    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + currentText[i]);
      i++;

      if (i >= currentText.length) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [index]);

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
      "მე ვარ სოფო — ტექნოლოგიებზე შეყვარებული ადამიანი.\nმიყვარს სისტემების დაშლა, პრობლემების დიაგნოსტიკა და ქსელების კვლევა.",
    skills:
      "• Windows\n• Linux (basic)\n• Networking\n• CLI / Terminal\n• Troubleshooting\n• Hardware ცოდნა",
    experience:
      "Junior Support — 1 წელი\nმომხმარებლების დახმარება და ქსელური პრობლემების დიაგნოსტიკა.",
    contact:
      "Email: sopo@email.com\nTel: +995 555 12 34 56",
  };

  return (
 <div className="fixed top-0 right-0 h-screen w-[320px] z-[9999] flex flex-col bg-black border border-sky-400">
      <div className="flex-1 flex flex-col gap-4 p-4 overflow-hidden">

        <MessageBox sections={sections} />

        {/* USER CARD */}
        <div className="flex flex-col items-center gap-2 bg-black rounded-xl border border-sky-400/40 p-3 flex-1 min-h-0">

          <div className="text-white font-semibold tracking-wide">
            SOPO TECHIE GIRL
          </div>

          <div className="text-[11px] text-sky-400">
            ● ONLINE
          </div>

          <div className="w-full h-full overflow-hidden rounded-lg border border-sky-400/40">
            <img
              src="/cv/sopo_pixel.png"
              alt="Sopo"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  );
}