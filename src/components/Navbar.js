import { useContext, useState } from 'react';
import '../css/navbar.css'
import { Link } from 'react-router-dom';
import { Store } from '../context/AppContext';
import { ShoppingFilled, ShoppingCartOutlined } from '@ant-design/icons';

export default function Navbar() {

  const { cartData } = useContext(Store)
  const [cartBtn, setCartBtn] = useState(true)

  return (
    <>
      <div className='nav-conatiner'>
        <Link to='/'>
          <div onClick={() => setCartBtn(true)}><ShoppingFilled />
           My Shop
          </div>
        </Link>
        {
          cartBtn ?
            <Link to="/cart">
              <div onClick={() => setCartBtn(false)}>
                Cart
                <span className='cart-icon'>
                  <ShoppingCartOutlined />
                  {
                    cartData.length > 0
                      ?
                      <span className='cart-qty-span' >{cartData.length}</span>
                      :
                      ""
                  }
                </span>
              </div>
            </Link>
            :
            ""
        }
      </div>
    </>
  );
}