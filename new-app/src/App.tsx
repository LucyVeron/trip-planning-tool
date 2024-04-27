import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Leaf from "./components/leaf/Leaf";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world</p>
        <Leaf />
      </header>
    </div>
  );
}

export default App;
