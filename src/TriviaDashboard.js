import React, {Component} from 'react';
import Form from './Form';
import GamePlay from './GamePlay';
import GameSummary from './GameSummary';

const GAME_STATE = {
  NOT_STARTED: 0,
  STARTED: 1,
  ENDED: 2
}

class TriviaDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: {},
      gameState: GAME_STATE.NOT_STARTED
    }
    this.startGame = this.startGame.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.setState({gameState: GAME_STATE.NOT_STARTED});
  }

  gameOver() {
    this.setState({gameState: GAME_STATE.ENDED});
  }

  startGame(instructions) {
    this.setState({gameState: GAME_STATE.STARTED, instructions});
  }

  render() {
    const {gameState, instructions} = this.state;
    return (
      <div>
      { (gameState === GAME_STATE.NOT_STARTED) ?
          <Form startGame = {this.startGame}/> :
          (gameState === GAME_STATE.STARTED) ?
          <GamePlay gameOver={this.gameOver} instructions={instructions} /> :
          <GameSummary goHome = {this.goHome}/> }
      </div>
    )
  }
}

export default TriviaDashboard;
