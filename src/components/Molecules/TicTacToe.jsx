import React, { Component } from 'react'
import StatusBar from '../Atoms/StatusBar'

export default class TicTacToe extends Component {
  render() {
    return (
      <div>
        <img src="src/assets/tictactoeSample.png" alt="" />
        <StatusBar target={0} status="win" />
      </div>
    )
  }
}
