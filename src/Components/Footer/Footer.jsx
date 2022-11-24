import React from "react";
import { Form, Image } from "react-bootstrap";

function Footer() {
    return(
        <div className="container d-flex flex-column align-items-center">
            <div className="d-flex justify-content-evenly">
                <a className="me-5 icon" href="https://github.com/mauroarnedo">
                    <Image className="icon" roundedCircle src="https://cdn.onlinewebfonts.com/svg/img_84836.png" alt="Github" />
                </a>
                <a className="me-5 icon" href="https://www.linkedin.com/in/mauro-arnedo/">
                    <Image className="icon" roundedCircle src="https://gartman.com/wp-content/uploads/2020/08/57-571935_linkedin-icon-vector-png-linkedin-circle-logo-transparent.jpg" alt="Linkedin" />
                </a>
                <a className="icon" href="mailto:mauro.arnedo7@gmail.com">
                    <Image className="icon" roundedCircle src="https://www.pngitem.com/pimgs/m/685-6853201_logo-computer-gmail-email-icons-free-png-hq.png" alt="Mail" />
                </a>
            </div>
            <br />
            <br />
            <Form.Text className="me-3">© 2022 Mauro Arnedo</Form.Text>
            <br />
            <br />
            <div>
                <a href="/#home">
                    <Image className="icon goUp" roundedCircle src="https://webstockreview.net/images/windows-arrow-png-4.png" alt="Home" />
                </a>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Footer;