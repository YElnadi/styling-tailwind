import React from 'react';

const QuoteBox1 = (props) => {
    const {quote} = props
    console.log(quote)
  return (
    <div>
      <div className="text-red-500">{quote.text}</div>
      <div>{quote.author}</div>
      <div>{quote.bio}</div>

    </div>
  );
}

export default QuoteBox1;
