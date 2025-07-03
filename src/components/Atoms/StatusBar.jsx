const StatusBar = ({ winner, isDraw, nextPlayer }) => {
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Draw!";
  } else {
    status = `Next player: ${nextPlayer}`;
  }

  return <div className="status">{status}</div>;
};

export default StatusBar;