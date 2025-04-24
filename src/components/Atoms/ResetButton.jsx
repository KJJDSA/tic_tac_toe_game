import React from 'react'

const ResetButton = ({ onReset, children }) => {
  return (
    <div>
      <button onClick={onReset} >{children}</button>
    </div>
  )
}

export default ResetButton
