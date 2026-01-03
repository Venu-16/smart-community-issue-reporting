import { useState } from 'react'
import './App.css'
import React from 'react'
import Register from "./pages/Register"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h>Smart Community Issue reporting</h>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
