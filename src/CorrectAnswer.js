import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const CorrectAnswer = ({answer, nextQuestion}) => {
  return (
    <div>
      <h3> Correct! The right answer is: {ReactHtmlParser(answer)} </h3>
      <button onClick={nextQuestion} type='button'> Next </button>
    </div>
);
}

export default CorrectAnswer;
