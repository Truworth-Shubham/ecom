import React, { useContext, useState, useEffect } from 'react'
import '../css/card.css'
import { Store } from '../context/cartContext'
import { Button, Rate, message } from 'antd'
import { PlusOutlined, MinusOutlined, DeleteFilled } from '@ant-design/icons'


const ProductCard = ({ id, data }) => {

  const { cartData, setCartData } = useContext(Store)
  const [qty, setQty] = useState(1)
  const [btnVisible, setBtnVisible] = useState(false)

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (cartData.find((e) => e.id == data.id)) {
      setBtnVisible(true)
    }
    productQty()
  }, [qty])

  const addCart = () => {
    setCartData([...cartData, data])
    setBtnVisible(true)
    success()
  }

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'successfully added to cart',
    });
  };

  const handleQuantity = (operator) => {
    const tempCart = [...cartData]
    const indexCart = tempCart.findIndex(item => item.id === data.id)
    if (operator === "add") {
      tempCart[indexCart].qty = tempCart[indexCart].qty + 1
      setQty(tempCart[indexCart].qty)
      setCartData(tempCart)
      productQty()
    }
    else if (operator === "dec" && qty == 1) {
      setCartData(cartData.filter((e) => e.id !== data.id))
      setBtnVisible(false)
    }
    else {
      tempCart[indexCart].qty = tempCart[indexCart].qty - 1
      setQty(tempCart[indexCart].qty)
      setCartData(tempCart)
      productQty()
    }
  }

  const productQty = () => {
    cartData.forEach((e) => {
      if (e.id === data.id) {
        setQty(e.qty)
      }
    })
  }

  return (
    <div className='cardContainer' key={id}>
      <div>
        <div className='card-image'>
          <img src={data.image} width='200px' alt='404 not found' />
        </div>
        <h4>{data.title}</h4>
        <p className='productCard-description'>{data.description}</p>
        <div>
          <p><span>Price: $ </span>{data.price}</p>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}><span>Rating :</span>
            <Rate allowHalf defaultValue={data.rating.rate} disabled />
          </p>
          <p><span>Reviews: </span>{data.rating.count}</p>
        </div>
      </div>
      {
        btnVisible ?
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
            <div>${(data.price * qty).toFixed(2)}</div>
            <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
              <Button onClick={() => handleQuantity("dec")}>{qty > 1 ? <MinusOutlined /> : <DeleteFilled />}</Button>
              <span>&nbsp;{qty}&nbsp;</span>
              <Button onClick={() => handleQuantity("add")}><PlusOutlined /></Button>
            </div>
          </div>
          :
          <Button type='primary' onClick={addCart} block>
            ADD TO CART
          </Button>
      }
      {contextHolder}
    </div>

  )
}

export default ProductCard