import React from 'react'
import { Link } from 'react-router-dom'
import "./Admin/home.css"

export default function P_Header() {
    
  function logout(){
      localStorage.clear();
      window.location.href="/"
  }
    
  return (
    <div>
    <div className=' text-dark container-fluid headerbg'>
      <div className='row '>
        <div className='col-md-4'>
      <h2><span className='text-success'>My</span>Care</h2>
      </div>
      <div className='col-md-8'>
        <ul className='nav'>
          <li><Link to='/'  className='nav-link text-dark'>Home</Link></li>
          <li><Link to='/'  className='nav-link text-dark'>Features</Link></li>
          <li><Link to='/'  className='nav-link text-dark'>Speciality</Link></li>
          <li><Link to='/'  className='nav-link text-dark'onClick={logout}>LogOut</Link></li>
        </ul>
      </div>
      </div>
    </div>
    </div>
  )
}
