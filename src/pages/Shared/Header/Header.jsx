import React from 'react';
import './Header.css'
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className="text-center mt-3">
                <img src={logo} alt="" />
                <p className='text-secondary' >
                    <small>Journalism Without Fear or Favour</small>
                </p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            {/* marquee  */}
            <div className='highlights'>
                <div className='d-flex'>
                    <Button className='latest' variant="danger">Latest</Button>
                    <Marquee className='' speed={100} delay={1} pauseOnHover={true} >
                        I can be a React component, multiple React components, or just some text.
                        <button className='see-more' size="sm">See Details</button>
                        I can be a React component, multiple React components, or just some text.
                        <button className='see-more' size="sm">See Details</button>
                    </Marquee>
                </div>
            </div>


            {/* Navbar */}
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto ">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button className='rounded-0 px-5' variant="dark">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;