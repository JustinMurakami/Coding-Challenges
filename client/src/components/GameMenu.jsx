import React from 'react';
import { Modal } from 'react-bootstrap';
import GamesModal from './GamesModal.jsx';

export default class GameMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      modalShow: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //on click handler to show modal
  handleClick(e) {
    const { modalShow } = this.state;
    if (modalShow === false) {
      this.setState({
        type: e.target.innerText,
        modalShow: true
      })
    } else {
      this.setState({
        modalShow: false
      })
    }
  }

  render() {
    const modalShow = this.state.modalShow;
    let modal;
    if (modalShow) {
      modal = <GamesModal show={this.state.modalShow} type={this.state.type} handleClick={() => {this.handleClick()}}/>
    } else {
      modal = null
    }
    return (
      <div>
        <h3 onClick={(e) => {this.handleClick(e)}} >Action</h3>
        <h3 onClick={(e) => {this.handleClick(e)}} >Adventure</h3>
        <h3 onClick={(e) => {this.handleClick(e)}} >Shooter</h3>
        <h3 onClick={(e) => {this.handleClick(e)}} >MMORPG</h3>
        {modal}
      </div>
    )
  }
}