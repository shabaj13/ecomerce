import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerLogo">
          <h2>GrandCanyon</h2>
          <p>© 2022 GrandCanyon.All Rights Reserved</p>
        </div>
    
        <div className="footerAbout footerDetails">
          <h3>ABOUT</h3>
          <ul>
            <li>About Us</li>
            <li>Store Location</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footerlinks footerDetails">
        <h3>USEFULL LINKS</h3>
          <ul>
            <li>Return</li>
            <li>Support Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footerFollow footerDetails">
        <h3>FOLLOW US</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div className="footerSubscribe footerDetails">
          <h3>SUBSCRIBE</h3>
          <p>Get E-mail updates about our latest shop <br/>and special offers.</p>
          <form >
            <input type="email"  placeholder='Enter your email address...'/>
            <button type='submit'>SUBSCRIBE</button>
          </form>   
        </div>
        
      </div>
    </>
  )
}

export default Footer