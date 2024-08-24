import React from "react";

const QuoteBox3 = (props) => {
  const { quote } = props;
  console.log("quote3 :", quote);
  return (
    <div className="flex flex-col m-8">
      <div className="bg-rose-400 text-stone-100 text-xl w-[500px]  p-10  rounded-t-lg rounded-r-lg">
        {quote.text}
      </div>
      <div className="border-2 w-64 p-4 rounded-b-lg bg-rose-100 border-rose-300">
        <div className="text-xl text-rose-700">{quote.author}</div>
        <div className=" text-rose-400">{quote.bio}</div>
      </div>
    </div>
  );
};

export default QuoteBox3;
