import React from "react";

export default function About() {
  return (
    <div className="w-full font-mono text-red-400 space-y-4">

      {/* HEADER */}
      <div className="border border-red-500/30 p-3 bg-red-500/5">
        <div className="text-red-400">ABOUT_SYSTEM</div>
        <div className="text-[11px] opacity-70">
          IT Support Mindset | Network Understanding | System Logic
        </div>
      </div>

      {/* OSI */}
      <Block title="OSI_MODEL">
        L7 APP → L6 PRES → L5 SESS → L4 TCP/UDP → L3 IP → L2 LINK → L1 PHY
      </Block>

      {/* TCP / UDP */}
      <Block title="TRANSPORT">
        TCP = RELIABLE | ACK | SEQUENCE CONTROL
        <br />
        UDP = FAST | NO ACK | LOW LATENCY STREAMING
      </Block>

      {/* NETWORK FLOW */}
      <Block title="PACKET_FLOW">
        CLIENT → ROUTER → ISP → BACKBONE → SERVER
      </Block>

      {/* SERVER UNDERSTANDING */}
      <Block title="SERVER_LOGIC">
        CLIENT REQUEST → DNS RESOLVE → ROUTE LOOKUP → RESPONSE RETURN
      </Block>

      {/* IT SKILL STATE */}
      <Block title="SYSTEM_STATUS">
        NETWORK UNDERSTANDING: ACTIVE
        <br />
        TROUBLESHOOTING: ENABLED
        <br />
        PACKET ANALYSIS: READY
      </Block>

    </div>
  );
}

/* REUSABLE BLOCK */
function Block({ title, children }) {
  return (
    <div className="border border-red-500/30 p-3 bg-red-500/5">
      <div className="text-red-400 mb-1">{title}</div>
      <div className="text-[11px] opacity-80 leading-relaxed">
        {children}
      </div>
    </div>
  );
}