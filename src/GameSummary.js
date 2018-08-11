import React from 'react';
import './GameSummary.css';

const GameSummary = ({goHome, finalScores}) => {
  let gamePercentage = (finalScores.points / finalScores.max_points) * 100;
  let componentToRender = null;
  if (gamePercentage < 35) {
    componentToRender = <h1> It seems you need more practice </h1>;
  } else if (gamePercentage < 40) {
    componentToRender = <h1> Darn! You just missed the passing score </h1>;
  } else if (gamePercentage < 50) {
    componentToRender = <h1> Wooh! You just passed! Practice harder </h1>;
  } else if (gamePercentage < 70) {
    componentToRender = <h1> Not Bad!! You have Average Stats </h1>;
  } else if (gamePercentage < 80) {
    componentToRender = <h1> That was indeed a solid effort!! </h1>;
  } else if (gamePercentage < 90) {
    componentToRender = <h1> Awesome!! Wonderful Effort </h1>;
  } else if (gamePercentage < 100){
    componentToRender = <h1> You are a Genius!!!! </h1>;
  } else {
    componentToRender = <h1> PERFECT SCORE!!! BRAVO </h1>;
  }
  return (
    <div className="game-summary">
      <h1> {componentToRender} </h1>
      <div className="score-summary">
        <h2> Your final Score Summary: </h2>
        <ul>
          <li> You Scored {finalScores.points} / {finalScores.max_points} points </li>
          <li> You answered {finalScores.correct_answers} questions correctly </li>
          <li> You answered {finalScores.incorrect_answers} questions incorrectly </li>
        </ul>
      </div>
      <button className='goHome btn btn-block' onClick={goHome}> Go Home </button>
    </div>
  );
}

export default GameSummary;
