import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = props => {

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid className="px-5">
                <Navbar.Brand className="main-logo user-select-none col-lg-6">ishakcoban</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/" className="d-flex justify-content-center">ANASAYFA</Nav.Link>
                        <Nav.Link href="#link" className="d-flex justify-content-center">ÇİZİMLER</Nav.Link>
                        <Nav.Link href="#link" className="d-flex justify-content-center">FOTOĞRAFLAR</Nav.Link>
                        <Nav.Link href="#link" className="d-flex justify-content-center">HAKKINDA</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}

export default Header; 