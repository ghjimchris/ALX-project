import React from 'react'
import { Hero, Navbar } from './components';
import './App.css'
import Login from './pages/Login';
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Login />
    </>
  )
}

export default App