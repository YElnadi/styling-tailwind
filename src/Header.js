import React from "react";

const Header = () => {
  return (
    <div className="bg-orange-300 flex justify-between px-4 py-2 text-orange-600">
      <div className="flex items-center">
        <div className="mx-4">About</div>
        <div className="mx-4">Store</div>
      </div>
      <div>
        <div className="flex items-center ">
          <div className="mx-4 ">Settings</div>
          <div className="mx-4">
            <i className="fa-regular fa-user text-3xl "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
