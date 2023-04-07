import React, { useEffect, useState } from 'react'
import { BsStar } from "react-icons/bs";
import {Link} from "react-router-dom";
import './fashion.css'
const Fashion = () => {
  const [product, setProduct] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("lowToHigh");

  useEffect(() => {
    getProduct();
  }, []);
  
  const getProduct = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await res.json();
    setProduct(data);
  }

  //category filter
  const filterProduct = (cat) => {
    const updateFilter = product.filter((elem) => elem.category.name === cat);
    setProduct(updateFilter);

  }

// sorting
  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
  };
  product.sort((a, b) => {
    if (selectedSortOption === "LowtoHigh") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
 
  return (
    <>
      <div className="fashion">
        <div className="fashionHeading">
          <h1>Fashion Shop</h1>
        </div>
        <div className="fashionContentDiv">
          <div className="fashionCategoryDiv">
            
            <div className="categoryBtn" >  
                  <button onClick={()=>{setProduct(product)}}>All Categories</button>
            </div>
            <div className="categoryBtn" >  
                  <button onClick={()=>{filterProduct("Clothes")}}>Clothes</button>
            </div>
            <div className="categoryBtn" >  
                  <button onClick={()=>{filterProduct("Shoes")}}>Shoes</button>
            </div>
            <div className="categoryBtn" >  
                  <button onClick={()=>{filterProduct("Electronics")}}>Electronics</button>
            </div>
            <div className="categoryBtn" >  
                  <button onClick={()=>{filterProduct("Furniture")}}>Furniture</button>
            </div>
            <div className="categoryBtn" >  
                  <button onClick={()=>{filterProduct("merienda")}}>merienda</button>
            </div>
            <div className="categoryBtn" >  
                  <button onClick={()=>{filterProduct("Others")}}>Others</button>
              </div>
          </div>
          <div className="fashionProductsDiv">
            <div className="productsSortDiv">
              <select name="priceSort" value = {selectedSortOption} onChange={handleSortOptionChange} >
                <option value="Default" >Default</option>
                <option value="LowtoHigh">Low to High</option>
                <option value="Hightolow">High to low</option>
              </select>
            </div>
            <div className="productsDiv">
              {product.map((elem,index) => {
                return <div className="products" key={index} data-aos="fade-up" data-aos-duration="120" data-aos-once="true">
                  <div className="productsImg">
                  <Link to={`/fashion/${elem.id}`}><img src={elem.images} alt={elem.title} /></Link>
                </div>
                  <div className="productsDetails">
                    <Link to={`/fashion/${elem.id}`}><h4>{elem.title}</h4></Link> 
                  <span>3.9<BsStar /></span>
                    <h5>₹{elem.price}</h5>
                  <p>Get it by <b>tomorrow, August 27</b><br/>
                    FREE Delivery by Amazon</p>
                </div>
              </div>
              })}
              
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Fashion