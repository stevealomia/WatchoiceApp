import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div>
      <Navbar />

      <div className='container pt-4'>
        <Outlet />
      </div>
    </div>
  )
}