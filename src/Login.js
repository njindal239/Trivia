import React, {Component} from 'react';
import axios from 'axios';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      invalid: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let {username, password} = this.state;
    const url = "http://localhost:3001/login";
    axios.post(url, {username, password})
    .then(res => this.props.loggedIn(res.data))
    .catch(err => this.setState({invalid: err.response.data.error.message}));
  }

  render() {
    let {username, password, invalid} = this.state;
    return (
      <div className = 'container loginForm'>
        {invalid ? <p class="incorrectLogin"> {invalid} </p> : null}
        <div className = 'panel panel-default'>
          <div className = 'panel-heading'>
            <h2 className = 'panel-title'> Log In Here </h2>
          </div>
          <div className = 'panel-body'>
            <form onSubmit={this.handleSubmit}>
              <div className = 'form-group'>

                <div>
                  <input type="text"
                         className="form-control"
                         name='username'
                         placeholder="username"
                         value={username}
                         required={true}
                         onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className = 'form-group'>

                <div>
                  <input type="password"
                         className="form-control"
                         name='password'
                         placeholder="password"
                         value={password}
                         required={true}
                         onChange={this.handleChange}
                  />
                </div>
              </div>
              <button type='submit' className='submit btn btn-def btn-block'> Log In </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
