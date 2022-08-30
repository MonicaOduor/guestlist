import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar  navbar-expand-lg text-center py-2'>
        <Link to='/' className='navbar-brand  ml-5'>
          <h1 className='title'>Guest List</h1></Link>
          
       {/* <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link to = '/' className='navbar-brand ml-5'>Contact App</Link>
            </li>
       </ul> */}
    </nav>
  )
}

export default Navbar