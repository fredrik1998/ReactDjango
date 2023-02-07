import React, { useState } from 'react';
import { NavDropdown, Modal, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const LogoutConformation = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <NavDropdown.Item onClick={handleShow}>
      Logout
    </NavDropdown.Item>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to log out?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="primary" onClick={logOutHandler}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
};
  

export default LogoutConformation