import React from "react";

import "./navbar.css";
import Crown from "../img/crown.png";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
function NavBar() {
  return (
    // <Navbar  expand='lg'></Navbar>
    <Navbar expand='lg'>
      <Container fluid>
        <Navbar.Brand className='nav_header' href='#home'>
          <img
            alt='img'
            src={Crown}
            width='80'
            height='70'
            className='d-inline-block align-middle'
          />
          Grand Hotel
        </Navbar.Brand>

        <Navbar.Toggle className='toggleButton' aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2 navForm'
              aria-label='Search'
            />
          </Form>
          <Nav className='ms-auto my-2 my-lg-0 nav_links' navbarScroll>
            <Nav.Link className='nav_link' href='#action1'>
              About us
            </Nav.Link>
            <Nav.Link className='nav_link' href='#action2'>
              Event
            </Nav.Link>

            <Nav.Link className='nav_link' href='#'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
