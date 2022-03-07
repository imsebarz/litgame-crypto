import React from 'react'
import { Button, Modal } from 'react-bootstrap';

const ModalLogin = ({ show, close }) => {
    return (
        <Modal show={show} centered>
            <Modal.Header closeButton>
                <Modal.Title>Log in first</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, You have to be logged to buy an NFT</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button variant="primary" onClick={close}>
                    Log in
                </Button>
            </Modal.Footer>
        </Modal>);
}

export default ModalLogin