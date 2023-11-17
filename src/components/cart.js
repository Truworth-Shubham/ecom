import React, { useContext } from 'react'
import { store } from '../context/cartContext'
import { useNavigate } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '../css/cartCard.css'
import CartCard from './cartCard';

const Cart = () => {

  const { cartData } = useContext(store)
  const navigate = useNavigate()

  let totalPrice = 0

  return (
    <>
      {
        cartData.length > 0 ?
          <div className='main-container'>
            {
              cartData.map((el, index) => {
                return (
                  <CartCard el={el} index={index} />
                )
              })
            }
            <div className='totalPrice-conatiner'>
              <div>Total Price</div>
              <div>
                $
                {
                  cartData.map((element) => {
                    return totalPrice += element.qty * element.price
                  })
                }
              </div>
              <Button variant='primary' onClick={() => navigate("/")}>Buy Now</Button>
            </div>
          </div>
          :
          <div className='productPage-loader'>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ShoppingCartCheckoutIcon sx={{ fontSize: '3rem', display: 'block', textAlign: 'center', color: '#61dafb' }} />
              <h3>Cart is empty</h3>
            </Box>
          </div>
      }
    </>
  )
}

export default Cart