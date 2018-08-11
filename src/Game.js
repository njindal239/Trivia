import React, {Component} from 'react';
import TriviaDashboard from './TriviaDashboard';
import GameLife from './GameLife';
import Leaderboard from './Leaderboard';
import './Game.css';

const GAME_TYPE = {
  NEW_GAME: 0,
  FAVORITES_GAME: 1,
  GAME_LIFE: 2,
  LEADERBOARD: 3
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.newGame = this.newGame.bind(this);
    this.favoritesGame = this.favoritesGame.bind(this);
    this.goHome = this.goHome.bind(this);
    this.gameLife = this.gameLife.bind(this);
    this.leaderboard = this.leaderboard.bind(this);
    this.state = {
      gameType: null
    }
  }

  goHome() {
    this.setState({gameType: null});
  }

  newGame() {
    this.setState({gameType: GAME_TYPE.NEW_GAME});
  }

  favoritesGame() {
    this.setState({gameType: GAME_TYPE.FAVORITES_GAME});
  }

  gameLife() {
    this.setState({gameType: GAME_TYPE.GAME_LIFE});
  }

  leaderboard() {
    this.setState({gameType: GAME_TYPE.LEADERBOARD});
  }

  render() {
    const {gameType} = this.state;
    let componentToRender = null;
    if (gameType === null) {
      componentToRender =
      <div className='buttons'>
        <button className='box' onClick={this.newGame}> Play New Game </button>
        <button className='box' onClick={this.favoritesGame}> Favorites Quiz </button>
        <button className='box' onClick={this.gameLife}> Check Game Life </button>
        <button className='box' onClick={this.leaderboard}> LeaderBoard </button>
      </div>
    } else if (gameType === GAME_TYPE.NEW_GAME) {
      componentToRender = <TriviaDashboard className='TriviaDashboard'
                                           user={this.props.user}
                                           favGame={false}
                                           goHome={this.goHome}
      />
    } else if (gameType === GAME_TYPE.FAVORITES_GAME) {
      componentToRender = <TriviaDashboard className='TriviaDashboard'
                                           user={this.props.user}
                                           favGame={true}
                                           goHome={this.goHome}
      />
    } else if (gameType === GAME_TYPE.GAME_LIFE) {
      componentToRender = <GameLife user={this.props.user}/>
    } else if (gameType === GAME_TYPE.LEADERBOARD) {
      componentToRender = <Leaderboard user={this.props.user}/>
    }
    return (
      <div className = 'container'>
        {componentToRender}
      </div>
    );
  }
}

export default Game;
