import React from 'react'
import StatusBar from '../Atoms/StatusBar'
import ResetButton from '../Atoms/ResetButton'

const TicTacToe = () => {
  const [roundData, setRoundData] = React.useState({
    count: 0,
  })
  // 게임 진행을 저장하는 함수
  const setRoundDataCount = (newCount) => {
    setRoundData({
      count: newCount,
    })
  }

  return (
    <div>
      {/* 틱택토 게임 본체 */}
      <img src="src/assets/tictactoeSample.png" alt="" />
      <button onClick={() => setRoundDataCount(roundData.count + 1)}>{roundData.count}</button>

      {/* 차례, 승리여부를 알려주는 스테이터스 바 */}
      <StatusBar target={0} status="win" />
      
      {/* ResetButton 아톰에는 onReset 메소드가 필요하다. */}
      <ResetButton onReset={() => setRoundDataCount(0)}>처음부터 다시하기</ResetButton>
    </div>
  )
}

export default TicTacToe
