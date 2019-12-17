import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

export default function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color='dark' dark expand='sm' className='mb-5'>
        <Container>
          <NavbarBrand href='/'>Prisoner Sentences</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link href='/'><a>Home</a></Link>
              </NavItem>
              <NavItem>
                <Link href='/about'><a>About</a></Link>
              </NavItem>
              <NavItem>
                <Link href='/contact'><a>Contact</a></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <style jsx>{`
        a {
          text-decoration: none;
          color: white;
          margin: 0 12px;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}
