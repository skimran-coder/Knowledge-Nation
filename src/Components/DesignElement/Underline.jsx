import React from "react";

const Underline = ({bgColor}) => {
  return (
    <div className="flex items-center py-2">
      <div className={`h-[1px] w-14 ${bgColor}`}></div>
      <div className={`h-1 w-8 ${bgColor}`}></div>
      <div className={`h-[1px] w-14 ${bgColor}`}></div>
    </div>
  );
};

export default Underline;
