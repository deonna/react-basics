import React from 'react';

function getUniqueId() {
  return _.toInteger(_.uniqueId());
}

let PlayerMocks = {
 getUniqueId: getUniqueId,

 PLAYERS: [
    {
      name: 'Deonna Hodges',
      score: 31,
      id: getUniqueId(),
    },
    {
      name: 'Hylinn Taggart',
      score: 33,
      id: getUniqueId(),
    },
    {
      name: 'Evelyn Hodges',
      score: 42,
      id: getUniqueId(),
    },
  ],
}

export default PlayerMocks;
