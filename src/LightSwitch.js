import { useState } from "react";

const LightSwitch = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  return (
    <div
      className={`flex flex-col  justify-center items-center h-screen ${
        isLightOn ? "bg-yellow-500" : "bg-black"
      }`}
    ></div>
  );
};

export default LightSwitch;
