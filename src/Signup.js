import React, {Component} from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      username: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {

  }

  handleSubmit() {

  }

  render() {
    return (
      <div class = 'container'>
        <div class = 'panel panel-primary'>
          <div class = 'panel-heading'>
            <h2 class = 'panel-title'> Register Here </h2>
          </div>
          <div class = 'panel-body'>
            <form onSubmit={this.handleSubmit} class = 'form-horizontal'>
              <div class = 'form-group'>
                <label class="col-sm-2 control-label">First Name</label>
                <div class="col-sm-10">
                  <input type="text"
                         class="form-control"
                         name='firstName'
                         placeholder="First Name"
                         onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class = 'form-group'>
                <label class="col-sm-2 control-label">Last Name</label>
                <div class="col-sm-10">
                  <input type="text"
                         class="form-control"
                        name='lastName'
                        placeholder="Last Name"
                        onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class = 'form-group'>
                <label class="col-sm-2 control-label">Age</label>
                <div class="col-sm-10">
                  <input type="Number"
                         class="form-control"
                         name='age'
                         placeholder="Age"
                         onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class = 'form-group'>
                <label class="col-sm-2 control-label">Username</label>
                <div class="col-sm-10">
                  <input type="text"
                         class="form-control"
                         name='username'
                         placeholder="username"
                         onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class = 'form-group'>
                <label class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                  <input type="email"
                         class="form-control"
                         name='email'
                         placeholder="Email"
                         onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class = 'form-group'>
                <label class="col-sm-2 control-label">Password</label>
                <div class="col-sm-10">
                  <input type="password"
                         class="form-control"
                         name='password'
                         placeholder="password"
                         onChange={this.handleChange}
                  />
                </div>
              </div>
              <button type='submit' class='btn btn-primary'> Sign Up </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
