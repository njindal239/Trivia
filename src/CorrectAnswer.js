import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './CorrectAnswer.css';

const CorrectAnswer = ({answer, nextQuestion}) => {
  return (
    <div className="giveFeedback">
      <h3> Congrats! That is Correct! </h3>
      <button className='btn btn-success' onClick={nextQuestion} type='button'> Proceed </button>
    </div>
);
}

export default CorrectAnswer;
