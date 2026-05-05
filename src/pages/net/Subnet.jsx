import React, { useState } from "react";

const steps = [
  "IP",
  "CIDR",
  "Netmask",
  "Network",
  "Broadcast",
  "Hosts",
  "Binary",
  "Block Size"
];

export default function Subnet() {
  const [step, setStep] = useState(0);

  const data = {
    ip: "192.168.1.130",
    cidr: "/26",
    cidrMeaning: "26 bits for network, 6 bits for hosts",
    netmask: "255.255.255.192",
    network: "192.168.1.128",
    broadcast: "192.168.1.191",
    first: "192.168.1.129",
    last: "192.168.1.190",
    hosts: "62 usable hosts",
    binary: "11111111.11111111.11111111.11000000",
    block: "64 (increments of 64)"
  };

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="w-full h-screen flex bg-black text-white font-mono">

      {/* LEFT SIDE */}
      <div className="w-1/2 p-8 border-r border-sky-400/30 overflow-y-auto">

        <h2 className="text-2xl text-sky-400 mb-6 tracking-widest">
          // SUBNET TABLE
        </h2>

        <table className="w-full text-sm border border-sky-400/30">
          <thead>
            <tr className="border-b border-sky-400/30 text-sky-300">
              <th className="p-3">CIDR</th>
              <th className="p-3">Netmask</th>
              <th className="p-3">Hosts</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["/8", "255.0.0.0", "16M"],
              ["/16", "255.255.0.0", "65K"],
              ["/24", "255.255.255.0", "254"],
              ["/25", "255.255.255.128", "126"],
              ["/26", "255.255.255.192", "62"],
              ["/27", "255.255.255.224", "30"],
              ["/28", "255.255.255.240", "14"],
              ["/29", "255.255.255.248", "6"],
              ["/30", "255.255.255.252", "2"],
            ].map((row, i) => (
              <tr key={i} className="border-b border-sky-400/10 hover:bg-sky-400/5">
                <td className="p-3">{row[0]}</td>
                <td className="p-3">{row[1]}</td>
                <td className="p-3">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 p-8 flex flex-col justify-between">

        {/* CONTENT */}
        <div>
          <h2 className="text-2xl text-sky-400 mb-6 tracking-widest">
            // SUBNET BREAKDOWN
          </h2>

          <div className="text-lg leading-8">

            {step === 0 && (
              <>
                <p className="text-sky-300">IP Address</p>
                <p>{data.ip}</p>
              </>
            )}

            {step === 1 && (
              <>
                <p className="text-sky-300">CIDR</p>
                <p>{data.cidr}</p>
                <p className="text-sm opacity-70">{data.cidrMeaning}</p>
              </>
            )}

            {step === 2 && (
              <>
                <p className="text-sky-300">Netmask</p>
                <p>{data.netmask}</p>
              </>
            )}

            {step === 3 && (
              <>
                <p className="text-sky-300">Network Address</p>
                <p>{data.network}</p>
              </>
            )}

            {step === 4 && (
              <>
                <p className="text-sky-300">Broadcast</p>
                <p>{data.broadcast}</p>
              </>
            )}

            {step === 5 && (
              <>
                <p className="text-sky-300">Usable Range</p>
                <p>{data.first} → {data.last}</p>
                <p className="text-sm opacity-70">{data.hosts}</p>
              </>
            )}

            {step === 6 && (
              <>
                <p className="text-sky-300">Binary Netmask</p>
                <p className="break-all">{data.binary}</p>
              </>
            )}

            {step === 7 && (
              <>
                <p className="text-sky-300">Block Size</p>
                <p>{data.block}</p>
                <p className="text-sm opacity-70">
                  Subnet jumps: 0, 64, 128, 192
                </p>
              </>
            )}

          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex items-center justify-between mt-8">

          <button
            onClick={prev}
            className="px-5 py-2 border border-sky-400 text-sky-300 hover:bg-sky-400/10"
          >
            &lt;
          </button>

          <span className="text-sky-400 tracking-widest">
            {steps[step]}
          </span>

          <button
            onClick={next}
            className="px-5 py-2 border border-sky-400 text-sky-300 hover:bg-sky-400/10"
          >
            &gt;
          </button>

        </div>

      </div>
    </div>
  );
}