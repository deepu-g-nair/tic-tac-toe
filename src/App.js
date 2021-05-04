import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./components/winningCalc";
import Confetti from "react-confetti";

const App = () => {
  /* -----------------------State variables---------------------------------------------------- */

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  /* ------------------------------Other variables--------------------------------------------- */

  const winner = calculateWinner(board);
  console.log(winner);
  const message = winner ? ` ${board[winner.a]} Wins` : null;

  /* --------------------------------handleSquareClick function---------------------------------- */

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
      <Board
        board={board}
        handleSquareClick={handleSquareClick}
        winner={winner}
      />
      <h2>{message}</h2>
      <button
        className="restart-game"
        onClick={() => {
          restartGame();
        }}
      >
        Start again
      </button>
      <Confetti
        numberOfPieces="80"
        style={{ display: winner ? "" : "none", overflow: "hidden" }}
      />
    </div>
  );
};

export default App;
