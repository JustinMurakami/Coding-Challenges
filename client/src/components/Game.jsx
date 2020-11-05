import React from 'react';

export default function Game(props) {
  return (
    <div>
      <img src={props.game.coverImage} />
      <h3>{props.game.gameName}}</h3>
    </div>
  )
}

<a href="https://imgur.com/otlQznY"><img src="https://i.imgur.com/otlQznY.jpg" title="source: imgur.com" /></a>