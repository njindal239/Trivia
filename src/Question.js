import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import OptionsForm from './OptionsForm';

class Question extends Component {

  constructor(props) {
    super(props);
    this.makeOptions = this.makeOptions.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
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
    console.log(this.props);
    return(
      <div>
        <h3> {this.props.ques.question} </h3>
        <OptionsForm checkAnswer={this.checkAnswer} options={this.makeOptions()} />
      </div>
    );
  }
}

export default Question;
