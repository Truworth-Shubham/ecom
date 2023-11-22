import React, { useContext } from 'react'
import { Store } from '../context/AppContext'
import { ShoppingFilled } from '@ant-design/icons';
import '../css/cartCard.css'
import CartCard from '../components/CartProduct';

const Cart = () => {

  const { cartData } = useContext(Store)

  let totalPrice = 0

  cartData.forEach((element) => {
    totalPrice += element.qty * element.price
  })

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
                {totalPrice.toFixed(2)}
              </div>
            </div>
          </div>
          :
          <div className='productPage-loader'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ShoppingFilled style={{ fontSize: '3rem', display: 'block', textAlign: 'center', color: '#61dafb' }} />
              <h3>Cart is empty</h3>
            </div>
          </div>
      }
    </>
  )
}

export default Cart