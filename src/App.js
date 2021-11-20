import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
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
  // return <Home name="Homepage" />;
};
export default App;
