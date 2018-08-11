import React, {Component} from 'react';
import axios from 'axios';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    let url = 'http://localhost:3001/users';
    axios.get(url)
    .then(res => res.data)
    .then(data => console.log(data))
    .catch(err => console.log(err.response.data.error));
  }

  render() {
    return (
      <h1> Welcome to the leaderboard page </h1>
    );
  }
}

export default Leaderboard;
