import React from 'react';
import Friends from './Friends.jsx';
import Teams from './Teams.jsx';
import styled from 'styled-components';
import axios from 'axios';

export default class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      friends: [],
      teams: [],
      teamShow: false
    };
    this.getFriends = this.getFriends.bind(this);
    this.getTeams = this.getTeams.bind(this);
    this.handleClickFriendsOrTeamsButton = this.handleClickFriendsOrTeamsButton.bind(this);
  }

  //component did mount with get request for friends
  componentDidMount() {
    this.getFriends(this.state.userId)
  }

  //get request for friends
  getFriends(userId) {
    axios.get(`/getFriends/${userId}`)
      .then((results) => {
        this.setState({
          friends: results.data
        })
      })
  }

  //get request for teams
  getTeams(userId) {
    axios.get(`/getTeams/${userId}`)
      .then((results) => {
        this.setState({
          teams: results.data
        })
      })
  }

  //handleclick for teams and friends button
  handleClickFriendsOrTeamsButton() {
    //switch teamShow in state
    const { userId, teamShow } = this.state;
    if (!teamShow) {
      this.getTeams(userId);
      this.setState({
        teamShow: true
      });
    } else {
      this.getFriends(userId);
      this.setState({
        teamShow: false
      })
    }
  }

  render() {
    //styled components
    const StyledFriendsAndTeamsModule = styled.div`
      position: absolute;
      width: 297px;
      height: 520px;
      left: 1574px;
      top: 21px;

      background: linear-gradient(180deg, #530292 0%, rgba(255, 255, 255, 0) 100%), #2853A5;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5);
      border-radius: 22px;
    `;

    const StyledButtonContainer = styled.div`
      position: absolute;
      width: 173px;
      height: 91px;
      left: 1564px;
      top: 28px;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 21px;
      line-height: 25px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.015em;

      color: #FFFFFF;
    `;

    const StyledButton = styled.button`
      position: absolute;
      width: 116px;
      height: 47px;
      left: 1593px;
      top: 52px;

      background: linear-gradient(180deg, #B747FC 46.21%, rgba(255, 255, 255, 0) 146.21%), #1C2331;
      box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.5);
      border-radius: 65px;
    `;

    //conditionally render either teams or friends
    const { teamShow } = this.state;
    let teamsOrFriends;
    const { friends, teams } = this.state;
    if (teamShow) {
      teamsOrFriends = <Teams teams={teams}/>
    } else {
      teamsOrFriends = <Friends friends={friends}/>
    };

    let friendsOrTeamButton;
    if (teamShow) {
      friendsOrTeamButton = 'Friends'
    } else {
      friendsOrTeamButton = 'Teams'
    };

    return (
      <div>
        <button onClick={() => {this.handleClickFriendsOrTeamsButton()}}>{friendsOrTeamButton}</button>
        {teamsOrFriends}
      </div>
    )
  }
}