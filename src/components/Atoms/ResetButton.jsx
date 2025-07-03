const ResetButton = ({ onReset }) => {
  return (
    <button
      className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-200"
      onClick={onReset}
    >
      Reset Game
    </button>
  );
};

export default ResetButton;