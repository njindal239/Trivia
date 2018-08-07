import React from 'react';

const CorrectAnswer = ({answer, nextQuestion}) => {
  return (
    <div>
      <h3> Correct! The right answer is: {answer} </h3>
      <button onClick={nextQuestion} type='button'> Next </button>
    </div>
);
}

export default CorrectAnswer;
