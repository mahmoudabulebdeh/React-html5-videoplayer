import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from '../assets/images/logo.png';
import '../styles/mainComponent.css';

const Header = props => {
  return (
    <Navbar color="light" light expand="md">
      <div className="container">
        <NavbarBrand href="/">
          <img src={logo} className="Main-logo" alt="logo" />
          {' HTML5 video player'}
        </NavbarBrand>
      </div>
    </Navbar>
  );
};

export default Header;
