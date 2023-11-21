import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import { Spin } from 'antd'
import ProductCard from '../components/ProductCard'

const Products = () => {

    const productsData = useFetch('https://fakestoreapi.com/products')
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [productsData])

    const fetchData = async () => {
        productsData.forEach((e) => {
            e.qty = 1
        })
        setData(productsData)
    }

    return (
        <>
            {
                data.length > 0 ?
                    <div className='main-container'>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {
                                data && data.map((el, index) => {
                                    return (
                                        <ProductCard id={index} data={el} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <div className='productPage-loader'>
                        <div sx={{ display: 'flex' }}>
                            <Spin size="large"></Spin>
                        </div>
                    </div>
            }
        </>
    )
}

export default Products
