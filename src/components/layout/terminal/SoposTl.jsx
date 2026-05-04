import React, { useEffect, useState } from "react";

const MAX_LINES = 12;

const SoposTl = () => {
  const [logs, setLogs] = useState([
    { type: "sys", msg: "SOPOS NODE BOOT SEQUENCE INITIATED" },
    { type: "sys", msg: "KERNEL STATUS: STABLE" },
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
          setTimeout(pushLine, 600);
        }
      };

      pushLine();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const color = (type) => {
    if (type === "net") return "text-blue-400";
    if (type === "ok") return "text-gray-300";
    return "text-white";
  };

  return (
    <div className="w-full h-full flex items-center justify-center ">

      {/* WINDOW */}
      <div className="w-[90%] max-w-[520px] h-[75%] 
        border border-blue-300/40 
        shadow-[0_0_30px_rgba(59,130,246,0.25)] 
        flex flex-col font-mono 
        text-white bg-gray-900/40 backdrop-blur-md 
        overflow-hidden rounded-md">

        {/* HEADER */}
        <div className="h-10 flex items-center justify-between px-4 
          border-b border-gray-500/30 text-xs tracking-widest text-gray-200">
          <span>root@sopos-node:~/listener</span>
          <span className="text-blue-300 animate-pulse">● LIVE CONNECTION</span>
        </div>

        {/* TERMINAL BODY */}
        <div className="flex-1 p-3 flex flex-col justify-end gap-1 overflow-hidden">

          {logs.filter(Boolean).map((l, i) => {
            const fade = 1 - (logs.length - i) * 0.06;

            return (
              <div
                key={i}
                style={{ opacity: fade < 0.4 ? 0.4 : fade }}
                className={`${color(l.type)} flex gap-3 text-sm transition-all`}
              >
                <span className="opacity-40 w-[80px] text-gray-400">
                  [{getTime()}]
                </span>

                <span className="text-gray-300">node@kernel:~#</span>

                <span className="opacity-90">{l.msg}</span>
              </div>
            );
          })}

          {/* CURSOR */}
          <div className="text-blue-300 animate-pulse">█</div>
        </div>

        {/* FOOTER */}
        <div className="h-8 border-t border-gray-500/30 px-3 flex items-center text-[10px] text-gray-300">
          TLS ACTIVE • PACKET FILTER ON • INTRUSION MONITORING ENABLED
        </div>

      </div>
    </div>
  );
};

export default SoposTl;