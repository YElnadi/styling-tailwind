import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return <div className="flex justify-center items-center h-screen text-4xl">
     <button
          className="w-12 h-12 text-red-200 bg-red-400 rounded-md"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
       <div className="flex items-center justify-center w-20 text-neutral-500">{counter}</div> 
        <button
          className=" w-12 h-12 text-green-200 bg-green-400 rounded-md"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>

  </div>;
};

export default Counter;
