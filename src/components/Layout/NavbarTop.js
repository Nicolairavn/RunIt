import React from 'react';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import '../Layout/NavbarTop.css';

function NavbarTop() {
    return(
        <nav className="col-12 navbar navbar-expand-lg navbar-light p-0 m-0">
            <row id="links" className="col-lg-9 col-md-12">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav id="topnav" className="mr-auto">
                        <Nav.Link id="linkknap"  href="/Events">EVENTS</Nav.Link>
                        <Nav.Link id="linkknap"  href="#link">SPONSORE</Nav.Link>
                        <Nav.Link id="linkknap"  href="#link">OM RUNIT</Nav.Link>
                        <Nav.Link id="linkknap"  href="#link">KONTAKT OS</Nav.Link>
                        </Nav>
                        <Form inline>
                        <Button id="soegknap" className="mr-3">SØG</Button>    
                        <FormControl id="soegfelt" type="text" placeholder="" className="mr-sm-2 col-lg-8 col-md-10" />
                        </Form>
                    </Navbar.Collapse>
                </Navbar>  
            </row>
            <row id="NaesteLob" className="col-lg-3">
                <p>NÆSTE LØB - 55/70 PLADSER OPTAGET</p>
            </row>
            
        </nav>
    )
}

export default NavbarTop