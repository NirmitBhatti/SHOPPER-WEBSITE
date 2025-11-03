import React from "react";
import "./Popular.css";
import data_product from "../../Assets/data";
import Items from "../Items/Items";

const Popular = () => {
  return (
    <div className="Popular">
      <h1>POPULAR IN WOMAN</h1>
      <hr />
      <div className="Popular-Item">
        {data_product.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
