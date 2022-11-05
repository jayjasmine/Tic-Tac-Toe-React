import "../index.css";


const Square = ({ setTurn, board, square, turn, play, setBoard }) => {

  const handleClick = (board, square, turn) => {
    if (!play) {
      return;
    } else if (board[square] !== "") {
    } else if (turn === "p1") {
      setBoard(
        board.map((e, i) => {
          if (i === square) {
            return (i = "x");
          }else {
            return e;
          }
        })
      );
      setTurn("p2");
    } else if (turn === "p2") {
      setBoard(
        board.map((e, i) => {
          if (i === square) {
            return (i = "o");
          }else{
            return e;
          }
        })
      );
      setTurn("p1");
    }

  };

  return (
    <>
      <button
        onClick={(e) => handleClick(board, square, turn)}
        className="square"
      >
        {board[square]}
      </button>
    </>
  );
};

export default Square;
