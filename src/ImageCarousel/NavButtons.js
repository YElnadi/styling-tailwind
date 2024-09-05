import React from "react";

const NavButtons = (props) => {
    const {icon} = props
    console.log('icon', icon)
  return (
    <button className="bg-orange-300 p-4 rounded-full w-16 h-16">
      <i className={`fa-solid ${icon}`}></i>
    </button>
  );
};

export default NavButtons;
