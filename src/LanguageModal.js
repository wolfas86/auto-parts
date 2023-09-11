// LanguageModal.js
import React from 'react';
import { Button, Modal, NavDropdown } from 'react-bootstrap';

const LanguageModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Kalbos pasirinkimas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NavDropdown.Item href="#en">English</NavDropdown.Item>
        <NavDropdown.Item href="#lt">Lietuvių</NavDropdown.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Uždaryti
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LanguageModal;
