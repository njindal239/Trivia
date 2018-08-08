import React, {Component} from 'react';
import axios from 'axios';

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
      <div className = 'container'>
        {invalid ? <p> {invalid} </p> : null}
        <div className = 'panel panel-primary'>
          <div className = 'panel-heading'>
            <h2 className = 'panel-title'> Log In Here </h2>
          </div>
          <div className = 'panel-body'>
            <form onSubmit={this.handleSubmit} className = 'form-horizontal'>
              <div className = 'form-group'>
                <label className="col-sm-2 control-label">Username</label>
                <div className="col-sm-10">
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
                <label className="col-sm-2 control-label">Password</label>
                <div className="col-sm-10">
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
              <button type='submit' className='btn btn-primary'> Log In </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
