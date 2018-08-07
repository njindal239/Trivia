import React from 'react';

const GameSummary = ({goHome, finalScores}) => {
  return (
    <div>
      <h1> Thank you for playing </h1>
      <div>
        <h2> Your final Score Summary: </h2>
        <ul>
          <li> You Scored {finalScores.points} / {finalScores.max_points} points </li>
          <li> You answered {finalScores.correct_answers} correctly </li>
          <li> You answered {finalScores.incorrect_answers} incorrectly </li>
        </ul>
      </div>
      <button onClick={goHome}> Go Home </button>
    </div>
  );
}

export default GameSummary;
