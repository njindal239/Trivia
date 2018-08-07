import React, {Component} from 'react';

const CATEGORY_OFFSET = 9;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num_questions: 10,
      category: 9,
      difficulty: 'easy',
      type: 'multiple'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.startGame(this.state);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value}, function() {
    });
  }


  render() {
    const categories = this.props.categories.map((category, idx) => (
      <option key={idx} value={idx+CATEGORY_OFFSET}> {category} </option>
    ));
    return (
      <div className='container'>
        <form onSubmit = {this.handleSubmit} className='form-horizontal'>
          <div className='form-group'>
            <label className="col-sm-2 control-label"> Questions </label>
            <input className='form-control'
                   type = "number"
                   min = '1'
                   max = '50'
                   name = 'num_questions'
                   value = {this.state.num_questions}
                   onChange = {this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label className="col-sm-2 control-label"> Category </label>
            <select name='category'
                    className="form-control col-sm-10"
                    onChange = {this.handleChange} >
              {categories}
            </select>
          </div>
          <div className='form-group'>
            <label className="col-sm-2 control-label"> Difficulty </label>
            <select name='difficulty'
                    className="form-control col-sm-10"
                    onChange = {this.handleChange} >
              <option value='easy'> Easy </option>
              <option value='medium'> Medium </option>
              <option value='hard'> Hard </option>
            </select>
          </div>
            <div className='form-group'>
              <label className="col-sm-2 control-label"> "Type of Questions" </label>
              <select name='type'
                      className="form-control col-sm-10"
                      onChange = {this.handleChange} >
                <option value='multiple'> Multiple Choice </option>
                <option value='boolean'> True/False </option>
              </select>
            </div>
            <button> Go Test Yourself </button>
        </form>
      </div>
    );
  }
}

Form.defaultProps = {
  categories: [
    'General Knowledge',
    'Entertainment: Books',
    'Entertainment: Film',
    'Entertainment: Music',
    'Entertainment: Musicals & Theatres',
    'Entertainment: Television',
    'Entertainment: Video Games',
    'Entertainment: Board Games',
    'Science & Nature',
    'Science: Computers',
    'Science: Mathematics',
    'Mythology',
    'Sports',
    'Geography',
    'History',
    'Politics',
    'Art',
    'Celebrities',
    'Animals',
    'Vehicles',
    'Entertainment: Comics',
    'Science: Gadgets',
    'Entertainment: Japanese Anime & Manga',
    'Entertainment: Cartoon & Animations'
  ]
}

export default Form;
