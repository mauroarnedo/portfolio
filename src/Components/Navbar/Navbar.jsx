import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import './Navbar.css';

export default function NavbarHome() {
    return (
        <Navbar fixed="top" className="d-flex align-items-center justify-content-center customNavbar">
            <Nav variant="tabs" defaultActiveKey="#home">
                <Nav.Item>
                    <Nav.Link className="text-dark me-3" href='#home'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-dark me-3" href='#web'>Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-dark me-3" href='#skills'>Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-dark me-3" href='#about'>About</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
        
    );
};