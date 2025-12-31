import React from "react";
import { MdGppGood } from "react-icons/md";

const Shop = ({ shop }) => {
  console.log(shop);
  const {name, price, image,description,features,currency} = shop;
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
          {description}
          </p>
         <p>
            Features :
            <br />
            <span>
                {
                    features.map(feature =><p className="flex items-center gap-x-2"><MdGppGood></MdGppGood>{feature}</p>)
                }
            </span>
         </p>
          <b>Price :{price} {currency}</b>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
