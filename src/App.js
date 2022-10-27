import React, { useState } from "react";

let turn = "p1";
let play = true;
const freshBoard = Array(9).fill("");
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const Square = (props) => {
  const initValue = "";
  const [value, setValue] = useState(initValue);

  const checkWinner = (board) => {
    for (let i = 0; i < winCondition.length; i++) {
      //Take the current winning condition pattern (winCondition[i])
      //Check if current board value is equal to x or o against the winning condition position
      if (winCondition[i].every((j) => board[j] === "x") || winCondition[i].every((j) => board[j] === "o")) {
        console.log("winner " + winCondition[i]);
        play = false;
      }
    }
  };

  const handleClick = ({ board, square }) => {

    if(!play){
      return
    }else if (board[square] !== "") {
    } else if (turn == "p1") {
      setValue("x");
      board[square] = "x";
      turn = "p2";
    } else if (turn == "p2") {
      setValue("o");
      board[square] = "o";
      turn = "p1";
    }

    checkWinner(board)
  };

  return (
    <>
      <button onClick={(e) => handleClick(props)} className="square">
        {value}
      </button>
    </>
  );
};

const Board = () => {
  let board = freshBoard;

  return (
    <>
      <div className="board">
        <div className="board-row">
          <Square board={board} square={0} />
          <Square board={board} square={1} />
          <Square board={board} square={2} />
        </div>
        <div className="board-row">
          <Square board={board} square={3} />
          <Square board={board} square={4} />
          <Square board={board} square={5} />
        </div>
        <div className="board-row">
          <Square board={board} square={6} />
          <Square board={board} square={7} />
          <Square board={board} square={8} />
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Board />
    </>
  );
}

export default App;
