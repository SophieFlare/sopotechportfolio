import React, { useState } from "react";

const Folders = ({ item, onOpen }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className="absolute flex flex-col items-center cursor-pointer group"
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
      }}
    >
      {/* ICON */}
      <div
        onClick={() => {
          if (hasChildren) {
            setOpen(!open);
          } else {
            onOpen(item.id);
          }
        }}
        className="text-4xl group-hover:scale-125 transition"
      >
        {item.icon}
      </div>

      {/* LABEL */}
      <div className="text-white text-xs mt-1 opacity-70 group-hover:opacity-100">
        {item.label}
      </div>

      {/* CHILDREN */}
      {open && hasChildren && (
        <div className="ml-6 mt-2 flex flex-col gap-2 border-l border-[#ff0033]/40 pl-3">
          {item.children.map((child) => (
            <Folders key={child.id} item={child} onOpen={onOpen} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folders;