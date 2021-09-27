import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

const App = () => {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });
  const isWinner = (squares) => {
    setTurn(turn === "X" ? "O" : "X");
  };
  const handleClick = (square) => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    isWinner(newSquares);
  };
  return (
    <div className="container">
      <Board squares={squares} onClick={handleClick} turn={turn} />
    </div>
  );
};

export default App;
