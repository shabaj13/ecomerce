import React from 'react'
import './fashionDropDown.css'
const FashionDropDown = () => {
  return (
    <>
      <div className="fashsionDD">
        <div className="dropDown">
          <h2>Men's Fashion</h2>
          <ul>
            <li>Men Shirt</li>
            <li>Men T-Shirt</li>
            <li>Men Jeans</li>
            <li>Men Pants</li>
            <li>Men Footwear</li>
            <li>Men Watch</li>
            <li>Men Accessories</li>
          </ul>
        </div>
        <div className="dropDown">
        <h2>Women's Fashion</h2>
          <ul>
            <li>Women Shirt</li>
            <li>Women T-Shirt</li>
            <li>Women Jeans</li>
            <li>Women Pants</li>
            <li>Women Footwear</li>
            <li>Women Watch</li>
            <li>Women Accessories</li>
          </ul>
        </div>
        <div className="dropDown">
        <h2>Kid's Fashion</h2>
          <ul>
            <li>Kid Shirt</li>
            <li>Kid T-Shirt</li>
            <li>Kid Jeans</li>
            <li>Kid Pants</li>
            <li>Kid Footwear</li>
            <li>Kid Accessories</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default FashionDropDown