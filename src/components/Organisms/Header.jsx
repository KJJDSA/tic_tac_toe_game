import React from 'react'
import HeaderTitle from '../Atoms/HeaderTitle'

const Header = ({title}) => {
  return (
    // organism은 atom, molecule을 조합하여 만들어진다.
    <div>
      <HeaderTitle title={title}/>
    </div>
  )
}

export default Header
