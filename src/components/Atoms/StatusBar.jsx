import React from 'react'

const StatusBar = ({target, status}) => {
  const data = {
    targetData: ["플레이어1", "플레이어2"],
    statusData: {
      turn: "턴",
      win: "승리"
    }
  }
  return (
    <div>
      <p>{data.targetData[target]} 의 {data.statusData[status]}</p>
    </div>
  )
}

export default StatusBar
