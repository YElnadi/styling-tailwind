import React from "react";

const Modal = (props) => {
  const {onClose} = props
  return (
    <div className="bg-stone-400/80 backdrop-blur-sm fixed w-full h-full top-0 flex justify-center items-center">
      <div className="bg-white w-80 h-80 rounded-md flex flex-col justify-center items-center">
        I am modal
        <button onClick={onClose}>Click to close</button>

      </div>
    </div>
  );
};

export default Modal;
