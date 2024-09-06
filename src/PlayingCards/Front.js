import React from 'react';
import clsx from 'clsx'

const Front = (props) => {
    const{value, icon, textColor} = props
  return (
    <div className ={clsx("bg-white w-44 h-60 rounded-lg border-4 border-black flex flex-col justify-between items-center m-8 p-2", textColor)}>
        <div className="w-full text-4xl">{value}</div>
        <div><i className={clsx("fa-solid  text-4xl", icon)}></i></div>
        <div className=" w-full flex justify-end text-4xl ">{value}</div>
  </div>
  );
}

export default Front;
