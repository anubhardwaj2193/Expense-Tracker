import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

export default function HeaderSite() {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
   const dispatch = useDispatch()

   const navigate = useNavigate();

  function logoutHandler(event){
    event.preventDefault();
dispatch(authActions.loggedIn(false));
navigate('/login',{replace:true})

  }
  return (
    <>

<React.Fragment>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Expense Tracker</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem className='active'>
  <Link to='/' className='nav-link'>
    Login
  </Link>
</MDBNavbarItem>
{isLoggedIn && <MDBNavbarItem>
  <Link to='/expensetracker' className='nav-link'>
    Expenses
  </Link>
</MDBNavbarItem>}
{isLoggedIn &&<MDBNavbarItem>
  <Link to='/profile' className='nav-link'>
    Profile
  </Link>
</MDBNavbarItem>}
{isLoggedIn && <MDBNavbarItem>
  <Link to='/forgotpassword' className='nav-link'>
    Forgot Password
  </Link>
</MDBNavbarItem>}

{isLoggedIn && <MDBNavbarItem>
  <Button onClick={logoutHandler} className='nav-link'>
    logout
  </Button>
</MDBNavbarItem>}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <Outlet/>
      </React.Fragment>

    </>
  );
}