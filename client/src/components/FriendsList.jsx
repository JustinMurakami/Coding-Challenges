import React from 'react';
import Friends from './Friends.jsx';
import Teams from './Teams.jsx';

export default class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      teams: [],
      teamShow: false
    };
  }

  render() {
    const teamShow = this.state.teamShow;

    let team;
    const { friends, teams } = this.state;
    if (teamShow) {
      team = <Teams teams={teams}/>
    } else {
      team = <Friends friends={friends}/>
    };

    let friendsOrTeam;
    if (teamShow) {
      friendsOrTeam = 'Friends'
    } else {
      friendsOrTeam = 'Teams'
    };

    return (
      <div>
        <button>{friendsOrTeam}</button>
        {team}
      </div>
    )
  }
}