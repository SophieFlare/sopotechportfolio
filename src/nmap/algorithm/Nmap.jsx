import React, { useState } from "react";
import NmapBtn from "./NmapBtn";
import NmapRm from "./NmapRm";

const Nmap = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NmapBtn onOpen={() => setOpen(true)} />

      {open && (
        <NmapRm onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default Nmap;