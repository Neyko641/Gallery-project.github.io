import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import Logout from '../../Logout';
import { useUser } from '../../Context/user'

export const NavbarComponent = ({ loginName }) => {
const { user } = useUser();

    return (
        <div>
            <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
    {Object.keys(user).length ? <Logout/> : <></>}
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
