import React from 'react'
import { Link } from 'react-router-dom'
import './ItemList.css'
const ItemList = ({ product, category }) => {
  const filter = product.filter((elem)=> elem.category.name === category)
  return (
    <>
      <div className="itemContainer" id={category}>
        <div className="itemHeading">
          <h1>{category}</h1>
          <button>View All</button>
        </div>
        <div className="itemCardDiv">
        {filter.map((curElem) => {
          return <div className="itemCardContent" data-aos="fade-up" data-aos-duration="120">
          <div className="itemCard">
            <div className="cardImg">
            <Link to={`/fashion/${curElem.id}`}><img src={curElem.images} alt={curElem.title} /></Link>
            </div>
            <div className="cardDetail">
             <Link to={`/fashion/${curElem.id}`}><h4>{curElem.title}</h4></Link> 
              <span>Upto 70% off</span>
              <p>Shoe,Footwear,Sneaker</p>
            </div>
              </div>
              </div>
       
        })}
        </div>
      </div>
    </>
  )
}

export default ItemList