import React, {Component} from 'react';
import axios from 'axios';
import './Signup.css';

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
        <div className = 'container signupForm'>
          {error ? <p> {error} </p> : null}
          <div className = 'panel panel-default'>
            <div className = 'panel-heading'>
              <h2 className = 'panel-title'> Register Here </h2>
            </div>
            <div className = 'panel-body'>
              <form onSubmit={this.handleSubmit}>
                <div className = 'form-group'>
                  <div>
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
                  <div>
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
                  <div>
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
                <button type='submit' className='btn btn-def btn-block'> Sign Up </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default Signup;
