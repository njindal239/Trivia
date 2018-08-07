import React, {Component} from 'react';
import Question from './Question';
import CorrectAnswer from './CorrectAnswer';
import IncorrectAnswer from './IncorrectAnswer';

class GamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'question',
      currentQuestion: 0
    }
    this.answerChecked = this.answerChecked.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  answerChecked(gotRight) {
    this.setState({gameState: (gotRight ? 'correct' : 'incorrect')});
  }

  nextQuestion() {

  }

  render() {
    const {gameState} = this.state;
    let componentToRender;
    const currentQuestion = this.props.questions[this.state.currentQuestion]
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
