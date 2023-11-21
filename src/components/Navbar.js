import { useContext } from 'react';
import '../css/nav.css'
import { Link } from 'react-router-dom';
import { Store } from '../context/cartContext';
import { ShoppingFilled, ShoppingCartOutlined } from '@ant-design/icons';

export default function Navbar() {

  const { cartData } = useContext(Store)

  return (
    <>
      <div className='nav-conatiner'>
        <Link to='/'>
          <div><ShoppingFilled /> My Shop</div>
        </Link>
        <Link to="/cart">
          <div>
            Cart
            <span className='cart-icon'>
              <ShoppingCartOutlined />
              {
                cartData.length > 0 ?
                  <span className='cart-qty-span' >{cartData.length}</span>
                  :
                  ""
              }
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}