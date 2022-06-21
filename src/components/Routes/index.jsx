import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from '../Layout'
import LoginScreen from '../../screens/login'
import RegisterScreen from '../../screens/register'
import WatchesScreen from '../../screens/watches'
import FavoritesScreen from '../../screens/favorites'
import HomeScreen from '../../screens/home'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="/watches" element={<WatchesScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/favorites" element={<FavoritesScreen />} />
        </Route>
      </Routes>
    </Router>
  )
}