import React from 'react'

const OXSymbol = ({sign}) => {
  return (
    <>
      <p style={{color: sign === 1 ? "blue" : "red"}} >{!sign ? "" : sign === 1 ? "O" : "X"}</p> 
    </>
  )
}

export default OXSymbol
