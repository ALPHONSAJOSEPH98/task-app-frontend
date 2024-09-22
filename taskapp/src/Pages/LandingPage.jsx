import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <div className='  justify-content-evenly'>
        <img className='w-100'   height={490} src="https://img.freepik.com/premium-vector/business-woman-is-chasing-time-company-deadlines-trending-concept-flat-illustration_720185-1320.jpg" alt="" /> 
       
        <div className='text-center '>
          <Link to={'home'}>
          <button className='btn btn-primary '>Get Started</button>
          </Link>
        
        </div>
        
      </div>
    </div>
  )
}

export default LandingPage