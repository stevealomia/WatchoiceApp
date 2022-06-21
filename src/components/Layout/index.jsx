import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const imageUrl = "https://images.unsplash.com/photo-1558505780-e7a9d70b4bab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1313&q=80"

export default function Layout() {
  return (
    <div>
      <Navbar />

      <div style={{backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', minHeight: '100vh'}}>
        <div className='container pt-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}