import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { registerService } from '../../services'

export default function RegisterScreen() {
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
      const res = await registerService(user)
      if (!res.id) {
        throw new Error(res.errors[0])
      }
      alert('Successfully register')
      setAuth(res)
      navigate('/watches')
    } catch (err) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-light">Name</label>
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={onChange('name')} />
        </div>
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
        <Link to="/login" className='btn btn-link'>
          Login
        </Link>
      </form>
    </div>
  )
}