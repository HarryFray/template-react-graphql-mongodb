import React, { Component } from 'react';
import { connect } from 'react-redux';

class Game extends Component {
  renderGames() {
    return this.props.games.map(game => {
      return (
        <li key={game.id}>{game.game}</li>
      )
    })
  }

  render() {
    return (
      <ul>
        {this.renderGames()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps)(Game)