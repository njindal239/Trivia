import React, { Component } from 'react';
import Game from './Game';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: {}
    };
    this.loggedIn = this.loggedIn.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.setState({
      isAuthenticated: (sessionStorage.getItem('isAuthenticated') === "true"),
      user: JSON.parse(sessionStorage.getItem('user'))
    });
  }

  loggedIn(user) {
    this.setState({isAuthenticated: true, user: user});
    sessionStorage.setItem('isAuthenticated', true);
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    axios.post('http://localhost:3001/logout')
    .then(res => res.data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
    sessionStorage.setItem('isAuthenticated', false);
    sessionStorage.setItem('user', JSON.stringify({}));
    this.setState({isAuthenticated: false, user: {}});
  }

  isLoggedIn = () => {
    return this.state.isAuthenticated;
  }

  render() {
    return (
      <div className="App">
        <Navbar isLoggedIn={this.isLoggedIn} logout={this.logout}/>
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
