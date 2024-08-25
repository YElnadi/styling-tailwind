import React from "react";

const Header = () => {
  return (
    <div className="bg-orange-300 flex justify-between px-4 py-2">
      <div className="flex ">
        <div className="mx-4">About</div>
        <div className="mx-4">Store</div>
      </div>
      <div>right</div>
    </div>
  );
};

export default Header;
