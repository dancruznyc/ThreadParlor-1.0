import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  function newsletterSignup(e) {
    e.preventDefault();
    console.log(e.target.value);
    e.target.reset();
  }
  return (
    <section className="newsletter--container">
      <p>Subscribe for 10% off your first order.</p>
      <form onSubmit={newsletterSignup} className="newsletter--form">
        <label>EMAIL</label>
        <input type="email" placeholder="Enter email here" />
        <button type="submit">SIGN UP</button>
      </form>
    </section>
  );
};

export default NewsLetter;
