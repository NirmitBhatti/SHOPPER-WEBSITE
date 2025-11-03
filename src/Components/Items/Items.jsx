import React from 'react'
import "./Item.css";
const Items = (props) => {
  return (
    <div className="Item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="Item-Prices">
        <div className="Item-Price-New">${props.new_price}</div>
        <div className="Item-Price-Old">${props.old_price}</div>
      </div>
    </div>
  );
}

export default Items
