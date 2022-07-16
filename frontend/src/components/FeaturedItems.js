import React from "react";
import ShopItemCard from "./ShopItemCard";
import "./FeaturedItems.css";

const featuredItemsArray = [
  {
    mainImage:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    name: "705 Black Tee",
    mainImageAlt: "black tee",
    price: "$29.99",
  },
  {
    mainImage:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    name: "705 Black Tee",
    mainImageAlt: "black tee",
    price: "$29.99",
  },
  {
    mainImage:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    name: "705 Black Tee",
    mainImageAlt: "black tee",
    price: "$29.99",
  },
  {
    mainImage:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    name: "705 Black Tee",
    mainImageAlt: "black tee",
    price: "$29.99",
  },
  {
    mainImage:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    name: "705 Black Tee",
    mainImageAlt: "black tee",
    price: "$29.99",
  },
];

const FeaturedItems = ({ featuredItemsList }) => {
  return (
    <div className="featured-items--container">
      <h2 className="featured-items--title">Featured Items</h2>
      <div className="featured-items--list">
        {featuredItemsArray.map((item) => (
          <ShopItemCard shopItemData={item} />
        ))}
      </div>
      <button className="featured-items--btn-left"></button>
      <button className="featured-items--btn-right"></button>
    </div>
  );
};

export default FeaturedItems;
