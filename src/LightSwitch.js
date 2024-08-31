import { useState } from "react";

const LightSwitch = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  return (
    <div
      className={`flex flex-col  justify-center items-center h-screen ${
        isLightOn ? "bg-yellow-500" : "bg-black"
      }`}
      
    >
        <button onClick={() => setIsLightOn(!isLightOn)}>
        <div
          className={`h-8 w-8 ${isLightOn ? "bg-red-200" : "bg-red-400"}`}
        ></div>
        <div
          className={`h-8 w-8 ${isLightOn ? "bg-red-400" : "bg-red-200"}`}
        ></div>

        </button>


    </div>
  );
};

export default LightSwitch;
