import React, { useState } from "react";
import NetMap from "./net/NetMap";
import WindowsBar from "../components/layout/WindowsBar";
import Router from "./net/Router";
import Devices from "./net/Devices";
import NetCoreLab from "./net/NetCoreLab";
import NetModelss from "./net/NetModelss"
import Protocol from "./net/Protocol";

export default function Network() {
  return (
    <div className="w-full min-h-screen bg-black relative overflow-x-hidden">
      
      {/* TASKBAR */}
      <WindowsBar />

      {/* CONTENT AREA */}
      <div className="relative w-full min-h-screen">
        <NetMap />
        <Devices />
        <NetCoreLab/>
        <NetModelss />
        <Protocol/>
      </div>

    </div>
  );
}