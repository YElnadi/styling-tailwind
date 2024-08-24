import React from "react";

const QuoteBox2 = (props) => {
  const { quote } = props;
  console.log("quot2", quote);
  return (
    <div className="flex border rounded-r-full w-[500px]">
      <div className="rounded-l-xl border p-8 bg-blue-500 ">
        <div className="text-xl text-white pb-2">{quote.author}</div>
        <div className="text-blue-800"> {quote.bio}</div>
      </div>
      <div className="flex items-center  p-8 text-slate-500">{quote.text}</div>
    </div>
  );
};

export default QuoteBox2;
