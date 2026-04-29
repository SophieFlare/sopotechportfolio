import React from "react";

export default function OperationsOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 p-6 text-red-500 font-mono">

      <div className="flex justify-between mb-6">
        <div>OPERATIONS_PANEL</div>
        <button onClick={onClose}>[X]</button>
      </div>

      <div className="space-y-4 text-sm">

        <div className="border border-red-500/30 p-3">
          NETWORK STATUS: STABLE
        </div>

        <div className="border border-red-500/30 p-3">
          ACTIVE TASKS:
          <div>• Monitoring traffic</div>
          <div>• Resolving DNS</div>
          <div>• Packet routing</div>
        </div>

        <div className="border border-red-500/30 p-3">
          LATENCY: 24ms
        </div>

      </div>
    </div>
  );
}