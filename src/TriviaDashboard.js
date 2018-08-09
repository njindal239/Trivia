import React, {Component} from 'react';
import Form from './Form';
import GamePlay from './GamePlay';
import GameSummary from './GameSummary';
import axios from 'axios';

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
      gameState: this.props.favGame ? GAME_STATE.STARTED : GAME_STATE.NOT_STARTED
    }
    this.finalScores = {};
    this.startGame = this.startGame.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.goHome = this.goHome.bind(this);
    // if (this.props.favGame) {
    //   console.log("coming");
    //   this.setState({gameState: GAME_STATE.STARTED});
    // }
  }

  goHome() {
    this.setState({gameState: GAME_STATE.NOT_STARTED});
  }

  gameOver(gameStatus) {
    this.finalScores = gameStatus;
    this.setState({gameState: GAME_STATE.ENDED});
    console.log(this.props.user._id);
    let url = 'http://localhost:3001/users/' + this.props.user._id;
    console.log("Displaying final scores: ");
    console.log(this.finalScores);
    axios.put(url, {...this.finalScores})
    .then(res => res.data)
    .then(user => console.log(user))
    .catch(err => console.log(err.response.data.error));
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
          <GamePlay user={this.props.user} gameOver={this.gameOver} instructions={instructions} favGame={this.props.favGame}/> :
          <GameSummary goHome = {this.goHome} finalScores = {this.finalScores}/> }
      </div>
    )
  }
}

export default TriviaDashboard;
