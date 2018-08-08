import React, {Component} from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      username: "",
      email: "",
      password: "",
      error: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let {firstName, lastName, age, username, email, password} = this.state;
    const url = "http://localhost:3001/register";
    axios.post(url, {firstName, lastName, age, username, email, password})
    .then(res => this.props.loggedIn(res.data))
    .catch(err => this.setState({error: err.response.data.error.message}));
  }

  render() {
    let {firstName, lastName, age, username, email, password, error} = this.state;
    return (
      <div className = 'container'>
        {error ? <p> {error} </p> : null}
        <div className = 'panel panel-primary'>
          <div className = 'panel-heading'>
            <h2 className = 'panel-title'> Register Here </h2>
          </div>
          <div className = 'panel-body'>
            <form onSubmit={this.handleSubmit} className = 'form-horizontal'>
              <div className = 'form-group'>
                <label className="col-sm-2 control-label">First Name</label>
                <div className="col-sm-10">
                  <input type="text"
                         className="form-control"
                         name='firstName'
                         placeholder="First Name"
                         value={firstName}
                         required={true}
                         onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className = 'form-group'>
                <label className="col-sm-2 control-label">Last Name</label>
                <div className="col-sm-10">
                  <input type="text"
                         className="form-control"
                        name='lastName'
                        placeholder="Last Name"
                        value={lastName}
                        required={true}
                        onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className = 'form-group'>
                <label className="col-sm-2 control-label">Age</label>
                <div className="col-sm-10">
                  <input type="Number"
                         className="form-control"
                         name='age'
                         placeholder="Age"
                         value={age}
                         required={true}
                         onChange={this.handleChange}
                  />
                </div>
              </div>
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
                <label className="col-sm-2 control-label">Email</label>
                <div className="col-sm-10">
                  <input type="email"
                         className="form-control"
                         name='email'
                         placeholder="Email"
                         value={email}
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
              <button type='submit' className='btn btn-primary'> Sign Up </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
