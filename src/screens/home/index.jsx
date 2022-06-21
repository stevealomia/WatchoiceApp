import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeScreen() {
  return (
    <div className="text-center">
      <h1 className="text-light mb-4" style={{ fontSize: '3.2rem' }}>Let us help you find your perfect watch</h1>
      <Link to="/register" className="btn btn-primary">
        Register
      </Link>
    </div>
  )
}