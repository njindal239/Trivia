import React from 'react';

const IncorrectAnswer = ({answer, nextQuestion}) => {
  return (
    <div>
      <h3> Incorrect! The right answer is: {answer} </h3>
      <button onClick={nextQuestion} type='button'> Next </button>
    </div>
  );
}

export default IncorrectAnswer;
