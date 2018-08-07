import React, {Component} from 'react';

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
      <label className = "radio radio-inline" key = {idx}>
        <input key = {idx} type='radio'
                           name= {option}
                           value={option}
                           checked={this.state.selectedOption === option}
                           onChange={this.handleChange}
        />
        {option}
      </label>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        {options}
        <button type='submit' className='btn btn-success'> Submit </button>
      </form>
    );
  }
}

export default OptionsForm;
