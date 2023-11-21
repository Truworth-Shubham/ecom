import React from 'react'
import { Routes, Route } from "react-router-dom"
import ContextApi from './context/cartContext'
import Navbar from './components/Navbar'
import Products from './pages/Products';
import Cart from './pages/Cart';

const App = () => {

  return (
    <>
     <ContextApi>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </ContextApi>
    </>
  )
}

export default App