import React from 'react'
import ResetButtons from '../Molecules/ResetButtons'
import TicTacToe from '../Molecules/TicTacToe'

const Playing = ({gameId}) => {
  const gameModule = gameId === 'tictactoe' ? <TicTacToe /> : <div>해당하는 게임이 없습니다.</div>
  return (
    <div>
      {/* 이곳에서 props 가 tictactoe 게임이라면 해당 Molecules 를 가져온다. 아니라면 해당하는게임이 없습니다 라는 메세지를 출력한다. */}
      
      {/* 게임이 실행될 Molcules. 우선 틱택토로 고정하나 이후 props 로 받을 수 있도록 변경 */}
      {gameModule} 
      
      {/* 다시하기, 처음부터 다시하기 버튼이 모인 Molecules */}
      <ResetButtons />
    </div>
  )
}

export default Playing
