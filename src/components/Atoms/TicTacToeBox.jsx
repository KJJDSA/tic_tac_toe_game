import React from 'react'
import OXSymbol from './OXSymbol'

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
      <OXSymbol sign={col} />
    </div>
  )
}

export default TicTacToeBox
