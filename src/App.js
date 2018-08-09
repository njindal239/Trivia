import React, { Component } from 'react';
import Game from './Game';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Hi");
    this.state = {
      isAuthenticated: false,
      user: {}
    };
    this.loggedIn = this.loggedIn.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    // this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.setState({
      isAuthenticated: sessionStorage.getItem('isAuthenticated') || false,
      user: JSON.parse(sessionStorage.getItem('user')) || {}
    });
  }

  loggedIn(user) {
    this.setState({isAuthenticated: true, user: user});
    sessionStorage.setItem('isAuthenticated', true);
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  // logout() {
  //   this.setState({isAuthenticated: false, user: {}});
  //   sessionStorage.setItem('isAuthenticated', false);
  //   sessionStorage.setItem('user', JSON.stringify({}));
  // }

  isLoggedIn = () => {
    return this.state.isAuthenticated;
  }

  render() {
    return (
      <div className="App">
        {this.isLoggedIn() ?
          <div>
            <Link to='/'> Game Dashboard </Link>
            <Link to='/logout'> Logout </Link>
          </div> :
          <div>
            <Link to='/login'> Login </Link>
            <Link to='/signup'> Sign Up </Link>
          </div> }
        <Switch>
          <Route path='/' exact render = {props => (
            this.isLoggedIn() ?
              <Game {...props} user={this.state.user} /> :
              <Redirect to='/login' />
          )} />
          <Route path='/signup' exact render = {props => (
            !this.isLoggedIn() ?
              <Signup {...props} loggedIn={this.loggedIn} /> :
              <Redirect to='/' />
          )} />
          <Route path='/login' exact render = {props => (
            !this.isLoggedIn() ?
              <Login {...props} loggedIn={this.loggedIn} /> :
              <Redirect to='/' />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
