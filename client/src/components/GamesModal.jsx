import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import GamesCarousel from './GamesCarousel.jsx';

export default function GamesModal(props) {
  return (
    <Modal show={props.show} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Game Type: {props.type}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GamesCarousel />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}