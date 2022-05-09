import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section error-page'>
      <div className="error-container">
        <h2>Oops!! It's a dead end.</h2>
        <Link to='/' className='btn btn-primary'>Back to home</Link>
      </div>
    </section>
  )
}

export default Error
