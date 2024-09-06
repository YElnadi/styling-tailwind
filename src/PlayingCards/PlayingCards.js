import React from "react";
import { useState } from "react";
import Front from "./Front";
import Back from "./Back";
const PlayingCards = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { value, icon, textColor } = props;
  return (
    <div onClick={() => setIsFlipped(!isFlipped)}>
      {isFlipped ? (
        <Front value={value} icon={icon} textColor={textColor} />
      ) : (
        <Back />
      )}
    </div>
  );
};

export default PlayingCards;
