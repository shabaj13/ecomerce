import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import { MdOutlineAccountCircle,MdAddShoppingCart } from "react-icons/md";
 import {BiHeart} from "react-icons/bi";
import {useSelector} from "react-redux";
const Header = () => {
  const state = useSelector((state) => state.handleCart)
  const Wishstate = useSelector((state) => state.handleWishlist)
  return (
    <>
      <div className="header">
        <div className="headerContent">
        <div className="headerLogo">
          <NavLink to='/home'><span className='logo'>GrandCanyon</span></NavLink>
        </div>
        <div className="headerMenu">
          <input type='search' placeholder='Search....'/>
            <NavLink to='/fashion' className='menuOpt fashionOpt'>Fashion</NavLink>
            <NavLink to='/fashion'  className='menuOpt shopOpt'> Shop</NavLink>
        </div>
        <div className="buyDetails">
            <NavLink to='/profile' className='accountOpt'><MdOutlineAccountCircle className='buyIcons' title='Account' /></NavLink>
          <NavLink to='/wishlist'><BiHeart className='buyIcons' title='Wishlists'/><span>{Wishstate.length === 0 ? " ": `${Wishstate.length}`}</span></NavLink>
            <NavLink to='/cart'><MdAddShoppingCart className='buyIcons' title='Cart' /><span>{state.length === 0 ? " ": `${state.length}`}</span></NavLink>
          </div>
          </div>
      </div>
    </>
  )
}

export default Header