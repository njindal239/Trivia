import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import './OptionsForm.css';

class OptionsForm extends Component {
  static defaultProps = {
    options: []
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      selectedIndex: -1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.cancelSubmit = this.cancelSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({selectedOption: e.target.value});
  }

  submitAnswer() {
    this.props.checkAnswer(this.state.selectedOption);
    // this.setState({
    //   selectedOption: "",
    //   selectedIndex:  -1
    // });
  }

  cancelSubmit() {
    this.setState({
      selectedOption: "",
      selectedIndex:  -1
    });
  }

  handleClick(e) {
    this.setState({
      selectedIndex: e.target.id,
      selectedOption: e.target.value
    }, () => {
    confirmAlert({
      title: "Confirm to submit!",
      message: `Are you confirm to choose "${this.state.selectedOption}" `,
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.submitAnswer()
        },
        {
          label: 'No',
          onClick: () => this.cancelSubmit()
        }
      ]
    });
  });

  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const {optionProps} = this.props;
    const options = this.props.options.map((option, idx) => {
      let style = null;
      if (optionProps !== null) {
        if (optionProps.isCorrect && idx === Number(this.state.selectedIndex)) {
          style = {background: 'green'};
        } else if (idx === Number(this.state.selectedIndex)) {
          style = {background: 'red'};
        }
      }
      return (
        <div key = {idx} className="select-now">
          <input id={idx} type='radio'
                 name="option"
                 value={option}
                 checked={this.state.selectedOption === option}
                 onClick={this.handleClick}
          />
          <label htmlFor={idx} style = {style} className = "radio radio-inline" key = {idx}>
            {ReactHtmlParser(option)}
          </label>
        </div>
      );
    });
    return (
      <div className='options'>
        <form onSubmit={this.handleSubmit}>
          <div className='selectAnswer'>
            {options}
          </div>
        </form>
      </div>
    );
  }
}

export default OptionsForm;
