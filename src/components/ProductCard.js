import React,{useContext} from 'react'
import './card.css'
import TextRating from './Rating'
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { store } from '../context/cartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = ({id,data}) => {

    const {cartData,setCartData} = useContext(store)

    const notify = ()=> toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      theme: "colored",
      });

    const addCart = () => {
        setCartData([...cartData,data])
        notify()
    }


  return (
    

    <div className='cardContainer' key={id}>
      <div>
        <div className='card-image'>
            <img src={data.image} width='200px' alt='404 not found'/>
        </div>
        <h4>{data.title}</h4>
        <p>{data.description.slice(0,100)+"..."}</p>
        <div>
            <p><span>price: $ </span>{data.price}</p>
            <p style={{display:'flex',justifyContent:'space-between'}}><span>Rating :</span> <TextRating count={data.rating.rate}/></p>
            <p><span>reviews: </span>{data.rating.count}</p>
        </div>
      </div>  
        <div style={{marginTop: 'auto'}}>
        <Button style={{width:'100%'}} variant="contained" startIcon={ <ShoppingCartCheckoutIcon />} onClick={addCart}>ADD TO CART</Button>
        </div>
        <ToastContainer/>
    </div>
    
  )
}

export default ProductCard