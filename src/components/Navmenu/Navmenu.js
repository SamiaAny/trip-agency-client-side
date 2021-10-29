import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navmenu.css';

const Navmenu = () => {
    return (
        <div>
            <Navbar collapseOnSelect bg="" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="site-title">Trip Agency</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/packages">TourPackages</Nav.Link>
                            <Nav.Link href="">Login</Nav.Link>
                            <Nav.Link href="">MyOrder</Nav.Link>
                            <Nav.Link as={Link} to="/manageBooking">Manage All Bookings</Nav.Link>
                            <Nav.Link href="/addPackage">Add New Package</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navmenu;