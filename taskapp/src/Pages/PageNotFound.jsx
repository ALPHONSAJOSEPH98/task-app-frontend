import React from 'react'
import { Link } from 'react-router-dom'
function PageNotFound() {
  return (
    <div>
      <div className='border border-4 w-50 text-center mt-5 container'> <br />
        <h4>Page Not Found</h4> <br />
        <Link to={'/'}>
        <button className='btn tn-dark'>Go to Home</button>
        </Link>
         <br /><br /><br />
      </div>
    </div>
  )
}

export default PageNotFound