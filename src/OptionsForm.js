import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import './OptionsForm.css';

class OptionsForm extends Component {
  static defaultProps = {
    options: []
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({selectedOption: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.checkAnswer(this.state.selectedOption);
  }

  render() {
    const options = this.props.options.map((option, idx) => (
      <div key = {idx} className="select-now">
        <input type='radio'
                           name= "option"
                           value={option}
                           checked={this.state.selectedOption === option}
                           onChange={this.handleChange}
        />
        <label className = "radio radio-inline" key = {idx}>
          {ReactHtmlParser(option)}
        </label>
      </div>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='selectAnswer'>
          {options}
        </div>
        <div>
        <button type='submit' className='btn btn-success btn-block'> Submit </button>
        </div>
      </form>
    );
  }
}

export default OptionsForm;
