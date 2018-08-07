import React, {Component} from 'react';
import Question from './Question';
import CorrectAnswer from './CorrectAnswer';
import IncorrectAnswer from './IncorrectAnswer';
import axios from 'axios';

const QUESTIONSTATE = {
  QUESTION: 0,
  CORRECT: 1,
  INCORRECT: 2
}

class GamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      gameState: QUESTIONSTATE.QUESTION,
      currentQuestionIndex: 0,
    }
    this.gameStatus = {
      correct_answers: 0,
      incorrect_answers: 0,
      points: 0,
      max_points: this.props.instructions.num_questions * 10
    }
    this.answerChecked = this.answerChecked.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    const {num_questions, category, difficulty, type} = this.props.instructions;
    console.log(num_questions, category, difficulty, type);
    const url = `https://opentdb.com/api.php?amount=${num_questions}&category=${category}&difficulty=${difficulty}&type=${type}`;
    console.log(url);
    axios.get(url)
    .then(res => res.data)
    .then(data => data.results)
    .then(questions => this.setState({questions}));
  }

  answerChecked(gotRight) {
    this.setState({gameState: (gotRight ? QUESTIONSTATE.CORRECT : QUESTIONSTATE.INCORRECT)});
    if(gotRight) {
      this.gameStatus.correct_answers += 1;
      this.gameStatus.points += 10;
    } else {
      this.gameStatus.incorrect_answers += 1;
      this.gameStatus.points -= 5;
    }
  }

  nextQuestion() {
    const {questions, currentQuestionIndex} = this.state;
    if (currentQuestionIndex === questions.length - 1) {
      this.props.gameOver(this.gameStatus);
    } else {
      this.setState(prevState => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        gameState: QUESTIONSTATE.QUESTION
      }));
    }
  }

  render() {
    const {gameState, questions, currentQuestionIndex} = this.state;
    let componentToRender;
    const currentQuestion = questions[currentQuestionIndex];
    switch(gameState) {
      case QUESTIONSTATE.QUESTION:
        componentToRender = <Question answerChecked={this.answerChecked} ques={currentQuestion} />;
        break;
      case QUESTIONSTATE.CORRECT:
        componentToRender = <CorrectAnswer nextQuestion={this.nextQuestion} answer={currentQuestion.correct_answer}/>;
        break;
      case QUESTIONSTATE.INCORRECT:
        componentToRender = <IncorrectAnswer nextQuestion={this.nextQuestion} answer={currentQuestion.correct_answer}/>
        break;
      default:
        // NOT POSSIBLE
    }
    return (
      <div>
        <h1> Game Play mode </h1>
        {componentToRender}
      </div>
    );
  }
}

export default GamePlay;
