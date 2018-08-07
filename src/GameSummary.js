import React from 'react';

const GameSummary = ({goHome}) => {
  return (
    <div>
      <h1> Thank you for playing </h1>
      <button onClick={goHome}> Go Home </button>
    </div>
  );
}

export default GameSummary;
