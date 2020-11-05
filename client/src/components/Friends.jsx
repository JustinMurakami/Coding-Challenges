import React from 'react';

export default class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendToHighlight: [],
      friendShow: false
    };
  }

  handleClickFriendDetail(e) {
    this.setState({
      friendToHighlight: e.target.value,
      friendShow: true
    })
  }

  render() {
    const { friends } = this.props;
    const friendsBlocks = friends.map((friend) => {
      return <FriendBlock key={friend.ID} friend={friend} handleClickFriendDetail={() => {this.handleClickFriendDetail()}}/>
    })
    return(
      <div>
        {friendsBlocks}
      </div>
    )
  }
}