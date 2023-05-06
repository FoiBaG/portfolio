import React from 'react';
import ToggleTheme from './toggle-theme';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

    //HEADER
  return (
    <>
        <Navbar>
        <Container  className="navbar">
            <ToggleTheme />
        </Container>
        </Navbar>
    </>
  );
}

export default Header;