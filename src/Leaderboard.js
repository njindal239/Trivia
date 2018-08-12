import React, {Component} from 'react';
import './Leaderboard.css';
import axios from 'axios';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    let url = 'http://localhost:3001/users';
    axios.get(url)
    .then(res => res.data)
    .then(users => users.sort((a, b) => b.gameLife.net_points - a.gameLife.net_points))
    .then(users => this.setState({users: users}))
    .catch(err => console.log(err.response.data.error));
  }

  render() {
    console.log(this.state.users);
    let currentUserPosition = -1;
    let users = this.state.users
    .map((user, idx) => {
      if (user._id === this.props.user._id) {
        currentUserPosition = idx+1;
      }
      return (
        <tr key={user._id}>
          <td> {idx + 1} </td>
          <td> {user.firstName} {user.lastName} </td>
          <td> {user.gameLife.games_played} </td>
          <td> {user.gameLife.net_points} </td>
          <td> {user.gameLife.percentage} </td>
        </tr>
      );
    });
    return (
      <div>
        <h1> You are at position {currentUserPosition} in the global rankings </h1>
        <table>
          <thead>
            <tr>
              <th> Global Position </th>
              <th>  Name </th>
              <th> Games Played </th>
              <th> Net Points </th>
              <th> Percentage </th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>


    );
  }
}

export default Leaderboard;
