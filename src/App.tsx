import React from "react";
import "./App.css";
import { Menu } from "./components/Menu";
import { Introduction } from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Introduction></Introduction>
    </div>
  );
}

export default App;
