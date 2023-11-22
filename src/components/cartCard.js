import React, { useContext } from 'react'
import { Store } from '../context/CartContext'
import { Rate, Button } from 'antd'
import { PlusOutlined, MinusOutlined, DeleteFilled } from '@ant-design/icons'


const CartCard = ({ el, index }) => {

  const { cartData, setCartData } = useContext(Store)

  const changeQty = (operator) => {
    const tempCart = [...cartData]
    const indexCart = tempCart.findIndex(item => item.id === el.id)
    if (operator === "add") {
      tempCart[indexCart].qty = tempCart[indexCart].qty + 1
      setCartData(tempCart)
    }
    else if (operator === "dec" && el.qty === 1) {
      setCartData(cartData.filter((e) => e.id !== el.id))
    }
    else {
      tempCart[indexCart].qty = tempCart[indexCart].qty - 1
      setCartData(tempCart)
    }
  }

  const deleteProduct = () => {
    setCartData(cartData.filter((e) => e.id !== el.id))
  }

  return (
    <>
      <div key={index} className='cart-container'>
        <div><img src={el.image} width='80px' height='100px' alt='not found' /></div>
        <div className='cart-content'>
          <h5>{el.title}</h5>
          <p><Rate allowHalf disabled defaultValue={el.rating.rate} /></p>
          <div>
            <Button onClick={() => changeQty("dec")}><MinusOutlined /></Button>
            {el.qty}
            <Button onClick={() => changeQty("add")}><PlusOutlined /></Button>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <p>Price : {(el.qty * el.price).toFixed(2)}</p>
          <Button onClick={deleteProduct}>
            <DeleteFilled style={{ color: 'red' }} />
          </Button>
        </div>
      </div>
    </>
  )
}

export default CartCard

