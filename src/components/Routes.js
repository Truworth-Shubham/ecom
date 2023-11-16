import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Products from './Products';
import Cart from './cart';
import Navbar from './Navbar'

const RoutesPage = () => {
   
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/cart' element={<Cart/>} />
    </Routes>
    </>
  )
}

export default RoutesPage