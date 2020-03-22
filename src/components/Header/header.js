import React from 'react';
import logo from '../../images/logo192.png';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";

const Head = () => {
    return (
        <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        src={logo}
                        height='40'
                        width='40'
                        alt='brand'
                        className='d-inline-block align-content-center'
                    />
                    React
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/content'>Content</Nav.Link>
                        <Nav.Link href='/faq'>FAQ</Nav.Link>
                        <Nav.Link href='/about'>AboutUs</Nav.Link>
                        <Nav.Link href='/card'>Card</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Head;