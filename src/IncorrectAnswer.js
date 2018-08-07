import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const IncorrectAnswer = ({answer, nextQuestion}) => {
  return (
    <div>
      <h3> Incorrect! The right answer is: {ReactHtmlParser(answer)} </h3>
      <button onClick={nextQuestion} type='button'> Next </button>
    </div>
  );
}

export default IncorrectAnswer;
