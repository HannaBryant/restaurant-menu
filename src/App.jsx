import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { OrderPage } from './pages/OrderPage'
import { Navbar } from './components/Navbar'
import { Chatbot } from './pages/Chatbot'


function App() {
  

  return (
    <>
    <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/OrderPage' element={<OrderPage />} />
          <Route path='/Chatbot' element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
