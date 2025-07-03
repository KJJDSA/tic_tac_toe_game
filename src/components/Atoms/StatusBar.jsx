const StatusBar = ({ winner, isDraw, nextPlayer }) => {
  let status;
  if (winner) {
    status = <span className="text-green-400">Winner: {winner}</span>;
  } else if (isDraw) {
    status = <span className="text-yellow-400">Draw!</span>;
  } else {
    status = `Next player: ${nextPlayer}`;
  }

  return <div className="text-2xl font-semibold mb-4">{status}</div>;
};

export default StatusBar;
