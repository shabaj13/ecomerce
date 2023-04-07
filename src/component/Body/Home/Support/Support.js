import React from 'react'
import "./support.css"
import  SupportData from "./SupportData"
const Support = () => {
  return (
    <>
      <div className="support">
        {
          SupportData.map((elem, idx) => {
            const { title, description, image } = elem;
          return  <div className="supportContent">
          <div className="iconDiv">
            <img src={image} alt="Support_Image" />
          </div>
          <div className="detailDiv">
              <p>{title}</p>
              <span>{description}</span>
          </div>
        </div>
          })
        }   
      </div>
      
    </>
  )
}

export default Support