import { useState, useEffect } from "react";
import "../index.css";
import Square from "./Square";

const Board = () => {
  const initTurn = "p1";
  const initGameText = "Turn: X";
  const initPlay = true;
  const freshBoard = Array(9).fill('');

  const [board, setBoard] = useState(freshBoard);
  const [turn, setTurn] = useState(initTurn);
  const [gameText, setGameText] = useState(initGameText);
  const [play, setPlay] = useState(initPlay);
  const [newGame, setNewGame] = useState(true);

  useEffect(() => {
    if (turn === "p1") {
      setGameText("Turn: X");
    } else {
      setGameText("Turn: O");
    }
  }, [turn]);

  useEffect(() => {
    console.log(board)
    const winCondition = [
      //rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    //check winner, if winner found, announce winner and exit function
    for (let i = 0; i < winCondition.length; i++) {
      //Take the current winning condition pattern (winCondition[i])
      //Check if current board value is equal to x or o against the winning condition position
      if (winCondition[i].every((j) => board[j] === "x")) {
        setGameText("Winner is X!");
        setPlay(false);
        return;
      } else if (winCondition[i].every((j) => board[j] === "o")) {
        setGameText("Winner is O!");
        setPlay(false);
        return;
      }
    }
    //Else Check if every element is not an empty string (so it will have to be x or o)
    //if it is, pause the game and announce draw
    if(board.every((e) => e !== '')){
      setPlay(false);
      setGameText("Draw!")
    }


  }, [board]);

  const handleNewGame = () => {
    setNewGame(true);
    setBoard(
      board.map((e, i) => {
        return (i = "");
      })
    );
    setTurn('p1')
    setGameText('Turn: X');
    setPlay(true)

  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        <Square
          board={board}
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          play={play}
          setPlay={setPlay}
          square={0}
          newGame={newGame}
        />
        <Square
          board={board}
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          play={play}
          setPlay={setPlay}
          square={1}
          newGame={newGame}
        />
        <Square
          board={board}
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          play={play}
          setPlay={setPlay}
          square={2}
          newGame={newGame}
        />

        <Square
          board={board}
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          play={play}
          setPlay={setPlay}
          square={3}
          newGame={newGame}
        />
        <Square
          board={board}
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          play={play}
          setPlay={setPlay}
          square={4}
          newGame={newGame}
        />
        <Square
          board={board}
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          play={play}
          setPlay={setPlay}
          square={5}
          newGame={newGame}
        />

        <Square
          board={board}
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          play={play}
          setPlay={setPlay}
          square={6}
          newGame={newGame}
        />
        <Square
          board={board}
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          play={play}
          setPlay={setPlay}
          square={7}
          newGame={newGame}
        />
        <Square
          board={board}
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          play={play}
          setPlay={setPlay}
          square={8}
          newGame={newGame}
        />
      </div>
      <h2>{gameText}</h2>

      <div className="wrapper--center">
        <button className="btn--reset-pushable" onClick={handleNewGame}>
          <span className="btn--reset-shadow"></span>
          <span className="btn--reset-edge"></span>
          <span className="btn--reset-front text">New Game</span>
        </button>
      </div>
    </>
  );
};

export default Board;
