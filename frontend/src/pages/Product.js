import React from "react";
import "./Product.css";

const Product = ({ shopItemData }) => {
  let mockup = {
    mainImage:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
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
            <label>Color</label>
            <input type="radio" name="color" id="black" value="black" />
            <label for="black">Black</label>
            <input type="radio" name="color" id="white" value="white" />
            <label for="white">White</label>
            <div className="product--options">
              <label>Size</label>
              <input type="radio" name="size" id="small" value="s" />
              <label for="small">S</label>
              <input type="radio" name="size" id="medium" value="m" />
              <label for="medium">M</label>
              <input type="radio" name="size" id="large" value="l" />
              <label for="large">L</label>
              <input type="radio" name="size" id="xlarge" value="xl" />
              <label for="xlarge">XL</label>
              <input type="radio" name="size" id="xxlarge" value="xxl" />
              <label for="xxlarge">XXL</label>
            </div>
            <div className="product--quantity">
              <button>-</button>
              <input type="number" />
              <button>+</button>
            </div>
            <div className="product--form-btns">
              <button type="submit">Add to Cart</button>
              <button type="button">But it now</button>
            </div>
          </form>
        </div>
      </section>
      <div className="product--thumbnails"></div>
    </div>
  );
};

export default Product;
