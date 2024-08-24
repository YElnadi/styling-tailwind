import React from "react";

const QuoteBox1 = (props) => {
  const { quote } = props;
  console.log(quote);
  return (
    <div className="flex flex-col m-8 ">
      <div className="bg-cyan-600 p-10 w-[410px] text-cyan-200 rounded-t-xl">
        <div>{quote.text}</div>
      </div>
      <div className="flex flex-col items-center bg-stone-200 rounded-b-xl p-10">
        <div className="text-xl text-cyan-700">{quote.author}</div>
        <div className="text-stone-500">{quote.bio}</div>
      </div>
    </div>
  );
};

export default QuoteBox1;
