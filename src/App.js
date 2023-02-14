import React from "react";
import { BrowserRouter } from "react-router-dom";
import ClasslessCssPicker from "./ClasslessCssPicker";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ClasslessCssPicker />
      </BrowserRouter>
    </>
  );
};
export default App;
