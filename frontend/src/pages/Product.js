import React from "react";
import "./Product.css";
import { useParams } from "react-router-dom";

const Product = ({ shopItemData }) => {
  let mockup = {
    mainImage:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    allImages: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
      "https://yoobe.co/wp-content/uploads/2020/05/T-SHIRT-mask-transparent_mockup_Back_Mens_Black.png",
      "https://as1.ftcdn.net/v2/jpg/04/30/10/76/1000_F_430107645_595sj4syUqEnTi2aL21kpl3RgsKyPsDL.jpg",
    ],
    name: "705 Black Tee",
    mainImageAlt: "black tee",
    price: "$29.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };
  return (
    <div className="product--container">
      <section className="product--content">
        <div className="product--image">
          <img src={mockup.mainImage}></img>
        </div>
        <div className="product--info">
          <div className="product--info-text">
            <h3>{mockup.name}</h3>
            <p>{mockup.price}</p>
            <p>{mockup.description}</p>
          </div>
          <form className="product--form">
            <div className="product--color">
              <label>Color</label>
              <input type="radio" name="color" id="black" value="black" />
              <label htmlFor="black">Black</label>
              <input type="radio" name="color" id="white" value="white" />
              <label htmlFor="white">White</label>
            </div>
            <div className="product--sizes">
              <label className="">Size:</label>

              <input type="radio" name="size" id="small" value="s" />
              <label htmlFor="small">S</label>
              <input type="radio" name="size" id="medium" value="m" />
              <label htmlFor="medium">M</label>
              <input type="radio" name="size" id="large" value="l" />
              <label htmlFor="large">L</label>
              <input type="radio" name="size" id="xlarge" value="xl" />
              <label htmlFor="xlarge">XL</label>
              <input type="radio" name="size" id="xxlarge" value="xxl" />
              <label htmlFor="xxlarge">XXL</label>
            </div>
            <div className="product--quantity">
              <button type="button">-</button>
              <input type="number" />
              <button type="button">+</button>
            </div>
            <div className="product--form-btns">
              <button type="submit">Add to Cart</button>
              <button type="button">But it now</button>
            </div>
          </form>
          <div className="product--categories"></div>
          <ul className="product--details"></ul>
        </div>
      </section>
      <div className="product--thumbnails">
        {mockup.allImages.map((image, i) => (
          <div className="product--thumbnail">
            <img key={i} src={image}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
