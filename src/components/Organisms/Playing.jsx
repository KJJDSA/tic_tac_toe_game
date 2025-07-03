import { useState, useEffect } from "react";
import TicTacToe from "../Molecules/TicTacToe";
import StatusBar from "../Atoms/StatusBar";
import ResetButton from "../Atoms/ResetButton";

const Playing = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (i) => {
    if (winner || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setIsDraw(false);
  };

  useEffect(() => {
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    };

    const winner = calculateWinner(squares);
    if (winner) {
      setWinner(winner);
    } else if (squares.every((square) => square !== null)) {
      setIsDraw(true);
    }
  }, [squares]);

  return (
    <div className="game">
      <div className="game-board">
        <TicTacToe squares={squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <StatusBar winner={winner} isDraw={isDraw} nextPlayer={xIsNext ? "X" : "O"} />
        <ResetButton onReset={handleReset} />
      </div>
    </div>
  );
};

export default Playing;