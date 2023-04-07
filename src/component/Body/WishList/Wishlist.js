import React from 'react'
import './wishlist.css'
import { MdStar } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { delWish } from '../../Redux/Action/Action';

const Wishlist = () => {
  const state = useSelector((state) => state.handleWishlist)
  const dispatch = useDispatch();
  const handleClose = (wish) => {
    dispatch(delWish(wish));
  }
  
  const wishItem = (wishItem) => {
    return (
      <div className="wishlistContent">
          <div className="wishlistImageDiv">
            <img src={wishItem.images} alt={wishItem.title} />
          </div>
          <div className="wishlistDetails">
          <h3>{ wishItem.title}</h3>
          <span>3.5 <MdStar /></span>
          <h5>{wishItem.description}</h5>
          <p>₹{wishItem.price}</p>
          </div>
        <div className="wishlistButton">
         <button className='removewishlist' onClick={()=>handleClose(wishItem)}><BiTrash/></button>
        </div>
        </div>
    )
  }



  return (
    <>
      <div className="wishlist">
        <div className="wishlistHeading">
          <h1>My Wishlist</h1>
        </div>
        {state.length === 0 && <div className="emptyWish">
          <h1>Wishlist Is Empty!!!</h1>
          <img src="Images/emptyWish-removebg-preview.png" alt="emptyWishlist" />
        </div>}
         {state.length !== 0 && state.map(wishItem)}   
    </div>
    </>
  )
}

export default Wishlist