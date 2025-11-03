import React from "react";
import "./NewCollection.css";
import new_collection from "../../Assets/new_collections";
import Items from "../Items/Items";
const NewCollection = () => {
  return (
    <div className="NewCollection">
      <h1>New Collections</h1>
      <hr />
      <div className="Collections">
        {new_collection.map((item, i) => {
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

export default NewCollection;
