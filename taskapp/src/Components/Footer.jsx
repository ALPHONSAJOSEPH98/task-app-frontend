import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div className='mt-5'> 
      <MDBFooter className='text-center text-white bg-primary' >
    <MDBContainer className='pt-4'>
      <section className='mb-4'>
        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-light m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fab fa-facebook-f' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-light m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-twitter' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-light m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-google' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-light m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-instagram' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-light m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-linkedin' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-light m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-github' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2024 Copyright:
      <a className='text-light' href='/'>
        Taskmanager.com
      </a>
    </div>
  </MDBFooter></div>
  )
}

export default Footer