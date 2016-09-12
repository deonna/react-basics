// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

// Components
import PlayerMocks from './components/PlayerMocks';
import Scoreboard from './components/Scoreboard';

// Styles
import './css/style.css'

ReactDOM.render(<Scoreboard initialPlayers={PlayerMocks.PLAYERS} />, document.getElementById('container'));
