import React, { useState } from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  const [counter, setCounter] = useState(0);
  const [fake, setFake] = useState();

  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <pre>{JSON.stringify(fake, null, 2)}</pre>
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
          <Link to="/pluto">Pluto</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
