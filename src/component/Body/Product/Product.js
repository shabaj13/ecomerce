import React, { useEffect, useState } from 'react'
import './product.css'
import {BsHeartFill,BsHeart,BsStarFill} from "react-icons/bs"
import { useParams } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { addToCart ,addToWish,delCart,delWish} from '../../Redux/Action/Action'
const Product = () => {
  
  const [product, setProduct] = useState([]);
  const [selected, setSelected] = useState(false)
  const [selected2, setSelected2] = useState(false)
  const { id } = useParams();
  
  useEffect(() => {
      const getProducts = async () => {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data = await res.json();
        setProduct(data)
      }
      getProducts();    
  }, [])
  const dispatch = useDispatch();
  return (
    <>
    <div className="product">
        <div className="productDetails">
          <div className="productImgDiv">
            <img src={product.images} alt={product.title} />
          </div>
          <div className="productDetailsDiv">
            <h1>{product.title}</h1>
              <h3>₹{product.price}</h3>
            <span>4.2 <BsStarFill/></span>
            <p>{product.description},Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum perspiciatis ullam accusamus, a assumenda nobis, numquam beatae magni tempora fugit! Neque accusamus asperiores expedita, ratione, autem magni similique soluta, aspernatur delectus minima eius nulla. Quidem ad architecto quo sint.</p>
            <div className="productBtn">
              {!selected ? <button className='productCartBtn' onClick={() => dispatch(addToCart(product), setSelected(true))}>Add To Cart</button> :
                <button className='productCartBtn' onClick={() => dispatch(delCart(product), setSelected(false))}>Remove From Cart</button>}
              
              {!selected2 ? <button className="productWishlistBtn" onClick={() => dispatch(addToWish(product),setSelected2(true))}><BsHeart /></button> : <button className="productWishlistBtn" onClick={() => dispatch(delWish(product),setSelected2(false))}><BsHeartFill/></button>}
            </div>
          </div>
        </div>
        <div className="productAdditionalInfo">

        </div>
      </div>
    </>
  )
}

export default Product