import React from "react";
import Square from "./Square";
import "../styles/style.scss";

const Board = ({ board, handleSquareClick, winner }) => {
  const renderSquare = (position) => {
    return (
      <Square
        value={board[position]}
        onClick={() => {
          handleSquareClick(position);
        }}
        winner={winner}
        pos={position}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
