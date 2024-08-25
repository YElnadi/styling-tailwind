import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center h-64 items-end text-[100px] text-orange-500">
        Google
      </div>
      <div className="border border-slat-200 w-[500px] p-4 rounded-l-full rounded-r-full bg-orange-300 ">
        <i class="fa-solid fa-magnifying-glass text-xl text-orange-500"></i>
      </div>
      <div className="flex justify-between w-[400px] p-4 m-8 items-center">
        <div>
          <button className="border rounded-lg px-8 py-2 bg-purple-200 text-purple-600">Google Search</button>
        </div>
        <div>
          <button className="border rounded-lg px-8 py-2 bg-purple-200 text-purple-600"> Image Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
