import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import OptionsForm from './OptionsForm';
import ReactHtmlParser from 'react-html-parser';
import CorrectAnswer from './CorrectAnswer';
import IncorrectAnswer from './IncorrectAnswer';
import './Question.css';

const QUESTIONSTATE = {
  QUESTION: 0,
  CORRECT: 1,
  INCORRECT: 2
}

class Question extends Component {

  constructor(props) {
    super(props);
    this.options = [];
    this.makeOptions = this.makeOptions.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.state = {
      favStatus: false,
      questionState: QUESTIONSTATE.QUESTION,
      optionProps: null
    }
  }

  checkAnswer(guess) {
    if (this.props.ques.correct_answer === guess) {
      this.setState({
        questionState: QUESTIONSTATE.CORRECT,
        optionProps: {
          isCorrect: this.props.ques.correct_answer === guess
        }
      });
      this.props.answerChecked(true);
    } else {
      this.setState({
        questionState: QUESTIONSTATE.INCORRECT,
        optionProps: {
          isCorrect: this.props.ques.correct_answer === guess
        }
      });
      this.props.answerChecked(false);
    }

  }

  addFavorite(e) {
    this.setState({favStatus: true});
    this.props.addFavorite(this.props.ques);
  }

  makeOptions() {
    console.log(this.options);
    if (this.options.length !== 0) {
      console.log("here");
      return this.options;
    }
    const quesObject = this.props.ques;
    this.options =  shuffle([...quesObject.incorrect_answers, quesObject.correct_answer]);
    return this.options;
  }

  nextQuestion() {
    this.setState({questionState: QUESTIONSTATE.QUESTION, optionProps: null});
    this.options = [];
    this.props.nextQuestion();
  }

  render() {
    const {ques} = this.props;
    let appliedStyle;
    const favStyle = {backgroundColor: '#ff4500', color: 'white'};
    this.state.favStatus ?  appliedStyle = favStyle : appliedStyle = {};
    let componentToRender = null;
    switch(this.state.questionState) {
      case QUESTIONSTATE.QUESTION:
        break;
      case QUESTIONSTATE.CORRECT:
        componentToRender = <CorrectAnswer nextQuestion={this.nextQuestion} answer={ques.correct_answer}/>;
        break;
      case QUESTIONSTATE.INCORRECT:
        componentToRender = <IncorrectAnswer nextQuestion={this.nextQuestion} answer={ques.correct_answer}/>
        break;
      default:
        // NOT POSSIBLE
      }

    const quesForm = ques ?
      <div>
        <div className='favButton'>
          <button className='favorite btn btn-primary btn-block'
                  style={appliedStyle}
                  onClick={this.addFavorite}
                  type='buttton'>
              <i className="fab fa-gratipay fa-2x"> </i>
          </button>
        </div>
        <div className="question-statement">
          <h3 className="question-title"> {ReactHtmlParser(ques.question)} </h3>
        </div>
        <div>
          <OptionsForm checkAnswer={this.checkAnswer}
                       options={this.makeOptions()}
                       optionProps={this.state.optionProps}
          />
        </div>
      </div> :
      <div className = 'container1'>
        <div className = 'loader'> </div>
      </div>;
    return(
      <div>
        <div className="question">
          {quesForm}
        </div>
        <div>
          {componentToRender}
        </div>
      </div>
    );
  }
}

export default Question;
