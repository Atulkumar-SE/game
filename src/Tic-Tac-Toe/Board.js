import React from "react";
import { useState } from "react";
import "./Board.css";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isATrue, setIsATrue] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isATrue ? "X" : "O";
    setState(copyState);
    setIsATrue(!isATrue);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <>
      <div className="board_container">
        {isWinner ? (
          <>
            <h2>{isWinner} won the game</h2> 
            {/* <button onClick={handleReset}>Play Again</button> */}
          </>
        ) : (
          <>
            <h1 className="player">Player {isATrue ? "X" : "O"} Please move.</h1>
            <div className="row">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="row">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="row">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </>
        )}
        <button onClick={handleReset}>Restart</button>
      </div>
    </>
  );
};

export default Board;
