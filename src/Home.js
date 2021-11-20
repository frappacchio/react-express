import React, { useState } from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <span>{counter}</span>
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click
      </button>
      <ul>
        <li>
          <Link to="/">Ciao</Link>
        </li>
        <li>
          <Link to="/pippo">Pippo</Link>
        </li>
        <li>
          <Link to="/pluto">Pippo</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
