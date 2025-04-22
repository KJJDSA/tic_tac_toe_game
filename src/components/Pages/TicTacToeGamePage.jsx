import React from 'react'
import MiniGameTameplate from '../Templates/MiniGameTameplate'

const TicTacToeGamePage = () => {
  // 게임은 틱택토 로 고정
  const gameData = {
    title: '혼자서 하는 틱택토 게임',
    gameId: 'tictactoe'
  }

  return (
    <div>
      <MiniGameTameplate title={gameData.title} gameId={gameData.gameId}/>
    </div>
  )
}

export default TicTacToeGamePage
