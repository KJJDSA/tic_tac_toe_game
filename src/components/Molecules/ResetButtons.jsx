// import React, { useState } from 'react'
import ResetButton from '../Atoms/ResetButton'

const ResetButtons = () => {
  // const [isEnd, setIsEnd] = useState(false)
  const isEnd = false
  const button = isEnd ? '다시하기' : '처음부터 다시하기'
  return (
    <div>
      <ResetButton>{button}</ResetButton>  
    </div>
  )
}

export default ResetButtons
