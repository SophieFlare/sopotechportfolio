import React, { useEffect, useState, useRef } from "react";

const MESSAGES = [
  "Inside SOPOS network.",
  "Unlock nodes.",
  "Find command + password.",
  "Access terminal.",
  "Enter the core."
];

const SPEED = 55;

const NmapMsgBoxx = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [locked, setLocked] = useState(true);

  const intervalRef = useRef(null);

  const message = MESSAGES[index];

  // typing effect ONLY after unlock
  useEffect(() => {
    if (locked) return;

    let i = 0;
    setText("");

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      i++;
      setText(message.slice(0, i));

      if (i >= message.length) clearInterval(intervalRef.current);
    }, SPEED);

    return () => clearInterval(intervalRef.current);
  }, [index, locked]);

  const next = () => {
    setIndex((p) => (p + 1 >= MESSAGES.length ? 0 : p + 1));
  };

  const prev = () => {
    setIndex((p) => (p - 1 < 0 ? MESSAGES.length - 1 : p - 1));
  };

  return (
    <div className="absolute inset-0 font-mono">




      {/* 💬 MESSAGE BOX */}
      <div className="absolute bottom-16 right-6 w-[320px] h-[200px] bg-black/90 border border-red-500 shadow-[0_0_30px_rgba(255,0,0,0.6)] rounded-md p-4 flex flex-col justify-between">

        {/* header */}
        <div className="text-[10px] text-red-400 border-b border-red-900 pb-1 flex justify-between">
          <span>User : NetCat(sopo)</span>
          <span className="animate-pulse text-red-600">● ACTIVE</span>
        </div>

        {/* message */}
        <div className="text-red-400 text-lg min-h-[120px]">
          {text}
          <span className="animate-pulse">▍</span>
        </div>

        {/* nav */}
        <div className="flex justify-between items-center text-xs text-red-500 border-t border-red-900 pt-2">

          <button onClick={prev} className="hover:text-white">
            ⬅ prev
          </button>

          <span className="opacity-60">
            {index + 1} / {MESSAGES.length}
          </span>

          <button onClick={next} className="hover:text-white">
            next ➡
          </button>

        </div>

        {/* 🔒 CLICK TO UNLOCK OVERLAY */}
        {locked && (
          <div
            onClick={() => setLocked(false)}
            className="
              absolute inset-0
              flex items-center justify-center
              bg-black/70 backdrop-blur-md
              text-red-400
              text-xl
              tracking-widest
              cursor-pointer
              animate-pulse
            "
          >
            CLICK ME
          </div>
        )}

      </div>
    </div>
  );
};

export default NmapMsgBoxx;