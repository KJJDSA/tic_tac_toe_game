import React from 'react'
import StatusBar from '../Atoms/StatusBar'
import ResetButton from '../Atoms/ResetButton'
import TicTacToeBox from '../Atoms/TicTacToeBox'

const TicTacToe = () => {
  const dummyData = {
    player: [
      { id: 1, name: "플레이어1", symbol: "O" },
      { id: 2, name: "플레이어2", symbol: "X" }
    ],
    count: 0,
    // 0: 빈칸, 1: O, 2: X
    boxes: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    winner: null,
    target: 0,
  }
  const [roundData, setRoundData] = React.useState(dummyData)
  
  // 게임을 다시 시작합니다. 
  const resetRoundData = () => {
    setRoundData(dummyData)
  }

  // 게임을 진행합니다.
  const playRound = (row, col) => {
    // 이미 선택된 칸이거나 게임이 끝났다면 아무것도 하지 않습니다.
    if (roundData.boxes[row][col] !== 0 || roundData.winner !== null) return

    // 현재 플레이어의 심볼을 넣습니다.
    const newBoxes = [...roundData.boxes]
    newBoxes[row][col] = roundData.target + 1

    // 다음 플레이어로 변경합니다.
    const nextTarget = roundData.target === 0 ? 1 : 0

    // 카운트 횟수 증가
    const newCount = roundData.count + 1

    // 승자를 확인합니다
    const winner = checkWinner(newBoxes) ? roundData.target : null

    setRoundData({
      ...roundData,
      count: newCount,
      boxes: newBoxes,
      target: nextTarget, 
      winner
    })
  }

  const curTarget = roundData.winner !== null ? roundData.winner : roundData.target

  const curStatus = roundData.winner !== null ? "win" : roundData.count > 8 ? "draw" : "turn"

  if (roundData.winner !== null) {
    alert(`${dummyData.player[roundData.target].name}님이 승리하셨습니다!`)
  } else if (roundData.count > 8) {
    alert("무승부입니다!")
  }

  console.log('g')

  return (
    <div>
      {/* 틱택토 게임 본체 */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {roundData.boxes.map((row, rowIndex) => {
          return (
            <div key={rowIndex} style={{ display: "flex"}}>
              {row.map((col, colIndex) => {
                return (
                  <TicTacToeBox 
                    key={colIndex} 
                    onClick={playRound} 
                    rowIndex={rowIndex} 
                    colIndex={colIndex}
                    col={col}
                  /> 
                )
              })}
            </div>
          )
        })}
      </div>

      {/* 차례, 승리여부를 알려주는 스테이터스 바 */}
      <StatusBar target={curTarget} status={curStatus} />
      
      {/* ResetButton 아톰에는 onReset 메소드가 필요하다. */}
      <ResetButton onReset={() => resetRoundData()}>처음부터 다시하기</ResetButton>
    </div>
  )
}

  // 게임이 끝났는지 확인합니다.
  const checkWinner = (boxes) => {
    // 승리 조건을 확인합니다.
    const winningCombinations = [
      // 가로
      [boxes[0][0], boxes[0][1], boxes[0][2]],
      [boxes[1][0], boxes[1][1], boxes[1][2]],
      [boxes[2][0], boxes[2][1], boxes[2][2]],
      // 세로
      [boxes[0][0], boxes[1][0], boxes[2][0]],
      [boxes[0][1], boxes[1][1], boxes[2][1]],
      [boxes[0][2], boxes[1][2], boxes[2][2]],
      // 대각선
      [boxes[0][0], boxes[1][1], boxes[2][2]],
      [boxes[0][2], boxes[1][1], boxes[2][0]]
    ]

    for (let i = 0; i < winningCombinations.length; i++) {
      const combination = winningCombinations[i]
      if (combination.every((val) => val === combination[0] && val !== 0)) {
        return true
      }
    }
    return false
  }

export default TicTacToe
