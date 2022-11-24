import React from "react";
import { Button, Modal } from "react-bootstrap";
import ContactForm from "./ContactForm/ContactForm";

function Contact(props){
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Hey, let's talk!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Send</Button>
                </Modal.Footer>

            </Modal> 
        </>
    );
};

export default Contact