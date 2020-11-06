import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import GamesModal from './GamesModal.jsx';

export default class GameMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      modalShow: false
    };
    this.handleClickGamesModal = this.handleClickGamesModal.bind(this);
  }

  //on click handler to show modal
  handleClickGamesModal(e) {
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
    //styled components
    const StyledGameMenuContainer = styled.div`
      position: absolute;
      width: 464px;
      height: 520px;
      left: 55px;
      top: 21px;

      background: linear-gradient(180deg, #3B0069 0%, rgba(255, 255, 255, 0) 100%), #2853A5;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
    `;

    //conditional render modal
    const modalShow = this.state.modalShow;
    let modal;
    if (modalShow) {
      modal = <GamesModal show={this.state.modalShow} type={this.state.type} handleClickGamesModal={this.handleClickGamesModal}/>
    } else {
      modal = null
    }

    return (
      <div>
        <h3 onClick={(e) => {this.handleClickGamesModal(e)}} >Action</h3>
        <h3 onClick={(e) => {this.handleClickGamesModal(e)}} >Adventure</h3>
        <h3 onClick={(e) => {this.handleClickGamesModal(e)}} >Shooter</h3>
        <h3 onClick={(e) => {this.handleClickGamesModal(e)}} >MMORPG</h3>
        {modal}
      </div>
    )
  }
}