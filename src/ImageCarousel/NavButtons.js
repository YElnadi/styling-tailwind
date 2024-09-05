import React from "react";

const NavButtons = (props) => {
  const { icon, onClick, show } = props;
  if (!show){
    return null
  }
  return (
    <button
      className="bg-orange-300 p-4 rounded-full w-16 h-16"
      onClick={onClick}
    >
      <i className={`fa-solid ${icon}`}></i>
    </button>
  );
};

export default NavButtons;
