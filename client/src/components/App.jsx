import React from 'react';
import axios from 'axios';
import GameMenu from './GameMenu.jsx';
import FriendsList from './FriendsList.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div>
        <GameMenu />
        <FriendsList />
      </div>
    )
  }
}