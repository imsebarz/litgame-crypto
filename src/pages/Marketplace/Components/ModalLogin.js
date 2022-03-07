import { useWeb3React } from '@web3-react/core';
import React, { useCallback, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { connector } from '../../../config/web3';

const ModalLogin = ({ show, close }) => {

    const { active, activate, deactivate, account, error, chanId } = useWeb3React()

    const Login = useCallback(() => {
        activate(connector)
        localStorage.setItem('previouslyConnected', true)
        close()
    }, [activate])

    useEffect(() => {
        if (localStorage.getItem('previouslyConnected') === "true")
            Login()
    }, [Login])


    const Logout = () => {
        deactivate()
        localStorage.removeItem('previouslyConnected')
    }


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
                <Button variant="primary" onClick={Login}>
                    Log in
                </Button>
            </Modal.Footer>
        </Modal>);
}

export default ModalLogin