import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const IncorrectAnswer = ({answer, nextQuestion}) => {
  return (
    <div className='giveFeedback'>
      <h3> Incorrect! The right answer is: {ReactHtmlParser(answer)} </h3>
      <button className='btn btn-success' onClick={nextQuestion} type='button'> Proceed </button>
    </div>
  );
}

export default IncorrectAnswer;
