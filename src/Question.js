import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import OptionsForm from './OptionsForm';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import './Question.css';

class Question extends Component {

  constructor(props) {
    super(props);
    this.makeOptions = this.makeOptions.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.addFavorite = this.addFavorite.bind(this, this.props.ques);
  }

  addFavorite(ques) {

  }

  checkAnswer(guess) {
    if (this.props.ques.correct_answer === guess) {
      this.props.answerChecked(true);
    } else {
      this.props.answerChecked(false);
    }
  }

  makeOptions() {
    const quesObject = this.props.ques;
    return shuffle([...quesObject.incorrect_answers, quesObject.correct_answer]);
  }

  render() {
    const {ques} = this.props;
    console.log(ques);
    const quesForm = ques ?
      <div>
        <button onClick={this.addFavorite} type='buttton'> Favorite </button>
        <h3> {ReactHtmlParser(ques.question)} </h3>
        <OptionsForm checkAnswer={this.checkAnswer} options={this.makeOptions()} />
      </div> :
      <div className = 'container1'>
        <div className = 'loader'> </div>
      </div>;
    return(
      <div>
        {quesForm}
      </div>
    );
  }
}

export default Question;
