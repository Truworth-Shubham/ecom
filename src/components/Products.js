import React,{useEffect,useState} from 'react'
import useFetch from '../hooks/useFetch';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ProductCard from './ProductCard'


const Products = () => {

    const productsData =  useFetch('https://fakestoreapi.com/products')

    const [data,setData] = useState([])
    useEffect(()=>{
        fetchData()
    },[productsData])
    
    const fetchData = async () => {
 
        productsData.forEach((e)=>{
            e.qty=1
        })
        setData(productsData)
    }  
 

    if(data.length > 0){
        return (
            <>
            <div className='main-container'>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            {
                data && data.map((el,index)=>{
                    return (
                        <ProductCard id={index} data = {el}/>
                        // <h3 key={index}>{el.title}</h3>
                    )
                })
            }
            </div>
            </div>
            </>
          )
    }
    else{
        return (
            <div className='productPage-loader'>
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
            </div>
          );
    }
   
}

export default Products
/*
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  
}

*/