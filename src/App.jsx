import React from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Tracking from './pages/Tracking'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/tracking' element={<Tracking />} />
      </Routes>
    </Router>
  )
}
