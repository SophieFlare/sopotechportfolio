import React from "react";
import Folders from "./Folders";

const KaliDesktop = ({ items, onOpen }) => {
  return (
    <div className="fixed inset-0 z-10">

      {items.map((item, i) => (
        <Folders
          key={i}
          item={item}
          onOpen={onOpen}
        />
      ))}

    </div>
  );
};

export default KaliDesktop;