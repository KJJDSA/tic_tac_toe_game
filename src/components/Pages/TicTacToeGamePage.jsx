import MiniGameTameplate from "../Templates/MiniGameTameplate";
import Header from "../Organisms/Header";
import Playing from "../Organisms/Playing";

const TicTacToeGamePage = () => {
  return (
    <div className="bg-slate-800 min-h-screen flex items-center justify-center text-white">
      <MiniGameTameplate
        header={<Header />}
        body={<Playing />}
      />
    </div>
  );
};

export default TicTacToeGamePage;