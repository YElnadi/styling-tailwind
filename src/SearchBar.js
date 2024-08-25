import React from "react";

const SearchBar = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-orange-100 ">
      <div className=" text-8xl text-orange-500 mb-4">Google</div>
      <div className=" flex border w-[600px] p-4 rounded-full bg-orange-300 ">
        <i class="fa-solid fa-magnifying-glass text-xl text-orange-500 ml-1"></i>
        <input className="flex-1 mx-1 bg-orange-300 focus:outline-none" />
      </div>
      <div className="mt-4">
        <button className="m-2 border rounded-lg px-4 py-2 bg-purple-200 text-purple-600">
          Google Search
        </button>
        <button className="m-2 border rounded-lg px-4 py-2 bg-purple-200 text-purple-600">
          Image Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
