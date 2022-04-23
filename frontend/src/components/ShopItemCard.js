import React from "react";
import "./ShopItemCard.css";
import { FaRegEye } from "react-icons/fa";

const ShopItemCard = ({ shopItemData }) => {
  return (
    <div className="shop-item--container">
      <div className="shop-item--img-container">
        <img src={shopItemData.mainImage} alt={shopItemData.mainImageAlt} />
      </div>
      <div className="shop-item-info">
        <p className="shop-item-info--name">{shopItemData.name}</p>
        <p className="shop-item-info--price">{shopItemData.price}</p>
      </div>
      <div className="shop-item--tooltip">
        <span>CLOSER LOOK</span>
        <FaRegEye />
      </div>
    </div>
  );
};

export default ShopItemCard;
