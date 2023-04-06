import { FC, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export const AuthPage: FC = (): JSX.Element => {
    return (
        <>
            <Modal
                show={true}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
            </Modal>
        </>
    )
}