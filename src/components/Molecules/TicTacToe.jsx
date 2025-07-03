import TicTacToeBox from "../Atoms/TicTacToeBox";

const TicTacToe = ({ squares, onClick }) => {
  return (
    <div className="grid grid-cols-3 gap-3 bg-slate-700 p-3 rounded-lg">
      {squares.map((square, i) => (
        <TicTacToeBox key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default TicTacToe;
