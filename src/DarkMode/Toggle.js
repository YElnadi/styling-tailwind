import React from "react";
import clsx from 'clsx'

const Toggle = (props) => {
  const { onClick, label, enabled} = props;
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        className={clsx("w-16 p-2 rounded-full flex", enabled? "bg-green-500 justify-end" :"bg-neutral-200 justify-start")}
      >
        <div className="bg-white w-4 h-4 rounded-full"></div>
      </button>
      <div className="ml-2">{label}</div>
    </div>
  );
};

export default Toggle;
