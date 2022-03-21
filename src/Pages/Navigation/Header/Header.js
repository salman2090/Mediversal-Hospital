import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar bg="success" variant="dark" sticky="top" collapseOnSelect expand="lg" className="p-3 header-font">
                <Container>
                    {/* <img src={} alt="" /> {' '}&emsp; */}
                    <Navbar.Brand className="fs-3" href="#home">Mediversal Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="text-dark fs-5" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="text-dark fs-5">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#departments" className="text-dark fs-5">Departments</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors" className="text-dark fs-5">Doctors</Nav.Link>
                        {/* <Nav.Link as={Link} to="/about" className="text-dark fs-5">About Us</Nav.Link> */}
                        <Nav.Link as={Link} to="/login" className="text-dark fs-5">Login</Nav.Link>
                        
                        
                        {/* <Nav.Link as={Link} to="/contact" className="text-dark fs-5">Contact Us</Nav.Link> */}
                        {/* {
                            user.email ?
                            <Nav.Link as={Link} to="/dashboard" className="text-dark fs-5">Dashboard</Nav.Link>
                            :
                            null
                        }
                        <Navbar.Text>
                         <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        {
                            user.email ? 
                            <Button onClick={logOut} variant="light" className="text-dark fs-5">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/login" className="text-dark fs-5">Login</Nav.Link>
                        } */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;