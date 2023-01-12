import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../style/navbar.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' sticky light className="navtop">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href='/'>
            <img
              src='../ZoomLogo.png'
              height='25'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className='d-flex flex-wrap justify-content-md-end align-items-center h-100% gap-2'>         
      <Link to="/signin"><MDBBtn className='signin'>Sign In</MDBBtn></Link>
      <Link to="/signup"><MDBBtn className='signup'>SIGN UP, IT'S FREE</MDBBtn></Link>
            </MDBNavbarNav>
            
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}