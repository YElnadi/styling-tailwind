import React from "react";

const QuoteBox2 = (props) => {
  const { quote } = props;
  console.log("quot2", quote);
  return (
    <div className="flex m-8">
      <div className="rounded-l-lg  p-4 bg-blue-700 w-64 ">
        <div className="text-2xl text-gray-200 mb-2 ">{quote.author}</div>
        <div className="text-blue-400"> {quote.bio}</div>
      </div>
      <div className="flex items-center justify-center px-8 text-stone-500 text-lg w-80 border rounded-r-full border-stone-300 ">{quote.text}</div>
    </div>
  );
};

export default QuoteBox2;
