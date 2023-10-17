import React from 'react'
import { Link } from 'react-router-dom'
import "./Admin/home.css"
export default function Header() {
    
  return (
    <div className=' text-dark container-fluid headerbg'>
      <div className='row '>
        <div className='col-md-4'>
      <h2><span className='text-success'>My</span>Care</h2>
      </div>
      <div className='col-md-8'>
        <ul className='nav'>
        <ul className='nav'>
          <li><Link to='/'  className='nav-link text-dark'>Home</Link></li>
          <li><Link to='/features'  className='nav-link text-dark'>Features</Link></li>
          <li><Link to='/speciality'  className='nav-link text-dark'>Speciality</Link></li>
          <li><Link to='/login'  className='nav-link text-dark'>Login</Link></li>
        </ul>
        </ul>
      </div>
      </div>
    </div>
  )
}
