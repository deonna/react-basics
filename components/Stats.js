import React from 'react';

function Stats(props) {
  let totalPlayers = props.players.length;
  let totalScore = props.players.reduce((total, player) => {
    return total + player.score;
  }, 0)

  return (
    <table className="stats">
      <thead>
      </thead>
      <tbody>
        <tr>
          <td>Players: </td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total: </td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  players: React.PropTypes.array.isRequired,
};

export default Stats;
