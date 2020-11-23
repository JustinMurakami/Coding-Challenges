import React from 'react';
import axios from 'axios';
import GameMenu from './LeftModule/GameMenu.jsx';
import FriendsAndTeams from './RightModule/FriendsAndTeams.jsx';
import styled from 'styled-components';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render () {
    //styled components

    return (
      <div>
        <GameMenu />
        {/* <StyledMiddleBlock>Middle Block</StyledMiddleBlock> */}
        <FriendsAndTeams />
      </div>
    )
  }
}