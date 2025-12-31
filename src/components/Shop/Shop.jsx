import React from "react";

const Shop = ({ shop }) => {
  console.log(shop);
  const {name, price, image} = shop;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-2xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
