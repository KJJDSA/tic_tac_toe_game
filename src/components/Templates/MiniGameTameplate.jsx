import React from 'react'
import Playing from '../Organisms/Playing'
import Header from '../Organisms/Header'

const MiniGameTameplate = ({title, gameId}) => {
  return (
    <div>
      {/* 게임 타이틀 */}
      <Header title={title}/>
      
      {/* 게임 실행 */}
      <Playing gameId={gameId}/>
    </div>
  )
}

export default MiniGameTameplate
