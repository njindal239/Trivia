import React, {Component} from 'react';
import Question from './Question';
import CorrectAnswer from './CorrectAnswer';
import IncorrectAnswer from './IncorrectAnswer';
import axios from 'axios';

class GamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      gameState: 'question',
      currentQuestionIndex: 0
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
    this.setState({gameState: (gotRight ? 'correct' : 'incorrect')});
  }

  nextQuestion() {

  }

  render() {
    const {gameState, questions, currentQuestionIndex} = this.state;
    let componentToRender;
    const currentQuestion = questions[currentQuestionIndex];
    if (gameState === "question") {
      componentToRender = <Question answerChecked={this.answerChecked} ques={currentQuestion} />
    } else if (gameState === "correct") {
      componentToRender = <CorrectAnswer nextQuestion={this.nextQuestion} answer={currentQuestion.correct_answer}/>
    } else {
      componentToRender = <IncorrectAnswer nextQuestion={this.nextQuestion} answer={currentQuestion.correct_answer}/>
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
