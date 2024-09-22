import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src=''
              height='30'
              alt=''
              loading='lazy'
            />
            
            <h3 className='text-light'>Task Manager</h3>
            
            
          </MDBNavbarBrand>
          
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header