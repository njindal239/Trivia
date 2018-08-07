import React, {Component} from 'react';
import Form from './Form';
import GamePlay from './GamePlay';

class TriviaDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: {},
      gameStarted: false
    }
    this.startGame = this.startGame.bind(this);
  }

  startGame(instructions) {
    this.setState({gameStarted: true, instructions});
  }

  render() {
    const {gameStarted, instructions} = this.state;
    return (
      <div>
      { !gameStarted ? <Form startGame = {this.startGame}/> : <GamePlay instructions={instructions} /> }
      </div>
    )
  }
}

export default TriviaDashboard;
