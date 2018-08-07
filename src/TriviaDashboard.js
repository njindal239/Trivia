import React, {Component} from 'react';
import Form from './Form';
import axios from 'axios';
import GamePlay from './GamePlay';

class TriviaDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      gameStarted: false
    }
    this.startGame = this.startGame.bind(this);
  }

  startGame(instructions) {
    const {num_questions, category, difficulty, type} = instructions;
    console.log(num_questions, category, difficulty, type);
    const url = `https://opentdb.com/api.php?amount=${num_questions}&category=${category}&difficulty=${difficulty}&type=${type}`;
    console.log(url);
    axios.get(url)
    .then(res => res.data)
    .then(data => data.results)
    .then(questions => this.setState({questions, gameStarted: true}))
  }

  render() {
    const {gameStarted} = this.state;


    return (
      <div>
      { !gameStarted ? <Form startGame = {this.startGame}/> : <GamePlay {...this.state} /> }
      </div>
    )
  }
}

export default TriviaDashboard;
