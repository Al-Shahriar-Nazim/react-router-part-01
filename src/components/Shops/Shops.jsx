import React, { use } from "react";
import Shop from "../Shop/Shop";

const Shops = ({ shopPromised }) => {
  const shops = use(shopPromised);
  console.log(shops);
  return (
    <div className="m-5">
      <h3>MyShop Total products:{shops.length}</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-6">
        {
            shops.map(shop=><Shop key={shop.id} shop={shop}></Shop>)
        }
      </div>
    </div>
  );
};

export default Shops;
