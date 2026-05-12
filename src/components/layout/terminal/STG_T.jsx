import React, { useEffect, useState } from "react";

const MAX_LINES = 12;

const SoposTl = () => {
  const [logs, setLogs] = useState([
    { type: "sys", msg: "SOPOS NODE BOOT SEQUENCE INITIATED" },
    { type: "sys", msg: "SYSTEM STATUS: STABLE" },
    { type: "net", msg: "LISTENING ON 0.0.0.0:443 (TLS ENABLED)" },
  ]);

  const getTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  useEffect(() => {
    const interval = setInterval(() => {
      const ip = `10.0.0.${Math.floor(Math.random() * 255)}`;

      const stream = [
        { type: "net", msg: `[${ip}] TCP HANDSHAKE INIT` },
        { type: "net", msg: `TLS 1.3 NEGOTIATION OK` },
        { type: "ok", msg: `CLIENT LINK ESTABLISHED` },
      ];

      let i = 0;

      const pushLine = () => {
        const line = stream[i];
        if (!line) return;

        setLogs((prev) => {
          const next = [...prev, line].filter(Boolean);
          return next.slice(-MAX_LINES);
        });

        i++;
        if (i < stream.length) {
          setTimeout(pushLine, 500);
        }
      };

      pushLine();
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const color = (type) => {
    if (type === "net") return "text-sky-300";
    if (type === "ok") return "text-gray-300";
    return "text-gray-100";
  };

  return (
    <div className="w-full h-full flex items-center justify-center">

      {/* WINDOW */}
      <div className="
        w-[90%] max-w-[520px] h-[85%]
        bg-black/60 backdrop-blur-md
        border border-sky-400/30
        shadow-[0_0_40px_rgba(56,189,248,0.15)]
        flex flex-col font-mono text-white
        overflow-hidden rounded-md
      ">

        {/* HEADER */}
        <div className="
          h-10 flex items-center justify-between px-4
          border-b border-sky-400/20
          text-xs tracking-widest text-gray-300
        ">
          <span className="text-gray-300">
            root@kali:~/sopos-node
          </span>

          <span className="text-sky-400 animate-pulse">
            ● LIVE CONNECTION
          </span>
        </div>

        {/* BODY */}
        <div className="flex-1 p-3 flex flex-col justify-end gap-1 overflow-hidden">

          {logs.filter(Boolean).map((l, i) => {
            const fade = 1 - (logs.length - i) * 0.06;

            return (
              <div
                key={i}
                style={{ opacity: fade < 0.35 ? 0.35 : fade }}
                className={`${color(l.type)} flex gap-3 text-sm transition-all`}
              >
                <span className="opacity-40 w-[85px] text-gray-400">
                  [{getTime()}]
                </span>

                <span className="text-gray-300">
                  node@kali:~#
                </span>

                <span className="opacity-90 text-gray-100">
                  {l.msg}
                </span>
              </div>
            );
          })}

          {/* CURSOR */}
          <div className="text-sky-400 animate-pulse mt-1">
            █
          </div>
        </div>

        {/* FOOTER */}
        <div className="
          h-8 border-t border-sky-400/20
          px-3 flex items-center text-[10px]
          text-gray-400 tracking-widest
        ">
          TLS 1.3 • PACKET FILTER ACTIVE • MONITOR MODE ENABLED
        </div>

      </div>
    </div>
  );
};

export default SoposTl;