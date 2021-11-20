import React, { useState } from "react";

export default (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};
