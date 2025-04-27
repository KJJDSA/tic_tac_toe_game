import React from 'react'

const TicTacToeBox = ({onClick, rowIndex, colIndex, col}) => {
  return (
    <div
      onClick={() => onClick(rowIndex, colIndex)}
      style={{
        width: "33%",
        aspectRatio: "1",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {!col ? "" : col === 1 ? "O" : "X"}
    </div>
  )
}

export default TicTacToeBox
