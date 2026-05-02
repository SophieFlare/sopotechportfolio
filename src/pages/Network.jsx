import React, { useState } from "react";
import NetMap from "./net/NetMap";
import WindowsBar from "../components/layout/WindowsBar";
import Router from "./net/Router";
import Devices from "./net/Devices";

export default function Network() {
  return (
    <div className="w-full min-h-screen bg-black relative overflow-x-hidden">
      
      {/* TASKBAR */}
      <WindowsBar />

      {/* CONTENT AREA */}
      <div className="relative w-full min-h-screen">
        <NetMap />
        <Devices />
      </div>

    </div>
  );
}