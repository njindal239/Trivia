import React, { Component } from 'react';
import TriviaDashboard from './TriviaDashboard';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component = {TriviaDashboard} />
          <Route path='/signup' exact component = {Signup} />
          <Route path='/login' exact component = {Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
