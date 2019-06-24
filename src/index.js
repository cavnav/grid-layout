import React from "react";
import ReactDOM from "react-dom";
import { Grid } from "./Grid";

import "./styles.css";
import { GridConstructor } from "./GridConstructor";

function App() {
  return (
    <div className="App">
      <GridConstructor />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
