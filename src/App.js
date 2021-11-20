import React from "react";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home name="Homepage" />} />
        <Route path="pippo" element={<Home name="Pippo" />} />
        <Route path="pluto" element={<Home name="Pluto" />} />
      </Routes>
    </>
  );
};
export default App;
