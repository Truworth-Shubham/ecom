import React, { useContext,useEffect,useState } from 'react'
import { store } from '../context/cartContext'
import CircularProgress from '@mui/material/CircularProgress';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './cartCard.css'
import CartCard from './cartCard';

const Cart = () => {

    const {cartData} = useContext(store)
    let totalPrice = 0
    cartData.forEach((e)=>{
      totalPrice += e.qty*e.price
    })

    useEffect(()=>{console.log("cartData cart page")},[cartData])

  return (
    <>
    {
        cartData.length > 0 ? 
    <div className='main-container'>
        {
            cartData.map((el,index)=>{
                return (
                  <CartCard el={el} index={index} />
                )
            })
        }
        <div className='totalPrice-conatiner'>
          <div>Total Price</div>
          <div>
            ${totalPrice && totalPrice}
          </div>
          <Button variant='primary'>Buy Now</Button>
        </div>
    </div>
    :
    <div className='productPage-loader'>
    <Box sx={{ display: 'flex',flexDirection:'column',alignItems:'center' }}>
    <ShoppingCartCheckoutIcon sx={{fontSize:'3rem',display:'block',textAlign:'center',color:'#61dafb'}}/>
      <h3>Cart is empty</h3>
    </Box>
    </div>
    }
    </>
  )
}

export default Cart