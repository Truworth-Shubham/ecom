import React, { useContext, useState, useEffect, useRef } from 'react'
import '../css/card.css'
import TextRating from './Rating'
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { store } from '../context/cartContext'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { Snackbar } from '@mui/material';

const ProductCard = ({ id, data }) => {

  const { cartData, setCartData } = useContext(store)
  const [alertOpen, setAlertOpen] = useState(false)
  const cartBtnRef = useRef(false)

  useEffect(() => {
    if (cartData.find((e) => e.id == data.id)) {
      cartBtnRef.current.innerText = "in cart"
      cartBtnRef.current.setAttribute("disabled", true)
      cartBtnRef.current.style.background = "gray"
    }
  }, [cartBtnRef])

  const addCart = () => {
    setCartData([...cartData, data])
    setAlertOpen(true)
    cartBtnRef.current.innerText = "in cart"
    cartBtnRef.current.setAttribute("disabled", true)
    cartBtnRef.current.style.background = "gray"
  }

  const handleClose = () => setAlertOpen(false)

  const action = (
    <>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )

  return (

    <div className='cardContainer' key={id}>
      <div>
        <div className='card-image'>
          <img src={data.image} width='200px' alt='404 not found' />
        </div>
        <h4>{data.title}</h4>
        <p className='productCard-description'>{data.description}</p>
        <div>
          <p><span>price: $ </span>{data.price}</p>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Rating :</span> <TextRating count={data.rating.rate} /></p>
          <p><span>reviews: </span>{data.rating.count}</p>
        </div>
      </div>
      <Button style={{ width: '100%' }} ref={cartBtnRef} variant="contained" startIcon={<ShoppingCartCheckoutIcon />} onClick={addCart}>
        ADD TO CART
      </Button>
      <Snackbar
        open={alertOpen}
        message="successfully added to cart"
        action={action}
        ContentProps={{
          sx: {
            background: "green"
          }
        }}
      />
    </div>

  )
}

export default ProductCard