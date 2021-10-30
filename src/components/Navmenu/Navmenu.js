import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navmenu.css';
// import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Navmenu = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="site-title">Trip Agency</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/packages">TourPackages</Nav.Link>
                            <Nav.Link as={Link} to="/gallery">TravelGallery</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {user?.email && <>
                                <Nav.Link as={Link} to="/addPackage">Add New Package</Nav.Link>
                                <Nav.Link as={Link} to="/myorder">MyOrder</Nav.Link>
                                <Nav.Link as={Link} to="/manageBooking">Manage All Bookings</Nav.Link> </>
                            }
                            {
                                user?.email && <span className="text-white mt-2 mx-3">{user?.displayName}</span>
                            }
                            {
                                user?.email ? <Button onClick={logOut} variant="outline-light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            {/* <Nav.Link href="/addPackage">Add New Package</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navmenu;