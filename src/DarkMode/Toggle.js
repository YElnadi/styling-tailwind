import React from 'react';

const Toggle = (props) => {
    const {onClick} = props
  return (
    <div>
        <button onClick={onClick}>Toggle</button>
    </div>
  );
}

export default Toggle;
