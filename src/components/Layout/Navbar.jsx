import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { logoutService } from '../../services'

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext)

  async function logout() {
    await logoutService()
    setUser(null)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className='nav-link'>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/watches" className='nav-link'>
                Watches
              </Link>
            </li>
            {
              !!user && (
                <li className="nav-item">
                  <Link to="/favorites" className='nav-link'>
                    Favorites
                  </Link>
                </li>
              )
            }
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0">
            {
              user ? (
                <li className="nav-item">
                  <a href="#" className='nav-link' onClick={logout}>
                    Logout
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className='nav-link'>
                    Login
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}