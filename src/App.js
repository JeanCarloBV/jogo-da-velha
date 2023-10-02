import React from "react";
import Tabuleiro from "./components/Tabuleiro";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jogo das Velhas</h1>
        <Tabuleiro />
      </header>
    </div>
  );
}

export default App;
