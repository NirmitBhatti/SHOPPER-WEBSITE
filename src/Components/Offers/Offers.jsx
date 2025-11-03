import React from 'react'
import "./Offers.css";
import exclusive_image from "../../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className='Offers'>
          <div className='Offers-Left'>
              <h1>Exclusive</h1>
              <h1>Offers For You</h1>
              <p>ONLY ON BESTSELLER'S PRODUCTS</p> 
              <button>Check Now</button>
          </div>
          <div className='Offers-Rigit'>
              <img src={exclusive_image} alt="" />
          </div>
    </div>
  )
}

export default Offers
