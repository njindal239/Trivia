import React, {Component} from 'react';
import './GameLife.css';
import axios from 'axios';

class GameLife extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games_played: 0,
      questions_attempted: 0,
      questions_correct: 0,
      questions_incorrect: 0,
      net_points: 0,
      max_points: 0,
      percentage: 0
    };
  }

  componentDidMount() {
    let url = `http://localhost:3001/users/${this.props.user._id}`;
    axios.get(url)
    .then(res => res.data)
    .then(gameLife => this.setState(gameLife));
  }

  render() {
    const {
      games_played,
      questions_attempted,
      questions_correct,
      questions_incorrect,
      net_points,
      max_points,
      percentage
    } = this.state;
    return (
      <div className='gameLife'>
        <h1> YOUR GAME LIFE <i class="fas fa-smile-wink"></i> </h1>
        <ul className='score-summary'>
          <li> Played {games_played} Games </li>
          <li> Attempted {questions_attempted} Questions </li>
          <li> Answered {questions_correct} Questions Correctly </li>
          <li> Answered {questions_incorrect} Questions Incorrectly </li>
          <li> Your Net Score: {net_points} / {max_points} </li>
          <li> Your Grade: {percentage}% </li>
        </ul>
      </div>
    );
  }
}

export default GameLife;
