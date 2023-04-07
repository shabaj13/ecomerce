import React, { useState } from 'react'
import './coverSlide.css'
import { GrNext, GrPrevious } from "react-icons/gr";
import SlideData from "./SlideData";
import {Link} from "react-router-dom";
const CoverSlide = () => {
  const [slide, setSlide] = useState(0)
  let year = new Date().getFullYear();
  const slides = SlideData;
  const slideLength = slides.length;

  const nextSlide = () => {
    setSlide(slide === slideLength - 1? 0 : slide + 1)
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slideLength - 1 : slide - 1)
  }

  setTimeout(() => { 
    setSlide(slide === slideLength - 1? 0 : slide + 1)
  },5000)


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="coverSlide">
        <GrPrevious className='slidePrevBtn' onClick={prevSlide}/>
        {
          slides.map((elem, idx) => {
            const { image, text } = elem;
            return (
              idx === slide && (
                <div className="slideContent" key={idx} >
                  <div className="slideContentLeft">
                    <p  data-aos="fade-up" data-aos-duration="800">Smart Products</p>
                    <h1  data-aos="fade-up" data-aos-duration="1000">{text} <br />{year} Collection</h1>
                    <Link to="/fashion"><button  data-aos="fade-up" data-aos-duration="1200">SHOP NOW</button></Link>
                  </div>
                  <div className="slideContentRight">
                    <img src={image} alt="Offer Image"  data-aos="fade-up" data-aos-duration="1200" />
                  </div>
                </div>)
          )
          })
        }
        <GrNext className='slideNextBtn' onClick={nextSlide}/>
      </div>
    </>
  )
}

export default CoverSlide