import React from "react";
import ShopItemCard from "./ShopItemCard";

const FeaturedItems = ({ featuredItemsList }) => {
  return (
    <div className="featured-items--container">
      <div className="featured-items--list">
        {featuredItemsList.map((item) => (
          <ShopItemCard shopItemData={item} />
        ))}
      </div>
      <button className="featured-items--btn-left"></button>
      <button className="featured-items--btn-right"></button>
    </div>
  );
};

export default FeaturedItems;
