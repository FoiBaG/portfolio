import React from 'react';
import ToggleTheme from './toggle-theme';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

function Header() {

    //HEADER
  return (
    <>
        <Navbar>
        <Container  className="navbar">
        <Button href='/projects'>Projects</Button>
            <ToggleTheme />
        </Container>
        </Navbar>
    </>
  );
}

export default Header;