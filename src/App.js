import React, { Component } from 'react';
import TriviaDashboard from './TriviaDashboard';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: {}
    }
    this.loggedIn = this.loggedIn.bind(this);
  }

  loggedIn(user) {
    this.setState({isAuthenticated: true, user: user});
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component = {TriviaDashboard} />
          <Route path='/signup' exact render = {props => (
            <Signup {...props} loggedIn={this.loggedIn} />
          )} />
          <Route path='/login' exact render = {props => (
            <Login {...props} loggedIn={this.loggedIn} />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
