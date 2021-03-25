import React from "react";
import { Link } from "react-router-dom"
import "./style.css";
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
                <Nav>
                    <Nav.Link href="#deets">Sort By Name</Nav.Link>
                    <Nav.Link href="">|</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Filter By Gender
            </Nav.Link>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        // <ul>
        //     <li>
        //         <Link to="/about">About</Link>
        //     </li>
        //     <li>
        //         <Link to="/home">Home</Link>
        //     </li>
        //     {/* <li>
        //         <Link to="/error404">Error 404</Link>
        //     </li> */}
        // </ul>


    )
}

export default NavBar;
