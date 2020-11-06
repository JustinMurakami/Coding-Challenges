import React from 'react';
import axios from 'axios';
import GameMenu from './GameMenu.jsx';
import FriendsAndTeams from './FriendsAndTeams.jsx';
import styled from 'styled-components';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render () {
    //styled components
    const StyledModuleContainer = styled.div`
      max-width: 1400px;
      margin-bottom: 36px;
      margin-right: auto;
      margin-left: auto;
      @media only screen and (min-width: 640px) {
        padding-left: 24px;
        padding-right: 24px;
      }
      @media only screen and (min-width: 900px) {
        padding-left: 30px;
        padding-right: 30px;
      }
    `;

    const StyledMiddleBlock = styled.div`
      position: absolute;
      width: 993px;
      height: 520px;
      left: 550px;
      top: 21px;

      background: linear-gradient(180deg, #480091 0%, rgba(255, 255, 255, 0) 100%), #2853A5;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
    `;

    return (
      <div>
        <GameMenu />
        {/* <StyledMiddleBlock>Middle Block</StyledMiddleBlock> */}
        <FriendsAndTeams />
      </div>
    )
  }
}