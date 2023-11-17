import React, { useContext } from 'react'
import TextRating from './Rating'
import { store } from '../context/cartContext'

const CartCard = ({ el, index }) => {

  const { cartData, setCartData } = useContext(store)

  const changeQty = (operator) => {
    const tempCart = [...cartData]
    const indexCart = tempCart.findIndex(item => item.id === el.id)
    if (operator === "add") {
      tempCart[indexCart].qty = tempCart[indexCart].qty + 1
      setCartData(tempCart)
    }
    else if (operator === "dec" && el.qty == 1) {
      setCartData(cartData.filter((e) => e.id !== el.id))
    }
    else {
      tempCart[indexCart].qty = tempCart[indexCart].qty - 1
      setCartData(tempCart)
    }
  }

  return (
    <>
      <div key={index} className='cart-container'>
        <div><img src={el.image} width='80px' height='100px' /></div>
        <div className='cart-content'>
          <h5>{el.title}</h5>
          <p><TextRating count={el.rating.rate} /></p>
          <div>
            <button onClick={() => changeQty("add")}>+</button>
            {el.qty}
            <button onClick={() => changeQty("dec")}>-</button>
          </div>
        </div>
        <div>
          <p>Price : {(el.qty * el.price).toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}

export default CartCard