import React from 'react';

export default class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      teamShow: false
    };
  }

  render() {

    return(
      <div>
        Teams
      </div>
    )
  }
}