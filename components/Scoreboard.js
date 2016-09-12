import React from 'react';

// components
import AddPlayerForm from './AddPlayerForm';
import Header from './Header';
import Player from './Player';
import PlayerMocks from './PlayerMocks';

const Scoreboard = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    initialPlayers: React.PropTypes.arrayOf(
      React.PropTypes.shape(
        {
          name: React.PropTypes.string.isRequired,
          score: React.PropTypes.number.isRequired,
          id: React.PropTypes.number.isRequired,
        }
      )
    ).isRequired,
  },

  getDefaultProps: function() {
    return {
      title: 'Scoreboard',
    };
  },

  getInitialState: function() {
      return {
        players: this.props.initialPlayers,
      };
  },

  onScoreChange: function(index, delta) {
    this.state.players[index].score += delta;
    let sortedPlayers = _.sortBy(this.state.players, ['score'])

    this.setState({
      players: sortedPlayers,
    });
  },

  onPlayerAdd: function(name) {
    this.state.players.unshift({
      name: name,
      score: 0,
      id: PlayerMocks.getUniqueId(),
    });
    this.setState(this.state);
  },

  onRemovePlayer: function(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  },

  render: function() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players} />

        <div className="players">
          {this.state.players.map((player, index) => {
            return (
              <Player
                onScoreChange={(delta) => {this.onScoreChange(index, delta);}}
                onRemove={() => {this.onRemovePlayer(index);}}
                name={player.name}
                score={player.score}
                key={player.id} />
            );
          }) }
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd}/>
      </div>
    );
  },
});

export default Scoreboard;
