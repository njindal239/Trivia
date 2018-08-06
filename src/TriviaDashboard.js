import React, {Component} from 'react';
import Form from './Form';

class TriviaDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestion: 0
    }
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    
  }

  render() {
    return (
      <div>
        <h1> Welcome to Trivia </h1>
        <Form startGame = {this.startGame}/>
      </div>
    )
  }
}

export default TriviaDashboard;
