import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <img
            src='images/Sky Group Logo.png'
            alt='Logo'
            width='112'
            height='28'
          />
        </Link>

        <Link
            to="/"
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='myNavbar'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </Link>
      </div>

      <div id='myNavbar' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        
        <div className="">

        
        
        <div className='navbar-end'>
          <div className='navbar-item'>
            <Link to='/register' className='navbar-item'>
              Register
            </Link>
            <Link to='/login' className='navbar-item'>
              Login
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
                            <span className="navbar-link">Admin</span>
                                <div className="navbar-dropdown is-right">
                                    <NavLink className="navbar-item" to="/admin/trainingSchedule" onClick={(event) => { event.target.blur(); }}>
                                        Training Schedule
                                    </NavLink>
                                    <NavLink className="navbar-item" to="/admin/clients" onClick={(event) => { event.target.blur(); }}>
                                        Clients
                                    </NavLink>
                                    <NavLink className="navbar-item" to="/" onClick={(event) => { event.target.blur(); }}>
                                        Associates
                                    </NavLink>
                                    <NavLink className="navbar-item" to="/" onClick={(event) => { event.target.blur(); }}>
                                        Staff
                                    </NavLink>
                                    <NavLink className="navbar-item" to="/" onClick={(event) => { event.target.blur(); }}>
                                        Students
                                    </NavLink>
                                    <NavLink className="navbar-item" to="/"onClick={(event) => { event.target.blur(); }}>
                                        Library
                                    </NavLink>
                                    <hr/>
                                    <NavLink className="navbar-item" to="/admin/expertise" onClick={(event) => { event.target.blur(); }}>
                                        Expertise
                                    </NavLink>
                                    <NavLink className="navbar-item" to="/admin/operations" onClick={(event) => { event.target.blur(); }}>
                                        Operations
                                    </NavLink>
                                    <NavLink className="navbar-item" to="/" onClick={(event) => { event.target.blur(); }}>
                                        ---
                                    </NavLink>
                                    <NavLink className="navbar-item" to="/" onClick={(event) => { event.target.blur(); }}>
                                        ---
                                    </NavLink>
                                </div>
                        </div>
          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}