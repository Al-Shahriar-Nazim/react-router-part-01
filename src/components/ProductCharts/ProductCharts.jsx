import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
const allProducts = [
  { name: "Wireless Headphones", price: 2499 },
  { name: "Smart Watch", price: 3999 },
  { name: "Sports Shoes", price: 3299 },
  { name: "Backpack", price: 1599 },
  { name: "Laptop", price: 65000 },
  { name: "T-Shirt", price: 799 },
  { name: "Sunglasses", price: 1299 },
  { name: "Bluetooth Speaker", price: 2199 },
  { name: "Gaming Keyboard", price: 2999 },
  { name: "Water Bottle", price: 499 },
];

const ProductCharts = () => {
  return (
    <div>
      <h3 className="text-3xl m-5">Product prices charts</h3>
      <LineChart width={1000} height={500} data={allProducts}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="price" stroke="crimson"></Line>
      </LineChart>
    </div>
  );
};

export default ProductCharts;
