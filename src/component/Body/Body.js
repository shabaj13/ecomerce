import React from 'react'
import Cart from './Cart/Cart'
import Home from './Home/Home'
import Profile from "./Profile/Profile"
import Wishlist from "./WishList/Wishlist"
import {Routes , Route} from "react-router-dom"
import Fashion from './Fashion/Fashion'
import ManageAddress from './Profile/ManageAddress/ManageAddress'
import PersonalInfo from './Profile/PersonalInfo/PersonalInfo'
import Product from './Product/Product'


const Body = () => {
  return (
    <>  
      <Routes> 
      <Route  index element={<Home /> }/> 
        <Route  path='/home' element={<Home /> }/>    
        <Route  path='profile' element={<Profile />}>
          <Route path='/profile' element={ <PersonalInfo/>} />
          <Route path='manage_address' element={ <ManageAddress/>} />
        </Route>
        <Route  path='/wishlist' element={<Wishlist/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/fashion/:id' element={<Product/>} />
        </Routes>
    </>
  )
}

export default Body