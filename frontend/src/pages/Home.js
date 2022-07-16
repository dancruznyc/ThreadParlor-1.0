import React from "react";
import Carousel from "../components/Carousel";
import NewsLetter from "../components/NewsLetter";
import ShopItemCard from "../components/ShopItemCard";
import FeaturedItems from "../components/FeaturedItems";
import "./Home.css";

const Home = () => {
  let mockup = {
    mainImage:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    name: "705 Black Tee",
    mainImageAlt: "black tee",
    price: "$29.99",
  };
  return (
    <div className="home--container">
      <Carousel />
      <FeaturedItems featuredItemsList={[]} />

      <NewsLetter />
    </div>
  );
};

export default Home;
