import React from 'react'
import './shopDropDown.css'
const ShopDropDown = () => {
  return (
    <>
      <div className="shopDD">
        <div className="dropDown">
          <h2>Furniture</h2>
          <ul>
            <li>Table</li>
            <li>Chair</li>
            <li>Sofa</li>
            <li>Bed</li>
          </ul>
        </div>
        <div className="dropDown">
        <h2>Food</h2>
          <ul>
            <li>Fruits</li>
            <li>Vegetables</li>
            <li>Non-Veg</li>
          </ul>
        </div>
        <div className="dropDown">
        <h2>Electronics</h2>
          <ul>
            <li>Laptop</li>
            <li>Mobile</li>
            <li>Headphones</li>
            <li>Accessories</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ShopDropDown