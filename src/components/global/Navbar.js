import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../images/logo.png'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';



export default function navbar () {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Navbar.Brand href="/"><img src={logo} alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className="px-5 text-uppercase text-dark" href="/">Home</Nav.Link>
                        <Nav.Link className="px-5 text-uppercase text-dark" href="/about">About</Nav.Link>
                        <NavDropdown className="px-5 text-uppercase text-dark" title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/glasstop">Glasstop Stoves</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/steel">Stainless Steel Stoves</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="px-5 text-uppercase text-dark" href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )}


