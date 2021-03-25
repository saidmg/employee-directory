import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="border-bottom border-light">
            <Navbar.Brand href="" style={{ cursor: "default" }}><strong>COMPANYLOGO</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/home" style={{
                        color: "white", paddingRight: ".5rem", paddingLeft: ".5rem", padding: ".5rem 1rem", display: "block"
                        , listStyle: "none", textDecoration: "None"
                    }}>Employees</Link>
                    <Link to="/about" style={{
                        color: "white", paddingRight: ".5rem", paddingLeft: ".5rem", padding: ".5rem 1rem", display: "block"
                        , listStyle: "none", textDecoration: "None"
                    }}>About</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
    )
}

export default NavBar;
