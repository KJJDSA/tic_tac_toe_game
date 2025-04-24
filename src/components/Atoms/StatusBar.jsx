import React from 'react'

const StatusBar = ({target, status}) => {
  const data = {
    targetData: ["플레이어1", "플레이어2"],
    statusData: {
      turn: "턴",
      win: "승리",
      draw: "무승부",
    }
  }

  let text = data.targetData[target] + "의 " + data.statusData[status]
  if (status === "draw") {
    text = "무승부"
  }
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default StatusBar
