import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'

export const NavbarComponent = ({ loginName }) => {
    return (
        <div>
            <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Nav className="ms-auto" href="#memes">
        {loginName}
      </Nav>
    </Container>
  </Navbar>
</Container>
        </div>
    );
}
export default NavbarComponent;
