import React from "react";

const Square = ({ value, onClick, winner, pos }) => {
  let a = false;
  if (winner) {
    const winnerPosition = Object.values(winner);
    if (
      winnerPosition[0] === pos ||
      winnerPosition[1] === pos ||
      winnerPosition[2] === pos
    ) {
      a = true;
    }
  }
  return (
    <>
      <button
        className="square"
        onClick={onClick}
        style={{ color: a ? "green" : "darkorchid" }}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
