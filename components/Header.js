import React from 'react';

// Components
import Stats from './stats';
import Stopwatch from './stopwatch';

function Header(props) {
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>{props.title}</h1>
      <Stopwatch />
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
};

export default Header;
