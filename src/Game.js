import React, {Component} from 'react';
import TriviaDashboard from './TriviaDashboard';

const GAME_TYPE = {
  NEW_GAME: 0,
  FAVORITES_GAME: 1
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.newGame = this.newGame.bind(this);
    this.favoritesGame = this.favoritesGame.bind(this);
    this.state = {
      gameType: null
    }
  }

  newGame() {
    console.log("here");
    this.setState({gameType: GAME_TYPE.NEW_GAME});
  }

  favoritesGame() {
    this.setState({gameType: GAME_TYPE.FAVORITES_GAME});
  }

  render() {
    const {gameType} = this.state;
    let componentToRender = null;
    if (gameType === null) {
      componentToRender = [<button key='1' onClick={this.newGame}> Play New Game </button>,
      <button key='2' onClick={this.favoritesGame}> Play with Favorites </button>];
    } else if (gameType === GAME_TYPE.NEW_GAME) {

      componentToRender = <TriviaDashboard user={this.props.user} favGame={false} />
    } else if (gameType === GAME_TYPE.FAVORITES_GAME) {
      componentToRender = <TriviaDashboard user={this.props.user} favGame={true} />
    }
    return (
      <div>
        {componentToRender}
      </div>
    );
  }
}

export default Game;
