import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Score from "./components/Score";

const App = () => {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const resetGame = () => {
    setTurn("X");
    setSquares(Array(9).fill(null));
  };
  const isWinner = (newSquares) => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (
        newSquares[a] &&
        newSquares[a] === newSquares[b] &&
        newSquares[a] === newSquares[c]
      ) {
        endGame(newSquares[a], winningPatterns[i]);
        return;
      }
      if (!newSquares.includes(null)) {
        endGame(null, Array.from(Array(10).keys()));
        return;
      }
    }
    setTurn(turn === "X" ? "O" : "X");
  };
  const handleClick = (square) => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    isWinner(newSquares);
  };

  const endGame = (result) => {
    setTurn(null);
    if (result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      });
      alert(`Congratulations!! ${result} wins!!`);
    } else {
      alert("Try other time, push button");
    }
    setTimeout(() => {
      resetGame();
    }, 1500);
  };
  return (
    <div className="container">
      <Board squares={squares} onClick={handleClick} turn={turn} />
      <Score scoreO={score.O} scoreX={score.X} />
    </div>
  );
};

export default App;
