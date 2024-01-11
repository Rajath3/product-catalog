import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductTableContent from './ProductTableContent'

const Product = () => {
  const {productId} = useParams()
  
  const data = useSelector((store) => store.product.items)
  const product = data.filter((val) => parseInt(val.ID) === parseInt(productId))

  return (
   <ProductTableContent data={product}/>
  )
}

export default Product