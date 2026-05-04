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

        // 🛑 safety guard (prevents undefined crash)
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
    if (type === "net") return "text-[#ff0033]";
    if (type === "ok") return "text-red-300";
    return "text-red-500";
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-black">

      {/* WINDOW */}
      <div className="w-[90%] max-w-[520px] h-[75%] border border-[#ff0033]/60 shadow-[0_0_35px_#ff0033] flex flex-col font-mono text-[#ff0033] bg-black overflow-hidden">

        {/* HEADER */}
        <div className="h-10 flex items-center justify-between px-4 border-b border-[#ff0033]/30 text-xs tracking-widest">
          <span>root@sopos-node:~/listener</span>
          <span className="animate-pulse">● LIVE CONNECTION</span>
        </div>

        {/* TERMINAL BODY */}
        <div className="flex-1 p-3 flex flex-col justify-end gap-1 overflow-hidden">

          {logs.filter(Boolean).map((l, i) => {
            if (!l) return null;

            const fade = 1 - (logs.length - i) * 0.06;

            return (
              <div
                key={i}
                style={{ opacity: fade < 0.4 ? 0.4 : fade }}
                className={`${color(l.type)} flex gap-3 text-sm transition-all duration-300`}
              >
                <span className="opacity-40 w-[80px]">
                  [{getTime()}]
                </span>

                <span className="text-[#ff0033]">node@kernel:~#</span>

                <span className="opacity-90">{l.msg}</span>
              </div>
            );
          })}

          {/* CURSOR */}
          <div className="text-[#ff0033] animate-pulse">█</div>
        </div>

        {/* FOOTER */}
        <div className="h-8 border-t border-[#ff0033]/30 px-3 flex items-center text-[10px] opacity-70">
          TLS ACTIVE • PACKET FILTER ON • INTRUSION MONITORING ENABLED
        </div>

      </div>
    </div>
  );
};

export default SoposTl;