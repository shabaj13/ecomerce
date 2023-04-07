import React from 'react'
import './cart.css'
import { FcOk } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { delCart } from '../../Redux/Action/Action';
import { Link } from 'react-router-dom';

const Cart = () => {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch();
  const handleClose = (cart) => {
    dispatch(delCart(cart));
  }

  const cartItem = (cartItem) => {
    return (
      <>
       
              <div className="cartItems" key={cartItem.id}>
              <div className="cartItemImageDiv">
                  <img src={cartItem.images} alt={cartItem.title} />
              </div>
              <div className="cartItemDetailDiv">
                <Link to={`/fashion/${cartItem.id}`}><h3>{cartItem.title}n</h3></Link>
                <span>In Stock</span>
                <p>Colour: Blue </p>
                    <div className="cartItemQuantity">
                      <label htmlFor="quantity">QTY: </label>
                      <select name="quantity" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                </div>
                <button onClick={()=> handleClose(cartItem)}>Remove</button>
              </div>
              <div className="cartItemPriceDiv">
                    <p>₹{cartItem.price}</p>
              </div>
                </div>  
      </>
    )
  }


  return (
    <>
      <div className="cart">
        <div className="cartContent">
          <div className="cartItemDiv">
            <div className="cartHeading">
              <h1>Shopping Cart</h1>
            </div>

            {state.length === 0 && <div className='emptyCart'>
              <h1>Cart Is Empty!!!</h1>
               <img src="Images/cartEmpty-removebg-preview.png" alt="empty Wishlist" />
            </div>}

            {state.length !== 0 && state.map(cartItem)}        
          </div>

          <div className="subTotalDiv">
            {state.length === 0 ? <h4>No Item Added</h4> :
             <> <span><FcOk /><p>Your order is eligible for FREE Delivery.</p></span>         
            <h4>Subtotal(1 items): 1,079.00</h4>
            <button>Proceed to Buy</button> </>
            }
            
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart