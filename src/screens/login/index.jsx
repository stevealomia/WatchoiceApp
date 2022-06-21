import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginService } from '../../services'
import { AuthContext } from '../../context/AuthContext'

export default function LoginScreen() {
  const { setUser: setAuth } = useContext(AuthContext)
  const [user, setUser] = useState({})
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()

  function onChange(field) {
    return (event) => {
      setUser({
        ...user,
        [field]: event.target.value
      })
    }
  }

  async function onSubmit(event) {
    event.preventDefault()

    setLoading(true)
    try {
      const res = await loginService(user)
      if (res.error) {
        throw Error(res.error)
      }
      setAuth(res)
      navigate('/watches')
    } catch (err) {
      alert('Email or password is invalid')
      console.log('err', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-light">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange('email')} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-light">Password</label>
          <input type="password" className="form-control" id="password" onChange={onChange('password')} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Submit
        </button>
        <Link to="/register" className='btn btn-link'>
          Register
        </Link>
      </form>
    </div>
  )
}