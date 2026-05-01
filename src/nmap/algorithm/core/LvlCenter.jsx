import React from "react";

import Decrypt from "../modules/Decrypt";
import SSH from "../modules/SSH";
import NC from "../modules/NC";
import Puzzle from "../modules/Puzzle";
import Mail from "../modules/Mail";
import Boot from "../modules/Boot";
const LvlCenter = ({ activeNode, setActiveNode, onUnlock }) => {
  const close = () => setActiveNode(null);

  const order = ["boot", "decrypt", "ssh", "puzzle", "mail", "netcat"];

const handleNext = () => {
  const currentIndex = order.indexOf(activeNode);
  const next = order[currentIndex + 1];

  // ❗ safety check
  if (!activeNode) return;

  // 🔥 only unlock current node
  onUnlock?.(activeNode);

  // 🔥 ONLY netcat triggers full unlock (handled in parent anyway)
  setActiveNode(next || null);
};

  return (
    <>
      {activeNode === "boot" && (
        <Boot onClose={close} onNext={handleNext} />
      )}

      {activeNode === "decrypt" && (
        <Decrypt onClose={close} onNext={handleNext} />
      )}

      {activeNode === "ssh" && (
        <SSH onClose={close} onNext={handleNext} />
      )}

      {activeNode === "puzzle" && (
        <Puzzle onClose={close} onNext={handleNext} />
      )}

      {activeNode === "mail" && (
        <Mail onClose={close} onNext={handleNext} />
      )}

      {activeNode === "netcat" && (
        <NC onClose={close} onNext={handleNext} />
      )}
    </>
  );
};

export default LvlCenter;