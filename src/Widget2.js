import { useState } from "react";
const Widget2 = () => {
  const [bg, setBg] = useState(false);
  console.log("in widget2");
  console.log("bg", bg);
  return (
    <div className="border  m-4 p-8 bg-orange-200 rounded-lg flex flex-col items-center">
      <button
        className={`border rounded-full p-2 text-white ${
          bg ? "bg-red-500" : "bg-violet-400"
        }`}
        onClick={() => setBg(!bg)}
      >
        Click me
      </button>
    </div>
  );
};

export default Widget2;