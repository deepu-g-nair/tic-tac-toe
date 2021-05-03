import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/winningCalc";

const App = () => {
  /* -----------------------State variables---------------------------------------------------- */

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  /* ------------------------------Other variables--------------------------------------------- */

  const winner = calculateWinner(board);
  const message = winner ? `Winner is ${winner}` : null;

  /* --------------------------------handleSquareClick function------------------------------------------- */

  const handleSquareClick = (position) => {
    if (board[position] || winner) {
      return;
    }
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        }
        return square;
      });
    });
    setIsXNext((prev) => !prev);
  };

  /* -------------------------------Reset function-------------------------------------------- */

  const restartGame = () => {
    setBoard(Array(9).fill(null));
  };

  /* ------------------------------------JSX--------------------------------------- */

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
      <button
        onClick={() => {
          restartGame();
        }}
      >
        Start again
      </button>
    </div>
  );
};

export default App;
