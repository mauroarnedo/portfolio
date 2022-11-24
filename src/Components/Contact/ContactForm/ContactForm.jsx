import React from "react";
import { Form } from "react-bootstrap";

function ContactForm() {
    return(
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
                <Form.Text muted>
                    Hey! If you could write your fullname to connect on linkedin :D or 
                    just your name properly it's ok but FanOfDBZBestShonen
                    please no.
                </Form.Text>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} />
            </Form.Group>
        </Form>
    )
};

export default ContactForm