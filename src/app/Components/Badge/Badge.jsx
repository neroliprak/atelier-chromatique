import React from "react";

function Badge({ couleur, children }) {
  return (
    <span
      className="px-4 py-2 text-[12px] inline-block text-center select-none h-fit rounded-[4px]"
      style={{
        backgroundColor: couleur,
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
