import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import GamesList from './GamesList.jsx';

export default function GamesModal(props) {
  return (
    <Modal show={props.show} size="xl" centered="true">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Game Type: {props.type}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{'maxHeight': 'calc(50vh - 100px)', 'overflowY': 'auto'}} >
        <GamesList type={props.type} handleClick={props.handleClick} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}