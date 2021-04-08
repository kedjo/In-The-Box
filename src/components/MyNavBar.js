import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import "../res/bootstrap/css/bootstrap.min.css";
import { Clock } from "./Clock";

export const MyNavBar = () => {
    return (
        <>
            <Navbar expand="lg">
                <Navbar.Brand href="/"><h1 className="nav-title">Kedjo.</h1></Navbar.Brand>
                <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav" />
                <Clock />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="nav-searchbar">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/learning">Learning</Nav.Link>
                        <Nav.Link href="/news#news-apod">Outside The Box</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
