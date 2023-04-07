import React, { useState,useEffect } from 'react'
import CoverSlide from './CoverSlide/CoverSlide'
import ItemList from './ItemsList/ItemList'
import Support from './Support/Support'

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, [ ]);
  
  const getProduct = async () => {
    const res = await fetch(' https://api.escuelajs.co/api/v1/products?offset=0&limit=60');
    const data = await res.json();
    setProduct(data);
  }
  const getCategory = [...new Set(product.map((elem)=> elem.category.name))]
  console.log(getCategory);
  return (
    <>
      <CoverSlide />
      <Support />
      {getCategory.map((elem, idx) => {
        return <ItemList product={product} category={elem} key={idx} />
     })} 
    </>
  )
}

export default Home