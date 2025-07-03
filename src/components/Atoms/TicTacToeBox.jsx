const TicTacToeBox = ({ value, onClick }) => {
  const style = value === "X" ? "text-red-400" : "text-blue-400";
  return (
    <button
      className={`w-24 h-24 bg-slate-800 rounded-lg flex items-center justify-center text-4xl font-bold transition-colors duration-200 hover:bg-slate-600 ${style}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default TicTacToeBox;
